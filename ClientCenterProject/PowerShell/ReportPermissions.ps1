

$tabName = “Permissions Report”;

#Create Table object
$table = New-Object system.Data.DataTable “$tabName”;

#Define Columns
$col1 = New-Object system.Data.DataColumn CLIENT,([string]);
$col2 = New-Object system.Data.DataColumn CLIENTPERMISSIONS,([string]);
$col3 = New-Object system.Data.DataColumn LIBRARY,([string]);
$col4 = New-Object system.Data.DataColumn LIBRARYPERMISSIONS,([string]);
$col5 = New-Object system.Data.DataColumn BU,([string]);
$col6 = New-Object system.Data.DataColumn BUPERMISSIONS,([string]);
$col7 = New-Object system.Data.DataColumn DOCSETS,([string]);
$col8 = New-Object system.Data.DataColumn DOCSETPERMISSIONS,([string]);

#Add the Columns
$table.columns.add($col1);
$table.columns.add($col2);
$table.columns.add($col3);
$table.columns.add($col4);
$table.columns.add($col5);
$table.columns.add($col6);
$table.columns.add($col7);
$table.columns.add($col8);



#Create a row
#$row = $table.NewRow();



#Add the row to the table
#$table.Rows.Add($row);


<#









#Enter data in the row
$row.SITE = “WEB”; 
$row.LIBRARY = “LIB”;
$row.BU = “BU”;
$row.DOCSETS = “DOCSETS";








$tabCsv = $table | export-csv "D:\ECMTemplates\NewClientDeployment\table.csv" -noType 

