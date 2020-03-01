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
                   var area = qStr2[0].replace('%20', ' ');
                   var bos = qStr2[1].replace('%20', ' ');
                   var program = qStr2[2].replace('%20', ' ');
                   console.log(area + ' : ' + bos + ' : ' + program);



  

                      var vm = this; //view model

                    //Program Item
                      var programUrl = $GetItemsService.programUrl(program); 
                      var programItem = $GetItemsService.getItems(programUrl); 
                   

                    //FY Url
                      var fyUrl = $GetItemsService.FYUrl();
                      var fyItems = $GetItemsService.getItems(fyUrl);//FY Items

                    //BOSRoot Url
                      var rootUrl = $GetItemsService.bosUrl2(bos);
                      var getRootItems = $GetItemsService.getItems(rootUrl);//BOS Root Items


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


                  

                      var rootData = $q.all([   
                        fyItems,
                        programItem,
                        getRootItems,
                        rdteItem,
                        procItem,
                        otherItem,
                        totalItem,
                        quantityItem,
                        deepDiveItem,
                        MYCFloorUrlItem

                        

                      ]);

                      

                      rootData.then(function (_rootData) {//Source Data


                            console.log(_rootData);

                            vm.fys = (_rootData[0]) ? (_rootData[0]) : "";                  
                            vm.roots = (_rootData[1].length > 0) ? (_rootData[1][0].progRoot) : "";
                            vm.key4 = (_rootData[1].length > 0) ? (_rootData[1][0].progkey4) : "";
                            vm.LINs = (_rootData[1].length > 0) ? (_rootData[1][0].progLIN) : "";
                            vm.BOSRootItems = (_rootData[2].length) ? _rootData[2] : ""; 
                            vm.RDTE = (_rootData[3].length > 0) ?  (_rootData[3][0]) : "";
                            vm.PROC = (_rootData[4].length > 0) ?  (_rootData[4][0]) : "";
                            vm.OTHER = (_rootData[5].length > 0) ?  (_rootData[5][0]) : "";
                            vm.TOTAL = (_rootData[6].length > 0) ?  (_rootData[6][0]) : "";
                            vm.QUANTITY = (_rootData[7].length > 0) ?  (_rootData[7][0]) : "";
                            vm.DEEPDIVE = (_rootData[8].length > 0) ?  (_rootData[8][0]) : "";
                            vm.MYCFLOOR = (_rootData[9].length > 0) ?  (_rootData[9][0]) : "";
    
        
                            //Distinct Roots
                            var rootdb = TAFFY(vm.BOSRootItems); 
                            vm.source_roots  = rootdb().distinct('Root'); 


                            //Load Source Data
                            var loadBOS = $SourceDataDOMService.BOSDOM([bos]);
                            var loadRoot = $SourceDataDOMService.RootDOM(vm.source_roots);

                            //Build Source Data
                            var clearStorage = $SourceDataDOMService.clearStorage(); 
                            var sourceData = $SourceDataDOMService.addProgramItem(area, bos, program, vm.roots, vm.fys);
                            sourceData = $SourceDataDOMService.getItem();  

                            //Download Program Properties
                            var downloadProgramProperties = (_rootData[1].length > 0 ) ? $ProgramService.downloadProgram(area, bos, program, "", "", "") : "";


                            //Download POM Allo
                            var downloadRDTE = (_rootData[3].length > 0) ? $ProgramService.downloadProgramPOMAllo(vm.RDTE, vm.fys, 'rdtefy', 'rdtePOMPeriod') : "";  
                            var downloadPROC = (_rootData[4].length > 0) ? $ProgramService.downloadProgramPOMAllo(vm.PROC, vm.fys, 'procfy', 'procPOMPeriod') : "";  
                            var downloadOTHER = (_rootData[5].length > 0) ? $ProgramService.downloadProgramPOMAllo(vm.OTHER, vm.fys, 'otherfy', 'otherPOMPeriod') : ""; 
                            var downloadTOTAL = ( _rootData[6].length > 0 ) ? $ProgramService.downloadProgramPOMAllo(vm.TOTAL, vm.fys, 'totalfy', 'totalPOMPeriod') : ""; 
                            var downloadQUANTITY = ( _rootData[7].length > 0  ) ? $ProgramService.downloadProgramPOMAllo(vm.QUANTITY, vm.fys, 'quantityfy', 'quantityPOMPeriod')  : ""; 
                            var downloadDEEPDIVE = ( _rootData[8].length > 0 ) ? $ProgramService.downloadProgramPOMAllo(vm.DEEPDIVE, vm.fys, 'deepdivefy', 'deepdivePOMPeriod') : ""; 
                            var downloadMYCFLOOR = ( _rootData[9].length > 0 ) ? $ProgramService.downloadProgramPOMAllo(vm.MYCFLOOR, vm.fys, 'mycfloorfy', 'mycfloorPOMPeriod')  : ""; 


                            console.log(sourceData);
                            console.log('Session Storage Length: ' + sessionStorage.length);



                      });//rootData



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





                /*HANDLERS*/


                jQuery("#roots").on( "click", "input", function(e) {//ROOTS

                    var vm = this; //view model
                    var sourceData = $SourceDataDOMService.getItem(); 
        
                    console.log('from root');
                    
                    jQuery('#Key4Label').empty();
                    jQuery('.POMAllocTable').val('');
                    var checked = jQuery(this).is(":checked");
                    var root = this.value;

                  //FY Url
                   var fyUrl = $GetItemsService.FYUrl();
                   var fyItems = $GetItemsService.getItems(fyUrl);

                  //BOS Root
                   var bosRootUrl = $GetItemsService.BOSRootUrl(bos, root);
                   var BOSRootItems = $GetItemsService.getItems(bosRootUrl);


                  //LINs
                   var LINUrl = $GetItemsService.LINUrl(bos, root);
                   var LINItems = $GetItemsService.getItems(LINUrl);



                   var bosRootSourceData = $q.all([
                       fyItems,
                       BOSRootItems,
                       LINItems
                    ]);



                    

                    




                    bosRootSourceData.then(function (bosRootData) {//BOS-ROOT SOURCE DATA

                        console.log(bosRootData)
                        console.log(bos + ' : ' + root)
                        

                        
                        vm.fys = bosRootData[0];
                        vm.BOSRoot = bosRootData[1];
                        vm.LINs = bosRootData[2];
                                                


                        //Distinct Key 4s and LINS
                        var key4DB = TAFFY(vm.BOSRoot); 
                        var LINDB = TAFFY(vm.LINs); 
                        //vm.key4s = key4DB().distinct('OData__x006b_ey4');//USE  SITE COLUMN INSTEAD - MILTECH
                        vm.key4s = key4DB().distinct('OData__x004b_ey4');//USE  SITE COLUMN INSTEAD - O365
                        vm.LINArr = LINDB().distinct('LINOUT');

                        //console.log(vm.key4s)
                        //console.log(vm.LINs)
                        
                        

                        if(checked){

                            
                            

                            
                            var changeRoot = $SourceDataDOMService.changeRoot(sourceData, bos, root, checked, vm.fys);
                            var createAPPN = $SourceDataDOMService.createProgramAPPN(sourceData, bos, root, vm.BOSRoot, vm.fys);//set Appropriations framework
                            var createDeepDive = $SourceDataDOMService.createProgramDeepDive(sourceData, bos, root, vm.BOSRoot, vm.fys);//set Deep Dive framework
                            var createQuantity = $SourceDataDOMService.createQuantity(sourceData, bos, root, vm.LINs, vm.LINArr, vm.fys);//set Quantity framework
                            var createRootInventory = $SourceDataDOMService.createRootInventory(sourceData, bos, root, vm.LINs, vm.LINArr, vm.fys);//set Root Inventory


                            
    
                            //Set Key4-LIN DOM(Source)
                            var rdteKey4s = $SourceDataDOMService.Key4DOM(vm.key4s, root, sourceData[bos]['SelectedRoots'][root]['RDTE']['Key4s'], checked);//set RDTE Key 4  
                            var procKey4s = $SourceDataDOMService.Key4DOM(vm.key4s, root, sourceData[bos]['SelectedRoots'][root]['PROC']['Key4s'], checked);//set PROC Key 4
                            var otherKey4s = $SourceDataDOMService.Key4DOM(vm.key4s, root, sourceData[bos]['SelectedRoots'][root]['OTHER']['Key4s'], checked);//set OTHER Key 4
                            var setLINs = $SourceDataDOMService.LINDOM(vm.LINs, root, sourceData[bos]['SelectedRoots'][root]['Quantity']['LINs'], checked);//set LIN DOM


                            
                            
                            //Set POM Allocation DOM
                            var setRDTE = $SourceDataDOMService.APPNDOM(sourceData[bos]['RDTE'], vm.fys, 'rdtefy', 'rdtePOMPeriod');
                            var setPROC = $SourceDataDOMService.APPNDOM(sourceData[bos]['PROC'], vm.fys, 'procfy', 'procPOMPeriod');
                            var setOTHER = $SourceDataDOMService.APPNDOM(sourceData[bos]['OTHER'], vm.fys, 'otherfy', 'otherPOMPeriod');
                            var setTOTAL = $SourceDataDOMService.APPNDOM(sourceData[bos]['TOTAL'], vm.fys, 'totalfy', 'totalPOMPeriod');

                            



                        }else{



                            var resetAPPN = $SourceDataDOMService.resetAPPNs_Key4s_Quantity_Inventories(sourceData, bos, root, vm.fys);//reset appropriations, key4s, Quantities, Inventories

                            var rdteKey4s = $SourceDataDOMService.Key4DOM(vm.key4s, root, sourceData[bos]['SelectedRoots'][root]['RDTE']['Key4s'], checked);//set RDTE Key 4  
                            var procKey4s = $SourceDataDOMService.Key4DOM(vm.key4s, root, sourceData[bos]['SelectedRoots'][root]['PROC']['Key4s'], checked);//set PROC Key 4
                            var otherKey4s = $SourceDataDOMService.Key4DOM(vm.key4s, root, sourceData[bos]['SelectedRoots'][root]['OTHER']['Key4s'], checked);//set OTHER Key 4

                            var setLINs = $SourceDataDOMService.LINDOM(vm.LINs, root, sourceData[bos]['SelectedRoots'][root]['Quantity']['LINs'], checked);//set LIN DOM

                            
                            var changeRoot = $SourceDataDOMService.changeRoot(sourceData, bos, root, checked, vm.fys);



                            var setRDTE = $SourceDataDOMService.APPNDOM(sourceData[bos]['RDTE'], vm.fys, 'rdtefy', 'rdtePOMPeriod');
                            var setPROC = $SourceDataDOMService.APPNDOM(sourceData[bos]['PROC'], vm.fys, 'procfy', 'procPOMPeriod');
                            var setOTHER = $SourceDataDOMService.APPNDOM(sourceData[bos]['OTHER'], vm.fys, 'otherfy', 'otherPOMPeriod');
                            var setTOTAL = $SourceDataDOMService.APPNDOM(sourceData[bos]['TOTAL'], vm.fys, 'totalfy', 'totalPOMPeriod');

                            
                            //var setDeepDive = $SourceDataDOMService.DEEPDIVEDOM(bos, sourceData, vm.FYs);//set DEEPDIVEDOM DOM
                            //var setQuantity = $SourceDataDOMService.QUANTITYDOM(bos, sourceData, vm.FYs);//set QuantityDOM

                            var changeRoot = $SourceDataDOMService.changeRoot(sourceData, bos, root, checked, vm.FYs);


                            
                            
                            
                            

                            



                        }


                        
                        

                        console.log(sourceData);
                        console.log('Session Storage Length: ' + sessionStorage.length);




                    });

                    








                });


                jQuery("#key4").on( "click", "input", function(e) {//Key 4
                    console.log('from key 4s') ; 

                    var vm = this; //view model
                    var sourceData = $SourceDataDOMService.getItem(); 
        
      
                    e.stopPropagation();
                    var checked = jQuery(this).is(":checked");
                    var key4 = e.currentTarget.className;
                    var root = jQuery('.'+key4+'root').text();

                    //FY Url
                    var fyUrl = $GetItemsService.FYUrl();
                    var fyItems = $GetItemsService.getItems(fyUrl);

                    var bosRootSourceData = $q.all([fyItems]);

                    bosRootSourceData.then(function (fyData) {//BOS-ROOT SOURCE DATA

                        //console.log(fyData);
                        vm.FYs = fyData[0];

                        var sourceData = $SourceDataDOMService.getItem();//Get Source Data
                        var setKey4Allo = $SourceDataDOMService.loadKey4Allo(bos, root, key4, sourceData, vm.FYs, checked);//set Key4 Allo DOM                   
                        //var defineKey4 = $SourceDataDOMService.defineKey4s(bos, key4, sourceData, vm.FYs, checked);//define Key 4s for allocation
                        var changeKey4 = $SourceDataDOMService.changeKey4(bos, key4, sourceData, checked);//set array


                        //console.log(sourceData);
                        //console.log('Session Storage Length: ' + sessionStorage.length);



                        console.log(sourceData);



                    });




                });


                jQuery("#LIN").on( "click", "input", function(e) {//LIN
                    console.log('from LIN')  

                    var vm = this; //view model
                    var sourceData = $SourceDataDOMService.getItem(); 
                    e.stopPropagation();

                    var checked = jQuery(this).is(":checked");
                    var LIN = e.currentTarget.className;
                    var root = jQuery('.'+LIN+'root').text();
                   //FY Url
                    var fyUrl = $GetItemsService.FYUrl();
                    var fyItems = $GetItemsService.getItems(fyUrl);
                    
                   //AAO SACS
                    var AAOSACSUrl = $GetItemsService.AAOSACSUrl(bos, LIN);
                    var AAOSACItems = $GetItemsService.getItems(AAOSACSUrl);

                   //AAO Inventory
                    var AAOINVENTORYUrl = $GetItemsService.AAOINVENTORYURL(LIN);
                    var AAOInventoryItems = $GetItemsService.getItems(AAOINVENTORYUrl);

                    var LIN_Data = $q.all([fyItems, AAOSACItems, AAOInventoryItems]);

                    //console.log(AAOSACSUrl)
                    //console.log(AAOINVENTORYUrl)

                    //console.log(root)

                    LIN_Data.then(function (LINData) {//BOS-ROOT SOURCE DATA

                        //console.log(LINData);
                        vm.FYs = LINData[0];
                        vm.SACS = LINData[1];
                        vm.Inventory = LINData[2];

                        


                        //console.log(bos)
                        
                        
                        var sourceData = $SourceDataDOMService.getItem(); //Get Source Data
                        var defineLIN = $SourceDataDOMService.defineQuantity(bos, root, LIN, sourceData, vm.FYs, checked);//define LINs for allocation
                        var defineAAOAPO = $SourceDataDOMService.defineAAOAPO(bos, root, LIN, vm.SACS, vm.Inventory, sourceData, checked);//define APO/AAO
                        var setLINAllo = $SourceDataDOMService.loadLINAllo(bos, root, LIN, sourceData, vm.FYs, checked);//set LIN DOM
                        var changeLIN = $SourceDataDOMService.changeLIN(bos, LIN, sourceData, checked);//set array
                        var setQuantity = $SourceDataDOMService.QUANTITYDOM(bos, sourceData, vm.FYs);//set QuantityDOM

                        console.log(sourceData);
                        console.log('Session Storage Length: ' + sessionStorage.length);

                        

 
                    });

                });


                jQuery("#key4Allo").on( "click", ".blackbutton", function(e) {//Key4AlloModalDisplay


                    e.stopPropagation();

                    var vm = this; //view model
                    var sourceData = $SourceDataDOMService.getItem();     
                    var key4 = e.currentTarget.id;
                    var text = e.currentTarget.textContent;
                    var root = jQuery('#'+key4+'rowDisp').children()[0].innerText;
                    var alloFYs = [parseInt(jQuery('#fy19'+key4)[0].value) || 0,
                                parseInt(jQuery('#fy20'+key4)[0].value) || 0,
                                parseInt(jQuery('#fy21'+key4)[0].value) || 0,
                                parseInt(jQuery('#fy22'+key4)[0].value) || 0,
                                parseInt(jQuery('#fy23'+key4)[0].value) || 0,
                                parseInt(jQuery('#fy24'+key4)[0].value) || 0,
                                parseInt(jQuery('#fy25'+key4)[0].value) || 0
                            ];

                    var alloSum = math.sum(alloFYs);
                    var fyUrl = $GetItemsService.FYUrl();//FY Urls
                    var fyItems = $GetItemsService.getItems(fyUrl);//FY Items
                    var fys = $q.all([fyItems]);
                    


                    //var setModal = $SourceDataDOMService.loadKey4AlloModal(key4); 

                    


                    fys.then(function (fyData) {//BOS-ROOT SOURCE DATA


                            //Get Source Data
                            var sourceData = $SourceDataDOMService.getItem(); 
                            vm.fys = fyData[0];

                            if(text === 'Allocate'){

                                //console.log('Allocate');
                                //console.log(alloFYs);
                                //console.log(alloSum)


                                
                                //var modal = $SourceDataDOMService.loadKey4AlloModal(sourceData, key4); *** INCLUDE IN UPDATES ***
                                var key4Split = $SourceDataDOMService.key4Split(bos, root, key4, sourceData, vm.fys, alloFYs, alloSum, 'SPLIT');
       
                                var setRDTE = $SourceDataDOMService.APPNDOM(sourceData[bos]['RDTE'], vm.fys, 'rdtefy', 'rdtePOMPeriod');
                                var setPROC = $SourceDataDOMService.APPNDOM(sourceData[bos]['PROC'], vm.fys, 'procfy', 'procPOMPeriod');
                                var setOTHER = $SourceDataDOMService.APPNDOM(sourceData[bos]['OTHER'], vm.fys, 'otherfy', 'otherPOMPeriod');
                                var setTOTAL = $SourceDataDOMService.APPNDOM(sourceData[bos]['TOTAL'], vm.fys, 'totalfy', 'totalPOMPeriod');


                            }else if(text === 'Reset'){
                                //console.log('Reset')
                                //console.log(alloSum)

                                
                                var key4Reset = $SourceDataDOMService.key4Split(bos, root, key4, sourceData, vm.fys, alloFYs, alloSum, 'RESET');
                                var setRDTE = $SourceDataDOMService.APPNDOM(sourceData[bos]['RDTE'], vm.fys, 'rdtefy', 'rdtePOMPeriod');
                                var setPROC = $SourceDataDOMService.APPNDOM(sourceData[bos]['PROC'], vm.fys, 'procfy', 'procPOMPeriod');
                                var setOTHER = $SourceDataDOMService.APPNDOM(sourceData[bos]['OTHER'], vm.fys, 'otherfy', 'otherPOMPeriod');
                                var setTOTAL = $SourceDataDOMService.APPNDOM(sourceData[bos]['TOTAL'], vm.fys, 'totalfy', 'totalPOMPeriod');
                                //var setDeepDive = $SourceDataDOMService.DEEPDIVEDOM(bos, sourceData, vm.FYs);//set DEEPDIVEDOM DOM


                            }




                            console.log(sourceData);
                            console.log('Session Storage Length: ' + sessionStorage.length);
    




                    });


                        
                    


                });



                jQuery("#distModal").click(function(e) {//Modal

                    console.log(e);
                    e.stopPropagation();

                    var vm = this; //view model
                    var sourceData = $SourceDataDOMService.getItem(); 


                    var loadInventoryModal = $SourceDataDOMService.loadInventoryModal(sourceData[bos]['Inventory']);




                });



                



                jQuery("#updateProgram").click(function(e) {//UPDATE PROGRAM

                    e.stopPropagation();

                    var vm = this; //view model
                    var sourceData = $SourceDataDOMService.getItem(); 
        



                    //Program Item
                    var programUrl = $GetItemsService.programUrl2(program); 
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
                        var updateProgramList = $ProgramService.updateProgram(area, bos, program, vm.programID, 'Programs1', sourceData);
                        var updateProgramRDTE = $SourceDataDOMService.updateProgramPOMAllo(area, bos, program, vm.rdteID, 'RDTE1', 'RDTE', sourceData, vm.fys);
                        var updateProgramPROC = $SourceDataDOMService.updateProgramPOMAllo(area, bos, program, vm.procID, 'PROC1', 'PROC', sourceData, vm.fys);
                        var updateProgramOTHER = $SourceDataDOMService.updateProgramPOMAllo(area, bos, program, vm.otherID, 'OTHER1', 'OTHER', sourceData, vm.fys);
                        var updateProgramTOTAL = $SourceDataDOMService.updateProgramPOMAllo(area, bos, program, vm.totalID, 'TOTAL1', 'TOTAL', sourceData, vm.fys);
                        var updateProgramQUANTITY = $SourceDataDOMService.updateProgramPOMAllo(area, bos, program, vm.quantityID, 'QUANTITY1', 'Quantity', sourceData, vm.fys);
                        var updateProgramDEEPDIVE = $SourceDataDOMService.updateProgramPOMAllo(area, bos, program, vm.deepdiveID, 'DEEPDIVE1', 'DEEPDIVE', sourceData, vm.fys);
                        var updateProgramMYCFLOOR = $SourceDataDOMService.updateProgramPOMAllo(area, bos, program, vm.mycFloorID, 'MYCFLOOR1', 'MYCFLOOR', sourceData, vm.fys);

                        

                        //UPDATE AAO, APO, RO INVENTORIES
                        var updateProgramAAO = $ProgramService.updateInventory(area, bos, program, vm.AAOPROGRAMID, 'PROGRAMAAO1', sourceData, 'AAO');
                        var updateProgramAPO = $ProgramService.updateInventory(area, bos, program, vm.APOPROGRAMID, 'PROGRAMAPO1', sourceData, 'APO');
                        var updateProgramRO = $ProgramService.updateInventory(area, bos, program, vm.ROPROGRAMID, 'PROGRAMRO1', sourceData, 'RO');


                        


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
