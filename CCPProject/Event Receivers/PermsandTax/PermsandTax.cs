using System;
using System.Security.Permissions;
using Microsoft.SharePoint;
using Microsoft.SharePoint.Utilities;
using Microsoft.SharePoint.Workflow;





namespace CCPProject.PermsandTax
{
    /// <summary>
    /// Web Events
    /// </summary>
    public class PermsandTax : SPWebEventReceiver
    {
        /// <summary>
        /// A site was provisioned.
        /// </summary>
        public override void WebProvisioned(SPWebEventProperties properties)
        {
            
            //Set site, (proposals and contracts library) permissions
            CCPPermissions.SiteEvents(properties.Web);
            
        }


    }
}