
/*** PageLoadCtrl ***/
angular.module('app').controller('PageLoadCtrl', ['$q', 'PageLoadService','$cacheFactory','ProgramService', 'GetItemsService','POMAllocationService','SourceDataDOMService', function ($q, $PageLoadService, $cacheFactory, $ProgramService, $GetItemsService, $POMAllocationService, $SourceDataDOMService) {

    


    
    try{


                   console.log('ManPower Quad Page Load')

                   var vm = this; //view model
                   var bosUrl = $GetItemsService.bosUrl();
                   var getBOSItems = $GetItemsService.getItems(bosUrl);
                   var BOSScope = $q.all([getBOSItems]);
   
                

                   
                   BOSScope.then(function (BOSdata) {//BOS


                      vm.BOSData = BOSdata[0];
                      vm.BOSLoaded = vm.BOSData[0].Title;
                      var rootUrl = $GetItemsService.bosUrl2(vm.BOSLoaded);   
                      var getRootItems = $GetItemsService.getItems(rootUrl);
                      var rootScope = $q.all([getRootItems]);

                      var bosdb = TAFFY(vm.BOSData); 
                      vm.bosArr  = bosdb().distinct('Title'); 


                      console.log(vm.BOSLoaded);

                        rootScope.then(function (rootFYData) {//BOS ROOT-FY DATA

                            console.log('BOS-ROOT Data')
                            console.log(rootFYData);


                            //BOS Root Items
                            vm.BOSRootItems = rootFYData[0]

                            //FYs
                            //vm.fys = rootFYData[1];

                            console.log(vm.BOSRootItems)

                            //Distinct Roots
                            var rootdb = TAFFY(vm.BOSRootItems); 
                            vm.rootArr  = rootdb().distinct('Root'); 

                            console.log(vm.rootArr);

                            //Source Data BOS DOM
                            //console.log(vm.bosArr);
                            var loadBOS = $SourceDataDOMService.BOSDOM(vm.bosArr);

     
                            //Source Data ROOT DOM
                            var loadRoot = $SourceDataDOMService.RootDOM(vm.rootArr);




                        });//RootScope()

                        
                    


                    

                });//BOSScope()  






        
    }
    catch(e){
        console.log(e);
    }
    
    

}]);//PageLoadCtrl




angular.module('app').controller('UserSelectCtrl', ['$q', 'SourceDataDOMService','PageLoadService', 'ProgramService', 'GetItemsService', 'POMAllocationService', 'CalculatePOMAllocationService','UpdateProgram',
function ($q, $SourceDataDOMService, $PageLoadService, $ProgramService,$GetItemsService,$POMAllocationService,$CalculatePOMAllocationService,$UpdateProgram) {

    
    try{
        var vm = this; //view model
        $( document ).ready(function() {



                /*HANDLERS*/

                jQuery("#program").change(function(e) {//PROGRAMS


                    try{
                        console.log('from program');
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
                                programCapabilityItem,//2
                                POMAllocationItem,//3
                                rdteItem,//4
                                procItem,//5
                                otherItem,//6
                                totalItem,//7
                                quantityItem,//8
                                deepDiveItem,//9
                                MYCFloorUrlItem//10
                            ]);



                        
                         
                         
                         
     
    

                    }
                    catch(e){
                        console.log(e);
                    }


                   

                });//#program

                jQuery("#bos").change(function(e) {//BOS

                    console.log('from Portfolio');
                    jQuery('#key4').empty();
                    jQuery('#LIN').empty();



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


                        //Get Source Data
                        var sourceData = $SourceDataDOMService.getItem();  
                        var changeBOS = $SourceDataDOMService.changeBOS(bos, vm.rootArr, vm.fys);
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
                    var key4Url = $GetItemsService.key4Url(root);//Key 4 Url
                    var LINUrl = $GetItemsService.LINUrl(bos, root);//LIN Url
                    var fyItems = $GetItemsService.getItems(fyUrl);//FY Items
                    var BOSRootItems = $GetItemsService.getItems(bosRootUrl);//BOS Root Items
                    var key4Items = $GetItemsService.getItems(key4Url);//Key 4 Items
                    var LINItems = $GetItemsService.getItems(LINUrl);//LIN Items
                    var bosRootSourceData = $q.all([BOSRootItems,fyItems,key4Items,LINItems]);


                    //console.log(LINUrl);


                    bosRootSourceData.then(function (bosRootData) {//BOS-ROOT SOURCE DATA

                        //console.log(bosRootData)

                        vm.BOSRoot = bosRootData[0];
                        vm.FYs = bosRootData[1];
                        vm.key4s = bosRootData[2];
                        vm.LINs = bosRootData[3];

                        //Distinct Key 4s
                        var key4DB = TAFFY(vm.key4s); 
                        vm.key4Arr  = key4DB().distinct('OData__x004b_ey4'); //SET TO SITE COLUMN

                        //Distinct LINs
                        var LINDB = TAFFY(vm.LINs); 
                        vm.LINArr = LINDB().distinct('LINOUT'); //SET TO SITE COLUMN


                       //Get Source Data
                        var sourceData = $SourceDataDOMService.getItem();  
                        var changeRoot = $SourceDataDOMService.changeRoot(sourceData, bos, root, checked, vm.FYs);
                        sourceData = $SourceDataDOMService.getItem(); 
                        var createAPPN = $SourceDataDOMService.createProgramAPPN(sourceData, root, checked, vm.BOSRoot, vm.FYs);//set Appropriations framework
 
                        //var createDeepDive = $SourceDataDOMService.createDeepDive(sourceData, root, checked, vm.key4s, vm.FYs);//set Deep Dive framework
                        //sourceData = $SourceDataDOMService.getItem();  
                        //var createQuantity = $SourceDataDOMService.createQuantity(sourceData, root, checked, vm.LINs, vm.FYs);//set Quantity framework
                        //sourceData = $SourceDataDOMService.getItem();  



                        //Set Key 4 DOM
                        //var setKey4s = $SourceDataDOMService.Key4DOM(vm.key4Arr, checked, root);//set Key4 DOM

                        //Set LIN DOM
                        //var setLINs = $SourceDataDOMService.LINDOM(vm.LINArr, checked, root);//set LIN DOM



                        //Calculate RDTE
                        //console.log(sourceData);
                        //var calculateAPPN = $POMAllocationService.calculateAPPN(sourceData[bos], root);//Calculate APPN

                        
                        console.log(sourceData);
                        console.log('Session Storage Length: ' + sessionStorage.length);








                    });

                    








                });


                jQuery("#key4").on( "click", "input", function(e) {//Key 4
                    console.log('from key 4')   
      
                    e.stopPropagation();
                    var checked = jQuery(this).is(":checked");
                    var bos = jQuery("#bos option:selected").text();
                    var key4 = e.currentTarget.className;


                    //Get Source Data
                    var sourceData = $SourceDataDOMService.getItem();  
                    console.log(sourceData);










  







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

                    //Get Source Data
                    var sourceData = $SourceDataDOMService.getItem();  
                    console.log(sourceData);
                    console.log('Session Storage Length: ' + sessionStorage.length);

                    





                });



                jQuery("#saveprogram").click(function(e) {//UPDATE PROGRAM
                    e.stopPropagation();
                    //console.log('program updated');


                });


           

        });// $( document ).ready();





    }
    catch(e){
        console.log(e);
    }
    
    

}]);//UserSelectCtrl
