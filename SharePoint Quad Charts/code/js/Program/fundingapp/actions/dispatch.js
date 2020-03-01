angular.module('app').controller('dispatchCtrl', ['$q','fundingAPI', function ($q, $fundingAPI) {


			console.log('dispatch controller')


	
	
	
				/*
	
	
					//////////////////////USER ACTIONS/////////////////////////////
	
					////////////ACTION:  User Selects Root Action
	
					var rootID = 17; //root from dom
					
	
					var roots = store.getState().ROOT;
					var rootdb = TAFFY(roots);
					rootID = rootdb({id:rootID}).first().id;
					var root = rootdb({id:rootID}).first().Root;
					
					//console.log('Root', root);
					
					
	
	
	
					//Root Items
					var userSelectRootUrl = $fundingAPI.userSelectRootUrl(root); 
					//console.log(userSelectRootUrl)		 							
					var userSelectRootItem = $fundingAPI.getItems(userSelectRootUrl); 
	
	
					//FY Items
					var  fyUrl = $fundingAPI.fyUrl(); 
					//console.log(fyUrl)		 							
					var  fyUrlItem = $fundingAPI.getItems(fyUrl); 
	
	
					
					
	
					var rootData = $q.all([ 
						userSelectRootItem,
						fyUrlItem
					]);
	
				   
	
					rootData.then(function (_rootData) {//Root Data
	
						console.log('_rootData',_rootData)
						
						
						
						vm.root2 = _rootData[0]; 
						vm.fy = _rootData[1]; 
						
	
	
						var RDTEFUNDEDBASE = _.filter(vm.root2, function(o) 
													   { return (o.Root === root)   && 
																(o.APPN === 'RDTE') &&
																(o.BO === '1') 	    &&
																(o.DollarType1 === 'BASE' || o.DollarType1 === 'BCTO' || o.DollarType1 === 'BEDI' ||
																 o.DollarType1 === 'BOIR' || o.DollarType1 === 'BHOA' || o.DollarType1 === 'BGMO' ||
																 o.DollarType1 === 'BOFS' || o.DollarType1 === 'BOSS' || o.DollarType1 === 'MDDE' ||
																 o.DollarType1 === 'SPEC'  )
														})
														
						var RDTEFUNDEDOCO = _.filter(vm.root2, function(o) 
													   { return (o.Root === root)   && 
																(o.APPN === 'RDTE') &&
																(o.BO === '1') 	    &&
																(o.DollarType1 === '10FS' || o.DollarType1 === '10IR' || o.DollarType1 === '1EFS' ||
																 o.DollarType1 === '1EIR' || o.DollarType1 === '1EDI' || o.DollarType1 === '1OSS' ||
																 o.DollarType1 === '1HOA' || o.DollarType1 === '1GMO' || o.DollarType1 === '1CTO' ||
																 o.DollarType1 === '000F' || o.DollarType1 === '000I' || o.DollarType1 === '000R' ||
																 o.DollarType1 === '00FS' || o.DollarType1 === '00IR' || o.DollarType1 === '0BTO' || 
																 o.DollarType1 === '46'   || o.DollarType1 === 'AA78' || o.DollarType1 === 'AA7F' ||
																 o.DollarType1 === 'AA7M' || o.DollarType1 === 'AA7R' || o.DollarType1 === 'BT2O' ||
																 o.DollarType1 === 'EURI' || o.DollarType1 === 'MOFS' || o.DollarType1 === 'MOIR' ||
																 o.DollarType1 === 'MSUP'
																 )
														})
														
						var RDTECRITICALBASE = _.filter(vm.root2, function(o) 
													   { return (o.Root === root)   && 
																(o.APPN === 'RDTE') &&
																(o.BO === '7') 	    &&
																(o.DollarType1 === 'BASE' || o.DollarType1 === 'BCTO' || o.DollarType1 === 'BEDI' ||
																 o.DollarType1 === 'BOIR' || o.DollarType1 === 'BHOA' || o.DollarType1 === 'BGMO' ||
																 o.DollarType1 === 'BOFS' || o.DollarType1 === 'BOSS' || o.DollarType1 === 'MDDE' ||
																 o.DollarType1 === 'SPEC'  )
														})
														
						var RDTECRITICALOCO = _.filter(vm.root2, function(o) 
													   { return (o.Root === root)   && 
																(o.APPN === 'RDTE') &&
																(o.BO === '7') 	    &&
																(o.DollarType1 === '10FS' || o.DollarType1 === '10IR' || o.DollarType1 === '1EFS' ||
																 o.DollarType1 === '1EIR' || o.DollarType1 === '1EDI' || o.DollarType1 === '1OSS' ||
																 o.DollarType1 === '1HOA' || o.DollarType1 === '1GMO' || o.DollarType1 === '1CTO' ||
																 o.DollarType1 === '000F' || o.DollarType1 === '000I' || o.DollarType1 === '000R' ||
																 o.DollarType1 === '00FS' || o.DollarType1 === '00IR' || o.DollarType1 === '0BTO' || 
																 o.DollarType1 === '46'   || o.DollarType1 === 'AA78' || o.DollarType1 === 'AA7F' ||
																 o.DollarType1 === 'AA7M' || o.DollarType1 === 'AA7R' || o.DollarType1 === 'BT2O' ||
																 o.DollarType1 === 'EURI' || o.DollarType1 === 'MOFS' || o.DollarType1 === 'MOIR' ||
																 o.DollarType1 === 'MSUP'
																 )
														})
														
														
						
														
						
														
														
						
						var RDTE_FUNDED_BASE_DB = TAFFY(RDTEFUNDEDBASE)();
						var RDTE_FUNDED_OCO_DB = TAFFY(RDTEFUNDEDOCO)();
						var RDTE_CRITICAL_BASE_DB = TAFFY(RDTECRITICALBASE)();
						var RDTE_CRITICAL_OCO_DB = TAFFY(RDTECRITICALOCO)();
						
						
						
						var rdte_funded_base = (RDTEFUNDEDBASE.length > 0 )    ?  APPNFUNDEDBASE(RDTE_FUNDED_BASE_DB, rootID, root, vm.fy) : false;
						var rdte_funded_oco =  (RDTEFUNDEDOCO.length > 0 )     ?  APPNFUNDEDOCO(RDTE_FUNDED_OCO_DB, rootID, root, vm.fy) : false;
						var rdte_critical_base = (RDTECRITICALBASE.length > 0 )?  APPNCRITICALBASE(RDTE_CRITICAL_BASE_DB, rootID, root, vm.fy) : false;
						var rdte_critical_oco =  (RDTECRITICALOCO.length > 0 ) ?  APPNCRITICALOCO(RDTE_CRITICAL_OCO_DB, rootID, root, vm.fy) : false;
	
	
						
						//console.log('RDTEFUNDEDBASE', RDTEFUNDEDBASE);
						//console.log('RDTEFUNDEDBASE', rdte_funded_base);
						//console.log('RDTEFUNDEDOCO', rdte_funded_oco);
						//console.log('RDTECRITICALBASE', rdte_critical_base);
						//console.log('RDTECRITCALOCO', rdte_critical_oco);
						
						
						
						////////////////TOTAL
						var totalFundedFY = {};
						totalFundedFY.id = 1//programProperties[0].id;
						totalFundedFY.Program = 'program 1'//programProperties[0].Program;
						totalFundedFY.Portfolio = 'AD'//programProperties[0].Portfolio;
						totalFundedFY.POM = 0;
						totalFundedFY = setFYs(totalFundedFY, vm.fy)//Set FYs
						
						var totalCriticalFY = {};
						totalCriticalFY.id = 1//programProperties[0].id;
						totalCriticalFY.Program = 'program 1'//programProperties[0].Program;
						totalCriticalFY.Portfolio = 'AD'//programProperties[0].Portfolio;
						totalCriticalFY.POM = 0;
						totalCriticalFY = setFYs(totalCriticalFY, vm.fy)//Set FYs
	
						
						
	
						
						//////////////////////////////////////////RDTE
						if(rdte_funded_base){// RDTE FUNDED BASE	
							store.dispatch(get_RDTE_FUNDED_BASE_Action(rdte_funded_base))
							//store.dispatch(get_RDTE_FUNDED_BASE_Action(rdte_funded_base)) //test additional roots
							
							var appn = store.getState().RDTEFUNDEDBASE;		
							totalFundedFY = calculateAPPN(appn, totalFundedFY, vm.fy, 'FUNDED_BASE_FY')
							
	
	
						}
						
						if(rdte_funded_oco){//RDTE FUNDED OCO
							store.dispatch(get_RDTE_FUNDED_OCO_Action(rdte_funded_oco))
							
							var appn = store.getState().RDTEFUNDEDOCO;
							totalFundedFY = calculateAPPN(appn, totalFundedFY, vm.fy, 'FUNDED_OCO_FY')
	
							
						}
						
						if(rdte_critical_base){//RDTE CRITICAL BASE
							store.dispatch(get_RDTE_CRITICAL_BASE_Action(rdte_critical_base))
							
							var appn = store.getState().RDTECRITICALBASE;
							totalCriticalFY = calculateAPPN(appn, totalCriticalFY, vm.fy, 'CRITICAL_BASE_FY')
	
							
						}
	
						
						if(rdte_critical_oco){//RDTE CRITICAL OCO					
							store.dispatch(get_RDTE_CRITICAL_OCO_Action(rdte_critical_oco))
							
							var appn = store.getState().RDTECRITICALOCO;
							totalCriticalFY = calculateAPPN(appn, totalCriticalFY, vm.fy, 'CRITICAL_OCO_FY')
							
							
						}
						
						//SET TOTAL
						store.getState().TOTALFUNDEDFY = [];//state mutation
						store.dispatch(get_TOTAL_FUNDED_FYAction(totalFundedFY))
						
						store.getState().TOTALCRITICALFY = [];//state mutation
						store.dispatch(get_TOTAL_CRITICAL_FYAction(totalCriticalFY))
						
						
						
						////////////////TOTAL UFRs
						var totalBaseUFR = {};//Total Base UFR
						totalBaseUFR.id = 1//programProperties[0].id;
						totalBaseUFR.Program = 'program 1'//programProperties[0].Program;
						totalBaseUFR.Portfolio = 'AD'//programProperties[0].Portfolio;
						totalBaseUFR.POM = 0;
						totalBaseUFR = setFYs(totalBaseUFR, vm.fy)//Set FYs
						
						var totalOCOUFR = {};//Total OCO UFR
						totalOCOUFR.id = 1//programProperties[0].id;
						totalOCOUFR.Program = 'program 1'//programProperties[0].Program;
						totalOCOUFR.Portfolio = 'AD'//programProperties[0].Portfolio;
						totalOCOUFR.POM = 0;
						totalOCOUFR = setFYs(totalOCOUFR, vm.fy)//Set FYs
						
						var totalUFR = {};//Total UFR
						totalUFR.id = 1//programProperties[0].id;
						totalUFR.Program = 'program 1'//programProperties[0].Program;
						totalUFR.Portfolio = 'AD'//programProperties[0].Portfolio;
						totalUFR.POM = 0;
						totalUFR = setFYs(totalUFR, vm.fy)//Set FYs
						
						
						
						//console.log('Total Base UFR', totalBaseUFR);
						//console.log('Total OCO UFR', totalOCOUFR);
						//console.log('Total UFR', totalUFR);
						
						if(rdte_critical_base || rdte_critical_oco){
							
							//RDTE UFR
							if(rdte_critical_base){
								
								if(store.getState().RDTEFUNDEDBASEFY.length > 0 && store.getState().RDTECRITICALBASEFY.length > 0){
									var fundedBaseFY = store.getState().RDTEFUNDEDBASEFY[0];
									var criticalBaseFY = store.getState().RDTECRITICALBASEFY[0];
									totalUFR  = calculateUFR(fundedBaseFY, criticalBaseFY, totalBaseUFR, vm.fy, 'RDTE_BASE_UFR');	
									
									
									//get_TOTAL_BASE_UFR_FYAction
								}
								
									
								
							}
							
							if(rdte_critical_oco){
								
								if(store.getState().RDTEFUNDEDOCOFY.length > 0 && store.getState().RDTECRITICALOCOFY.length > 0){
									var fundedOCOFY =  store.getState().RDTEFUNDEDOCOFY[0];
									var criticalOCOFY =  store.getState().RDTECRITICALOCOFY[0];
									totalUFR   = calculateUFR(fundedOCOFY, criticalOCOFY, totalOCOUFR, vm.fy, 'RDTE_OCO_UFR');	
									//store.dispatch(get_TOTAL_OCO_UFR_FYAction(ufr))
									
									//get_TOTAL_OCO_UFR_FYAction
								}
								
								
							}
	
	
							
						}
						
						//set total appn ufr	
						//console.log('totalUFR', totalUFR)	
						store.getState().TOTALUFR = [];
						store.dispatch(get_TOTAL_UFR_FYAction(totalUFR))
						
						
						//var totalUFR = calculateTOTALUFR(rdte_base_ufr, rdte_oco_ufr, totalBaseUFR, totalOCOUFR, totalUFR, vm.fy, 'RDTE_TOTAL_UFR');
						
						//console.log('totalUFR', totalUFR);
	
						*/
						
						
						
						
						
						/*
						
						/////////////////////ACTION: GET KEY5s			
						_.forEach(vm.root, function(value) {
						//	
							
							store.dispatch(getKey5Action(value))
							
							
							//console.log(key5ID, value);
						});
	
						*/
					
						
	
						/*
						
						
						////////////////ACTION: User Selects Key5
						
							
		
							var userKey5 = 'FASP146308FE6RDTE5D010FS';//key from dom
							
							
							
							var userKey5_RDTEFUNDEDBASE = _.filter(store.getState().KEY5, function(o) 
													   { return (o.Root === root)   && 
																(o.APPN === 'RDTE') &&
																(o.BO === '1') 	    &&
																(o.OData__x004b_EY5 === userKey5) &&
																(o.DollarType1 === 'BASE' || o.DollarType1 === 'BCTO' || o.DollarType1 === 'BEDI' ||
																 o.DollarType1 === 'BOIR' || o.DollarType1 === 'BHOA' || o.DollarType1 === 'BGMO' ||
																 o.DollarType1 === 'BOFS' || o.DollarType1 === 'BOSS' || o.DollarType1 === 'MDDE' ||
																 o.DollarType1 === 'SPEC'  )
														})
														
							var userKey5_RDTEFUNDEDOCO = _.filter(store.getState().KEY5, function(o) 
													   { return (o.Root === root)   && 
																(o.APPN === 'RDTE') &&
																(o.BO === '1') 	    &&
																(o.OData__x004b_EY5 === userKey5) &&
																(o.DollarType1 === '10FS' || o.DollarType1 === '10IR' || o.DollarType1 === '1EFS' ||
																 o.DollarType1 === '1EIR' || o.DollarType1 === '1EDI' || o.DollarType1 === '1OSS' ||
																 o.DollarType1 === '1HOA' || o.DollarType1 === '1GMO' || o.DollarType1 === '1CTO' ||
																 o.DollarType1 === '000F' || o.DollarType1 === '000I' || o.DollarType1 === '000R' ||
																 o.DollarType1 === '00FS' || o.DollarType1 === '00IR' || o.DollarType1 === '0BTO' || 
																 o.DollarType1 === '46'   || o.DollarType1 === 'AA78' || o.DollarType1 === 'AA7F' ||
																 o.DollarType1 === 'AA7M' || o.DollarType1 === 'AA7R' || o.DollarType1 === 'BT2O' ||
																 o.DollarType1 === 'EURI' || o.DollarType1 === 'MOFS' || o.DollarType1 === 'MOIR' ||
																 o.DollarType1 === 'MSUP'
																 )
														})
														
							var userKey5_RDTECRITICALBASE = _.filter(store.getState().KEY5, function(o) 
													   { return (o.Root === root)   && 
																(o.APPN === 'RDTE') &&
																(o.BO === '7') 	    &&
																(o.OData__x004b_EY5 === userKey5) &&
																(o.DollarType1 === 'BASE' || o.DollarType1 === 'BCTO' || o.DollarType1 === 'BEDI' ||
																 o.DollarType1 === 'BOIR' || o.DollarType1 === 'BHOA' || o.DollarType1 === 'BGMO' ||
																 o.DollarType1 === 'BOFS' || o.DollarType1 === 'BOSS' || o.DollarType1 === 'MDDE' ||
																 o.DollarType1 === 'SPEC'  )
														})
														
							var userKey5_RDTECRITICALOCO = _.filter(store.getState().KEY5, function(o) 
													   { return (o.Root === root)   && 
																(o.APPN === 'RDTE') &&
																(o.BO === '7') 	    &&
																(o.OData__x004b_EY5 === userKey5) &&
																(o.DollarType1 === '10FS' || o.DollarType1 === '10IR' || o.DollarType1 === '1EFS' ||
																 o.DollarType1 === '1EIR' || o.DollarType1 === '1EDI' || o.DollarType1 === '1OSS' ||
																 o.DollarType1 === '1HOA' || o.DollarType1 === '1GMO' || o.DollarType1 === '1CTO' ||
																 o.DollarType1 === '000F' || o.DollarType1 === '000I' || o.DollarType1 === '000R' ||
																 o.DollarType1 === '00FS' || o.DollarType1 === '00IR' || o.DollarType1 === '0BTO' || 
																 o.DollarType1 === '46'   || o.DollarType1 === 'AA78' || o.DollarType1 === 'AA7F' ||
																 o.DollarType1 === 'AA7M' || o.DollarType1 === 'AA7R' || o.DollarType1 === 'BT2O' ||
																 o.DollarType1 === 'EURI' || o.DollarType1 === 'MOFS' || o.DollarType1 === 'MOIR' ||
																 o.DollarType1 === 'MSUP'
																 )
														})
							
							
							
							
							
							//var userKey5Critical = _.filter(store.getState().KEY5, { 'BO': '7', APPN:'RDTE', 'Root': root, 'OData__x004b_EY5': userKey5 })
							
	
	
							//console.log('userKey5_RDTEFUNDEDBASE',userKey5_RDTEFUNDEDBASE )
							//console.log('userKey5_RDTEFUNDEDOCO',userKey5_RDTEFUNDEDOCO)
							//console.log('userKey5_RDTECRITICALBASE',userKey5_RDTECRITICALBASE)
							//console.log('userKey5_RDTECRITICALOCO',userKey5_RDTECRITICALOCO)
							
							
							
							
							var KEY5_RDTE_FUNDED_BASE_DB = TAFFY(userKey5_RDTEFUNDEDBASE)();
							var KEY5_RDTE_FUNDED_OCO_DB = TAFFY(userKey5_RDTEFUNDEDOCO)();
							var KEY5_RDTE_CRITICAL_BASE_DB = TAFFY(userKey5_RDTECRITICALBASE)();
							var KEY5_RDTE_CRITICAL_OCO_DB = TAFFY(userKey5_RDTECRITICALOCO)();
							
							var userKey5_rdte_funded_base =   	 (userKey5_RDTEFUNDEDBASE.length > 0 )    ?  KEY5APPNFUNDEDBASE(KEY5_RDTE_FUNDED_BASE_DB, rootID, root, userKey5, vm.fy) : false;
							var userKey5_rdte_funded_oco =  	 (userKey5_RDTEFUNDEDOCO.length > 0 )     ?  KEY5APPNFUNDEDOCO(KEY5_RDTE_FUNDED_OCO_DB, rootID, root, userKey5, vm.fy) : false;
							var userKey5_rdte_critical_base =    (userKey5_RDTECRITICALBASE.length > 0 )  ?  KEY5APPNCRITICALBASE(KEY5_RDTE_CRITICAL_BASE_DB, rootID, root, userKey5, vm.fy) : false;
							var userKey5_rdte_critical_oco =     (userKey5_RDTECRITICALOCO.length > 0 )   ?  KEY5APPNCRITICALOCO(KEY5_RDTE_CRITICAL_OCO_DB, rootID, root, userKey5, vm.fy) : false;
							
							//console.log('userKey5_rdte_funded_base ', userKey5_rdte_funded_base)
							//console.log('userKey5_rdte_funded_oco ', userKey5_rdte_funded_oco)
							//console.log('userKey5_rdte_critical_base ', userKey5_rdte_critical_base)
							//console.log('userKey5_rdte_critical_oco ', userKey5_rdte_critical_oco)
							
							
							
							
							////////////////TOTAL
							var totalFundedKey5FY = {};
							totalFundedKey5FY.id = 1//programProperties[0].id;
							totalFundedKey5FY.Program = 'program 1'//programProperties[0].Program;
							totalFundedKey5FY.Portfolio = 'AD'//programProperties[0].Portfolio;
							totalFundedKey5FY.POM = 0;
							totalFundedKey5FY = setFYs(totalFundedKey5FY, vm.fy)//Set FYs
							
							var totalCriticalKey5FY = {};
							totalCriticalKey5FY.id = 1//programProperties[0].id;
							totalCriticalKey5FY.Program = 'program 1'//programProperties[0].Program;
							totalCriticalKey5FY.Portfolio = 'AD'//programProperties[0].Portfolio;
							totalCriticalKey5FY.POM = 0;
							totalCriticalKey5FY = setFYs(totalCriticalKey5FY, vm.fy)//Set FYs
							
							
							
							
							
							//////////////////////////////////////////RDTE
							if(userKey5_rdte_funded_base){// RDTE FUNDED BASE	
								store.dispatch(getUserKey5RDTEBASEFUNDEDAction(userKey5_rdte_funded_base))
								
								var key5 = store.getState().USERKEY5RDTEBASEFUNDED;		
								
								totalFundedKey5FY = calculateKey5(key5, totalFundedKey5FY, vm.fy, 'FUNDED_BASE_FY')
								//console.log('totalFundedKey5FY',totalFundedKey5FY)
	
	
							}
							
							
							
							if(userKey5_rdte_funded_oco){// RDTE FUNDED OCO	
								store.dispatch(getUserKey5RDTEOCOFUNDEDAction(userKey5_rdte_funded_oco))
								
								var key5 = store.getState().USERKEY5RDTEOCOFUNDED;		
								totalFundedKey5FY = calculateKey5(key5, totalFundedKey5FY, vm.fy, 'FUNDED_OCO_FY')
								//console.log('totalFundedKey5FY',totalFundedKey5FY)
								
	
	
							}
	
							
							if(userKey5_rdte_critical_base){// RDTE CRITICAL BASE	
								store.dispatch(getUserKey5RDTEBASECRITICALAction(userKey5_rdte_critical_base))
								
								var key5 = store.getState().USERKEY5RDTEBASECRITICAL;		
								totalCriticalKey5FY = calculateKey5(key5, totalCriticalKey5FY, vm.fy, 'CRITICAL_BASE_FY')
								//console.log('totalCriticalKey5FY', totalCriticalKey5FY)
								
	
	
							}
							
							
							if(userKey5_rdte_critical_oco){// RDTE CRITICAL OCO	
								store.dispatch(getUserKey5RDTEOCOCRITICALAction(userKey5_rdte_critical_oco))
								
								var key5 = store.getState().USERKEY5RDTEOCOCRITICAL;		
								totalCriticalKey5FY = calculateKey5(key5, totalCriticalKey5FY, vm.fy, 'CRITICAL_OCO_FY')
								//console.log('totalCriticalKey5FY', totalCriticalKey5FY)
								
	
	
							}
							
							//SET Key5 TOTALs
							store.getState().TOTALKEY5FUNDEDFY = [];//state mutation
							store.dispatch(get_TOTALKEY5_FUNDED_FYAction(totalFundedKey5FY))
								
							store.getState().TOTALKEY5CRITICALFY = [];//state mutation
							store.dispatch(get_TOTALKEY5_CRITICAL_FYAction(totalCriticalKey5FY))
							
							//console.log('totalFundedKey5FY', totalFundedKey5FY)
							
							//set Deep Dive Funded
							store.getState().DEEPDIVEFUNDED = [];
							store.dispatch(getDeepDiveFundedAction(totalFundedKey5FY))
	
	
	
	
						
							
							
							////////////////TOTAL UFRs
							var totalBaseKey5UFR = {};//Total Base UFR
							totalBaseKey5UFR.id = 1//programProperties[0].id;
							totalBaseKey5UFR.Program = 'program 1'//programProperties[0].Program;
							totalBaseKey5UFR.Portfolio = 'AD'//programProperties[0].Portfolio;
							totalBaseKey5UFR.POM = 0;
							totalBaseKey5UFR = setFYs(totalBaseKey5UFR, vm.fy)//Set FYs
							
							var totalOCOKey5UFR = {};//Total OCO UFR
							totalOCOKey5UFR.id = 1//programProperties[0].id;
							totalOCOKey5UFR.Program = 'program 1'//programProperties[0].Program;
							totalOCOKey5UFR.Portfolio = 'AD'//programProperties[0].Portfolio;
							totalOCOKey5UFR.POM = 0;
							totalOCOKey5UFR = setFYs(totalOCOKey5UFR, vm.fy)//Set FYs
							
							var totalKey5UFR = {};//Total UFR
							totalKey5UFR.id = 1//programProperties[0].id;
							totalKey5UFR.Program = 'program 1'//programProperties[0].Program;
							totalKey5UFR.Portfolio = 'AD'//programProperties[0].Portfolio;
							totalKey5UFR.POM = 0;
							totalKey5UFR = setFYs(totalKey5UFR, vm.fy)//Set FYs
	
							//console.log('totalCriticalKey5FY', totalCriticalKey5FY)
							
						
						
							
							
						if(userKey5_rdte_critical_base || userKey5_rdte_critical_oco){
							
							//RDTE UFR
							if(userKey5_rdte_critical_base){
								
								if(store.getState().USERKEY5RDTEBASEFUNDEDFY.length > 0 && store.getState().USERKEY5RDTEBASECRITICALFY.length > 0){
									
									var key5FundedBaseFY = store.getState().USERKEY5RDTEBASEFUNDEDFY[0];
									var key5CriticalBaseFY = store.getState().USERKEY5RDTEBASECRITICALFY[0];
									//console.log('key5FundedBaseFY', key5FundedBaseFY)
									//console.log('key5CriticalBaseFY', key5CriticalBaseFY)
									
									totalBaseKey5UFR = calculateKey5UFR(key5FundedBaseFY, key5CriticalBaseFY, totalBaseKey5UFR, totalKey5UFR, vm.fy, 'RDTE_BASE_UFR');
									
								}
								
								
	
								
								
							}
							
							if(userKey5_rdte_critical_oco){
								
								if(store.getState().USERKEY5RDTEOCOFUNDEDFY.length > 0 && store.getState().USERKEY5RDTEOCOCRITICALFY.length > 0){
									
									var key5FundedOCOFY =  store.getState().USERKEY5RDTEOCOFUNDEDFY[0];		
									var key5CriticalOCOFY =  store.getState().USERKEY5RDTEOCOCRITICALFY[0];	
									//console.log('key5FundedOCOFY', key5FundedOCOFY)
									//console.log('key5CriticalOCOFY', key5CriticalOCOFY)		
									
									totalOCOKey5UFR = calculateKey5UFR(key5FundedOCOFY, key5CriticalOCOFY, totalOCOKey5UFR, totalKey5UFR, vm.fy, 'RDTE_OCO_UFR');
									
								}
								
								
								
							}
							
	
							
						}
						
						
						
						
						//console.log('totalKey5UFR', totalKey5UFR)
						
						
						
						
						//set Deep Dive Key5UFR
						store.getState().DEEPDIVEUFR = [];
						store.dispatch(getDeepDiveUFRAction(totalKey5UFR))
	
						*/
						
						
	
						
	
						
						
					/*
	
					///////////////////////ACTION: User Splits Key5
							
						var __userKey5 = 'FASP146308FE6RDTE5D010FS';//key from dom
						
						var fySplits = {//split values come from dom			
								FY19:  1,
								FY20 : 1,
								FY21 : 1,
								FY22 : 1,
								FY23 : 1,
								FY24 : 1,
								FY25 : 0
	
						}
					
						
							
	
						  
						  
						  
						  //get RDTE funded key5 from data source
						  var get_RDTEFUNDEDBASEKey5 = _.filter(store.getState().KEY5, function(o)
													   { return (o.Root === root)   && 
																(o.APPN === 'RDTE') &&
																(o.BO === '1') 	    &&
																(o.OData__x004b_EY5 === __userKey5) &&
																(o.DollarType1 === 'BASE' || o.DollarType1 === 'BCTO' || o.DollarType1 === 'BEDI' ||
																 o.DollarType1 === 'BOIR' || o.DollarType1 === 'BHOA' || o.DollarType1 === 'BGMO' ||
																 o.DollarType1 === 'BOFS' || o.DollarType1 === 'BOSS' || o.DollarType1 === 'MDDE' ||
																 o.DollarType1 === 'SPEC'  )
														})
	
						 //get RDTE funded key5 from data source								
						 var get_RDTEFUNDEDOCOKey5 = _.filter(store.getState().KEY5, function(o) 
													   { return (o.Root === root)   && 
																(o.APPN === 'RDTE') &&
																(o.BO === '1') 	    &&
																(o.OData__x004b_EY5 === __userKey5) &&
																(o.DollarType1 === '10FS' || o.DollarType1 === '10IR' || o.DollarType1 === '1EFS' ||
																 o.DollarType1 === '1EIR' || o.DollarType1 === '1EDI' || o.DollarType1 === '1OSS' ||
																 o.DollarType1 === '1HOA' || o.DollarType1 === '1GMO' || o.DollarType1 === '1CTO' ||
																 o.DollarType1 === '000F' || o.DollarType1 === '000I' || o.DollarType1 === '000R' ||
																 o.DollarType1 === '00FS' || o.DollarType1 === '00IR' || o.DollarType1 === '0BTO' || 
																 o.DollarType1 === '46'   || o.DollarType1 === 'AA78' || o.DollarType1 === 'AA7F' ||
																 o.DollarType1 === 'AA7M' || o.DollarType1 === 'AA7R' || o.DollarType1 === 'BT2O' ||
																 o.DollarType1 === 'EURI' || o.DollarType1 === 'MOFS' || o.DollarType1 === 'MOIR' ||
																 o.DollarType1 === 'MSUP'
																 )
														})
														
														
	
														
							//console.log('fySplits', fySplits)		
							//console.log('get_RDTEFUNDEDBASEKey5', get_RDTEFUNDEDBASEKey5)
							//console.log('get_RDTEFUNDEDOCOKey5',  get_RDTEFUNDEDOCOKey5)
	
	
							var build_RDTEFUNDEDBASE =  (get_RDTEFUNDEDBASEKey5.length > 0)  ?     calculateKey5Split( get_RDTEFUNDEDBASEKey5, fySplits, vm.fy, 'RDTEFUNDEDBASE' ) : false;
							var build_RDTEFUNDEDOCO  =  (get_RDTEFUNDEDOCOKey5.length  > 0)  ?     calculateKey5Split( get_RDTEFUNDEDOCOKey5, fySplits, vm.fy, 'RDTEFUNDEDOCO' ) : false;
	
							*/
	
							/*
							///////////////////////ACTION: User Resets Key5
							key5Reset();
	
							*/
	
							/*
	
	
							///////////////////////ACTION: Calculate POM
	
							//default interval
							var fyStart = parseInt( moment().format("YY"), 10 )
							var strEnd = moment().add(6, 'years').calendar() 
							var fyEnd = parseInt( moment(new Date(strEnd)).format('YY'), 10 )
	
							//console.log('fyStart', fyStart)
							//console.log('fyEnd', fyEnd)
	
							//user interval
							var startFY = 19;
							var endFY = 25;
	
							
							var result = calculatePOMHelper(startFY, endFY)
	
							//console.log('DEEPDIVEFUNDED', store.getState().DEEPDIVEFUNDED[0])
							//console.log('TOTALFUNDEDFY', store.getState().TOTALFUNDEDFY[0])
							//console.log('RDTEFUNDEDOCOFY', store.getState().RDTEFUNDEDOCOFY[0])
							//console.log('RDTEFUNDEDBASEFY', store.getState().RDTEFUNDEDBASEFY[0])
							//console.log('USERKEY5RDTEBASEFUNDED', store.getState().USERKEY5RDTEBASEFUNDED[0])
							//console.log('USERKEY5RDTEOCOFUNDED', store.getState().USERKEY5RDTEOCOFUNDED[0])
					
	
							if(result)
								calculatePOM(startFY, endFY, vm.fy, store.getState().USERKEY5RDTEOCOFUNDED[0], 'KEY5')
							
	
							console.log('The new state is: ', store.getState())
	
							*/
	
							
	

						

					
					

}]);//dispatchCtrl
		







		






	




		
		
		






		
		

		

