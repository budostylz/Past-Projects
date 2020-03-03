

Function SetListPermissions($web, $ccpList, $list)
{

         #BREAK INHERITANCE
         $list.BreakRoleInheritance($true);
         write-host "Client Inheritance Broken" -ForegroundColor Yellow

         <#

         #DELETE PERMISSIONS (Uncomment to Delete Permissions)
          write-host "Deleting Permissions" -ForegroundColor Yellow
          [Microsoft.SharePoint.SPRoleAssignmentCollection] $roleAssignments = $list.RoleAssignments
          for([int] $i = $roleAssignments.Count-1; $i -ge 0; $i--)
          {
              $roleAssignments.Remove($i);
          }

          #>
          
  

        
        #GET QUERIES
        write-host "Setting Queries" -ForegroundColor Yellow
        $ccpQuery = New-Object Microsoft.SharePoint.SPQuery;
        $ccpQuery.Query = "<Where><And><Contains><FieldRef Name='Library' /><Value Type='Choice'>" + $list.Title + "</Value></Contains>" +
                    "<Or><Eq><FieldRef Name='Level' /><Value Type='Choice'>All</Value></Eq><Eq><FieldRef Name='Level' /><Value Type='Choice'>Library</Value></Eq></Or></And></Where>";
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


                
                if ($userType -eq "Active Directory")
                {
                    write-host "$userType : $permissionLevel for $userValue"; 
                    [Microsoft.SharePoint.SPUser] $webAccount = $web.EnsureUser($userValue);
                    [Microsoft.SharePoint.SPRoleDefinition] $webRole = $web.RoleDefinitions[$permissionLevel];
                    $webAssignment = New-Object Microsoft.SharePoint.SPRoleAssignment($webAccount);
                    $webAssignment.RoleDefinitionBindings.Add($webRole);
                    $list.RoleAssignments.Add($webAssignment);                      
                }
                elseif ($userType -eq "SharePoint")
                {
                    write-host "$userType :  $permissionLevel for $userValue";
                    [Microsoft.SharePoint.SPGroup] $group = $web.SiteGroups[$userValue];
                    [Microsoft.SharePoint.SPRoleDefinition] $webRole = $web.RoleDefinitions[$permissionLevel];
                    $webAssignment = New-Object Microsoft.SharePoint.SPRoleAssignment($group);
                    $webAssignment.RoleDefinitionBindings.Add($webRole);
                    $list.RoleAssignments.Add($webAssignment);
                }


        }

        #UPDATE LIST
        $list.Update();

}#SetListPermissions




Export-ModuleMember -Function "SetListPermissions"