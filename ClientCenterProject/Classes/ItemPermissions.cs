using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.SharePoint;

namespace ClientCenterProject
{
    public static class ItemPermissions
    {

        public static void SetItem(SPWeb web, SPList ccpList, SPListItem item)
        {
            
                try
                {

                        SPFolder folder = item.Folder; //this checks for Folder
                        string folderName = folder.Name;//checks folder name
                        string progId = item.ProgId; //this checks for DocSet
                        string listTitle = item.ParentList.Title; //List Title
                        string libBU = item.Folder.Url.Split('/')[1];//item BU
                        bool buCheck = false; //Check if this is a BU or DocSet 

                        if (progId != "SharePoint.DocumentSet")//Check folders for BU Names in CCPList
                        {
                            //Check if this is a BU Folder
                            SPQuery checkBUQuery = new SPQuery();
                            checkBUQuery.Query = " <Where><Eq><FieldRef Name='BU' /><Value Type='Choice'>" + folderName + "</Value></Eq></Where>";
                            SPListItemCollection ccpCollection = ccpList.GetItems(checkBUQuery);
                            buCheck = (ccpCollection.Count > 1) ? buCheck = true : buCheck = false;
                        }//BU Folder check


                        //BUs
                        if (buCheck && progId != "SharePoint.DocumentSet")
                        {
                            /*Break Inheritance and Remove Permissions*/
                            BreakInheritanceAndDeletePermissions(web, ccpList, item);

                            /*Set Item Queries*/
                            List<SPListItemCollection> ccpCol = ItemQueries(web, ccpList, item);

                            /*Grant Permissions*/
                            foreach (SPListItemCollection col in ccpCol)
                            {
                                foreach (SPListItem ccpItem in col)
                                {
                                    GrantPermissions(web, ccpItem, item);

                                }//foreach (SPListItem ccpItem in col)
                            }//foreach (SPListItemCollection col in ccpCol)

                            //Complete
                            item["Permission Status"] = "Complete";
                            item.Update();


                        }//DocSets
                        else if (progId == "SharePoint.DocumentSet")//DocSet Perms. DocSets created outside BUs inherit from Library.
                        {

                            /*Break Inheritance and Remove Permissions*/
                            BreakInheritanceAndDeletePermissions(web, ccpList, item);

                            /*Set Item Queries*/
                            List<SPListItemCollection> ccpCol = ItemQueries(web, ccpList, item);

                            /*Grant Permissions*/
                            foreach (SPListItemCollection col in ccpCol)
                            {
                                foreach (SPListItem ccpItem in col)
                                {
                                    GrantPermissions(web, ccpItem, item);

                                }//foreach (SPListItem ccpItem in col)
                            }//foreach (SPListItemCollection col in ccpCol)

                            //Complete
                            item["Permission Status"] = "Complete";
                            item.Update();

                        }//DocSet check

                        //Completion Status for Regular Folders
                        if (!buCheck && progId != "SharePoint.DocumentSet")
                        {
                            item["Permission Status"] = "Inherit from Parent";
                            item.Update();
                        }//regular folder check


                }
                catch (Exception e)
                {
                    item["Permission Log"] = e.Message;
                    item["Permission Status"] = "Verify Permissions and Check Permission Log for Details.";
                    item.Update();
                }
           

        }//SetItem()

        static void BreakInheritanceAndDeletePermissions(SPWeb web, SPList ccpList, SPListItem item)
        {
            try
            {


                //Ensure item permissions are broken
                item.BreakRoleInheritance(true);

                // 3. Delete item permissions
                SPRoleAssignmentCollection roleAssignments = item.RoleAssignments;
                for (int i = roleAssignments.Count - 1; i >= 0; i--)
                {
                    item.RoleAssignments.Remove(0);
                }


            }
            catch (Exception e)
            {
                //Log to Library
                item["Permission Log"] = e.Message;
                item.Update();
            }
        }//BreakInheritanceAndDeletePermissions()

