/*FUNDING ENTITIES

FUNDING POM TABLE
 RDTEFUNDEDBASEFY : RDTE FUNDED BASE ROW, RDTE FUNDED BASE ROW FOR KEY5 CHANGES
 RDTEFUNDEDOCOFY : RDTE FUNDED OCO ROW, RDTE FUNDED BASE ROW FOR KEY5 CHANGES
 DEEPDIVEFUNDED : DEEPDIVE FUNDED ROW, DEEP DIVE ROW FOR KEY5 CHANGES
 TOTALFUNDEDFY: TOTAL FUNDED ROW, TOTAL FUNDED ROW FOR KEY5 CHANGES

UFR POM TABLE
 RDTEBASEUFR: RDTE BASE UFR ROW
 RDTEOCOUFR:  RDTE OCO UFR ROW
 USERKEY5RDTEBASEFUNDEDFY: RDTE BASE FUNDED DEEP DIVE ROW
 USERKEY5RDTEOCOFUNDEDFY: RDTE  OCO FUNDED DEEP DIVE ROW 
 DEEPDIVEUFR: DEEP DIVE UFR ROW
 TOTALUFR: TOTAL UFR ROW




*/


function app (state = {}, action){
    return {
        
        /* AUTHORITATIVE DATA ENTITIES */

        //FYs
        FYs: fyActions(state.FYs, action),


     
        

        //ROOT 
        ROOT: rootActions(state.ROOT, action),
        USERROOTS: userRootActions(state.USERROOTS, action),
		
		
        
        //LINS
        USERLIN: 		        LINActions(state.USERLIN, action),
        LINFUNDEDBASE: 		    getFundedBaseLINActions(state.LINFUNDEDBASE, action),
        LINCRITICALBASE: 		getCriticalBaseLINActions(state.LINCRITICALBASE, action),
        LINFUNDEDOCO: 		    getFundedOCOLINActions(state.LINFUNDEDOCO, action),
        LINCRITICALOCO: 		getCriticalOCOLINActions(state.LINCRITICALOCO, action),

        LINFUNDEDBASEFY: 		getLIN_BASE_FUNDED_FY(state.LINFUNDEDBASEFY, action),
        LINFUNDEDOCOFY: 		getLIN_OCO_FUNDED_FY(state.LINFUNDEDOCOFY, action),
        LINCRITICALBASEFY: 		getLIN_BASE_CRITICAL_FY(state.LINCRITICALBASEFY, action),
        LINCRITICALOCOFY: 		getLIN_OCO_CRITICAL_FY(state.LINCRITICALOCOFY, action),

        LINFUNDEDFY: 		    getLIN_FUNDED_FY(state.LINFUNDEDFY, action),
        LINCRITICALFY: 		    getLIN_CRITICAL_FY(state.LINCRITICALFY, action),

        LINUFR: 		        getLIN_UFR(state.LINUFR, action),
        LINBASEUFR: 		    getLINBASE_UFR(state.LINBASEUFR, action),
        LINOCOUFR: 		        getLINOCO_UFR(state.LINOCOUFR, action),





        

        //KEY5 
        //KEY5: 		key5Actions(state.KEY5, action),
        USERKEY5:   userkey5Actions(state.USERKEY5, action),

		
		// RDTE KEY5
		KEY5RDTEBASEFUNDED:   getUserKey5RDTEBASEFUNDEDActions(state.KEY5RDTEBASEFUNDED, action),     KEY5RDTEBASEFUNDEDFY:   RDTEKEY5_FUNDED_BASE_FYActions(state.KEY5RDTEBASEFUNDEDFY, action),
		KEY5RDTEOCOFUNDED:    getUserKey5RDTEOCOFUNDEDActions(state.KEY5RDTEOCOFUNDED, action),   	  KEY5RDTEOCOFUNDEDFY:    RDTEKEY5_FUNDED_OCO_FYActions(state.KEY5RDTEOCOFUNDEDFY, action),
		KEY5RDTEBASECRITICAL: getUserKey5RDTEBASECRITICALActions(state.KEY5RDTEBASECRITICAL, action), KEY5RDTEBASECRITICALFY: RDTEKEY5_CRITICAL_BASE_FYActions(state.KEY5RDTEBASECRITICALFY, action),
		KEY5RDTEOCOCRITICAL:  getUserKey5RDTEOCOCRITICALActions(state.KEY5RDTEOCOCRITICAL, action),   KEY5RDTEOCOCRITICALFY:  RDTEKEY5_CRITICAL_OCO_FYActions(state.KEY5RDTEOCOCRITICALFY, action),
		KEY5RDTEBASEUFR: 		RDTEKEY5_BASE_UFR_FYActions(state.KEY5RDTEBASEUFR, action),       	  KEY5RDTEOCOUFR: RDTEKEY5_OCO_UFR_FYActions(state. KEY5RDTEOCOUFR, action), //RDTE BASE-OCO UFR
		KEY5RDTETOTALUFR:		RDTEKEY5_TOTAL_UFRActions(state.KEY5RDTETOTALUFR, action), //RDTE TOTAL UFR




        //USERKEY5: userKey5Actions(state.USERKEY5, action),
		//USERKEY5SPLIT: userKey5SplitActions(state.USERKEY5, action),
		
		//DEEPDIVE
        DEEPDIVEFUNDED: deepDiveFundedActions(state.DEEPDIVEFUNDED, action),
        DEEPDIVECRITICAL: deepDiveCriticalActions(state.DEEPDIVECRITICAL, action),
		DEEPDIVEUFR: 	deepDiveUFRActions(state.DEEPDIVEUFR, action),


        
		
		
		//TOTAL 			
        TOTALFUNDEDFY:    	TOTAL_FUNDED_FYActions(state.TOTALFUNDEDFY, action),//TOTAL FUNDED FYs
        TOTALCRITICALFY:    TOTAL_CRITICAL_FYActions(state.TOTALCRITICALFY, action),//TOTAL CRITICAL FYs
		TOTALBASEUFR:       TOTAL_BASE_UFR_FYActions(state.TOTALBASEUFR, action),//TOTAL BASE UFR
		TOTALOCOUFR:        TOTAL_OCO_UFR_FYActions(state.TOTALOCOUFR, action),//TOTAL OCO UFR
		TOTALUFR:           TOTAL_UFR_FYActions(state.TOTALUFR, action),//TOTAL UFR
		
		TOTALKEY5FUNDEDFY:    TOTALKEY5_CRITICAL_FYActions(state.TOTALKEY5FUNDEDFY, action),//TOTAL KEY5 FUNDED FYs
        TOTALKEY5CRITICALFY:  TOTALKEY5_CRITICAL_FYActions(state.TOTALKEY5CRITICALFY, action),//TOTAL KEY5 CRITICAL FYs
		TOTALKEY5BASEUFR:     TOTALKEY5_BASE_UFR_FYActions(state.TOTALKEY5BASEUFR, action),//TOTAL KEY5 BASE UFR
		TOTALKEY5OCOUFR:      TOTALKEY5_OCO_UFR_FYActions(state.TOTALOCOUFR, action),//TOTAL KEY5 OCO UFR
		TOTALKEY5UFR:         TOTALKEY5_UFR_FYActions(state.TOTALKEY5UFR, action),//TOTAL KEY5 UFR

        




    
        //RDTE APPN
        RDTEFUNDEDBASE: 	RDTE_FUNDED_BASEActions(state.RDTEFUNDEDBASE, action),    RDTEFUNDEDBASEFY: 	RDTE_FUNDED_BASE_FYActions(state.RDTEFUNDEDBASEFY, action),//RDTE FUNDED BASE FY 
		RDTEFUNDEDOCO: 		RDTE_FUNDED_OCOActions(state.RDTEFUNDEDOCO, action),      RDTEFUNDEDOCOFY: 		RDTE_FUNDED_OCO_FYActions(state.RDTEFUNDEDOCOFY, action),//RDTE FUNDED OCO FY
		RDTECRITICALBASE: 	RDTE_CRITICAL_BASEActions(state.RDTECRITICALBASE, action),RDTECRITICALBASEFY: 	RDTE_CRITICAL_BASE_FYActions(state.RDTECRITICALBASEFY, action),//RDTE CRITICAL BASE FY
		RDTECRITICALOCO: 	RDTE_CRITICAL_OCOActions(state.RDTECRITICALOCO, action),  RDTECRITICALOCOFY: 	RDTE_CRITICAL_OCO_FYActions(state.RDTECRITICALOCOFY, action),//RDTE CRITICAL OCO FY
		RDTEBASEUFR: 		RDTE_BASE_UFR_FYActions(state.RDTEBASEUFR, action),       RDTEOCOUFR: 			RDTE_OCO_UFR_FYActions(state.RDTEOCOUFR, action), //RDTE BASE-OCO UFR
		RDTETOTALUFR:		RDTE_TOTAL_UFRActions(state.RDTETOTALUFR, action), //RDTE TOTAL UFR
        
	
        
        //PROC FUNDED
        //PROCFY: PROCFYActions(state.PROCFY, action),//PROC FYs
        //ACFT: 	appnACFTActions(state.ACFT, action),//ACFT
        //AMMO: 	appnAMMOActions(state.AMMO, action),//AMMO 
        //MSLS: 	appnMSLSActions(state.MSLS, action),//MSLS 
        //OPA: 	appnOPAActions(state.OPA, action),//OPA 
        //WTCV: 	appnWTCVActions(state.WTCV, action),//WTCV

        
        //OTHER FUNDED 
        //OTHERFY: OTHERFYActions(state.OTHERFY, action),//OTHER FYs
        //AWCF: 	 appnAWCFActions(state.AWCF, action),//AWCF 
        //CHMC: 	 appnCHMCActions(state.CHMC, action),//CHMC 
        //CHMD: 	 appnCHMDActions(state.CHMD, action),//CHMD
        //MCA: 	 appnMCAActions(state.MCA, action),//MCA 
        //NGPA: 	 appnNGPAActions(state.NGPA, action),//NGPA 
        //OMA: 	 appnOMAActions(state.OMA, action),//OMA 
        //OMNG: 	 appnOMNGActions(state.OMNG, action),//OMNG
        //OMAR: 	 appnOMARActions(state.OMAR, action),//OMAR 
        //RDTA: 	 appnRDTAActions(state.RDTA, action),//RDTA 
        //RPA: 	 appnRPAActions(state.RPA, action),//RPA 
        //WEDG: 	 appnWEDGActions(state.WEDG, action),//WEDG

        //RDTE CRITICAL
        /*RDTEFYUFR: RDTEFYUFRActions(state.RDTEFYUFR, action),//RDTE FYs
        RDTEUFR:   appnRDTEUFRActions(state.RDTEUFR, action),//RDTE*/

        
        //PROC CRITICAL
        /*PROCFYUFR: PROCFYUFRActions(state.PROCFYUFR, action),//PROC FYs
        ACFTUFR:   appnACFTUFRActions(state.ACFTUFR, action),//ACFT 
        AMMOUFR:   appnAMMOUFRActions(state.AMMOUFR, action),//AMMO 
        MSLSUFR:   appnMSLSUFRActions(state.MSLSUFR, action),//MSLS
        OPAUFR:    appnOPAUFRActions(state.OPAUFR, action),//OPA 
        WTCVUFR:   appnWTCVUFRActions(state.WTCVUFR, action),//WTCV*/ 

        
        //OTHER CRITICAL
        /*OTHERFYUFR: OTHERFYUFRActions(state.OTHERFYUFR, action),//OTHER  FYs
        AWCFUFR:    appnAWCFUFRActions(state.AWCFUFR, action),//AWCF 
        CHMCUFR:    appnCHMCUFRActions(state.CHMCUFR, action),//CHMC 
        CHMDUFR:    appnCHMDUFRActions(state.CHMDUFR, action),//CHMD C
        MCAUFR: 	appnMCAUFRActions(state.MCAUFR, action),//MCA 
        NGPAUFR:    appnNGPAUFRActions(state.NGPAUFR, action),//NGPA 
        OMAUFR:     appnOMAUFRActions(state.OMAUFR, action),//OMA 
        OMNGUFR:    appnOMNGUFRActions(state.OMNGUFR, action),//OMNG 
        OMARUFR:    appnOMARUFRActions(state.OMARUFR, action),//OMAR
        RDTAUFR:    appnRDTAUFRActions(state.RDTAUFR, action),//RDTA 
        RPAUFR:     appnRPAUFRActions(state.RPAUFR, action),//RPA 
        WEDGUFR:    appnWEDGUFRActions(state.WEDGUFR, action),//WEDG 
        
        */

        
        
        /* PROGRAM DATA ENTITIES */
        //PROGRAM_PROPERTIES:    programPropertiesActions(state.PROGRAM_PROPERTIES, action),//PROGRAM PROPERTIES
        //PROGRAM_ROOTS:         programRootActions(state.PROGRAM_ROOTS, action),//PROGRAM ROOTS
        //ROOTKEY4:          	   programKey4Actions(state.PROGRAM_KEY4, action),//PROGRAM KEY4
        //ROOTKEY5:              programKey5Actions(state.ROOTKEY5, action),//PROGRAM KEY5
        //PROGRAM_RDTE:          programRDTEActions(state.PROGRAM_RDTE, action),//PROGRAM RDTE
        //PROGRAM_RDTEUFR:       programRDTEUFRActions(state.PROGRAM_RDTEUFR, action),//PROGRAM RDTEUFR
        //PROGRAM_PROC:          programPROCActions(state.PROGRAM_PROC, action),//PROGRAM PROC
        //PROGRAM_PROCUFR:       programPROCUFRActions(state.PROGRAM_PROCUFR, action),//PROGRAM PROCUFR
        //PROGRAM_OTHER:         programOTHERActions(state.PROGRAM_OTHER, action),//PROGRAM OTHER
        //PROGRAM_OTHERUFR:      programOTHERUFRActions(state.PROGRAM_OTHERUFR, action),//PROGRAM OTHERUFR
        //PROGRAM_TOTAL:    	   programTOTALActions(state.PROGRAM_TOTAL, action),//PROGRAM TOTAL
        //PROGRAM_TOTALUFR:      programTOTALUFRActions(state.PROGRAM_TOTALUFR, action),//PROGRAM TOTALUFR
        //PROGRAMDEEPDIVE: programKey4DeepDiveActions(state.PROGRAMDEEPDIVE, action),//DEEP DIVE
        //PROGRAM_KEY5_DEEPDIVE: programKey5DeepDiveActions(state.PROGRAM_KEY5_DEEPDIVE, action),//PROGRAM KEY5 DEEP DIVE







    }
}



const store = createStore(app) //user invokes to return store