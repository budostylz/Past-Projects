<%@ Page language="C#" MasterPageFile="~masterurl/default.master"    Inherits="Microsoft.SharePoint.WebPartPages.WebPartPage,Microsoft.SharePoint,Version=15.0.0.0,Culture=neutral,PublicKeyToken=71e9bce111e9429c" meta:webpartpageexpansion="full" meta:progid="SharePoint.WebPartPage.Document"  %>
<%@ Register Tagprefix="SharePoint" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %> <%@ Register Tagprefix="Utilities" Namespace="Microsoft.SharePoint.Utilities" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %> <%@ Import Namespace="Microsoft.SharePoint" %> <%@ Assembly Name="Microsoft.Web.CommandUI, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %> <%@ Register Tagprefix="WebPartPages" Namespace="Microsoft.SharePoint.WebPartPages" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<asp:Content ContentPlaceHolderId="PlaceHolderPageTitle" runat="server">
	<SharePoint:ListFormPageTitle runat="server"/>
</asp:Content>
<asp:Content ContentPlaceHolderId="PlaceHolderPageTitleInTitleArea" runat="server">
	<span class="die">
		<SharePoint:ListProperty Property="LinkTitle" runat="server" id="ID_LinkTitle"/>
	</span>
</asp:Content>
<asp:Content ContentPlaceHolderId="PlaceHolderPageImage" runat="server">
	<img src="/_layouts/15/images/blank.gif?rev=23" width='1' height='1' alt="" />
</asp:Content>
<asp:Content ContentPlaceHolderId="PlaceHolderMain" runat="server">
<SharePoint:UIVersionedContent UIVersion="4" runat="server">
	<ContentTemplate>
	<div style="padding-left:5px">
	</ContentTemplate>
</SharePoint:UIVersionedContent>
	<table class="ms-core-tableNoSpace" id="onetIDListForm">
	 <tr>
	  <td>
	 <WebPartPages:WebPartZone runat="server" FrameType="None" ID="Main" Title="loc:Main"><ZoneTemplate>
		<WebPartPages:DataFormWebPart runat="server" EnableOriginalValue="False" DisplayName="CICOInternalMoves11222019" ViewFlag="8" ViewContentTypeId="" Default="FALSE" ListUrl="" ListDisplayName="" ListName="{59CEF730-CF0A-4100-8CC2-E1B11D311CD2}" ListId="59cef730-cf0a-4100-8cc2-e1b11d311cd2" PageType="PAGE_EDITFORM" PageSize="-1" UseSQLDataSourcePaging="True" DataSourceID="" ShowWithSampleData="False" AsyncRefresh="False" ManualRefresh="False" AutoRefresh="False" AutoRefreshInterval="60" NoDefaultStyle="TRUE" InitialAsyncDataFetch="False" Title="CICOInternalMoves11222019" FrameType="None" SuppressWebPartChrome="False" Description="" IsIncluded="True" PartOrder="2" FrameState="Normal" AllowRemove="True" AllowZoneChange="True" AllowMinimize="True" AllowConnect="True" AllowEdit="True" AllowHide="True" IsVisible="True" DetailLink="" HelpLink="" HelpMode="Modeless" Dir="Default" PartImageSmall="" MissingAssembly="Cannot import this Web Part." PartImageLarge="" IsIncludedFilter="" ExportControlledProperties="True" ConnectionID="00000000-0000-0000-0000-000000000000" ID="g_0a572f2f_ddaf_45a9_9db4_4901eb69cee8" ChromeType="None" ExportMode="All" __MarkupType="vsattributemarkup" __WebPartId="{0A572F2F-DDAF-45A9-9DB4-4901EB69CEE8}" __AllowXSLTEditing="true" WebPart="true" Height="" Width=""><DataSources>
<SharePoint:SPDataSource runat="server" DataSourceMode="ListItem" SelectCommand="&lt;View&gt;&lt;Query&gt;&lt;Where&gt;&lt;Eq&gt;&lt;FieldRef Name=&quot;ContentType&quot;/&gt;&lt;Value Type=&quot;Text&quot;&gt;CICO Internal Moves&lt;/Value&gt;&lt;/Eq&gt;&lt;/Where&gt;&lt;/Query&gt;&lt;/View&gt;" UseInternalName="True" UseServerDataFormat="True"><SelectParameters><WebPartPages:DataFormParameter ParameterKey="ListItemId" PropertyName="ParameterValues" DefaultValue="0" Name="ListItemId"></WebPartPages:DataFormParameter><WebPartPages:DataFormParameter ParameterKey="weburl" PropertyName="ParameterValues" DefaultValue="https://mcscviper.usmc.mil/sites/vt" Name="weburl"></WebPartPages:DataFormParameter><WebPartPages:DataFormParameter ParameterKey="ListID" PropertyName="ParameterValues" DefaultValue="{59CEF730-CF0A-4100-8CC2-E1B11D311CD2}" Name="ListID"></WebPartPages:DataFormParameter>
			</SelectParameters><UpdateParameters><WebPartPages:DataFormParameter ParameterKey="ListItemId" PropertyName="ParameterValues" DefaultValue="0" Name="ListItemId"></WebPartPages:DataFormParameter><WebPartPages:DataFormParameter ParameterKey="weburl" PropertyName="ParameterValues" DefaultValue="https://mcscviper.usmc.mil/sites/vt" Name="weburl"></WebPartPages:DataFormParameter><WebPartPages:DataFormParameter ParameterKey="ListID" PropertyName="ParameterValues" DefaultValue="{59CEF730-CF0A-4100-8CC2-E1B11D311CD2}" Name="ListID"></WebPartPages:DataFormParameter>
			</UpdateParameters><InsertParameters><WebPartPages:DataFormParameter ParameterKey="ListItemId" PropertyName="ParameterValues" DefaultValue="0" Name="ListItemId"></WebPartPages:DataFormParameter><WebPartPages:DataFormParameter ParameterKey="weburl" PropertyName="ParameterValues" DefaultValue="https://mcscviper.usmc.mil/sites/vt" Name="weburl"></WebPartPages:DataFormParameter><WebPartPages:DataFormParameter ParameterKey="ListID" PropertyName="ParameterValues" DefaultValue="{59CEF730-CF0A-4100-8CC2-E1B11D311CD2}" Name="ListID"></WebPartPages:DataFormParameter>
			</InsertParameters><DeleteParameters><WebPartPages:DataFormParameter ParameterKey="ListItemId" PropertyName="ParameterValues" DefaultValue="0" Name="ListItemId"></WebPartPages:DataFormParameter><WebPartPages:DataFormParameter ParameterKey="weburl" PropertyName="ParameterValues" DefaultValue="https://mcscviper.usmc.mil/sites/vt" Name="weburl"></WebPartPages:DataFormParameter><WebPartPages:DataFormParameter ParameterKey="ListID" PropertyName="ParameterValues" DefaultValue="{59CEF730-CF0A-4100-8CC2-E1B11D311CD2}" Name="ListID"></WebPartPages:DataFormParameter>
			</DeleteParameters>
</SharePoint:SPDataSource>
</DataSources>
<Xsl>

