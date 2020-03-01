
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
                      
  

                      //SOURCE DATA
                      var fyUrl = $GetItemsService.FYUrl();//FYs
                      var rootUrl = $GetItemsService.bosUrl2(bos);
                      var getRootItems = $GetItemsService.getItems(rootUrl);//BOS Root Items
                      var fyItems = $GetItemsService.getItems(fyUrl);//FY Items

                      var sourceData = $q.all([   
                        getRootItems,//0
                        fyItems//1

                      ]);

                      

                      sourceData.then(function (_sourceData) {//Source Data


                            //console.log(_sourceData);

                            vm.BOSRootItems = _sourceData[0]; //BOS Root Items
                            vm.fys = _sourceData[1];//FYs
                            
                            //Distinct Roots
                            var rootdb = TAFFY(vm.BOSRootItems); 
                            vm.rootArr  = rootdb().distinct('Root'); 

                            //console.log(vm.rootArr);

                            //Load Source Data
                            var loadBOS = $SourceDataDOMService.BOSDOM(vm.bosArr);
                            var loadRoot = $SourceDataDOMService.RootDOM(vm.rootArr);

                            //Build Source Data
                            var clearStorage = $SourceDataDOMService.clearStorage(); 
                            var sourceData = $SourceDataDOMService.addItem(bos, vm.rootArr, vm.fys);
                            sourceData = $SourceDataDOMService.getItem();  
                            console.log(sourceData);
                            console.log('Session Storage Length: ' + sessionStorage.length);


                            

                            


                      });//sourceData



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


                jQuery("#bos").change(function(e) {//BOS


                    console.log('from Portfolio');
                    jQuery('#key4').empty();
                    jQuery('#LIN').empty();
                    jQuery('#key4Table').empty();
                    jQuery('#LINTable').empty();
                    jQuery('#key4Table').append("<th style='text-align:left'>Key 4</th><th style='text-align:left'>Amount Available</th><th style='text-align:left'>Allocate Some</th><th style='text-align:left'>Allocate All</th>");
                    jQuery('#LINTable').append("<th style='text-align:left'>LIN</th><th style='text-align:left'>Amount Available</th><th style='text-align:left'>Allocate Some</th><th style='text-align:left'>Allocate All</th>");




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

                        //console.log(bosRootData)

                        vm.BOSRoot = bosRootData[0];
                        vm.FYs = bosRootData[1];
                        vm.LINs = bosRootData[2];
                                                

                        //Get Source Data
                        var sourceData = $SourceDataDOMService.getItem(); 

                        if(checked){
                            //console.log('Exists')

                            var changeRoot = $SourceDataDOMService.changeRoot(sourceData, bos, root, checked, vm.FYs);
                            var createAPPN = $SourceDataDOMService.createProgramAPPN(sourceData, bos, root, vm.BOSRoot, vm.FYs);//set Appropriations framework
                            var createDeepDive = $SourceDataDOMService.createProgramDeepDive(sourceData, bos, root, vm.BOSRoot, vm.FYs);//set Deep Dive framework
                            var createQuantity = $SourceDataDOMService.createQuantity(sourceData, bos, root, vm.LINs, vm.FYs);//set Quantity framework
    

                            
                            //Distinct Key 4s and LINS
                            var key4DB = TAFFY(vm.BOSRoot); 
                            var LINDB = TAFFY(vm.LINs); 
                            //vm.key4s = key4DB().distinct('OData__x006b_ey4');//MILTECH
                            vm.key4s = key4DB().distinct('OData__x004b_ey4');//O365
                            vm.LINs = LINDB().distinct('LINOUT');
    
    
                            //Set Key4-LIN DOM(Source)
                            var rdteKey4s = $SourceDataDOMService.Key4DOM(vm.key4s, root, sourceData[bos][root]['RDTE']['Key4s'], checked);//set RDTE Key 4  
                            var procKey4s = $SourceDataDOMService.Key4DOM(vm.key4s, root, sourceData[bos][root]['PROC']['Key4s'], checked);//set PROC Key 4
                            var otherKey4s = $SourceDataDOMService.Key4DOM(vm.key4s, root, sourceData[bos][root]['OTHER']['Key4s'], checked);//set OTHER Key 4

                            var setLINs = $SourceDataDOMService.LINDOM(vm.LINs, root, sourceData[bos][root]['Quantity']['LINs'], checked);//set LIN DOM

                            


                        }else{

                            //console.log('Do Not Exist')

                            var removeAPPN = $SourceDataDOMService.removeProgramAPPN(sourceData, bos, root, vm.BOSRoot, vm.FYs);//set Appropriations framework

                            var rdteKey4s = $SourceDataDOMService.Key4DOM(vm.key4s, root, sourceData[bos][root]['RDTE']['Key4s'], checked);//set RDTE Key 4  
                            var procKey4s = $SourceDataDOMService.Key4DOM(vm.key4s, root, sourceData[bos][root]['PROC']['Key4s'], checked);//set PROC Key 4
                            var otherKey4s = $SourceDataDOMService.Key4DOM(vm.key4s, root, sourceData[bos][root]['OTHER']['Key4s'], checked);//set OTHER Key 4

                            var setLINs = $SourceDataDOMService.LINDOM(vm.LINs, root, sourceData[bos][root]['Quantity']['LINs'], checked);//set LIN DOM

                            
                            //console.log('Do Not Exists')
                            var changeRoot = $SourceDataDOMService.changeRoot(sourceData, bos, root, checked, vm.FYs);

                        }

                        

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
                    var fyUrl = $GetItemsService.FYUrl();//FY Urls
                    var fyItems = $GetItemsService.getItems(fyUrl);//FY Items
                    var fys = $q.all([fyItems]);

                    fys.then(function (fyData) {//BOS-ROOT SOURCE DATA

                        //console.log(fyData);
                        vm.FYs = fyData[0];

                         //Get Source Data
                        var sourceData = $SourceDataDOMService.getItem(); 
                        //console.log(sourceData);
                        //console.log('Session Storage Length: ' + sessionStorage.length);
                        var setKey4Allo = $SourceDataDOMService.loadKey4Allo(sourceData, bos, key4, vm.FYs, checked);//set Key4 Allo DOM
                        

                        //console.log(sourceData);



                    });




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
 
                    });

                });

                jQuery("#key4Table").on( "focusout", "input", function(e) {//Key4Allo
                    e.stopPropagation();
                    var bos = jQuery("#bos option:selected").text();
                    var key4 = e.currentTarget.id;
                    var dollar = parseInt(e.currentTarget.value);


                    var fyUrl = $GetItemsService.FYUrl();//FY Urls
                    var fyItems = $GetItemsService.getItems(fyUrl);//FY Items
                    var fys = $q.all([fyItems]);

                    fys.then(function (fyData) {//BOS-ROOT SOURCE DATA

                        //console.log(fyData);
                        vm.FYs = fyData[0];

                         //Get Source Data
                        var sourceData = $SourceDataDOMService.getItem(); 



                        //if(!isNaN(dollar)){
                            var setKey4Allo = $SourceDataDOMService.allocateKey4(bos, key4, dollar, sourceData, vm.FYs);

                        //}else{
                            //alert("ENTER VALID DOLLAR AMOUNTS.");
                        //}

                        //console.log(key4);
                        //console.log(sourceData);
                            //console.log('Session Storage Length: ' + sessionStorage.length);
                        




                    });








                });


                jQuery("#LINTable").on( "focusout", "input", function(e) {//LINAllo
                    e.stopPropagation();
                    var bos = jQuery("#bos option:selected").text();
                    var LIN = e.currentTarget.id;
                    var dollar = parseInt(e.currentTarget.value);


                    var fyUrl = $GetItemsService.FYUrl();//FY Urls
                    var fyItems = $GetItemsService.getItems(fyUrl);//FY Items
                    var fys = $q.all([fyItems]);

                    fys.then(function (fyData) {//BOS-ROOT SOURCE DATA

                        //console.log(fyData);
                        //console.log(LIN);
                        //console.log(dollar);
                        vm.FYs = fyData[0];

                         //Get Source Data
                        var sourceData = $SourceDataDOMService.getItem(); 



                        //if(!isNaN(dollar)){
                          var setLINAllo = $SourceDataDOMService.allocateLIN(bos, 'AIR/MSL DEFENSE C2 SYSTEMS', LIN, dollar, sourceData, vm.FYs);

                        //}else{
                            //alert("ENTER VALID DOLLAR AMOUNTS.");
                        //}

                        //console.log(key4);
                        //console.log(sourceData);
                            //console.log('Session Storage Length: ' + sessionStorage.length);
                        




                    });








                });




                jQuery("#updateProgram").click(function(e) {//UPDATE PROGRAM

                    e.stopPropagation();

                    var vm = this; //view model


                });


           

        });// $( document ).ready();





    }
    catch(e){
        console.log(e);
    }
    
    

}]);//UserSelectCtrl
