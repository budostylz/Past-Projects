using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.SharePoint;

namespace ClientCenterProject
{
    public static class ListPermissions
    {

        public static void SetListPermissions(SPWeb web, SPList ccpList, SPList library, SPListItem eventLogItem)
        {
            try
            {
                /*Break Inheritance and Remove Permissions*/
                BreakInheritanceAndDeletePermissions(web, ccpList, library, eventLogItem);

                /*Set List Queries*/
                List<SPListItemCollection> ccpCol = ListQueries(web, ccpList, library, eventLogItem);//list queries


                /*Grant Permissions*/
                foreach (SPListItemCollection col in ccpCol)
                {
                    foreach (SPListItem ccpItem in col)
                    {

                        GrantPermissions(web, ccpItem, library, eventLogItem);


                    }//foreach (SPListItem ccpItem in col)
                }//foreach (SPListItemCollection col in ccpCol)

                library.Update(); //update Library Permissions

                //Complete
                if (library.Title == "Contracts")
                {
                    eventLogItem["Contracts"] = "Contract Permissions Set for " + web.Title + " : " + web.Url;
                    eventLogItem.Update();
                }
                else if (library.Title == "Proposals")
                {
                    eventLogItem["Proposals"] = "Contract Permissions Set for " + web.Title + " : " + web.Url;
                    eventLogItem.Update();
                }
            }
            catch (Exception e)
            {
                //Log
                if (library.Title == "Contracts")
                {
                    eventLogItem["Contracts"] = e.Message + " at " + web.Title + " : " + web.Url;
                    eventLogItem.Update();
                }
                else if (library.Title == "Proposals")
                {
                    eventLogItem["Proposals"] = e.Message + " at " + web.Title + " : " + web.Url;
                    eventLogItem.Update();
                }
            }
        }//SetListPermissions()

        static void BreakInheritanceAndDeletePermissions(SPWeb web, SPList ccpList, SPList library, SPListItem eventLogItem)
        {
            try
            {

                //Ensure library permissions are broken
                library.BreakRoleInheritance(true);

                //Delete list permissions
                SPRoleAssignmentCollection roleAssignments = library.RoleAssignments;
                for (int i = roleAssignments.Count - 1; i >= 0; i--)
                {
                    library.RoleAssignments.Remove(0);
                }


            }
            catch (Exception e)
            {
                //Log
                if (library.Title == "Contracts")
                {
                    eventLogItem["Contracts"] = e.Message + " at " + web.Title + " : " + web.Url;
                    eventLogItem.Update();
                }
                else if (library.Title == "Proposals")
                {
                    eventLogItem["Proposals"] = e.Message + " at " + web.Title + " : " + web.Url;
                    eventLogItem.Update();
                }
            }
        }//BreakInheritanceAndDeletePermissions()

        static List<SPListItemCollection> ListQueries(SPWeb web, SPList ccpList, SPList library, SPListItem eventLogItem)
        {
            List<SPListItemCollection> ccpCol = new List<SPListItemCollection>();

            try
            {
                string libraryTitle = library.Title;


                SPQuery ccpQuery1 = new SPQuery();//Query Library : Proposals / Contracts
                ccpQuery1.Query = @"<Where><And><Contains><FieldRef Name='Library' /><Value Type='Choice'>" + libraryTitle + "</Value></Contains>"
                    + "<Or><Eq><FieldRef Name='Level' /><Value Type='Choice'>All</Value></Eq><Eq><FieldRef Name='Level' /><Value Type='Choice'>Library</Value></Eq></Or></And></Where>";
                SPListItemCollection ccpCollection1 = ccpList.GetItems(ccpQuery1);

                //Add collections
                ccpCol.Add(ccpCollection1);

                return ccpCol;


            }
            catch (Exception e)
            {
                //Log
                if (library.Title == "Contracts")
                {
                    eventLogItem["Contracts"] = e.Message + " at " + web.Title + " : " + web.Url;
                    eventLogItem.Update();
                }
                else if (library.Title == "Proposals")
                {
                    eventLogItem["Proposals"] = e.Message + " at " + web.Title + " : " + web.Url;
                    eventLogItem.Update();
                }
            }

            return ccpCol;
        }//ListQueries

        static void GrantPermissions(SPWeb web, SPListItem ccpItem, SPList library, SPListItem eventLogItem)
        {

            try
            {


                string userType = (string)ccpItem["UserType"];//user type
                string _user = (string)ccpItem["User"];//user 
                string userValue = new SPFieldUserValue(web, _user).LookupValue;//user value
                string permissionLevel = (string)ccpItem["Permission"];//set permission level
                string level = (string)ccpItem["Level"];//location of where security object applies



                if (userType != null && _user != null)
                {
                    if (userType == "Active Directory")
                    {
                        try
                        {
                            SPUser libAccount = web.EnsureUser(userValue);
                            SPRoleDefinition libRole = web.RoleDefinitions[permissionLevel];
                            SPRoleAssignment libAssignment = new SPRoleAssignment(libAccount);
                            libAssignment.RoleDefinitionBindings.Add(libRole);
                            library.RoleAssignments.Add(libAssignment);
                        }
                        catch (SPException e)
                        {
                            //Log
                            if (library.Title == "Contracts")
                            {
                                eventLogItem["Contracts"] = e.Message + " at " + web.Title + " : " + web.Url;
                                eventLogItem.Update();
                            }
                            else if (library.Title == "Proposals")
                            {
                                eventLogItem["Proposals"] = e.Message + " at " + web.Title + " : " + web.Url;
                                eventLogItem.Update();
                            }
                        }


                    }
                    else if (userType == "SharePoint")
                    {
                        try
                        {
                            SPGroup group = web.SiteGroups[userValue];
                            SPRoleDefinition libRole = web.RoleDefinitions[permissionLevel];
                            SPRoleAssignment libAssignment = new SPRoleAssignment(group);
                            libAssignment.RoleDefinitionBindings.Add(libRole);
                            library.RoleAssignments.Add(libAssignment);
                        }
                        catch (SPException e)
                        {
                            //Log
                            if (library.Title == "Contracts")
                            {
                                eventLogItem["Contracts"] = e.Message + " at " + web.Title + " : " + web.Url;
                                eventLogItem.Update();
                            }
                            else if (library.Title == "Proposals")
                            {
                                eventLogItem["Proposals"] = e.Message + " at " + web.Title + " : " + web.Url;
                                eventLogItem.Update();
                            }
                        }

                    }
                }//(userType != null && _user != null)
                else
                {
                    //Log
                    if (library.Title == "Contracts")
                    {
                        eventLogItem["Contracts"] = "Null UserType and User for Contracts at :  " + web.Title + " : " + web.Url + "Null UserType and User Values.Verify security object is in SharePoint Groups and Active Directory.";
                        eventLogItem.Update();
                    }
                    else if (library.Title == "Proposals")
                    {
                        eventLogItem["Proposals"] = "Null UserType and User for Contracts at :  " + web.Title + " : " + web.Url + "Null UserType and User Values.Verify security object is in SharePoint Groups and Active Directory.";
                        eventLogItem.Update();
                    }
                }


            }
            catch (Exception e)
            {
                //Log
                if (library.Title == "Contracts")
                {
                    eventLogItem["Contracts"] = e.Message + " at " + web.Title + " : " + web.Url;
                }
                else if (library.Title == "Proposals")
                {
                    eventLogItem["Proposals"] = e.Message + " at " + web.Title + " : " + web.Url;
                }
            }


        }//GrantPermissions()
    }//ListPermissions{}
}//CCPrject {}
