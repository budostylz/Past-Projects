/*** MAINCONTROLLER ***/
angular.module('app').controller('MainController', ['$q', 'NewProgram','GetItemsService','SourceDataDOMService', function ($q, $NewProgram,$GetItemsService,$SourceDataDOMService) {


    try{

        var vm = this;
        var bosUrl = $GetItemsService.bosUrl();
        var getBOSItems = $GetItemsService.getItems(bosUrl);
        var loadBOSDOM = $q.all([getBOSItems]);

        loadBOSDOM.then(function (BOSdata) {//BOS


                //Load BOS
                vm.BOSData = BOSdata[0];
                var bosdb = TAFFY(vm.BOSData); 
                vm.bosArr  = bosdb().distinct('Title'); 
                var loadBOS = $SourceDataDOMService.BOSDOM(vm.bosArr);


                //console.log(vm.bosArr)




                jQuery("#saveprogram").click(function(e){//new program button


                    var bos = jQuery("#bos option:selected").text();
                    var newProg = jQuery('#newprogram').val();
                    var validateStr = $NewProgram.validateInput(newProg);
                    var programUrl = $GetItemsService.NewProgramUrl(validateStr);  
                    var programListsUrl = $GetItemsService.programListsUrl(); 
                    var check = $GetItemsService.getItem(programUrl);     
                    var programListsItems = $GetItemsService.getItems(programListsUrl);                   
                    var programCheckComplete = $q.all([check,programListsItems]);
        
                    //console.log(programListsUrl);
        
        
        
                    programCheckComplete.then(function (data) {
        
                        //console.log(bos);
                        //console.log(data);
        
                        
        
                        vm.result = data[0][0].results;
                        vm.POMLists = data[1];
                        
                        console.log(bos  + ' : ' + validateStr);
                        console.log(vm.result)
                        console.log(vm.POMLists)

                        
                        
                        if(vm.result.length > 0){//program exists
                            var programName = vm.result[0].Title;
                            alert(programName + '\nEXIST');
        
                        }else if(validateStr.length === 0){//valid string
                            alert('Enter a Valid Program')
        
                        }else if(vm.result.length === 0 && validateStr.length > 0){//good to go
                            //console.log('create program')
        
                            //jQuery("#saveprogram").hide();//hide save button to prevent multiple clicks
                            var newProgram = $NewProgram.addProgramLists(bos, validateStr, vm.POMLists);//
        
        
                        }
                        
                        
        
                        
                            
                    });//programCheckComplete
        
                    
            
        
        
        
        
            });//jQuery("#saveprogram").click()

        
        });
    
    

    }
    catch(e){

        console.log(e);


    }




    
 


   

}]);//MainController
