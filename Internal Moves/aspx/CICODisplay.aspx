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
<script src="/Scripts/js/jquery-1.12.4.js"></script>
<script src="/Scripts/js/lodash/development/lodash.4.17.11.js"></script>
<script src="/Scripts/js/angular/production/angular.1.7.8.min.js"></script>
<script src="/Scripts/js/jQuery%20UI/jquery-ui-1.12.1/jquery-ui-1.12.1/jquery-ui.js"></script>
<script src="/sites/vt/SiteAssets/apps/CICO%20Internal%20Moves/form/js/styles/styles.js"></script>


<SharePoint:UIVersionedContent UIVersion="4" runat="server">
	<ContentTemplate>
	<div style="padding-left:5px">
	</ContentTemplate>
</SharePoint:UIVersionedContent>
	<table class="ms-core-tableNoSpace" id="onetIDListForm">
	 <tr>
	  <td>
	 <WebPartPages:WebPartZone runat="server" FrameType="None" ID="Main" Title="loc:Main"><ZoneTemplate>
		<WebPartPages:DataFormWebPart runat="server" EnableOriginalValue="False" DisplayName="CICOInternalMoves11222019" ViewFlag="1048584" ViewContentTypeId="" Default="FALSE" ListUrl="" ListDisplayName="" ListName="{59CEF730-CF0A-4100-8CC2-E1B11D311CD2}" ListId="59cef730-cf0a-4100-8cc2-e1b11d311cd2" PageType="PAGE_DISPLAYFORM" PageSize="-1" UseSQLDataSourcePaging="True" DataSourceID="" ShowWithSampleData="False" AsyncRefresh="False" ManualRefresh="False" AutoRefresh="False" AutoRefreshInterval="60" NoDefaultStyle="TRUE" InitialAsyncDataFetch="False" Title="CICOInternalMoves11222019" FrameType="None" SuppressWebPartChrome="False" Description="" IsIncluded="True" PartOrder="2" FrameState="Normal" AllowRemove="True" AllowZoneChange="True" AllowMinimize="True" AllowConnect="True" AllowEdit="True" AllowHide="True" IsVisible="True" DetailLink="" HelpLink="" HelpMode="Modeless" Dir="Default" PartImageSmall="" MissingAssembly="Cannot import this Web Part." PartImageLarge="" IsIncludedFilter="" ExportControlledProperties="True" ConnectionID="00000000-0000-0000-0000-000000000000" ID="g_3c738873_5a4b_482b_8717_f49ab2a280e4" ChromeType="None" ExportMode="All" __MarkupType="vsattributemarkup" __WebPartId="{3C738873-5A4B-482B-8717-F49AB2A280E4}" __AllowXSLTEditing="true" WebPart="true" Height="" Width=""><DataSources>
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
		<xsl:variable name="dvt_RowCount" select="count($Rows)"/>
		<xsl:variable name="dvt_IsEmpty" select="$dvt_RowCount = 0"/>
		<xsl:choose>
			<xsl:when test="$dvt_IsEmpty">
				<xsl:call-template name="dvt_1.empty"/>
			</xsl:when>
			<xsl:otherwise>
				<table border="0" width="100%">
					<xsl:call-template name="dvt_1.body">
						<xsl:with-param name="Rows" select="$Rows"/>
					</xsl:call-template>
				</table>
			</xsl:otherwise>
		</xsl:choose>
	</xsl:template>
	<xsl:template name="dvt_1.body">
		<xsl:param name="Rows"/>
		<tr>
			<td class="ms-toolbar" nowrap="nowrap">
				<table>
					<tr>
						<td width="99%" class="ms-toolbar" nowrap="nowrap"><IMG SRC="/_layouts/15/images/blank.gif" width="1" height="18"/></td>
						<td class="ms-toolbar" nowrap="nowrap" align="right">
							<SharePoint:GoBackButton runat="server" ControlMode="Display" id="gobackbutton1"/>
						</td>
					</tr>
				</table>
			</td>
		</tr>
		<tr>
			<td class="ms-toolbar" nowrap="nowrap">
				<SharePoint:FormToolBar runat="server" ControlMode="Display"/>
				<SharePoint:ItemValidationFailedMessage runat="server" ControlMode="Display"/>
			</td>
		</tr>
		<xsl:for-each select="$Rows">
			<xsl:call-template name="dvt_1.rowview"/>
		</xsl:for-each>
		<tr>
			<td class="ms-toolbar" nowrap="nowrap">
				<table>
					<tr>
						<td class="ms-descriptiontext" nowrap="nowrap">
							<SharePoint:CreatedModifiedInfo ControlMode="Display" runat="server"/>
						</td>
						<td width="99%" class="ms-toolbar" nowrap="nowrap"><IMG SRC="/_layouts/15/images/blank.gif" width="1" height="18"/></td>
						<td class="ms-toolbar" nowrap="nowrap" align="right">
							<SharePoint:GoBackButton runat="server" ControlMode="Display" id="gobackbutton2"/>
						</td>
					</tr>
				</table>
			</td>
		</tr>
	</xsl:template>
	<xsl:template name="dvt_1.rowview">

			<tr>
				<td>
					<div>
						<table>
							<tr>
								<td>
									<!-- Processing Time -->
										<div id="processingTime" class="divGroup">
												<h3>Processing Time</h3>
												<table style="width:100%">
													<tbody>
														<tr>
															<td width="50">
																		Effective Move Date:
																
															</td>
															<td width="50">
																	<xsl:value-of select="@effectivemovedate"/>
						
															</td>
				
															<td width="50" class="actualMoveDateTag">
																Actual Move Date:
															</td>
				
															<td valign="top" class="ms-formbody actualMoveDateTag">
																	<xsl:value-of select="@actualmovedate"/>
																</td>
														</tr>
														<tr>
															<td valign="top" class="ms-formlabel">
																Type of Internal Change:
															</td>
				
															<td valign="top" class="ms-formbody">
																	<xsl:value-of select="@typeofinternalchange"/>
																</td>
				
															<td valign="top" class="ms-formlabel projectedReturnTag">
																	Projected Return:
															</td>
				
															<td valign="top" class="ms-formbody">
																	<xsl:value-of select="@projectedreturn"/>
																</td>
				
														</tr>
														<tr>
															<td valign="top" class="ms-formlabel">
																Cancel Internal Change?
															</td>
				
															<td valign="top" class="ms-formbody">
																
																	<xsl:choose>
																			<xsl:when test="@cancelinternalchange='1' or msxsl:string-compare(string(@cancelinternalchange),'Yes','','i')=0 or msxsl:string-compare(string(@cancelinternalchange),'True','','i')=0">Yes</xsl:when>
																			<xsl:otherwise>No</xsl:otherwise>
																		</xsl:choose>
															
															</td>
										
						
														</tr>
													</tbody>
												</table>
											</div>
											<!-- Personnel Info -->
											<div id="personnelInfo" class="divGroup">
													<h3>Personnel Info</h3>
													<table style="width:100%">
														<tbody>
															<tr>
																<td valign="top" class="ms-formlabel">
																		Source(Rank):
																</td>
																
																<td valign="top" class="ms-formbody">
				
																		<xsl:value-of select="@sourcerank"/>
																	</td>
																
																	<td valign="top" class="ms-formlabel">
																		Name:
																	</td>
																
					
																<td valign="top" class="ms-formbody">
																		<xsl:value-of select="@Identity"/>
																	</td>
					
																<td valign="top" class="ms-formlabel">
																	Email Address:
																</td>
																<td valign="top" class="ms-formbody">
																		<xsl:value-of select="@Email"/>
																	</td>
											
					
																<td valign="top" class="ms-formlabel">
																		Current Location:
																</td>
																<td valign="top" class="ms-formbody">
																		<xsl:value-of select="@currentlocation2"/>
																	</td>				
																<td valign="top" class="ms-formlabel">
																	Destination:
																</td>
																<td valign="top" class="ms-formbody">
																		<xsl:value-of select="@Destination"/>
																</td>
											
											
															</tr>
															<tr>
																<td valign="top" class="ms-formlabel">
																	Losing Org:
																</td>
																<td valign="top" class="ms-formbody">
																		<xsl:value-of select="@losingorg"/>
																	</td>
											
																<td valign="top" class="ms-formlabel">
																		Losing Work Section:
																</td>
																<td valign="top" class="ms-formbody">
																		<xsl:value-of select="@losingworksection"/>
																	</td>
											
																<td valign="top" class="ms-formlabel">
																		Gaining Org:
																</td>
																<td valign="top" class="ms-formbody">
																		<xsl:value-of select="@gainingorg"/>
																</td>
											
					
																<td valign="top" class="ms-formlabel">
																	Gaining Work Section:
																</td>
																<td valign="top" class="ms-formbody">
																	<xsl:value-of select="@gainingworksection"/>
																</td>
											
					
															</tr>
															<tr>
																<td valign="top" class="ms-formlabel">
																	Position:
																</td>
					
																<td valign="top" class="ms-formbody">
																		<xsl:value-of select="@Position"/>
																</td>
											
					
																<td valign="top" class="ms-formlabel">
																	1st Line Supervisor:
																</td>
																<td valign="top" class="ms-formbody">
																		<xsl:value-of select="@_x0031_stlinesupervisor"/>
																	</td>
											
																<td valign="top" class="ms-formlabel">
																	Actual Return Date:
																</td>
																<td valign="top" class="ms-formbody">
																		<xsl:value-of select="@actualreturndate"/>
																</td>
											
						
															</tr>
					
															<tr>
																<td valign="top" class="ms-formlabel">
																	Notes:
																</td>
																<td valign="top" class="ms-formbody">
																		<xsl:value-of select="@personnelnotes"/>
																	</td>
																<td valign="top" class="ms-formlabel">
																	Bldg:
																</td>
																<td valign="top" class="ms-formbody">
																		<xsl:value-of select="@BLDG"/>
																	</td>
											
																<td valign="top" class="ms-formlabel">
																	WIN:
																</td>
																<td valign="top" class="ms-formbody">
																		<xsl:value-of select="@WIN"/>
																	</td>						
																<td valign="top" class="ms-formlabel">
																	Data Port:
																</td>
																<td valign="top" class="ms-formbody">
																		<xsl:value-of select="@dataport"/>
																	</td>
															</tr>
						
														</tbody>
					
													
													</table>
					
					
												</div>
												<!-- Change Actions -->
												<div id="changeActions" class="divGroup">
														<h3>Change Actions</h3>
														<div id="tabs">
																<ul style="background-color:white">
																  <li id="changeStatusTab" style="background-color:maroon"><a href="#tabs-1" style="color:white">Change Status</a></li>
																  <li id="G1Tab" style="background-color:maroon"><a href="#tabs-2" style="color:white">AC/S G-1</a></li>
																  <li id="G2Tab" style="background-color:maroon"><a href="#tabs-3" style="color:white">AC/S G-2</a></li>
																  <li id="G4Tab" style="background-color:maroon"><a href="#tabs-4" style="color:white">AC/S G-4</a></li>
																  <li id="G6Tab" style="background-color:maroon"><a href="#tabs-5" style="color:white">AC/S G-6</a></li>
																  <li id="HCMTab" style="background-color:maroon"><a href="#tabs-6" style="color:white">HCM</a></li>
																  <li id="OPSTab" style="background-color:maroon"><a href="#tabs-7" style="color:white">OPS</a></li>
																  <li id="Military" style="background-color:maroon"><a href="#tabs-8" style="color:white">Military</a></li>
					
																</ul>
																<div id="tabs-1">
																	<table style="width:100%">
																		<tbody>
						
					
					
																		</tbody>
																	</table>
											
																</div>
																<div id="tabs-2">
																	<table style="width:100%">
																		<tbody>
																				<tr>
																					<td>
																						<div id='updateMOL'>
																							<H3 class="ms-standardheader">G1 Section</H3>
																							<nobr>Update MOL</nobr>
																							<xsl:value-of select="@updateMOL"/>
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
																							<xsl:value-of select="@g1notesandcomments"/>
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
																								<H3 class="ms-standardheader">G2 Section</H3>
																								<nobr>Update Badge</nobr>
																								<xsl:value-of select="@updatebadge"/>
																	
																							</div>
																							<div id='verifyJPAS'>
																								<nobr>Verify JPAS</nobr>
																								<xsl:value-of select="@verifyinJPAS"/>
																	
																							</div>
																							<div id='verifyControlledAccess'>
																								<nobr>Verify Controlled Access</nobr>
																								<xsl:value-of select="@verifycontrolledaccess"/>
																	
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
																							<xsl:value-of select="@g2notesandcomments"/>
																
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
																										<xsl:value-of select="@updateWMS"/>
																			
																			
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
																									<xsl:value-of select="@g4notesandcomments1"/>
																		
																		
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
																							<H3 class="ms-standardheader">BizApps</H3>
																							<nobr>Verify SCO SCA Status</nobr>
																							<xsl:value-of select="@verifyscoscastatus"/>
							
					
																					</div>
					
																				</td>
																				
																				<td>
																					<div id='itpras'>
																						<H3 class="ms-standardheader">ITPRAS</H3>
																						<nobr>Verify ITPRAS Acct</nobr>
																						<xsl:value-of select="@verifyITPRASAcct"/>
						
						
					
																					</div>
																				</td>
												
																			</tr>
																			<tr>
																				<td>
																					<div id='cybersec'>
																							<H3 class="ms-standardheader">Cyber Security</H3>
																							<nobr>Verify Alt Token</nobr>
																							<xsl:value-of select="@verifyalttoken"/>
																							<nobr>Verify Admin Dev Accts</nobr>
																							<xsl:value-of select="@verifyadmindevaccts"/>
							
					
																					</div>
														
					
																				</td>
					
																				<td>
																					<div id='mobilecomm'>
																							<H3 class="ms-standardheader">Mobile/Comm Software</H3>
																							<nobr>Update Software License Database</nobr>
																							<xsl:value-of select="@updatesoftwarelicensedatabase"/>
																							<nobr>Verify BES Acct</nobr>
																							<xsl:value-of select="@verifyBESAcct"/>
								
					
																					</div>
					
																				</td>
					
					
																			</tr>
																			<tr>
																				<td>
																					<div id='itam'>
																							<H3 class="ms-standardheader">ITAM</H3>
																							<nobr>Equipment Setup/On-hand</nobr>
																							<xsl:value-of select="@equipmentsetuponhand"/>
																							<nobr>Update Database</nobr>
																							<xsl:value-of select="@updatedatabase"/>
																						</div>
					
																				</td>
																				<td>
																					<div id='sysadmin'>
																							<H3 class="ms-standardheader">System Administrator</H3>
																							<nobr>Verify Group Mailbox Ownership</nobr>
																							<xsl:value-of select="@verifygroupmailboxownership"/>
																							<nobr>Verify SIPR Token</nobr>
																							<xsl:value-of select="@verifySIPRtoken"/>
																							<nobr>Verify SD and DL Membership</nobr>
																							<xsl:value-of select="@verifySDandDLmembership"/>
								
					
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
																								<xsl:value-of select="@g6notesandcomments"/>
							
																						</div>
					
																					
																				</td>
					
					
																			</tr>
																		</tbody>
																	</table>
					
																</div>
																<div id="tabs-6">
					
																		<table style="width:100%">
																				<tbody>
																						<tr>
																								<td>
																									<div id='HCMSection'>
																										<H3 class="ms-standardheader">HCM Section</H3>
																										<nobr>Notes and Comments</nobr>
																										<xsl:value-of select="@HCMnotesandcomments"/>

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
																										<xsl:value-of select="@OPSnotesandcomments"/>
																			
																			
																			
																			
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
																										<xsl:value-of select="@militarynotesandcomments"/>
					
																									</div>
								
																								</td>
																						</tr>
					
																				</tbody>
																			</table>
					
																</div>
						
						
						
						
						
														</div>
					
												</div>
												<!-- Administrative -->
												<div id="administrative" class="divGroup">
														<h3>Administrative</h3>
														<table style="width:100%">
															<tbody>
																<tr>
																	<td valign="top" class="ms-formlabel">
																		<H3 class="ms-standardheader">
																			<nobr>Admin Complete Date</nobr>
																		</H3>
																	</td>
						
																	<td valign="top" class="ms-formbody">
																			<xsl:value-of select="@admincompletedate"/>
																		</td>
												
						
																	<td valign="top" class="ms-formlabel">
																			<H3 class="ms-standardheader">
																				<nobr>Admin Comments</nobr>
																			</H3>
																	</td>
																	<td valign="top" class="ms-formbody">
																			<xsl:value-of select="@adminnotesandcomments"/>																	</td>
												
												
													
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
	<xsl:template name="dvt_1.empty">
		<xsl:variable name="dvt_ViewEmptyText">There are no items to show in this view.</xsl:variable>
		<table border="0" width="100%">
			<tr>
				<td class="ms-vb">
					<xsl:value-of select="$dvt_ViewEmptyText"/>
				</td>
			</tr>
		</table>
	</xsl:template>
