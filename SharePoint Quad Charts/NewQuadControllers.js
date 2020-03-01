
/*** PageLoadCtrl ***/
angular.module('app').controller('PageLoadCtrl', ['$q', 'PageLoadService','$cacheFactory','ProgramService', 'GetItemsService','SourceDataDOMService', function ($q, $PageLoadService, $cacheFactory, $ProgramService, $GetItemsService, $SourceDataDOMService) {

    


    
    try{


                   console.log('page load')
                  
                  //CLEAR Program DOM
                  var clearProgramDOM = $ProgramService.ClearProgramDOM();


                   var vm = this; //view model
                   var bosUrl = $GetItemsService.bosUrl();
                   var getBOSItems = $GetItemsService.getItems(bosUrl);
                   var loadBOSDOM = $q.all([getBOSItems]);
   

                   
                
                   loadBOSDOM.then(function (BOSdata) {//BOS

                    //console.log(BOSdata)


                      vm.BOSData = BOSdata[0];
                      var bosdb = TAFFY(vm.BOSData); 
                      vm.bosArr  = bosdb().distinct('Title'); 
                      var bos = vm.bosArr[0];   
                      
                      //PROGRAM DATA

                      //Requirements/Capability to the Force
                      var programRequirementsUrl = $GetItemsService.ProgramRequirementsPageLoadUrl();  
                      //Programmatic Overview
                      var programOverviewUrl = $GetItemsService.ProgramOverviewPageLoadUrl();    
                      //Capability Description 
                      var programCapabilityUrl = $GetItemsService.ProgramCapabilityPageLoadUrl();  
                      //POM Allocation  Urls
                      var POMAllocationUrl = $GetItemsService.POMAllocationPageLoadUrl();                   
                      var rdteUrl = $GetItemsService.RDTEPageLoadUrl(); 
                      var procUrl = $GetItemsService.PROCPageLoadUrl(); 
                      var otherUrl = $GetItemsService.OtherPageLoadUrl();
                      var totalUrl = $GetItemsService.TotalPageLoadUrl(); 
                      var quantityUrl = $GetItemsService.QuantityPageLoadUrl(); 
                      var MYCFloorUrl = $GetItemsService.MYCFloorPageLoadUrl(); 
                      var deepDiveUrl = $GetItemsService.DeepDivePageLoadUrl(); 

                      //Requirements/Capability to the Force Items
                      var programRequirementsItem = $GetItemsService.getItems(programRequirementsUrl); 
                      //Programmatic Overview Items
                      var programOverviewItem = $GetItemsService.getItems(programOverviewUrl);
                      //Capability Description Items
                      var programCapabilityItem = $GetItemsService.getItems(programCapabilityUrl);
                      //POM Allocation Items
                      var POMAllocationItem = $GetItemsService.getItems(POMAllocationUrl);
                      var rdteItem = $GetItemsService.getItems(rdteUrl); 
                      var procItem = $GetItemsService.getItems(procUrl); 
                      var otherItem = $GetItemsService.getItems(otherUrl); 
                      var totalItem = $GetItemsService.getItems(totalUrl); 
                      var quantityItem = $GetItemsService.getItems(quantityUrl);
                      var MYCFloorUrlItem = $GetItemsService.getItems(MYCFloorUrl); 
                      var deepDiveItem = $GetItemsService.getItems(deepDiveUrl);
                      

                      //SOURCE DATA
                      var fyUrl = $GetItemsService.FYUrl();//FYs
                      var rootUrl = $GetItemsService.bosUrl2(bos);
                      var getRootItems = $GetItemsService.getItems(rootUrl);//BOS Root Items
                      var fyItems = $GetItemsService.getItems(fyUrl);//FY Items

                      //

                      var _allData = $q.all([
                        programRequirementsItem,//0
                        programOverviewItem,//1
                        programCapabilityItem,//2
                        POMAllocationItem,//3
                        rdteItem,//4
                        procItem,//5
                        otherItem,//6
                        totalItem,//7
                        quantityItem,//8
                        deepDiveItem,//9
                        MYCFloorUrlItem,//10
                        getRootItems,//11
                        fyItems//12

                      ]);

                      

                      _allData.then(function (allData) {//ALL DATA

                            //console.log('All Data')
                           // console.log(allData);


                            vm.programRequirements = allData[0];
                            vm.programOverview = allData[1];
                            vm.programCapability = allData[2];
                            vm.programPOMAllo = allData[3];
                            vm.programRDTE = allData[4];
                            vm.programPROC = allData[5];
                            vm.programOTHER = allData[6];
                            vm.programTOTAL = allData[7];
                            vm.programQUANTITY = allData[8];
                            vm.programDEEPDIVE = allData[9];
                            vm.programMYCFLOOR = allData[10];


                            vm.BOSRootItems = allData[11]; //BOS Root Items
                            vm.fys = allData[12];//FYs
                            
                            //Distinct Roots
                            var rootdb = TAFFY(vm.BOSRootItems); 
                            vm.rootArr  = rootdb().distinct('Root'); 


                            //Load Source Data
                            var loadBOS = $SourceDataDOMService.BOSDOM(vm.bosArr);
                            var loadRoot = $SourceDataDOMService.RootDOM(vm.rootArr);


                            //Current Program DOM
                            var currentProgramDOM = $ProgramService.CurrentProgramDOM(vm.programRequirements);

                            //ALL Programs BOS DOM
                            var loadALLProgramBOS = $ProgramService.BOSDOM(vm.bosArr);

                            //Build Source Data
                            var clearStorage = $SourceDataDOMService.clearStorage(); 
                            var sourceData = $SourceDataDOMService.addItem(bos, vm.rootArr, vm.fys);
                            sourceData = $SourceDataDOMService.getItem();  
                            console.log(sourceData);
                            console.log('Session Storage Length: ' + sessionStorage.length);
                            


                            //Requirements-Capability to the Force
                            var currentProgramDOM = $ProgramService.RequirementsCapDOM(vm.programRequirements);

                            //Programmatic Overview
                            var currentProgramOverviewDOM = $ProgramService.ProgrammaticOverviewDOM(vm.programOverview);
                            
                            //Capability Description
                            var currentProgramDescDOM = $ProgramService.ProgrammaticDescDOM(vm.programCapability);
                            
                            //POM ALLO
                            var currentProgramDescDOM = $ProgramService.POMDOM(vm.programPOMAllo);
                            
                            //RDTE
                            var currentProgramRDTEDOM = $ProgramService.ProgramRDTEDOM(vm.programRDTE, vm.fys);
                            
                            //PROC
                            var currentProgramPROCDOM = $ProgramService.ProgramPROCDOM(vm.programPROC, vm.fys);
                            
                            //OTHER
                            var currentProgramOTHERDOM = $ProgramService.ProgramOTHERDOM(vm.programOTHER, vm.fys);
                            
                           //TOTAL
                            var currentProgramTOTALDOM = $ProgramService.ProgramTOTALDOM(vm.programTOTAL, vm.fys);
                            
                            //MYCFLOOR
                            var currentProgramMYCFLOORDOM = $ProgramService.ProgramMYCFLOORDOM(vm.programMYCFLOOR, vm.fys);
                            





                            



                            


                      })

                      



                   });//loadBOSDOM()


                   
        
    }
    catch(e){
        console.log(e);
    }
    
    

}]);//PageLoadCtrl




