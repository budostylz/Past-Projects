

Function SetWebPermissions($web, $ccpList)
{


         #BREAK INHERITANCE
          $web.BreakRoleInheritance($true);
          write-host "Client Inheritance Broken" -ForegroundColor Yellow

          <#

          #DELETE PERMISSIONS
          write-host "Deleting Permissions" -ForegroundColor Yellow
          [Microsoft.SharePoint.SPRoleAssignmentCollection] $roleAssignments = $web.RoleAssignments
          for([int] $i = $roleAssignments.Count-1; $i -ge 0; $i--)
          {
              $roleAssignments.Remove($i);
          }

          #>
  
          


         #GET QUERIES 
         write-host "Setting Queries" -ForegroundColor Yellow
         #Get Queries
         $ccpQuery = New-Object Microsoft.SharePoint.SPQuery;
         $ccpQuery.Query = "<OrderBy><FieldRef Name='Level' Ascending='True' /></OrderBy>";
         $ccpItems = $ccpList.GetItems($ccpQuery);


         #GRANT PERMISSIONS
         write-host "Grant Permissions" -ForegroundColor Yellow
         write-host "Set CCP Values" -ForegroundColor Yellow 
         foreach($ccpItem in $ccpItems)
         {

                #Set CCP Values
                $userType = $ccpItem["UserType"]; #user type
                $user = $ccpItem["User"]; #user 
                $userValue =  New-Object Microsoft.SharePoint.SPFieldUserValue($web, $user)#user value
                $userValue = $userValue.LookupValue;#.LookupValue; 
                $permissionLevel = $ccpItem["Permission"]; #//set permission level
                $level = $ccpItem["Level"];#location of where security object applies


                
                #If security object have 'All' access, assign permission from list. If not, assign 'Read'.
                if ($level -ne "All")
                {
                    
                    $permissionLevel = "Read";
                    #write-host "Assign Read for $userValue" -ForegroundColor Green 
                }
                
                
                if ($userType -eq "Active Directory")
                {
                    

                    write-host "$userType : $permissionLevel for $userValue";
                    [Microsoft.SharePoint.SPUser] $webAccount = $web.EnsureUser($userValue);
                    [Microsoft.SharePoint.SPRoleDefinition] $webRole = $web.RoleDefinitions[$permissionLevel];
                    $webAssignment = New-Object Microsoft.SharePoint.SPRoleAssignment($webAccount);
                    $webAssignment.RoleDefinitionBindings.Add($webRole);
                    $web.RoleAssignments.Add($webAssignment);

                        
                }
                elseif ($userType -eq "SharePoint")
                {
                    write-host "$userType :  $permissionLevel for $userValue";
                    [Microsoft.SharePoint.SPGroup] $group = $web.SiteGroups[$userValue];
                    [Microsoft.SharePoint.SPRoleDefinition] $webRole = $web.RoleDefinitions[$permissionLevel];
                    $webAssignment = New-Object Microsoft.SharePoint.SPRoleAssignment($group);
                    $webAssignment.RoleDefinitionBindings.Add($webRole);
                    $web.RoleAssignments.Add($webAssignment);



                }

        }


        #UPDATE WEB
        $web.Update();


    
}#SetWebPermissions($web, $ccpList)




Export-ModuleMember -Function "SetWebPermissions"