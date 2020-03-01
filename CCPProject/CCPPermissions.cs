using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using Microsoft.SharePoint;

namespace CCPEvents
{
    public static class CCPPermissions
    {
        // StringBuilder errorLogs = new StringBuilder();

        public static void PermissionEvents(SPItemEventProperties properties)
        {

            using (SPWeb parentWeb = properties.ListItem.Web.ParentWeb)
            {
                using (SPWeb childWeb = properties.ListItem.Web)
                {
                    //Get Data Sources
                    SPList ccpList = parentWeb.Lists.TryGetList("Client Center Permissions");
                    SPList library = childWeb.Lists.TryGetList(properties.List.Title);

                    //Get File Type 
                    SPFile file = properties.ListItem.File; //this checks for a File

                    //List Permissions
                    CheckInheritanceAndDeletePermissions(childWeb, ccpList, list: library);

                    //Item Permissions
                    //Files Inherit Permisisons from DocSets
                    //Only set Folders and DocSets, Files Inherit Permissions from DocSet
                    if (file == null)//check for folders and file types and check out file 
                    {

                        CheckInheritanceAndDeletePermissions(childWeb, ccpList, item: properties.ListItem);


                    }//if (file != null)
                    else
                    {
                        //Log that files inherit permissions from parent
                        //Inherits from DocSet -> Permission Status Field
                    }


                }//using childWeb 
            }//using parentWeb

        }//PermissionEvents()

        //Site and Item Events Share
        public static void CheckInheritanceAndDeletePermissions(SPWeb web, SPList ccpList, SPList list = null, SPListItem item = null)
        {
            try
            {
                if (list != null)
                {

                    //1. Check Inheritance, Set Permissions Only if List Inherits From Site
                    if (!list.HasUniqueRoleAssignments)
                    {
                        //2. Break list permissions
                        list.BreakRoleInheritance(true);

                        // 3. Delete list permissions
                        SPRoleAssignmentCollection roleAssignments = list.RoleAssignments;
                        for (int i = roleAssignments.Count - 1; i >= 0; i--)
                        {
                            list.RoleAssignments.Remove(0);
                        }

                        //Get Queries
                        ListQueries(web, ccpList, list);

                    }//if (!list.HasUniqueRoleAssignments)



                }
                else if (item != null)//Item Event
                {

                    //1. Check Inheritance, Set Permissions Only if Item Inherits From Site
                    if (!item.HasUniqueRoleAssignments)
                    {
                        //2. Break item permissions
                        item.BreakRoleInheritance(true);

                        //3. Remove Item Permissions
                        SPRoleAssignmentCollection roleAssignments = item.RoleAssignments;
                        for (int i = roleAssignments.Count - 1; i >= 0; i--)
                        {
                            item.RoleAssignments.Remove(0);
                        }

                        //Get Queries
                        ItemQueries(web, ccpList, item);



                    }//if (!item.HasUniqueRoleAssignments)


                }
            }
            catch (Exception e)
            {
                //Log to Library
                //Console.WriteLine(e.Message);

            }
        }//CheckInheritanceAndDeletePermissions()

        //Set Queries 
        public static void ListQueries(SPWeb parentWeb, SPList ccpList, SPList library)
        {
            try
            {
                string listTitle = library.Title;

                SPQuery ccpQuery1 = new SPQuery();//Query Library : Proposals / Contracts
                ccpQuery1.Query = "<Where><Or><Eq><FieldRef Name='Library' /><Value Type='Choice'>" + listTitle + ""
                        + "</Value></Eq><Eq><FieldRef Name='Library' />" +
                        "<Value Type='Choice'>Proposals / Contracts</Value></Eq></Or></Where>";
                SPListItemCollection ccpCollection1 = ccpList.GetItems(ccpQuery1);

                //Add collections
                List<SPListItemCollection> ccpCol = new List<SPListItemCollection>();
                ccpCol.Add(ccpCollection1);

                //Set Permissions
                foreach (SPListItemCollection col in ccpCol)
                {
                    foreach (SPListItem ccpItem in col)
                    {
                        //Console.WriteLine(ccpItem.DisplayName);

                        GrantPermissions(parentWeb, ccpItem, list: library);

                    }//foreach (SPListItem ccpItem in col)
                }//foreach (SPListItemCollection col in ccpCol)
            }
            catch (Exception e)
            {
                //Console.WriteLine(e.Message);
            }
        }//ListQueries()

