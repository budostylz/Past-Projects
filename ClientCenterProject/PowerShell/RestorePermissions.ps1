Add-PSSnapin "Microsoft.SharePoint.PowerShell"

#Import-module -name d:\ECMTemplates\NewClientDeployment\SitePermissions.psm1 -Force
Import-module -name d:\ECMTemplates\NewClientDeployment\ListPermissions.psm1 -Force
Import-module -name d:\ECMTemplates\NewClientDeployment\ItemPermissions.psm1 -Force


    


        #User Choice
        $choice = Read-Host 'Enter 1 for Single Client. Enter 2 for All Clients';

        #Choice For Setting Permissions for Individual Client
        if($choice -eq '1')
        {
              #GET SITE
              $site = Get-SPSite -Identity http://nwkspsdev1:7455/sites/ecmcc; #CHANGE PATH HERE

              #GET PARENT WEB
              $parentWeb = $site.OpenWeb();

              #ENTER PATH
              $path = Read-Host 'Enter Site Path. Ex: A+ Creative Solutions - > acs';
              $path = $path.ToLower();

              #GET WEB
              $web = $site.OpenWeb($path);


              if($web.Url)
              {
                  #GET TIME STAMP
                  $date = Get-Date -Format g
                  write-host "START TIME: " $date -ForegroundColor Green
                  
                  #CLIENT TITLE AND URL
                  $clientTitle = $web.Title;
                  $clientUrl = $web.Url;
                  
                  #GET DATA SOURCES
                  $ccpList = $parentWeb.Lists.TryGetList("Client Center Permissions2");
                  $contracts = $web.Lists.TryGetList("Contracts");
                  $proposals = $web.Lists.TryGetList("Proposals");


                  #SITE PERMISSIONS
                  #write-host "Setting $clientTitle Permissions at $clientUrl" -ForegroundColor Yellow
                  #SetWebPermissions $web $ccpList
                  #write-host "Client Permissions Restored." -ForegroundColor Green


                  #LIBRARY PERMISSIONS
                  if($contracts)
                  {
                     write-host "Setting $clientTitle Contract Permissions at $clientUrl" -ForegroundColor Yellow
                      SetListPermissions $web $ccpList $contracts
                     write-host "$clientTitle Contract Permissions Restored at $clientUrl" -ForegroundColor Green

                  }  
              
                  if($proposals)
                  {
                     write-host "Setting $clientTitle Proposal Permissions at $clientUrl" -ForegroundColor Yellow
                      SetListPermissions $web $ccpList $proposals
                     write-host "$clientTitle Proposal Permissions Restored at $clientUrl" -ForegroundColor Green

                  }

                  #ITEM PERMISSIONS
                    if($contracts)
                    {
                       $contractQuery = New-Object Microsoft.SharePoint.SPQuery;
                       $contractQuery.ViewXml = "<View Scope='RecursiveAll'/>";
                       $contractItems = $contracts.GetItems($contractQuery);
               
                       #Target Contract Item Individually
                       #$contractItem = $contractItems.GetItemByID(1008);
                       #SetItemPermissions $web $ccpList $contractItem

                       write-host "Setting $clientTitle Contract Item Permissions at $clientUrl" -ForegroundColor Yellow
                       foreach($contractItem in $contractItems)
                       {

                         #Set Contract Item Permissions
                         SetItemPermissions $web $ccpList $contractItem

                       }
                       write-host "$clientTitle Contract Permissions Restored at $clientUrl" -ForegroundColor Green


                    }

                    if($proposals)
                    {
                        $proposalQuery = New-Object Microsoft.SharePoint.SPQuery;
                        $proposalQuery.ViewXml = "<View Scope='RecursiveAll'/>";
                        $proposalItems = $proposals.GetItems($proposalQuery);

                        #Target Proposal Item Individually
                        #$proposalItem = $proposalItems.GetItemByID(1389);
                        #SetItemPermissions $web $ccpList $proposalItem
                
                        write-host "Setting $clientTitle Proposal Item Permissions at $clientUrl" -ForegroundColor Yellow
                        foreach($proposalItem in $proposalItems)
                        {
                             #Set Proposals Item Permissions
                             SetItemPermissions $web $ccpList $proposalItem
                        }
                        write-host "$clientTitle Proposal Permissions Restored at $clientUrl" -ForegroundColor Green

                    }

                  #GET TIME STAMP
                  $date = Get-Date -Format g
                  write-host "END TIME: " $date -ForegroundColor Green

               
            }#if $web.Url
            else
            {
                write-host "Check Your Inputs Please." -ForegroundColor Red

            }
          

        }
        elseif($choice -eq '2')
        {

             #GET TIME STAMP
             $date = Get-Date -Format g
             write-host "START TIME: " $date -ForegroundColor Green

             #GET SITE
             $site = Get-SPSite -Identity http://nwkspsdev1:7455/sites/ecmcc; #CHANGE PATH HERE

             #GET PARENT WEB
             $parentWeb = $site.OpenWeb();

             #GET CLIENTS
             $webs = $parentWeb.Webs;
             $clientCount = $webs.Count;
             $clientCount 



             foreach($web in $webs)
             {  
                    if($web.Url)
                    {
                          #CLIENT TITLE AND URL
                          $clientTitle = $web.Title;
                          $clientUrl = $web.Url;

                          #GET DATA SOURCES
                          $ccpList = $parentWeb.Lists.TryGetList("Client Center Permissions2");
                          $contracts = $web.Lists.TryGetList("Contracts");
                          $proposals = $web.Lists.TryGetList("Proposals");


                          #SITE PERMISSIONS
                          #write-host "Setting $clientTitle Permissions at $clientUrl" -ForegroundColor Yellow
                          #SetWebPermissions $web $ccpList
                          #write-host "Client Permissions Restored." -ForegroundColor Green


                          #LIBRARY PERMISSIONS
                          if($contracts)
                          {
                             write-host "Setting $clientTitle Contract Permissions at $clientUrl" -ForegroundColor Yellow
                               SetListPermissions $web $ccpList $contracts
                             write-host "$clientTitle Contract Permissions Restored at $clientUrl" -ForegroundColor Green


                          }  
              
                          if($proposals)
                          {
                             write-host "Setting $clientTitle Proposal Permissions at $clientUrl" -ForegroundColor Yellow
                              SetListPermissions $web $ccpList $proposals
                             write-host "$clientTitle Proposal Permissions Restored at $clientUrl" -ForegroundColor Green

                          }



                        #ITEM PERMISSIONS
                        if($contracts)
                        {
                           $contractQuery = New-Object Microsoft.SharePoint.SPQuery;
                           $contractQuery.ViewXml = "<View Scope='RecursiveAll'/>";
                           $contractItems = $contracts.GetItems($contractQuery);
               
                           #Target Contract Item Individually
                           #$contractItem = $contractItems.GetItemByID(1);
                           #SetItemPermissions $web $ccpList $contractItem

                          write-host "Setting $clientTitle Contract Item Permissions at $clientUrl" -ForegroundColor Yellow
                            foreach($contractItem in $contractItems)
                            {
                              #Set Contract Item Permissions
                              SetItemPermissions $web $ccpList $contractItem
                            }
                          write-host "$clientTitle Contract Permissions Restored at $clientUrl" -ForegroundColor Green


                        }

                        if($proposals)
                        {
                            $proposalQuery = New-Object Microsoft.SharePoint.SPQuery;
                            $proposalQuery.ViewXml = "<View Scope='RecursiveAll'/>";
                            $proposalItems = $proposals.GetItems($proposalQuery);

                            #Target Proposal Item Individually
                            #$contractItem = $contractItems.GetItemByID(1);
                            #SetItemPermissions $web $ccpList $contractItem
                
                            write-host "Setting $clientTitle Proposal Item Permissions at $clientUrl" -ForegroundColor Yellow
                             foreach($proposalItem in $proposalItems)
                             {
                                 #Set Proposals Item Permissions
                                 SetItemPermissions $web $ccpList $proposalItem
                             }
                            write-host "$clientTitle Proposal Permissions Restored at $clientUrl" -ForegroundColor Green

                        }
                    }#if $web.Url
                    else
                    {
                        write-host "Check Your Inputs Please." -ForegroundColor Red

                    }
                
             }#foreach($client in $webs)

             
            #GET TIME STAMP
            $date = Get-Date -Format g
            write-host "END TIME: " $date -ForegroundColor Green

        }
        else
        {
            write-host "Check Your Inputs Please." -ForegroundColor Red


        }


    #Dispose
    $site.Dispose();
    $parentWeb.Dispose();
    $web.Dispose();

#Remove-PSSnapin "microsoft.SharePoint.PowerShell"