using System;
using System.Runtime.InteropServices;
using System.Security.Permissions;
using Microsoft.SharePoint;

namespace ClientCenterProject.Features.InitPermissions
{
    /// <summary>
    /// This class handles events raised during feature activation, deactivation, installation, uninstallation, and upgrade.
    /// </summary>
    /// <remarks>
    /// The GUID attached to this class may be used during packaging and should not be modified.
    /// </remarks>

    [Guid("24f84cb4-f491-4f18-b928-66bbf699032f")]
    public class InitPermissionsEventReceiver : SPFeatureReceiver
    {
        public override void FeatureActivated(SPFeatureReceiverProperties properties)
        {

            try
            {
                    SPSite site = (SPSite)properties.Feature.Parent;
                    SPWeb parentWeb = site.RootWeb;
                    SPList eventLog = parentWeb.Lists.TryGetList("CCPEventFeatureLog");
                    SPWebCollection webs = parentWeb.Webs;//get subsites directly under top level
                    int webCount = webs.Count + 1;
                    string webStr = webCount.ToString();

                    //Create Item to Track WebCount
                    SPQuery query = new SPQuery();
                    query.ViewXml = "<View Scope='RecursiveAll'/>";
                    SPListItemCollection coll = eventLog.GetItems(query);
                    SPListItem item = eventLog.AddItem();
                    item["WebCount"] = webStr;
                    item.Update();

                    foreach (SPWeb targetWeb in webs)
                    {
                        try
                        {
                           /* Activate Feature to attach receiver to both Proposals and Contracts */
                            targetWeb.Features.Add(new Guid("025286a3-564b-4084-a073-1c1fac92c036"));

                        }
                        finally
                        {
                            if(targetWeb != null)
                                targetWeb.Dispose();
                        }
                    }//foreach

            }
            catch (Exception e)
            {
                SPSite site = (SPSite)properties.Feature.Parent;
                SPWeb parentWeb = site.RootWeb;
                SPList eventLog = parentWeb.Lists.TryGetList("CCPEventFeatureLog");
                SPListItem item = eventLog.AddItem();
                item["CCPEvents"] = "CCPEvents FeatureActivated : " + e.Message;        
            }

        }




        public override void FeatureDeactivating(SPFeatureReceiverProperties properties)
        {

            try
            {

                SPSite site = (SPSite)properties.Feature.Parent;
                SPWeb parentWeb = site.RootWeb;
                SPList eventLog = parentWeb.Lists.TryGetList("CCPEventFeatureLog");
                SPWebCollection webs = parentWeb.Webs;//get subsites directly under top level
                int webCount = webs.Count + 1;
                string webStr = webCount.ToString();

                //Create Item to Track WebCount
                SPQuery query = new SPQuery();
                query.ViewXml = "<View Scope='RecursiveAll'/>";
                SPListItemCollection coll = eventLog.GetItems(query);
                SPListItem item = eventLog.AddItem();
                item["WebCount"] = webStr;
                item.Update();

                    foreach (SPWeb targetWeb in webs)
                    {
                        try
                        {
                            /* Activate Feature to attach receiver to both Proposals and Contracts */
                            targetWeb.Features.Remove(new Guid("025286a3-564b-4084-a073-1c1fac92c036"));

                        }
                        finally
                        {
                            if (targetWeb != null)
                                targetWeb.Dispose();
                        }
                    }//foreach
            }
            catch (Exception e)
            {
               
                    SPSite site = (SPSite)properties.Feature.Parent;
                    SPWeb parentWeb = site.RootWeb;
                    SPList eventLog = parentWeb.Lists.TryGetList("CCPEventFeatureLog");
                    SPListItem item = eventLog.AddItem();
                    item["CCPEvents"] = "FeatureDeactivating : " + e.Message;
                    
            }
        }
    }
}