angular.module('app').controller('UserSelectCtrl', ['$q', 'SourceDataDOMService','PageLoadService', 'ProgramService', 'GetItemsService',
function ($q, $SourceDataDOMService, $PageLoadService, $ProgramService,$GetItemsService) {

    
    try{
        var vm = this; //view model
        $( document ).ready(function() {



                /*HANDLERS*/

                jQuery("#allProgramBOS").change(function(e) {//All Program BOS 

                    try{
                        var vm = this; //view model
                        var bos = this.value;
                        console.log(bos);


                        //Requirements/Capability to the Force
                           var programRequirementsUrl = $GetItemsService.ProgramRequirementsUrlBOS(bos); 
                        //Requirements/Capability to the Force Items
                           var programRequirementsItem = $GetItemsService.getItems(programRequirementsUrl); 
                 
                             
                             
                              var programItemData = $q.all([
                                  programRequirementsItem,//0
                                 
                            ]);

                            programItemData.then(function (programData) {//PROGRAM DATA

                                console.log('PROGRAM DATA')
                                //console.log(programData)
                                vm.programs = programData[0];
                                //console.log(vm.programs)

                                //CLEAR Program DOM
                                 var loadALLPrograms = $ProgramService.ClearProgramDOM();

                                //ALL Programs DOM
                                var loadALLPrograms = $ProgramService.ProgramDOM(vm.programs);



                            });
                             
                             




                    }
                    catch(e){
                        console.log(e);
                    }


                });

                jQuery("#allPrograms").change(function(e) {//PROGRAMS


                    try{
                        console.log('from allPrograms');
                        e.stopPropagation();

                        var vm = this; //view model
                        var programName = this.value

                          //Requirements/Capability to the Force
                          var programRequirementsUrl = $GetItemsService.ProgramRequirementsUrl(programName);                  
                          //Programmatic Overview
                              var programOverviewUrl = $GetItemsService.ProgramOverviewUrl(programName);                 
                          //Capability Description Urls
                              var programCapabilityUrl = $GetItemsService.ProgramCapabilityUrl(programName);                
                          //POM Allocation  Urls
                              var POMAllocationUrl = $GetItemsService.POMAllocationUrl(programName);                   
                              var rdteUrl = $GetItemsService.RDTEUrl(programName); 
                              var procUrl = $GetItemsService.PROCUrl(programName); 
                              var otherUrl = $GetItemsService.OtherUrl(programName);
                              var totalUrl = $GetItemsService.TotalUrl(programName); 
                              var quantityUrl = $GetItemsService.QuantityUrl(programName); 
                              var MYCFloorUrl = $GetItemsService.MYCFloorUrl(programName); 
                              var deepDiveUrl = $GetItemsService.DeepDiveUrl(programName); 

                              //FY Urls
                              var fyUrl = $GetItemsService.FYUrl();


                        //Requirements/Capability to the Force Items
                              var programRequirementsItem = $GetItemsService.getItems(programRequirementsUrl); 
                         //Programmatic Overview Items
                              var programOverviewItem = $GetItemsService.getItems(programOverviewUrl);
                         //Capability Description Items
                              var programCapabilityItem = $GetItemsService.getItems(programCapabilityUrl);
                         //POM Allocation Items
                              var POMAllocationItem = $GetItemsService.getItems(POMAllocationUrl);
                              var rdteItem = $GetItemsService.getItems(rdteUrl); 
                              var procItem = $GetItemsService.getItems(procUrl); 
                              var otherItem = $GetItemsService.getItems(otherUrl); 
                              var totalItem = $GetItemsService.getItems(totalUrl); 
                              var quantityItem = $GetItemsService.getItems(quantityUrl);
                              var MYCFloorUrlItem = $GetItemsService.getItems(MYCFloorUrl); 
                              var deepDiveItem = $GetItemsService.getItems(deepDiveUrl);

                            //FYs
                              var fyItems = $GetItemsService.getItems(fyUrl);



                              var programItemData = $q.all([
                                programRequirementsItem,//0
                                programOverviewItem,//1
                                programCapabilityItem,//2
                                POMAllocationItem,//3
                                rdteItem,//4
                                procItem,//5
                                otherItem,//6
                                totalItem,//7
                                quantityItem,//8
                                deepDiveItem,//9
                                MYCFloorUrlItem,//10
                                fyItems//11
                            ]);

                            programItemData.then(function (programData) {//PROGRAM DATA

                                console.log('Get Data')
                                console.log(programData);


                                vm.programRequirements = programData[0];
                                vm.programOverview = programData[1];
                                vm.programCapability = programData[2];
                                vm.programPOMAllo = programData[3];
                                vm.programRDTE = programData[4];
                                vm.programPROC = programData[5];
                                vm.programOTHER = programData[6];
                                vm.programTOTAL = programData[7];
                                vm.programQUANTITY = programData[8];
                                vm.programDEEPDIVE = programData[9];
                                vm.programMYCFLOOR = programData[10];
                                vm.FYs = programData[11];




                                //CLEAR Program DOM
                                var clearProgramData = $ProgramService.ClearProgramDOM();

                                //Current Program DOM
                                var currentProgramDOM = $ProgramService.CurrentProgramDOM(vm.programRequirements);

                                //Requirements-Capability to the Force
                                var currentProgramDOM = $ProgramService.RequirementsCapDOM(vm.programRequirements);

                                //Programmatic Overview
                                var currentProgramOverviewDOM = $ProgramService.ProgrammaticOverviewDOM(vm.programOverview);

                                //Capability Description
                                var currentProgramDescDOM = $ProgramService.ProgrammaticDescDOM(vm.programCapability);

                                //POM ALLO
                                var currentProgramDescDOM = $ProgramService.POMDOM(vm.programPOMAllo);

                                //RDTE
                                var currentProgramRDTEDOM = $ProgramService.ProgramRDTEDOM(vm.programRDTE, vm.FYs);

                                //PROC
                                var currentProgramPROCDOM = $ProgramService.ProgramPROCDOM(vm.programPROC, vm.FYs);

                                //OTHER
                                var currentProgramOTHERDOM = $ProgramService.ProgramOTHERDOM(vm.programOTHER, vm.FYs);

                                //TOTAL
                                var currentProgramTOTALDOM = $ProgramService.ProgramTOTALDOM(vm.programTOTAL, vm.FYs);

                                //MYCFLOOR
                                var currentProgramMYCFLOORDOM = $ProgramService.ProgramMYCFLOORDOM(vm.programMYCFLOOR, vm.FYs);
















                            });



                            
    
                            
  
  
                        
       
                      
                        
                        

                        
                         

                        
                         
                         
                         
     
    

                    }
                    catch(e){
                        console.log(e);
                    }


                   

                });//#program

                jQuery("#bos").change(function(e) {//BOS


                    console.log('from Portfolio');
                    jQuery('#key4').empty();
                    jQuery('#LIN').empty();
                    jQuery('#key4Allo').empty();
                    jQuery('#LINAllo').empty();





                    var bos = this.value;
                    var rootUrl = $GetItemsService.bosUrl2(bos);//BOS Root Url
                    var fyUrl = $GetItemsService.FYUrl();
                    var getRootItems = $GetItemsService.getItems(rootUrl);//BOS Root Items
                    var fyItems = $GetItemsService.getItems(fyUrl);
                    var bosRootSourceData = $q.all([getRootItems, fyItems]);


                    bosRootSourceData.then(function (bosRootData) {//BOS-ROOT SOURCE DATA

                        //console.log(bosRootData);

                        vm.BOSRootItems = bosRootData[0];//BOS-Root Items
                        vm.fys = bosRootData[1];//FYs

                        //Distinct Roots
                        var rootdb = TAFFY(vm.BOSRootItems); 
                        vm.rootArr  = rootdb().distinct('Root'); 


                        //Build Source Data
                        var clearStorage = $SourceDataDOMService.clearStorage(); 
                        var sourceData = $SourceDataDOMService.addItem(bos, vm.rootArr, vm.fys);
                        sourceData = $SourceDataDOMService.getItem();  
                        console.log(sourceData);
                        console.log('Session Storage Length: ' + sessionStorage.length);


                        
                        //Load Source Data Roots(DOM)
                        var loadRoots = $SourceDataDOMService.RootDOM(vm.rootArr);//BOS Root Items


                    });


                });//BOS

                jQuery("#roots").on( "click", "input", function(e) {//ROOTS
                    console.log('from root');
                    
                    jQuery('#Key4Label').empty();
                    jQuery('.POMAllocTable').val('');
                    var checked = jQuery(this).is(":checked");
                    var bos = jQuery("#bos option:selected").text();
                    var root = this.value;
                    var fyUrl = $GetItemsService.FYUrl();//FY Urls
                    var bosRootUrl = $GetItemsService.BOSRootUrl(bos, root);//BOS Root Url
                    //var key4Url = $GetItemsService.key4Url(root);//Key 4 Url
                    var LINUrl = $GetItemsService.LINUrl(bos, root);//LIN Url
                    var fyItems = $GetItemsService.getItems(fyUrl);//FY Items
                    var BOSRootItems = $GetItemsService.getItems(bosRootUrl);//BOS Root Items
                    //var key4Items = $GetItemsService.getItems(key4Url);//Key 4 Items
                    var LINItems = $GetItemsService.getItems(LINUrl);//LIN Items
                    var bosRootSourceData = $q.all([BOSRootItems,fyItems,LINItems]);




                    bosRootSourceData.then(function (bosRootData) {//BOS-ROOT SOURCE DATA

                        console.log(bosRootData)

                        vm.BOSRoot = bosRootData[0];
                        vm.FYs = bosRootData[1];
                        vm.LINs = bosRootData[2];
                                                

                        //Get Source Data
                        var sourceData = $SourceDataDOMService.getItem(); 

                        //Set Frameworks
                        var changeRoot = $SourceDataDOMService.changeRoot(sourceData, bos, root, checked, vm.FYs);
                        var createAPPN = $SourceDataDOMService.createProgramAPPN(sourceData, bos, root, vm.BOSRoot, vm.FYs);//set Appropriations framework
                        var createDeepDive = $SourceDataDOMService.createProgramDeepDive(sourceData, bos, root, vm.BOSRoot, vm.FYs);//set Deep Dive framework
                        var createQuantity = $SourceDataDOMService.createQuantity(sourceData, bos, root, vm.LINs, vm.FYs);//set Quantity framework

                        //Distinct Key 4s and LINS
                        var key4DB = TAFFY(vm.BOSRoot); 
                        var LINDB = TAFFY(vm.LINs); 
                        vm.key4s = key4DB().distinct('OData__x006b_ey4');//USE  SITE COLUMN INSTEAD
                        vm.LINs = LINDB().distinct('LINOUT');
                        vm.NOMEN = LINDB().distinct('LINNOMEN');

                        //console.log(vm.LINs)
                        //console.log(vm.NOMEN)

                        //Set Key4-LIN DOM(Source)
                        var setKey4s = $SourceDataDOMService.Key4DOM(vm.key4s, root, checked);//set Key4 DOM
                        var setLINs = $SourceDataDOMService.LINDOM(vm.LINs, vm.NOMEN, root, checked);//set LIN DOM

                        //Set POM-DOM(Program)
                        var setPOMAllo = $SourceDataDOMService.loadPOMAllo(sourceData, bos, root, vm.FYs);


                        
                        //console.log(sourceData);
                        //console.log('Session Storage Length: ' + sessionStorage.length);



                    });

                    








                });


                jQuery("#key4").on( "click", "input", function(e) {//Key 4
                    console.log('from key 4')   
      
                    e.stopPropagation();
                    var checked = jQuery(this).is(":checked");
                    var bos = jQuery("#bos option:selected").text();
                    var key4 = e.currentTarget.className;
                    var fyUrl = $GetItemsService.FYUrl();//FY Urls
                    var fyItems = $GetItemsService.getItems(fyUrl);//FY Items
                    var fys = $q.all([fyItems]);

                    fys.then(function (fyData) {//BOS-ROOT SOURCE DATA

                        //console.log(fyData);
                        vm.FYs = fyData[0];

                         //Get Source Data
                        var sourceData = $SourceDataDOMService.getItem(); 
                        var setKey4Allo = $SourceDataDOMService.loadKey4Allo(sourceData, bos, key4, vm.FYs, checked);//set LIN DOM
 


                


                    //console.log(sourceData);



                    });




                });

                jQuery("#key4").on( "click", "#key4All", function(e) {//Key4All
                    e.stopPropagation();


                    console.log('All')


                });


                jQuery("#key4").on( "click", "#key4Some", function(e) {//Key4Some
                    e.stopPropagation();


                    console.log('Some')

                });


                jQuery("#LIN").on( "click", "input", function(e) {//LIN
                    console.log('from LIN')  


                    e.stopPropagation();

                    var checked = jQuery(this).is(":checked");
                    var bos = jQuery("#bos option:selected").text();
                    var LIN = e.currentTarget.className;
                    var fyUrl = $GetItemsService.FYUrl();//FY Urls
                    var fyItems = $GetItemsService.getItems(fyUrl);//FY Items

                    var fys = $q.all([fyItems]);

                    fys.then(function (fyData) {//BOS-ROOT SOURCE DATA

                        //console.log(fyData);
                        vm.FYs = fyData[0];

                         //Get Source Data
                        var sourceData = $SourceDataDOMService.getItem(); 
                        var setLINAllo = $SourceDataDOMService.loadLINAllo(sourceData, bos, LIN, vm.FYs, checked);//set LIN DOM
 


                


                    //console.log(sourceData);



                });

                    





                });


                jQuery("#updateProgram").click(function(e) {//UPDATE PROGRAM

                    e.stopPropagation();
                    console.log('UPDATE DATA');

                    var vm = this; //view model
                    var bos = jQuery("#bos option:selected").text();
                    var programName = jQuery('#currentProgramName')[0].innerText;
                    var fyUrl = $GetItemsService.FYUrl();//FY Urls
                    var fyItems = $GetItemsService.getItems(fyUrl);//FY Items



                      //Requirements/Capability to the Force
                      var programRequirementsUrl = $GetItemsService.ProgramRequirementsUrl(programName);                  
                      //Programmatic Overview
                          var programOverviewUrl = $GetItemsService.ProgramOverviewUrl(programName);                 
                      //Capability Description Urls
                          var programCapabilityUrl = $GetItemsService.ProgramCapabilityUrl(programName);                
                      //POM Allocation  Urls
                          var POMAllocationUrl = $GetItemsService.POMAllocationUrl(programName);                   
                          var rdteUrl = $GetItemsService.RDTEUrl(programName); 
                          var procUrl = $GetItemsService.PROCUrl(programName); 
                          var otherUrl = $GetItemsService.OtherUrl(programName);
                          var totalUrl = $GetItemsService.TotalUrl(programName); 
                          var quantityUrl = $GetItemsService.QuantityUrl(programName); 
                          var MYCFloorUrl = $GetItemsService.MYCFloorUrl(programName); 
                          var deepDiveUrl = $GetItemsService.DeepDiveUrl(programName); 

                    //Requirements/Capability to the Force Items
                          var programRequirementsItem = $GetItemsService.getItems(programRequirementsUrl); 
                     //Programmatic Overview Items
                          var programOverviewItem = $GetItemsService.getItems(programOverviewUrl);
                     //Capability Description Items
                          var programCapabilityItem = $GetItemsService.getItems(programCapabilityUrl);
                     //POM Allocation Items
                          var POMAllocationItem = $GetItemsService.getItems(POMAllocationUrl);
                          var rdteItem = $GetItemsService.getItems(rdteUrl); 
                          var procItem = $GetItemsService.getItems(procUrl); 
                          var otherItem = $GetItemsService.getItems(otherUrl); 
                          var totalItem = $GetItemsService.getItems(totalUrl); 
                          var quantityItem = $GetItemsService.getItems(quantityUrl);
                          var MYCFloorUrlItem = $GetItemsService.getItems(MYCFloorUrl); 
                          var deepDiveItem = $GetItemsService.getItems(deepDiveUrl);


                          var programItemData = $q.all([
                            programRequirementsItem,//0
                            programOverviewItem,//1
                            //programCapabilityItem,//2
                            POMAllocationItem,//3
                            rdteItem,//4
                            procItem,//5
                            otherItem,//6
                            totalItem,//7
                            quantityItem,//8
                            deepDiveItem,//9
                            MYCFloorUrlItem,//10
                            fyItems//11
                        ]);

                        programItemData.then(function (programData) {//PROGRAM DATA

                            console.log('Program Data');
                            //console.log(programName);
                            console.log(programData);


                            
                            

                            vm.programRequirements = programData[0];
                            vm.programOverview = programData[1];
                            //vm.programCapability = programData[2];
                            vm.POMAllocation = programData[3];
                            vm.rdteItem = programData[4];
                            vm.procItem = programData[5];
                            vm.otherItem = programData[6];
                            vm.totalItem = programData[7];
                            vm.quantityItem = programData[8];
                            vm.deepDiveItem = programData[9];
                            vm.MYCFloorUrlItem = programData[10];


                            

                            vm.programRequirementsID = programData[0][0].ID || programData[0][0].Id;
                            vm.programOverviewID = programData[1][0].ID || programData[1][0].Id;
                            //vm.programCapabilityID = programData[2][0].ID || programData[2][0].Id;
                            vm.POMAllocationID = programData[3][0].ID || programData[3][0].Id;
                            vm.rdteItemID = programData[4][0].ID || programData[4][0].Id;
                            vm.procItemID = programData[5][0].ID || programData[5][0].Id;
                            vm.otherItemID = programData[6][0].ID || programData[6][0].Id;
                            vm.totalItemID = programData[7][0].ID || programData[7][0].Id;
                            vm.quantityItemID = programData[8][0].ID || programData[8][0].Id;
                            vm.deepDiveItemID = programData[9][0].ID || programData[9][0].Id;
                            vm.MYCFloorUrlItemID = programData[10][0].ID || programData[10][0].Id;
                            vm.FYs = programData[11];


                            console.log(vm.programRequirementsID);
                            console.log(vm.programOverviewID);
                            //console.log(vm.programCapabilityID);
                            console.log(vm.rdteItemID);
                            console.log(vm.procItemID);
                            console.log(vm.otherItemID);
                            console.log(vm.totalItemID);
                            console.log(vm.quantityItemID);
                            console.log(vm.deepDiveItemID);
                            console.log(vm.MYCFloorUrlItemID);

                            

                            //Get Source Data
                            var sourceData = $SourceDataDOMService.getItem();  
                            console.log(sourceData);
                            

                            //Requirements-Capability to the Force
                            var updateProgramRequirementsItem = $ProgramService.updateProgramRequirements(programName, vm.programRequirementsID, 'ProgramRequirements1', bos, sourceData); 
                            
                            //Programmatic Overview 
                            var updateProgramOverviewItem = $ProgramService.updateProgramOverview(programName, vm.programOverviewID, 'ProgrammaticOverview1', bos, sourceData); 

                            //Capability Description
                            //var updateProgramCapabilityItem = $ProgramService.updateProgramCapability(programName, vm.programCapabilityID, 'ProgramCapability1', bos, sourceData); 

                            //RDTE
                            //var updateRDTEItem = $ProgramService.updateProgramRDTE(programName, vm.rdteItemID, 'RDTE1', bos, sourceData, vm.FYs);

                            //PROC
                            //var updatePROCItem = $ProgramService.updateProgramPROC(programName, vm.procItemID, 'PROC1', bos, sourceData, vm.FYs);

                            //OTHER
                            //var updateOTHERItem = $ProgramService.updateProgramOTHER(programName, vm.otherItemID, 'OTHER1', bos, sourceData, vm.FYs);

                            //TOTAL
                           // var updateTOTALItem = $ProgramService.updateProgramTOTAL(programName, vm.totalItemID, 'TOTAL1', bos, sourceData, vm.FYs);

                            //MYCFloor
                            //var updateMYCFloorItem = $ProgramService.updateProgramMYCFloor(programName, vm.MYCFloorUrlItemID, 'MYCFLOOR1', bos, sourceData, vm.FYs);

                            //POM Allo
                            //var updatePOMAlloItem = $ProgramService.updatePOMAllocation(programName, vm.POMAllocationID, 'POMAllocation1', bos, sourceData, vm.FYs);


                            alert(programName + ' Updated');
                            





                        });



                });


           

        });// $( document ).ready();





    }
    catch(e){
        console.log(e);
    }
    
    

}]);//UserSelectCtrl
