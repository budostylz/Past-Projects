using System;
using System.Runtime.InteropServices;
using System.Security.Permissions;
using Microsoft.SharePoint;

namespace ClientCenterProject.Features.AttachPermissions
{
    /// <summary>
    /// This class handles events raised during feature activation, deactivation, installation, uninstallation, and upgrade.
    /// </summary>
    /// <remarks>
    /// The GUID attached to this class may be used during packaging and should not be modified.
    /// </remarks>

    [Guid("618728c5-6509-4d94-8666-0b5ee6ada7da")]
    public class AttachPermissionsEventReceiver : SPFeatureReceiver
    {
        public override void FeatureActivated(SPFeatureReceiverProperties properties)
        {

            try
            {

                 SPWeb web = (SPWeb)properties.Feature.Parent;
                 SPWeb parentWeb = web.Site.RootWeb;
                 SPList eventLog = parentWeb.Lists.TryGetList("CCPEventFeatureLog");
                 SPListItem eventLogItem = eventLog.AddItem();
                 SPList proposals = web.Lists.TryGetList("Proposals");
                 SPList contracts = web.Lists.TryGetList("Contracts");

                 if (proposals != null)//attach receiver to proposals
                 {
                     string id = proposals.ID.ToString();
                     Guid guid = new Guid(id);
                     SPEventReceiverDefinition receiver1 = proposals.EventReceivers.Add(guid, proposals);
                     receiver1.Name = "ListEvents";
                     receiver1.Assembly = System.Reflection.Assembly.GetExecutingAssembly().FullName;
                     receiver1.Class = "ClientCenterProject.ListEvents";
                     receiver1.Type = SPEventReceiverType.ItemAdded;
                     receiver1.Synchronization = SPEventReceiverSynchronization.Synchronous;
                     receiver1.SequenceNumber = 50984;
                     receiver1.Update();

                     //Add log to eventlog                          
                     eventLogItem["Proposals"] = "Receiver attach to " + proposals.Title + " at: " + web.Title + " : " + web.Url;
                     eventLogItem.Update();

                  }//if 
                  else
                  {
                    //Add log to eventlog                          
                    eventLogItem["Proposals"] = "No Proposals at: " + web.Title + " : " + web.Url;
                    eventLogItem.Update();
                  }

                  if (contracts != null)//attach receiver to contracts
                  {

                     string id = contracts.ID.ToString();
                     Guid guid = new Guid(id);
                     SPEventReceiverDefinition receiver2 = contracts.EventReceivers.Add(guid, contracts);
                     receiver2.Name = "ListEvents";
                     receiver2.Assembly = System.Reflection.Assembly.GetExecutingAssembly().FullName;
                     receiver2.Class = "ClientCenterProject.ListEvents";
                     receiver2.Type = SPEventReceiverType.ItemAdded;
                     receiver2.Synchronization = SPEventReceiverSynchronization.Synchronous;
                     receiver2.SequenceNumber = 50985;
                     receiver2.Update();

                     //Add log to eventlog
                     eventLogItem["Contracts"] = "Receiver attach to " + contracts.Title + " at: " + web.Title + " : " + web.Url;
                     eventLogItem.Update();

                  }//if
                  else
                  {
                     //Add log to eventlog                          
                     eventLogItem["Contracts"] = "No Contracts at: " + web.Title + " : " + web.Url;
                     eventLogItem.Update();
                  }
            }
            catch (Exception e)
            {
                
               SPWeb web = (SPWeb)properties.Feature.Parent;
               SPWeb parentWeb = web.Site.RootWeb;
               SPList eventLog = parentWeb.Lists.TryGetList("CCPEventFeatureLog");
               SPListItem item = eventLog.AddItem();
               item["CCPWebEvents"] = "FeatureActivated : " + e.Message;
               item.Update();
                    
            }

        }




        public override void FeatureDeactivating(SPFeatureReceiverProperties properties)
        {


            try
            {
               
               SPWeb web = (SPWeb)properties.Feature.Parent;
               SPWeb parentWeb = web.Site.RootWeb;
               SPList eventLog = parentWeb.Lists.TryGetList("CCPEventFeatureLog");
               SPListItem eventLogItem = eventLog.AddItem();
               SPList proposals = web.Lists.TryGetList("Proposals");
               SPList contracts = web.Lists.TryGetList("Contracts");

               if (proposals != null)//remove receiver from proposals
               {

                  SPEventReceiverDefinition def1 = null;//event definition
                  foreach (SPEventReceiverDefinition receiver in proposals.EventReceivers)
                  {
                     if (receiver.Name == "ListEvents")
                     {
                        def1 = receiver;
                        break;
                     }//if
                   }//for

                   if (def1 != null)
                   {
                      def1.Delete();
                   }//if

                   //Add log to eventlog                          
                   eventLogItem["Proposals"] = "Receiver Removed from " + proposals.Title + " at: " + web.Title + " : " + web.Url;
                   eventLogItem.Update();
                }//if 
               else
               {
                  //Add log to eventlog                          
                  eventLogItem["Proposals"] = "No Proposals at: " + web.Title + " : " + web.Url;
                  eventLogItem.Update();
               }

               if (contracts != null)//remove receiver from contracts
               {
                    SPEventReceiverDefinition def2 = null;

                    foreach (SPEventReceiverDefinition receiver in contracts.EventReceivers)
                    {
                      if (receiver.Name == "ListEvents")
                      {
                         def2 = receiver;
                         break;
                      }//if
                    }//for

                    if (def2 != null)
                    {
                       def2.Delete();
                    }//if

                    //Add log to eventlog
                    eventLogItem["Contracts"] = "Receiver Remove from " + contracts.Title + " at: " + web.Title + " : " + web.Url;
                    eventLogItem.Update();

               }//if
               else
               {
                   //Add log to eventlog                          
                   eventLogItem["Contracts"] = "No Contracts at: " + web.Title + " : " + web.Url;
                   eventLogItem.Update();
               }
            }
            catch (Exception e)
            {
                
               SPWeb web = (SPWeb)properties.Feature.Parent;
               SPWeb parentWeb = web.Site.RootWeb;
               SPList eventLog = parentWeb.Lists.TryGetList("CCPEventFeatureLog");
               SPListItem item = eventLog.AddItem();
               item["CCPWebEvents"] = "FeatureDeactivating : " + e.Message;
               item.Update();
                    
            }
        }
    }
}