        static List<SPListItemCollection> ItemQueries(SPWeb web, SPList ccpList, SPListItem item)
        {

            List<SPListItemCollection> ccpCol = new List<SPListItemCollection>();//set query collection

            try
            {
                string listTitle = item.ParentList.Title;// library title
                string libBU = item.Folder.Url.Split('/')[1];//item BU
                string progId = item.ProgId; //this checks for DocSet

                if (progId != "SharePoint.DocumentSet")//set BU queries
                {
                    SPFolder folder = item.Folder; //this checks for Folder
                    string folderName = folder.Name;//checks folder name

                    //Apply Globals 
                    SPQuery ccpQuery1 = new SPQuery();
                    ccpQuery1.Query = @"<Where><And><Contains><FieldRef Name='Library' /><Value Type='Choice'>" + listTitle + "</Value></Contains><Eq><FieldRef Name='Level' /><Value Type='Choice'>All</Value></Eq></And></Where>";
                    SPListItemCollection globalBUQueryCol = ccpList.GetItems(ccpQuery1);

                    //Target All BUs
                    SPQuery ccpQuery2 = new SPQuery();
                    ccpQuery2.Query = @"<Where><And><Contains><FieldRef Name='Library' /><Value Type='Choice'>" + listTitle + "</Value></Contains><And><Eq><FieldRef Name='Level' /><Value Type='Choice'>BU</Value></Eq><Eq><FieldRef Name='BU' /><Value Type='Choice'>All</Value></Eq></And></And></Where></Query>";
                    SPListItemCollection allBUQueryCol = ccpList.GetItems(ccpQuery2);

                    //Target Given BU
                    SPQuery ccpQuery3 = new SPQuery();
                    ccpQuery3.Query = @"<Where><And><Contains><FieldRef Name='Library' /><Value Type='Choice'>" + listTitle + "</Value></Contains><And><Eq><FieldRef Name='Level' /><Value Type='Choice'>BU</Value></Eq><Eq><FieldRef Name='BU' /><Value Type='Choice'>" + folderName + "</Value></Eq></And></And></Where>";
                    SPListItemCollection targetBuQueryCol = ccpList.GetItems(ccpQuery3);

                    //Add to query collection
                    ccpCol.Add(globalBUQueryCol);
                    ccpCol.Add(allBUQueryCol);
                    ccpCol.Add(targetBuQueryCol);

                    //Return query collection
                    return ccpCol;
                }
                else if (progId == "SharePoint.DocumentSet")//set DocSet queries
                {
                    //Apply Globals
                    SPQuery ccpQuery3 = new SPQuery();
                    ccpQuery3.Query = @"<Where><And><Contains><FieldRef Name='Library' /><Value Type='Choice'>" + listTitle + "</Value></Contains><Eq><FieldRef Name='Level' /><Value Type='Choice'>All</Value></Eq></And></Where>";
                    SPListItemCollection docSetQueryCol = ccpList.GetItems(ccpQuery3);

                    //Target All DocSets within All BUs
                    SPQuery ccpQuery4 = new SPQuery();
                    ccpQuery4.Query = @"<Where><And><Contains><FieldRef Name='Library' /><Value Type='Choice'>" + listTitle + "</Value></Contains><And><Eq><FieldRef Name='Level' /><Value Type='Choice'>DocSet</Value></Eq><Eq><FieldRef Name='BU' /><Value Type='Choice'>All</Value></Eq></And></And></Where>";
                    SPListItemCollection nonGlobalDocSetQuery = ccpList.GetItems(ccpQuery4);

                    //Target DocSet within given BU(No Departments)
                    SPQuery ccpQuery5 = new SPQuery();
                    ccpQuery5.Query = @"<Where><And><Contains><FieldRef Name='Library' /><Value Type='Choice'>" + listTitle + "</Value></Contains><And><Eq><FieldRef Name='Level' /><Value Type='Choice'>DocSet</Value></Eq><And><Eq><FieldRef Name='BU' /><Value Type='Choice'>" + libBU + "</Value></Eq><Eq><FieldRef Name='Division' /><Value Type='Choice'>None</Value></Eq></And></And></And></Where>";
                    SPListItemCollection buNoDeptQuery = ccpList.GetItems(ccpQuery5);

                    //Add to query collection
                    ccpCol.Add(buNoDeptQuery);
                    ccpCol.Add(docSetQueryCol);
                    ccpCol.Add(nonGlobalDocSetQuery);

                    ////Target DocSet within given BU for given Division
                    SPFieldLookupValueCollection divisions = (SPFieldLookupValueCollection)item["Division"];


                    foreach (SPFieldLookupValue division in divisions)
                    {
                        string divValue = division.LookupValue;//get division value

                        //Set Division Query
                        SPQuery divQuery = new SPQuery();
                        divQuery.Query = @"<Where><And><Contains><FieldRef Name='Library' /><Value Type='Choice'>" + listTitle + "</Value></Contains><And><Eq><FieldRef Name='Level' /><Value Type='Choice'>DocSet</Value></Eq><And><Eq><FieldRef Name='BU' /><Value Type='Choice'>" + libBU + "</Value></Eq><Eq><FieldRef Name='Division' /><Value Type='Choice'>" + divValue + "</Value></Eq></And></And></And></Where>";
                        
                        //List collection is queried within for loop. This should not be an issue since all list items are
                        //not being retrieved all once.
                        SPListItemCollection globalBUQueryCol = ccpList.GetItems(divQuery);

                        //Add query to collection
                        if (globalBUQueryCol.Count > 0)
                        {
                            ccpCol.Add(globalBUQueryCol);
                        }

                    }//for

                    //Return query collection
                    return ccpCol;

                }//if




            }
            catch (Exception e)
            {
                item["Permission Log"] = e.Message;
                item.Update();

            }

            return ccpCol;//maintain return path

        }//ItemQueries


