<%@ Page language="C#" MasterPageFile="~masterurl/default.master"    Inherits="Microsoft.SharePoint.WebPartPages.WebPartPage,Microsoft.SharePoint,Version=15.0.0.0,Culture=neutral,PublicKeyToken=71e9bce111e9429c" meta:progid="SharePoint.WebPartPage.Document"  %>
<%@ Register Tagprefix="SharePoint" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %> <%@ Register Tagprefix="Utilities" Namespace="Microsoft.SharePoint.Utilities" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %> <%@ Import Namespace="Microsoft.SharePoint" %> <%@ Assembly Name="Microsoft.Web.CommandUI, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %> <%@ Register Tagprefix="WebPartPages" Namespace="Microsoft.SharePoint.WebPartPages" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<asp:content contentplaceholderid="PlaceHolderPageTitle" runat="server">
    <sharepoint:encodedliteral runat="server" text="<%$Resources:wss,multipages_homelink_text%>" encodemethod="HtmlEncode" /> -
    <sharepoint:projectproperty property="Title" runat="server" />
</asp:content>
<asp:content contentplaceholderid="PlaceHolderPageImage" runat="server"><img src="/_layouts/15/images/blank.gif?rev=23" width='1' height='1' alt="" /></asp:content>
<asp:content contentplaceholderid="PlaceHolderPageTitleInTitleArea" runat="server">
    <label class="ms-hidden">
        <sharepoint:projectproperty property="Title" runat="server" />
    </label>
</asp:content>
<asp:content contentplaceholderid="PlaceHolderTitleAreaClass" runat="server">
    <sharepoint:uiversionedcontent runat="server" uiversion="<=3">
        <contenttemplate>
            <style type="text/css">
                td.ms-titleareaframe, .ms-pagetitleareaframe {
                    height: 10px;
                }

                div.ms-titleareaframe {
                    height: 100%;
                }

                .ms-pagetitleareaframe table {
                    background: none;
                    height: 10px;
                }
            </style>
        </contenttemplate>
    </sharepoint:uiversionedcontent>
</asp:content>
<asp:content contentplaceholderid="PlaceHolderAdditionalPageHead" runat="server">
    <meta name="CollaborationServer" content="SharePoint Team Web Site" />
    <sharepoint:styleblock runat="server">
        .s4-nothome {
        display:none;
        }
    </sharepoint:styleblock>
    <sharepoint:scriptblock runat="server">
        var navBarHelpOverrideKey = "WSSEndUser";
    </sharepoint:scriptblock>
</asp:content>
<asp:content contentplaceholderid="PlaceHolderSearchArea" runat="server">
    <sharepoint:delegatecontrol runat="server"
                                controlid="SmallSearchInputBox" />
</asp:content>
<asp:content contentplaceholderid="PlaceHolderLeftActions" runat="server" />
<asp:content contentplaceholderid="PlaceHolderPageDescription" runat="server">
</asp:content>
<asp:content contentplaceholderid="PlaceHolderBodyAreaClass" runat="server">
    <sharepoint:styleblock runat="server">
        .ms-bodyareaframe {
        padding: 0px;
        }
    </sharepoint:styleblock>
</asp:content>
<asp:content contentplaceholderid="PlaceHolderMain" runat="server">
    <table cellspacing="0" border="0" width="100%">
        <tr class="s4-die">
            <td class="ms-pagebreadcrumb">
                <asp:SiteMapPath SiteMapProvider="SPContentMapProvider" id="ContentMap" SkipLinkText="" NodeStyle-CssClass="ms-sitemapdirectional" runat="server" />
            </td>
        </tr>
        <tr>
            <td class="ms-webpartpagedescription">
                <sharepoint:projectproperty property="Description" runat="server" />
            </td>
        </tr>
        <tr>
            <td>

		 <table width="100%" cellpadding="0" cellspacing="0" style="padding: 5px 10px 10px 10px;">
			<tr>
			   <td valign="top" width="70%">
                               <WebPartPages:WebPartZone runat="server" FrameType="TitleBarOnly" ID="q0" Title="loc:q0"><zonetemplate></zonetemplate></WebPartPages:WebPartZone>
                           </td>
			   <td>&#160;</td>
     			   <td valign="top" width="50%">
				<table width="100%" cellpadding="0" cellspacing="0" style="padding: 5px 10px 10px 10px;">
					<tr>
					    <td valign="top" width="50%">
                               		      <WebPartPages:WebPartZone runat="server" FrameType="TitleBarOnly" ID="q5" Title="loc:q5"><zonetemplate></zonetemplate></WebPartPages:WebPartZone>
                           		    </td>
					</tr>
				</table>
     		           </td>

			</tr>


		 </table>

                <table width="100%" cellpadding="0" cellspacing="0" style="padding: 5px 10px 10px 10px;">


		    
                    <tr>
                        <td valign="top" width="50%">
                            <WebPartPages:WebPartZone runat="server" FrameType="TitleBarOnly" ID="q1" Title="loc:q1"><zonetemplate></zonetemplate></WebPartPages:WebPartZone>
                        </td>
                         <td>&#160;</td>
 			 <td></td>
                        <td valign="top" width="50%">
                            <WebPartPages:WebPartZone runat="server" FrameType="TitleBarOnly" ID="q2" Title="loc:q2"><zonetemplate></zonetemplate></WebPartPages:WebPartZone>
                        </td>
                         
                    </tr>
		     <tr>
                        <td valign="top" width="50%">
                            <WebPartPages:WebPartZone runat="server" FrameType="TitleBarOnly" ID="q3" Title="loc:q3"><zonetemplate></zonetemplate></WebPartPages:WebPartZone>
                        </td>
                         <td>&#160;</td>
 			 <td></td>
                        <td valign="top" width="50%">
                            <WebPartPages:WebPartZone runat="server" FrameType="TitleBarOnly" ID="q4" Title="loc:q4"><zonetemplate></zonetemplate></WebPartPages:WebPartZone>
                        </td>
                         <td>&#160;</td>
                    </tr>
                    
                </table>
                

            </td>
        </tr>
    </table>
</asp:content>
