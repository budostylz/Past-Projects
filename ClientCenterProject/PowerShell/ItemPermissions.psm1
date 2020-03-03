

Function SetItemPermissions($web, $ccpList, $item)
{

    #Get File Type
    $file = $item.File;

    ##Only set Folders and DocSets, Files Inherit Permissions from DocSet
    if(!$file)
    {   
        #SET ITEM PROPERTIES
         $folder = $item.Folder; #this checks for Folder
         $folderName = $folder.Name; #checks folder name
         $progId = $item.ProgId; #this checks for DocSet
         $listTitle = $item.ParentList.Title; #List Title
         $libBU = $item.Folder.Url.Split('/')[1];#item BU
         $buCheck = $false; #Check if this is a BU or DocSet 



        #CHECK FOLDERS FOR BU NAMES IN CCPLIST
        if ($progId -ne "SharePoint.DocumentSet")
        {
           #CHECK IF THIS IS A BU FOLDER
            $checkBUQuery = New-Object Microsoft.SharePoint.SPQuery;
            $checkBUQuery.Query = "<Where><Eq><FieldRef Name='BU' /><Value Type='Choice'>" + $folderName + "</Value></Eq></Where>";
            $ccpCollection = $ccpList.GetItems($checkBUQuery);
            if($ccpCollection.Count -gt 1) {$buCheck = $true} else {$buCheck = $false};
        }

        #BUs
        if ($buCheck -And $progId -ne "SharePoint.DocumentSet")
        {
               

                #BREAK INHERITANCE
                 $item.BreakRoleInheritance($true);
                 write-host "BU Inheritance Broken" -ForegroundColor Yellow

                 <#

                 #DELETE PERMISSIONS (Uncomment to Delete Permissions)
                  write-host "Deleting BU Permissions" -ForegroundColor Yellow
                  [Microsoft.SharePoint.SPRoleAssignmentCollection] $roleAssignments = $item.RoleAssignments
                  for([int] $i = $roleAssignments.Count-1; $i -ge 0; $i--)
                  {
                      $roleAssignments.Remove($i);
                  }

                  #>


                  #GET QUERIES
                  write-host "Setting BU Queries" -ForegroundColor Yellow
                  #Apply Globals 
                   $ccpQuery1 = New-Object Microsoft.SharePoint.SPQuery;
                   $ccpQuery1.Query = "<Where><And><Contains><FieldRef Name='Library' /><Value Type='Choice'>" + $listTitle + "</Value></Contains><Eq><FieldRef Name='Level' /><Value Type='Choice'>All</Value></Eq></And></Where>";
                   $ccpItems1 = $ccpList.GetItems($ccpQuery1);
                  #Target All BUs
                   $ccpQuery2 = New-Object Microsoft.SharePoint.SPQuery;
                   $ccpQuery2.Query = "<Where><And><Contains><FieldRef Name='Library' /><Value Type='Choice'>" + $listTitle + "</Value></Contains><And><Eq><FieldRef Name='Level' /><Value Type='Choice'>BU</Value></Eq><Eq><FieldRef Name='BU' /><Value Type='Choice'>All</Value></Eq></And></And></Where></Query>";
                   $ccpItems2 = $ccpList.GetItems($ccpQuery2);
                  #Target Given BU
                   $ccpQuery3 = New-Object Microsoft.SharePoint.SPQuery;
                   $ccpQuery3.Query = "<Where><And><Contains><FieldRef Name='Library' /><Value Type='Choice'>" + $listTitle + "</Value></Contains><And><Eq><FieldRef Name='Level' /><Value Type='Choice'>BU</Value></Eq><Eq><FieldRef Name='BU' /><Value Type='Choice'>" + $folderName + "</Value></Eq></And></And></Where>";
                   $ccpItems3 = $ccpList.GetItems($ccpQuery3);
                  #Set and Add Query Collections
                   $buQueries = New-Object System.Collections.ArrayList;
                   $buQueries.Add($ccpItems1);
                   $buQueries.Add($ccpItems2);
                   $buQueries.Add($ccpItems3);

                   #GRANT PERMISSIONS
                    foreach ($ccpItems in $buQueries)
                    {
                       foreach ($ccpItem in $ccpItems)
                       {
                           #Set CCP Values
                            $userType = $ccpItem["UserType"]; #user type
                            $user = $ccpItem["User"]; #user 
                            $userValue =  New-Object Microsoft.SharePoint.SPFieldUserValue($web, $user)#user value
                            $userValue = $userValue.LookupValue;#.LookupValue; 
                            $permissionLevel = $ccpItem["Permission"]; #//set permission level
                            $level = $ccpItem["Level"];#location of where security object applies

                            if ($userType -eq "Active Directory")
                            {
                                write-host "$userType : $permissionLevel for $userValue";
                                [Microsoft.SharePoint.SPUser] $webAccount = $web.EnsureUser($userValue);
                                [Microsoft.SharePoint.SPRoleDefinition] $webRole = $web.RoleDefinitions[$permissionLevel];
                                $webAssignment = New-Object Microsoft.SharePoint.SPRoleAssignment($webAccount);
                                $webAssignment.RoleDefinitionBindings.Add($webRole);
                                $item.RoleAssignments.Add($webAssignment);                      
                            }
                            elseif ($userType -eq "SharePoint")
                            {
                                write-host "$userType :  $permissionLevel for $userValue";
                                [Microsoft.SharePoint.SPGroup] $group = $web.SiteGroups[$userValue];
                                [Microsoft.SharePoint.SPRoleDefinition] $webRole = $web.RoleDefinitions[$permissionLevel];
                                $webAssignment = New-Object Microsoft.SharePoint.SPRoleAssignment($group);
                                $webAssignment.RoleDefinitionBindings.Add($webRole);
                                $item.RoleAssignments.Add($webAssignment);
                            }

                       }
                    }
                      
              #UPDATE BU ITEM
              $item.Update();

        }
        #DocSets
        elseif ($progId -eq "SharePoint.DocumentSet")
        {      
               #BREAK INHERITANCE
                $item.BreakRoleInheritance($true);
                write-host "DocSet Inheritance Broken" -ForegroundColor Yellow

               <#
               
               #DELETE PERMISSIONS (Uncomment to Delete Permissions)
                write-host "Deleting DocSet Permissions" -ForegroundColor Yellow
                [Microsoft.SharePoint.SPRoleAssignmentCollection] $roleAssignments = $item.RoleAssignments
                for([int] $i = $roleAssignments.Count-1; $i -ge 0; $i--)
                {
                  $roleAssignments.Remove($i);
                }

                #>
                

               #GET QUERIES
                write-host "Setting DocSet Queries" -ForegroundColor Yellow
               #Apply Globals 
                $ccpQuery1 = New-Object Microsoft.SharePoint.SPQuery;
                $ccpQuery1.Query = "<Where><And><Contains><FieldRef Name='Library' /><Value Type='Choice'>" + $listTitle + "</Value></Contains><Eq><FieldRef Name='Level' /><Value Type='Choice'>All</Value></Eq></And></Where>";
                $ccpItems1 = $ccpList.GetItems($ccpQuery1);
               #Target All DocSets within All BUs
                $ccpQuery2 = New-Object Microsoft.SharePoint.SPQuery;
                $ccpQuery2.Query = "<Where><And><Contains><FieldRef Name='Library' /><Value Type='Choice'>" + $listTitle + "</Value></Contains><And><Eq><FieldRef Name='Level' /><Value Type='Choice'>DocSet</Value></Eq><Eq><FieldRef Name='BU' /><Value Type='Choice'>All</Value></Eq></And></And></Where>";
                $ccpItems2 = $ccpList.GetItems($ccpQuery2);
               #Target DocSet within given BU(No Departments)
                $ccpQuery3 = New-Object Microsoft.SharePoint.SPQuery;
                $ccpQuery3.Query = "<Where><And><Contains><FieldRef Name='Library' /><Value Type='Choice'>" + $listTitle + "</Value></Contains><And><Eq><FieldRef Name='Level' /><Value Type='Choice'>DocSet</Value></Eq><And><Eq><FieldRef Name='BU' /><Value Type='Choice'>" + $libBU + "</Value></Eq><Eq><FieldRef Name='Division' /><Value Type='Choice'>None</Value></Eq></And></And></And></Where>";
                $ccpItems3 = $ccpList.GetItems($ccpQuery3);
               #Set and Add Query Collections
                write-host "Adding Queries to Collection" -ForegroundColor Yellow
                $docSetQueries = New-Object System.Collections.ArrayList;
                $docSetQueries.Add($ccpItems1);
                $docSetQueries.Add($ccpItems2);
                $docSetQueries.Add($ccpItems3);


               #Target DocSet within given BU for given Division
               $divisions = $item["Division"];
               foreach ($division in $divisions)
               {
                     #Get division value
                     $divValue = $division.LookupValue; 

                     #Set Division Query
                     $divQuery = New-Object Microsoft.SharePoint.SPQuery;
                     $divQuery.Query = "<Where><And><Contains><FieldRef Name='Library' /><Value Type='Choice'>" + $listTitle + "</Value></Contains><And><Eq><FieldRef Name='Level' /><Value Type='Choice'>DocSet</Value></Eq><And><Eq><FieldRef Name='BU' /><Value Type='Choice'>" + $libBU + "</Value></Eq><Eq><FieldRef Name='Division' /><Value Type='Choice'>" + $divValue + "</Value></Eq></And></And></And></Where>";
                     $globalBUQueryCol = $ccpList.GetItems($divQuery);
                     

                     #Add query to collection
                     if ($globalBUQueryCol.Count -gt 0)
                     {
                        
                          $docSetQueries.Add($globalBUQueryCol);
                     }
                }


                #GRANT PERMISSIONS
                foreach ($ccpItems in $docSetQueries)
                {

                   foreach ($ccpItem in $ccpItems)
                   {
                       #Set CCP Values
                        $userType = $ccpItem["UserType"]; #user type
                        $user = $ccpItem["User"]; #user 
                        $userValue =  New-Object Microsoft.SharePoint.SPFieldUserValue($web, $user)#user value
                        $userValue = $userValue.LookupValue;#.LookupValue; 
                        $permissionLevel = $ccpItem["Permission"]; #//set permission level
                        $level = $ccpItem["Level"];#location of where security object applies


                
                        if ($userType -eq "Active Directory")
                        {
                            write-host "$userType : $permissionLevel for $userValue";
                            [Microsoft.SharePoint.SPUser] $webAccount = $web.EnsureUser($userValue);
                            [Microsoft.SharePoint.SPRoleDefinition] $webRole = $web.RoleDefinitions[$permissionLevel];
                            $webAssignment = New-Object Microsoft.SharePoint.SPRoleAssignment($webAccount);
                            $webAssignment.RoleDefinitionBindings.Add($webRole);
                            $item.RoleAssignments.Add($webAssignment);                      
                        }
                        elseif ($userType -eq "SharePoint")
                        {
                            write-host "$userType :  $permissionLevel for $userValue"; 
                            [Microsoft.SharePoint.SPGroup] $group = $web.SiteGroups[$userValue];
                            [Microsoft.SharePoint.SPRoleDefinition] $webRole = $web.RoleDefinitions[$permissionLevel];
                            $webAssignment = New-Object Microsoft.SharePoint.SPRoleAssignment($group);
                            $webAssignment.RoleDefinitionBindings.Add($webRole);
                            $item.RoleAssignments.Add($webAssignment);
                        }

                   }
                } 
                
                #UPDATE DocSet ITEM
                $item.Update(); 

        }

         

    }

}#SetItemPermissions




Export-ModuleMember -Function "SetItemPermissions"