
/*** PageLoadCtrl ***/
angular.module('app').controller('PageLoadCtrl', ['$q', 'PageLoadService','$cacheFactory','ProgramService', 'GetItemsService','SourceDataDOMService', function ($q, $PageLoadService, $cacheFactory, $ProgramService, $GetItemsService, $SourceDataDOMService) {

    


    
    try{


                   console.log('page load')


                   var vm = this; //view model

                   var qStr1 = location.search.split('=')[1];
                   var qStr2 = qStr1.split(',');

                   var area = qStr2[0].replace('%20', ' ');
                   var bos = qStr2[1].replace('%20', ' ');
                   var program = qStr2[2].replace('%20', ' ');

                  //Program 
                   var programUrl = $GetItemsService.programUrl2(program); 

                   //FY Url
                    var fyUrl = $GetItemsService.FYUrl();
                    var fyItems = $GetItemsService.getItems(fyUrl);//FY Items
                    var programItem = $GetItemsService.getItems(programUrl); 
                  

                 //Requirements/Capability to the Force
                   var programRequirementsUrl = $GetItemsService.ProgramRequirementsUrl(program);                  
                 //Programmatic Overview
                   var programOverviewUrl = $GetItemsService.ProgramOverviewUrl(program);                 
                 //Capability Description
                   var programCapabilityUrl = $GetItemsService.ProgramCapabilityUrl(program); 
                 //POM Allocation
                   var POMAllocationUrl = $GetItemsService.POMAllocationUrl(program);                   

                   
                 //Requirements/Capability to the Force Items
                   var programRequirementsItem = $GetItemsService.getItems(programRequirementsUrl); 
                 //Programmatic Overview Items
                   var programOverviewItem = $GetItemsService.getItems(programOverviewUrl);
                 //Capability Description Items
                   var programCapabilityItem = $GetItemsService.getItems(programCapabilityUrl);
                 //POM Allocation Items
                   var POMAllocationItem = $GetItemsService.getItems(POMAllocationUrl);





                  //POM Allo
                   var rdteUrl = $GetItemsService.RDTEUrl(program); 
                   var procUrl = $GetItemsService.PROCUrl(program); 
                   var otherUrl = $GetItemsService.OtherUrl(program);
                   var totalUrl = $GetItemsService.TotalUrl(program); 
                   var quantityUrl = $GetItemsService.QuantityUrl(program); 
                   var MYCFloorUrl = $GetItemsService.MYCFloorUrl(program); 
                   var deepDiveUrl = $GetItemsService.DeepDiveUrl(program); 



                   var rdteItem = $GetItemsService.getItems(rdteUrl); 
                   var procItem = $GetItemsService.getItems(procUrl); 
                   var otherItem = $GetItemsService.getItems(otherUrl); 
                   var totalItem = $GetItemsService.getItems(totalUrl); 
                   var quantityItem = $GetItemsService.getItems(quantityUrl);
                   var deepDiveItem = $GetItemsService.getItems(deepDiveUrl);
                   var MYCFloorUrlItem = $GetItemsService.getItems(MYCFloorUrl); 

                   

                   AllData = $q.all([
                           fyItems,
                           programItem,
                           rdteItem,
                           procItem,
                           otherItem,
                           totalItem,
                           quantityItem,
                           deepDiveItem,
                           MYCFloorUrlItem,
                           programRequirementsItem,
                           programOverviewItem,
                           programCapabilityItem,
                           POMAllocationItem

                   ]);

                     AllData.then(function (allData) {
                         

                        console.log(allData);
                        vm.FYs = (allData[0]) ? (allData[0]) : "";

                        
                        vm.roots = (allData[1].length > 0) ? (allData[1][0].progRoot) : "";
                        vm.key4 = (allData[1].length > 0) ? (allData[1][0].progkey4) : "";
                        vm.LINs = (allData[1].length > 0) ? (allData[1][0].progLIN) : "";
                        vm.RDTE = (allData[2][0]) ?  (allData[2][0]) : "";
                        vm.PROC = (allData[3][0]) ?  (allData[3][0]) : "";
                        vm.OTHER = (allData[4][0]) ?  (allData[4][0]) : "";
                        vm.TOTAL = (allData[5][0]) ?  (allData[5][0]) : "";

                        vm.progReq = (allData[6][0]) ?  (allData[6][0]) : "";
                        vm.progOverview = (allData[7][0]) ?  (allData[7][0]) : "";
                        vm.progCap = (allData[8][0]) ?  (allData[8][0]) : "";
                        vm.progAllo = (allData[9][0]) ?  (allData[9][0]) : "";


                        


                        //Build Source Data
                        var clearStorage = $SourceDataDOMService.clearStorage(); 
                        var sourceData = $SourceDataDOMService.addProgramItem(area, bos, program, vm.roots, vm.FYs);
                        sourceData = $SourceDataDOMService.getItem(); 

                        

                        



                        jQuery('#currentQuadName').append(area);
                        jQuery('#currentProgramBOS').append(bos);
                        jQuery('#currentProgramName').append(program);
                        jQuery('#currentProgramRoot').append(vm.roots);
                        jQuery('#currentProgramKey4').append(vm.key4);
                        jQuery('#currentProgramLIN').append(vm.LINs);

                        /*

                        var setRDTE = $SourceDataDOMService.APPNDOM(vm.RDTE, vm.FYs, 'rdtefy', 'rdtePOMPeriod');//set RDTE DOM
                        var setPROC = $SourceDataDOMService.APPNDOM(vm.PROC, vm.FYs, 'procfy', 'procPOMPeriod');//set PROC DOM
                        var setOTHER = $SourceDataDOMService.APPNDOM(vm.OTHER, vm.FYs, 'otherfy', 'otherPOMPeriod');//set OTHER DOM
                        var setTOTAL = $SourceDataDOMService.APPNDOM(vm.TOTAL, vm.FYs, 'totalfy', 'totalPOMPeriod');//set TOTAL DOM

                        var downloadProgramRequirements = $ProgramService.downloadProgramRequirements(vm.progReq);  
                        var downloadProgramOverview = $ProgramService.downloadProgramOverview(vm.progOverview);       
                        var downloadProgramCapability = $ProgramService.downloadProgramCapability(vm.progCap);      
                        var downloadProgramAllo = $ProgramService.downloadPOMAllocation(vm.progAllo);              
        
       
            
                        


                        console.log(sourceData)

                        */




                   });//AllData
                  

        
    }
    catch(e){
        console.log(e);
    }
    
    

}]);//PageLoadCtrl