<xsl:stylesheet xmlns:x="http://www.w3.org/2001/XMLSchema" xmlns:dsp="http://schemas.microsoft.com/sharepoint/dsp" version="1.0" exclude-result-prefixes="xsl msxsl ddwrt" xmlns:ddwrt="http://schemas.microsoft.com/WebParts/v2/DataView/runtime" xmlns:asp="http://schemas.microsoft.com/ASPNET/20" xmlns:__designer="http://schemas.microsoft.com/WebParts/v2/DataView/designer" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:msxsl="urn:schemas-microsoft-com:xslt" xmlns:SharePoint="Microsoft.SharePoint.WebControls" xmlns:ddwrt2="urn:frontpage:internal">
	<xsl:output method="html" indent="no"/>
	<xsl:decimal-format NaN=""/>
	<xsl:param name="dvt_apos">'</xsl:param>
	<xsl:param name="ManualRefresh"></xsl:param>
	<xsl:variable name="dvt_1_automode">0</xsl:variable>
	<xsl:template match="/" xmlns:x="http://www.w3.org/2001/XMLSchema" xmlns:dsp="http://schemas.microsoft.com/sharepoint/dsp" xmlns:asp="http://schemas.microsoft.com/ASPNET/20" xmlns:__designer="http://schemas.microsoft.com/WebParts/v2/DataView/designer" xmlns:SharePoint="Microsoft.SharePoint.WebControls">
		<xsl:choose>
			<xsl:when test="($ManualRefresh = 'True')">
				<table width="100%" border="0" cellpadding="0" cellspacing="0">
					<tr>
						<td valign="top">
							<xsl:call-template name="dvt_1"/>
						</td>
						<td width="1%" class="ms-vb" valign="top">
							<img src="/_layouts/15/images/staticrefresh.gif" id="ManualRefresh" border="0" onclick="javascript: {ddwrt:GenFireServerEvent('__cancel')}" alt="Click here to refresh the dataview."/>
						</td>
					</tr>
				</table>
			</xsl:when>
			<xsl:otherwise>
				<xsl:call-template name="dvt_1"/>
			</xsl:otherwise>
		</xsl:choose>
	</xsl:template>
	
	<xsl:template name="dvt_1">
		<xsl:variable name="dvt_StyleName">ListForm</xsl:variable>
		<xsl:variable name="Rows" select="/dsQueryResponse/Rows/Row"/>
		<div>
			<span id="part1">
				<table border="0" width="100%">
					<xsl:call-template name="dvt_1.body">
						<xsl:with-param name="Rows" select="$Rows"/>
					</xsl:call-template>
				</table>
			</span>
			<SharePoint:AttachmentUpload runat="server" ControlMode="Edit"/>
			<SharePoint:ItemHiddenVersion runat="server" ControlMode="Edit"/>
		</div>
	</xsl:template>
	<xsl:template name="dvt_1.body">
		<xsl:param name="Rows"/>
		<tr>
			<td class="ms-toolbar" nowrap="nowrap">
				<table>
					<tr>
						<td width="99%" class="ms-toolbar" nowrap="nowrap"><IMG SRC="/_layouts/15/images/blank.gif" width="1" height="18"/></td>
						<td class="ms-toolbar" nowrap="nowrap">
							<SharePoint:SaveButton runat="server" ControlMode="Edit" id="savebutton1"/>
						</td>
						<td class="ms-separator"> </td>
						<td class="ms-toolbar" nowrap="nowrap" align="right">
							<SharePoint:GoBackButton runat="server" ControlMode="Edit" id="gobackbutton1"/>
						</td>
					</tr>
				</table>
			</td>
		</tr>
		<tr>
			<td class="ms-toolbar" nowrap="nowrap">
				<SharePoint:FormToolBar runat="server" ControlMode="Edit"/>
				<SharePoint:ItemValidationFailedMessage runat="server" ControlMode="Edit"/>
			</td>
		</tr>
		<xsl:for-each select="$Rows">
			<xsl:call-template name="dvt_1.rowedit"/>
		</xsl:for-each>
		<tr>
			<td class="ms-toolbar" nowrap="nowrap">
				<table>
					<tr>
						<td class="ms-descriptiontext" nowrap="nowrap">
							<SharePoint:CreatedModifiedInfo ControlMode="Edit" runat="server"/>
						</td>
						<td width="99%" class="ms-toolbar" nowrap="nowrap"><IMG SRC="/_layouts/15/images/blank.gif" width="1" height="18"/></td>
						<td class="ms-toolbar" nowrap="nowrap">
							<SharePoint:SaveButton runat="server" ControlMode="Edit" id="savebutton2"/>
						</td>
						<td class="ms-separator"> </td>
						<td class="ms-toolbar" nowrap="nowrap" align="right">
							<SharePoint:GoBackButton runat="server" ControlMode="Edit" id="gobackbutton2"/>
						</td>
					</tr>
				</table>
			</td>
		</tr>
	</xsl:template>
	<xsl:template name="dvt_1.rowedit">
		<xsl:param name="Pos" select="position()"/>
		<tr>
			<td>
				<table border="0" cellspacing="0" width="100%">
					<tr>
						<td width="190px" valign="top" class="ms-formlabel">
							<H3 class="ms-standardheader">
								<nobr>Title<span class="ms-formvalidation"> *</span>
								</nobr>
							</H3>
						</td>
						<td width="400px" valign="top" class="ms-formbody">
							<SharePoint:FormField runat="server" id="ff1{$Pos}" ControlMode="Edit" FieldName="Title" __designer:bind="{ddwrt:DataBind('u',concat('ff1',$Pos),'Value','ValueChanged','ID',ddwrt:EscapeDelims(string(@ID)),'@Title')}"/>
							<SharePoint:FieldDescription runat="server" id="ff1description{$Pos}" FieldName="Title" ControlMode="Edit"/>
						</td>
					</tr>
					<tr>
						<td width="190px" valign="top" class="ms-formlabel">
							<H3 class="ms-standardheader">
								<nobr>Admin Complete Date</nobr>
							</H3>
						</td>
						<td width="400px" valign="top" class="ms-formbody">
							<SharePoint:FormField runat="server" id="ff2{$Pos}" ControlMode="Edit" FieldName="admincompletedate" __designer:bind="{ddwrt:DataBind('u',concat('ff2',$Pos),'Value','ValueChanged','ID',ddwrt:EscapeDelims(string(@ID)),'@admincompletedate')}"/>
							<SharePoint:FieldDescription runat="server" id="ff2description{$Pos}" FieldName="admincompletedate" ControlMode="Edit"/>
						</td>
					</tr>
					<tr>
						<td width="190px" valign="top" class="ms-formlabel">
							<H3 class="ms-standardheader">
								<nobr>1st Line Supervisor</nobr>
							</H3>
						</td>
						<td width="400px" valign="top" class="ms-formbody">
							<SharePoint:FormField runat="server" id="ff3{$Pos}" ControlMode="Edit" FieldName="_x0031_stlinesupervisor" __designer:bind="{ddwrt:DataBind('u',concat('ff3',$Pos),'Value','ValueChanged','ID',ddwrt:EscapeDelims(string(@ID)),'@_x0031_stlinesupervisor')}"/>
							<SharePoint:FieldDescription runat="server" id="ff3description{$Pos}" FieldName="_x0031_stlinesupervisor" ControlMode="Edit"/>
						</td>
					</tr>
					<tr>
						<td width="190px" valign="top" class="ms-formlabel">
							<H3 class="ms-standardheader">
								<nobr>Actual Return Date</nobr>
							</H3>
						</td>
						<td width="400px" valign="top" class="ms-formbody">
							<SharePoint:FormField runat="server" id="ff4{$Pos}" ControlMode="Edit" FieldName="actualreturndate" __designer:bind="{ddwrt:DataBind('u',concat('ff4',$Pos),'Value','ValueChanged','ID',ddwrt:EscapeDelims(string(@ID)),'@actualreturndate')}"/>
							<SharePoint:FieldDescription runat="server" id="ff4description{$Pos}" FieldName="actualreturndate" ControlMode="Edit"/>
						</td>
					</tr>
					<tr>
						<td width="190px" valign="top" class="ms-formlabel">
							<H3 class="ms-standardheader">
								<nobr>Admin Notes and Comments</nobr>
							</H3>
						</td>
						<td width="400px" valign="top" class="ms-formbody">
							<SharePoint:FormField runat="server" id="ff5{$Pos}" ControlMode="Edit" FieldName="adminnotesandcomments" __designer:bind="{ddwrt:DataBind('u',concat('ff5',$Pos),'Value','ValueChanged','ID',ddwrt:EscapeDelims(string(@ID)),'@adminnotesandcomments')}"/>
							<SharePoint:FieldDescription runat="server" id="ff5description{$Pos}" FieldName="adminnotesandcomments" ControlMode="Edit"/>
						</td>
					</tr>
					<tr>
						<td width="190px" valign="top" class="ms-formlabel">
							<H3 class="ms-standardheader">
								<nobr>BLDG</nobr>
							</H3>
						</td>
						<td width="400px" valign="top" class="ms-formbody">
							<SharePoint:FormField runat="server" id="ff6{$Pos}" ControlMode="Edit" FieldName="BLDG" __designer:bind="{ddwrt:DataBind('u',concat('ff6',$Pos),'Value','ValueChanged','ID',ddwrt:EscapeDelims(string(@ID)),'@BLDG')}"/>
							<SharePoint:FieldDescription runat="server" id="ff6description{$Pos}" FieldName="BLDG" ControlMode="Edit"/>
						</td>
					</tr>
					<tr>
						<td width="190px" valign="top" class="ms-formlabel">
							<H3 class="ms-standardheader">
								<nobr>Current Location</nobr>
							</H3>
						</td>
						<td width="400px" valign="top" class="ms-formbody">
							<SharePoint:FormField runat="server" id="ff7{$Pos}" ControlMode="Edit" FieldName="currentlocation" __designer:bind="{ddwrt:DataBind('u',concat('ff7',$Pos),'Value','ValueChanged','ID',ddwrt:EscapeDelims(string(@ID)),'@currentlocation')}"/>
							<SharePoint:FieldDescription runat="server" id="ff7description{$Pos}" FieldName="currentlocation" ControlMode="Edit"/>
						</td>
					</tr>
					<tr>
						<td width="190px" valign="top" class="ms-formlabel">
							<H3 class="ms-standardheader">
								<nobr>Data Port</nobr>
							</H3>
						</td>
						<td width="400px" valign="top" class="ms-formbody">
							<SharePoint:FormField runat="server" id="ff8{$Pos}" ControlMode="Edit" FieldName="dataport" __designer:bind="{ddwrt:DataBind('u',concat('ff8',$Pos),'Value','ValueChanged','ID',ddwrt:EscapeDelims(string(@ID)),'@dataport')}"/>
							<SharePoint:FieldDescription runat="server" id="ff8description{$Pos}" FieldName="dataport" ControlMode="Edit"/>
						</td>
					</tr>
					<tr>
						<td width="190px" valign="top" class="ms-formlabel">
							<H3 class="ms-standardheader">
								<nobr>Destination</nobr>
							</H3>
						</td>
						<td width="400px" valign="top" class="ms-formbody">
							<SharePoint:FormField runat="server" id="ff9{$Pos}" ControlMode="Edit" FieldName="Destination" __designer:bind="{ddwrt:DataBind('u',concat('ff9',$Pos),'Value','ValueChanged','ID',ddwrt:EscapeDelims(string(@ID)),'@Destination')}"/>
							<SharePoint:FieldDescription runat="server" id="ff9description{$Pos}" FieldName="Destination" ControlMode="Edit"/>
						</td>
					</tr>
					<tr>
						<td width="190px" valign="top" class="ms-formlabel">
							<H3 class="ms-standardheader">
								<nobr>Email</nobr>
							</H3>
						</td>
						<td width="400px" valign="top" class="ms-formbody">
							<SharePoint:FormField runat="server" id="ff10{$Pos}" ControlMode="Edit" FieldName="Email" __designer:bind="{ddwrt:DataBind('u',concat('ff10',$Pos),'Value','ValueChanged','ID',ddwrt:EscapeDelims(string(@ID)),'@Email')}"/>
							<SharePoint:FieldDescription runat="server" id="ff10description{$Pos}" FieldName="Email" ControlMode="Edit"/>
						</td>
					</tr>
					<tr>
						<td width="190px" valign="top" class="ms-formlabel">
							<H3 class="ms-standardheader">
								<nobr>Gaining Org</nobr>
							</H3>
						</td>
						<td width="400px" valign="top" class="ms-formbody">
							<SharePoint:FormField runat="server" id="ff11{$Pos}" ControlMode="Edit" FieldName="gainingorg" __designer:bind="{ddwrt:DataBind('u',concat('ff11',$Pos),'Value','ValueChanged','ID',ddwrt:EscapeDelims(string(@ID)),'@gainingorg')}"/>
							<SharePoint:FieldDescription runat="server" id="ff11description{$Pos}" FieldName="gainingorg" ControlMode="Edit"/>
						</td>
					</tr>
					<tr>
						<td width="190px" valign="top" class="ms-formlabel">
							<H3 class="ms-standardheader">
								<nobr>Gaining Work Section</nobr>
							</H3>
						</td>
						<td width="400px" valign="top" class="ms-formbody">
							<SharePoint:FormField runat="server" id="ff12{$Pos}" ControlMode="Edit" FieldName="gainingworksection" __designer:bind="{ddwrt:DataBind('u',concat('ff12',$Pos),'Value','ValueChanged','ID',ddwrt:EscapeDelims(string(@ID)),'@gainingworksection')}"/>
							<SharePoint:FieldDescription runat="server" id="ff12description{$Pos}" FieldName="gainingworksection" ControlMode="Edit"/>
						</td>
					</tr>
					<tr>
						<td width="190px" valign="top" class="ms-formlabel">
							<H3 class="ms-standardheader">
								<nobr>Identity</nobr>
							</H3>
						</td>
						<td width="400px" valign="top" class="ms-formbody">
							<SharePoint:FormField runat="server" id="ff13{$Pos}" ControlMode="Edit" FieldName="Identity" __designer:bind="{ddwrt:DataBind('u',concat('ff13',$Pos),'Value','ValueChanged','ID',ddwrt:EscapeDelims(string(@ID)),'@Identity')}"/>
							<SharePoint:FieldDescription runat="server" id="ff13description{$Pos}" FieldName="Identity" ControlMode="Edit"/>
						</td>
					</tr>
					<tr>
						<td width="190px" valign="top" class="ms-formlabel">
							<H3 class="ms-standardheader">
								<nobr>Losing Org</nobr>
							</H3>
						</td>
						<td width="400px" valign="top" class="ms-formbody">
							<SharePoint:FormField runat="server" id="ff14{$Pos}" ControlMode="Edit" FieldName="losingorg" __designer:bind="{ddwrt:DataBind('u',concat('ff14',$Pos),'Value','ValueChanged','ID',ddwrt:EscapeDelims(string(@ID)),'@losingorg')}"/>
							<SharePoint:FieldDescription runat="server" id="ff14description{$Pos}" FieldName="losingorg" ControlMode="Edit"/>
						</td>
					</tr>
					<tr>
						<td width="190px" valign="top" class="ms-formlabel">
							<H3 class="ms-standardheader">
								<nobr>Losing Work Section</nobr>
							</H3>
						</td>
						<td width="400px" valign="top" class="ms-formbody">
							<SharePoint:FormField runat="server" id="ff15{$Pos}" ControlMode="Edit" FieldName="losingworksection" __designer:bind="{ddwrt:DataBind('u',concat('ff15',$Pos),'Value','ValueChanged','ID',ddwrt:EscapeDelims(string(@ID)),'@losingworksection')}"/>
							<SharePoint:FieldDescription runat="server" id="ff15description{$Pos}" FieldName="losingworksection" ControlMode="Edit"/>
						</td>
					</tr>
					<tr>
						<td width="190px" valign="top" class="ms-formlabel">
							<H3 class="ms-standardheader">
								<nobr>Personnel Notes</nobr>
							</H3>
						</td>
						<td width="400px" valign="top" class="ms-formbody">
							<SharePoint:FormField runat="server" id="ff16{$Pos}" ControlMode="Edit" FieldName="personnelnotes" __designer:bind="{ddwrt:DataBind('u',concat('ff16',$Pos),'Value','ValueChanged','ID',ddwrt:EscapeDelims(string(@ID)),'@personnelnotes')}"/>
							<SharePoint:FieldDescription runat="server" id="ff16description{$Pos}" FieldName="personnelnotes" ControlMode="Edit"/>
						</td>
					</tr>
					<tr>
						<td width="190px" valign="top" class="ms-formlabel">
							<H3 class="ms-standardheader">
								<nobr>Position</nobr>
							</H3>
						</td>
						<td width="400px" valign="top" class="ms-formbody">
							<SharePoint:FormField runat="server" id="ff17{$Pos}" ControlMode="Edit" FieldName="Position" __designer:bind="{ddwrt:DataBind('u',concat('ff17',$Pos),'Value','ValueChanged','ID',ddwrt:EscapeDelims(string(@ID)),'@Position')}"/>
							<SharePoint:FieldDescription runat="server" id="ff17description{$Pos}" FieldName="Position" ControlMode="Edit"/>
						</td>
					</tr>
					<tr>
						<td width="190px" valign="top" class="ms-formlabel">
							<H3 class="ms-standardheader">
								<nobr>Source(Rank)</nobr>
							</H3>
						</td>
						<td width="400px" valign="top" class="ms-formbody">
							<SharePoint:FormField runat="server" id="ff18{$Pos}" ControlMode="Edit" FieldName="sourcerank" __designer:bind="{ddwrt:DataBind('u',concat('ff18',$Pos),'Value','ValueChanged','ID',ddwrt:EscapeDelims(string(@ID)),'@sourcerank')}"/>
							<SharePoint:FieldDescription runat="server" id="ff18description{$Pos}" FieldName="sourcerank" ControlMode="Edit"/>
						</td>
					</tr>
					<tr>
						<td width="190px" valign="top" class="ms-formlabel">
							<H3 class="ms-standardheader">
								<nobr>WIN</nobr>
							</H3>
						</td>
						<td width="400px" valign="top" class="ms-formbody">
							<SharePoint:FormField runat="server" id="ff19{$Pos}" ControlMode="Edit" FieldName="WIN" __designer:bind="{ddwrt:DataBind('u',concat('ff19',$Pos),'Value','ValueChanged','ID',ddwrt:EscapeDelims(string(@ID)),'@WIN')}"/>
							<SharePoint:FieldDescription runat="server" id="ff19description{$Pos}" FieldName="WIN" ControlMode="Edit"/>
						</td>
					</tr>
					<tr>
						<td width="190px" valign="top" class="ms-formlabel">
							<H3 class="ms-standardheader">
								<nobr>G6 Notes and Comments</nobr>
							</H3>
						</td>
						<td width="400px" valign="top" class="ms-formbody">
							<SharePoint:FormField runat="server" id="ff20{$Pos}" ControlMode="Edit" FieldName="g6notesandcomments" __designer:bind="{ddwrt:DataBind('u',concat('ff20',$Pos),'Value','ValueChanged','ID',ddwrt:EscapeDelims(string(@ID)),'@g6notesandcomments')}"/>
							<SharePoint:FieldDescription runat="server" id="ff20description{$Pos}" FieldName="g6notesandcomments" ControlMode="Edit"/>
						</td>
					</tr>
					<tr>
						<td width="190px" valign="top" class="ms-formlabel">
							<H3 class="ms-standardheader">
								<nobr>Actual Move Date</nobr>
							</H3>
						</td>
						<td width="400px" valign="top" class="ms-formbody">
							<SharePoint:FormField runat="server" id="ff21{$Pos}" ControlMode="Edit" FieldName="actualmovedate" __designer:bind="{ddwrt:DataBind('u',concat('ff21',$Pos),'Value','ValueChanged','ID',ddwrt:EscapeDelims(string(@ID)),'@actualmovedate')}"/>
							<SharePoint:FieldDescription runat="server" id="ff21description{$Pos}" FieldName="actualmovedate" ControlMode="Edit"/>
						</td>
					</tr>
					<tr>
						<td width="190px" valign="top" class="ms-formlabel">
							<H3 class="ms-standardheader">
								<nobr>Effective Move Date</nobr>
							</H3>
						</td>
						<td width="400px" valign="top" class="ms-formbody">
							<SharePoint:FormField runat="server" id="ff22{$Pos}" ControlMode="Edit" FieldName="effectivemovedate" __designer:bind="{ddwrt:DataBind('u',concat('ff22',$Pos),'Value','ValueChanged','ID',ddwrt:EscapeDelims(string(@ID)),'@effectivemovedate')}"/>
							<SharePoint:FieldDescription runat="server" id="ff22description{$Pos}" FieldName="effectivemovedate" ControlMode="Edit"/>
						</td>
					</tr>
					<tr>
						<td width="190px" valign="top" class="ms-formlabel">
							<H3 class="ms-standardheader">
								<nobr>Processing Time</nobr>
							</H3>
						</td>
						<td width="400px" valign="top" class="ms-formbody">
							<SharePoint:FormField runat="server" id="ff23{$Pos}" ControlMode="Edit" FieldName="processingtime" __designer:bind="{ddwrt:DataBind('u',concat('ff23',$Pos),'Value','ValueChanged','ID',ddwrt:EscapeDelims(string(@ID)),'@processingtime')}"/>
							<SharePoint:FieldDescription runat="server" id="ff23description{$Pos}" FieldName="processingtime" ControlMode="Edit"/>
						</td>
					</tr>
					<tr>
						<td width="190px" valign="top" class="ms-formlabel">
							<H3 class="ms-standardheader">
								<nobr>Projected Return</nobr>
							</H3>
						</td>
						<td width="400px" valign="top" class="ms-formbody">
							<SharePoint:FormField runat="server" id="ff24{$Pos}" ControlMode="Edit" FieldName="projectedreturn" __designer:bind="{ddwrt:DataBind('u',concat('ff24',$Pos),'Value','ValueChanged','ID',ddwrt:EscapeDelims(string(@ID)),'@projectedreturn')}"/>
							<SharePoint:FieldDescription runat="server" id="ff24description{$Pos}" FieldName="projectedreturn" ControlMode="Edit"/>
						</td>
					</tr>
					<tr>
						<td width="190px" valign="top" class="ms-formlabel">
							<H3 class="ms-standardheader">
								<nobr>Movement Type</nobr>
							</H3>
						</td>
						<td width="400px" valign="top" class="ms-formbody">
							<SharePoint:FormField runat="server" id="ff25{$Pos}" ControlMode="Edit" FieldName="typeofinternalchange" __designer:bind="{ddwrt:DataBind('u',concat('ff25',$Pos),'Value','ValueChanged','ID',ddwrt:EscapeDelims(string(@ID)),'@typeofinternalchange')}"/>
							<SharePoint:FieldDescription runat="server" id="ff25description{$Pos}" FieldName="typeofinternalchange" ControlMode="Edit"/>
						</td>
					</tr>
					<tr>
						<td width="190px" valign="top" class="ms-formlabel">
							<H3 class="ms-standardheader">
								<nobr>Cancel Internal Change?</nobr>
							</H3>
						</td>
						<td width="400px" valign="top" class="ms-formbody">
							<SharePoint:FormField runat="server" id="ff26{$Pos}" ControlMode="Edit" FieldName="cancelinternalchange" __designer:bind="{ddwrt:DataBind('u',concat('ff26',$Pos),'Value','ValueChanged','ID',ddwrt:EscapeDelims(string(@ID)),'@cancelinternalchange')}"/>
							<SharePoint:FieldDescription runat="server" id="ff26description{$Pos}" FieldName="cancelinternalchange" ControlMode="Edit"/>
						</td>
					</tr>
					<tr>
						<td width="190px" valign="top" class="ms-formlabel">
							<H3 class="ms-standardheader">
								<nobr>G1 Notes and Comments</nobr>
							</H3>
						</td>
						<td width="400px" valign="top" class="ms-formbody">
							<SharePoint:FormField runat="server" id="ff27{$Pos}" ControlMode="Edit" FieldName="g1notesandcomments" __designer:bind="{ddwrt:DataBind('u',concat('ff27',$Pos),'Value','ValueChanged','ID',ddwrt:EscapeDelims(string(@ID)),'@g1notesandcomments')}"/>
							<SharePoint:FieldDescription runat="server" id="ff27description{$Pos}" FieldName="g1notesandcomments" ControlMode="Edit"/>
						</td>
					</tr>
					<tr>
						<td width="190px" valign="top" class="ms-formlabel">
							<H3 class="ms-standardheader">
								<nobr>G2 Notes and Comments</nobr>
							</H3>
						</td>
						<td width="400px" valign="top" class="ms-formbody">
							<SharePoint:FormField runat="server" id="ff28{$Pos}" ControlMode="Edit" FieldName="g2notesandcomments" __designer:bind="{ddwrt:DataBind('u',concat('ff28',$Pos),'Value','ValueChanged','ID',ddwrt:EscapeDelims(string(@ID)),'@g2notesandcomments')}"/>
							<SharePoint:FieldDescription runat="server" id="ff28description{$Pos}" FieldName="g2notesandcomments" ControlMode="Edit"/>
						</td>
					</tr>
					<tr>
						<td width="190px" valign="top" class="ms-formlabel">
							<H3 class="ms-standardheader">
								<nobr>HCM Notes and Comments</nobr>
							</H3>
						</td>
						<td width="400px" valign="top" class="ms-formbody">
							<SharePoint:FormField runat="server" id="ff29{$Pos}" ControlMode="Edit" FieldName="HCMnotesandcomments" __designer:bind="{ddwrt:DataBind('u',concat('ff29',$Pos),'Value','ValueChanged','ID',ddwrt:EscapeDelims(string(@ID)),'@HCMnotesandcomments')}"/>
							<SharePoint:FieldDescription runat="server" id="ff29description{$Pos}" FieldName="HCMnotesandcomments" ControlMode="Edit"/>
						</td>
					</tr>
					<tr>
						<td width="190px" valign="top" class="ms-formlabel">
							<H3 class="ms-standardheader">
								<nobr>Military Notes and Comments</nobr>
							</H3>
						</td>
						<td width="400px" valign="top" class="ms-formbody">
							<SharePoint:FormField runat="server" id="ff30{$Pos}" ControlMode="Edit" FieldName="militarynotesandcomments" __designer:bind="{ddwrt:DataBind('u',concat('ff30',$Pos),'Value','ValueChanged','ID',ddwrt:EscapeDelims(string(@ID)),'@militarynotesandcomments')}"/>
							<SharePoint:FieldDescription runat="server" id="ff30description{$Pos}" FieldName="militarynotesandcomments" ControlMode="Edit"/>
						</td>
					</tr>
					<tr>
						<td width="190px" valign="top" class="ms-formlabel">
							<H3 class="ms-standardheader">
								<nobr>OPS Notes and Comments</nobr>
							</H3>
						</td>
						<td width="400px" valign="top" class="ms-formbody">
							<SharePoint:FormField runat="server" id="ff31{$Pos}" ControlMode="Edit" FieldName="OPSnotesandcomments" __designer:bind="{ddwrt:DataBind('u',concat('ff31',$Pos),'Value','ValueChanged','ID',ddwrt:EscapeDelims(string(@ID)),'@OPSnotesandcomments')}"/>
							<SharePoint:FieldDescription runat="server" id="ff31description{$Pos}" FieldName="OPSnotesandcomments" ControlMode="Edit"/>
						</td>
					</tr>
					<tr>
						<td width="190px" valign="top" class="ms-formlabel">
							<H3 class="ms-standardheader">
								<nobr>Append-Only Comments</nobr>
							</H3>
						</td>
						<td width="400px" valign="top" class="ms-formbody">
							<SharePoint:FormField runat="server" id="ff32{$Pos}" ControlMode="Edit" FieldName="V3Comments" __designer:bind="{ddwrt:DataBind('u',concat('ff32',$Pos),'Value','ValueChanged','ID',ddwrt:EscapeDelims(string(@ID)),'@V3Comments')}"/>
							<SharePoint:FieldDescription runat="server" id="ff32description{$Pos}" FieldName="V3Comments" ControlMode="Edit"/>
						</td>
					</tr>
					<tr>
						<td width="190px" valign="top" class="ms-formlabel">
							<H3 class="ms-standardheader">
								<nobr>DTS</nobr>
							</H3>
						</td>
						<td width="400px" valign="top" class="ms-formbody">
							<SharePoint:FormField runat="server" id="ff33{$Pos}" ControlMode="Edit" FieldName="DTS" __designer:bind="{ddwrt:DataBind('u',concat('ff33',$Pos),'Value','ValueChanged','ID',ddwrt:EscapeDelims(string(@ID)),'@DTS')}"/>
							<SharePoint:FieldDescription runat="server" id="ff33description{$Pos}" FieldName="DTS" ControlMode="Edit"/>
						</td>
					</tr>
					<tr>
						<td width="190px" valign="top" class="ms-formlabel">
							<H3 class="ms-standardheader">
								<nobr>Equipment Setup/On-Hand</nobr>
							</H3>
						</td>
						<td width="400px" valign="top" class="ms-formbody">
							<SharePoint:FormField runat="server" id="ff34{$Pos}" ControlMode="Edit" FieldName="EquipmentSetupOnHandUpdateDataba" __designer:bind="{ddwrt:DataBind('u',concat('ff34',$Pos),'Value','ValueChanged','ID',ddwrt:EscapeDelims(string(@ID)),'@EquipmentSetupOnHandUpdateDataba')}"/>
							<SharePoint:FieldDescription runat="server" id="ff34description{$Pos}" FieldName="EquipmentSetupOnHandUpdateDataba" ControlMode="Edit"/>
						</td>
					</tr>
					<tr>
						<td width="190px" valign="top" class="ms-formlabel">
							<H3 class="ms-standardheader">
								<nobr>G4 Notes and Comments</nobr>
							</H3>
						</td>
						<td width="400px" valign="top" class="ms-formbody">
							<SharePoint:FormField runat="server" id="ff35{$Pos}" ControlMode="Edit" FieldName="g4notesandcomments" __designer:bind="{ddwrt:DataBind('u',concat('ff35',$Pos),'Value','ValueChanged','ID',ddwrt:EscapeDelims(string(@ID)),'@g4notesandcomments')}"/>
							<SharePoint:FieldDescription runat="server" id="ff35description{$Pos}" FieldName="g4notesandcomments" ControlMode="Edit"/>
						</td>
					</tr>
					<tr>
						<td width="190px" valign="top" class="ms-formlabel">
							<H3 class="ms-standardheader">
								<nobr>GTCC</nobr>
							</H3>
						</td>
						<td width="400px" valign="top" class="ms-formbody">
							<SharePoint:FormField runat="server" id="ff36{$Pos}" ControlMode="Edit" FieldName="GTCC" __designer:bind="{ddwrt:DataBind('u',concat('ff36',$Pos),'Value','ValueChanged','ID',ddwrt:EscapeDelims(string(@ID)),'@GTCC')}"/>
							<SharePoint:FieldDescription runat="server" id="ff36description{$Pos}" FieldName="GTCC" ControlMode="Edit"/>
						</td>
					</tr>
					<tr>
						<td width="190px" valign="top" class="ms-formlabel">
							<H3 class="ms-standardheader">
								<nobr>Update Badge</nobr>
							</H3>
						</td>
						<td width="400px" valign="top" class="ms-formbody">
							<SharePoint:FormField runat="server" id="ff37{$Pos}" ControlMode="Edit" FieldName="UpdateBadge0" __designer:bind="{ddwrt:DataBind('u',concat('ff37',$Pos),'Value','ValueChanged','ID',ddwrt:EscapeDelims(string(@ID)),'@UpdateBadge0')}"/>
							<SharePoint:FieldDescription runat="server" id="ff37description{$Pos}" FieldName="UpdateBadge0" ControlMode="Edit"/>
						</td>
					</tr>
					<tr>
						<td width="190px" valign="top" class="ms-formlabel">
							<H3 class="ms-standardheader">
								<nobr>Update Database</nobr>
							</H3>
						</td>
						<td width="400px" valign="top" class="ms-formbody">
							<SharePoint:FormField runat="server" id="ff38{$Pos}" ControlMode="Edit" FieldName="UpdateDatabase0" __designer:bind="{ddwrt:DataBind('u',concat('ff38',$Pos),'Value','ValueChanged','ID',ddwrt:EscapeDelims(string(@ID)),'@UpdateDatabase0')}"/>
							<SharePoint:FieldDescription runat="server" id="ff38description{$Pos}" FieldName="UpdateDatabase0" ControlMode="Edit"/>
						</td>
					</tr>
					<tr>
						<td width="190px" valign="top" class="ms-formlabel">
							<H3 class="ms-standardheader">
								<nobr>Update GAL</nobr>
							</H3>
						</td>
						<td width="400px" valign="top" class="ms-formbody">
							<SharePoint:FormField runat="server" id="ff39{$Pos}" ControlMode="Edit" FieldName="UpdateGAL" __designer:bind="{ddwrt:DataBind('u',concat('ff39',$Pos),'Value','ValueChanged','ID',ddwrt:EscapeDelims(string(@ID)),'@UpdateGAL')}"/>
							<SharePoint:FieldDescription runat="server" id="ff39description{$Pos}" FieldName="UpdateGAL" ControlMode="Edit"/>
						</td>
					</tr>
					<tr>
						<td width="190px" valign="top" class="ms-formlabel">
							<H3 class="ms-standardheader">
								<nobr>Update MOL</nobr>
							</H3>
						</td>
						<td width="400px" valign="top" class="ms-formbody">
							<SharePoint:FormField runat="server" id="ff40{$Pos}" ControlMode="Edit" FieldName="UpdateMOL0" __designer:bind="{ddwrt:DataBind('u',concat('ff40',$Pos),'Value','ValueChanged','ID',ddwrt:EscapeDelims(string(@ID)),'@UpdateMOL0')}"/>
							<SharePoint:FieldDescription runat="server" id="ff40description{$Pos}" FieldName="UpdateMOL0" ControlMode="Edit"/>
						</td>
					</tr>
					<tr>
						<td width="190px" valign="top" class="ms-formlabel">
							<H3 class="ms-standardheader">
								<nobr>Update Software License Database</nobr>
							</H3>
						</td>
						<td width="400px" valign="top" class="ms-formbody">
							<SharePoint:FormField runat="server" id="ff41{$Pos}" ControlMode="Edit" FieldName="UpdateSoftwareLicenseDatabase0" __designer:bind="{ddwrt:DataBind('u',concat('ff41',$Pos),'Value','ValueChanged','ID',ddwrt:EscapeDelims(string(@ID)),'@UpdateSoftwareLicenseDatabase0')}"/>
							<SharePoint:FieldDescription runat="server" id="ff41description{$Pos}" FieldName="UpdateSoftwareLicenseDatabase0" ControlMode="Edit"/>
						</td>
					</tr>
					<tr>
						<td width="190px" valign="top" class="ms-formlabel">
							<H3 class="ms-standardheader">
								<nobr>Update WMS</nobr>
							</H3>
						</td>
						<td width="400px" valign="top" class="ms-formbody">
							<SharePoint:FormField runat="server" id="ff42{$Pos}" ControlMode="Edit" FieldName="UpdateWMS0" __designer:bind="{ddwrt:DataBind('u',concat('ff42',$Pos),'Value','ValueChanged','ID',ddwrt:EscapeDelims(string(@ID)),'@UpdateWMS0')}"/>
							<SharePoint:FieldDescription runat="server" id="ff42description{$Pos}" FieldName="UpdateWMS0" ControlMode="Edit"/>
						</td>
					</tr>
					<tr>
						<td width="190px" valign="top" class="ms-formlabel">
							<H3 class="ms-standardheader">
								<nobr>Verify Admin Dev Accts</nobr>
							</H3>
						</td>
						<td width="400px" valign="top" class="ms-formbody">
							<SharePoint:FormField runat="server" id="ff43{$Pos}" ControlMode="Edit" FieldName="VerifyAdminDevAccts0" __designer:bind="{ddwrt:DataBind('u',concat('ff43',$Pos),'Value','ValueChanged','ID',ddwrt:EscapeDelims(string(@ID)),'@VerifyAdminDevAccts0')}"/>
							<SharePoint:FieldDescription runat="server" id="ff43description{$Pos}" FieldName="VerifyAdminDevAccts0" ControlMode="Edit"/>
						</td>
					</tr>
					<tr>
						<td width="190px" valign="top" class="ms-formlabel">
							<H3 class="ms-standardheader">
								<nobr>Verify Alt Token</nobr>
							</H3>
						</td>
						<td width="400px" valign="top" class="ms-formbody">
							<SharePoint:FormField runat="server" id="ff44{$Pos}" ControlMode="Edit" FieldName="VerifyAltToken0" __designer:bind="{ddwrt:DataBind('u',concat('ff44',$Pos),'Value','ValueChanged','ID',ddwrt:EscapeDelims(string(@ID)),'@VerifyAltToken0')}"/>
							<SharePoint:FieldDescription runat="server" id="ff44description{$Pos}" FieldName="VerifyAltToken0" ControlMode="Edit"/>
						</td>
					</tr>
					<tr>
						<td width="190px" valign="top" class="ms-formlabel">
							<H3 class="ms-standardheader">
								<nobr>Verify BES Acct</nobr>
							</H3>
						</td>
						<td width="400px" valign="top" class="ms-formbody">
							<SharePoint:FormField runat="server" id="ff45{$Pos}" ControlMode="Edit" FieldName="VerifyBESAcct0" __designer:bind="{ddwrt:DataBind('u',concat('ff45',$Pos),'Value','ValueChanged','ID',ddwrt:EscapeDelims(string(@ID)),'@VerifyBESAcct0')}"/>
							<SharePoint:FieldDescription runat="server" id="ff45description{$Pos}" FieldName="VerifyBESAcct0" ControlMode="Edit"/>
						</td>
					</tr>
					<tr>
						<td width="190px" valign="top" class="ms-formlabel">
							<H3 class="ms-standardheader">
								<nobr>Verify Controlled Access</nobr>
							</H3>
						</td>
						<td width="400px" valign="top" class="ms-formbody">
							<SharePoint:FormField runat="server" id="ff46{$Pos}" ControlMode="Edit" FieldName="VerifyControlledAccess0" __designer:bind="{ddwrt:DataBind('u',concat('ff46',$Pos),'Value','ValueChanged','ID',ddwrt:EscapeDelims(string(@ID)),'@VerifyControlledAccess0')}"/>
							<SharePoint:FieldDescription runat="server" id="ff46description{$Pos}" FieldName="VerifyControlledAccess0" ControlMode="Edit"/>
						</td>
					</tr>
					<tr>
						<td width="190px" valign="top" class="ms-formlabel">
							<H3 class="ms-standardheader">
								<nobr>Verify Group Mailbox Ownership</nobr>
							</H3>
						</td>
						<td width="400px" valign="top" class="ms-formbody">
							<SharePoint:FormField runat="server" id="ff47{$Pos}" ControlMode="Edit" FieldName="VerifyGroupMailboxOwnership0" __designer:bind="{ddwrt:DataBind('u',concat('ff47',$Pos),'Value','ValueChanged','ID',ddwrt:EscapeDelims(string(@ID)),'@VerifyGroupMailboxOwnership0')}"/>
							<SharePoint:FieldDescription runat="server" id="ff47description{$Pos}" FieldName="VerifyGroupMailboxOwnership0" ControlMode="Edit"/>
						</td>
					</tr>
					<tr>
						<td width="190px" valign="top" class="ms-formlabel">
							<H3 class="ms-standardheader">
								<nobr>Verify ITPRAS Acct</nobr>
							</H3>
						</td>
						<td width="400px" valign="top" class="ms-formbody">
							<SharePoint:FormField runat="server" id="ff48{$Pos}" ControlMode="Edit" FieldName="VerifyITPRASAcct0" __designer:bind="{ddwrt:DataBind('u',concat('ff48',$Pos),'Value','ValueChanged','ID',ddwrt:EscapeDelims(string(@ID)),'@VerifyITPRASAcct0')}"/>
							<SharePoint:FieldDescription runat="server" id="ff48description{$Pos}" FieldName="VerifyITPRASAcct0" ControlMode="Edit"/>
						</td>
					</tr>
					<tr>
						<td width="190px" valign="top" class="ms-formlabel">
							<H3 class="ms-standardheader">
								<nobr>Verify JPAS</nobr>
							</H3>
						</td>
						<td width="400px" valign="top" class="ms-formbody">
							<SharePoint:FormField runat="server" id="ff49{$Pos}" ControlMode="Edit" FieldName="VerifyJPAS" __designer:bind="{ddwrt:DataBind('u',concat('ff49',$Pos),'Value','ValueChanged','ID',ddwrt:EscapeDelims(string(@ID)),'@VerifyJPAS')}"/>
							<SharePoint:FieldDescription runat="server" id="ff49description{$Pos}" FieldName="VerifyJPAS" ControlMode="Edit"/>
						</td>
					</tr>
					<tr>
						<td width="190px" valign="top" class="ms-formlabel">
							<H3 class="ms-standardheader">
								<nobr>Verify SCO SCA Status</nobr>
							</H3>
						</td>
						<td width="400px" valign="top" class="ms-formbody">
							<SharePoint:FormField runat="server" id="ff50{$Pos}" ControlMode="Edit" FieldName="VerifySCOSCAStatus0" __designer:bind="{ddwrt:DataBind('u',concat('ff50',$Pos),'Value','ValueChanged','ID',ddwrt:EscapeDelims(string(@ID)),'@VerifySCOSCAStatus0')}"/>
							<SharePoint:FieldDescription runat="server" id="ff50description{$Pos}" FieldName="VerifySCOSCAStatus0" ControlMode="Edit"/>
						</td>
					</tr>
					<tr>
						<td width="190px" valign="top" class="ms-formlabel">
							<H3 class="ms-standardheader">
								<nobr>Verify SD and DL Membership</nobr>
							</H3>
						</td>
						<td width="400px" valign="top" class="ms-formbody">
							<SharePoint:FormField runat="server" id="ff51{$Pos}" ControlMode="Edit" FieldName="VerifySDandDLMembership0" __designer:bind="{ddwrt:DataBind('u',concat('ff51',$Pos),'Value','ValueChanged','ID',ddwrt:EscapeDelims(string(@ID)),'@VerifySDandDLMembership0')}"/>
							<SharePoint:FieldDescription runat="server" id="ff51description{$Pos}" FieldName="VerifySDandDLMembership0" ControlMode="Edit"/>
						</td>
					</tr>
					<tr>
						<td width="190px" valign="top" class="ms-formlabel">
							<H3 class="ms-standardheader">
								<nobr>Verify SIPR Token</nobr>
							</H3>
						</td>
						<td width="400px" valign="top" class="ms-formbody">
							<SharePoint:FormField runat="server" id="ff52{$Pos}" ControlMode="Edit" FieldName="VerifySIPRToken0" __designer:bind="{ddwrt:DataBind('u',concat('ff52',$Pos),'Value','ValueChanged','ID',ddwrt:EscapeDelims(string(@ID)),'@VerifySIPRToken0')}"/>
							<SharePoint:FieldDescription runat="server" id="ff52description{$Pos}" FieldName="VerifySIPRToken0" ControlMode="Edit"/>
						</td>
					</tr>
					<tr>
						<td width="190px" valign="top" class="ms-formlabel">
							<H3 class="ms-standardheader">
								<nobr>LastModified1</nobr>
							</H3>
						</td>
						<td width="400px" valign="top" class="ms-formbody">
							<SharePoint:FormField runat="server" id="ff53{$Pos}" ControlMode="Edit" FieldName="LastModified1" __designer:bind="{ddwrt:DataBind('u',concat('ff53',$Pos),'Value','ValueChanged','ID',ddwrt:EscapeDelims(string(@ID)),'@LastModified1')}"/>
							<SharePoint:FieldDescription runat="server" id="ff53description{$Pos}" FieldName="LastModified1" ControlMode="Edit"/>
						</td>
					</tr>
					<tr>
						<td width="190px" valign="top" class="ms-formlabel">
							<H3 class="ms-standardheader">
								<nobr>LastModified2</nobr>
							</H3>
						</td>
						<td width="400px" valign="top" class="ms-formbody">
							<SharePoint:FormField runat="server" id="ff54{$Pos}" ControlMode="Edit" FieldName="LastModified2" __designer:bind="{ddwrt:DataBind('u',concat('ff54',$Pos),'Value','ValueChanged','ID',ddwrt:EscapeDelims(string(@ID)),'@LastModified2')}"/>
							<SharePoint:FieldDescription runat="server" id="ff54description{$Pos}" FieldName="LastModified2" ControlMode="Edit"/>
						</td>
					</tr>
					<tr>
						<td width="190px" valign="top" class="ms-formlabel">
							<H3 class="ms-standardheader">
								<nobr>LastModified3</nobr>
							</H3>
						</td>
						<td width="400px" valign="top" class="ms-formbody">
							<SharePoint:FormField runat="server" id="ff55{$Pos}" ControlMode="Edit" FieldName="LastModified3" __designer:bind="{ddwrt:DataBind('u',concat('ff55',$Pos),'Value','ValueChanged','ID',ddwrt:EscapeDelims(string(@ID)),'@LastModified3')}"/>
							<SharePoint:FieldDescription runat="server" id="ff55description{$Pos}" FieldName="LastModified3" ControlMode="Edit"/>
						</td>
					</tr>
					<tr>
						<td width="190px" valign="top" class="ms-formlabel">
							<H3 class="ms-standardheader">
								<nobr>LastModified4</nobr>
							</H3>
						</td>
						<td width="400px" valign="top" class="ms-formbody">
							<SharePoint:FormField runat="server" id="ff56{$Pos}" ControlMode="Edit" FieldName="LastModified4" __designer:bind="{ddwrt:DataBind('u',concat('ff56',$Pos),'Value','ValueChanged','ID',ddwrt:EscapeDelims(string(@ID)),'@LastModified4')}"/>
							<SharePoint:FieldDescription runat="server" id="ff56description{$Pos}" FieldName="LastModified4" ControlMode="Edit"/>
						</td>
					</tr>
					<tr>
						<td width="190px" valign="top" class="ms-formlabel">
							<H3 class="ms-standardheader">
								<nobr>LastModified5</nobr>
							</H3>
						</td>
						<td width="400px" valign="top" class="ms-formbody">
							<SharePoint:FormField runat="server" id="ff57{$Pos}" ControlMode="Edit" FieldName="LastModified5" __designer:bind="{ddwrt:DataBind('u',concat('ff57',$Pos),'Value','ValueChanged','ID',ddwrt:EscapeDelims(string(@ID)),'@LastModified5')}"/>
							<SharePoint:FieldDescription runat="server" id="ff57description{$Pos}" FieldName="LastModified5" ControlMode="Edit"/>
						</td>
					</tr>
					<tr id="idAttachmentsRow">
						<td nowrap="true" valign="top" class="ms-formlabel" width="20%">
							<SharePoint:FieldLabel ControlMode="Edit" FieldName="Attachments" runat="server"/>
						</td>
						<td valign="top" class="ms-formbody" width="80%">
							<SharePoint:FormField runat="server" id="AttachmentsField" ControlMode="Edit" FieldName="Attachments" __designer:bind="{ddwrt:DataBind('u','AttachmentsField','Value','ValueChanged','ID',ddwrt:EscapeDelims(string(@ID)),'@Attachments')}"/>
							<script>
          var elm = document.getElementById(&quot;idAttachmentsTable&quot;);
          if (elm == null || elm.rows.length == 0)
          document.getElementById(&quot;idAttachmentsRow&quot;).style.display=&apos;none&apos;;
        </script>
						</td>
					</tr>
					<xsl:if test="$dvt_1_automode = '1'" ddwrt:cf_ignore="1">
						<tr>
							<td colspan="99" class="ms-vb">
								<span ddwrt:amkeyfield="ID" ddwrt:amkeyvalue="ddwrt:EscapeDelims(string(@ID))" ddwrt:ammode="view"></span>
							</td>
						</tr>
					</xsl:if>
				</table>
			</td>
		</tr>
	</xsl:template>
