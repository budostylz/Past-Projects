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



function calculateEntry(){

    try{

		
		//user entities
		var userRoots = store.getState().USERROOTS
		var userKey5s = store.getState().USERKEY5
		var userLINs = store.getState().USERLIN

		//appropriations
		var rdte_funded_base = store.getState().RDTEFUNDEDBASE
		var rdte_funded_oco = store.getState().RDTEFUNDEDOCO
		var rdte_critical_base = store.getState().RDTECRITICALBASE
		var rdte_critical_oco = store.getState().RDTECRITICALOCO

		//key5s
		var rdte_funded_base_key5 = store.getState().KEY5RDTEBASEFUNDED
		var rdte_funded_oco_key5 = store.getState().KEY5RDTEOCOFUNDED
		var rdte_critical_base_key5 = store.getState().KEY5RDTEBASECRITICAL
		var rdte_critical_oco_key5 = store.getState().KEY5RDTEOCOCRITICAL

		//LINs
		var LIN_funded_base = store.getState().LINFUNDEDBASE
		var LIN_funded_oco = store.getState().LINFUNDEDOCO
		var LIN_critical_base = store.getState().LINCRITICALBASE
		var LIN_critical_oco = store.getState().LINCRITICALOCO

		//console.log('LIN_funded_base',LIN_funded_base)
		//console.log('LIN_funded_oco',LIN_funded_oco)




		//POM
		var FYs = store.getState().FYs[0]
		var startFY = store.getState().FYs[1].Start
		var endFY = store.getState().FYs[1].End
		var POMTest = calculatePOMHelper(startFY, endFY)

	    //console.log('POMTest', POMTest)

		if(POMTest){

		////////TOTALS
		//total funded
		var totalFunded = {}
		totalFunded.id = 1
		totalFunded.POM = 0;
		totalFunded = setFYs(totalFunded, FYs)//Set FYs

		//total critical
		var totalCritical = {}
		totalCritical.id = 1
		totalCritical.POM = 0;
		totalCritical = setFYs(totalCritical, FYs)//Set FYs

		//total ufr
		var totalUFR = {}
		totalUFR.id = 1
		totalUFR.POM = 0;
		totalUFR = setFYs(totalUFR, FYs)//Set FYs


		/////////////RDTE
		//RDTEFUNDEDBASE
		var RDTEFUNDEDBASE = {}
		RDTEFUNDEDBASE.id = 1				
		RDTEFUNDEDBASE.POM = 0
		RDTEFUNDEDBASE = setFYs(RDTEFUNDEDBASE, FYs)//Set FYs

		//RDTEFUNDEDOCO
		var RDTEFUNDEDOCO = {}
		RDTEFUNDEDOCO.id = 1				
		RDTEFUNDEDOCO.POM = 0
		RDTEFUNDEDOCO = setFYs(RDTEFUNDEDOCO, FYs)//Set FYs

		//RDTECRITICALBASE
		var RDTECRITICALBASE = {}
		RDTECRITICALBASE.id = 1				
		RDTECRITICALBASE.POM = 0
		RDTECRITICALBASE = setFYs(RDTECRITICALBASE, FYs)//Set FYs

		//RDTECRITICALOCO
		var RDTECRITICALOCO = {}
		RDTECRITICALOCO.id = 1				
		RDTECRITICALOCO.POM = 0
		RDTECRITICALOCO = setFYs(RDTECRITICALOCO, FYs)//Set FYs

		//RDTE BASE UFR
		var RDTEBASEUFR = {};
		RDTEBASEUFR.id = 1		
		RDTEBASEUFR.POM = 0;
		RDTEBASEUFR = setFYs(RDTEBASEUFR, FYs)//Set FYs


		//RDTE OCO UFR
		var RDTEOCOUFR = {};
		RDTEOCOUFR.id = 1		
		RDTEOCOUFR.POM = 0;
		RDTEOCOUFR = setFYs(RDTEOCOUFR, FYs)//Set FYs


		//////////////////////////key5
		//total funded key5 (DEEPDIVE FUNDED)
		var totalFundedKey5 = {}
		totalFundedKey5.id = 1
		totalFundedKey5.POM = 0;
		totalFundedKey5 = setFYs(totalFundedKey5, FYs)//Set FYs

		//total critical key5 (DEEPDIVE CRITICAL)
		var totalCriticalKey5 = {}
		totalCriticalKey5.id = 1
		totalCriticalKey5.POM = 0;
		totalCriticalKey5 = setFYs(totalCriticalKey5, FYs)//Set FYs

		//RDTEFUNDEDBASE key5
		var RDTEFUNDEDBASEKey5 = {}
		RDTEFUNDEDBASEKey5.id = 1				
		RDTEFUNDEDBASEKey5.POM = 0
		RDTEFUNDEDBASEKey5 = setFYs(RDTEFUNDEDBASEKey5, FYs)//Set FYs

		//RDTEFUNDEDOCO key5
		var RDTEFUNDEDOCOKey5 = {}
		RDTEFUNDEDOCOKey5.id = 1				
		RDTEFUNDEDOCOKey5.POM = 0
		RDTEFUNDEDOCOKey5 = setFYs(RDTEFUNDEDOCOKey5, FYs)//Set FYs

		//RDTECRITICALBASE key5
		var RDTECRITICALBASEKey5 = {}
		RDTECRITICALBASEKey5.id = 1				
		RDTECRITICALBASEKey5.POM = 0
		RDTECRITICALBASEKey5 = setFYs(RDTECRITICALBASEKey5, FYs)//Set FYs

		//RDTECRITICALOCO key5
		var RDTECRITICALOCOKey5 = {}
		RDTECRITICALOCOKey5.id = 1				
		RDTECRITICALOCOKey5.POM = 0
		RDTECRITICALOCOKey5 = setFYs(RDTECRITICALOCOKey5, FYs)//Set FYs

		//RDTE BASE UFR key5
		var RDTEBASEUFRKey5 = {};
		RDTEBASEUFRKey5.id = 1		
		RDTEBASEUFRKey5.POM = 0;
		RDTEBASEUFRKey5 = setFYs(RDTEBASEUFRKey5, FYs)//Set FYs


		//RDTE OCO UFR key5
		var RDTEOCOUFRKey5 = {};
		RDTEOCOUFRKey5.id = 1		
		RDTEOCOUFRKey5.POM = 0;
		RDTEOCOUFRKey5 = setFYs(RDTEOCOUFRKey5, FYs)//Set FYs
		
		//total ufr key5
		var totalUFRKey5 = {}
		totalUFRKey5.id = 1
		totalUFRKey5.POM = 0;
		totalUFRKey5 = setFYs(totalUFRKey5, FYs)//Set FYs

		//DEEPDIVE UFR
		var DEEPDIVEUFR = {};
		DEEPDIVEUFR.id = 1		
		DEEPDIVEUFR.POM = 0;
		DEEPDIVEUFR = setFYs(DEEPDIVEUFR, FYs)//Set FYs

		//////////////////////////LIN
		//total funded LIN (QUANTITIES FUNDED)
		var totalFundedLIN = {}
		totalFundedLIN.id = 1
		totalFundedLIN.POM = 0;
		totalFundedLIN = setFYs(totalFundedLIN, FYs)//Set FYs

		//total critical LIN (QUANTITIES CRITICAL)
		var totalCriticalLIN = {}
		totalCriticalLIN.id = 1
		totalCriticalLIN.POM = 0;
		totalCriticalLIN = setFYs(totalCriticalLIN, FYs)//Set FYs

		//FUNDEDBASE LIN
		var FUNDEDBASELIN = {}
		FUNDEDBASELIN.id = 1				
		FUNDEDBASELIN.POM = 0
		FUNDEDBASELIN = setFYs(FUNDEDBASELIN, FYs)//Set FYs

		//FUNDEDOCO LIN
		var FUNDEDOCOLIN = {}
		FUNDEDOCOLIN.id = 1				
		FUNDEDOCOLIN.POM = 0
		FUNDEDOCOLIN = setFYs(FUNDEDOCOLIN, FYs)//Set FYs

		//CRITICALBASE LIN
		var CRITICALBASELIN = {}
		CRITICALBASELIN.id = 1				
		CRITICALBASELIN.POM = 0
		CRITICALBASELIN = setFYs(CRITICALBASELIN, FYs)//Set FYs

		//CRITICALOCO LIN
		var CRITICALOCOLIN = {}
		CRITICALOCOLIN.id = 1				
		CRITICALOCOLIN.POM = 0
		CRITICALOCOLIN = setFYs(CRITICALOCOLIN, FYs)//Set FYs

		//BASE UFR LIN
		var BASEUFRLIN = {};
		BASEUFRLIN.id = 1		
		BASEUFRLIN.POM = 0;
		BASEUFRLIN = setFYs(BASEUFRLIN, FYs)//Set FYs


		//OCO UFR LIN
		var OCOUFRLIN = {};
		OCOUFRLIN.id = 1		
		OCOUFRLIN.POM = 0;
		OCOUFRLIN = setFYs(OCOUFRLIN, FYs)//Set FYs
		
		//total ufr LIN
		var totalLINUFR = {}
		totalLINUFR.id = 1
		totalLINUFR.POM = 0;
		totalLINUFR = setFYs(totalLINUFR, FYs)//Set FYs

		//QUANTITY UFR
		var QUANTITYUFR = {};
		QUANTITYUFR.id = 1		
		QUANTITYUFR.POM = 0;
		QUANTITYUFR = setFYs(QUANTITYUFR, FYs)//Set FYs







		for(var i = 0; i < userRoots.length; i++){//roots
			var rootID = userRoots[i].id

			//RDTE
			var user_RDTEFUNDEDBASE =  _.filter(rdte_funded_base, function(o) { return o.id === rootID })
			var user_RDTEFUNDEDOCO =  _.filter(rdte_funded_oco, function(o) { return o.id === rootID })
			var user_RDTECRITICALBASE =  _.filter(rdte_critical_base, function(o) { return o.id === rootID })
			var user_RDTECRITICALOCO =  _.filter(rdte_critical_oco, function(o) { return o.id === rootID })



			//RDTE
			if(user_RDTEFUNDEDBASE.length > 0){ totalFunded = calculateAPPN(user_RDTEFUNDEDBASE, RDTEFUNDEDBASE, totalFunded, FYs, 'RDTE_FUNDED_BASE_FY', startFY, endFY)}
			if(user_RDTEFUNDEDOCO.length > 0){ totalFunded = calculateAPPN(user_RDTEFUNDEDOCO, RDTEFUNDEDOCO, totalFunded, FYs, 'RDTE_FUNDED_OCO_FY', startFY, endFY)}
			if(user_RDTECRITICALBASE.length > 0){ totalCritical = calculateAPPN(user_RDTECRITICALBASE, RDTECRITICALBASE, totalCritical, FYs, 'RDTE_CRITICAL_BASE_FY', startFY, endFY)}
			if(user_RDTECRITICALOCO.length > 0){ totalCritical = calculateAPPN(user_RDTECRITICALOCO, RDTECRITICALOCO, totalCritical, FYs, 'RDTE_CRITICAL_OCO_FY', startFY, endFY)}



		}

		for(var i = 0; i < userKey5s.length; i++){//key5s
			var rootID = userKey5s[i].rootID
			var key5 = userKey5s[i].key5

			//RDTE KEY5
			var user_RDTEFUNDEDBASEKEY5 =  _.filter(rdte_funded_base_key5, function(o) { return o.id === rootID && o.Key5 === key5  })
			var user_RDTEFUNDEDOCOKEY5 =  _.filter(rdte_funded_oco_key5, function(o) { return o.id === rootID && o.Key5 === key5})
			var user_RDTECRITICALBASEKEY5 =  _.filter(rdte_critical_base_key5, function(o) { return o.id === rootID && o.Key5 === key5})
			var user_RDTECRITICALOCOKEY5 =  _.filter(rdte_critical_oco_key5, function(o) { return o.id === rootID && o.Key5 === key5})

			

			//RDTE KEY5
			if(user_RDTEFUNDEDBASEKEY5.length > 0){ totalFundedKey5 = calculateAPPN(user_RDTEFUNDEDBASEKEY5, RDTEFUNDEDBASEKey5, totalFundedKey5, FYs, 'RDTE_FUNDED_BASE_FY_KEY5', startFY, endFY)}
			if(user_RDTEFUNDEDOCOKEY5.length > 0){ totalFundedKey5 = calculateAPPN(user_RDTEFUNDEDOCOKEY5, RDTEFUNDEDOCOKey5, totalFundedKey5, FYs, 'RDTE_FUNDED_OCO_FY_KEY5', startFY, endFY)}
			if(user_RDTECRITICALBASEKEY5.length > 0){ totalCriticalKey5 = calculateAPPN(user_RDTECRITICALBASEKEY5, RDTECRITICALBASEKey5, totalCriticalKey5, FYs, 'RDTE_CRITICAL_BASE_FY_KEY5', startFY, endFY)}
			if(user_RDTECRITICALOCOKEY5.length > 0){ totalCriticalKey5 = calculateAPPN(user_RDTECRITICALOCOKEY5, RDTECRITICALOCOKey5, totalCriticalKey5, FYs, 'RDTE_CRITICAL_OCO_FY_KEY5', startFY, endFY)}



		}

		for(var i = 0; i < userLINs.length; i++){ //LINs
			var rootID = userLINs[i].rootID
			var LIN = userLINs[i].LIN

			//LIN Procurement
			var user_LINFUNDEDBASE =  _.filter(LIN_funded_base, function(o) { return o.id === rootID && o.LINOUT === LIN  })
			var user_LINFUNDEDOCO =  _.filter(LIN_funded_oco, function(o) { return o.id === rootID && o.LINOUT === LIN })
			var user_LINCRITICALBASE =  _.filter(LIN_critical_base, function(o) { return o.id === rootID && o.LINOUT === LIN })
			var user_LINCRITICALOCO =  _.filter(LIN_critical_oco, function(o) { return o.id === rootID && o.LINOUT === LIN })


			//Quantities
			if(user_LINFUNDEDBASE.length > 0){ totalFundedLIN = calculateAPPN(user_LINFUNDEDBASE, FUNDEDBASELIN, totalFundedLIN, FYs, 'FUNDED_BASE_FY_LIN', startFY, endFY)}
			if(user_LINFUNDEDOCO.length > 0){ totalFundedLIN = calculateAPPN(user_LINFUNDEDOCO, FUNDEDOCOLIN, totalFundedLIN, FYs, 'FUNDED_OCO_FY_LIN', startFY, endFY)}
			if(user_LINCRITICALBASE.length > 0){ totalCriticalLIN = calculateAPPN(user_LINCRITICALBASE, CRITICALBASELIN, totalCriticalLIN, FYs, 'CRITICAL_BASE_FY_LIN', startFY, endFY)}
			if(user_LINCRITICALOCO.length > 0){ totalCriticalLIN = calculateAPPN(user_LINCRITICALOCO, CRITICALOCOLIN, totalCriticalLIN, FYs, 'CRITICAL_OCO_FY_LIN', startFY, endFY)}



		}




		


		//APPN TOTALS
		store.getState().TOTALFUNDEDFY = [];//state mutation
		store.dispatch(get_TOTAL_FUNDED_FYAction(totalFunded))

		store.getState().TOTALCRITICALFY = [];//state mutation
		store.dispatch(get_TOTAL_CRITICAL_FYAction(totalCritical))

		//KEY5 TOTALS
		store.getState().DEEPDIVEFUNDED = [];//state mutation
		store.dispatch(getDeepDiveFundedAction(totalFundedKey5))

		store.getState().DEEPDIVECRITICAL = [];//state mutation
		store.dispatch(getDeepDiveCriticalAction(totalCriticalKey5))

		//LIN TOTALS
		store.getState().LINFUNDEDFY = [];//state mutation
		store.dispatch(getLINFundedFYAction(totalFundedLIN))

		store.getState().LINCRITICALFY = [];//state mutation
		store.dispatch(getLINCriticalFYAction(totalCriticalLIN))


		



		//RDTE UFRs
		if(store.getState().RDTEFUNDEDBASEFY.length > 0 && store.getState().RDTECRITICALBASEFY.length > 0){
			//console.log('UFR')
			var fundedBaseFY = store.getState().RDTEFUNDEDBASEFY[0];
			var criticalBaseFY = store.getState().RDTECRITICALBASEFY[0];
			totalUFR  = calculateUFR(RDTEBASEUFR, fundedBaseFY, criticalBaseFY, totalUFR, FYs, 'RDTE_BASE_UFR', startFY, endFY);	
	

		}

		if(store.getState().RDTEFUNDEDOCOFY.length > 0 && store.getState().RDTECRITICALOCOFY.length > 0){
			//console.log('UFR')
			var fundedOCOFY = store.getState().RDTEFUNDEDOCOFY[0];
			var criticalOCOFY = store.getState().RDTECRITICALOCOFY[0];
			totalUFR  = calculateUFR(RDTEOCOUFR, fundedOCOFY, criticalOCOFY, totalUFR, FYs, 'RDTE_OCO_UFR', startFY, endFY);	
	

		}


		//DEEPDIVE UFR
		if(store.getState().DEEPDIVEFUNDED.length > 0 && store.getState().DEEPDIVECRITICAL.length > 0){
			//console.log('DEEP DIVE UFR')
			var fundedBaseFY = store.getState().DEEPDIVEFUNDED[0];
			var criticalBaseFY = store.getState().DEEPDIVECRITICAL[0];
			totalUFRKey5  = calculateUFR(DEEPDIVEUFR, totalFundedKey5, totalCriticalKey5, totalUFRKey5, FYs, 'UFR_KEY5', startFY, endFY);	
		}

		//LIN UFRs
		if(store.getState().LINFUNDEDBASEFY.length > 0 && store.getState().LINCRITICALFY.length > 0){
			//console.log('UFR')
			var fundedBaseFY = store.getState().LINFUNDEDBASEFY[0];
			var criticalBaseFY = store.getState().LINCRITICALFY[0];
			totalLINUFR  = calculateUFR(BASEUFRLIN, fundedBaseFY, criticalBaseFY, totalLINUFR, FYs, 'LIN_BASE_UFR', startFY, endFY);	
	

		}

		if(store.getState().LINFUNDEDOCOFY.length > 0 && store.getState().LINCRITICALOCOFY.length > 0){
			//console.log('UFR')
			var fundedOCOFY = store.getState().LINFUNDEDOCOFY[0];
			var criticalOCOFY = store.getState().LINCRITICALOCOFY[0];
			totalLINUFR  = calculateUFR(OCOUFRLIN, fundedOCOFY, criticalOCOFY, totalLINUFR, FYs, 'LIN_OCO_UFR', startFY, endFY);	
	

		}



		
		//set total appn ufr	
		store.getState().TOTALUFR = [];
		store.dispatch(get_TOTAL_UFR_FYAction(totalUFR))

		//set total LIN ufr	
		//store.getState().LINUFR = [];
		//store.dispatch(getLINUFRAction(totalLINUFR))



		if(userRoots.length === 0){ //reset state
			//console.log('Reset Appropriations')

			//reset Appropriations
			store.getState().RDTEFUNDEDBASEFY = [];//state mutation
			store.dispatch(get_RDTE_FUNDED_BASE_FY_Action(RDTEFUNDEDBASE))

			store.getState().RDTEFUNDEDOCOFY = [];//state mutation
			store.dispatch(get_RDTE_FUNDED_OCO_FY_Action(RDTEFUNDEDOCO))

			store.getState().RDTECRITICALBASEFY = [];//state mutation
			store.dispatch(get_RDTE_CRITICAL_BASE_FY_Action(RDTECRITICALBASE))

			store.getState().RDTECRITICALOCOFY = [];//state mutation
			store.dispatch(get_RDTE_CRITICAL_OCO_FY_Action(RDTECRITICALOCO))

			store.getState().RDTEBASEUFR = [];//state mutation
			store.dispatch(get_RDTE_BASE_UFR_FY_Action(RDTEBASEUFR))

			store.getState().RDTEOCOUFR = [];//state mutation
			store.dispatch(get_RDTE_OCO_UFR_FY_Action(RDTEOCOUFR))

			//reset DEEPDIVE
			store.getState().DEEPDIVEUFR = [];//state mutation
			store.dispatch(getDeepDiveUFRAction(DEEPDIVEUFR))


			//RESET LINs
			store.getState().LINFUNDEDBASEFY = [];//state mutation
			store.dispatch(getLINBaseFundedFYAction(FUNDEDBASELIN))

			store.getState().LINFUNDEDOCOFY = [];//state mutation
			store.dispatch(getLINOCOFundedFYAction(FUNDEDOCOLIN))

			store.getState().LINCRITICALBASEFY = [];//state mutation
			store.dispatch(getLINBaseCriticalFYAction(CRITICALBASELIN))

			store.getState().LINCRITICALOCOFY = [];//state mutation
			store.dispatch(getLINOCOCriticalFYAction(CRITICALOCOLIN))

			store.getState().LINBASEUFR = [];//state mutation
			store.dispatch(getLINBaseUFRAction(BASEUFRLIN))

			store.getState().LINOCOUFR = [];//state mutation
			store.dispatch(getLINOCOUFRAction(OCOUFRLIN))





		}


		if(userLINs.length === 0){//reset state

			//console.log('userLINs', userLINs)

			//RESET LINs
			store.getState().LINFUNDEDBASEFY = [];//state mutation
			store.dispatch(getLINBaseFundedFYAction(FUNDEDBASELIN))

			store.getState().LINFUNDEDOCOFY = [];//state mutation
			store.dispatch(getLINOCOFundedFYAction(FUNDEDOCOLIN))

			store.getState().LINCRITICALBASEFY = [];//state mutation
			store.dispatch(getLINBaseCriticalFYAction(CRITICALBASELIN))

			store.getState().LINCRITICALOCOFY = [];//state mutation
			store.dispatch(getLINOCOCriticalFYAction(CRITICALOCOLIN))

			store.getState().LINBASEUFR = [];//state mutation
			store.dispatch(getLINBaseUFRAction(BASEUFRLIN))

			store.getState().LINOCOUFR = [];//state mutation
			store.dispatch(getLINOCOUFRAction(OCOUFRLIN))

		}




		}else{
			alert('PLEASE SELECT A PROPER 7 YEAR POM INTERVAL')
		}


		console.log('The new state is: ', store.getState())

		

    }
    catch(e){
        console.log('calculate.js : calculateEntry')
        console.log(e);
    }
}//calculateEntry




