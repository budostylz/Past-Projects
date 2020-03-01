
/*** PageLoadCtrl ***/
angular.module('app').controller('PageLoadCtrl', ['$q', 'PageLoadService','$cacheFactory','ProgramService', 'GetItemsService','SourceDataDOMService', function ($q, $PageLoadService, $cacheFactory, $ProgramService, $GetItemsService, $SourceDataDOMService) {

    


    
    try{

        $( document ).ready(function() {



                   console.log('page load')


                   var vm = this; //view model

                   var qStr1 = location.search.split('=')[1];
                   var qStr2 = qStr1.split(',');

                   var area = qStr2[0].replace('%20', ' ');
                   var bos = qStr2[1].replace('%20', ' ');
                   var program = qStr2[2].replace('%20', ' ');

                  //Program 
                   var programUrl = $GetItemsService.programUrl2(program); 
                   var programItem = $GetItemsService.getItems(programUrl); 


                  //FY Url
                   var fyUrl = $GetItemsService.FYUrl();
                   var fyItems = $GetItemsService.getItems(fyUrl);//FY Items

                  //Programmatic Overview
                   var programOverviewUrl = $GetItemsService.ProgramOverviewUrl(program);                 
                   var programOverviewItem = $GetItemsService.getItems(programOverviewUrl);
                 

                 //POM Allocation(text)
                   var POMAllocationUrl = $GetItemsService.POMAllocationUrl(program);  
                   var POMAllocationItem = $GetItemsService.getItems(POMAllocationUrl);
                 

                  //POM Allo(calculations)
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

                   //AAO
                   var ProgramAAOUrl = $GetItemsService.AAOProgramUrl(program);  
                   var ProgramAAOItem = $GetItemsService.getItems(ProgramAAOUrl);

                   //APO
                   var ProgramAPOUrl = $GetItemsService.APOProgramUrl(program);  
                   var ProgramAPOItem = $GetItemsService.getItems(ProgramAPOUrl);

                   //RO
                   var ProgramROUrl = $GetItemsService.ROProgramUrl(program);  
                   var ProgramROItem = $GetItemsService.getItems(ProgramROUrl);

                   //Program Assessment
                    var programAssessmentUrl = $GetItemsService.ProgramAssessmentUrl(program); 
                    var programAssessmenItem = $GetItemsService.getItems(programAssessmentUrl);
                  




                   

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
                           POMAllocationItem,
                           programOverviewItem,
                           ProgramAAOItem,
                           ProgramAPOItem,
                           ProgramROItem,
                           programAssessmenItem 




                   ]);

                     AllData.then(function (allData) {
                         

                        console.log(allData);

                        
                        vm.FYs = (allData[0]) ? (allData[0]) : "";

                        
                        vm.roots = (allData[1].length > 0) ? (allData[1][0].progRoot) : "";
                        vm.key4 = (allData[1].length > 0) ? (allData[1][0].progkey4) : "";
                        vm.LINs = (allData[1].length > 0) ? (allData[1][0].progLIN) : "";
                        vm.RDTE = (allData[2].length > 0) ?  (allData[2][0]) : "";
                        vm.PROC = (allData[3].length > 0) ?  (allData[3][0]) : "";
                        vm.OTHER = (allData[4].length > 0) ?  (allData[4][0]) : "";
                        vm.TOTAL = (allData[5].length > 0) ?  (allData[5][0]) : "";

                        vm.QUANTITY = (allData[6].length > 0) ?  (allData[6][0]) : "";
                        vm.DEEPDIVE = (allData[7].length > 0) ?  (allData[7][0]) : "";
                        vm.MYCFLOOR = (allData[8].length > 0) ?  (allData[8][0]) : "";
                        vm.POMALLOINFO = (allData[9].length > 0) ?  (allData[9][0]) : "";

                        vm.OVERVIEW = (allData[10].length > 0) ?  (allData[10][0]) : "";
                        vm.AAO = (allData[11].length > 0) ?  (allData[11][0]) : "";
                        vm.APO = (allData[12].length > 0) ?  (allData[12][0]) : "";
                        vm.RO = (allData[13].length > 0) ?  (allData[13][0]) : "";
                        vm.programAssessment = (allData[14]) ?  (allData[14][0]) : "";




                        //Build Source Data
                        var clearStorage = $SourceDataDOMService.clearStorage(); 
                        var sourceData = $SourceDataDOMService.addProgramItem(area, bos, program, vm.roots, vm.FYs);
                        sourceData = $SourceDataDOMService.getItem(); 


                        //Download Program Properties
                        var downloadProgramProperties = (allData[1].length > 0 ) ? $ProgramService.downloadProgram(area, bos, program, vm.roots, vm.key4, vm.LINs) : "";

                        //Download POM Allo
                        var downloadRDTE = (allData[2].length > 0) ? $ProgramService.downloadProgramPOMAllo(vm.RDTE, vm.FYs, 'rdtefy', 'rdtePOMPeriod') : "";  
                        var downloadPROC = (allData[3].length > 0) ? $ProgramService.downloadProgramPOMAllo(vm.PROC, vm.FYs, 'procfy', 'procPOMPeriod') : "";  
                        var downloadOTHER = (allData[4].length > 0) ? $ProgramService.downloadProgramPOMAllo(vm.OTHER, vm.FYs, 'otherfy', 'otherPOMPeriod') : ""; 
                        var downloadTOTAL = ( allData[5].length > 0 ) ? $ProgramService.downloadProgramPOMAllo(vm.TOTAL, vm.FYs, 'totalfy', 'totalPOMPeriod') : ""; 
                        var downloadQUANTITY = ( allData[6].length > 0  ) ? $ProgramService.downloadProgramPOMAllo(vm.QUANTITY, vm.FYs, 'quantityfy', 'quantityPOMPeriod')  : ""; 
                        var downloadDEEPDIVE = ( allData[7].length > 0 ) ? $ProgramService.downloadProgramPOMAllo(vm.DEEPDIVE, vm.FYs, 'deepdivefy', 'deepdivePOMPeriod') : ""; 
                        var downloadMYCFLOOR = ( allData[8].length > 0 ) ? $ProgramService.downloadProgramPOMAllo(vm.MYCFLOOR, vm.FYs, 'mycfloorfy', 'mycfloorPOMPeriod')  : ""; 

                        //Download POM Allo Info
                        var downloadProgramPOMAlloInfo = (allData[9].length > 0) ? $ProgramService.downloadProgramPOMAlloInfo(vm.POMALLOINFO) : null;  

                        //Download Inventory
                        var downloadProgramAAO = (allData[11].length > 0) ? $ProgramService.downloadInventory(vm.AAO, 'aao') : null;  
                        var downloadProgramAPO = (allData[11].length > 0) ? $ProgramService.downloadInventory(vm.APO, 'apo') : null;  
                        var downloadProgramRO = (allData[11].length > 0) ? $ProgramService.downloadInventory(vm.RO, 'ro') : null;  

                        //Download Overview
                        var downloadProgramOverview = (allData[10].length > 0) ? $ProgramService.downloadProgramOverview(vm.OVERVIEW) : null;  

                        //Download Program Assessment
                        var downloadProgramAssessment = (allData[14].length > 0 ) ? $ProgramService.downloadProgramAssessment(vm.programAssessment) : "";

                        







                   });//AllData


                   jQuery('#program-quad-navigation').change(function(e){

                    var ctx = _spPageContextInfo;
                    var select = jQuery(this).val();
                    var url = '';

                    //console.log(ctx);
                    console.log(select)
    
                    if(select === 'PORTFOLIO CONTEXT'){
                        url = ctx.webAbsoluteUrl + '/Pages/collab1.aspx?area='+area+','+bos+','+program+'';
                        //console.log( url )
                        window.open(url, '_blank');     
    
                    }else if(select === 'PROGRAM ASSESSMENT'){

                        url = ctx.webAbsoluteUrl + '/Pages/collab2.aspx?area='+area+','+bos+','+program+'';
                        //console.log( url )
                        window.open(url, '_blank');

                    }else if(select === 'QUAD 1'){
                        url = ctx.webAbsoluteUrl + '/Pages/collab3.aspx?area='+area+','+bos+','+program+'';
                       // console.log( url )
                        window.open(url, '_blank');



                    }else if(select === 'QUAD 2'){
                        url = ctx.webAbsoluteUrl + '/Pages/collab4.aspx?area='+area+','+bos+','+program+'';
                        //console.log( url )
                        window.open(url, '_blank');


                    }else if(select === 'FUNDING ALLOCATION'){
                        url = ctx.webAbsoluteUrl + '/Pages/ProgramFunding.aspx?area='+area+','+bos+','+program+'';
                        //console.log( url )
                        window.open(url, '_blank');


                    }else if(select === 'LIN ALLOCATION'){
                        url = ctx.webAbsoluteUrl + '/Pages/ProgramLINAllocation.aspx?area='+area+','+bos+','+program+'';
                        //console.log( url )
                        window.open(url, '_blank');


                    }else if(select === 'PRESENTATIONS/MAIN PAGE'){
                        url = ctx.siteAbsoluteUrl + '/quad/Pages/QuadOptions.aspx';
                        //console.log( url )
                        window.open(url, '_blank');


                    }
    
    
    
    
                });

            });

                  

        
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
            var sourceData = $SourceDataDOMService.getItem(); 
            var area = sourceData.Area;
            var bos = sourceData.BOS;
            var program = sourceData.Program;
     
                jQuery("#update-program-overview").click(function(e) {

                    update('overview');


                });//update-program-overview

                jQuery("#update-POM-Allo-Info").click(function(e) {

                    update('alloInfo');


                });//update-POM-Allo-Info








                function update(id){

                    try{

                        console.log('update')
                        var sourceData = $SourceDataDOMService.getItem(); 
                        var area = sourceData["Area"];
                        var bos = sourceData["BOS"];
                        var program = sourceData["Program"];
                        console.log(sourceData)
                        console.log(program);


                        //Programmatic Overview
                        var programOverviewUrl = $GetItemsService.ProgramOverviewUrl(program);                 
                        var programOverviewItem = $GetItemsService.getItems(programOverviewUrl);

                        //POM Allocation(text)
                        var POMAllocationUrl = $GetItemsService.POMAllocationUrl(program);  
                        var POMAllocationItem = $GetItemsService.getItems(POMAllocationUrl);



                            AllData = $q.all([
                                programOverviewItem,
                                POMAllocationItem
     
                            ]);


                            AllData.then(function (allData) {

                                console.log(allData)

                                if(id === 'overview'){

                                    vm.ProgramReq = allData[0];
                                    vm.ReqID = allData[0][0].ID || allData[0][0].Id;

                                    console.log(id)
                                    console.log(vm.ProgramReq)
                                    console.log(vm.ReqID)      
                                    
                                    var updateProgramOverview = $ProgramService.updateProgramOverview(area, bos, program, vm.ReqID,'PROGRAMMATICOVERVIEW1');                 



                                }else if(id === 'alloInfo'){

                                    vm.ProgramReq = allData[1];
                                    vm.ReqID = allData[1][0].ID || allData[1][0].Id;

                                    console.log(id)
                                    console.log(vm.ProgramReq)
                                    console.log(vm.ReqID)  
                                    
                                    var updateProgramPOMAlloInfo = $ProgramService.updateProgramPOMAlloInfo(area, bos, program, vm.ReqID,'POMALLLOCATION1');  






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
