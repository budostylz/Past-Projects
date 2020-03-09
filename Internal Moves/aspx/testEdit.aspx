<%@ Page language="C#" MasterPageFile="~masterurl/default.master"    Inherits="Microsoft.SharePoint.WebPartPages.WebPartPage,Microsoft.SharePoint,Version=15.0.0.0,Culture=neutral,PublicKeyToken=71e9bce111e9429c" meta:progid="SharePoint.WebPartPage.Document" meta:webpartpageexpansion="full"  %>
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

<!--Add Edit Form Custom Styles and Scripts-->
<link rel="stylesheet" type="text/css" href="/sites/vt/SiteAssets/apps/CICO%20Internal%20Moves/form/css/editform.css" />
<link rel="stylesheet" href="/Scripts/js/jQuery%20UI/jquery-ui-1.12.1/jquery-ui-1.12.1/jquery-ui.css" />
<script type="text/javascript" src="/Scripts/js/jquery-1.12.4.js"></script>
<script type="text/javascript" src="/Scripts/js/lodash/development/lodash.4.17.11.js"></script>
<script type="text/javascript" src="/Scripts/js/angular/production/angular.1.7.8.min.js"></script>
<script type="text/javascript" src="/Scripts/js/jQuery%20UI/jquery-ui-1.12.1/jquery-ui-1.12.1/jquery-ui.js"></script>
<script type="text/javascript" src="/Scripts/js/moment/development/moment.js"></script>
<script type="text/javascript" src="/sites/vt/SiteAssets/apps/CICO%20Internal%20Moves/form/js/styles/styles.js"></script>

<script type="text/javascript" src="/sites/vt/SiteAssets/apps/CICO%20Internal%20Moves/form/js/store.js"></script>
<script type="text/javascript" src="/sites/vt/SiteAssets/apps/CICO%20Internal%20Moves/form/js/actions/actions.js"></script>
<script type="text/javascript" src="/sites/vt/SiteAssets/apps/CICO%20Internal%20Moves/form/js/reducers/reducers.js"></script>
<script type="text/javascript" src="/sites/vt/SiteAssets/apps/CICO%20Internal%20Moves/form/js/app.js"></script>
<script type="text/javascript" src="/sites/vt/SiteAssets/apps/CICO%20Internal%20Moves/form/js/middleware/logger.js"></script>

<script type="text/javascript" src="/sites/vt/SiteAssets/apps/CICO%20Internal%20Moves/form/js/utils/internalMovesModule.js"></script>
<script type="text/javascript" src="/sites/vt/SiteAssets/apps/CICO%20Internal%20Moves/form/js/utils/internalMovesAPI.js"></script>
<script type="text/javascript" src="/sites/vt/SiteAssets/apps/CICO%20Internal%20Moves/form/js/actions/loadState.js"></script>
<script type="text/javascript" src="/sites/vt/SiteAssets/apps/CICO%20Internal%20Moves/form/js/utils/peoplePicker.js"></script>
<script type="text/javascript" src="/sites/vt/SiteAssets/apps/CICO%20Internal%20Moves/form/js/utils/showInternalMovesModal.js"></script>
<script type="text/javascript" src="/sites/vt/SiteAssets/apps/CICO%20Internal%20Moves/form/js/utils/permissions.js"></script>
<script type="text/javascript" src="/sites/vt/SiteAssets/apps/CICO%20Internal%20Moves/form/js/utils/timeStamp.js"></script>





<div ng-app="app">
    <div ng-controller="loadStateCtrl as loadState"></div>
    <div ng-controller="personnelInfoCtrl as personnelState"></div>
	<div ng-controller="permissionsCtrl as permissionState"></div>
</div>

<a href="#">
<div class="internalMovesLabel widget blackbutton" style="position:relative;left:800px;top:150px">
	CLICK HERE FOR A DESCRIPTION OF MOVE TYPES
</div>


</a>


<SharePoint:UIVersionedContent UIVersion="4" runat="server">
	<ContentTemplate>
	<div style="padding-left:5px">
	</ContentTemplate>