function calculateAPPN(userAPPN, appn, total, FYs, appnTag, startFY, endFY){

    try{



			//console.log('userAPPN', userAPPN)
			//console.log('appn', appn)
			//console.log('total',total)
			//console.log('FY', FYs);
			//console.log('appnTag', appnTag);
			//console.log('startFY', startFY)
			//console.log('endFY', endFY)


			for(var j = FYs.length - 1; j >= 0; j--){
				
				var fy = parseInt(FYs[j].Title, 10)
				var fystr = 'FY'+ FYs[j].Title;
				var fySum = math.sum(userAPPN[0][fystr]);
	
				if(fySum > 0){		
					appn[fystr]   += fySum;
					total[fystr]  += fySum;

					if(endFY === fy && endFY >= startFY){ //7 year interval
						//console.log('endFY', endFY, 'fy', fy, 'j', j)
	
						if(j >= 7){ //POM interval
							//console.log('endFY', endFY, 'fy', fy, 'j', j)
							//console.log(fystr, appn[fystr])
							appn.POM += fySum;
							total.POM += fySum;
						}
						endFY -= 1;
	
					}

				}
	
			 }



			 
		
		switch(appnTag){
				
				case 'RDTE_FUNDED_BASE_FY' :
					//console.log('RDTEFUNDEDBASEFY', store.getState().RDTEFUNDEDBASEFY)
					store.getState().RDTEFUNDEDBASEFY = [];//state mutation
					store.dispatch(get_RDTE_FUNDED_BASE_FY_Action(appn))
					break;
	
				case 'RDTE_FUNDED_OCO_FY' :
					//console.log('RDTEFUNDEDOCOFY', store.getState().RDTEFUNDEDOCOFY)
					store.getState().RDTEFUNDEDOCOFY = [];//state mutation
					store.dispatch(get_RDTE_FUNDED_OCO_FY_Action(appn))
					break;
					
				case 'RDTE_CRITICAL_BASE_FY' :
					//console.log('RDTECRITICALBASEFY', store.getState().RDTECRITICALBASEFY)
					store.getState().RDTECRITICALBASEFY = [];//state mutation
					store.dispatch(get_RDTE_CRITICAL_BASE_FY_Action(appn))
					break;
				
				case 'FUNDED_BASE_FY_LIN' :
					//console.log('LINFUNDEDBASEFY', store.getState().LINFUNDEDBASEFY, appn)
					store.getState().LINFUNDEDBASEFY = [];//state mutation
					store.dispatch(getLINBaseFundedFYAction(appn))
					break;

				case 'FUNDED_OCO_FY_LIN' :
					//console.log('LINFUNDEDOCOFY', store.getState().LINFUNDEDOCOFY, appn)
					store.getState().LINFUNDEDOCOFY = [];//state mutation
					store.dispatch(getLINOCOFundedFYAction(appn))
					break;
				
				case 'CRITICAL_BASE_FY_LIN' :
					//console.log('LINCRITICALBASEFY', appn, store.getState().LINCRITICALBASEFY, appn)
					store.getState().LINCRITICALBASEFY = [];//state mutation
					store.dispatch(getLINBaseCriticalFYAction(appn))
					break;

				case 'CRITICAL_OCO_FY_LIN' :
					//console.log('LINCRITICALOCOFY', store.getState().LINCRITICALOCOFY, appn)
					store.getState().LINCRITICALOCOFY = [];//state mutation
					store.dispatch(getLINOCOCriticalFYAction(appn))
					break;




					




		}


		return total



    }
    catch(e){
        console.log('calculate.js : calculateAPPN')
        console.log(e);
    }
}//calculateAPPN