#>

        
        
        
        
        
        
        #Add SharePoint PowerShell SnapIn if not already added
        if ((Get-PSSnapin "Microsoft.SharePoint.PowerShell" -ErrorAction SilentlyContinue) -eq $null) {
            Add-PSSnapin "Microsoft.SharePoint.PowerShell"
        }

    

        #GET SITE
        $site = Get-SPSite -Identity http://nwkspsdev1:7455/sites/ecmcc;

        #GET PARENT WEB
        $parentWeb = $site.OpenWeb();
    
        #ENTER PATH
        $path = Read-Host 'Enter Site Path. Ex: A+ Creative Solutions - > acs';
        $path = $path.ToLower();

        #GET WEB
        $web = $site.OpenWeb($path);

         #Library Index
         $i = 0;

         #BU Index
         $j = 0;

         #DocSet Index
         $k = 0;

        
        if($web.Url)
        {
            #SITE PERMISSIONS
            $webTitle = $web.Title;


            #Create a row
            $siteRow = $table.NewRow();

            #Add the row to the table
            $table.Rows.Add($siteRow);
            $siteRow.CLIENT = $webTitle;

            

            write-host $webTitle -ForegroundColor Green
            foreach($webRoleAssignment in $web.RoleAssignments)
            {         
                  $webRoleDefinitionBindings = $webRoleAssignment.RoleDefinitionBindings;
                  if($webRoleDefinitionBindings.Name.ToString() -ne "Limited Access")
                  {
                        $webRoleAssignmentName = $webRoleAssignment.Member.Name
                        $sitePermissionsRow = $table.NewRow();
                        $table.Rows.Add($sitePermissionsRow);
                        $sitePermissionsRow.CLIENTPERMISSIONS = $webRoleAssignmentName + " : " + $webRoleDefinitionBindings.Name;

                  }
            }

            #Define Rows and Columns for Input
            $rowCol = $table.Rows;
            $firstRow = $table.Rows[0];

            


            #LIBRARY PERMISSIONS
            #GET DATA SOURCES
            $ccpList = $parentWeb.Lists.TryGetList("Client Center Permissions2");
            $contracts = $web.Lists.TryGetList("Contracts");
            $proposals = $web.Lists.TryGetList("Proposals");


            #write-host "****************************************************************" -ForegroundColor Yellow

            #PROPOSALS
            if($proposals)
            {

                #LIBRARY PERMISSIONS
                $proposalTitle = $proposals.Title.ToUpper();


                #Add Title to First Row
                $firstRow.LIBRARY = $proposalTitle;

               

               #write-host $proposalTitle -ForegroundColor Green
               foreach($proposalRoleAssignment in $proposals.RoleAssignments)
               {
                  


                  $proposalRoleDefinitionBindings = $proposalRoleAssignment.RoleDefinitionBindings;
                  
                  if($proposalRoleDefinitionBindings.Name.ToString() -ne "Limited Access")
                  {
                        #$proposalRoleAssignment.Member.Name
                       
                        $proposalRoleAssignmentName = $proposalRoleAssignment.Member.Name

                        if($i -lt $rowCol.Count)
                        {
                           $rowCol[$i].LIBRARYPERMISSIONS = $proposalRoleAssignmentName + " : " + $proposalRoleDefinitionBindings.Name
                            #write-host $i + " : " $rowCol.Count -ForegroundColor Green

                        }
                        else 
                        {
                            #write-host $i + " : " $rowCol.Count -ForegroundColor Yellow

                            $libraryPermissionsRow = $table.NewRow();
                            $table.Rows.Add($libraryPermissionsRow);
                            $libraryPermissionsRow.LIBRARYPERMISSIONS = $proposalRoleAssignmentName + " : " + $proposalRoleDefinitionBindings.Name

                        }


                       
                        $i++;


                  }


                  
                 
               }

               
               #ITEM PERMISSIONS
                $proposalQuery = New-Object Microsoft.SharePoint.SPQuery;
                $proposalQuery.ViewXml = "<View Scope='RecursiveAll'/>";
                $proposalItems = $proposals.GetItems($proposalQuery);

               

                foreach($proposalItem in $proposalItems)
                {
                    
                    #Get File Type
                    $file = $proposalItem.File;


                    if(!$file)
                    {
                        $progId = $proposalItem.ProgId; #this checks for DocSet
                        $folder = $proposalItem.Folder; #this checks for Folder
                        $libBU = $proposalItem.Folder.Url.Split('/')[1];#item BU
                        $folderName = $folder.Name; #checks folder name


                        #CHECK FOLDERS FOR BU NAMES IN CCPLIST
                        if ($progId -ne "SharePoint.DocumentSet")
                        {
                           #CHECK IF THIS IS A BU FOLDER
                            $checkBUQuery = New-Object Microsoft.SharePoint.SPQuery;
                            $checkBUQuery.Query = "<Where><Eq><FieldRef Name='BU' /><Value Type='Choice'>" + $folderName + "</Value></Eq></Where>";
                            $ccpCollection = $ccpList.GetItems($checkBUQuery);
                            if($ccpCollection.Count -gt 1) {$buCheck = $true} else {$buCheck = $false};
                        }

                        

                        #TARGET BUs
                        if ($progId -ne "SharePoint.DocumentSet" -AND $buCheck)
                        {
                           #Write-Host $folderName ":"  $libBU  -ForegroundColor Green
                           #Write-Host "******"
                           foreach($proposalItemroleAssignment in $proposalItem.RoleAssignments)
                           {
                               $proposalItemRoleDefinitionBindings = $proposalItemroleAssignment.RoleDefinitionBindings;
                               if($proposalItemRoleDefinitionBindings.Name.ToString() -ne "Limited Access")
                               {

                                    $proposalItemroleAssignmentName = $proposalItemroleAssignment.Member.Name
                                    #$proposalItemroleAssignmentName


                                    if($j -lt $rowCol.Count)
                                    {
                                        $rowCol[$j].BU = $libBU
                                        $rowCol[$j].BUPERMISSIONS = $proposalItemroleAssignmentName + " : " + $proposalItemRoleDefinitionBindings.Name
                                        #write-host $j + " : " $rowCol.Count -ForegroundColor Green

                                    }
                                    else 
                                    {
                                        #write-host $j + " : " $rowCol.Count -ForegroundColor Yellow

                                        $buRow = $table.NewRow()
                                        $table.Rows.Add($buRow)
                                        $buRow.BU = $libBU
                                        $buRow.BUPERMISSIONS = $proposalItemroleAssignmentName + " : " + $proposalItemRoleDefinitionBindings.Name

                                    }


                       
                                    $j++;



                               }

                           }

                        }

                        

                        

                        #TARGET DOCSETS
                        if ($progId -eq "SharePoint.DocumentSet")
                        {
                           #Write-Host $folderName ":"  $libBU  -ForegroundColor Green
                           #Write-Host "******"
                           foreach($proposalItemroleAssignment in $proposalItem.RoleAssignments)
                           {
                               $proposalItemRoleDefinitionBindings = $proposalItemroleAssignment.RoleDefinitionBindings;
                               if($proposalItemRoleDefinitionBindings.Name.ToString() -ne "Limited Access")
                               {

                                    $proposalItemroleAssignmentName = $proposalItemroleAssignment.Member.Name
                                    #$proposalItemroleAssignmentName

                                    if($k -lt $rowCol.Count)
                                    {
                                        $rowCol[$k].DOCSETS = $folderName + " : " +  $libBU 
                                        $rowCol[$k].DOCSETPERMISSIONS = $proposalItemroleAssignmentName + " : " + $proposalItemRoleDefinitionBindings.Name
                                        #write-host $k + " : " $rowCol.Count -ForegroundColor Green

                                    }
                                    else 
                                    {
                                        #write-host $k + " : " $rowCol.Count -ForegroundColor Yellow

                                        $buRow = $table.NewRow()
                                        $table.Rows.Add($buRow)
                                        $buRow.DOCSETS = $folderName + " : " +  $libBU
                                        $buRow.DOCSETPERMISSIONS = $proposalItemroleAssignmentName + " : " + $proposalItemRoleDefinitionBindings.Name

                                    }


                       
                                    $k++;





                               }

                           }

                        }
                        
                        

                    }
   
                }

                

            }

               
            #CONTRACTS
            if($contracts)
            {

                #LIBRARY PERMISSIONS
                $contractTitle = $contracts.Title.ToUpper();
                #$contractTitle

                #Add Title to First Row
                $contractRow = $table.NewRow()
                $table.Rows.Add($contractRow)
                $contractRow.LIBRARY = $contractTitle;

                $sp = $k + 1;

               

               #write-host $proposalTitle -ForegroundColor Green
               foreach($contractRoleAssignment in $contracts.RoleAssignments)
               {
                  


                  $contractRoleDefinitionBindings = $contractRoleAssignment.RoleDefinitionBindings;
                  
                  if($contractRoleDefinitionBindings.Name.ToString() -ne "Limited Access")
                  {
                        #$contractRoleAssignment.Member.Name
                       
                        $contractRoleAssignmentName = $contractRoleAssignment.Member.Name

                        if($k -lt $rowCol.Count)
                        {
                            $rowCol[$k].LIBRARYPERMISSIONS = $contractRoleAssignmentName + " : " + $contractRoleDefinitionBindings.Name
                            #write-host $k + " : " $rowCol.Count + " : " + $sp -ForegroundColor Green

                        }
                        else 
                        {
                            #write-host $k + " : " $rowCol.Count -ForegroundColor Yellow

                            $libraryPermissionsRow = $table.NewRow();
                            $table.Rows.Add($libraryPermissionsRow);
                            $libraryPermissionsRow.LIBRARYPERMISSIONS = $contractRoleAssignmentName + " : " + $contractRoleDefinitionBindings.Name

                        }


                       
                        $k++;


                  }


                  
                 
               }

               

               
               
               #ITEM PERMISSIONS
                $contractQuery = New-Object Microsoft.SharePoint.SPQuery;
                $contractQuery.ViewXml = "<View Scope='RecursiveAll'/>";
                $contractItems = $contracts.GetItems($contractQuery);

               
               $k = $sp;#format csv
               $j = $sp;#format csv
                foreach($contractItem in $contractItems)
                {
                    
                    #Get File Type
                    $file = $contractItem.File;


                    if(!$file)
                    {
                        $progId = $contractItem.ProgId; #this checks for DocSet
                        $folder = $contractItem.Folder; #this checks for Folder
                        $libBU = $contractItem.Folder.Url.Split('/')[1];#item BU
                        $folderName = $folder.Name; #checks folder name


                        #CHECK FOLDERS FOR BU NAMES IN CCPLIST
                        if ($progId -ne "SharePoint.DocumentSet")
                        {
                           #CHECK IF THIS IS A BU FOLDER
                            $checkBUQuery = New-Object Microsoft.SharePoint.SPQuery;
                            $checkBUQuery.Query = "<Where><Eq><FieldRef Name='BU' /><Value Type='Choice'>" + $folderName + "</Value></Eq></Where>";
                            $ccpCollection = $ccpList.GetItems($checkBUQuery);
                            if($ccpCollection.Count -gt 1) {$buCheck = $true} else {$buCheck = $false};
                        }

                        

                        #TARGET BUs
                        if ($progId -ne "SharePoint.DocumentSet" -AND $buCheck)
                        {
                           #Write-Host $folderName ":"  $libBU  -ForegroundColor Green
                           #Write-Host "******"

                           
                           foreach($contractItemroleAssignment in $contractItem.RoleAssignments)
                           {
                               $contractItemRoleDefinitionBindings = $contractItemroleAssignment.RoleDefinitionBindings;
                               if($contractItemRoleDefinitionBindings.Name.ToString() -ne "Limited Access")
                               {

                                    $contractItemroleAssignmentName = $contractItemroleAssignment.Member.Name
                                    #$contractItemroleAssignmentName


                                    if($k -lt $rowCol.Count)
                                    {
                                        $rowCol[$k].BU = $libBU
                                        $rowCol[$k].BUPERMISSIONS = $contractItemroleAssignmentName + " : " + $contractItemRoleDefinitionBindings.Name
                                        #write-host $k + " : " $rowCol.Count $sp -ForegroundColor Green

                                    }
                                    else 
                                    {
                                        #write-host $k + " : " $rowCol.Count $sp -ForegroundColor Yellow

                                        $buRow = $table.NewRow()
                                        $table.Rows.Add($buRow)
                                        $buRow.BU = $libBU
                                        $buRow.BUPERMISSIONS = $contractItemroleAssignmentName + " : " + $contractItemRoleDefinitionBindings.Name

                                    }

                                    $k++;



                               }

                           }

                        }

                        

                        #TARGET DOCSETS
                        if ($progId -eq "SharePoint.DocumentSet")
                        {
                           #Write-Host $folderName ":"  $libBU  -ForegroundColor Green
                           #Write-Host "******"
                           
                           
                           foreach($contractItemroleAssignment in $contractItem.RoleAssignments)
                           {
                               $contractItemRoleDefinitionBindings = $contractItemroleAssignment.RoleDefinitionBindings;
                               if($contractItemRoleDefinitionBindings.Name.ToString() -ne "Limited Access")
                               {

                                    $contractItemroleAssignmentName = $contractItemroleAssignment.Member.Name
                                    #$contractItemroleAssignmentName


                                    if($j -lt $rowCol.Count)
                                    {
                                        $rowCol[$j].DOCSETS = $folderName + ":" + $libBU
                                        $rowCol[$j].DOCSETPERMISSIONS = $contractItemroleAssignmentName + " : " + $contractItemRoleDefinitionBindings.Name
                                        write-host $j + " : " $rowCol.Count $sp -ForegroundColor Green

                                    }
                                    else 
                                    {
                                        write-host $j + " : " $rowCol.Count $sp -ForegroundColor Yellow

                                        $buRow = $table.NewRow()
                                        $table.Rows.Add($buRow)
                                        $buRow.DOCSETS = $folderName + ":" + $libBU
                                        $buRow.DOCSETPERMISSIONS = $contractItemroleAssignmentName + " : " + $contractItemRoleDefinitionBindings.Name

                                    }

                                    $j++;

                               }

                           }

                        }
                        
                        
                        

                    }
   
                }

                

            }
           

           
                
        }#web
        else
        {
            write-host "Check Your Inputs Please." -ForegroundColor Red

        }


    #Display the table
    #$table | format-table -AutoSize 
    #CSV Export
    $tabCsv = $table | export-csv "D:\ECMTemplates\NewClientDeployment\table.csv" -noType 



    #Dispose
    $site.Dispose();
    $parentWeb.Dispose();
    $web.Dispose();

    

#Remove-PSSnapin "microsoft.SharePoint.PowerShell"