        //Item Queries
        public static void ItemQueries(SPWeb parentWeb, SPList ccpList, SPListItem libItem)
        {
            try
            {
                SPFolder folder = libItem.Folder; //this checks for Folder
                string folderName = folder.Name;//checks folder name
                string progId = libItem.ProgId; //this checks for DocSet
                string listTitle = libItem.ParentList.Title; //List Title
                string libBU = "";

                //Set Permissions for BU Folders
                //Check if item is a Folder, Skip for Docsets and files
                if (folder != null & progId != "SharePoint.DocumentSet")
                {

                    //Check if this is a BU Folder
                    SPQuery checkBU = new SPQuery();//Query Library : All
                    checkBU.Query = " <Where><Eq><FieldRef Name='BU' /><Value Type='Choice'>" + folderName + "</Value></Eq></Where>";
                    SPListItemCollection ccpCollection = ccpList.GetItems(checkBU);

                    //Set libBU for BU folder
                    if (ccpCollection.Count > 1)
                    {
                        libBU = folder.Name;//This folder is a BU
                    }
                    //Set libBU for regular folder
                    else
                    {
                        libBU = (string)libItem["BU"];//This folder is a regular folder
                    }

                }
                //Set Permissions for DocSets
                else if (folder != null & progId == "SharePoint.DocumentSet")
                {
                    Console.WriteLine(true);
                    libBU = (string)libItem["BU"];
                }


                SPQuery ccpQuery1 = new SPQuery();//Query Library : All
                ccpQuery1.Query = "<Where><And><Eq>" +
                    "<FieldRef Name='Library' /><Value Type='Choice'>" + listTitle + "</Value></Eq><Eq>" +
                "<FieldRef Name='BU' /><Value Type='Choice'>All</Value></Eq></And></Where>";
                SPListItemCollection ccpCollection1 = ccpList.GetItems(ccpQuery1);

                SPQuery ccpQuery2 = new SPQuery();//Query Both Libraries : All
                ccpQuery2.Query = "<Where><And><Eq>" +
                    "<FieldRef Name='Library' /><Value Type='Choice'>Proposals / Contracts</Value></Eq><Eq>" +
                "<FieldRef Name='BU' /><Value Type='Choice'>All</Value></Eq></And></Where>";
                SPListItemCollection ccpCollection2 = ccpList.GetItems(ccpQuery2);

                SPQuery ccpQuery3 = new SPQuery();//Query Library : BU
                ccpQuery3.Query = "<Where><And><Eq>" +
                    "<FieldRef Name='Library' /><Value Type='Choice'>" + listTitle + "</Value></Eq><Eq>" +
                "<FieldRef Name='BU' /><Value Type='Choice'>" + libBU + "</Value></Eq></And></Where>";
                SPListItemCollection ccpCollection3 = ccpList.GetItems(ccpQuery3);

                SPQuery ccpQuery4 = new SPQuery();//Query Both Libraries: BU
                ccpQuery4.Query = "<Where><And><Eq>" +
                    "<FieldRef Name='Library' /><Value Type='Choice'>Proposals / Contracts</Value></Eq><Eq>" +
                "<FieldRef Name='BU' /><Value Type='Choice'>" + libBU + "</Value></Eq></And></Where>";
                SPListItemCollection ccpCollection4 = ccpList.GetItems(ccpQuery4);

                //Add collections
                List<SPListItemCollection> ccpCol = new List<SPListItemCollection>();
                ccpCol.Add(ccpCollection1);
                ccpCol.Add(ccpCollection2);
                ccpCol.Add(ccpCollection3);
                ccpCol.Add(ccpCollection4);


                //Set Permissions
                foreach (SPListItemCollection col in ccpCol)
                {
                    foreach (SPListItem ccpItem in col)
                    {
                        //Console.WriteLine(ccpItem.DisplayName);

                        GrantPermissions(parentWeb, ccpItem, item: libItem);

                    }//foreach (SPListItem ccpItem in col)
                }//foreach (SPListItemCollection col in ccpCol)
            }
            catch (Exception e)
            {
                //Console.WriteLine(e.Message);
            }
        }//ItemQueries()

        public static void GrantPermissions(SPWeb web, SPListItem ccpItem, SPList list = null, SPListItem item = null)
        {
            try
            {
                string userType = ccpItem["UserType"].ToString();
                string groupName = ccpItem["Title"].ToString();
                string permissionLevel = ccpItem["Permission"].ToString();


                if (userType == "Active Directory")
                {
                    try
                    {
                        SPUser libAccount = web.EnsureUser(groupName);
                        SPRoleDefinition libRole = web.RoleDefinitions[permissionLevel];
                        SPRoleAssignment libAssignment = new SPRoleAssignment(libAccount);
                        libAssignment.RoleDefinitionBindings.Add(libRole);

                        if (list != null)//Library Level Permissions
                        {
                            list.RoleAssignments.Add(libAssignment);
                            //list.Update();
                        }
                        else if (item != null)//Item Level Permissions
                        {
                            item.RoleAssignments.Add(libAssignment);
                            item.Update();
                        }
                    }
                    catch (SPException e)
                    {
                        Console.WriteLine(e.Message);
                    }


                }
                else if (userType == "SharePoint")
                {
                    try
                    {
                        SPGroup group = web.SiteGroups[groupName];
                        SPRoleDefinition libRole = web.RoleDefinitions[permissionLevel];
                        SPRoleAssignment libAssignment = new SPRoleAssignment(group);
                        libAssignment.RoleDefinitionBindings.Add(libRole);

                        if (list != null)//Library Level Permissions
                        {
                            list.RoleAssignments.Add(libAssignment);
                            //list.Update();
                        }
                        else if (item != null)//Item Level Permissions
                        {
                            item.RoleAssignments.Add(libAssignment);
                            item.Update();
                        }
                    }
                    catch (SPException e)
                    {
                        Console.WriteLine(e.Message);
                    }

                }
            }
            catch (Exception e)
            {
                //Log to Library
                //Console.WriteLine(e.Message);

            }
        }// GrantPermissions()

    }//CCPPermissions{}
}