function calculateKey5(userKey5Obj, key5){
	try{

		//console.log('userKey5Obj',userKey5Obj)
		//console.log('calculateKey5', key5)

		var FYs  = store.getState().FYs[0]
		var startFY = store.getState().FYs[1].Start
		var endFY  = store.getState().FYs[1].End

		//console.log('FYs', FYs)
		//console.log('startFY', startFY)
		//console.log('endFY', endFY)

		
		for(var j = FYs.length - 1; j >= 0; j--){
				
			var fy = parseInt(FYs[j].Title, 10)
			var fystr = 'FY'+ FYs[j].Title;
			var fySum = math.sum(key5[fystr]);

			//console.log('fystr', fystr)

			if(fySum > 0){		
				userKey5Obj.FY[fystr]   += fySum;
				userKey5Obj.FYMutate[fystr]   += fySum;
				

				if(endFY === fy && endFY >= startFY){ //7 year interval
					//console.log('endFY', endFY, 'fy', fy, 'j', j)

					if(j >= 7){ //POM interval
						//console.log('endFY', endFY, 'fy', fy, 'j', j)
						//console.log(fystr, appn[fystr])
						userKey5Obj.POM += fySum;
						userKey5Obj.POMSplit += fySum;
						
					}
					endFY -= 1;

				}

			}

		 }

		 
		 //console.log('userKey5Obj',userKey5Obj)

		 return userKey5Obj



	}
	catch(e){
		console.log('calculate.js : calculateKey5')
        console.log(e);


	}

}

