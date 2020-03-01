angular.module('app').controller('programDownloadCtrl', ['$q','fundingAPI', function ($q, $fundingAPI) {

    			/* Root, Program Data */

			var vm = this; //view model
			var programID  = location.search.split('=')[1];//program id
			
			//console.log('program ID', programID);
	
			//Root Items
			var rootUrl = $fundingAPI.rootUrl(); 
			//console.log(rootUrl)		 
			var rootItem = $fundingAPI.getItems(rootUrl); 
	
	
			 //Program Item
			 var programUrl = $fundingAPI.programUrl(programID); 
			 //console.log(programUrl)		 
			 var programItem = $fundingAPI.getItems(programUrl); 
	
			 //Program Deep Dive Item
			 var programDeepDiveUrl = $fundingAPI.programDeepDiveUrl(programID); 
			 //console.log(programDeepDiveUrl)		 
			 var programDeepDiveItem = $fundingAPI.getItems(programDeepDiveUrl); 
	
			//Program Key5 Deep Dive Item
			 //var programKey5DeepDiveUrl = $fundingAPI.programKey5DeepDiveUrl(programID); 
			 //console.log(programKey5DeepDiveUrl)		 
			 //var programKey5Item = $fundingAPI.getItems(programKey5DeepDiveUrl); 
	
			 //Program RDTE
			 var programRDTEUrl = $fundingAPI.programRDTEUrl(programID); 
			 //console.log(programRDTEUrl)		 
			 var programRDTEItem = $fundingAPI.getItems(programRDTEUrl); 
	
			 //Program RDTE UFR
			 var programRDTEUFRUrl = $fundingAPI.programRDTEUFRUrl(programID); 
			 //console.log(programRDTEUFRUrl)		 
			 var programRDTEUFRItem = $fundingAPI.getItems(programRDTEUFRUrl); 
	
			 //Program PROC
			 var programPROCUrl = $fundingAPI.programPROCUrl(programID); 
			 //console.log(programPROCUrl)		 
			 var programPROCItem = $fundingAPI.getItems(programPROCUrl); 
	
			 //Program PROC UFR
			 var programPROCUFRUrl = $fundingAPI.programPROCUFRUrl(programID); 
			 //console.log(programPROCUFRUrl)		 
			 var programPROCUFRItem = $fundingAPI.getItems(programPROCUFRUrl); 
	
			//Program OTHER
			 var programOTHERUrl = $fundingAPI.programOTHERUrl(programID); 
			 //console.log(programOTHERUrl)		 
			 var programOTHERItem = $fundingAPI.getItems(programOTHERUrl); 
	
			 //Program OTHER UFR
			 var programOTHERUFRUrl = $fundingAPI.programOTHERUFRUrl(programID); 
			 //console.log(programOTHERUFRUrl)		 
			 var programOTHERUFRItem = $fundingAPI.getItems(programOTHERUFRUrl); 
	
			//Program TOTAL
			 var programTOTALUrl = $fundingAPI.programTOTALUrl(programID); 
			 //console.log(programTOTALUrl)		 
			 var programTOTALItem = $fundingAPI.getItems(programTOTALUrl); 
	
			 //Program TOTAL UFR
			 var programTOTALUFRUrl = $fundingAPI.programTOTALUFRUrl(programID); 
			 console.log(programTOTALUFRUrl)		 
			 var programTOTALUFRItem = $fundingAPI.getItems(programTOTALUFRUrl); 
	
	
	
	
			
	
	
			 var allData = $q.all([
				 rootItem,
				 programItem,
				 programDeepDiveItem,
				 //programKey5Item,
				 programRDTEItem,
				 programRDTEUFRItem,
				 programPROCItem,
				 programPROCUFRItem,
				 programOTHERItem,
				 programOTHERUFRItem,
				 programTOTALItem,
				 programTOTALUFRItem
	
	
				]);
	
			 allData.then(function (_allData) {//All Data
	
				console.log('_allData',_allData)
				
				
	
				vm.root = _allData[0]; 
				vm.program = _allData[1];
				vm.programDeepDive = _allData[2];
				//vm.programKey5DeepDive = _allData[3];
				vm.programRDTE = _allData[3];
				vm.programRDTEUFR = _allData[4];
				vm.programPROC = _allData[5];
				vm.programPROCUFR = _allData[6];
				vm.programOTHER = _allData[7];
				vm.programOTHERUFR = _allData[8];
				vm.programTOTAL = _allData[9];
				vm.programTOTALUFR = _allData[10];
				
	
	
				
	
	
	
				//console.log(vm.root)
				//console.log(vm.program)
	
	
				//program roots
				var rootdb = TAFFY(vm.root);
				var _roots  = rootdb().distinct('Root').sort(); //Distinct Roots
				//console.log('Roots',_roots);
	
				for(var i = 0; i < _roots.length; i++){
	
					var root = _roots[i];
					var roots = ROOT(i, root); //Set Roots
					//console.log(roots)
	
					store.dispatch(getRootAction(//Set Root
						roots		
					))		
	
	
				}

			});
				
				/*
				
	
	
				//program properties
				var program_properties = PROGRAMPROPERTIES(vm.program); //Get Program Properties
	
				store.dispatch(getProgramPropertiesAction(//Set Program Properties
					program_properties	
				))
				
				
	
				//program key4 deep dive
				var programDeepdive = PROGRAMFUNDING(vm.programDeepDive); //Get Program Key 4 Deep Dive
				//console.log(program_key4_deepdive)
	
				store.dispatch(getProgramKey4DeepDiveAction(						
					programDeepdive
				))	
				
				
	
				//program key5 deep dive
				//var program_key5_deepdive = PROGRAMKEY5DEEPDIVE(vm.programKey5DeepDive); //Get Program Key 5 Deep Dive
				//console.log(program_key5_deepdive)
	
				//store.dispatch(getProgramKey5DeepDiveAction(		
					//program_key5_deepdive
				//))	
	
				//program rdte
				var program_rdte = PROGRAMFUNDING(vm.programRDTE); //Get Program RDTE
				//console.log(program_rdte)
				store.dispatch(getProgramRDTEAction(
					program_rdte
				))	
	
				
				//program rdte ufr
				var program_rdte_ufr = PROGRAMFUNDING(vm.programRDTEUFR); //Get Program RDTE UFR
				//console.log(program_rdte_ufr)
				store.dispatch(getProgramRDTEUFRAction(
					program_rdte_ufr
				))
				
				
	
				//program proc
				var program_proc = PROGRAMFUNDING(vm.programPROC); //Get Program PROC
				//console.log(program_proc)
				store.dispatch(getProgramPROCAction(
					program_proc
				))	
	
				//program proc ufr
				var program_proc_ufr = PROGRAMFUNDING(vm.programPROCUFR); //Get Program PROC UFR
				//console.log(program_proc_ufr)
				store.dispatch(getProgramPROCUFRAction(
					program_proc_ufr
				))
	
				//program other
				var program_other = PROGRAMFUNDING(vm.programOTHER); //Get Program OTHER
				//console.log(program_other)
				store.dispatch(getProgramOTHERAction(
					program_other
				))	
	
				//program other ufr
				var program_other_ufr = PROGRAMFUNDING(vm.programOTHERUFR); //Get Program OTHER UFR
				//console.log(program_other_ufr)
				store.dispatch(getProgramOTHERUFRAction(
					program_other_ufr
				))
	
				var program_total = PROGRAMFUNDING(vm.programTOTAL); //Get Program TOTAL
				//console.log(program_total)
				store.dispatch(getProgramTOTALAction(
					program_total
				))	
	
				//program total ufr
				var program_total_ufr = PROGRAMFUNDING(vm.programTOTALUFR); //Get Program TOTAL UFR
				//console.log(program_total_ufr)
				store.dispatch(getProgramTOTALUFRAction(
					program_total_ufr
					
				))
				
				*/


}]);//programDownloadCtrl


                
                
