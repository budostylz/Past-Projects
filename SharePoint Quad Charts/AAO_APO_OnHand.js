/**
 * 
    vm.key4s = key4DB().distinct('OData__x006b_ey4');//USE  SITE COLUMN INSTEAD - MILTECH
    vm.key4s = key4DB().distinct('OData__x004b_ey4');//USE  SITE COLUMN INSTEAD - O365

 */


/*** PageLoadCtrl ***/
angular.module('app').controller('PageLoadCtrl', ['$q', 'PageLoadService','$cacheFactory','ProgramService', 'GetItemsService','SourceDataDOMService', function ($q, $PageLoadService, $cacheFactory, $ProgramService, $GetItemsService, $SourceDataDOMService) {

    


    
    try{

        $( document ).ready(function() {



                   console.log('page load')

                   
                   var qStr1 = location.search.split('=')[1];
                   var qStr2 = qStr1.split(',');
                   var programID = qStr2[0].replace(/%20/g, ' ');
                   var bos = qStr2[1].replace(/%20/g, ' ');
                   var vm = this; //view model

                   //console.log(programID);
                   //console.log(bos);


                    
  


                    //Program Item
                      var programUrl = $GetItemsService.programUrl(programID, bos); 

                      console.log(programUrl);
                      var programItem = $GetItemsService.getItems(programUrl); 
                      var programData = $q.all([programItem]);

                      

                      programData.then(function (_programData) {//Program Data

                            console.log('program data')
                            console.log(_programData);
                            //console.log(vm.bos);

                            
                            vm.program = (_programData[0].length > 0) ? (_programData[0][0].Title) : "";
                            vm.bos = (_programData[0].length > 0) ? (_programData[0][0].BOS) : "";
                            vm.portfolio = (_programData[0].length > 0) ? (_programData[0][0].PORTFOLIO) : "";

                            console.log(vm.program + ' : ' + vm.bos + ' : ' + vm.portfolio)


                            //AAO
                            var AAOUrl = $GetItemsService.AAOUrl(bos);
                            var AAOItems = $GetItemsService.getItems(AAOUrl);

                            //APO
                            var APOUrl = $GetItemsService.APOURL(bos);
                            var APOItems = $GetItemsService.getItems(APOUrl);


                            


                            var rootData = $q.all([   
                                AAOItems,
                                APOItems
                              ]);


                              
                                rootData.then(function (_rootData) {//AAO-APO-OnHand Data


                                    

                                    //console.log(_rootData);
                                    vm.AAO = _rootData[0];
                                    vm.APO = _rootData[1];
                                    vm.AllLINs = vm.AAO.concat(vm.APO);

                                    //console.log(vm.AAO)
                                    //console.log(vm.APO)
                                    console.log(vm.AllLINs);

                                    

                                    
                
                                    //Distinct LINs
                                    var LINDB = TAFFY(vm.AllLINs); 
                                    var LINArr  = LINDB().distinct('LIN');
                                    LINArr = LINArr.sort();

                                    console.log(LINArr.sort())

                                    //Build Source Data
                                    var clearStorage = $SourceDataDOMService.clearStorage(); 
                                    var sourceData = $SourceDataDOMService.addAAOItem('Program', vm.bos, vm.portfolio, vm.program);
                                    sourceData = $SourceDataDOMService.getItem();  

                                    
        
                                    //Download Program Properties
                                    var downloadProgramProperties = (_rootData[1].length > 0 ) ? $ProgramService.downloadProgram('Program', vm.bos, vm.program, "", "", "") : "";
        
        
                                    //Download AAO-APO-OnHand LINs
                                    var downloadLINs =  $SourceDataDOMService.download_AAO_APO_LINDOM(bos, LINDB, LINArr);
        
                                    console.log(sourceData);
                                    console.log('Session Storage Length: ' + sessionStorage.length);

                                    
                                    
                                    
                                    
                                    
        
        
        
                            });//rootData

                            

                            

                            
    



                       });

                       


                       jQuery('#program-quad-navigation').change(function(e){

                        var sourceData = $SourceDataDOMService.getItem(); 
                        var area = sourceData.Area;
                        var bos = sourceData.BOS;
                        var program = sourceData.Program;
    
                        console.log(area + ' : ' + bos + ' : ' + program);
            
    
                        var ctx = _spPageContextInfo;
                        var select = jQuery(this).val();
                        var url = '';
                        
    
                        //console.log(ctx);
                        console.log(select)
        
                        if(select === 'PORTFOLIO CONTEXT'){
                            url = ctx.webAbsoluteUrl + '/Pages/collab1.aspx?program='+program+'';
                            //console.log( url )
                            window.open(url, '_blank');     
        
                        }else if(select === 'PORTFOLIO OVERVIEW'){
    
                            url = ctx.webAbsoluteUrl + '/Pages/collab2.aspx?program='+program+'';
                            //console.log( url )
                            window.open(url, '_blank');
    
                        }else if(select === 'PROGRAM OVERVIEW'){
                            url = ctx.webAbsoluteUrl + '/Pages/collab3.aspx?program='+program+'';
                           // console.log( url )
                            window.open(url, '_blank');
    
    
    
                        }else if(select === 'PROGRAM ASSESSMENT & RECOMMENDATION'){
                            url = ctx.webAbsoluteUrl + '/Pages/collab4.aspx?program='+program+'';
                            //console.log( url )
                            window.open(url, '_blank');
    
    
                        }else if(select === 'FUNDING ALLOCATION'){
                            url = ctx.webAbsoluteUrl + '/Pages/ProgramFunding.aspx?program='+program+'';
                            //console.log( url )
                            window.open(url, '_blank');
    
    
                        }else if(select === 'LIN ALLOCATION'){
                            url = ctx.webAbsoluteUrl + '/Pages/ProgramLINAllocation.aspx?program='+program+'';
                            //console.log( url )
                            window.open(url, '_blank');
    
    
                        }else if(select === 'PRESENTATIONS/MAIN PAGE'){
                            url = ctx.siteAbsoluteUrl + '/quad/Pages/QuadOptions.aspx';
                            //console.log( url )
                            window.open(url, '_blank');
    
    
                        }
        
        
        
        
                    });

                    

                });//ready




                   
        
    }
    catch(e){
        console.log(e);
    }
    
    

}]);//PageLoadCtrl