function calculateLIN(userLINObj, LIN){
	try{

		//console.log('userKey5Obj',userKey5Obj)
		//console.log('calculateKey5', key5)

		var FYs  = store.getState().FYs[0]
		var startFY = store.getState().FYs[1].Start
		var endFY  = store.getState().FYs[1].End

		//console.log('FYs', FYs)
		//console.log('startFY', startFY)
		//console.log('endFY', endFY)

		
		for(var j = FYs.length - 1; j >= 0; j--){
				
			var fy = parseInt(FYs[j].Title, 10)
			var fystr = 'FY'+ FYs[j].Title;
			var fySum = math.sum(LIN[fystr]);

			//console.log('fystr', fystr)

			if(fySum > 0){		
				userLINObj[fystr]   += fySum;
				

				if(endFY === fy && endFY >= startFY){ //7 year interval
					//console.log('endFY', endFY, 'fy', fy, 'j', j)

					if(j >= 7){ //POM interval
						//console.log('endFY', endFY, 'fy', fy, 'j', j)
						//console.log(fystr, appn[fystr])
						userLINObj.POM += fySum;
						
					}
					endFY -= 1;

				}

			}

		 }

		 
		 //console.log('userLINObj',userLINObj)

		 return userLINObj



	}
	catch(e){
		console.log('calculate.js : calculateLIN')
        console.log(e);


	}

}