</xsl:stylesheet>	</Xsl>
<DataFields>@Title,Title;@admincompletedate,Admin Complete Date;@_x0031_stlinesupervisor,1st Line Supervisor;@actualreturndate,Actual Return Date;@adminnotesandcomments,Admin Notes and Comments;@BLDG,BLDG;@currentlocation,Current Location;@dataport,Data Port;@Destination,Destination;@Email,Email;@gainingorg,Gaining Org;@gainingworksection,Gaining Work Section;@Identity,Identity;@losingorg,Losing Org;@losingworksection,Losing Work Section;@personnelnotes,Personnel Notes;@Position,Position;@sourcerank,Source(Rank);@WIN,WIN;@equipmentsetuponhand,Equipment Setup/On-hand;@g6notesandcomments,G6 Notes and Comments;@updatedatabase,Update Database;@updatesoftwarelicensedatabase,Update Software License Database;@verifyadmindevaccts,Verify Admin Dev Accts;@verifyalttoken,Verify Alt Token;@verifyBESAcct,Verify BES Acct;@verifygroupmailboxownership,Verify Group Mailbox Ownership;@verifyITPRASAcct,Verify ITPRAS Acct;@verifyscoscastatus,Verify SCO SCA Status;@verifySDandDLmembership,Verify SD and DL Membership;@actualmovedate,Actual Move Date;@effectivemovedate,Effective Move Date;@processingtime,Processing Time;@projectedreturn,Projected Return;@typeofinternalchange,Movement Type;@cancelinternalchange,Cancel Internal Change?;@g1notesandcomments,G1 Notes and Comments;@g2notesandcomments,G2 Notes and Comments;@g4notesandcomments1,G4 Notes and Comments;@HCMnotesandcomments,HCM Notes and Comments;@militarynotesandcomments,Military Notes and Comments;@OPSnotesandcomments,OPS Notes and Comments;@updatebadge,Update Badge;@updateMOL,Update MOL;@updateWMS,Update WMS;@verifycontrolledaccess,Verify Controlled Access;@verifyinJPAS,Verify in JPAS;@verifySIPRtoken,Verify SIPR Token;@currentlocation2,Current Location2;@destination2,Destination2;@V3Comments,Append-Only Comments;@fullname,FullName;@DTS,DTS;@EquipmentSetupOnHandUpdateDataba,Equipment Setup/On-Hand;@g4notesandcomments,G4 Notes and Comments;@GTCC,GTCC;@UpdateBadge0,Update Badge;@UpdateDatabase0,Update Database;@UpdateGAL,Update GAL;@UpdateMOL0,Update MOL;@UpdateSoftwareLicenseDatabase0,Update Software License Database;@UpdateWMS0,Update WMS;@VerifyAdminDevAccts0,Verify Admin Dev Accts;@VerifyAltToken0,Verify Alt Token;@VerifyBESAcct0,Verify BES Acct;@VerifyControlledAccess0,Verify Controlled Access;@VerifyGroupMailboxOwnership0,Verify Group Mailbox Ownership;@VerifyITPRASAcct0,Verify ITPRAS Acct;@VerifyJPAS,Verify JPAS;@VerifySCOSCAStatus0,Verify SCO SCA Status;@VerifySDandDLMembership0,Verify SD and DL Membership;@VerifySIPRToken0,Verify SIPR Token;@ID,ID;@ContentType,Content Type;@Modified,Modified;@Created,Created;@Author,Created By;@Editor,Modified By;@_UIVersionString,Version;@Attachments,Attachments;@File_x0020_Type,File Type;@FileLeafRef,Name (for use in forms);@FileDirRef,Path;@FSObjType,Item Type;@_HasCopyDestinations,Has Copy Destinations;@_CopySource,Copy Source;@ContentTypeId,Content Type ID;@_ModerationStatus,Approval Status;@_UIVersion,UI Version;@Created_x0020_Date,Created;@FileRef,URL Path;@ItemChildCount,Item Child Count;@FolderChildCount,Folder Child Count;@AppAuthor,App Created By;@AppEditor,App Modified By;</DataFields>
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