        static void GrantPermissions(SPWeb web, SPListItem ccpItem, SPListItem item)
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
                            SPUser itemAccount = web.EnsureUser(userValue);
                            SPRoleDefinition itemRole = web.RoleDefinitions[permissionLevel];
                            SPRoleAssignment itemAssignment = new SPRoleAssignment(itemAccount);
                            itemAssignment.RoleDefinitionBindings.Add(itemRole);
                            item.RoleAssignments.Add(itemAssignment);
                        }
                        catch (SPException e)
                        {
                            item["Permission Log"] = e.Message;
                            item.Update();
                        }


                    }
                    else if (userType == "SharePoint")
                    {
                        try
                        {
                            SPGroup group = web.SiteGroups[userValue];
                            SPRoleDefinition itemRole = web.RoleDefinitions[permissionLevel];
                            SPRoleAssignment itemAssignment = new SPRoleAssignment(group);
                            itemAssignment.RoleDefinitionBindings.Add(itemRole);
                            item.RoleAssignments.Add(itemAssignment);
                        }
                        catch (SPException e)
                        {
                            item["Permission Log"] = e.Message;
                            item.Update();
                        }

                    }
                }//(userType != null && _user != null)
                else
                {
                    //Log
                    item["Permission Log"] = "Null UserType and User Values.Verify security object is in SharePoint Groups and Active Directory. Check Permission Log for Details.";
                    item["Permission Status"] = "Verify Permissions and Check Permission Log for Details.";
                    item.Update();
                }


            }
            catch (Exception e)
            {
                //Log
                item["Permission Log"] = e.Message;
                item["Permission Status"] = "Verify Permissions and Check Permission Log for Details.";
                item.Update();
            }


        }//GrantPermissions()
    }//ItemPermissions{}
}