function calculateUFR(ufr, appnFundedFY, appnCriticalFY, totalUFR, FYs, ufrTag, startFY, endFY){
    

    try{
		
		//console.log('FY Funded', appnFundedFY)
		//console.log('FY Critical', appnCriticalFY)
		//console.log('totalUFR', totalUFR)
		//console.log('FYs', FYs)
		//console.log('ufrTag', ufrTag)

		
		

		for(var j = FYs.length - 1; j >= 0; j--){
		
			    var fy = parseInt(FYs[j].Title, 10)
                var fystr = 'FY'+ FYs[j].Title

				if(appnFundedFY[fystr] > appnCriticalFY[fystr]){
					
					ufr[fystr] = appnFundedFY[fystr] - appnCriticalFY[fystr];
					totalUFR[fystr] += ufr[fystr]
					
				}else{
					
					ufr[fystr] = appnCriticalFY[fystr] - appnFundedFY[fystr];
					totalUFR[fystr] += ufr[fystr]
	
				}

				if(endFY === fy && endFY >= startFY){ //7 year interval
					//console.log('endFY', endFY, 'fy', fy, 'j', j)

					if(j >= 7){ //POM interval
						//console.log('endFY', endFY, 'fy', fy, 'j', j)
						//console.log(fystr, appn[fystr])
						ufr.POM += ufr[fystr]
						totalUFR.POM += ufr[fystr]
					}
					endFY -= 1;

				}
				
				

        }
		
	
		
		switch(ufrTag){
				
				case 'RDTE_BASE_UFR' :
					//console.log('RDTE BASE UFR',ufr);
					//console.log('RDTEBASEUFR', store.getState().RDTEBASEUFR)
					store.getState().RDTEBASEUFR = [];//state mutation
					store.dispatch(get_RDTE_BASE_UFR_FY_Action(ufr))
				break;
				
					
				case 'RDTE_OCO_UFR' :
					//console.log('RDTE OCO UFR',ufr);
					//console.log('RDTEOCOUFR', store.getState().RDTEOCOUFR)
					store.getState().RDTEOCOUFR = [];//state mutation
					store.dispatch(get_RDTE_OCO_UFR_FY_Action(ufr))
				break;

				case 'UFR_KEY5' :
					//console.log('RDTE OCO UFR',ufr);
					//console.log('RDTEOCOUFR', store.getState().RDTEOCOUFR)
					store.getState().DEEPDIVEUFR = [];//state mutation
					store.dispatch(getDeepDiveUFRAction(ufr))
				break;

				case 'LIN_BASE_UFR' :
					//console.log('RDTE BASE UFR',ufr);
					//console.log('RDTEBASEUFR', store.getState().RDTEBASEUFR)
					store.getState().LINBASEUFR = [];//state mutation
					store.dispatch(getLINBaseUFRAction(ufr))
				break;
				
					
				case 'LIN_OCO_UFR' :
					//console.log('RDTE OCO UFR',ufr);
					//console.log('RDTEOCOUFR', store.getState().RDTEOCOUFR)
					store.getState().LINOCOUFR = [];//state mutation
					store.dispatch(getLINOCOUFRAction(ufr))
				break;



					
		}

		
		
		return totalUFR;

    }
    catch(e){
        console.log('calculate.js : calculateUFR')
        console.log(e);

    }

}//calculateUFR








