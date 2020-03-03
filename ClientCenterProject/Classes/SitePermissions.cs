using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.SharePoint;

namespace ClientCenterProject
{
    public static class SitePermissions
    {

        public static void SetWebPermissions(SPWeb web, SPList ccpList, SPListItem eventLogItem)
        {
            try
            {

                /*Break Inheritance and Remove Permissions*/
                BreakInheritanceAndDeletePermissions(web, ccpList, eventLogItem);

                /* Web Queries */
                List<SPListItemCollection> ccpCol = WebQueries(web, ccpList, eventLogItem);//web queries


                /* Grant Permissions */
                foreach (SPListItemCollection col in ccpCol)
                {
                    foreach (SPListItem ccpItem in col)
                    {

                        GrantPermissions(web, ccpItem, eventLogItem);

                    }//foreach
                }//foreach

                web.Update(); //update web

                //Log
                eventLogItem["Site"] = "Client Permissions Set for " + web.Title + " : " + web.Url;
                eventLogItem.Update();
            }
            catch (Exception e)
            {
                //Log
                eventLogItem["Site"] = "Client Permission Error: " + e.Message;
                eventLogItem.Update();
            }
        }

        static void BreakInheritanceAndDeletePermissions(SPWeb web, SPList ccpList, SPListItem eventLogItem)
        {

            try
            {

                //Ensure Web Permissions are broken
                web.BreakRoleInheritance(true);

                //Delete Site Permissions
                SPRoleAssignmentCollection roleAssignments = web.RoleAssignments;
                for (int i = roleAssignments.Count - 1; i >= 0; i--)
                {
                    web.RoleAssignments.Remove(0);
                }

            }
            catch (Exception e)
            {
                //Log
                eventLogItem["Site"] = "Client Permission Error: " + e.Message;
                eventLogItem.Update();
            }

        }//BreakInheritanceAndDeletePermissions

        static List<SPListItemCollection> WebQueries(SPWeb web, SPList ccpList, SPListItem eventLogItem)
        {

            List<SPListItemCollection> ccpCol = new List<SPListItemCollection>();

            try
            {

                SPQuery ccpQuery1 = new SPQuery();
                ccpQuery1.Query = @"<OrderBy><FieldRef Name='Level' Ascending='True' /></OrderBy>";
                SPListItemCollection ccpCollection1 = ccpList.GetItems(ccpQuery1);

                //Add collections
                ccpCol.Add(ccpCollection1);

                return ccpCol;

            }
            catch (Exception e)
            {
                //Log
                eventLogItem["Site"] = "Client Permission Error: " + e.Message;
                eventLogItem.Update();
            }
            return ccpCol;

        }//WebQueries

        static void GrantPermissions(SPWeb web, SPListItem ccpItem, SPListItem eventLogItem)
        {

            try
            {


                string userType = (string)ccpItem["UserType"];//user type
                string _user = (string)ccpItem["User"];//user 
                string userValue = new SPFieldUserValue(web, _user).LookupValue;//user value
                string permissionLevel = (string)ccpItem["Permission"];//set permission level
                string level = (string)ccpItem["Level"];//location of where security object applies

                //If security object have 'All' access, assign permission from list. If not, assign 'Read'.
                if (level != "All")
                {
                    permissionLevel = "Read";
                }


                //Base Permission Level on ccpItem["Permission"]

                if (userType != null && _user != null)
                {
                    if (userType == "Active Directory")
                    {
                        try
                        {
                            SPUser webAccount = web.EnsureUser(userValue);
                            SPRoleDefinition webRole = web.RoleDefinitions[permissionLevel];
                            SPRoleAssignment webAssignment = new SPRoleAssignment(webAccount);
                            webAssignment.RoleDefinitionBindings.Add(webRole);
                            web.RoleAssignments.Add(webAssignment);
                        }
                        catch (SPException e)
                        {
                            //Log
                            eventLogItem["Site"] = "Client Permission Error: " + e.Message;
                            eventLogItem.Update();
                        }


                    }
                    else if (userType == "SharePoint")
                    {
                        try
                        {
                            SPGroup group = web.SiteGroups[userValue];
                            SPRoleDefinition webRole = web.RoleDefinitions[permissionLevel];
                            SPRoleAssignment webAssignment = new SPRoleAssignment(group);
                            webAssignment.RoleDefinitionBindings.Add(webRole);
                            web.RoleAssignments.Add(webAssignment);
                        }
                        catch (SPException e)
                        {
                            //Log
                            eventLogItem["Site"] = "Client Permission Error: " + e.Message;
                            eventLogItem.Update();
                        }

                    }
                }//(userType != null && _user != null)
                else
                {
                    //Inform Null Values
                    eventLogItem["Site"] = "Null UserType and User at :  " + web.Title + " : " + web.Url + "Null UserType and User Values.Verify security object is in SharePoint Groups and Active Directory.";
                    eventLogItem.Update();
                }


            }
            catch (Exception e)
            {

                //Log
                eventLogItem["Site"] = "Client Permission Error: " + e.Message;
                eventLogItem.Update();
            }


        }//GrantPermissions()
    }//SitePermissions{}
}//CCPProject {}
