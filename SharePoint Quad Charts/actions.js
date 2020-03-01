		/*AUTHORITATIVE DATA ACTIONS*/
		
		//Root 
		const GET_ROOT = 'GET_ROOT';
		
		//KEY 4
		const GET_KEY4 = 'GET_KEY4';
		
		//KEY 5
		const GET_KEY5 = 'GET_KEY5';

		
		//RDTE
		const GET_RDTE_FYs = 'GET_RDTE_FYs';
		const GET_RDTEUFR_FYs = 'GET_RDTEUFR_FYs';
		const GET_RDTE = 'GET_RDTE'; const GET_RDTEUFR = 'GET_RDTEUFR'; const REMOVE_RDTE = 'REMOVE_RDTE'; const REMOVE_RDTEUFR = 'REMOVE_RDTEUFR';
		

		
		//PROC
		const GET_PROC_FYs = 'GET_PROC_FYs';
		const GET_PROCUFR_FYs = 'GET_PROCUFR_FYs';
		const GET_ACFT = 'GET_ACFT';  const GET_ACFTUFR = 'GET_ACFTUFR'; const REMOVE_ACFT = 'REMOVE_ACFT'; const REMOVE_ACFTUFR = 'REMOVE_ACFTUFR';
		const GET_AMMO = 'GET_AMMO';  const GET_AMMOUFR = 'GET_AMMOUFR'; const REMOVE_AMMO = 'REMOVE_AMMO'; const REMOVE_AMMOUFR = 'REMOVE_AMMOUFR';
		const GET_MSLS = 'GET_MSLS';  const GET_MSLSUFR = 'GET_MSLSUFR'; const REMOVE_MSLS = 'REMOVE_MSLS'; const REMOVE_MSLSUFR = 'REMOVE_MSLSUFR';
		const GET_OPA =  'GET_OPA';   const GET_OPAUFR =  'GET_OPAUFR';  const REMOVE_OPA = 'REMOVE_OPA';   const REMOVE_OPAUFR = 'REMOVE_OPAUFR';
		const GET_WTCV = 'GET_WTCV';  const GET_WTCVUFR = 'GET_WTCVUFR'; const REMOVE_WTCV = 'REMOVE_WTCV'; const REMOVE_WTCVUFR = 'REMOVE_WTCVUFR';
		
		//OTHER
		const GET_OTHER_FYs = 'GET_OTHER_FYs';
		const GET_OTHERUFR_FYs = 'GET_OTHERUFR_FYs';
		const GET_AWCF = 'GET_AWCF';  const GET_AWCFUFR = 'GET_AWCFUFR'; const REMOVE_AWCF = 'REMOVE_AWCF'; const REMOVE_AWCFUFR = 'REMOVE_WTCVAWCF';
		const GET_CHMC = 'GET_CHMC';  const GET_CHMCUFR = 'GET_CHMCUFR'; const REMOVE_CHMC = 'REMOVE_CHMC'; const REMOVE_CHMCUFR = 'REMOVE_CHMCUFR';
		const GET_CHMD = 'GET_CHMD';  const GET_CHMDUFR = 'GET_CHMDUFR'; const REMOVE_CHMD = 'REMOVE_CHMD'; const REMOVE_CHMDUFR = 'REMOVE_CHMDUFR';
		const GET_MCA =  'GET_MCA';   const GET_MCAUFR =  'GET_MCAUFR';  const REMOVE_MCA =  'REMOVE_MCA';  const REMOVE_MCAUFR =  'REMOVE_MCAUFR';
		const GET_NGPA = 'GET_NGPA';  const GET_NGPAUFR = 'GET_NGPAUFR'; const REMOVE_NGPA = 'REMOVE_NGPA'; const REMOVE_NGPAUFR = 'REMOVE_NGPAUFR';
		const GET_OMA =  'GET_OMA';   const GET_OMAUFR =  'GET_OMAUFR';  const REMOVE_OMA =  'REMOVE_OMA';  const REMOVE_OMAUFR =  'REMOVE_OMAUFR';
		const GET_OMNG = 'GET_OMNG';  const GET_OMNGUFR = 'GET_OMNGUFR'; const REMOVE_OMNG = 'REMOVE_OMNG'; const REMOVE_OMNGUFR = 'REMOVE_OMNGUFR';
		const GET_OMAR = 'GET_OMAR';  const GET_OMARUFR = 'GET_OMARUFR'; const REMOVE_OMAR = 'REMOVE_OMAR'; const REMOVE_OMARUFR = 'REMOVE_OMARUFR';
		const GET_RDTA = 'GET_RDTA';  const GET_RDTAUFR = 'GET_RDTAUFR'; const REMOVE_RDTA = 'REMOVE_RDTA'; const REMOVE_RDTAUFR = 'REMOVE_RDTAUFR';
		const GET_RPA =  'GET_RPA';   const GET_RPAUFR =  'GET_RPAUFR';  const REMOVE_RPA =  'REMOVE_RPA';  const REMOVE_RPAUFR =  'REMOVE_RPAUFR';
		const GET_WEDG = 'GET_WEDG';  const GET_WEDGUFR = 'GET_WEDGUFR'; const REMOVE_WEDG = 'REMOVE_WEDG'; const REMOVE_WEDGUFR = 'REMOVE_WEDGUFR';
		
		//DEEPDIVE
		const GET_KEY4_DEEPDIVE = 'GET_KEY4_DEEPDIVE';
		const GET_KEY5_DEEPDIVE = 'GET_KEY5_DEEPDIVE';

		
		//TOTAL
		const GET_TOTAL_FYs = 'GET_TOTAL_FYs';
		const GET_TOTALUFR_FYs = 'GET_TOTALUFR_FYs';
		
		/* PROGRAM DATA ACTIONS*/
		
		//PROGRAM
		const GET_PROGRAM_PROPERTIES = 'GET_PROGRAM_PROPERTIES';
		const GET_PROGRAM_ROOTS = 'GET_PROGRAM_ROOTS';
		const GET_PROGRAM_KEY4 = 'GET_PROGRAM_KEY4';
		const GET_PROGRAM_KEY5 = 'GET_PROGRAM_KEY5';
		const GET_PROGRAM_RDTE = 'GET_PROGRAM_RDTE';   const GET_PROGRAM_RDTEUFR = 'GET_PROGRAM_RDTEUFR';
		const GET_PROGRAM_PROC = 'GET_PROGRAM_PROC';   const GET_PROGRAM_PROCUFR = 'GET_PROGRAM_PROCUFR';
		const GET_PROGRAM_OTHER = 'GET_PROGRAM_OTHER'; const GET_PROGRAM_OTHERUFR = 'GET_PROGRAM_OTHERUFR';
		const GET_PROGRAM_TOTAL = 'GET_PROGRAM_TOTAL'; const GET_PROGRAM_TOTALUFR = 'GET_PROGRAM_TOTALUFR';
		const GET_PROGRAM_KEY4_DEEPDIVE = 'GET_PROGRAM_KEY4_DEEPDIVE'; 
		const GET_PROGRAM_KEY5_DEEPDIVE = 'GET_PROGRAM_KEY5_DEEPDIVE'; 


		/*AUTHORITATIVE DATA ACTION CREATORS*/

		
		//ROOT
		function getRootAction(root){//ROOT Actions

			return{
				type: GET_ROOT,
				root
			}
		}

		
		//KEY 4
		function getKey4Action(key4){//Key4 Actions

			return{
				type: GET_KEY4,
				key4
			}
		}
		
		//KEY 5
		function getKey5Action(key5){//Key5 Actions

			return{
				type: GET_KEY5,
				key5
			}
		}

		//KEY 4 DEEP DIVE
		function getDeepDiveKey4Action(key4){//DeepDive Key4 Actions

			return{
				type: GET_KEY4_DEEPDIVE,
				key4
			}
		}

		//KEY 5 DEEP DIVE
		function getDeepDiveKey5Action(key5){//DeepDive Key5 Actions

			return{
				type: GET_KEY5_DEEPDIVE,
				key5
			}
		}




		
		//RDTE	
		function getRDTEFYAction(appn){//RDTE FUNDED FYs

			return{
				type: GET_RDTE_FYs,
				appn
			}
		}
		
		function getRDTEFYUFRAction(appn){//RDTE CRITICAL FYs

			return{
				type: GET_RDTEUFR_FYs,
				appn
			}
		}	
		
		function getRDTEAPPNAction(appn){//RDTE FUNDED ACTIONS

			return{
				type: GET_RDTE,
				appn
			}
		}		
		function getRDTEUFRAPPNAction(appn){//RDTE CRITICAL ACTIONS

			return{
				type: GET_RDTEUFR,
				appn
			}
		}	
		function removeRDTEAPPNAction(id){//REMOVE RDTE FUNDED ACTION

			return{
				type: REMOVE_RDTE,
				id
			}
		}		
		function removeRDTEUFRAPPNAction(id){//REMOVE RDTE CRITICAL ACTION

			return{
				type: REMOVE_RDTEUFR,
				id
			}
		}




		
		//PROC
		function getPROCFYAction(appn){//PROC FUNDED FYs

			return{
				type: GET_PROC_FYs,
				appn
			}
		}	
		function getPROCFYUFRAction(appn){//PROC CRITICAL FYs

			return{
				type: GET_PROCUFR_FYs,
				appn
			}
		}
		
		function getACFTAPPNAction(appn){//ACFT FUNDED ACTIONS

			return{
				type: GET_ACFT,
				appn
			}
		}		
		function getACFTUFRAPPNAction(appn){//ACFT CRITICAL ACTIONS

			return{
				type: GET_ACFTUFR,
				appn
			}
		}		
		function removeACFTAPPNAction(id){//REMOVE ACFT FUNDED ACTION

			return{
				type: REMOVE_ACFT,
				id
			}
		}	
		function removeACFTUFRAPPNAction(id){//REMOVE ACFT CRITICAL ACTION

			return{
				type: REMOVE_ACFTUFR,
				id
			}
		}

		
		

		
		function getAMMOAPPNAction(appn){//AMMO FUNDED ACTIONS

			return{
				type: GET_AMMO,
				appn
			}
		}		
		function getAMMOUFRAPPNAction(appn){//AMMO CRITICAL ACTIONS

			return{
				type: GET_AMMOUFR,
				appn
			}
		}		
		function removeAMMOAPPNAction(id){//REMOVE AMMO FUNDED ACTION

			return{
				type: REMOVE_AMMO,
				id
			}
		}	
		function removeAMMOUFRAPPNAction(id){//REMOVE AMMO CRITICAL ACTION

			return{
				type: REMOVE_AMMOUFR,
				id
			}
		}

	
		function getMSLSAPPNAction(appn){//MSLS FUNDED ACTIONS

			return{
				type: GET_MSLS,
				appn
			}
		}		
		function getMSLSUFRAPPNAction(appn){//MSLS CRITICAL ACTIONS

			return{
				type: GET_MSLSUFR,
				appn
			}
		}		
		function removeMSLSAPPNAction(id){//REMOVE MSLS FUNDED ACTION

			return{
				type: REMOVE_MSLS,
				id
			}
		}	
		function removeMSLSUFRAPPNAction(id){//REMOVE MSLS CRITICAL ACTION

			return{
				type: REMOVE_MSLSUFR,
				id
			}
		}


		
		function getOPAAPPNAction(appn){//OPA FUNDED ACTIONS

			return{
				type: GET_OPA,
				appn
			}
		}	
		function getOPAUFRAPPNAction(appn){//OPA CRITICAL ACTIONS

			return{
				type: GET_OPAUFR,
				appn
			}
		}	
		function removeOPAAPPNAction(id){//REMOVE OPA FUNDED ACTION

			return{
				type: REMOVE_OPA,
				id
			}
		}	
		function removeOPAUFRAPPNAction(id){//REMOVE OPA CRITICAL ACTION

			return{
				type: REMOVE_OPAUFR,
				id
			}
		}


		
		function getWTCVAPPNAction(appn){//WTCV FUNDED ACTIONS

			return{
				type: GET_WTCV,
				appn
			}
		}		
		function getWTCVUFRAPPNAction(appn){//WTCV CRITICAL ACTIONS

			return{
				type: GET_WTCVUFR,
				appn
			}
		}		
		function removeWTCVAPPNAction(id){//REMOVE WTCV FUNDED ACTION

			return{
				type: REMOVE_WTCV,
				id
			}
		}	
		function removeWTCVUFRAPPNAction(id){//REMOVE WTCV CRITICAL ACTION

			return{
				type: REMOVE_WTCVUFR,
				id
			}
		}


		
		
		//OTHER
		function getOTHERFYAction(appn){//OTHER FYs

			return{
				type: GET_OTHER_FYs,
				appn
			}
		}
		
		function getOTHERFYUFRAction(appn){//OTHER CRITICAL FYs

			return{
				type: GET_OTHERUFR_FYs,
				appn
			}
		}




		function getAWCFAPPNAction(appn){//AWCF FUNDED ACTIONS

			return{
				type: GET_AWCF,
				appn
			}
		}
		
		function getAWCFUFRAPPNAction(appn){//AWCF CRITICAL ACTIONS

			return{
				type: GET_AWCFUFR,
				appn
			}
		}
		function removeAWCFAPPNAction(id){//REMOVE AWCF FUNDED ACTION

			return{
				type: REMOVE_AWCF,
				id
			}
		}	
		function removeAWCFUFRAPPNAction(id){//REMOVE AWCF CRITICAL ACTION

			return{
				type: REMOVE_AWCFUFR,
				id
			}
		}

	
		function getCHMCAPPNAction(appn){//CHMC FUNDED ACTIONS

			return{
				type: GET_CHMC,
				appn
			}
		}
		
		function getCHMCUFRAPPNAction(appn){//CHMC CRITICAL ACTIONS

			return{
				type: GET_CHMCUFR,
				appn
			}
		}
		function removeCHMCAPPNAction(id){//REMOVE CHMC FUNDED ACTION

			return{
				type: REMOVE_CHMC,
				id
			}
		}	
		function removeCHMCUFRAPPNAction(id){//REMOVE CHMC CRITICAL ACTION

			return{
				type: REMOVE_CHMCUFR,
				id
			}
		}

		
		
		
		
	
		function getCHMDAPPNAction(appn){//CHMD FUNDED ACTIONS

			return{
				type: GET_CHMD,
				appn
			}
		}
		
		function getCHMDUFRAPPNAction(appn){//CHMD CRITICAL ACTIONS

			return{
				type: GET_CHMDUFR,
				appn
			}
		}
		function removeCHMDAPPNAction(id){//REMOVE CHMD FUNDED ACTION

			return{
				type: REMOVE_CHMD,
				id
			}
		}	
		function removeCHMDUFRAPPNAction(id){//REMOVE CHMD CRITICAL ACTION

			return{
				type: REMOVE_CHMDUFR,
				id
			}
		}

	
		function getMCAAPPNAction(appn){//MCA FUNDED ACTIONS

			return{
				type: GET_MCA,
				appn
			}
		}	
		function getMCAUFRAPPNAction(appn){//MCA CRITICAL ACTIONS

			return{
				type: GET_MCAUFR,
				appn
			}
		}		
		function removeMCAAPPNAction(id){//REMOVE MCA FUNDED ACTION

			return{
				type: REMOVE_MCA,
				id
			}
		}	
		function removeMCAUFRAPPNAction(id){//REMOVE MCA CRITICAL ACTION

			return{
				type: REMOVE_MCAUFR,
				id
			}
		}

		
	
		function getNGPAAPPNAction(appn){//NGPA FUNDED ACTIONS

			return{
				type: GET_NGPA,
				appn
			}
		}	
		function getNGPAUFRAPPNAction(appn){//NGPA CRITICAL ACTIONS

			return{
				type: GET_NGPAUFR,
				appn
			}
		}
		function removeNGPAAPPNAction(id){//REMOVE NGPA FUNDED ACTION

			return{
				type: REMOVE_NGPA,
				id
			}
		}	
		function removeNGPAUFRAPPNAction(id){//REMOVE NGPA CRITICAL ACTION

			return{
				type: REMOVE_NGPAUFR,
				id
			}
		}


		function getOMAAPPNAction(appn){//OMA FUNDED ACTIONS

			return{
				type: GET_OMA,
				appn
			}
		}	
		function getOMAUFRAPPNAction(appn){//OMA UFR ACTIONS

			return{
				type: GET_OMAUFR,
				appn
			}
		}
		function removeOMAAPPNAction(id){//REMOVE OMA FUNDED ACTION

			return{
				type: REMOVE_OMA,
				id
			}
		}	
		function removeOMAUFRAPPNAction(id){//REMOVE OMA CRITICAL ACTION

			return{
				type: REMOVE_OMAUFR,
				id
			}
		}


		function getOMNGAPPNAction(appn){//OMNG FUNDED ACTIONS

			return{
				type: GET_OMNG,
				appn
			}
		}	
		function getOMNGUFRAPPNAction(appn){//OMNG CRITICAL ACTIONS

			return{
				type: GET_OMNGUFR,
				appn
			}
		}
		function removeOMNGAPPNAction(id){//REMOVE OMNG FUNDED ACTION

			return{
				type: REMOVE_OMNG,
				id
			}
		}	
		function removeOMNGUFRAPPNAction(id){//REMOVE OMNG CRITICAL ACTION

			return{
				type: REMOVE_OMNGUFR,
				id
			}
		}

	
		function getOMARAPPNAction(appn){//OMAR FUNDED ACTIONS

			return{
				type: GET_OMAR,
				appn
			}
		}	
		function getOMARUFRAPPNAction(appn){//OMAR CRITICAL ACTIONS

			return{
				type: GET_OMARUFR,
				appn
			}
		}
		function removeOMARAPPNAction(id){//REMOVE OMAR FUNDED ACTION

			return{
				type: REMOVE_OMAR,
				id
			}
		}	
		function removeOMARUFRAPPNAction(id){//REMOVE OMAR CRITICAL ACTION

			return{
				type: REMOVE_OMARUFR,
				id
			}
		}

		
		function getRDTAAPPNAction(appn){//RDTA FUNDED ACTIONS

			return{
				type: GET_RDTA,
				appn
			}
		}	
		function getRDTAUFRAPPNAction(appn){//RDTA CRITICAL ACTIONS

			return{
				type: GET_RDTAUFR,
				appn
			}
		}
		function removeRDTAAPPNAction(id){//REMOVE RDTA FUNDED ACTION

			return{
				type: REMOVE_RDTA,
				id
			}
		}	
		function removeRDTAUFRAPPNAction(id){//REMOVE RDTA CRITICAL ACTION

			return{
				type: REMOVE_RDTAUFR,
				id
			}
		}

		
		function getRPAAPPNAction(appn){//RPA FUNDED ACTIONS

			return{
				type: GET_RPA,
				appn
			}
		}
	
		function getRPAUFRAPPNAction(appn){//RPA CRITICAL ACTIONS

			return{
				type: GET_RPAUFR,
				appn
			}
		}
		function removeRPAAPPNAction(id){//REMOVE RPA FUNDED ACTION

			return{
				type: REMOVE_RPA,
				id
			}
		}	
		function removeRPAUFRAPPNAction(id){//REMOVE RPA CRITICAL ACTION

			return{
				type: REMOVE_RPAUFR,
				id
			}
		}

		
		function getWEDGAPPNAction(appn){//WEDG FUNDED ACTIONS

			return{
				type: GET_WEDG,
				appn
			}
		}	
		function getWEDGUFRAPPNAction(appn){//WEDG CRITICAL ACTIONS

			return{
				type: GET_WEDGUFR,
				appn
			}
		}
		function removeWEDGAPPNAction(id){//REMOVE WEDG FUNDED ACTION

			return{
				type: REMOVE_WEDG,
				id
			}
		}	
		function removeWEDGUFRAPPNAction(id){//REMOVE WEDG CRITICAL ACTION

			return{
				type: REMOVE_WEDGUFR,
				id
			}
		}


		//TOTAL 
		function getTOTALFYAction(appn){//TOTAL FYs

			return{
				type: GET_TOTAL_FYs,
				appn
			}
		}
		
		function getTOTALFYUFRAction(appn){//TOTAL CRITICAL FYs

			return{
				type: GET_TOTALUFR_FYs,
				appn
			}
		}
		
		/* PROGRAM DATA ACTION CREATORS */
		
		//PROGRAM PROPERTIES
		function getProgramPropertiesAction(program){//PROGRAM PROPERTIES

			return{
				type: GET_PROGRAM_PROPERTIES,
				program
			}
		}
		
		function getProgramRootsAction(program){//PROGRAM ROOTS

			return{
				type: GET_PROGRAM_ROOTS,
				program
			}
		}
		
		function getProgramKey4Action(program){//PROGRAM KEY4

			return{
				type: GET_PROGRAM_KEY4,
				program
			}
		}
		
		function getProgramKey5Action(program){//PROGRAM KEY5

			return{
				type: GET_PROGRAM_KEY5,
				program
			}
		}

		function getProgramKey4DeepDiveAction(program){//PROGRAM KEY4 Deep Dive

			return{
				type: GET_PROGRAM_KEY4_DEEPDIVE,
				program
			}
		}

		function getProgramKey5DeepDiveAction(program){//PROGRAM KEY5 Deep Dive

			return{
				type: GET_PROGRAM_KEY5_DEEPDIVE,
				program
			}
		}


		
		function getProgramRDTEAction(program){//PROGRAM RDTE

			return{
				type: GET_PROGRAM_RDTE,
				program
			}
		}
		
		function getProgramRDTEUFRAction(program){//PROGRAM RDTE UFR

			return{
				type: GET_PROGRAM_RDTEUFR,
				program
			}
		}
		
		function getProgramPROCAction(program){//PROGRAM PROC

			return{
				type: GET_PROGRAM_PROC,
				program
			}
		}
		
		function getProgramPROCUFRAction(program){//PROGRAM PROC UFR

			return{
				type: GET_PROGRAM_PROCUFR,
				program
			}
		}
		
		function getProgramOTHERAction(program){//PROGRAM OTHER

			return{
				type: GET_PROGRAM_OTHER,
				program
			}
		}
		
		function getProgramOTHERUFRAction(program){//PROGRAM OTHER UFR

			return{
				type: GET_PROGRAM_OTHERUFR,
				program
			}
		}
		
		function getProgramTOTALAction(program){//PROGRAM TOTAL 

			return{
				type: GET_PROGRAM_TOTAL,
				program
			}
		}
		
		function getProgramTOTALUFRAction(program){//PROGRAM TOTAL UFR

			return{
				type: GET_PROGRAM_TOTALUFR,
				program
			}
		}
