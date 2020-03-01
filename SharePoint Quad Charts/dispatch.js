angular.module('app').controller('dispatchCtrl', ['$q','fundingAPI', function ($q, $fundingAPI) {

	try{

		var programID  = location.search.split('=')[1];
		var vm = this; //view model
	
	   //Program Item
		 var programUrl = $fundingAPI.programUrl(programID); 
		 console.log(programUrl)
		 
		 var programItem = $fundingAPI.getItems(programUrl); 
		 var programData = $q.all([programItem]);

		 //1. Get Program Properties
		 programData.then(function (_programData) {//Program Data

			console.log('program data')
			console.log(_programData);
			
			//GET Program Properties
			store.dispatch(getProgramPropertiesAction({
				id:1,
				Program : "Program Name",
				Portfolio: "Air Defense",
				BOS: "AD",
				Root: ["root 1", "root 2"],
				Key4: ["key4 1", "key4 2"]	
			}))



		 });

		 

		//console.log(programUrl)
	

	}
	catch(e){
		console.log(e)
	}



	
	
	//var qStr2 = qStr1.split(',');
	//var programID = qStr2[0].replace(/%20/g, ' ');
	//var vm = this; //view model

	
		//AUTHORITATIVE DATA DISPATCHES

		/*
		store.dispatch(getRootAction({//Get Root
		
			id: 1,
			Root : "Root Name",
			Portfolio: "Air Defense",
			BOS: "AD"
		}))		
		store.dispatch(getRootAction({
		
			id: 2,
			Root : "Root Name",
			Portfolio: "Air Defense",
			BOS: "AD"
		}))

		*/

		/*

		//GET Program Properties
		store.dispatch(getProgramPropertiesAction({
			id:1,
			Program : "Program Name",
			Portfolio: "Air Defense",
			BOS: "AD",
			Root: ["root 1", "root 2"],
			Key4: ["key4 1", "key4 2"]	
		}))
		
		//GET PROGRAM ROOTS		
		store.dispatch(getProgramRootsAction({
		
			id: 1,
			Program:"program name",
			Root : "Root Name",
			Portfolio: "Air Defense",
			BOS: "AD"
		}))		
		store.dispatch(getProgramRootsAction({
		
			id: 2,
			Program:"program name",
			Root : "Root Name",
			Portfolio: "Air Defense",
			BOS: "AD"
		}))

		//PROGRAM DATA DISPATCHES
		
		
		//GET PROGRAM KEY4
		store.dispatch(getProgramKey4Action({
		
			id: 1,
			Program:"program name",
			Root : "Root Name",
			Portfolio: "Air Defense",
			BOS: "AD",
			Key4: "Key4",
			FY19: [100],
			FY20: [100],
			FY21: [100],
			FY22: [100],
			FY23: [100],
			FY24: [100],
			FY25: [100],
			FY19ALLO: [100],
			FY20ALLO: [200],
			FY21ALLO: [300],
			FY22ALLO: [400],
			FY23ALLO: [500],
			FY24ALLO: [600],
			FY25ALLO: [700],
			POM: 700,
			POMAllo: 2800


		}))	
		store.dispatch(getProgramKey4Action({
		
			id: 2,
			Program:"program name",
			Root : "Root Name",
			Portfolio: "Air Defense",
			BOS: "AD",
			Key4: "Key4",
			FY19: [100],
			FY20: [100],
			FY21: [100],
			FY22: [100],
			FY23: [100],
			FY24: [100],
			FY25: [100],
			FY19ALLO: [100],
			FY20ALLO: [200],
			FY21ALLO: [300],
			FY22ALLO: [400],
			FY23ALLO: [500],
			FY24ALLO: [600],
			FY25ALLO: [700],
			POM: 700,
			POMAllo: 2800



		}))
		
		//GET PROGRAM KEY5
		store.dispatch(getProgramKey5Action({
		
			id: 1,
			Program:"program name",
			Root : "Root Name",
			Portfolio: "Air Defense",
			BOS: "AD",
			Key5: "Key5",
			FY19: [100],
			FY20: [100],
			FY21: [100],
			FY22: [100],
			FY23: [100],
			FY24: [100],
			FY25: [100],
			FY19ALLO: [100],
			FY20ALLO: [200],
			FY21ALLO: [300],
			FY22ALLO: [400],
			FY23ALLO: [500],
			FY24ALLO: [600],
			FY25ALLO: [700],
			POM: 700,
			POMAllo: 2800



		}))	
		store.dispatch(getProgramKey5Action({
		
			id: 2,
			Root : "Root Name",
			Program:"program name",
			Portfolio: "Air Defense",
			BOS: "AD",
			Key5: "Key5",
			FY19: [100],
			FY20: [100],
			FY21: [100],
			FY22: [100],
			FY23: [100],
			FY24: [100],
			FY25: [100],
			FY19ALLO: [100],
			FY20ALLO: [200],
			FY21ALLO: [300],
			FY22ALLO: [400],
			FY23ALLO: [500],
			FY24ALLO: [600],
			FY25ALLO: [700],
			POM: 700,
			POMAllo: 2800


		}))

		
		//GET PROGRAM RDTE
		store.dispatch(getProgramRDTEAction({ 
					
			id: 1,
			Program:"program name",
			Portfolio: "Air Defense",
			BOS: "AD",
			APPN: "RDTE",
			Root: "Root1",
			BO:"Funded",
			FY19: [100],
			FY20: [100],
			FY21: [100],
			FY22: [100],
			FY23: [100],
			FY24: [100],
			FY25: [100],
			POM: 5000,
		
				


		}))	
		store.dispatch(getProgramRDTEAction({ 
					
			id: 2,
			Program:"program name",
			Portfolio: "Air Defense",
			BOS: "AD",
			APPN: "RDTE",
			Root: "Root1",
			BO:"Funded",
			FY19: [100],
			FY20: [100],
			FY21: [100],
			FY22: [100],
			FY23: [100],
			FY24: [100],
			FY25: [100],
			POM: 5000,

		

		}))

		store.dispatch(getProgramRDTEUFRAction({ 
					
			id: 1,
			Program:"program name",
			Portfolio: "Air Defense",
			BOS: "AD",
			APPN: "RDTE",
			Root: "Root1",
			BO:"Critical",
			FY19: [100],
			FY20: [100],
			FY21: [100],
			FY22: [100],
			FY23: [100],
			FY24: [100],
			FY25: [100],
			POM: 5000,
		
				


		}))	
		store.dispatch(getProgramRDTEUFRAction({ 
					
			id: 2,
			Program:"program name",
			Portfolio: "Air Defense",
			BOS: "AD",
			APPN: "RDTE",
			Root: "Root1",
			BO:"Critical",
			FY19: [100],
			FY20: [100],
			FY21: [100],
			FY22: [100],
			FY23: [100],
			FY24: [100],
			FY25: [100],
			POM: 5000,

		

		}))

		
		//GET PROGRAM PROC
		store.dispatch(getProgramPROCAction({ 
					
			id: 1,
			Program:"program name",
			Portfolio: "Air Defense",
			BOS: "AD",
			APPN: "PROC",
			Root: "Root1",
			BO:"Funded",
			FY19: [100],
			FY20: [100],
			FY21: [100],
			FY22: [100],
			FY23: [100],
			FY24: [100],
			FY25: [100],
			POM: 5000,
		
				


		}))	
		store.dispatch(getProgramPROCAction({ 
					
			id: 2,
			Program:"program name",
			Portfolio: "Air Defense",
			BOS: "AD",
			APPN: "PROC",
			Root: "Root1",
			BO:"Funded",
			FY19: [100],
			FY20: [100],
			FY21: [100],
			FY22: [100],
			FY23: [100],
			FY24: [100],
			FY25: [100],
			POM: 5000,

		

		}))
		
		//GET PROGRAM PROC UFR
		store.dispatch(getProgramPROCUFRAction({ 
					
			id: 1,
			Program:"program name",
			Portfolio: "Air Defense",
			BOS: "AD",
			APPN: "PROC",
			Root: "Root1",
			BO:"Critical",
			FY19: [100],
			FY20: [100],
			FY21: [100],
			FY22: [100],
			FY23: [100],
			FY24: [100],
			FY25: [100],
			POM: 5000,
		
				


		}))	
		store.dispatch(getProgramPROCUFRAction({ 
					
			id: 2,
			Program:"program name",
			Portfolio: "Air Defense",
			BOS: "AD",
			APPN: "PROC",
			Root: "Root1",
			BO:"Critical",
			FY19: [100],
			FY20: [100],
			FY21: [100],
			FY22: [100],
			FY23: [100],
			FY24: [100,],
			FY25: [100],
			POM: 5000,

		

		}))
		
		//GET PROGRAM OTHER 
		store.dispatch(getProgramOTHERAction({ 
					
			id: 1,
			Program:"program name",
			Portfolio: "Air Defense",
			BOS: "AD",
			APPN: "OTHER",
			Root: "Root1",
			BO:"Funded",
			FY19: [100],
			FY20: [100],
			FY21: [100],
			FY22: [100],
			FY23: [100],
			FY24: [100],
			FY25: [100],
			POM: 5000,
		
				


		}))	
		store.dispatch(getProgramOTHERAction({ 
					
			id: 2,
			Program:"program name",
			Portfolio: "Air Defense",
			BOS: "AD",
			APPN: "OTHER",
			Root: "Root2",
			BO:"Funded",
			FY19: [100],
			FY20: [100],
			FY21: [100],
			FY22: [100],
			FY23: [100],
			FY24: [100],
			FY25: [100],
			POM: 5000,

		

		}))
		
		//GET PROGRAM OTHER UFR
		store.dispatch(getProgramOTHERUFRAction({ 
					
			id: 1,
			Program:"program name",
			Portfolio: "Air Defense",
			BOS: "AD",
			APPN: "OTHER",
			Root: "Root1",
			BO:"Critical",
			FY19: [100],
			FY20: [100],
			FY21: [100],
			FY22: [100],
			FY23: [100],
			FY24: [100],
			FY25: [100],
			POM: 5000,
		
				


		}))	
		store.dispatch(getProgramOTHERUFRAction({ 
					
			id: 2,
			Program:"program name",
			Portfolio: "Air Defense",
			BOS: "AD",
			APPN: "OTHER",
			Root: "Root2",
			BO:"Critical",
			FY19: [100],
			FY20: [100],
			FY21: [100],
			FY22: [100],
			FY23: [100],
			FY24: [100],
			FY25: [100],
			POM: 5000,	

		}))
		
		//GET PROGRAM TOTAL
		store.dispatch(getProgramTOTALAction({ 
					
			id: 1,
			Program:"program name",
			Portfolio: "Air Defense",
			BOS: "AD",
			Root: "Root1",
			BO:"Funded",
			FY19: [100],
			FY20: [100],
			FY21: [100],
			FY22: [100],
			FY23: [100],
			FY24: [100],
			FY25: [100],
			POM: 5000,
		
				


		}))	
		store.dispatch(getProgramTOTALAction({ 
					
			id: 2,
			Program:"program name",
			Portfolio: "Air Defense",
			BOS: "AD",
			Root: "Root2",
			BO:"Funded",
			FY19: [100],
			FY20: [100],
			FY21: [100],
			FY22: [100],
			FY23: [100],
			FY24: [100],
			FY25: [100],
			POM: 5000,	

		}))
		
		//GET PROGRAM TOTAL UFR
		store.dispatch(getProgramTOTALUFRAction({ 
					
			id: 1,
			Program:"program name",
			Portfolio: "Air Defense",
			BOS: "AD",
			Root: "Root1",
			BO:"Critical",
			FY19: [100],
			FY20: [100],
			FY21: [100],
			FY22: [100],
			FY23: [100],
			FY24: [100],
			FY25: [100],
			POM: 5000,
		
				


		}))	
		store.dispatch(getProgramTOTALUFRAction({ 
					
			id: 2,
			Program:"program name",
			Portfolio: "Air Defense",
			BOS: "AD",
			Root: "Root2",
			BO:"Critical",
			FY19: [100],
			FY20: [100],
			FY21: [100],
			FY22: [100],
			FY23: [100],
			FY24: [100],
			FY25: [100],
			POM: 5000,	

		}))

		//Program Key 4 Deep Dive
		store.dispatch(getProgramKey4DeepDiveAction({ 
					
			id: 1,
			Program:"program name",
			Portfolio: "Air Defense",
			BOS: "AD",
			Root: "Root1",
			FY19: [100],
			FY20: [100],
			FY21: [100],
			FY22: [100],
			FY23: [100],
			FY24: [100],
			FY25: [100],
			POM: 5000,
		
				


		}))	
		store.dispatch(getProgramKey4DeepDiveAction({ 
					
			id: 2,
			Program:"program name",
			Portfolio: "Air Defense",
			BOS: "AD",
			Root: "Root2",
			FY19: [100],
			FY20: [100],
			FY21: [100],
			FY22: [100],
			FY23: [100],
			FY24: [100],
			FY25: [100],
			POM: 5000,	

		}))

		//Program Key 5 Deep Dive
		store.dispatch(getProgramKey5DeepDiveAction({ 
					
			id: 1,
			Program:"program name",
			Portfolio: "Air Defense",
			BOS: "AD",
			Root: "Root1",
			FY19: [100],
			FY20: [100],
			FY21: [100],
			FY22: [100],
			FY23: [100],
			FY24: [100],
			FY25: [100],
			POM: 5000,
		

		}))	
		store.dispatch(getProgramKey5DeepDiveAction({ 
					
			id: 2,
			Program:"program name",
			Portfolio: "Air Defense",
			BOS: "AD",
			Root: "Root2",
			FY19: [100],
			FY20: [100],
			FY21: [100],
			FY22: [100],
			FY23: [100],
			FY24: [100],
			FY25: [100],
			POM: 5000,	

		}))

		*/



		/*



		
		
		
		//Get Key4 
		store.dispatch(getKey4Action({
		
			id: 1,
			Root : "Root Name",
			Portfolio: "Air Defense",
			BOS: "AD",
			Key4: "Key4",
			FY19: [100, 200, 300, 400],
			FY20: [100, 200, 300, 400],
			FY21: [100, 200, 300, 400],
			FY22: [100, 200, 300, 400],
			FY23: [100, 200, 300, 400],
			FY24: [100, 200, 300, 400],
			FY25: [100, 200, 300, 400],
			FY19ALLO: [100],
			FY20ALLO: [200],
			FY21ALLO: [300],
			FY22ALLO: [400],
			FY23ALLO: [500],
			FY24ALLO: [600],
			FY25ALLO: [700],
			POM: 2800


		}))	
		store.dispatch(getKey4Action({
		
			id: 2,
			Root : "Root Name",
			Portfolio: "Air Defense",
			BOS: "AD",
			Key4: "Key4",
			FY19: [100, 200, 300, 400],
			FY20: [100, 200, 300, 400],
			FY21: [100, 200, 300, 400],
			FY22: [100, 200, 300, 400],
			FY23: [100, 200, 300, 400],
			FY24: [100, 200, 300, 400],
			FY25: [100, 200, 300, 400],
			FY19ALLO: [100],
			FY20ALLO: [200],
			FY21ALLO: [300],
			FY22ALLO: [400],
			FY23ALLO: [500],
			FY24ALLO: [600],
			FY25ALLO: [700],
			POM: 2800


		}))
		
		//Get Key5
		store.dispatch(getKey5Action({
		
			id: 1,
			Root : "Root Name",
			Portfolio: "Air Defense",
			BOS: "AD",
			Key5: "Key5",
			FY19: [100, 200, 300, 400],
			FY20: [100, 200, 300, 400],
			FY21: [100, 200, 300, 400],
			FY22: [100, 200, 300, 400],
			FY23: [100, 200, 300, 400],
			FY24: [100, 200, 300, 400],
			FY25: [100, 200, 300, 400],
			FY19ALLO: [100],
			FY20ALLO: [200],
			FY21ALLO: [300],
			FY22ALLO: [400],
			FY23ALLO: [500],
			FY24ALLO: [600],
			FY25ALLO: [700],
			POM: 2800


		}))	
		store.dispatch(getKey5Action({
		
			id: 2,
			Root : "Root Name",
			Portfolio: "Air Defense",
			BOS: "AD",
			Key5: "Key5",
			FY19: [100, 200, 300, 400],
			FY20: [100, 200, 300, 400],
			FY21: [100, 200, 300, 400],
			FY22: [100, 200, 300, 400],
			FY23: [100, 200, 300, 400],
			FY24: [100, 200, 300, 400],
			FY25: [100, 200, 300, 400],
			FY19ALLO: [100],
			FY20ALLO: [200],
			FY21ALLO: [300],
			FY22ALLO: [400],
			FY23ALLO: [500],
			FY24ALLO: [600],
			FY25ALLO: [700],
			POM: 2800


		}))



		
		//Get RDTE Funded FY Vertical Data by Appropriation 
		store.dispatch(getRDTEAPPNAction({ 
					
			id: 1,
			Portfolio: "Air Defense",
			BOS: "AD",
			APPN: "RDTE",
			Root: "Root1",
			BO:"Funded",
			FY19: [100, 200, 300, 400],
			FY20: [100, 200, 300, 400],
			FY21: [100, 200, 300, 400],
			FY22: [100, 200, 300, 400],
			FY23: [100, 200, 300, 400],
			FY24: [100, 200, 300, 400],
			FY25: [100, 200, 300, 400],
			POM: 5000,
		
				


		}))	
		store.dispatch(getRDTEAPPNAction({ 
					
			id: 2,
			Portfolio: "Air Defense",
			BOS: "AD",
			APPN: "RDTE",
			Root: "Root1",
			BO:"Funded",
			FY19: [100, 200, 300, 400],
			FY20: [100, 200, 300, 400],
			FY21: [100, 200, 300, 400],
			FY22: [100, 200, 300, 400],
			FY23: [100, 200, 300, 400],
			FY24: [100, 200, 300, 400],
			FY25: [100, 200, 300, 400],
			POM: 5000,

		

		}))

		
		//store.dispatch(removeRDTEAPPNAction(1))
		
		
		
		
		
		//Get RDTE Critical FY Vertical Data by Appropriation
		store.dispatch(getRDTEUFRAPPNAction({ 
			id: 1,
			Portfolio: "Air Defense",
			BOS: "AD",
			APPN: "RDTE",
			Root: "Root1",
			BO:"Critical",
			FY19: [100, 200, 300, 400],
			FY20: [100, 200, 300, 400],
			FY21: [100, 200, 300, 400],
			FY22: [100, 200, 300, 400],
			FY23: [100, 200, 300, 400],
			FY24: [100, 200, 300, 400],
			FY25: [100, 200, 300, 400],
			POM: 5000
		}))
		
		store.dispatch(getRDTEUFRAPPNAction({ 
			id: 2,
			Portfolio: "Air Defense",
			BOS: "AD",
			APPN: "RDTE",
			Root: "Root2",
			BO:"Critical",
			FY19: [100, 200, 300, 400],
			FY20: [100, 200, 300, 400],
			FY21: [100, 200, 300, 400],
			FY22: [100, 200, 300, 400],
			FY23: [100, 200, 300, 400],
			FY24: [100, 200, 300, 400],
			FY25: [100, 200, 300, 400],
			POM: 5000
		}))


		

		


		
		//Get ACFT Funded FY Vertical Data by Appropriation (PROC)
		store.dispatch(getACFTAPPNAction({ 
			id: 1,
			Portfolio: "Air Defense",
			BOS: "AD",
			APPN: "ACFT",
			Root: "Root1",
			BO:"Funded",
			FY19: [100, 200, 300, 400],
			FY20: [100, 200, 300, 400],
			FY21: [100, 200, 300, 400],
			FY22: [100, 200, 300, 400],
			FY23: [100, 200, 300, 400],
			FY24: [100, 200, 300, 400],
			FY25: [100, 200, 300, 400],
			POM: 5000
		}))
		store.dispatch(getACFTAPPNAction({ 
			id: 2,
			Portfolio: "Air Defense",
			BOS: "AD",
			APPN: "ACFT",
			Root: "Root2",
			BO:"Funded",
			FY19: [100, 200, 300, 400],
			FY20: [100, 200, 300, 400],
			FY21: [100, 200, 300, 400],
			FY22: [100, 200, 300, 400],
			FY23: [100, 200, 300, 400],
			FY24: [100, 200, 300, 400],
			FY25: [100, 200, 300, 400],
			POM: 5000
		}))

		
		//Get ACFT Critical FY Vertical Data by Appropriation (PROC)
		store.dispatch(getACFTUFRAPPNAction({ 
			id: 1,
			Portfolio: "Air Defense",
			BOS: "AD",
			APPN: "ACFT",
			Root: "Root1",
			BO:"Critical",
			FY19: [100, 200, 300, 400],
			FY20: [100, 200, 300, 400],
			FY21: [100, 200, 300, 400],
			FY22: [100, 200, 300, 400],
			FY23: [100, 200, 300, 400],
			FY24: [100, 200, 300, 400],
			FY25: [100, 200, 300, 400],
			POM: 5000
		}))
		store.dispatch(getACFTUFRAPPNAction({ 
			id: 2,
			Portfolio: "Air Defense",
			BOS: "AD",
			APPN: "ACFT",
			Root: "Root2",
			BO:"Critical",
			FY19: [100, 200, 300, 400],
			FY20: [100, 200, 300, 400],
			FY21: [100, 200, 300, 400],
			FY22: [100, 200, 300, 400],
			FY23: [100, 200, 300, 400],
			FY24: [100, 200, 300, 400],
			FY25: [100, 200, 300, 400],
			POM: 5000
		}))


		
		//Get AMMO Funded FY Vertical Data by Appropriation (PROC)
		store.dispatch(getAMMOAPPNAction({ 
			id: 1,
			Portfolio: "Air Defense",
			BOS: "AD",
			APPN: "AMMO",
			Root: "Root1",
			BO:"Funded",
			FY19: [100, 200, 300, 400],
			FY20: [100, 200, 300, 400],
			FY21: [100, 200, 300, 400],
			FY22: [100, 200, 300, 400],
			FY23: [100, 200, 300, 400],
			FY24: [100, 200, 300, 400],
			FY25: [100, 200, 300, 400],
			POM: 5000
		}))
		store.dispatch(getAMMOAPPNAction({ 
			id: 2,
			Portfolio: "Air Defense",
			BOS: "AD",
			APPN: "AMMO",
			Root: "Root2",
			BO:"Funded",
			FY19: [100, 200, 300, 400],
			FY20: [100, 200, 300, 400],
			FY21: [100, 200, 300, 400],
			FY22: [100, 200, 300, 400],
			FY23: [100, 200, 300, 400],
			FY24: [100, 200, 300, 400],
			FY25: [100, 200, 300, 400],
			POM: 5000
		}))

		
		//Get AMMO Critical FY Vertical Data by Appropriation (PROC)
		store.dispatch(getAMMOUFRAPPNAction({ 
			id: 1,
			Portfolio: "Air Defense",
			BOS: "AD",
			APPN: "AMMO",
			Root: "Root1",
			BO:"Critical",
			FY19: [100, 200, 300, 400],
			FY20: [100, 200, 300, 400],
			FY21: [100, 200, 300, 400],
			FY22: [100, 200, 300, 400],
			FY23: [100, 200, 300, 400],
			FY24: [100, 200, 300, 400],
			FY25: [100, 200, 300, 400],
			POM: 5000
		}))
		store.dispatch(getAMMOUFRAPPNAction({ 
			id: 2,
			Portfolio: "Air Defense",
			BOS: "AD",
			APPN: "AMMO",
			Root: "Root2",
			BO:"Critical",
			FY19: [100, 200, 300, 400],
			FY20: [100, 200, 300, 400],
			FY21: [100, 200, 300, 400],
			FY22: [100, 200, 300, 400],
			FY23: [100, 200, 300, 400],
			FY24: [100, 200, 300, 400],
			FY25: [100, 200, 300, 400],
			POM: 5000
		}))

		
		//Get MSLS Funded FY Vertical Data by Appropriation (PROC)
		store.dispatch(getMSLSAPPNAction({ 
			id: 1,
			Portfolio: "Air Defense",
			BOS: "AD",
			APPN: "MSLS",
			Root: "Root1",
			BO:"Funded",
			FY19: [100, 200, 300, 400],
			FY20: [100, 200, 300, 400],
			FY21: [100, 200, 300, 400],
			FY22: [100, 200, 300, 400],
			FY23: [100, 200, 300, 400],
			FY24: [100, 200, 300, 400],
			FY25: [100, 200, 300, 400],
			POM: 5000
		}))
		store.dispatch(getMSLSAPPNAction({ 
			id: 2,
			Portfolio: "Air Defense",
			BOS: "AD",
			APPN: "MSLS",
			Root: "Root2",
			BO:"Funded",
			FY19: [100, 200, 300, 400],
			FY20: [100, 200, 300, 400],
			FY21: [100, 200, 300, 400],
			FY22: [100, 200, 300, 400],
			FY23: [100, 200, 300, 400],
			FY24: [100, 200, 300, 400],
			FY25: [100, 200, 300, 400],
			POM: 5000
		}))



		//Get MSLS Critical FY Vertical Data by Appropriation (PROC)
		store.dispatch(getMSLSUFRAPPNAction({ 
			id: 1,
			Portfolio: "Air Defense",
			BOS: "AD",
			APPN: "MSLS",
			Root: "Root1",
			BO:"Critical",
			FY19: [100, 200, 300, 400],
			FY20: [100, 200, 300, 400],
			FY21: [100, 200, 300, 400],
			FY22: [100, 200, 300, 400],
			FY23: [100, 200, 300, 400],
			FY24: [100, 200, 300, 400],
			FY25: [100, 200, 300, 400],
			POM: 5000
		}))
		store.dispatch(getMSLSUFRAPPNAction({ 
			id: 2,
			Portfolio: "Air Defense",
			BOS: "AD",
			APPN: "MSLS",
			Root: "Root2",
			BO:"Critical",
			FY19: [100, 200, 300, 400],
			FY20: [100, 200, 300, 400],
			FY21: [100, 200, 300, 400],
			FY22: [100, 200, 300, 400],
			FY23: [100, 200, 300, 400],
			FY24: [100, 200, 300, 400],
			FY25: [100, 200, 300, 400],
			POM: 5000
		}))

		


		
		//Get OPA Funded FY Vertical Data by Appropriation (PROC)
		store.dispatch(getOPAAPPNAction({ 
			id: 1,
			Portfolio: "Air Defense",
			BOS: "AD",
			APPN: "OPA",
			Root: "Root1",
			BO:"Funded",
			FY19: [100, 200, 300, 400],
			FY20: [100, 200, 300, 400],
			FY21: [100, 200, 300, 400],
			FY22: [100, 200, 300, 400],
			FY23: [100, 200, 300, 400],
			FY24: [100, 200, 300, 400],
			FY25: [100, 200, 300, 400],
			POM: 5000
		}))
		store.dispatch(getOPAAPPNAction({ 
			id: 2,
			Portfolio: "Air Defense",
			BOS: "AD",
			APPN: "OPA",
			Root: "Root2",
			BO:"Funded",
			FY19: [100, 200, 300, 400],
			FY20: [100, 200, 300, 400],
			FY21: [100, 200, 300, 400],
			FY22: [100, 200, 300, 400],
			FY23: [100, 200, 300, 400],
			FY24: [100, 200, 300, 400],
			FY25: [100, 200, 300, 400],
			POM: 5000
		}))



		//Get OPA Critical FY Vertical Data by Appropriation (PROC)
		store.dispatch(getOPAUFRAPPNAction({ 
			id: 1,
			Portfolio: "Air Defense",
			BOS: "AD",
			APPN: "OPA",
			Root: "Root1",
			BO:"Critical",
			FY19: [100, 200, 300, 400],
			FY20: [100, 200, 300, 400],
			FY21: [100, 200, 300, 400],
			FY22: [100, 200, 300, 400],
			FY23: [100, 200, 300, 400],
			FY24: [100, 200, 300, 400],
			FY25: [100, 200, 300, 400],
			POM: 5000
		}))
		store.dispatch(getOPAUFRAPPNAction({ 
			id: 2,
			Portfolio: "Air Defense",
			BOS: "AD",
			APPN: "OPA",
			Root: "Root2",
			BO:"Critical",
			FY19: [100, 200, 300, 400],
			FY20: [100, 200, 300, 400],
			FY21: [100, 200, 300, 400],
			FY22: [100, 200, 300, 400],
			FY23: [100, 200, 300, 400],
			FY24: [100, 200, 300, 400],
			FY25: [100, 200, 300, 400],
			POM: 5000
		}))

		//Get WTCV Funded FY Vertical Data by Appropriation (PROC)
		store.dispatch(getWTCVAPPNAction({ 
			id: 1,
			Portfolio: "Air Defense",
			BOS: "AD",
			APPN: "WTCV",
			Root: "Root1",
			BO:"Funded",
			FY19: [100, 200, 300, 400],
			FY20: [100, 200, 300, 400],
			FY21: [100, 200, 300, 400],
			FY22: [100, 200, 300, 400],
			FY23: [100, 200, 300, 400],
			FY24: [100, 200, 300, 400],
			FY25: [100, 200, 300, 400],
			POM: 5000
		}))
		store.dispatch(getWTCVAPPNAction({ 
			id: 2,
			Portfolio: "Air Defense",
			BOS: "AD",
			APPN: "WTCV",
			Root: "Root2",
			BO:"Funded",
			FY19: [100, 200, 300, 400],
			FY20: [100, 200, 300, 400],
			FY21: [100, 200, 300, 400],
			FY22: [100, 200, 300, 400],
			FY23: [100, 200, 300, 400],
			FY24: [100, 200, 300, 400],
			FY25: [100, 200, 300, 400],
			POM: 5000
		}))



		//Get WTCV Critical FY Vertical Data by Appropriation (PROC)
		store.dispatch(getWTCVUFRAPPNAction({ 
			id: 1,
			Portfolio: "Air Defense",
			BOS: "AD",
			APPN: "WTCV",
			Root: "Root1",
			BO:"Critical",
			FY19: [100, 200, 300, 400],
			FY20: [100, 200, 300, 400],
			FY21: [100, 200, 300, 400],
			FY22: [100, 200, 300, 400],
			FY23: [100, 200, 300, 400],
			FY24: [100, 200, 300, 400],
			FY25: [100, 200, 300, 400],
			POM: 5000
		}))
		store.dispatch(getWTCVUFRAPPNAction({ 
			id: 2,
			Portfolio: "Air Defense",
			BOS: "AD",
			APPN: "WTCV",
			Root: "Root2",
			BO:"Critical",
			FY19: [100, 200, 300, 400],
			FY20: [100, 200, 300, 400],
			FY21: [100, 200, 300, 400],
			FY22: [100, 200, 300, 400],
			FY23: [100, 200, 300, 400],
			FY24: [100, 200, 300, 400],
			FY25: [100, 200, 300, 400],
			POM: 5000
		}))

		

		
		//Get AWCF Funded FY Vertical Data by Appropriation (OTHER)
		store.dispatch(getAWCFAPPNAction({ 
			id: 1,
			Portfolio: "Air Defense",
			BOS: "AD",
			APPN: "AWCF",
			Root: "Root1",
			BO:"Funded",
			FY19: [100, 200, 300, 400],
			FY20: [100, 200, 300, 400],
			FY21: [100, 200, 300, 400],
			FY22: [100, 200, 300, 400],
			FY23: [100, 200, 300, 400],
			FY24: [100, 200, 300, 400],
			FY25: [100, 200, 300, 400],
			POM: 5000
		}))
		store.dispatch(getAWCFAPPNAction({ 
			id: 2,
			Portfolio: "Air Defense",
			BOS: "AD",
			APPN: "AWCF",
			Root: "Root2",
			BO:"Funded",
			FY19: [100, 200, 300, 400],
			FY20: [100, 200, 300, 400],
			FY21: [100, 200, 300, 400],
			FY22: [100, 200, 300, 400],
			FY23: [100, 200, 300, 400],
			FY24: [100, 200, 300, 400],
			FY25: [100, 200, 300, 400],
			POM: 5000
		}))



		//Get AWCF Critical FY Vertical Data by Appropriation (OTHER)
		store.dispatch(getAWCFUFRAPPNAction({ 
			id: 1,
			Portfolio: "Air Defense",
			BOS: "AD",
			APPN: "AWCF",
			Root: "Root1",
			BO:"Critical",
			FY19: [100, 200, 300, 400],
			FY20: [100, 200, 300, 400],
			FY21: [100, 200, 300, 400],
			FY22: [100, 200, 300, 400],
			FY23: [100, 200, 300, 400],
			FY24: [100, 200, 300, 400],
			FY25: [100, 200, 300, 400],
			POM: 5000
		}))
		store.dispatch(getAWCFUFRAPPNAction({ 
			id: 2,
			Portfolio: "Air Defense",
			BOS: "AD",
			APPN: "AWCF",
			Root: "Root2",
			BO:"Critical",
			FY19: [100, 200, 300, 400],
			FY20: [100, 200, 300, 400],
			FY21: [100, 200, 300, 400],
			FY22: [100, 200, 300, 400],
			FY23: [100, 200, 300, 400],
			FY24: [100, 200, 300, 400],
			FY25: [100, 200, 300, 400],
			POM: 5000
		}))

		
		//Get CHMC Funded FY Vertical Data by Appropriation (OTHER)
		store.dispatch(getCHMCAPPNAction({ 
			id: 1,
			Portfolio: "Air Defense",
			BOS: "AD",
			APPN: "CHMC",
			Root: "Root1",
			BO:"Funded",
			FY19: [100, 200, 300, 400],
			FY20: [100, 200, 300, 400],
			FY21: [100, 200, 300, 400],
			FY22: [100, 200, 300, 400],
			FY23: [100, 200, 300, 400],
			FY24: [100, 200, 300, 400],
			FY25: [100, 200, 300, 400],
			POM: 5000
		}))
		store.dispatch(getCHMCAPPNAction({ 
			id: 2,
			Portfolio: "Air Defense",
			BOS: "AD",
			APPN: "CHMC",
			Root: "Root1",
			BO:"Funded",
			FY19: [100, 200, 300, 400],
			FY20: [100, 200, 300, 400],
			FY21: [100, 200, 300, 400],
			FY22: [100, 200, 300, 400],
			FY23: [100, 200, 300, 400],
			FY24: [100, 200, 300, 400],
			FY25: [100, 200, 300, 400],
			POM: 5000
		}))



		//Get CHMC Critical FY Vertical Data by Appropriation (OTHER)
		store.dispatch(getCHMCUFRAPPNAction({ 
			id: 1,
			Portfolio: "Air Defense",
			BOS: "AD",
			APPN: "CHMC",
			Root: "Root1",
			BO:"Critical",
			FY19: [100, 200, 300, 400],
			FY20: [100, 200, 300, 400],
			FY21: [100, 200, 300, 400],
			FY22: [100, 200, 300, 400],
			FY23: [100, 200, 300, 400],
			FY24: [100, 200, 300, 400],
			FY25: [100, 200, 300, 400],
			POM: 5000
		}))
		store.dispatch(getCHMCUFRAPPNAction({ 
			id: 2,
			Portfolio: "Air Defense",
			BOS: "AD",
			APPN: "CHMC",
			Root: "Root1",
			BO:"Critical",
			FY19: [100, 200, 300, 400],
			FY20: [100, 200, 300, 400],
			FY21: [100, 200, 300, 400],
			FY22: [100, 200, 300, 400],
			FY23: [100, 200, 300, 400],
			FY24: [100, 200, 300, 400],
			FY25: [100, 200, 300, 400],
			POM: 5000
		}))

		
		
		//Get CHMD Funded FY Vertical Data by Appropriation (OTHER)
		store.dispatch(getCHMDAPPNAction({ 
			id: 1,
			Portfolio: "Air Defense",
			BOS: "AD",
			APPN: "CHMD",
			Root: "Root1",
			BO:"Funded",
			FY19: [100, 200, 300, 400],
			FY20: [100, 200, 300, 400],
			FY21: [100, 200, 300, 400],
			FY22: [100, 200, 300, 400],
			FY23: [100, 200, 300, 400],
			FY24: [100, 200, 300, 400],
			FY25: [100, 200, 300, 400],
			POM: 5000
		}))
		store.dispatch(getCHMDAPPNAction({ 
			id: 2,
			Portfolio: "Air Defense",
			BOS: "AD",
			APPN: "CHMD",
			Root: "Root2",
			BO:"Funded",
			FY19: [100, 200, 300, 400],
			FY20: [100, 200, 300, 400],
			FY21: [100, 200, 300, 400],
			FY22: [100, 200, 300, 400],
			FY23: [100, 200, 300, 400],
			FY24: [100, 200, 300, 400],
			FY25: [100, 200, 300, 400],
			POM: 5000
		}))



		//Get CHMD Critical FY Vertical Data by Appropriation (OTHER)
		store.dispatch(getCHMDUFRAPPNAction({ 
			id: 1,
			Portfolio: "Air Defense",
			BOS: "AD",
			APPN: "CHMD",
			Root: "Root1",
			BO:"Critical",
			FY19: [100, 200, 300, 400],
			FY20: [100, 200, 300, 400],
			FY21: [100, 200, 300, 400],
			FY22: [100, 200, 300, 400],
			FY23: [100, 200, 300, 400],
			FY24: [100, 200, 300, 400],
			FY25: [100, 200, 300, 400],
			POM: 5000
		}))
		
		store.dispatch(getCHMDUFRAPPNAction({ 
			id: 2,
			Portfolio: "Air Defense",
			BOS: "AD",
			APPN: "CHMD",
			Root: "Root2",
			BO:"Critical",
			FY19: [100, 200, 300, 400],
			FY20: [100, 200, 300, 400],
			FY21: [100, 200, 300, 400],
			FY22: [100, 200, 300, 400],
			FY23: [100, 200, 300, 400],
			FY24: [100, 200, 300, 400],
			FY25: [100, 200, 300, 400],
			POM: 5000
		}))


		//Get MCA Funded FY Vertical Data by Appropriation (OTHER)
		store.dispatch(getMCAAPPNAction({ 
			id: 1,
			Portfolio: "Air Defense",
			BOS: "AD",
			APPN: "MCA",
			Root: "Root1",
			BO:"Funded",
			FY19: [100, 200, 300, 400],
			FY20: [100, 200, 300, 400],
			FY21: [100, 200, 300, 400],
			FY22: [100, 200, 300, 400],
			FY23: [100, 200, 300, 400],
			FY24: [100, 200, 300, 400],
			FY25: [100, 200, 300, 400],
			POM: 5000
		}))
		
		store.dispatch(getMCAAPPNAction({ 
			id: 2,
			Portfolio: "Air Defense",
			BOS: "AD",
			APPN: "MCA",
			Root: "Root2",
			BO:"Funded",
			FY19: [100, 200, 300, 400],
			FY20: [100, 200, 300, 400],
			FY21: [100, 200, 300, 400],
			FY22: [100, 200, 300, 400],
			FY23: [100, 200, 300, 400],
			FY24: [100, 200, 300, 400],
			FY25: [100, 200, 300, 400],
			POM: 5000
		}))



		//Get MCA Critical FY Vertical Data by Appropriation (OTHER)
		store.dispatch(getMCAUFRAPPNAction({ 
			id: 1,
			Portfolio: "Air Defense",
			BOS: "AD",
			APPN: "MCA",
			Root: "Root1",
			BO:"Critical",
			FY19: [100, 200, 300, 400],
			FY20: [100, 200, 300, 400],
			FY21: [100, 200, 300, 400],
			FY22: [100, 200, 300, 400],
			FY23: [100, 200, 300, 400],
			FY24: [100, 200, 300, 400],
			FY25: [100, 200, 300, 400],
			POM: 5000
		}))
		store.dispatch(getMCAUFRAPPNAction({ 
			id: 2,
			Portfolio: "Air Defense",
			BOS: "AD",
			APPN: "MCA",
			Root: "Root2",
			BO:"Critical",
			FY19: [100, 200, 300, 400],
			FY20: [100, 200, 300, 400],
			FY21: [100, 200, 300, 400],
			FY22: [100, 200, 300, 400],
			FY23: [100, 200, 300, 400],
			FY24: [100, 200, 300, 400],
			FY25: [100, 200, 300, 400],
			POM: 5000
		}))

		
		//Get NGPA Funded FY Vertical Data by Appropriation (OTHER)
		store.dispatch(getNGPAAPPNAction({ 
			id: 1,
			Portfolio: "Air Defense",
			BOS: "AD",
			APPN: "NGPA",
			Root: "Root1",
			BO:"Funded",
			FY19: [100, 200, 300, 400],
			FY20: [100, 200, 300, 400],
			FY21: [100, 200, 300, 400],
			FY22: [100, 200, 300, 400],
			FY23: [100, 200, 300, 400],
			FY24: [100, 200, 300, 400],
			FY25: [100, 200, 300, 400],
			POM: 5000
		}))
		store.dispatch(getNGPAAPPNAction({ 
			id: 2,
			Portfolio: "Air Defense",
			BOS: "AD",
			APPN: "NGPA",
			Root: "Root2",
			BO:"Funded",
			FY19: [100, 200, 300, 400],
			FY20: [100, 200, 300, 400],
			FY21: [100, 200, 300, 400],
			FY22: [100, 200, 300, 400],
			FY23: [100, 200, 300, 400],
			FY24: [100, 200, 300, 400],
			FY25: [100, 200, 300, 400],
			POM: 5000
		}))



		//Get NGPA Critical FY Vertical Data by Appropriation (OTHER)
		store.dispatch(getNGPAUFRAPPNAction({ 
			id: 1,
			Portfolio: "Air Defense",
			BOS: "AD",
			APPN: "NGPA",
			Root: "Root1",
			BO:"Critical",
			FY19: [100, 200, 300, 400],
			FY20: [100, 200, 300, 400],
			FY21: [100, 200, 300, 400],
			FY22: [100, 200, 300, 400],
			FY23: [100, 200, 300, 400],
			FY24: [100, 200, 300, 400],
			FY25: [100, 200, 300, 400],
			POM: 5000
		}))
		store.dispatch(getNGPAUFRAPPNAction({ 
			id: 2,
			Portfolio: "Air Defense",
			BOS: "AD",
			APPN: "NGPA",
			Root: "Root2",
			BO:"Critical",
			FY19: [100, 200, 300, 400],
			FY20: [100, 200, 300, 400],
			FY21: [100, 200, 300, 400],
			FY22: [100, 200, 300, 400],
			FY23: [100, 200, 300, 400],
			FY24: [100, 200, 300, 400],
			FY25: [100, 200, 300, 400],
			POM: 5000
		}))

		
		//Get OMA Funded FY Vertical Data by Appropriation (OTHER)
		store.dispatch(getOMAAPPNAction({ 
			id: 1,
			Portfolio: "Air Defense",
			BOS: "AD",
			APPN: "OMA",
			Root: "Root1",
			BO:"Funded",
			FY19: [100, 200, 300, 400],
			FY20: [100, 200, 300, 400],
			FY21: [100, 200, 300, 400],
			FY22: [100, 200, 300, 400],
			FY23: [100, 200, 300, 400],
			FY24: [100, 200, 300, 400],
			FY25: [100, 200, 300, 400],
			POM: 5000
		}))
		store.dispatch(getOMAAPPNAction({ 
			id: 2,
			Portfolio: "Air Defense",
			BOS: "AD",
			APPN: "OMA",
			Root: "Root1",
			BO:"Funded",
			FY19: [100, 200, 300, 400],
			FY20: [100, 200, 300, 400],
			FY21: [100, 200, 300, 400],
			FY22: [100, 200, 300, 400],
			FY23: [100, 200, 300, 400],
			FY24: [100, 200, 300, 400],
			FY25: [100, 200, 300, 400],
			POM: 5000
		}))



		//Get OMA Critical FY Vertical Data by Appropriation (OTHER)
		store.dispatch(getOMAUFRAPPNAction({ 
			id: 1,
			Portfolio: "Air Defense",
			BOS: "AD",
			APPN: "OMA",
			Root: "Root1",
			BO:"Critical",
			FY19: [100, 200, 300, 400],
			FY20: [100, 200, 300, 400],
			FY21: [100, 200, 300, 400],
			FY22: [100, 200, 300, 400],
			FY23: [100, 200, 300, 400],
			FY24: [100, 200, 300, 400],
			FY25: [100, 200, 300, 400],
			POM: 5000
		}))
		store.dispatch(getOMAUFRAPPNAction({ 
			id: 2,
			Portfolio: "Air Defense",
			BOS: "AD",
			APPN: "OMA",
			Root: "Root2",
			BO:"Critical",
			FY19: [100, 200, 300, 400],
			FY20: [100, 200, 300, 400],
			FY21: [100, 200, 300, 400],
			FY22: [100, 200, 300, 400],
			FY23: [100, 200, 300, 400],
			FY24: [100, 200, 300, 400],
			FY25: [100, 200, 300, 400],
			POM: 5000
		}))

		
		//Get OMNG Funded FY Vertical Data by Appropriation (OTHER)
		store.dispatch(getOMNGAPPNAction({ 
			id: 1,
			Portfolio: "Air Defense",
			BOS: "AD",
			APPN: "OMNG",
			Root: "Root1",
			BO:"Funded",
			FY19: [100, 200, 300, 400],
			FY20: [100, 200, 300, 400],
			FY21: [100, 200, 300, 400],
			FY22: [100, 200, 300, 400],
			FY23: [100, 200, 300, 400],
			FY24: [100, 200, 300, 400],
			FY25: [100, 200, 300, 400],
			POM: 5000
		}))
		store.dispatch(getOMNGAPPNAction({ 
			id: 2,
			Portfolio: "Air Defense",
			BOS: "AD",
			APPN: "OMNG",
			Root: "Root2",
			BO:"Funded",
			FY19: [100, 200, 300, 400],
			FY20: [100, 200, 300, 400],
			FY21: [100, 200, 300, 400],
			FY22: [100, 200, 300, 400],
			FY23: [100, 200, 300, 400],
			FY24: [100, 200, 300, 400],
			FY25: [100, 200, 300, 400],
			POM: 5000
		}))



		//Get OMNG Critical FY Vertical Data by Appropriation (OTHER)
		store.dispatch(getOMNGUFRAPPNAction({ 
			id: 1,
			Portfolio: "Air Defense",
			BOS: "AD",
			APPN: "OMNG",
			Root: "Root1",
			BO:"Critical",
			FY19: [100, 200, 300, 400],
			FY20: [100, 200, 300, 400],
			FY21: [100, 200, 300, 400],
			FY22: [100, 200, 300, 400],
			FY23: [100, 200, 300, 400],
			FY24: [100, 200, 300, 400],
			FY25: [100, 200, 300, 400],
			POM: 5000
		}))
		store.dispatch(getOMNGUFRAPPNAction({ 
			id: 2,
			Portfolio: "Air Defense",
			BOS: "AD",
			APPN: "OMNG",
			Root: "Root1",
			BO:"Critical",
			FY19: [100, 200, 300, 400],
			FY20: [100, 200, 300, 400],
			FY21: [100, 200, 300, 400],
			FY22: [100, 200, 300, 400],
			FY23: [100, 200, 300, 400],
			FY24: [100, 200, 300, 400],
			FY25: [100, 200, 300, 400],
			POM: 5000
		}))


		//Get OMAR Funded FY Vertical Data by Appropriation (OTHER)
		store.dispatch(getOMARAPPNAction({ 
			id: 1,
			Portfolio: "Air Defense",
			BOS: "AD",
			APPN: "OMAR",
			Root: "Root1",
			BO:"Funded",
			FY19: [100, 200, 300, 400],
			FY20: [100, 200, 300, 400],
			FY21: [100, 200, 300, 400],
			FY22: [100, 200, 300, 400],
			FY23: [100, 200, 300, 400],
			FY24: [100, 200, 300, 400],
			FY25: [100, 200, 300, 400],
			POM: 5000
		}))
		store.dispatch(getOMARAPPNAction({ 
			id: 2,
			Portfolio: "Air Defense",
			BOS: "AD",
			APPN: "OMAR",
			Root: "Root2",
			BO:"Funded",
			FY19: [100, 200, 300, 400],
			FY20: [100, 200, 300, 400],
			FY21: [100, 200, 300, 400],
			FY22: [100, 200, 300, 400],
			FY23: [100, 200, 300, 400],
			FY24: [100, 200, 300, 400],
			FY25: [100, 200, 300, 400],
			POM: 5000
		}))



		//Get OMAR Critical FY Vertical Data by Appropriation (OTHER)
		store.dispatch(getOMARUFRAPPNAction({ 
			id: 1,
			Portfolio: "Air Defense",
			BOS: "AD",
			APPN: "OMAR",
			Root: "Root1",
			BO: "Critical",
			FY19: [100, 200, 300, 400],
			FY20: [100, 200, 300, 400],
			FY21: [100, 200, 300, 400],
			FY22: [100, 200, 300, 400],
			FY23: [100, 200, 300, 400],
			FY24: [100, 200, 300, 400],
			FY25: [100, 200, 300, 400],
			POM: 5000
		}))
		store.dispatch(getOMARUFRAPPNAction({ 
			id: 2,
			Portfolio: "Air Defense",
			BOS: "AD",
			APPN: "OMAR",
			Root: "Root2",
			BO: "Critical",
			FY19: [100, 200, 300, 400],
			FY20: [100, 200, 300, 400],
			FY21: [100, 200, 300, 400],
			FY22: [100, 200, 300, 400],
			FY23: [100, 200, 300, 400],
			FY24: [100, 200, 300, 400],
			FY25: [100, 200, 300, 400],
			POM: 5000
		}))

		
		//Get RDTA Funded FY Vertical Data by Appropriation (OTHER)
		store.dispatch(getRDTAAPPNAction({ 
			id: 1,
			Portfolio: "Air Defense",
			BOS: "AD",
			APPN: "RDTA",
			Root: "Root1",
			BO:"Funded",
			FY19: [100, 200, 300, 400],
			FY20: [100, 200, 300, 400],
			FY21: [100, 200, 300, 400],
			FY22: [100, 200, 300, 400],
			FY23: [100, 200, 300, 400],
			FY24: [100, 200, 300, 400],
			FY25: [100, 200, 300, 400],
			POM: 5000
		}))
		store.dispatch(getRDTAAPPNAction({ 
			id: 2,
			Portfolio: "Air Defense",
			BOS: "AD",
			APPN: "RDTA",
			Root: "Root2",
			BO:"Funded",
			FY19: [100, 200, 300, 400],
			FY20: [100, 200, 300, 400],
			FY21: [100, 200, 300, 400],
			FY22: [100, 200, 300, 400],
			FY23: [100, 200, 300, 400],
			FY24: [100, 200, 300, 400],
			FY25: [100, 200, 300, 400],
			POM: 5000
		}))



		//Get RDTA Critical FY Vertical Data by Appropriation (OTHER)
		store.dispatch(getRDTAUFRAPPNAction({ 
			id: 1,
			Portfolio: "Air Defense",
			BOS: "AD",
			APPN: "RDTA",
			Root: "Root1",
			BO: "Critical",
			FY19: [100, 200, 300, 400],
			FY20: [100, 200, 300, 400],
			FY21: [100, 200, 300, 400],
			FY22: [100, 200, 300, 400],
			FY23: [100, 200, 300, 400],
			FY24: [100, 200, 300, 400],
			FY25: [100, 200, 300, 400],
			POM: 5000
		}))
		store.dispatch(getRDTAUFRAPPNAction({ 
			id: 2,
			Portfolio: "Air Defense",
			BOS: "AD",
			APPN: "RDTA",
			Root: "Root2",
			BO: "Critical",
			FY19: [100, 200, 300, 400],
			FY20: [100, 200, 300, 400],
			FY21: [100, 200, 300, 400],
			FY22: [100, 200, 300, 400],
			FY23: [100, 200, 300, 400],
			FY24: [100, 200, 300, 400],
			FY25: [100, 200, 300, 400],
			POM: 5000
		}))

		
		//Get RPA Funded FY Vertical Data by Appropriation (OTHER)
		store.dispatch(getRPAAPPNAction({ 
			id: 1,
			Portfolio: "Air Defense",
			BOS: "AD",
			APPN: "RPA",
			Root: "Root1",
			BO:"Funded",
			FY19: [100, 200, 300, 400],
			FY20: [100, 200, 300, 400],
			FY21: [100, 200, 300, 400],
			FY22: [100, 200, 300, 400],
			FY23: [100, 200, 300, 400],
			FY24: [100, 200, 300, 400],
			FY25: [100, 200, 300, 400],
			POM: 5000
		}))
		store.dispatch(getRPAAPPNAction({ 
			id: 2,
			Portfolio: "Air Defense",
			BOS: "AD",
			APPN: "RPA",
			Root: "Root2",
			BO:"Funded",
			FY19: [100, 200, 300, 400],
			FY20: [100, 200, 300, 400],
			FY21: [100, 200, 300, 400],
			FY22: [100, 200, 300, 400],
			FY23: [100, 200, 300, 400],
			FY24: [100, 200, 300, 400],
			FY25: [100, 200, 300, 400],
			POM: 5000
		}))



		//Get RPA Critical FY Vertical Data by Appropriation (OTHER)
		store.dispatch(getRPAUFRAPPNAction({ 
			id: 1,
			Portfolio: "Air Defense",
			BOS: "AD",
			APPN: "RPA",
			Root: "Root1",
			BO: "Critical",
			FY19: [100, 200, 300, 400],
			FY20: [100, 200, 300, 400],
			FY21: [100, 200, 300, 400],
			FY22: [100, 200, 300, 400],
			FY23: [100, 200, 300, 400],
			FY24: [100, 200, 300, 400],
			FY25: [100, 200, 300, 400],
			POM: 5000
		}))
		store.dispatch(getRPAUFRAPPNAction({ 
			id: 2,
			Portfolio: "Air Defense",
			BOS: "AD",
			APPN: "RPA",
			Root: "Root2",
			BO: "Critical",
			FY19: [100, 200, 300, 400],
			FY20: [100, 200, 300, 400],
			FY21: [100, 200, 300, 400],
			FY22: [100, 200, 300, 400],
			FY23: [100, 200, 300, 400],
			FY24: [100, 200, 300, 400],
			FY25: [100, 200, 300, 400],
			POM: 5000
		}))


		//Get WEDG Funded FY Vertical Data by Appropriation (OTHER)
		store.dispatch(getWEDGAPPNAction({ 
			id: 1,
			Portfolio: "Air Defense",
			BOS: "AD",
			APPN: "WEDG",
			Root: "Root1",
			BO:"Funded",
			FY19: [100, 200, 300, 400],
			FY20: [100, 200, 300, 400],
			FY21: [100, 200, 300, 400],
			FY22: [100, 200, 300, 400],
			FY23: [100, 200, 300, 400],
			FY24: [100, 200, 300, 400],
			FY25: [100, 200, 300, 400],
			POM: 5000
		}))
		store.dispatch(getWEDGAPPNAction({ 
			id: 2,
			Portfolio: "Air Defense",
			BOS: "AD",
			APPN: "WEDG",
			Root: "Root2",
			BO:"Funded",
			FY19: [100, 200, 300, 400],
			FY20: [100, 200, 300, 400],
			FY21: [100, 200, 300, 400],
			FY22: [100, 200, 300, 400],
			FY23: [100, 200, 300, 400],
			FY24: [100, 200, 300, 400],
			FY25: [100, 200, 300, 400],
			POM: 5000
		}))



		//Get WEDG Critical FY Vertical Data by Appropriation (OTHER)
		store.dispatch(getWEDGUFRAPPNAction({ 
			id: 1,
			Portfolio: "Air Defense",
			BOS: "AD",
			APPN: "WEDG",
			Root: "Root1",
			BO: "Critical",
			FY19: [100, 200, 300, 400],
			FY20: [100, 200, 300, 400],
			FY21: [100, 200, 300, 400],
			FY22: [100, 200, 300, 400],
			FY23: [100, 200, 300, 400],
			FY24: [100, 200, 300, 400],
			FY25: [100, 200, 300, 400],
			POM: 5000
		}))
		store.dispatch(getWEDGUFRAPPNAction({ 
			id: 2,
			Portfolio: "Air Defense",
			BOS: "AD",
			APPN: "WEDG",
			Root: "Root2",
			BO: "Critical",
			FY19: [100, 200, 300, 400],
			FY20: [100, 200, 300, 400],
			FY21: [100, 200, 300, 400],
			FY22: [100, 200, 300, 400],
			FY23: [100, 200, 300, 400],
			FY24: [100, 200, 300, 400],
			FY25: [100, 200, 300, 400],
			POM: 5000
		}))

		//POM ALLOCATION TABLE
		
		//Get RDTE FUNDED FY 
		store.dispatch(getRDTEFYAction({ 
			id: 1,
			Portfolio: "Air Defense",
			BOS: "AD",
			APPN: "RDTE",
			FY19: [100],
			FY20: [200],
			FY21: [300],
			FY22: [400],
			FY23: [500],
			FY24: [600],
			FY25: [700],
			POM: 2800
		}))	
		store.dispatch(getRDTEFYAction({ 
			id: 2,
			Portfolio: "Air Defense",
			BOS: "AD",
			APPN: "RDTE",
			FY19: [100],
			FY20: [200],
			FY21: [300],
			FY22: [400],
			FY23: [500],
			FY24: [600],
			FY25: [700],
			POM: 2800
		}))

		
		//Get RDTE CRITICAL FY 
		store.dispatch(getRDTEFYUFRAction({ 
			id: 1,
			Portfolio: "Air Defense",
			BOS: "AD",
			APPN: "RDTE",
			FY19: [100],
			FY20: [200],
			FY21: [300],
			FY22: [400],
			FY23: [500],
			FY24: [600],
			FY25: [700],
			POM: 2800
		}))
		store.dispatch(getRDTEFYUFRAction({ 
			id: 2,
			Portfolio: "Air Defense",
			BOS: "AD",
			APPN: "RDTE",
			FY19: [100],
			FY20: [200],
			FY21: [300],
			FY22: [400],
			FY23: [500],
			FY24: [600],
			FY25: [700],
			POM: 2800
		}))
		
		
		//Get PROC FUNDED FY 
		store.dispatch(getPROCFYAction({ 
			id: 1,
			Portfolio: "Air Defense",
			BOS: "AD",
			APPN: "PROC",
			FY19: [100],
			FY20: [200],
			FY21: [300],
			FY22: [400],
			FY23: [500],
			FY24: [600],
			FY25: [700],
			POM: 2800
		}))
		
		store.dispatch(getPROCFYAction({ 
			id: 2,
			Portfolio: "Air Defense",
			BOS: "AD",
			APPN: "PROC",
			FY19: [100],
			FY20: [200],
			FY21: [300],
			FY22: [400],
			FY23: [500],
			FY24: [600],
			FY25: [700],
			POM: 2800
		}))

		
		//Get PROC CRITICAL FY 
		store.dispatch(getPROCFYUFRAction({ 
			id: 1,
			Portfolio: "Air Defense",
			BOS: "AD",
			APPN: "PROC",
			FY19: [100],
			FY20: [200],
			FY21: [300],
			FY22: [400],
			FY23: [500],
			FY24: [600],
			FY25: [700],
			POM: 2800
		}))
		store.dispatch(getPROCFYUFRAction({ 
			id: 2,
			Portfolio: "Air Defense",
			BOS: "AD",
			APPN: "PROC",
			FY19: [100],
			FY20: [200],
			FY21: [300],
			FY22: [400],
			FY23: [500],
			FY24: [600],
			FY25: [700],
			POM: 2800
		}))
		
		//Get OTHER FUNDED FY 
		store.dispatch(getOTHERFYAction({ 
			id: 1,
			Portfolio: "Air Defense",
			BOS: "AD",
			APPN: "OTHER",
			FY19: [100],
			FY20: [200],
			FY21: [300],
			FY22: [400],
			FY23: [500],
			FY24: [600],
			FY25: [700],
			POM: 2800
		}))
		store.dispatch(getOTHERFYAction({ 
			id: 2,
			Portfolio: "Air Defense",
			BOS: "AD",
			APPN: "OTHER",
			FY19: [100],
			FY20: [200],
			FY21: [300],
			FY22: [400],
			FY23: [500],
			FY24: [600],
			FY25: [700],
			POM: 2800
		}))

		
		//Get OTHER CRITICAL FY 
		store.dispatch(getOTHERFYUFRAction({ 
			id: 1,
			Portfolio: "Air Defense",
			BOS: "AD",
			APPN: "OTHER",
			FY19: [100],
			FY20: [200],
			FY21: [300],
			FY22: [400],
			FY23: [500],
			FY24: [600],
			FY25: [700],
			POM: 2800
		}))
		store.dispatch(getOTHERFYUFRAction({ 
			id: 2,
			Portfolio: "Air Defense",
			BOS: "AD",
			APPN: "OTHER",
			FY19: [100],
			FY20: [200],
			FY21: [300],
			FY22: [400],
			FY23: [500],
			FY24: [600],
			FY25: [700],
			POM: 2800
		}))





		//Get TOTAL FUNDED FY 
		store.dispatch(getTOTALFYAction({ 
			id: 1,
			Portfolio: "Air Defense",
			BOS: "AD",
			FY19: [100],
			FY20: [200],
			FY21: [300],
			FY22: [400],
			FY23: [500],
			FY24: [600],
			FY25: [700],
			POM: 2800
		}))
		store.dispatch(getTOTALFYAction({ 
			id: 2,
			Portfolio: "Air Defense",
			BOS: "AD",
			FY19: [100],
			FY20: [200],
			FY21: [300],
			FY22: [400],
			FY23: [500],
			FY24: [600],
			FY25: [700],
			POM: 2800
		}))

		
		//Get TOTAL CRITICAL FY 
		store.dispatch(getTOTALFYUFRAction({ 
			id: 1,
			Portfolio: "Air Defense",
			BOS: "AD",
			FY19: [100],
			FY20: [200],
			FY21: [300],
			FY22: [400],
			FY23: [500],
			FY24: [600],
			FY25: [700],
			POM: 2800
		}))
		store.dispatch(getTOTALFYUFRAction({ 
			id: 2,
			Portfolio: "Air Defense",
			BOS: "AD",
			FY19: [100],
			FY20: [200],
			FY21: [300],
			FY22: [400],
			FY23: [500],
			FY24: [600],
			FY25: [700],
			POM: 2800
		}))
		
		//Key 4 Deep Dive
		store.dispatch(getDeepDiveKey4Action({ 
					
			id: 1,
			Portfolio: "Air Defense",
			BOS: "AD",
			Root: "Root1",
			FY19: [100],
			FY20: [100],
			FY21: [100],
			FY22: [100],
			FY23: [100],
			FY24: [100],
			FY25: [100],
			POM: 5000,
		
				


		}))	
		store.dispatch(getDeepDiveKey4Action({ 
					
			id: 2,
			Portfolio: "Air Defense",
			BOS: "AD",
			Root: "Root2",
			FY19: [100],
			FY20: [100],
			FY21: [100],
			FY22: [100],
			FY23: [100],
			FY24: [100],
			FY25: [100],
			POM: 5000,	

		}))

		//Key 5 Deep Dive
		store.dispatch(getDeepDiveKey5Action({ 
					
			id: 1,
			Portfolio: "Air Defense",
			BOS: "AD",
			Root: "Root1",
			FY19: [100],
			FY20: [100],
			FY21: [100],
			FY22: [100],
			FY23: [100],
			FY24: [100],
			FY25: [100],
			POM: 5000,
		

		}))	
		store.dispatch(getDeepDiveKey5Action({ 
					
			id: 2,
			Portfolio: "Air Defense",
			BOS: "AD",
			Root: "Root2",
			FY19: [100],
			FY20: [100],
			FY21: [100],
			FY22: [100],
			FY23: [100],
			FY24: [100],
			FY25: [100],
			POM: 5000,	

		}))




*/

}]);//dispatchCtrl
		







		






	




		
		
		






		
		

		