angular.module('app').controller('UserSelectCtrl', ['$q', 'SourceDataDOMService','PageLoadService', 'ProgramService', 'GetItemsService',
function ($q, $SourceDataDOMService, $PageLoadService, $ProgramService,$GetItemsService) {

    
    try{
        $( document ).ready(function() {




                /*HANDLERS*/




                jQuery("#LIN").on( "click", "input", function(e) {//LIN
                    console.log('from LIN')  
                    e.stopPropagation();


                    var vm = this; //view model
                    var sourceData = $SourceDataDOMService.getItem(); 
                    var area = sourceData.Area;
                    var bos = sourceData.BOS;
                    var program = sourceData.Program;

                    var checked = jQuery(this).is(":checked");
                    var LIN = e.currentTarget.className;
                    var root = jQuery('.'+LIN+'root').text();

                    
                   //AAO
                    var AAOUrl = $GetItemsService.AAOUrlSelect(bos, LIN);
                    var AAOItems = $GetItemsService.getItems(AAOUrl);

                   //APO
                    var APOUrl = $GetItemsService.APOURLSelect(bos, LIN);
                    var APOItems = $GetItemsService.getItems(APOUrl);
                    var LIN_Data = $q.all([AAOItems, APOItems]);

                    LIN_Data.then(function (LINData) {//BOS-ROOT SOURCE DATA

                        //console.log(LINData);
                        vm.AAO = LINData[0];
                        vm.APO = LINData[1];

                        


                        console.log(bos + ' : ' + LIN)
                        console.log(vm.AAO)
                        console.log(vm.APO)

                        //console.log('check APO')
                        //console.log(vm.APO)

                        
                        
                        
                        sourceData = $SourceDataDOMService.getItem(); //Get Source Data
                        var countAAO = $SourceDataDOMService.countAAO(bos, LIN, vm.AAO, sourceData, checked);//count AAO,ONHand,SACS
                        var countAPO = $SourceDataDOMService.countAPO(bos, LIN, vm.APO, sourceData, checked);//count APO

                        
                        var setLINAllo = $SourceDataDOMService.load_AAO_APO_Allo(bos, LIN, sourceData, vm.AAO, vm.APO, checked);//set LIN DOM
                        //var changeLIN = $SourceDataDOMService.changeLIN(bos, LIN, sourceData, checked);//set array
                        //var setQUANTITY = $SourceDataDOMService.APPNDOM(sourceData[bos]['Quantity'], vm.fys, 'quantityfy', 'quantityPOMPeriod');


                        console.log(sourceData);
                        console.log('Session Storage Length: ' + sessionStorage.length);

                        

                        

 
                    });

                });




 
                jQuery("#distModal").click(function(e) {//Modal

                    console.log('load modal')

                    console.log(e);
                    e.stopPropagation();

                    var vm = this; //view model
                    var sourceData = $SourceDataDOMService.getItem(); 
                    var bos = sourceData.BOS;
                    var program = sourceData.Program;

                    var loadInventoryModal = $SourceDataDOMService.loadInventoryModal(sourceData[bos]['Inventory']);




                });



                



                jQuery("#updateProgram").click(function(e) {//UPDATE PROGRAM

                    e.stopPropagation();

                    var vm = this; //view model
                    var sourceData = $SourceDataDOMService.getItem(); 
                    var bos = sourceData.BOS;
                    var program = sourceData.Program;
        



                    //Program Item
                    var programUrl = $GetItemsService.programUrl(program); 
                    var programItem = $GetItemsService.getItems(programUrl); 
                 

                    //FY Url
                    var fyUrl = $GetItemsService.FYUrl();
                    var fyItems = $GetItemsService.getItems(fyUrl);//FY Items

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
                            ProgramAAOItem,
                            ProgramAPOItem,
                            ProgramROItem

                    ]);

                      AllData.then(function (allData) {
                        vm.fys = allData[0];
                        vm.programID = allData[1][0].ID || allData[1][0].Id;
                        vm.rdteID = allData[2][0].ID || allData[2][0].Id;
                        vm.procID = allData[3][0].ID || allData[3][0].Id;
                        vm.otherID = allData[4][0].ID || allData[4][0].Id;
                        vm.totalID = allData[5][0].ID || allData[5][0].Id;
                        vm.quantityID = allData[6][0].ID || allData[6][0].Id;
                        vm.deepdiveID = allData[7][0].ID || allData[7][0].Id;
                        vm.mycFloorID = allData[8][0].ID || allData[8][0].Id;
                        vm.AAOPROGRAMID = allData[9][0].ID || allData[9][0].Id;
                        vm.APOPROGRAMID = allData[10][0].ID || allData[10][0].Id;
                        vm.ROPROGRAMID = allData[11][0].ID || allData[11][0].Id;


                                
                        console.log(allData);
                        console.log(vm.AAOPROGRAMID)


                        


                        //UPDATE PROGRAM & POM ALLOCATION LISTS
                        var updateProgramList = $ProgramService.updateProgram('Program', bos, program, vm.programID, 'Programs1', sourceData);
                        var updateProgramRDTE = $SourceDataDOMService.updateProgramPOMAllo('Program', bos, program, vm.rdteID, 'RDTE1', 'RDTE', sourceData, vm.fys);
                        var updateProgramPROC = $SourceDataDOMService.updateProgramPOMAllo('Program', bos, program, vm.procID, 'PROC1', 'PROC', sourceData, vm.fys);
                        var updateProgramOTHER = $SourceDataDOMService.updateProgramPOMAllo('Program', bos, program, vm.otherID, 'OTHER1', 'OTHER', sourceData, vm.fys);
                        var updateProgramTOTAL = $SourceDataDOMService.updateProgramPOMAllo('Program', bos, program, vm.totalID, 'TOTAL1', 'TOTAL', sourceData, vm.fys);
                        var updateProgramQUANTITY = $SourceDataDOMService.updateProgramPOMAllo('Program', bos, program, vm.quantityID, 'QUANTITY1', 'Quantity', sourceData, vm.fys);
                        var updateProgramDEEPDIVE = $SourceDataDOMService.updateProgramPOMAllo('Program', bos, program, vm.deepdiveID, 'DEEPDIVE1', 'DEEPDIVE', sourceData, vm.fys);
                        var updateProgramMYCFLOOR = $SourceDataDOMService.updateProgramPOMAllo('Program', bos, program, vm.mycFloorID, 'MYCFLOOR1', 'MYCFLOOR', sourceData, vm.fys);

                        

                        //UPDATE AAO, APO, RO INVENTORIES
                        var updateProgramAAO = $ProgramService.updateInventory('Program', bos, program, vm.AAOPROGRAMID, 'PROGRAMAAO1', sourceData, 'AAO');
                        var updateProgramAPO = $ProgramService.updateInventory('Program', bos, program, vm.APOPROGRAMID, 'PROGRAMAPO1', sourceData, 'APO');
                        var updateProgramRO = $ProgramService.updateInventory('Program', bos, program, vm.ROPROGRAMID, 'PROGRAMRO1', sourceData, 'RO');


                        


                        console.log(sourceData);
                        console.log('Session Storage Length: ' + sessionStorage.length);


                        


                    });//AllData



                });




           

        });// $( document ).ready();





    }
    catch(e){
        console.log(e);
    }
    
    

}]);//UserSelectCtrl