function calculateKey5Split(key5Obj, fySplits, FYs, appnTag){
    

    try{


		//console.log('key5Obj', key5Obj)
		//console.log('fySplits', fySplits)
		//console.log('FYs', FYs)
		//console.log('appnTag', appnTag)



		
		var fyObj = {};
		fyObj.Root = key5Obj[0].Root
		fyObj.Key5 = key5Obj[0].OData__x004b_EY5
		fyObj.APPN = key5Obj[0].APPN
		fyObj.DollarType = key5Obj[0].DollarType1
		fyObj.BO = key5Obj[0].BO



		var rdteBaseFY = (store.getState().RDTEFUNDEDBASEFY.length > 0 && 

		(fyObj.DollarType === 'BASE' || fyObj.DollarType === 'BCTO' || fyObj.DollarType === 'BEDI' ||
		 fyObj.DollarType === 'BOIR' || fyObj.DollarType === 'BHOA' || fyObj.DollarType === 'BGMO' ||
		 fyObj.DollarType === 'BOFS' || fyObj.DollarType === 'BOSS' || fyObj.DollarType === 'MDDE' ||
		 fyObj.DollarType === 'SPEC')) ? {}
									   : false;
		setFYs(rdteBaseFY, FYs)


		var rdteOCOFY = (store.getState().RDTEFUNDEDOCOFY.length > 0 && 

		(fyObj.DollarType === '10FS' ||  fyObj.DollarType === '10IR' ||  fyObj.DollarType === '1EFS' ||
		 fyObj.DollarType === '1EIR' ||  fyObj.DollarType === '1EDI' ||  fyObj.DollarType === '1OSS' ||
		 fyObj.DollarType === '1HOA' ||  fyObj.DollarType === '1GMO' ||  fyObj.DollarType === '1CTO' ||
		 fyObj.DollarType === '000F' ||  fyObj.DollarType === '000I' ||  fyObj.DollarType === '000R' ||
		 fyObj.DollarType === '00FS' ||  fyObj.DollarType === '00IR' ||  fyObj.DollarType === '0BTO' || 
		 fyObj.DollarType === '46'   ||  fyObj.DollarType === 'AA78' ||  fyObj.DollarType === 'AA7F' ||
		 fyObj.DollarType === 'AA7M' ||  fyObj.DollarType === 'AA7R' ||  fyObj.DollarType === 'BT2O' ||
		 fyObj.DollarType === 'EURI' ||  fyObj.DollarType === 'MOFS' ||  fyObj.DollarType === 'MOIR' ||
		 fyObj.DollarType === 'MSUP'
		)) ? {}
		   : false;
		setFYs(rdteOCOFY, FYs)

		var deepDiveFundedFY = (store.getState().DEEPDIVEFUNDED.length > 0) ? {} : false;
		setFYs(deepDiveFundedFY, FYs)
		var totalFY = (store.getState().TOTALFUNDEDFY.length > 0) ? {} : false;
		setFYs(totalFY, FYs)


		//console.log('rdteOCOFY', rdteOCOFY)
		//console.log('rdteBaseFY', rdteBaseFY)
		//console.log('deepDiveFundedFY', deepDiveFundedFY)
		//console.log('totalFY', totalFY)







		/*


		//adjust appropriation and deep dive values




		
		*/


		//console.log('rdteBaseFy_BEFORE', store.getState().RDTEFUNDEDBASEFY[0])
		//console.log('rdteOCOFY_BEFORE', store.getState().RDTEFUNDEDOCOFY[0] )
		//console.log('deepDiveFundedFY_BEFORE',store.getState().DEEPDIVEFUNDED[0])
		//console.log('totalFY_BEFORE', store.getState().TOTALFUNDEDFY[0])


		for(var j = FYs.length - 1; j >= 0; j--){//SET FY APPN
		
			//console.log(FYs[j].Title)
			
  
				var fystr = 'FY'+ FYs[j].Title
				var fykey5Prop = 'OData__x0046_Y'+ FYs[j].Title
				fyObj[fystr] = key5Obj[0][fykey5Prop]; //copy key5 data source fy to fyObj fy
				rdteBaseFY[fystr] = store.getState().RDTEFUNDEDBASEFY[0][fystr]; //copy rdte base data source fy to rdteBaseFY 
				rdteOCOFY[fystr] =  store.getState().RDTEFUNDEDOCOFY[0][fystr]; //copy rdte oco data source fy to rdteOCOFY 
				deepDiveFundedFY[fystr] = store.getState().DEEPDIVEFUNDED[0][fystr]; //copy rdte base data source fy to rdteBaseFY 
				totalFY[fystr] = store.getState().TOTALFUNDEDFY[0][fystr]; //copy rdte base data source fy to rdteBaseFY 



				if((fySplits[fystr] !== undefined) && (fyObj[fystr] > 0)){

			      //console.log(fystr, 'deepDiveFundedFY_BEFORE', deepDiveFundedFY[fystr])
				  //console.log(fystr, 'totalFY_BEFORE', totalFY[fystr])
				  //console.log(fystr, 'rdteOCOFY_BEFORE', rdteOCOFY[fystr])
				  //console.log(fystr, 'rdteBaseFY_BEFORE', rdteBaseFY[fystr])


				  //key5 split 
				  fyObj[fystr] = (fySplits[fystr] > fyObj[fystr]) ? fySplits[fystr] - fyObj[fystr] : fyObj[fystr] - fySplits[fystr]    


				  
				  //adjust appropriations
				  rdteBaseFY[fystr] = (rdteBaseFY && appnTag ===  'RDTEFUNDEDBASE' && rdteBaseFY[fystr] > fySplits[fystr]) ? rdteBaseFY[fystr] - fySplits[fystr] : fySplits[fystr] - rdteBaseFY[fystr];	
				  rdteOCOFY[fystr] =  (rdteOCOFY && appnTag ===  'RDTEFUNDEDOCO' && rdteOCOFY[fystr] > fySplits[fystr]) ? rdteOCOFY[fystr] - fySplits[fystr] : fySplits[fystr] - rdteOCOFY[fystr];
				  
				  //adjust deep dive and totals
				  deepDiveFundedFY[fystr] = (deepDiveFundedFY && deepDiveFundedFY[fystr] > fySplits[fystr]) ? deepDiveFundedFY[fystr] -= fySplits[fystr] : fySplits[fystr] -= deepDiveFundedFY[fystr];
				  totalFY[fystr] = (totalFY && totalFY[fystr] > fySplits[fystr]) ? totalFY[fystr] -= fySplits[fystr] : fySplits[fystr] -= totalFY[fystr];

				  //console.log(fystr, 'deepDiveFundedFY_AFTER', deepDiveFundedFY[fystr])
				  //console.log(fystr, 'totalFY_AFTER', totalFY[fystr])
				  //console.log(fystr, 'rdteOCOFY_AFTER', rdteOCOFY[fystr])
				  //console.log(fystr, 'rdteBaseFY_AFTER', rdteBaseFY[fystr])

				  



				}



		}
		
		//console.log('rdteBaseFy_AFTER', rdteBaseFY)
		//console.log('rdteOCOFY_AFTER', rdteOCOFY)
		//console.log('deepDiveFundedFY_AFTER',deepDiveFundedFY)
		//console.log('totalFY_AFTER', totalFY)
		//console.log('fyObj', fyObj)

		//save original key5 state to store for reset
		//console.log('key5Obj',key5Obj[0])

		//Totals
		if(totalFY && store.getState().TOTALFUNDEDFY.length === 1){
			store.dispatch(get_TOTAL_FUNDED_FYAction(totalFY))

			//console.log('TOTALFUNDEDFY.length === 1')

		}else if(totalFY && store.getState().TOTALFUNDEDFY.length === 2){
			//console.log('TOTALFUNDEDFY.length === ', store.getState().TOTALFUNDEDFY.length)
			 store.getState().TOTALFUNDEDFY.pop()
			 store.dispatch(get_TOTAL_FUNDED_FYAction(totalFY))
			//console.log('TOTALFUNDEDFY.length === ', store.getState().TOTALFUNDEDFY.length)

		}

		//Deep Dive
		if(deepDiveFundedFY && store.getState().DEEPDIVEFUNDED.length === 1){
			store.dispatch(getDeepDiveFundedAction(deepDiveFundedFY))

			//console.log('DEEPDIVEFUNDED.length === 1')

		}else if(deepDiveFundedFY && store.getState().DEEPDIVEFUNDED.length === 2){
			//console.log('DEEPDIVEFUNDED.length === ', store.getState().DEEPDIVEFUNDED.length)
			 store.getState().DEEPDIVEFUNDED.pop()
			 store.dispatch(getDeepDiveFundedAction(deepDiveFundedFY))
			//console.log('DEEPDIVEFUNDED.length === ', store.getState().DEEPDIVEFUNDED.length)

		}

		//RDTE BASE
		if(rdteBaseFY && store.getState().RDTEFUNDEDBASEFY.length === 1){
			store.dispatch(get_RDTE_FUNDED_BASE_FY_Action(rdteBaseFY))

			//console.log('RDTEFUNDEDBASEFY.length === 1')

		}else if(rdteBaseFY && store.getState().RDTEFUNDEDBASEFY.length === 2){
			//console.log('RDTEFUNDEDBASEFY.length === ', store.getState().RDTEFUNDEDBASEFY.length)
			 store.getState().RDTEFUNDEDBASEFY.pop()
			 store.dispatch(get_RDTE_FUNDED_BASE_FY_Action(rdteBaseFY))
			//console.log('RDTEFUNDEDBASEFY.length === ', store.getState().RDTEFUNDEDBASEFY.length)

		}

		//RDTE OCO
		if(rdteOCOFY && store.getState().RDTEFUNDEDOCOFY.length === 1){
			store.dispatch(get_RDTE_FUNDED_OCO_FY_Action(rdteOCOFY))

			//console.log('RDTEFUNDEDOCOFY.length === 1')

		}else if(rdteOCOFY && store.getState().RDTEFUNDEDOCOFY.length === 2){
			//console.log('RDTEFUNDEDOCOFY.length === ', store.getState().RDTEFUNDEDOCOFY.length)
			 store.getState().RDTEFUNDEDOCOFY.pop()
			 store.dispatch(get_RDTE_FUNDED_OCO_FY_Action(rdteOCOFY))
			//console.log('RDTEFUNDEDOCOFY.length === ', store.getState().RDTEFUNDEDOCOFY.length)

		}

			

		return fyObj;

		


    }
    catch(e){
        console.log('calculate.js : calculateKey5Split')
        console.log(e);

    }

}//calculateKey5Split