</SharePoint:UIVersionedContent>
	<table class="ms-core-tableNoSpace" id="onetIDListForm">
	 <tr>
	  <td>
	 <WebPartPages:WebPartZone runat="server" FrameType="None" ID="Main" Title="loc:Main"><ZoneTemplate>
		<WebPartPages:DataFormWebPart runat="server" EnableOriginalValue="False" DisplayName="CICOInternalMoves11222019" ViewFlag="8" ViewContentTypeId="" Default="FALSE" ListName="{59CEF730-CF0A-4100-8CC2-E1B11D311CD2}" ListId="59cef730-cf0a-4100-8cc2-e1b11d311cd2" PageType="PAGE_EDITFORM" PageSize="-1" UseSQLDataSourcePaging="True" DataSourceID="" ShowWithSampleData="False" AsyncRefresh="False" ManualRefresh="False" AutoRefresh="False" AutoRefreshInterval="60" NoDefaultStyle="TRUE" InitialAsyncDataFetch="False" Title="CICOInternalMoves11222019" FrameType="None" SuppressWebPartChrome="False" Description="" IsIncluded="True" PartOrder="2" FrameState="Normal" AllowRemove="True" AllowZoneChange="True" AllowMinimize="True" AllowConnect="True" AllowEdit="True" AllowHide="True" IsVisible="True" DetailLink="" HelpLink="" HelpMode="Modeless" Dir="Default" PartImageSmall="" MissingAssembly="Cannot import this Web Part." PartImageLarge="" IsIncludedFilter="" ExportControlledProperties="True" ConnectionID="00000000-0000-0000-0000-000000000000" ID="g_bf25e03b_4a1a_4dec_b0f6_bab84dfc9242" ChromeType="None" ExportMode="All" __MarkupType="vsattributemarkup" __WebPartId="{BF25E03B-4A1A-4DEC-B0F6-BAB84DFC9242}" __AllowXSLTEditing="true" WebPart="true" Height="" Width=""><DataSources>
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

				<div style="width:1000px">

					<table>
						<tr>
							<td>

										<div id="processingTime" class="divGroup">
											
											<h3>Processing Time</h3>
											<table style="width:100%">
												
												<tbody>
													<tr>
														<td width="50">
														
															Effective Move Date:
													
														</td>
														<td width="50">
															<SharePoint:FormField runat="server" id="ff22{$Pos}" ControlMode="Edit" FieldName="effectivemovedate" __designer:bind="{ddwrt:DataBind('u',concat('ff22',$Pos),'Value','ValueChanged','ID',ddwrt:EscapeDelims(string(@ID)),'@effectivemovedate')}"/>
															<SharePoint:FieldDescription runat="server" id="ff22description{$Pos}" FieldName="effectivemovedate" ControlMode="Edit"/>

														
														
			
														</td>
	
														<td width="50" class="actualMoveDateTag">
														
														Actual Move Date:
														</td>
	
														
														<td valign="top" class="ms-formbody actualMoveDateTag">
															<SharePoint:FormField runat="server" id="ff21{$Pos}" ControlMode="Edit" FieldName="actualmovedate" __designer:bind="{ddwrt:DataBind('u',concat('ff21',$Pos),'Value','ValueChanged','ID',ddwrt:EscapeDelims(string(@ID)),'@actualmovedate')}"/>
															<SharePoint:FieldDescription runat="server" id="ff21description{$Pos}" FieldName="actualmovedate" ControlMode="Edit"/>

															<em id="AMDLastModified"></em><br/>

														
														
														</td>
														

														
													</tr>
													
													<tr style="display:none">
														<td valign="top" class="ms-formlabel">
														
														Cancel Move?
														</td>
	
														<td valign="top" class="ms-formbody">
															<SharePoint:FormField runat="server" id="ff26{$Pos}" ControlMode="Edit" FieldName="cancelinternalchange" __designer:bind="{ddwrt:DataBind('u',concat('ff26',$Pos),'Value','ValueChanged','ID',ddwrt:EscapeDelims(string(@ID)),'@cancelinternalchange')}"/>
															<SharePoint:FieldDescription runat="server" id="ff26description{$Pos}" FieldName="cancelinternalchange" ControlMode="Edit"/>


														</td>
														
							
			
													</tr>
												</tbody>
											</table>
										</div>


										<div id="personnelInfo" class="divGroup">
											
											<h3>Personnel Info</h3>
											<table style="width:100%">
												
												<tbody>

													<tr>
														<td valign="top" class="ms-formlabel">
														
														Move Type:
														</td>
	
														<td valign="top" class="ms-formbody">
															<SharePoint:FormField runat="server" id="ff25{$Pos}" ControlMode="Edit" FieldName="typeofinternalchange" __designer:bind="{ddwrt:DataBind('u',concat('ff25',$Pos),'Value','ValueChanged','ID',ddwrt:EscapeDelims(string(@ID)),'@typeofinternalchange')}"/>
															<SharePoint:FieldDescription runat="server" id="ff25description{$Pos}" FieldName="typeofinternalchange" ControlMode="Edit"/>

														
														
														</td>
	
	
													</tr>




													<tr>
														<td valign="top" class="ms-formlabel">
														
														Source(Rank):
														</td>
														
												
														<td valign="top" class="ms-formbody">
															<SharePoint:FormField runat="server" id="ff18{$Pos}" ControlMode="Edit" FieldName="sourcerank" DisplaySize="10" __designer:bind="{ddwrt:DataBind('u',concat('ff18',$Pos),'Value','ValueChanged','ID',ddwrt:EscapeDelims(string(@ID)),'@sourcerank')}"/>
															<SharePoint:FieldDescription runat="server" id="ff18description{$Pos}" FieldName="sourcerank" ControlMode="Edit"/>

				
														</td>
														
												
														<td valign="top" class="ms-formlabel">
														
														Name:
														</td>
														
												
	
														<td valign="top" class="ms-formbody">

															<SharePoint:FormField runat="server" id="ff13{$Pos}" ControlMode="Edit" FieldName="Identity" DisplaySize="25" __designer:bind="{ddwrt:DataBind('u',concat('ff13',$Pos),'Value','ValueChanged','ID',ddwrt:EscapeDelims(string(@ID)),'@Identity')}"/>
															<SharePoint:FieldDescription runat="server" id="ff13description{$Pos}" FieldName="Identity" ControlMode="Edit"/>

															
															<select id="peoplePickerResults"></select>
														</td>
	
														<td valign="top" class="ms-formlabel">
														
														Email:
														</td>
														<td valign="top" class="ms-formbody">

															<SharePoint:FormField runat="server" id="ff10{$Pos}" ControlMode="Edit" FieldName="Email" DisplaySize="25" __designer:bind="{ddwrt:DataBind('u',concat('ff10',$Pos),'Value','ValueChanged','ID',ddwrt:EscapeDelims(string(@ID)),'@Email')}"/>
															<SharePoint:FieldDescription runat="server" id="ff10description{$Pos}" FieldName="Email" ControlMode="Edit"/>

														
														
														</td>
														
							
	
														
							
							
													</tr>
													<tr class="pers_info_3rd_row">
														<td valign="top" class="ms-formlabel">
														
														Losing Org:
														</td>
														<td valign="top" class="ms-formbody">
															<SharePoint:FormField runat="server" id="ff14{$Pos}" ControlMode="Edit" FieldName="losingorg" __designer:bind="{ddwrt:DataBind('u',concat('ff14',$Pos),'Value','ValueChanged','ID',ddwrt:EscapeDelims(string(@ID)),'@losingorg')}"/>
															<SharePoint:FieldDescription runat="server" id="ff14description{$Pos}" FieldName="losingorg" ControlMode="Edit"/>

														</td>
														
							
														<td valign="top" class="ms-formlabel">
														
														Losing Work Section:
														</td>
														<td valign="top" class="ms-formbody">
															<SharePoint:FormField runat="server" id="ff15{$Pos}" ControlMode="Edit" FieldName="losingworksection" __designer:bind="{ddwrt:DataBind('u',concat('ff15',$Pos),'Value','ValueChanged','ID',ddwrt:EscapeDelims(string(@ID)),'@losingworksection')}"/>
															<SharePoint:FieldDescription runat="server" id="ff15description{$Pos}" FieldName="losingworksection" ControlMode="Edit"/>

														
														</td>
														
							
														<td valign="top" class="ms-formlabel">
														
														Gaining Org:
														</td>
														<td valign="top" class="ms-formbody">
															<SharePoint:FormField runat="server" id="ff11{$Pos}" ControlMode="Edit" FieldName="gainingorg" __designer:bind="{ddwrt:DataBind('u',concat('ff11',$Pos),'Value','ValueChanged','ID',ddwrt:EscapeDelims(string(@ID)),'@gainingorg')}"/>
															<SharePoint:FieldDescription runat="server" id="ff11description{$Pos}" FieldName="gainingorg" ControlMode="Edit"/>

														
														
														</td>
														
							
	
														<td valign="top" class="ms-formlabel">
														
														Gaining Work Section:
														</td>
														<td valign="top" class="ms-formbody">
															<SharePoint:FormField runat="server" id="ff12{$Pos}" ControlMode="Edit" FieldName="gainingworksection" __designer:bind="{ddwrt:DataBind('u',concat('ff12',$Pos),'Value','ValueChanged','ID',ddwrt:EscapeDelims(string(@ID)),'@gainingworksection')}"/>
															<SharePoint:FieldDescription runat="server" id="ff12description{$Pos}" FieldName="gainingworksection" ControlMode="Edit"/>

														
														
														</td>
														
							
	
													</tr>
													<tr>

													   <td valign="top" class="ms-formlabel">Current Location:</td>
														<td valign="top" class="ms-formbody">
															<SharePoint:FormField runat="server" id="ff7{$Pos}" ControlMode="Edit" FieldName="currentlocation" __designer:bind="{ddwrt:DataBind('u',concat('ff7',$Pos),'Value','ValueChanged','ID',ddwrt:EscapeDelims(string(@ID)),'@currentlocation')}"/>
															<SharePoint:FieldDescription runat="server" id="ff7description{$Pos}" FieldName="currentlocation" ControlMode="Edit"/>

														</td>	

														<td valign="top" class="destination ms-formlabel">Destination:</td>

														<td valign="top" class="destination ms-formbody">
																<SharePoint:FormField runat="server" id="ff9{$Pos}" ControlMode="Edit" FieldName="Destination" __designer:bind="{ddwrt:DataBind('u',concat('ff9',$Pos),'Value','ValueChanged','ID',ddwrt:EscapeDelims(string(@ID)),'@Destination')}"/>
																<SharePoint:FieldDescription runat="server" id="ff9description{$Pos}" FieldName="Destination" ControlMode="Edit"/>

														</td>




														<td valign="top" class="ms-formlabel">
														
														Position:
														</td>
	
														<td valign="top" class="ms-formbody">
															<SharePoint:FormField runat="server" id="ff17{$Pos}" ControlMode="Edit" FieldName="Position" DisplaySize="25" __designer:bind="{ddwrt:DataBind('u',concat('ff17',$Pos),'Value','ValueChanged','ID',ddwrt:EscapeDelims(string(@ID)),'@Position')}"/>
															<SharePoint:FieldDescription runat="server" id="ff17description{$Pos}" FieldName="Position" ControlMode="Edit"/>

														
														
														</td>
														
							
	
														<td valign="top" class="ms-formlabel">
														
														1st Line Supervisor:
														</td>
														<td valign="top" class="ms-formbody">
															<SharePoint:FormField runat="server" id="ff3{$Pos}" ControlMode="Edit" FieldName="_x0031_stlinesupervisor" DisplaySize="25" __designer:bind="{ddwrt:DataBind('u',concat('ff3',$Pos),'Value','ValueChanged','ID',ddwrt:EscapeDelims(string(@ID)),'@_x0031_stlinesupervisor')}"/>
															<SharePoint:FieldDescription runat="server" id="ff3description{$Pos}" FieldName="_x0031_stlinesupervisor" ControlMode="Edit"/>

														
														
														</td>

														
														
							
		
													</tr>

													<tr class="pers_info_5th_row">

														<td valign="top" class="ms-formlabel projectedReturnTag">Projected Return Date:</td>

														<td valign="top" class="ms-formbody">	
															<SharePoint:FormField runat="server" id="ff24{$Pos}" ControlMode="Edit" FieldName="projectedreturn" __designer:bind="{ddwrt:DataBind('u',concat('ff24',$Pos),'Value','ValueChanged','ID',ddwrt:EscapeDelims(string(@ID)),'@projectedreturn')}"/>
															<SharePoint:FieldDescription runat="server" id="ff24description{$Pos}" FieldName="projectedreturn" ControlMode="Edit"/>


														</td>
														
							
														<td valign="top" class="ms-formlabel">Actual Return Date:</td>
														<td valign="top" class="ms-formbody">
																<SharePoint:FormField runat="server" id="ff4{$Pos}" ControlMode="Edit" FieldName="actualreturndate" __designer:bind="{ddwrt:DataBind('u',concat('ff4',$Pos),'Value','ValueChanged','ID',ddwrt:EscapeDelims(string(@ID)),'@actualreturndate')}"/>
																<SharePoint:FieldDescription runat="server" id="ff4description{$Pos}" FieldName="actualreturndate" ControlMode="Edit"/>

														
														
														</td>

													</tr>
	
													<tr>
														<td valign="top" class="ms-formlabel">
														
														Notes:
														</td>
														<td valign="top" class="ms-formbody">
															<SharePoint:FormField runat="server" id="ff16{$Pos}" ControlMode="Edit" FieldName="personnelnotes" DisplaySize="50" __designer:bind="{ddwrt:DataBind('u',concat('ff16',$Pos),'Value','ValueChanged','ID',ddwrt:EscapeDelims(string(@ID)),'@personnelnotes')}"/>
															<SharePoint:FieldDescription runat="server" id="ff16description{$Pos}" FieldName="personnelnotes" ControlMode="Edit"/>


														
														
														</td>
														<td valign="top" class="ms-formlabel">
														
														BLDG:
														</td>
														<td valign="top" class="ms-formbody">
															<SharePoint:FormField runat="server" id="ff6{$Pos}" ControlMode="Edit" FieldName="BLDG" DisplaySize="10" __designer:bind="{ddwrt:DataBind('u',concat('ff6',$Pos),'Value','ValueChanged','ID',ddwrt:EscapeDelims(string(@ID)),'@BLDG')}"/>
															<SharePoint:FieldDescription runat="server" id="ff6description{$Pos}" FieldName="BLDG" ControlMode="Edit"/>

														
														</td>
														
							
														<td valign="top" class="ms-formlabel">
														
														WIN:
														</td>
														<td valign="top" class="ms-formbody">
															<SharePoint:FormField runat="server" id="ff19{$Pos}" ControlMode="Edit" FieldName="WIN" DisplaySize="10" __designer:bind="{ddwrt:DataBind('u',concat('ff19',$Pos),'Value','ValueChanged','ID',ddwrt:EscapeDelims(string(@ID)),'@WIN')}"/>
															<SharePoint:FieldDescription runat="server" id="ff19description{$Pos}" FieldName="WIN" ControlMode="Edit"/>

														
														
														</td>
																				
														<td valign="top" class="ms-formlabel">
														
														Data Port:
														</td>
														<td valign="top" class="ms-formbody">
															<SharePoint:FormField runat="server" id="ff8{$Pos}" ControlMode="Edit" FieldName="dataport" DisplaySize="10" __designer:bind="{ddwrt:DataBind('u',concat('ff8',$Pos),'Value','ValueChanged','ID',ddwrt:EscapeDelims(string(@ID)),'@dataport')}"/>
															<SharePoint:FieldDescription runat="server" id="ff8description{$Pos}" FieldName="dataport" ControlMode="Edit"/>

														
														
														</td>
													</tr>
		
												</tbody>
												
	
									
											</table>
	
	
										</div>

										<div id="changeActions" class="divGroup">
											
											<h3>Change Actions</h3>
											<div id="tabs">
												<ul style="background-color:white">
													
												<!-- <li id="changeStatusTab" style="background-color:maroon"><a href="#tabs-1" style="color:white">Change Status</a></li> -->
													
												 <li id="G1Tab" style="background-color:maroon"><a href="#tabs-2" style="color:white">AC/S G-1</a></li>
													
												 <li id="G2Tab" style="background-color:maroon"><a href="#tabs-3" style="color:white">AC/S G-2</a></li>
													
												 <li id="G4Tab" style="background-color:maroon;display:none"><a href="#tabs-4" style="color:white">AC/S G-4</a></li>
													
												 <li id="G6Tab" style="background-color:maroon"><a href="#tabs-5" style="color:white">AC/S G-6</a></li>
													
												 <!--<li id="HCMTab" style="background-color:maroon"><a href="#tabs-6" style="color:white">HCM</a></li>
													
												 <li id="OPSTab" style="background-color:maroon"><a href="#tabs-7" style="color:white">OPS</a></li>
													
												 <li id="Military" style="background-color:maroon"><a href="#tabs-8" style="color:white">Military</a></li>-->
													
	
												</ul>
												<!-- 

																									<div id="tabs-1">
													<table style="width:100%">
														
														<tbody>
															
		
	
	
														</tbody>
													</table>
													
							
												</div>



												-->
												<div id="tabs-2">
													<table style="width:100%">
														
														<tbody>
															
																<tr>
																	<td>
																	
																		<div id='updateMOL'>
																			
																			<em id="G1LastModified"></em><br/>
																			<H3 class="ms-standardheader">G1 Section</H3>
																			<nobr>Update MOL</nobr>
																				<SharePoint:FormField runat="server" id="ff40{$Pos}" ControlMode="Edit" FieldName="UpdateMOL0" __designer:bind="{ddwrt:DataBind('u',concat('ff40',$Pos),'Value','ValueChanged','ID',ddwrt:EscapeDelims(string(@ID)),'@UpdateMOL0')}"/>
																				<SharePoint:FieldDescription runat="server" id="ff40description{$Pos}" FieldName="UpdateMOL0" ControlMode="Edit"/>																
																		</div>
																	
																	</td>
																	
																</tr>
															
														</tbody>
													</table>
	
													<table id='g1notes'>
														
															<tbody>
																
																<tr>
																	<td>
																					
																		<div>
																			
																			<div>Notes and Comments</div>
																				<SharePoint:FormField runat="server" id="ff27{$Pos}" ControlMode="Edit" FieldName="g1notesandcomments" __designer:bind="{ddwrt:DataBind('u',concat('ff27',$Pos),'Value','ValueChanged','ID',ddwrt:EscapeDelims(string(@ID)),'@g1notesandcomments')}"/>
																				<SharePoint:FieldDescription runat="server" id="ff27description{$Pos}" FieldName="g1notesandcomments" ControlMode="Edit"/>

																			
																			
																		</div>
																			
																	</td>
																	
																</tr>
																
															</tbody>
														
													</table>
												</div>
												<div id="tabs-3">
													
	
													<table style="width:100%">
														
														<tbody>
															
																<tr>
																		<td>
																		
																			<div id='updateBadge'>
																				<em id="G2LastModified"></em><br/>
																				<H3 class="ms-standardheader">G2 Section</H3>
																				
																				<nobr>Update Badge</nobr>
																				<SharePoint:FormField runat="server" id="ff37{$Pos}" ControlMode="Edit" FieldName="UpdateBadge0" __designer:bind="{ddwrt:DataBind('u',concat('ff37',$Pos),'Value','ValueChanged','ID',ddwrt:EscapeDelims(string(@ID)),'@UpdateBadge0')}"/>
																				<SharePoint:FieldDescription runat="server" id="ff37description{$Pos}" FieldName="UpdateBadge0" ControlMode="Edit"/>

													
																			</div>
																		
																			<div id='verifyJPAS'>
																				<nobr>Verify JPAS</nobr>
																					<SharePoint:FormField runat="server" id="ff49{$Pos}" ControlMode="Edit" FieldName="VerifyJPAS" __designer:bind="{ddwrt:DataBind('u',concat('ff49',$Pos),'Value','ValueChanged','ID',ddwrt:EscapeDelims(string(@ID)),'@VerifyJPAS')}"/>
																					<SharePoint:FieldDescription runat="server" id="ff49description{$Pos}" FieldName="VerifyJPAS" ControlMode="Edit"/>


													
																			</div>
																		
																			<div id='verifyControlledAccess'>
																				<nobr>Verify Controlled Access</nobr>
																				<SharePoint:FormField runat="server" id="ff46{$Pos}" ControlMode="Edit" FieldName="VerifyControlledAccess0" __designer:bind="{ddwrt:DataBind('u',concat('ff46',$Pos),'Value','ValueChanged','ID',ddwrt:EscapeDelims(string(@ID)),'@VerifyControlledAccess0')}"/>
																				<SharePoint:FieldDescription runat="server" id="ff46description{$Pos}" FieldName="VerifyControlledAccess0" ControlMode="Edit"/>


																			</div>
																		
		
																		</td>
																	
																</tr>
															
			
	
	
	
														</tbody>
													</table>
													<table id='g2notes'>
														
															<tbody>
																
																<tr>
																	<td>
																					
																		<div>
																			
																			<div>Notes and Comments</div>
																				<SharePoint:FormField runat="server" id="ff28{$Pos}" ControlMode="Edit" FieldName="g2notesandcomments" __designer:bind="{ddwrt:DataBind('u',concat('ff28',$Pos),'Value','ValueChanged','ID',ddwrt:EscapeDelims(string(@ID)),'@g2notesandcomments')}"/>
																				<SharePoint:FieldDescription runat="server" id="ff28description{$Pos}" FieldName="g2notesandcomments" ControlMode="Edit"/>

																			
												
																		</div>
																			
																	</td>
																	
																</tr>
																
															</tbody>
														
													</table>
	
												</div>
												<div id="tabs-4">
													
	
														<table style="width:100%">
															
																<tbody>
																	
																		<tr>
																				<td>
																					<div id='updateWMS'>
																						<H3 class="ms-standardheader">G4 Section</H3>
																						<nobr>Update WMS</nobr>
																							<SharePoint:FormField runat="server" id="ff42{$Pos}" ControlMode="Edit" FieldName="UpdateWMS0" __designer:bind="{ddwrt:DataBind('u',concat('ff42',$Pos),'Value','ValueChanged','ID',ddwrt:EscapeDelims(string(@ID)),'@UpdateWMS0')}"/>
																							<SharePoint:FieldDescription runat="server" id="ff42description{$Pos}" FieldName="UpdateWMS0" ControlMode="Edit"/>

																					</div>
				
																				</td>
																			
																		</tr>
																	
					
			
			
			
																</tbody>
															
															</table>
													
															<table id='g4notes'>
																
																	<tbody>
																		
																		<tr>
																			<td>
																							
																				<div>
																					<div>Notes and Comments</div>
																						<SharePoint:FormField runat="server" id="ff35{$Pos}" ControlMode="Edit" FieldName="g4notesandcomments" __designer:bind="{ddwrt:DataBind('u',concat('ff35',$Pos),'Value','ValueChanged','ID',ddwrt:EscapeDelims(string(@ID)),'@g4notesandcomments')}"/>
																						<SharePoint:FieldDescription runat="server" id="ff35description{$Pos}" FieldName="g4notesandcomments" ControlMode="Edit"/>

														
														
																				</div>
																					
																			</td>
																			
																		</tr>
																		
																	</tbody>
																
															</table>
													
			
												</div>
												<div id="tabs-5">
													
	
													<table style="width:100%">
														
														<tbody>
															<tr>
																<td>
																
																	<div id='bizapps'>
																		<em id="G6LastModified"></em><br/>
																		<H3 class="ms-standardheader">G6 Section</H3>
																			<H3 class="ms-standardheader">BizApps</H3>
																			<nobr>Verify SCO SCA Status</nobr>
																				<SharePoint:FormField runat="server" id="ff50{$Pos}" ControlMode="Edit" FieldName="VerifySCOSCAStatus0" __designer:bind="{ddwrt:DataBind('u',concat('ff50',$Pos),'Value','ValueChanged','ID',ddwrt:EscapeDelims(string(@ID)),'@VerifySCOSCAStatus0')}"/>
																				<SharePoint:FieldDescription runat="server" id="ff50description{$Pos}" FieldName="VerifySCOSCAStatus0" ControlMode="Edit"/>


																		
			
	
																	</div>
																
	
																</td>
																
																
																<td>
																
																	<div id='itpras'>
																		
																		<H3 class="ms-standardheader">ITPRAS</H3>
																		<nobr>Verify ITPRAS Acct</nobr>
																			<SharePoint:FormField runat="server" id="ff48{$Pos}" ControlMode="Edit" FieldName="VerifyITPRASAcct0" __designer:bind="{ddwrt:DataBind('u',concat('ff48',$Pos),'Value','ValueChanged','ID',ddwrt:EscapeDelims(string(@ID)),'@VerifyITPRASAcct0')}"/>
																			<SharePoint:FieldDescription runat="server" id="ff48description{$Pos}" FieldName="VerifyITPRASAcct0" ControlMode="Edit"/>


																		
		
		
	
																	</div>
																
																</td>
																
								
															</tr>
															
															<tr>
																<td>
																
																	<div id='cybersec'>
																		
																			<H3 class="ms-standardheader">Cyber Security</H3>
																			<nobr>Verify Alt Token</nobr>
																				<SharePoint:FormField runat="server" id="ff44{$Pos}" ControlMode="Edit" FieldName="VerifyAltToken0" __designer:bind="{ddwrt:DataBind('u',concat('ff44',$Pos),'Value','ValueChanged','ID',ddwrt:EscapeDelims(string(@ID)),'@VerifyAltToken0')}"/>
																				<SharePoint:FieldDescription runat="server" id="ff44description{$Pos}" FieldName="VerifyAltToken0" ControlMode="Edit"/>


																		
																			<nobr>Verify Admin Dev Accts</nobr>
																				<SharePoint:FormField runat="server" id="ff43{$Pos}" ControlMode="Edit" FieldName="VerifyAdminDevAccts0" __designer:bind="{ddwrt:DataBind('u',concat('ff43',$Pos),'Value','ValueChanged','ID',ddwrt:EscapeDelims(string(@ID)),'@VerifyAdminDevAccts0')}"/>
																				<SharePoint:FieldDescription runat="server" id="ff43description{$Pos}" FieldName="VerifyAdminDevAccts0" ControlMode="Edit"/>


																		
			
	
																	</div>
																
										
	
																</td>
																
	
																<td>
																
																	<div id='mobilecomm'>
																		
																			<H3 class="ms-standardheader">Mobile/Comm Software</H3>
																			<nobr>Update Software License Database</nobr>
																				<SharePoint:FormField runat="server" id="ff41{$Pos}" ControlMode="Edit" FieldName="UpdateSoftwareLicenseDatabase0" __designer:bind="{ddwrt:DataBind('u',concat('ff41',$Pos),'Value','ValueChanged','ID',ddwrt:EscapeDelims(string(@ID)),'@UpdateSoftwareLicenseDatabase0')}"/>
																				<SharePoint:FieldDescription runat="server" id="ff41description{$Pos}" FieldName="UpdateSoftwareLicenseDatabase0" ControlMode="Edit"/>


																		
																			<nobr>Verify BES Acct</nobr>
																				<SharePoint:FormField runat="server" id="ff45{$Pos}" ControlMode="Edit" FieldName="VerifyBESAcct0" __designer:bind="{ddwrt:DataBind('u',concat('ff45',$Pos),'Value','ValueChanged','ID',ddwrt:EscapeDelims(string(@ID)),'@VerifyBESAcct0')}"/>
																				<SharePoint:FieldDescription runat="server" id="ff45description{$Pos}" FieldName="VerifyBESAcct0" ControlMode="Edit"/>


																		
				
	
																	</div>
																
	
																</td>
																
	
	
															</tr>
															
															<tr>
																<td>
																
																	<div id='itam'>
																		
																			<H3 class="ms-standardheader">ITAM</H3>
																			<nobr>Equipment Setup/On-hand</nobr>
																				<SharePoint:FormField runat="server" id="ff34{$Pos}" ControlMode="Edit" FieldName="EquipmentSetupOnHandUpdateDataba" __designer:bind="{ddwrt:DataBind('u',concat('ff34',$Pos),'Value','ValueChanged','ID',ddwrt:EscapeDelims(string(@ID)),'@EquipmentSetupOnHandUpdateDataba')}"/>
																				<SharePoint:FieldDescription runat="server" id="ff34description{$Pos}" FieldName="EquipmentSetupOnHandUpdateDataba" ControlMode="Edit"/>

																		
																			<nobr>Update Database</nobr>
																				<SharePoint:FormField runat="server" id="ff38{$Pos}" ControlMode="Edit" FieldName="UpdateDatabase0" __designer:bind="{ddwrt:DataBind('u',concat('ff38',$Pos),'Value','ValueChanged','ID',ddwrt:EscapeDelims(string(@ID)),'@UpdateDatabase0')}"/>
																				<SharePoint:FieldDescription runat="server" id="ff38description{$Pos}" FieldName="UpdateDatabase0" ControlMode="Edit"/>

																		
																	</div>
																
	
																</td>
																
																<td>
																
																	<div id='sysadmin'>
																		
																			<H3 class="ms-standardheader">System Administrator</H3>
																			<nobr>Verify Group Mailbox Ownership</nobr>
																				<SharePoint:FormField runat="server" id="ff47{$Pos}" ControlMode="Edit" FieldName="VerifyGroupMailboxOwnership0" __designer:bind="{ddwrt:DataBind('u',concat('ff47',$Pos),'Value','ValueChanged','ID',ddwrt:EscapeDelims(string(@ID)),'@VerifyGroupMailboxOwnership0')}"/>
																				<SharePoint:FieldDescription runat="server" id="ff47description{$Pos}" FieldName="VerifyGroupMailboxOwnership0" ControlMode="Edit"/>


																		
																			<nobr>Verify SIPR Token</nobr>
																				<SharePoint:FormField runat="server" id="ff52{$Pos}" ControlMode="Edit" FieldName="VerifySIPRToken0" __designer:bind="{ddwrt:DataBind('u',concat('ff52',$Pos),'Value','ValueChanged','ID',ddwrt:EscapeDelims(string(@ID)),'@VerifySIPRToken0')}"/>
																				<SharePoint:FieldDescription runat="server" id="ff52description{$Pos}" FieldName="VerifySIPRToken0" ControlMode="Edit"/>



																		
																			<nobr>Verify SD and DL Membership</nobr>
																				<SharePoint:FormField runat="server" id="ff51{$Pos}" ControlMode="Edit" FieldName="VerifySDandDLMembership0" __designer:bind="{ddwrt:DataBind('u',concat('ff51',$Pos),'Value','ValueChanged','ID',ddwrt:EscapeDelims(string(@ID)),'@VerifySDandDLMembership0')}"/>
																				<SharePoint:FieldDescription runat="server" id="ff51description{$Pos}" FieldName="VerifySDandDLMembership0" ControlMode="Edit"/>


																		
																			<nobr>Update GAL</nobr>
																				<SharePoint:FormField runat="server" id="ff39{$Pos}" ControlMode="Edit" FieldName="UpdateGAL" __designer:bind="{ddwrt:DataBind('u',concat('ff39',$Pos),'Value','ValueChanged','ID',ddwrt:EscapeDelims(string(@ID)),'@UpdateGAL')}"/>
																				<SharePoint:FieldDescription runat="server" id="ff39description{$Pos}" FieldName="UpdateGAL" ControlMode="Edit"/>



				
	
																	</div>
																
	
																	
																</td>
																
	
	
	
															</tr>
															
														</tbody>
													</table>
													<table>
														<tbody>
															<tr>
																<td>
																
																		
																		<div id='g6notes'>
																			
																				<div>Notes and Comments</div>
																					<SharePoint:FormField runat="server" id="ff20{$Pos}" ControlMode="Edit" FieldName="g6notesandcomments" __designer:bind="{ddwrt:DataBind('u',concat('ff20',$Pos),'Value','ValueChanged','ID',ddwrt:EscapeDelims(string(@ID)),'@g6notesandcomments')}"/>
																					<SharePoint:FieldDescription runat="server" id="ff20description{$Pos}" FieldName="g6notesandcomments" ControlMode="Edit"/>


																			
																			
			
																		</div>
																
	
																	
																</td>
																
	
	
															</tr>
															
														</tbody>
													</table>
	
												</div>
												<!--
												<div id="tabs-6">
													
	
														<table style="width:100%">
															
																<tbody>
																	
																		<tr>
																				<td>
																					<div id='HCMSection'>
																						<H3 class="ms-standardheader">HCM Section</H3>
																						<nobr>Notes and Comments</nobr>
																						<SharePoint:FormField runat="server" id="ff40{$Pos}" ControlMode="New" FieldName="HCMnotesandcomments" __designer:bind="{ddwrt:DataBind('u',concat('ff40',$Pos),'Value','ValueChanged','ID',ddwrt:EscapeDelims(string(@ID)),'@HCMnotesandcomments')}"/>
																						<SharePoint:FieldDescription runat="server" id="ff40description{$Pos}" FieldName="HCMnotesandcomments" ControlMode="New"/>
															
															
															
																					</div>
				
																				</td>
																			
																		</tr>
																	
	
																</tbody>
															
															</table>
													
	
												</div>
												<div id="tabs-7">
													
	
														<table style="width:100%">
															
																<tbody>
																	
																		<tr>
																				<td>
																					<div id='OPSSection'>
																						<H3 class="ms-standardheader">OPS Section</H3>
																						<nobr>Notes and Comments</nobr>
																						<SharePoint:FormField runat="server" id="ff42{$Pos}" ControlMode="New" FieldName="OPSnotesandcomments" __designer:bind="{ddwrt:DataBind('u',concat('ff42',$Pos),'Value','ValueChanged','ID',ddwrt:EscapeDelims(string(@ID)),'@OPSnotesandcomments')}"/>
																						<SharePoint:FieldDescription runat="server" id="ff42description{$Pos}" FieldName="OPSnotesandcomments" ControlMode="New"/>
															
															
															
															
																					</div>
				
																				</td>
																			
																		</tr>
																	
	
																</tbody>
															
															</table>
													
	
												</div>
												<div id="tabs-8">
													
	
														<table style="width:100%">
															
																<tbody>
																	
																		<tr>
																				<td>
																					<div id='MilitarySection'>
																						<H3 class="ms-standardheader">Military Section</H3>
																						<nobr>Notes and Comments</nobr>
																						<SharePoint:FormField runat="server" id="ff41{$Pos}" ControlMode="New" FieldName="militarynotesandcomments" __designer:bind="{ddwrt:DataBind('u',concat('ff41',$Pos),'Value','ValueChanged','ID',ddwrt:EscapeDelims(string(@ID)),'@militarynotesandcomments')}"/>
																						<SharePoint:FieldDescription runat="server" id="ff41description{$Pos}" FieldName="militarynotesandcomments" ControlMode="New"/>
	
																					</div>
				
																				</td>
																			
																		</tr>
																	
	
																</tbody>
															
															</table>
													
	
												</div>
												-->
												
		
		
		
		
		
											</div>
	
										</div>

										<div id="administrative" class="divGroup">
											
											<h3>Administrative</h3>
											<table style="width:100%">
												
												<tbody>


													<tr>

														<td valign="top" class="ms-formlabel">
														
															<H3 class="ms-standardheader"><nobr>DTS</nobr></H3>
																<SharePoint:FormField runat="server" id="ff33{$Pos}" ControlMode="Edit" FieldName="DTS" __designer:bind="{ddwrt:DataBind('u',concat('ff33',$Pos),'Value','ValueChanged','ID',ddwrt:EscapeDelims(string(@ID)),'@DTS')}"/>
																<SharePoint:FieldDescription runat="server" id="ff33description{$Pos}" FieldName="DTS" ControlMode="Edit"/>




														</td>




														<td valign="top" class="ms-formlabel">
														
															<H3 class="ms-standardheader"><nobr>GTC</nobr></H3>
																<SharePoint:FormField runat="server" id="ff36{$Pos}" ControlMode="Edit" FieldName="GTCC" __designer:bind="{ddwrt:DataBind('u',concat('ff36',$Pos),'Value','ValueChanged','ID',ddwrt:EscapeDelims(string(@ID)),'@GTCC')}"/>
																<SharePoint:FieldDescription runat="server" id="ff36description{$Pos}" FieldName="GTCC" ControlMode="Edit"/>


														</td>
													</tr>


													<tr>





														<td valign="top" class="ms-formlabel">
														
														<H3 class="ms-standardheader">
														
														<nobr>Admin Complete Date</nobr>
														</H3>
														</td>
	
														<td valign="top" class="ms-formbody">
															<SharePoint:FormField runat="server" id="ff2{$Pos}" ControlMode="Edit" FieldName="admincompletedate" __designer:bind="{ddwrt:DataBind('u',concat('ff2',$Pos),'Value','ValueChanged','ID',ddwrt:EscapeDelims(string(@ID)),'@admincompletedate')}"/>
															<SharePoint:FieldDescription runat="server" id="ff2description{$Pos}" FieldName="admincompletedate" ControlMode="Edit"/>

														
														
														</td>
														
							
	
														<td valign="top" class="ms-formlabel">
														
														<H3 class="ms-standardheader">
														
															<nobr>Admin Comments</nobr>
														</H3>
														</td>
														<td valign="top" class="ms-formbody">
																<SharePoint:FormField runat="server" id="ff5{$Pos}" ControlMode="Edit" FieldName="adminnotesandcomments" __designer:bind="{ddwrt:DataBind('u',concat('ff5',$Pos),'Value','ValueChanged','ID',ddwrt:EscapeDelims(string(@ID)),'@adminnotesandcomments')}"/>
																<SharePoint:FieldDescription runat="server" id="ff5description{$Pos}" FieldName="adminnotesandcomments" ControlMode="Edit"/>

														
														
														</td>
														
							
							
								
													</tr>

													<tr class="lastMod" style="display:none">

														<td valign="top" class="ms-formlabel">
															<H3 class="ms-standardheader">
																<nobr>LastModified(Actual Move Date)</nobr>
															</H3>
														</td>
														<td valign="top" class="ms-formbody">
															<SharePoint:FormField runat="server" id="ff53{$Pos}" ControlMode="Edit" FieldName="LastModified1" __designer:bind="{ddwrt:DataBind('u',concat('ff53',$Pos),'Value','ValueChanged','ID',ddwrt:EscapeDelims(string(@ID)),'@LastModified1')}"/>
															<SharePoint:FieldDescription runat="server" id="ff53description{$Pos}" FieldName="LastModified1" ControlMode="Edit"/>
														</td>



													</tr>


													<tr class="lastMod" style="display:none">
														<td width="190px" valign="top" class="ms-formlabel">
															<H3 class="ms-standardheader">
																<nobr>LastModified2(G1)</nobr>
															</H3>
														</td>
														<td width="400px" valign="top" class="ms-formbody">
															<SharePoint:FormField runat="server" id="ff54{$Pos}" ControlMode="Edit" FieldName="LastModified2" __designer:bind="{ddwrt:DataBind('u',concat('ff54',$Pos),'Value','ValueChanged','ID',ddwrt:EscapeDelims(string(@ID)),'@LastModified2')}"/>
															<SharePoint:FieldDescription runat="server" id="ff54description{$Pos}" FieldName="LastModified2" ControlMode="Edit"/>
														</td>
													</tr>
													<tr class="lastMod" style="display:none">
														<td width="190px" valign="top" class="ms-formlabel">
															<H3 class="ms-standardheader">
																<nobr>LastModified3(G2)</nobr>
															</H3>
														</td>
														<td width="400px" valign="top" class="ms-formbody">
															<SharePoint:FormField runat="server" id="ff55{$Pos}" ControlMode="Edit" FieldName="LastModified3" __designer:bind="{ddwrt:DataBind('u',concat('ff55',$Pos),'Value','ValueChanged','ID',ddwrt:EscapeDelims(string(@ID)),'@LastModified3')}"/>
															<SharePoint:FieldDescription runat="server" id="ff55description{$Pos}" FieldName="LastModified3" ControlMode="Edit"/>
														</td>
													</tr>
													<tr class="lastMod" style="display:none">
														<td width="190px" valign="top" class="ms-formlabel">
															<H3 class="ms-standardheader">
																<nobr>LastModified4(G4)</nobr>
															</H3>
														</td>
														<td width="400px" valign="top" class="ms-formbody">
															<SharePoint:FormField runat="server" id="ff56{$Pos}" ControlMode="Edit" FieldName="LastModified4" __designer:bind="{ddwrt:DataBind('u',concat('ff56',$Pos),'Value','ValueChanged','ID',ddwrt:EscapeDelims(string(@ID)),'@LastModified4')}"/>
															<SharePoint:FieldDescription runat="server" id="ff56description{$Pos}" FieldName="LastModified4" ControlMode="Edit"/>
														</td>
													</tr>
													<tr class="lastMod" style="display:none">
														<td width="190px" valign="top" class="ms-formlabel">
															<H3 class="ms-standardheader">
																<nobr>LastModified5(G6)</nobr>
															</H3>
														</td>
														<td width="400px" valign="top" class="ms-formbody">
															<SharePoint:FormField runat="server" id="ff57{$Pos}" ControlMode="Edit" FieldName="LastModified5" __designer:bind="{ddwrt:DataBind('u',concat('ff57',$Pos),'Value','ValueChanged','ID',ddwrt:EscapeDelims(string(@ID)),'@LastModified5')}"/>
															<SharePoint:FieldDescription runat="server" id="ff57description{$Pos}" FieldName="LastModified5" ControlMode="Edit"/>
														</td>
													</tr>


												</tbody>
											</table>
		
	
										</div>




















							</td>
						</tr>
					</table>


			    </div>


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