</xsl:stylesheet>	</Xsl>
<DataFields>@Title,Title;@admincompletedate,Admin Complete Date;@_x0031_stlinesupervisor,1st Line Supervisor;@actualreturndate,Actual Return Date;@adminnotesandcomments,Admin Notes and Comments;@BLDG,BLDG;@currentlocation,Current Location;@dataport,Data Port;@Destination,Destination;@Email,Email;@gainingorg,Gaining Org;@gainingworksection,Gaining Work Section;@Identity,Identity;@losingorg,Losing Org;@losingworksection,Losing Work Section;@personnelnotes,Personnel Notes;@Position,Position;@sourcerank,Source(Rank);@WIN,WIN;@equipmentsetuponhand,Equipment Setup/On-hand;@g6notesandcomments,G6 Notes and Comments;@actualmovedate,Actual Move Date;@effectivemovedate,Effective Move Date;@processingtime,Processing Time;@projectedreturn,Projected Return;@typeofinternalchange,Movement Type;@cancelinternalchange,Cancel Internal Change?;@g1notesandcomments,G1 Notes and Comments;@g2notesandcomments,G2 Notes and Comments;@g4notesandcomments1,G4 Notes and Comments;@HCMnotesandcomments,HCM Notes and Comments;@militarynotesandcomments,Military Notes and Comments;@OPSnotesandcomments,OPS Notes and Comments;@currentlocation2,Current Location2;@destination2,Destination2;@V3Comments,Append-Only Comments;@fullname,FullName;@DTS,DTS;@EquipmentSetupOnHandUpdateDataba,Equipment Setup/On-Hand;@g4notesandcomments,G4 Notes and Comments;@GTCC,GTCC;@UpdateBadge0,Update Badge;@UpdateDatabase0,Update Database;@UpdateGAL,Update GAL;@UpdateMOL0,Update MOL;@UpdateSoftwareLicenseDatabase0,Update Software License Database;@UpdateWMS0,Update WMS;@VerifyAdminDevAccts0,Verify Admin Dev Accts;@VerifyAltToken0,Verify Alt Token;@VerifyBESAcct0,Verify BES Acct;@VerifyControlledAccess0,Verify Controlled Access;@VerifyGroupMailboxOwnership0,Verify Group Mailbox Ownership;@VerifyITPRASAcct0,Verify ITPRAS Acct;@VerifyJPAS,Verify JPAS;@VerifySCOSCAStatus0,Verify SCO SCA Status;@VerifySDandDLMembership0,Verify SD and DL Membership;@VerifySIPRToken0,Verify SIPR Token;@LastModified1,LastModified1;@LastModified2,LastModified2;@LastModified3,LastModified3;@LastModified4,LastModified4;@LastModified5,LastModified5;@ID,ID;@ContentType,Content Type;@Modified,Modified;@Created,Created;@Author,Created By;@Editor,Modified By;@_UIVersionString,Version;@Attachments,Attachments;@File_x0020_Type,File Type;@FileLeafRef,Name (for use in forms);@FileDirRef,Path;@FSObjType,Item Type;@_HasCopyDestinations,Has Copy Destinations;@_CopySource,Copy Source;@ContentTypeId,Content Type ID;@_ModerationStatus,Approval Status;@_UIVersion,UI Version;@Created_x0020_Date,Created;@FileRef,URL Path;@ItemChildCount,Item Child Count;@FolderChildCount,Folder Child Count;@AppAuthor,App Created By;@AppEditor,App Modified By;</DataFields>
<ParameterBindings>
		 <ParameterBinding Name="ListItemId" Location="QueryString(ID)" DefaultValue="0"/>
		 <ParameterBinding Name="weburl" Location="None" DefaultValue="https://mcscviper.usmc.mil/sites/vt"/>
		 <ParameterBinding Name="ListID" Location="None" DefaultValue="{59CEF730-CF0A-4100-8CC2-E1B11D311CD2}"/>
		 <ParameterBinding Name="dvt_apos" Location="Postback;Connection"/>
		 <ParameterBinding Name="ManualRefresh" Location="WPProperty[ManualRefresh]"/>
		 <ParameterBinding Name="UserID" Location="CAMLVariable" DefaultValue="CurrentUserName"/>
		 <ParameterBinding Name="Today" Location="CAMLVariable" DefaultValue="CurrentDate"/>
	 </ParameterBindings>
