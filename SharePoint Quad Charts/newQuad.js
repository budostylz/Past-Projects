
/*** PageLoadCtrl ***/
angular.module('app').controller('PageLoadCtrl', ['$q', 'GetItemsService','QuadService', 'PresentationService', function ($q, $GetItemsService, $QuadService, $PresentationService) {

    


    
    try{


                   console.log('page load')

                   var vm = this; //view model
                   var bosUrl = $GetItemsService.bosUrl();
                   var getBOSItems = $GetItemsService.getItems(bosUrl);
                   var loadBOSDOM = $q.all([getBOSItems]);

                   loadBOSDOM.then(function (BOSdata) {
                       console.log(BOSdata);

                       vm.BOSData = BOSdata[0];
                       var bos = vm.BOSData[0].Title;					  
					   var loadBOS = $QuadService.BOSDOM(vm.BOSData);//Load BOS

					  
                   });//loadBOSDOM()
				   

    }
    catch(e){
        console.log(e);
    }
    
    

}]);//PageLoadCtrl




angular.module('app').controller('UserSelectCtrl', ['$q','GetItemsService','QuadService', 'PresentationService', function ($q, $GetItemsService, $QuadService, $PresentationService) {

    
    try{
        var vm = this; //view model
        $( document ).ready(function() {





                jQuery("#submit1").click(function(e) {//Submit1

                    e.stopPropagation();

                    var vm = this; //view model
                    var bos = jQuery("#bos1 option:selected").text();
                    var portfolio = jQuery("#bos1 option:selected")[0].id;

                    console.log( portfolio );
					console.log(bos);

                    var program = jQuery("#programInput").val();
                    console.log(program)

                    var programUrl = $GetItemsService.programUrl(bos, program);  
                    var check = $GetItemsService.getItem(programUrl);

                    var allProgramsUrl = $GetItemsService.programBOSUrl(bos);  
                    var progItems = $GetItemsService.getItem(allProgramsUrl);


                    var validateStr = $QuadService.validateInput(program);   
                    var programCheckComplete = $q.all([check, progItems]);


                        

                        programCheckComplete.then(function (data) {

                            //console.log('check programs');

                            //console.log(data);
                            //console.log(validateStr);
    
                            vm.result = data[0][0].results.length;
                            vm.progID = (data[1][0].results.length > 0) ? data[1][0].results[0].ProgramID : 0;

                            if(data[1][0].results.length > 0){
                                vm.progID += 1;
                            }


    
                            //console.log(vm.result);
                            //console.log(validateStr);
                            //console.log(vm.progID);

                            

							
                            
                            
                            if(vm.result > 0){//program exists
                                alert(validateStr + '\nEXIST');
            
                            }else if(validateStr.length === 0){//valid string
                                alert('Enter a Valid Program');
            
                            }
                            else if(vm.result === 0 && validateStr.length > 0){//good to go
                                alert('good to go');
                                //console.log(area + ' : ' + bos + ' : ' + program);
                                var newProgram = $QuadService.addProgram(bos, portfolio, validateStr, vm.progID);


                                //console.log('create program');
                                //console.log(validateStr);
            
            
            
                            }
							

                        });//programCheckComplete
						
						

						
						
					

						



						




                    
                    



                });//submit1








           

        });// $( document ).ready();





    }
    catch(e){
        console.log(e);
    }
    
    

}]);//UserSelectCtrl
