
		/* AUTHORITATIVE DATA REDUCERS*/

		//FY DATA
		function fyActions (state = [], action){//FY DATA 

			switch(action.type){
				case GET_FYs :
						return state.concat([action.fy])
				default : 
					return state


			}
		}




		
		//ROOT
		function rootActions (state = [], action){//ROOT 

			switch(action.type){
				case GET_ROOT :
						return state.concat([action.root])
				default : 
					return state


			}
		}

		//USER ROOTS
		function userRootActions (state = [], action){//User Roots

			switch(action.type){
				case GET_USER_ROOTS :
						return state.concat([action.root])
				
				case REMOVE_USER_ROOTS :					
					return 	_.filter(state, function(root) { return root.id !== action.id })

				default : 
					return state


			}
		}


		//LIN
		function LINActions (state = [], action){ //LIN

			switch(action.type){
				case GET_LIN :
						return state.concat([action.LIN])
						
				case REMOVE_LIN :					
					return 	_.filter(state, function(LIN) { return LIN.id !== action.id })
				default : 
					return state


			}
		}

		function getFundedBaseLINActions (state = [], action){ //LIN

			switch(action.type){
				case GET_FUNDEDBASE_LIN :
						return state.concat([action.LIN])
						
				
				default : 
					return state


			}
		}

		function getCriticalBaseLINActions (state = [], action){ //LIN

			switch(action.type){
				case GET_CRITICALBASE_LIN :
						return state.concat([action.LIN])
						
				
				default : 
					return state


			}
		}

		function getFundedOCOLINActions (state = [], action){ //LIN

			switch(action.type){
				case GET_FUNDEDOCO_LIN :
						return state.concat([action.LIN])
						
				
				default : 
					return state


			}
		}

		function getCriticalOCOLINActions (state = [], action){ //LIN

			switch(action.type){
				case GET_CRITICALOCO_LIN :
						return state.concat([action.LIN])
						
				
				default : 
					return state


			}
		}

		function getLIN_BASE_FUNDED_FY (state = [], action){//LIN FUNDED BASE ACTIONS

			switch(action.type){
				
				case GET_LIN_BASE_FUNDED_FY :
						return state.concat([action.LIN])
					
				default : 
					return state

			}
		}

		function getLIN_BASE_CRITICAL_FY (state = [], action){//LIN CRITICAL BASE ACTIONS

			switch(action.type){
				
				case GET_LIN_BASE_CRITICAL_FY :
						return state.concat([action.LIN])
					
				default : 
					return state

			}
		}

		function getLIN_OCO_FUNDED_FY (state = [], action){//LIN FUNDED OCO ACTIONS

			switch(action.type){
				
				case GET_LIN_OCO_FUNDED_FY :
						return state.concat([action.LIN])
					
				default : 
					return state

			}
		}

		function getLIN_OCO_CRITICAL_FY (state = [], action){//LIN CRITICAL OCO ACTIONS

			switch(action.type){
				
				case GET_LIN_OCO_CRITICAL_FY :
						return state.concat([action.LIN])
					
				default : 
					return state

			}
		}

		function getLIN_FUNDED_FY (state = [], action){//LIN FUNDED FY ACTIONS

			switch(action.type){
				
				case GET_LIN_FUNDED :
						return state.concat([action.LIN])
					
				default : 
					return state

			}
		}

		function getLIN_CRITICAL_FY (state = [], action){//LIN CRITICAL FY ACTIONS

			switch(action.type){
				
				case GET_LIN_CRITICAL :
						return state.concat([action.LIN])
					
				default : 
					return state

			}
		}

		function getLIN_UFR (state = [], action){//LIN UFR ACTIONS

			switch(action.type){
				
				case GET_LIN_UFR :
						return state.concat([action.LIN])
					
				default : 
					return state

			}
		}

		function getLINBASE_UFR (state = [], action){//LIN BASE UFR ACTIONS

			switch(action.type){
				
				case GET_LIN_BASE_UFR :
						return state.concat([action.LIN])
					
				default : 
					return state

			}
		}

		function getLINOCO_UFR (state = [], action){//LIN OCO UFR ACTIONS

			switch(action.type){
				
				case GET_LIN_OCO_UFR :
						return state.concat([action.LIN])
					
				default : 
					return state

			}
		}




		
		//KEY5
		function key5Actions (state = [], action){ //KEY5

			switch(action.type){
				case GET_KEY5 :
						return state.concat([action.key5])
						
				case REMOVE_KEY5 :					
					return 	_.filter(state, function(key5) { return key5.id !== action.id })
				default : 
					return state


			}
		}
		
		function userkey5Actions (state = [], action){ //USER KEY5

			switch(action.type){
				case GET_USERKEY5 :
						return state.concat([action.key5])
						
				case REMOVE_USERKEY5 :					
					return 	_.filter(state, function(key5) { return key5.id !== action.id })
				default : 
					return state


			}
		}
		
		function getUserKey5RDTEBASEFUNDEDActions (state = [], action){ //User Key5 RDTE FUNDED BASE  Actions

			switch(action.type){
				case GET_USERKEY5_RDTEBASE_FUNDED  :
						return state.concat([action.key5])
						
				case REMOVE_USERKEY5_RDTEBASE_FUNDED :					
					return 	_.filter(state, function(key5) { return key5.id !== action.id })

				
						
				default : 
					return state


			}
		}
		
		function getUserKey5RDTEBASECRITICALActions (state = [], action){ //User Key5 RDTE CRITICAL BASE Actions

			switch(action.type){
				case GET_USERKEY5_RDTEBASE_CRITICAL  :
						return state.concat([action.key5])
						
				case REMOVE_USERKEY5_RDTEBASE_CRITICAL :					
					return 	_.filter(state, function(key5) { return key5.id !== action.id })

				
						
				default : 
					return state


			}
		}
		
		function getUserKey5RDTEOCOFUNDEDActions (state = [], action){ //User Key5 RDTE FUNDED OCO Actions

			switch(action.type){
				case GET_USERKEY5_RDTEOCO_FUNDED  :
						return state.concat([action.key5])
						
				case REMOVE_USERKEY5_RDTEOCO_FUNDED :					
					return 	_.filter(state, function(key5) { return key5.id !== action.id })

				
						
				default : 
					return state


			}
		}
		
		function getUserKey5RDTEOCOCRITICALActions (state = [], action){ //User Key5 RDTE CRITICAL OCO Actions

			switch(action.type){
				case GET_USERKEY5_RDTEOCO_CRITICAL  :
						return state.concat([action.key5])
						
				case REMOVE_USERKEY5_RDTEOCO_CRITICAL :					
					return 	_.filter(state, function(key5) { return key5.id !== action.id })

				
						
				default : 
					return state


			}
		}

		
		
		
		function userKey5SplitActions (state = [], action){ //User Key5 Split

			switch(action.type){
				case GET_USERKEY5_SPLIT :
						return state.concat([action.key5])

				case REMOVE_USERKEY5_SPLIT :					
					return 	_.filter(state, function(key5) { return key5.id !== action.id })
				default : 
					return state


			}
		}

		//DEEPDIVE 
		function deepDiveFundedActions (state = [], action){//DEEP DIVE FUNDED

			switch(action.type){
				case GET_DEEPDIVE_FUNDED :
						return state.concat([action.key5])
				default : 
					return state


			}
		}

		function deepDiveCriticalActions (state = [], action){//DEEP DIVE CRITICAL

			switch(action.type){
				case GET_DEEPDIVE_CRITICAL :
						return state.concat([action.key5])
				default : 
					return state


			}
		}

		
		function deepDiveUFRActions (state = [], action){//DEEP DIVE UFR

			switch(action.type){
				case GET_DEEPDIVE_UFR :
						return state.concat([action.key5])
				default : 
					return state


			}
		}


		
		//TOTAL
		function TOTAL_FUNDED_FYActions (state = [], action){//TOTAL FUNDED FY ACTIONS

			switch(action.type){
				
				case GET_TOTAL_FUNDED_FY :
						return state.concat([action.appn])
					
				default : 
					return state

			}
		}
		
		function TOTAL_CRITICAL_FYActions (state = [], action){//TOTAL CRITICAL FY ACTIONS

			switch(action.type){
				
				case GET_TOTAL_CRITICAL_FY :
						return state.concat([action.appn])
					
				default : 
					return state

			}
		}
		
		function TOTAL_BASE_UFR_FYActions (state = [], action){//TOTAL BASE UFR FY ACTIONS

			switch(action.type){
				
				case GET_TOTAL_BASE_UFR_FY :
						return state.concat([action.appn])
					
				default : 
					return state

			}
		}
		
		function TOTAL_OCO_UFR_FYActions (state = [], action){//TOTAL OCO UFR FY ACTIONS

			switch(action.type){
				
				case GET_TOTAL_OCO_UFR_FY :
						return state.concat([action.appn])
					
				default : 
					return state

			}
		}
		
		function TOTAL_UFR_FYActions (state = [], action){//TOTAL UFR FY ACTIONS

			switch(action.type){
				
				case GET_TOTAL_UFR_FY :
						return state.concat([action.appn])
					
				default : 
					return state

			}
		}
		
		
		/////////////////////////////////////////////////////////
		
		
		function TOTALKEY5_FUNDED_FYActions (state = [], action){//TOTAL KEY5 FUNDED FY ACTIONS

			switch(action.type){
				
				case GET_TOTALKEY5_FUNDED_FY :
						return state.concat([action.appn])
					
				default : 
					return state

			}
		}
		
		function TOTALKEY5_CRITICAL_FYActions (state = [], action){//TOTAL KEY5 CRITICAL FY ACTIONS

			switch(action.type){
				
				case GET_TOTALKEY5_CRITICAL_FY :
						return state.concat([action.appn])
					
				default : 
					return state

			}
		}
		
		function TOTALKEY5_BASE_UFR_FYActions (state = [], action){//TOTAL KEY5 BASE UFR FY ACTIONS

			switch(action.type){
				
				case GET_TOTALKEY5_BASE_UFR_FY :
						return state.concat([action.appn])
					
				default : 
					return state

			}
		}
		
		function TOTALKEY5_OCO_UFR_FYActions (state = [], action){//TOTAL KEY5 OCO UFR FY ACTIONS

			switch(action.type){
				
				case GET_TOTALKEY5_OCO_UFR_FY :
						return state.concat([action.appn])
					
				default : 
					return state

			}
		}
		
		function TOTALKEY5_UFR_FYActions (state = [], action){//TOTAL KEY5 UFR FY ACTIONS

			switch(action.type){
				
				case GET_TOTALKEY5_UFR_FY :
						return state.concat([action.appn])
					
				default : 
					return state

			}
		}

		
		
		
		
		
		
		////////////////////////////////////////////////////////



		
		//RDTE
		function RDTE_FUNDED_BASEActions (state = [], action){//RDTE FUNDED BASE ACTIONS

			switch(action.type){
				
				case GET_RDTE_FUNDED_BASE :
						return state.concat([action.appn])
												
	
				default : 
					return state



			}
		}
		
		function RDTE_FUNDED_BASE_FYActions (state = [], action){//RDTE FUNDED BASE FY ACTIONS

			switch(action.type){
				
				case GET_RDTE_FUNDED_BASE_FY :
						return state.concat([action.appn])
												
	
				default : 
					return state



			}
		}
		
		function RDTE_FUNDED_OCOActions (state = [], action){//RDTE FUNDED OCO ACTIONS

			switch(action.type){
				
				case GET_RDTE_FUNDED_OCO :
						return state.concat([action.appn])
											
				default : 
					return state



			}
		}
		
		function RDTE_FUNDED_OCO_FYActions (state = [], action){//RDTE FUNDED OCO FY ACTIONS

			switch(action.type){
				
				case GET_RDTE_FUNDED_OCO_FY :
						return state.concat([action.appn])
											
				default : 
					return state



			}
		}
		
		function RDTE_CRITICAL_BASEActions (state = [], action){//RDTE CRITICAL BASE ACTIONS

			switch(action.type){
				
				case GET_RDTE_CRITICAL_BASE :
						return state.concat([action.appn])
												
	
				default : 
					return state



			}
		}
		
		function RDTE_CRITICAL_BASE_FYActions (state = [], action){//RDTE CRITICAL BASE FY ACTIONS

			switch(action.type){
				
				case GET_RDTE_CRITICAL_BASE_FY :
						return state.concat([action.appn])
												
	
				default : 
					return state



			}
		}
		
		function RDTE_CRITICAL_OCOActions (state = [], action){//RDTE CRITICAL OCO ACTIONS

			switch(action.type){
				
				case GET_RDTE_CRITICAL_OCO :
						return state.concat([action.appn])
											
				default : 
					return state



			}
		}
		
		function RDTE_CRITICAL_OCO_FYActions (state = [], action){//RDTE CRITICAL OCO FY ACTIONS

			switch(action.type){
				
				case GET_RDTE_CRITICAL_OCO_FY :
						return state.concat([action.appn])
											
				default : 
					return state



			}
		}
		
		function RDTE_BASE_UFR_FYActions (state = [], action){//RDTE BASE UFR FY ACTIONS

			switch(action.type){
				
				case GET_RDTE_BASE_UFR_FY :
						return state.concat([action.appn])
											
				default : 
					return state



			}
		}
		
		function RDTE_OCO_UFR_FYActions (state = [], action){//RDTE OCO UFR FY ACTIONS

			switch(action.type){
				
				case GET_RDTE_OCO_UFR_FY :
						return state.concat([action.appn])
											
				default : 
					return state



			}
		}
		
		function RDTE_TOTAL_UFRActions (state = [], action){//RDTE TOTAL UFR FY ACTIONS

			switch(action.type){
				
				case GET_RDTE_TOTAL_UFR_FY :
						return state.concat([action.appn])
											
				default : 
					return state



			}
		}
		
		
		function RDTEKEY5_FUNDED_BASE_FYActions (state = [], action){//RDTE KEY5 FUNDED BASE FY ACTIONS

			switch(action.type){
				
				case GET_RDTEKEY5_FUNDED_BASE_FY :
						return state.concat([action.appn])
												
	
				default : 
					return state



			}
		}
		
		function RDTEKEY5_CRITICAL_BASE_FYActions (state = [], action){//RDTE KEY5 CRITICAL BASE FY ACTIONS

			switch(action.type){
				
				case GET_RDTEKEY5_CRITICAL_BASE_FY :
						return state.concat([action.appn])
												
	
				default : 
					return state



			}
		}
		
		function RDTEKEY5_CRITICAL_OCO_FYActions (state = [], action){//RDTE KEY5 CRITICAL OCO FY ACTIONS

			switch(action.type){
				
				case GET_RDTEKEY5_CRITICAL_OCO_FY :
						return state.concat([action.appn])
											
				default : 
					return state



			}
		}
		
		function RDTEKEY5_FUNDED_OCO_FYActions (state = [], action){//RDTE KEY5 FUNDED OCO FY ACTIONS

			switch(action.type){
				
				case GET_RDTEKEY5_FUNDED_OCO_FY :
						return state.concat([action.appn])
											
				default : 
					return state



			}
		}
		
		function RDTEKEY5_BASE_UFR_FYActions (state = [], action){//RDTE KEY5 BASE UFR FY ACTIONS

			switch(action.type){
				
				case GET_RDTEKEY5_BASE_UFR_FY :
						return state.concat([action.appn])
											
				default : 
					return state



			}
		}
		
		function RDTEKEY5_OCO_UFR_FYActions (state = [], action){//RDTE KEY5 OCO UFR FY ACTIONS

			switch(action.type){
				
				case GET_RDTEKEY5_OCO_UFR_FY :
						return state.concat([action.appn])
											
				default : 
					return state



			}
		}
		
		function RDTEKEY5_TOTAL_UFRActions (state = [], action){//RDTE KEY5 TOTAL UFR FY ACTIONS

			switch(action.type){
				
				case GET_RDTEKEY5_TOTAL_UFR_FY :
						return state.concat([action.appn])
											
				default : 
					return state



			}
		}

		
		/////////////////////////////////////////////////////
		

		

		


		
		
		//PROC
		function PROCFYActions (state = [], action){//PROC FUNDED FY ACTIONS

			switch(action.type){
				
				case GET_PROC_FYs :
						return state.concat([action.appn])
					
				default : 
					return state

			}
		}
		
		function PROCFYUFRActions (state = [], action){//PROC CRITICAL FY ACTIONS

			switch(action.type){
				
				case GET_PROCUFR_FYs :
						return state.concat([action.appn])
					
				default : 
					return state

			}
		}


		function appnACFTActions (state = [], action){//ACFT FUNDED(PROC)
				switch(action.type){
				
					case GET_ACFT :
						return state.concat([action.appn])
						
					case REMOVE_ACFT :					
						return 	_.filter(state, function(appn) { return appn.id !== action.id })

					

					default : 
						return state


					
				}
		

		}
		
		function appnACFTUFRActions (state = [], action){//ACFT CRITICAL(PROC)
				switch(action.type){
				
					case GET_ACFTUFR :
						return state.concat([action.appn])
					
					case REMOVE_ACFTUFR :					
						return 	_.filter(state, function(appn) { return appn.id !== action.id })


					default : 
						return state


					
				}
		

		}

		
		function appnAMMOActions (state = [], action){//AMMO FUNDED(PROC)
				switch(action.type){
				
					case GET_AMMO :
						return state.concat([action.appn])
					
					case REMOVE_AMMO :					
						return 	_.filter(state, function(appn) { return appn.id !== action.id })


					default : 
						return state
					
				}
		

		}
		
		function appnAMMOUFRActions (state = [], action){//AMMO CRITICAL(PROC)
				switch(action.type){
				
					case GET_AMMOUFR :
						return state.concat([action.appn])
					
					case REMOVE_AMMOUFR :					
						return 	_.filter(state, function(appn) { return appn.id !== action.id })


					default : 
						return state


					
				}
		

		}

		
		function appnMSLSActions (state = [], action){//MSLS FUNDED(PROC)
				switch(action.type){
				
					case GET_MSLS :
						return state.concat([action.appn])
						
					case REMOVE_MSLS :					
						return 	_.filter(state, function(appn) { return appn.id !== action.id })

					
					

					default : 
						return state			
				}
		}
		
		function appnMSLSUFRActions (state = [], action){//MSLS CRITICAL(PROC)
				switch(action.type){
				
					case GET_MSLSUFR :
						return state.concat([action.appn])
					
					case REMOVE_MSLSUFR :					
						return 	_.filter(state, function(appn) { return appn.id !== action.id })


					default : 
						return state			
				}
		}


		function appnOPAActions (state = [], action){//OPA FUNDED(PROC)
				switch(action.type){
				
					case GET_OPA :
						return state.concat([action.appn])
					
					case REMOVE_OPA :					
						return 	_.filter(state, function(appn) { return appn.id !== action.id })


					default : 
						return state
				
				}
		}
		
		function appnOPAUFRActions (state = [], action){//OPA CRITICAL(PROC)
				switch(action.type){
				
					case GET_OPAUFR :
						return state.concat([action.appn])
					
					case REMOVE_OPAUFR :					
						return 	_.filter(state, function(appn) { return appn.id !== action.id })


					default : 
						return state
				
				}
		}
		
		function appnWTCVActions (state = [], action){//WTCV FUNDED (PROC)
				switch(action.type){
				
					case GET_WTCV :
						return state.concat([action.appn])
					
					case REMOVE_WTCV :					
						return 	_.filter(state, function(appn) { return appn.id !== action.id })


					default : 
						return state
				
				}
		}
		
		function appnWTCVUFRActions (state = [], action){//WTCV CRITICAL (PROC)
				switch(action.type){
				
					
					case GET_WTCVUFR :
						return state.concat([action.appn])
					
					case REMOVE_WTCVUFR :					
						return 	_.filter(state, function(appn) { return appn.id !== action.id })


					default : 
						return state
				
				}
		}

		
		//OTHER
		function OTHERFYActions (state = [], action){//OTHER FUNDED FY ACTIONS

			switch(action.type){
				
				case GET_OTHER_FYs :
						return state.concat([action.appn])
					
				default : 
					return state

			}
		}
		
		function OTHERFYUFRActions (state = [], action){//OTHER CRITICAL FY ACTIONS

			switch(action.type){
				
				case GET_OTHERUFR_FYs :
						return state.concat([action.appn])
					
				default : 
					return state

			}
		}


		function appnAWCFActions (state = [], action){//AWCF FUNDED(OTHER)
				switch(action.type){
				
					case GET_AWCF :
						return state.concat([action.appn])
					
					case REMOVE_AWCF :					
						return 	_.filter(state, function(appn) { return appn.id !== action.id })


					default : 
						return state
				
				}
		}
		
		function appnAWCFUFRActions (state = [], action){//AWCF CRITICAL(OTHER)
				switch(action.type){
				
					case GET_AWCFUFR :
						return state.concat([action.appn])
					
					case REMOVE_AWCFUFR :					
						return 	_.filter(state, function(appn) { return appn.id !== action.id })

					
					

					default : 
						return state
				
				}
		}

		
		function appnCHMCActions (state = [], action){//CHMC FUNDED(OTHER)
				switch(action.type){
				
					case GET_CHMC :
						return state.concat([action.appn])
					
					case REMOVE_CHMC :					
						return 	_.filter(state, function(appn) { return appn.id !== action.id })


					default : 
						return state
				
				}
		}
		
		function appnCHMCUFRActions (state = [], action){//CHMC CRITICAL(OTHER)
				switch(action.type){
				
					case GET_CHMCUFR :
						return state.concat([action.appn])
						
					case REMOVE_CHMCUFR :					
						return 	_.filter(state, function(appn) { return appn.id !== action.id })


					default : 
						return state
				
				}
		}


		function appnCHMDActions (state = [], action){//CHMD FUNDED(OTHER)
				switch(action.type){
				
					case GET_CHMD :
						return state.concat([action.appn])
					
					case REMOVE_CHMD :					
						return 	_.filter(state, function(appn) { return appn.id !== action.id })


					default : 
						return state
				
				}
		}
		
		function appnCHMDUFRActions (state = [], action){//CHMD CRITICAL(OTHER)
				switch(action.type){
				
					case GET_CHMDUFR :
						return state.concat([action.appn])
					
					case REMOVE_CHMDUFR :					
						return 	_.filter(state, function(appn) { return appn.id !== action.id })


					default : 
						return state
				
				}
		}


		function appnMCAActions (state = [], action){//MCA FUNDED(OTHER)
				switch(action.type){
				
					case GET_MCA :
						return state.concat([action.appn])
					
					case REMOVE_MCA :
						return state.concat([action.appn])


					default : 
						return state
				
				}
		}
		
		function appnMCAUFRActions (state = [], action){//MCA CRITICAL(OTHER)
				switch(action.type){
				
					case GET_MCAUFR :
						return state.concat([action.appn])
					
					case REMOVE_MCAUFR :
						return state.concat([action.appn])


					default : 
						return state
				
				}
		}

		
		function appnNGPAActions (state = [], action){//NGPA FUNDED(OTHER)
				switch(action.type){
				
					case GET_NGPA :
						return state.concat([action.appn])
					
					case REMOVE_NGPA :
						return state.concat([action.appn])


					default : 
						return state
				
				}
		}
		
		function appnNGPAUFRActions (state = [], action){//NGPA CRITICAL(OTHER)
				switch(action.type){
				
					case GET_NGPAUFR :
						return state.concat([action.appn])
					
					case REMOVE_NGPAUFR :
						return state.concat([action.appn])


					default : 
						return state
				
				}
		}


		function appnOMAActions (state = [], action){//OMA FUNDED(OTHER)
				switch(action.type){
				
					case GET_OMA :
						return state.concat([action.appn])
					
					case REMOVE_OMA :
						return state.concat([action.appn])


					default : 
						return state
				
				}
		}
		
		function appnOMAUFRActions (state = [], action){//OMA CRITICAL(OTHER)
				switch(action.type){
				
					case GET_OMAUFR :
						return state.concat([action.appn])
					
					case REMOVE_OMAUFR :
						return state.concat([action.appn])


					default : 
						return state
				
				}
		}

		
		function appnOMNGActions (state = [], action){//OMNG FUNDED(OTHER)
				switch(action.type){
				
					case GET_OMNG :
						return state.concat([action.appn])
						
					case REMOVE_OMNG :
						return state.concat([action.appn])


					default : 
						return state
				
				}
		}
		
		function appnOMNGUFRActions (state = [], action){//OMNG CRITICAL(OTHER)
				switch(action.type){
				
					case GET_OMNGUFR :
						return state.concat([action.appn])
					
					case REMOVE_OMNGUFR :
						return state.concat([action.appn])


					default : 
						return state
				
				}
		}

		
		function appnOMARActions (state = [], action){//OMAR FUNDED(OTHER)
				switch(action.type){
				
					case GET_OMAR :
						return state.concat([action.appn])
					
					case REMOVE_OMAR :
						return state.concat([action.appn])


					default : 
						return state
				
				}
		}
		
		function appnOMARUFRActions (state = [], action){//OMAR CRITICAL(OTHER)
				switch(action.type){
				
					case GET_OMARUFR :
						return state.concat([action.appn])

					case REMOVE_OMARUFR :
						return state.concat([action.appn])

					default : 
						return state
				
				}
		}

		
		function appnRDTAActions (state = [], action){//RDTA FUNDED OTHER)
				switch(action.type){
				
					case GET_RDTA :
						return state.concat([action.appn])
					
					case REMOVE_RDTA :
						return state.concat([action.appn])


					default : 
						return state
				
				}
		}
		
		function appnRDTAUFRActions (state = [], action){//RDTA CRITICAL(OTHER)
				switch(action.type){
				
					case GET_RDTAUFR :
						return state.concat([action.appn])
					
					case REMOVE_RDTAUFR :
						return state.concat([action.appn])


					default : 
						return state
				
				}
		}

		
		function appnRPAActions (state = [], action){//RPA FUNDED(OTHER)
				switch(action.type){
				
					case GET_RPA :
						return state.concat([action.appn])
					
					case REMOVE_RPA :
						return state.concat([action.appn])


					default : 
						return state
				
				}
		}
		
		function appnRPAUFRActions (state = [], action){//RPA CRITICAL(OTHER)
				switch(action.type){
				
					case GET_RPAUFR :
						return state.concat([action.appn])
					
					case REMOVE_RPAUFR :
						return state.concat([action.appn])


					default : 
						return state
				
				}
		}

		
		function appnWEDGActions (state = [], action){//WEDG FUNDED(OTHER)
				switch(action.type){
				
					case GET_WEDG :
						return state.concat([action.appn])
					
					case REMOVE_WEDG :
						return state.concat([action.appn])


					default : 
						return state
				
				}
		}
		
		function appnWEDGUFRActions (state = [], action){//WEDG CRITICAL(OTHER)
				switch(action.type){
				
					case GET_WEDGUFR :
						return state.concat([action.appn])
					
					case REMOVE_WEDGUFR :
						return state.concat([action.appn])


					default : 
						return state
				
				}
		}

		
		/* PROGRAM DATA REDUCERS */
		function programPropertiesActions (state = [], action){//PROGRAM PROPERTIES

			switch(action.type){
				case GET_PROGRAM_PROPERTIES :
						return state.concat([action.program])
				default : 
					return state
			}
			
		}
		
		function programRootActions (state = [], action){//PROGRAM ROOTS

			switch(action.type){
				case GET_PROGRAM_ROOTS :
						return state.concat([action.program])
				default : 
					return state
			}
			
		}
		
		function programKey4Actions (state = [], action){//PROGRAM KEY4

			switch(action.type){
				case GET_PROGRAM_KEY4 :
						return state.concat([action.program])
				default : 
					return state
			}
			
		}

		function programKey4DeepDiveActions (state = [], action){//PROGRAM KEY4

			switch(action.type){
				case GET_PROGRAM_KEY4_DEEPDIVE :
						return state.concat([action.program])
				default : 
					return state
			}

		}

		function programKey5DeepDiveActions (state = [], action){//PROGRAM KEY5

			switch(action.type){
				case GET_PROGRAM_KEY5_DEEPDIVE :
						return state.concat([action.program])
				default : 
					return state
			}

		}
		
		function programKey5Actions (state = [], action){//PROGRAM KEY5

			switch(action.type){
				case GET_PROGRAM_KEY5 :
						return state.concat([action.program])
				default : 
					return state
			}
			
		}

		
		function programRDTEActions (state = [], action){//PROGRAM RDTE

			switch(action.type){
				case GET_PROGRAM_RDTE :
						return state.concat([action.program])
				default : 
					return state
			}
			
		}
		
		function programRDTEUFRActions (state = [], action){//PROGRAM RDTE UFR

			switch(action.type){
				case GET_PROGRAM_RDTEUFR :
						return state.concat([action.program])
				default : 
					return state
			}
			
		}
		
		function programPROCActions (state = [], action){//PROGRAM PROC

			switch(action.type){
				case GET_PROGRAM_PROC :
						return state.concat([action.program])
				default : 
					return state
			}
			
		}
		
		function programPROCUFRActions (state = [], action){//PROGRAM PROC UFR

			switch(action.type){
				case GET_PROGRAM_PROCUFR :
						return state.concat([action.program])
				default : 
					return state
			}
			
		}
		
		function programOTHERActions (state = [], action){//PROGRAM OTHER

			switch(action.type){
				case GET_PROGRAM_OTHER :
						return state.concat([action.program])
				default : 
					return state
			}
			
		}
		
		function programOTHERUFRActions (state = [], action){//PROGRAM OTHER UFR

			switch(action.type){
				case GET_PROGRAM_OTHERUFR :
						return state.concat([action.program])
				default : 
					return state
			}
			
		}
		
		function programTOTALActions (state = [], action){//PROGRAM TOTAL

			switch(action.type){
				case GET_PROGRAM_TOTAL :
						return state.concat([action.program])
				default : 
					return state
			}
			
		}
		
		function programTOTALUFRActions (state = [], action){//PROGRAM TOTAL UFR

			switch(action.type){
				case GET_PROGRAM_TOTALUFR :
						return state.concat([action.program])
				default : 
					return state
			}
			
		}
		
		function programDEEPDIVEActions (state = [], action){//PROGRAM DEEPDIVE

			switch(action.type){
				case GET_PROGRAM_DEEPDIVE :
						return state.concat([action.program])
				default : 
					return state
			}
			
		}
