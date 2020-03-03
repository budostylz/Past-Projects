using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.SharePoint;

namespace ClientCenterProject
{
    class ListEvents : SPItemEventReceiver
    {
        public override void ItemAdded(SPItemEventProperties properties)
        {

            /*Reactivate Feature for Syncronization Update*/
                try
                {

                    SPFile file = properties.ListItem.File; //this checks for a File type

                    //Only set Folders and DocSets, Files Inherit Permissions from DocSet
                    if (file == null)//check for folders and file types and check out file 
                    {
                        /*Impersonate System Account*/
                        SPSite tempSite = properties.Web.Site;
                        SPUserToken systoken = tempSite.SystemAccount.UserToken;//Use System Account

                        using (SPSite sysSite = new SPSite(tempSite.Url, systoken))
                        {
                            using (SPWeb sysWeb = sysSite.OpenWeb(properties.Web.ServerRelativeUrl))
                            {

                                SPQuery query = new SPQuery();
                                query.ViewXml = "<View Scope='RecursiveAll'/>";
                                SPWeb sysParentWeb = sysSite.RootWeb;
                                SPList syslist = sysWeb.Lists.TryGetList(properties.List.Title);
                                SPListItemCollection coll = syslist.GetItems(query);
                                SPListItem sysItem = coll.GetItemById(properties.ListItem.ID);
                                SPList ccpList = sysParentWeb.Lists.TryGetList("Permissions List");//get CCPList
                                ItemPermissions.SetItem(sysWeb, ccpList, sysItem);//set item permissions
                            }
                        }


                    }
                    else if (file != null)
                    {
                        properties.ListItem["Permission Status"] = "Inherit from Parent";
                        properties.ListItem.Update();
                    }


                }
                catch (Exception e)
                {
                    /*UPDATE LOGGING TO INCLUDE SITE*/

                    //Log 
                    SPSite site = properties.Web.Site;
                    SPWeb parentWeb = site.RootWeb;
                    SPList eventLog = parentWeb.Lists.TryGetList("CCPEventFeatureLog");//get log list
                    SPListItem item = eventLog.AddItem();
                    item["ListEvents"] = e.Message;
                    item["Site"] = properties.Web.Url;

                    if (properties.List.Title == "Contracts")
                    {
                        item["Contracts"] = properties.Web.Title;
                    }
                    else if (properties.List.Title == "Proposals")
                    {
                        item["Proposals"] = properties.Web.Title;
                    }

                    item.Update();
                }

        }

    }
}