</WebPartPages:DataFormWebPart>

		</ZoneTemplate></WebPartPages:WebPartZone>
	  </td>
	 </tr>
	</table>
<SharePoint:UIVersionedContent UIVersion="4" runat="server">
	<ContentTemplate>
	</div>
	</ContentTemplate>
</SharePoint:UIVersionedContent>
</asp:Content>
<asp:Content ContentPlaceHolderId="PlaceHolderAdditionalPageHead" runat="server">
	<SharePoint:DelegateControl runat="server" ControlId="FormCustomRedirectControl" AllowMultipleControls="true"/>
	<SharePoint:UIVersionedContent UIVersion="4" runat="server"><ContentTemplate>
		<SharePoint:CssRegistration Name="forms.css" runat="server"/>
	</ContentTemplate></SharePoint:UIVersionedContent>
</asp:Content>
<asp:Content ContentPlaceHolderId="PlaceHolderTitleLeftBorder" runat="server">
<table cellpadding="0" height="100%" width="100%" cellspacing="0">
 <tr><td class="ms-areaseparatorleft"><img src="/_layouts/15/images/blank.gif?rev=23" width='1' height='1' alt="" /></td></tr>
</table>
</asp:Content>
<asp:Content ContentPlaceHolderId="PlaceHolderTitleAreaClass" runat="server">
<script type="text/javascript" id="onetidPageTitleAreaFrameScript">
	if (document.getElementById("onetidPageTitleAreaFrame") != null)
	{
		document.getElementById("onetidPageTitleAreaFrame").className="ms-areaseparator";
	}
</script>
</asp:Content>
<asp:Content ContentPlaceHolderId="PlaceHolderBodyAreaClass" runat="server">
<SharePoint:StyleBlock runat="server">
.ms-bodyareaframe {
	padding: 8px;
	border: none;
}
</SharePoint:StyleBlock>
</asp:Content>
<asp:Content ContentPlaceHolderId="PlaceHolderBodyLeftBorder" runat="server">
<div class='ms-areaseparatorleft'><img src="/_layouts/15/images/blank.gif?rev=23" width='8' height='100%' alt="" /></div>
</asp:Content>
<asp:Content ContentPlaceHolderId="PlaceHolderTitleRightMargin" runat="server">
<div class='ms-areaseparatorright'><img src="/_layouts/15/images/blank.gif?rev=23" width='8' height='100%' alt="" /></div>
</asp:Content>
<asp:Content ContentPlaceHolderId="PlaceHolderBodyRightMargin" runat="server">
<div class='ms-areaseparatorright'><img src="/_layouts/15/images/blank.gif?rev=23" width='8' height='100%' alt="" /></div>
</asp:Content>
<asp:Content ContentPlaceHolderId="PlaceHolderTitleAreaSeparator" runat="server"/>