angular.module('app').controller('UserSelectCtrl', ['$q', 'SourceDataDOMService','PageLoadService', 'ProgramService', 'GetItemsService',
function ($q, $SourceDataDOMService, $PageLoadService, $ProgramService,$GetItemsService) {

    
    try{
        $( document ).ready(function() {
                var vm = this; //view model
                
                jQuery("#updateRequirements").click(function(e) {

                    update('Program Requirements')





                });//updateRequirements

                jQuery("#updateOverview").click(function(e) {

                    update('Overview')




                });//updateOverview


                jQuery("#updateCapability").click(function(e) {

                    update('Capability')




                });//updateCapability

                jQuery("#updateAllo").click(function(e) {

                    update('Allo')




                });//updateAllo



                function update(id){

                    try{

                        console.log('update')
                        var sourceData = $SourceDataDOMService.getItem(); 
                        var area = sourceData["Area"];
                        var bos = sourceData["BOS"];
                        var program = sourceData["Program"];
                        console.log(sourceData)
                        console.log(program);


                        //Requirements/Capability to the Force
                            var programRequirementsUrl = $GetItemsService.ProgramRequirementsUrl(program);                  
                        //Programmatic Overview
                            var programOverviewUrl = $GetItemsService.ProgramOverviewUrl(program);                 
                        //Capability Description
                            var programCapabilityUrl = $GetItemsService.ProgramCapabilityUrl(program); 
                        //POM Allocation
                            var POMAllocationUrl = $GetItemsService.POMAllocationUrl(program);                   

                            
                        //Requirements/Capability to the Force Items
                            var programRequirementsItem = $GetItemsService.getItems(programRequirementsUrl); 
                        //Programmatic Overview Items
                            var programOverviewItem = $GetItemsService.getItems(programOverviewUrl);
                        //Capability Description Items
                            var programCapabilityItem = $GetItemsService.getItems(programCapabilityUrl);
                        //POM Allocation Items
                            var POMAllocationItem = $GetItemsService.getItems(POMAllocationUrl);


                            AllData = $q.all([
                                programRequirementsItem,
                                programOverviewItem,
                                programCapabilityItem,
                                POMAllocationItem
     
                            ]);


                            AllData.then(function (allData) {

                                console.log(allData)

                                if(id === 'Program Requirements'){

                                    vm.ProgramReq = allData[0];
                                    vm.ReqID = allData[0][0].ID || allData[0][0].Id;

                                    console.log(id)
                                    console.log(vm.ProgramReq)
                                    console.log(vm.ReqID)      
                                    var updateProgramReq = $ProgramService.updateProgramRequirements(area, bos, program, vm.ReqID,'ProgramRequirements1');                 


                                }else if(id === 'Overview'){
                                    vm.ProgramOverview = allData[1];
                                    vm.OverviewID = allData[1][0].ID || allData[1][0].Id;

                                    console.log(id)
                                    console.log(vm.ProgramOverview)
                                    console.log(vm.OverviewID)      


                                    var updateProgramOverview = $ProgramService.updateProgramOverview(area, bos, program, vm.OverviewID,'ProgrammaticOverview1');                 



                                }else if(id === 'Capability'){
                                    vm.ProgramCap = allData[2];
                                    vm.CapID = allData[2][0].ID || allData[2][0].Id;

                                    console.log(id)
                                    console.log(vm.ProgramCap)
                                    console.log(vm.CapID)     
                                    
                                    var updateProgramCap = $ProgramService.updateProgramCapability(area, bos, program, vm.CapID,'ProgramCapability1');                 




                                }else if(id === 'Allo'){
                                    vm.ProgramAllo = allData[3];
                                    vm.AlloID = allData[3][0].ID || allData[3][0].Id;

                                    console.log(id)
                                    console.log(vm.ProgramAllo);
                                    console.log(vm.AlloID);

                                    var updateProgramAllo = $ProgramService. updatePOMAllocation(area, bos, program, vm.AlloID,'POMAllocation1');              

                                    
                                    



                                }


                            });

     
  




                    }
                    catch(e){
                        console.log(e);
                    }
                }





           

        });// $( document ).ready();





    }
    catch(e){
        console.log(e);
    }
    
    

}]);//UserSelectCtrl