function key5Reset(){
    

    try{

		//console.log('DEEPDIVEFUNDED', store.getState().DEEPDIVEFUNDED[0])
		//console.log('TOTALFUNDEDFY', store.getState().TOTALFUNDEDFY[0])
		//console.log('RDTEFUNDEDOCOFY', store.getState().RDTEFUNDEDOCOFY[0])
		//console.log('RDTEFUNDEDBASEFY', store.getState().RDTEFUNDEDBASEFY[0])




    }
    catch(e){
        console.log('calculate.js : key5Reset')
        console.log(e);

    }

}//key5Reset



function calculatePOMHelper(startFY, endFY){
    

    try{

		//console.log('startFY', startFY)
		//console.log('endFY', endFY)

		if(startFY < endFY){
			var checkInterval = (endFY - startFY) + 1

			if(checkInterval !== 7){
				alert('Choose Correct FY')
				return false;
			}else if(checkInterval === 7){
				return true;
			}
			
		}else{
			alert('Choose Correct FY')
		}

		return false;

		

    }
    catch(e){
        console.log('calculate.js : calculatePOMHelper')
        console.log(e);

    }

}//calculatePOMHelper

function setFYs(appnFYObj, FYs){

    try{
		
		//console.log('appbFYObj ', appnFYObj)
		//console.log('FYs',FYs);

        for(var j = FYs.length - 1; j >= 0; j--){//SET FY APPN
		
			//console.log(FYs[j].Title)
  
                var fystr = 'FY'+ FYs[j].Title
                appnFYObj[fystr] = 0;



        }
		
		//console.log(appnFYObj)

        return appnFYObj;


    }
    catch(e){
        console.log('calculate.js : setFYs')
        console.log(e);
    }
}

function setKey5FYs(FYs){

    try{
		
		
		//console.log('appbFYObj ', appnFYObj)
		//console.log('FYs',FYs);

		var fy = {}
		var fySplit = {}
		var fyMutate = {}

        for(var j = FYs.length - 1; j >= 0; j--){//SET FY APPN
		
			//console.log(FYs[j].Title)
  
                var fystr = 'FY'+ FYs[j].Title
				fy[fystr] = 0;
				fySplit[fystr] = 0;
				fyMutate[fystr] = 0;



        }

        return [fy,fySplit,fyMutate];


    }
    catch(e){
        console.log('calculate.js : setKey5FYs')
        console.log(e);
    }
}

