/**
 * 
    vm.key4s = key4DB().distinct('OData__x006b_ey4');//USE  SITE COLUMN INSTEAD - MILTECH
    vm.key4s = key4DB().distinct('OData__x004b_ey4');//USE  SITE COLUMN INSTEAD - O365

 */


/*** PageLoadCtrl ***/
angular.module('app').controller('PageLoadCtrl', ['$q', 'PageLoadService','$cacheFactory','ProgramService', 'GetItemsService','SourceDataDOMService', function ($q, $PageLoadService, $cacheFactory, $ProgramService, $GetItemsService, $SourceDataDOMService) {

    


    
    try{

        $( document ).ready(function() {

            console.log('Program Funding')

                    var qStr1 = location.search.split('=')[1];
                    var qStr2 = qStr1.split(',');
                    var programID = qStr2[0].replace(/%20/g, ' ');
                    var bos = qStr2[1].replace(/%20/g, ' ');
                    var vm = this; //view model


                     //Program Item
                     var programUrl = $GetItemsService.programIDUrl(bos, programID); 
                     var programItem = $GetItemsService.getItems(programUrl); 
                     var programData = $q.all([programItem]);



                     programData.then(function (_programData) {//Program Data

                        console.log('program data')
                        console.log(_programData);

                            vm.programName = _programData[0][0].Title;
                            vm.bos = _programData[0][0].BOS;
                            vm.portfolio = _programData[0][0].PORTFOLIO;
                            vm.programID = _programData[0][0].ProgramID;
                            vm.itemID = _programData[0][0].ID || _programData[0][0].Id;

                            console.log(vm.programID)

                            //FY Url
                            var fyUrl = $GetItemsService.FYUrl();
                            var fyItems = $GetItemsService.getItems(fyUrl);//FY Items

                            //BOSRoot Url
                            var rootUrl = $GetItemsService.BOSRootUrlDownload(bos, vm.programID);
                            var getRootItems = $GetItemsService.getItems(rootUrl);//BOS Root Items
                            console.log(rootUrl)

                            


                            var rootData = $q.all([   
                                fyItems,
                                getRootItems,
        
                                
        
                              ]);

                              
                              

                                rootData.then(function (_rootData) {//Root Data

                                    console.log('BOS Root Download');
                                    console.log(_rootData);
        
                                    
                                    vm.fys = _rootData[0];                
                                    vm.BOSRoot = _rootData[1];
                                    
                
                                    //Chew TAFFY
                                    var rootdb = TAFFY(vm.BOSRoot);

                                    //Distinct Roots 
                                    vm.source_roots  = rootdb().distinct('Root').sort();

                                    //Distinct Key 4s 
                                    var key4DB = TAFFY(vm.BOSRoot); 
                                    vm.key4s = key4DB().distinct('OData__x006b_ey4').sort();
                                    //console.log(vm.key4s);


                                    //console.log('Roots')
                                    //console.log( vm.source_roots )

        
                                    //Build Source Data
                                    var clearStorage = $SourceDataDOMService.clearStorage(); 
                                    var sourceData = $SourceDataDOMService.addProgramItem('Program', bos, vm.portfolio, vm.programName, vm.programID, vm.itemID, vm.roots, vm.fys);
                                    sourceData = $SourceDataDOMService.getItem();  

                                    //Set Appropriations Framework
                                    var createAPPN = $SourceDataDOMService.createProgramAPPN(sourceData, bos, vm.BOSRoot, vm.source_roots, vm.fys);//set Appropriations framework(Funded)    

                                    //Set Deep Dive Framework
                                    var createDeepDive = $SourceDataDOMService.createProgramDeepDive(sourceData, bos, vm.BOSRoot, vm.source_roots, vm.key4s, vm.fys);//set Deep Dive framework(key4)

                                    //Download Program Properties
                                    var downloadProgramProperties = $ProgramService.downloadProgram(vm.bos, vm.portfolio, vm.programName, vm.programID, "", "", "");

                                    //LOAD ROOT ROM
                                    var loadRoot = $SourceDataDOMService.RootDOM(vm.source_roots);

                                    console.log(sourceData);
                                    console.log('Session Storage Length: ' + sessionStorage.length);

                                    
        
        
        
                            });//rootData


                            

                            

                            
    



                       });

                       

                       
                       jQuery('#program-quad-navigation').change(function(e){

                        var sourceData = $SourceDataDOMService.getItem(); 
                        var area = sourceData.Area;
                        var bos = sourceData.BOS;
                        var program = sourceData.Program;
                        var programID = sourceData.ProgramID;

    
                        console.log(area + ' : ' + bos + ' : ' + program);
            
    
                        var ctx = _spPageContextInfo;
                        var select = jQuery(this).val();
                        var url = '';
                        
    
                        //console.log(ctx);
                        console.log(select)
        
                        /*if(select === 'PORTFOLIO CONTEXT'){
                            url = ctx.webAbsoluteUrl + '/Pages/collab1.aspx?program='+program+'';
                            //console.log( url )
                            window.open(url, '_blank');     
        
                        }else if(select === 'PORTFOLIO OVERVIEW'){
    
                            url = ctx.webAbsoluteUrl + '/Pages/collab2.aspx?program='+program+'';
                            //console.log( url )
                            window.open(url, '_blank');
    
                        }*/if(select === 'PROGRAM OVERVIEW'){
                            url = ctx.webAbsoluteUrl + '/Pages/collab3.aspx?programID='+programID+','+bos+'';
                           // console.log( url )
                            window.open(url, '_blank');
    
    
    
                        }else if(select === 'PROGRAM ASSESSMENT & RECOMMENDATION'){
                            url = ctx.webAbsoluteUrl + '/Pages/collab4.aspx?programID='+programID+','+bos+'';
                            //console.log( url )
                            window.open(url, '_blank');
    
    
                        }else if(select === 'FUNDING ALLOCATION'){
                            url = ctx.webAbsoluteUrl + '/Pages/ProgramFunding.aspx?programID='+programID+','+bos+'';
                            //console.log( url )
                            window.open(url, '_blank');
    
    
                        }else if(select === 'LIN ALLOCATION'){
                            url = ctx.webAbsoluteUrl + '/Pages/ProgramLINAllocation.aspx?programID='+programID+','+bos+'';
                            //console.log( url )
                            window.open(url, '_blank');
    
    
                        }else if(select === 'PRESENTATIONS'){
                            url = ctx.webAbsoluteUrl + '/Pages/quadPresentations.aspx'
                            console.log( url )
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




                /*HANDLERS*/


                jQuery("#roots").on( "click", "input", function(e) {//ROOTS
                    e.stopPropagation();

                    
                    var vm = this; //view model
                    var sourceData = $SourceDataDOMService.getItem(); 
                    var bos = sourceData.BOS;
                    var root = this.value;
                    var programID = sourceData.ProgramID;
                    var checked = jQuery(this).is(":checked");

                    console.log(bos + ' : ' + root + ' : ' + programID + ' : ' + checked);
                    console.log(sourceData);









                    


                });


                jQuery("#key4").on( "click", "input", function(e) {//Key 4
                    e.stopPropagation();
                    console.log('from key 4s') ; 


                    var vm = this; //view model
                    var sourceData = $SourceDataDOMService.getItem(); 
                    var area = sourceData.Area;
                    var bos = sourceData.BOS;
                    var program = sourceData.Program;   
                    var programID = sourceData.ProgramID; 
                    var checked = jQuery(this).is(":checked");
                    var key4 = e.currentTarget.className;
                    var root = jQuery('.'+key4+'root').text();
                    var selectedRoot = jQuery( e.currentTarget.parentNode ).attr('root');
                    var coorRootElem = jQuery('#roots').find("input[value='"+selectedRoot+"']");

                    console.log('Select Root ');
                    console.log(root);
                    //console.log('Disable Corresponding Root Checkbox');
                    //console.log( 'Selected Root: ' + selectedRoot);
                    //console.log(coorRootElem);

                    //FY Url
                    var fyUrl = $GetItemsService.FYUrl();
                    var fyItems = $GetItemsService.getItems(fyUrl);

                    //BOS Root
                    var bosRootUrl = $GetItemsService.BOSRootUrl(bos, root, programID);
                    var BOSRootItems = $GetItemsService.getItems(bosRootUrl);

                    //BOS Root
                    var getFundedUrl = $GetItemsService.BOSRootUrl2(bos, root, key4);
                    var fundedItems = $GetItemsService.getItems(getFundedUrl);

                    console.log(getFundedUrl);

                    //console.log('BOS: ' + bos);
                    //console.log(getFundedUrl);
                    //console.log(sourceData);
                    


                    //BOS Root URF
                    //var bosRootUFRUrl = $GetItemsService.BOSRootUFRUrl(bos, root);
                    //var BOSRootUFRItems = $GetItemsService.getItems(bosRootUFRUrl);


                    var bosRootSourceData = $q.all([fyItems, BOSRootItems, fundedItems/*,BOSRootUFRItems*/]);



                    bosRootSourceData.then(function (_rootData) {//BOS-ROOT SOURCE DATA

                        console.log(_rootData);
                        vm.fys = _rootData[0];
                        vm.Funded = _rootData[1];
                        vm.allFunded = _rootData[2];

                        var setKey4Allo = $SourceDataDOMService.loadKey4Allo(bos, selectedRoot, key4, sourceData, vm.fys, checked);//set Key4 Allo DOM    BUG LOCATED: 1.CLICK ROOT  2.CLICK KEY4 3.CLICK ROOT 4. CLICK KEY4             
                        var changeKey4 = $SourceDataDOMService.changeKey4(bos, selectedRoot, key4, sourceData, checked);//set array

                        //Assign Key 4s
                        var updateFunded = $SourceDataDOMService.updateFundedAssigned(bos, key4, vm.allFunded, programID, checked);

                        //Enable/Disable Root
                        var enableDisableRoot = $SourceDataDOMService.enableDisableRoot(bos, selectedRoot, coorRootElem, sourceData, checked);



                        //Set UFRs
                        //var createAPPNUFR = $SourceDataDOMService.createProgramAPPNUFR(sourceData, bos, root,  vm.Funded, vm.UFRs, key4, vm.fys);//set Appropriations framework(UFR)



                        console.log(sourceData);



                    });




                });




                jQuery("#key4Allo").on( "click", ".blackbutton", function(e) {//Key4AlloModalDisplay


                    e.stopPropagation();

                    
                    var vm = this; //view model
                    var sourceData = $SourceDataDOMService.getItem(); 
                    var bos = sourceData.BOS;
                    var program = sourceData.Program;

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


                    var test = isNaN( parseInt(jQuery('#fy19'+key4)[0].value) ) && jQuery('#fy19'+key4)[0].value !== '' || isNaN( parseInt(jQuery('#fy20'+key4)[0].value) ) && jQuery('#fy20'+key4)[0].value !== ''
                            || isNaN( parseInt(jQuery('#fy21'+key4)[0].value) ) && jQuery('#fy21'+key4)[0].value !== '' || isNaN( parseInt(jQuery('#fy22'+key4)[0].value) ) && jQuery('#fy22'+key4)[0].value !== ''
                            || isNaN( parseInt(jQuery('#fy23'+key4)[0].value) ) && jQuery('#fy23'+key4)[0].value !== '' || isNaN( parseInt(jQuery('#fy24'+key4)[0].value) ) && jQuery('#fy24'+key4)[0].value !== ''
                            || isNaN( parseInt(jQuery('#fy25'+key4)[0].value) ) && jQuery('#fy25'+key4)[0].value !== ''

                    console.log('SPLIT')
                    console.log(  test  )

                    if(!test){

                        var alloSum = math.sum(alloFYs);
                        var fyUrl = $GetItemsService.FYUrl();//FY Urls
                        var fyItems = $GetItemsService.getItems(fyUrl);//FY Items
                        var fys = $q.all([fyItems]);

                            fys.then(function (fyData) {//BOS-ROOT SOURCE DATA


                                //Get Source Data
                                sourceData = $SourceDataDOMService.getItem(); 
                                vm.fys = fyData[0];

                                if(text === 'Split'){

                                    //console.log('Allocate');
                                    //console.log(alloFYs);
                                    //console.log(alloSum)


                                    
                                    //var modal = $SourceDataDOMService.loadKey4AlloModal(sourceData, key4); *** INCLUDE IN UPDATES ***
                                    var key4Split = $SourceDataDOMService.key4Split(bos, root, key4, sourceData, vm.fys, alloFYs, alloSum, 'SPLIT');   
                                    var setRDTE = $SourceDataDOMService.APPNDOM(sourceData[bos]['RDTE'], vm.fys, 'rdtefy', 'rdtePOMPeriod');
                                    var setPROC = $SourceDataDOMService.APPNDOM(sourceData[bos]['PROC'], vm.fys, 'procfy', 'procPOMPeriod');
                                    var setOTHER = $SourceDataDOMService.APPNDOM(sourceData[bos]['OTHER'], vm.fys, 'otherfy', 'otherPOMPeriod');
                                    var setTOTAL = $SourceDataDOMService.APPNDOM(sourceData[bos]['TOTAL'], vm.fys, 'totalfy', 'totalPOMPeriod');
                                    var setDEEPDIVE = $SourceDataDOMService.APPNDOM(sourceData[bos]['DEEPDIVE'], vm.fys, 'deepdivefy', 'deepdivePOMPeriod');



                                }else if(text === 'Reset'){
                                    //console.log('Reset')
                                    //console.log(alloSum)

                                    
                                    var key4Reset = $SourceDataDOMService.key4Split(bos, root, key4, sourceData, vm.fys, alloFYs, alloSum, 'RESET');
                                    var setRDTE = $SourceDataDOMService.APPNDOM(sourceData[bos]['RDTE'], vm.fys, 'rdtefy', 'rdtePOMPeriod');
                                    var setPROC = $SourceDataDOMService.APPNDOM(sourceData[bos]['PROC'], vm.fys, 'procfy', 'procPOMPeriod');
                                    var setOTHER = $SourceDataDOMService.APPNDOM(sourceData[bos]['OTHER'], vm.fys, 'otherfy', 'otherPOMPeriod');
                                    var setTOTAL = $SourceDataDOMService.APPNDOM(sourceData[bos]['TOTAL'], vm.fys, 'totalfy', 'totalPOMPeriod');                    
                                    var setDEEPDIVE = $SourceDataDOMService.APPNDOM(sourceData[bos]['DEEPDIVE'], vm.fys, 'deepdivefy', 'deepdivePOMPeriod');


                                }

                                console.log(sourceData);
                                console.log('Session Storage Length: ' + sessionStorage.length);
        




                        });

    
                        
                    }//test
                    else{
                        alert('ENTER VALID DOLLARS');
                    }



                });



                jQuery("#key4AlloModal").click(function(e) {//Modal

                    console.log(e);
                    e.stopPropagation();

                    var vm = this; //view model
                    var sourceData = $SourceDataDOMService.getItem(); 
                    var bos = sourceData.BOS;
                    var program = sourceData.Program;

                    var POMAlloModal = $SourceDataDOMService.POMAllocationModal(bos, sourceData);
                   





                });



                



                jQuery("#updateProgram").click(function(e) {//UPDATE PROGRAM

                    e.stopPropagation();

                    var vm = this; //view model
                    var sourceData = $SourceDataDOMService.getItem(); 
                    var bos = sourceData.BOS;
                    var programID = sourceData.ProgramID;
                    var programItemID = sourceData.ItemID;
                    

        
                    //Source Data
                    //var BOSROOTKey4Url = $GetItemsService.BOSROOTKey4Url(bos, programID, sourceData);
                    //var BOSROOTKey4Items = $GetItemsService.getItems(BOSROOTKey4Url);

                    //FY Url
                    var fyUrl = $GetItemsService.FYUrl();
                    var fyItems = $GetItemsService.getItems(fyUrl);//FY Items

                    //POM Allo(calculations)
                    var rdteUrl = $GetItemsService.RDTEUrl(bos, programID); 
                    var procUrl = $GetItemsService.PROCUrl(bos, programID); 
                    var otherUrl = $GetItemsService.OtherUrl(bos, programID);
                    var totalUrl = $GetItemsService.TotalUrl(bos, programID); 
                    var deepDiveUrl = $GetItemsService.DeepDiveUrl(bos, programID); 

                    //var quantityUrl = $GetItemsService.QuantityUrl(program); 
                    //var MYCFloorUrl = $GetItemsService.MYCFloorUrl(program); 


                    var rdteItem = $GetItemsService.getItems(rdteUrl); 
                    var procItem = $GetItemsService.getItems(procUrl); 
                    var otherItem = $GetItemsService.getItems(otherUrl); 
                    var totalItem = $GetItemsService.getItems(totalUrl); 
                    var deepDiveItem = $GetItemsService.getItems(deepDiveUrl);
                    //var quantityItem = $GetItemsService.getItems(quantityUrl);
                    //var MYCFloorUrlItem = $GetItemsService.getItems(MYCFloorUrl); 

                   //AAO
                    //var ProgramAAOUrl = $GetItemsService.AAOProgramUrl(program);  
                    //var ProgramAAOItem = $GetItemsService.getItems(ProgramAAOUrl);

                   //APO
                    //var ProgramAPOUrl = $GetItemsService.APOProgramUrl(program);  
                    //var ProgramAPOItem = $GetItemsService.getItems(ProgramAPOUrl);

                   //RO
                    //var ProgramROUrl = $GetItemsService.ROProgramUrl(program);  
                    //var ProgramROItem = $GetItemsService.getItems(ProgramROUrl);






                    AllData = $q.all([
                            fyItems,
                            rdteItem,
                            procItem,
                            otherItem,
                            totalItem,
                            deepDiveItem
                            //BOSROOTKey4Items
                            //quantityItem,
                            //MYCFloorUrlItem,
                            //ProgramAAOItem,
                            //ProgramAPOItem,
                            ///ProgramROItem

                    ]);

                      AllData.then(function (allData) {
                          console.log(allData);
                        vm.fys = allData[0];
                        vm.rdteID = allData[1][0].ID || allData[1][0].Id;
                        vm.procID = allData[2][0].ID || allData[2][0].Id;
                        vm.otherID = allData[3][0].ID || allData[3][0].Id;
                        vm.totalID = allData[4][0].ID || allData[4][0].Id;
                        vm.deepdiveID = allData[5][0].ID || allData[5][0].Id;

                        //vm.quantityID = allData[6][0].ID || allData[6][0].Id;
                        //vm.mycFloorID = allData[8][0].ID || allData[8][0].Id;
                        //vm.AAOPROGRAMID = allData[9][0].ID || allData[9][0].Id;
                        //vm.APOPROGRAMID = allData[10][0].ID || allData[10][0].Id;
                        //vm.ROPROGRAMID = allData[11][0].ID || allData[11][0].Id;



                        //UPDATE PROGRAM & POM ALLOCATION LISTS
                        var updateProgramRDTE = $SourceDataDOMService.updateProgramPOMAllo(bos, vm.rdteID, 'RDTE_'+bos+'', 'RDTE', sourceData, vm.fys);
                        var updateProgramPROC = $SourceDataDOMService.updateProgramPOMAllo(bos, vm.procID, 'PROC_'+bos+'', 'PROC', sourceData, vm.fys);
                        var updateProgramOTHER = $SourceDataDOMService.updateProgramPOMAllo(bos, vm.otherID, 'OTHER_'+bos+'', 'OTHER', sourceData, vm.fys);
                        var updateProgramTOTAL = $SourceDataDOMService.updateProgramPOMAllo(bos, vm.totalID, 'TOTAL_'+bos+'', 'TOTAL', sourceData, vm.fys);
                        var updateProgramDEEPDIVE = $SourceDataDOMService.updateProgramPOMAllo(bos, vm.deepdiveID, 'DEEP_DIVE_'+bos+'', 'DEEPDIVE', sourceData, vm.fys);
                        var updateProgramList = $ProgramService.updateProgramKey4s(bos, programItemID, sourceData);

                        //var updateProgramQUANTITY = $SourceDataDOMService.updateProgramPOMAllo('Program', bos, program, vm.quantityID, 'QUANTITY1', 'Quantity', sourceData, vm.fys);
                        //var updateProgramMYCFLOOR = $SourceDataDOMService.updateProgramPOMAllo('Program', bos, program, vm.mycFloorID, 'MYCFLOOR1', 'MYCFLOOR', sourceData, vm.fys);

                        

                        //UPDATE AAO, APO, RO INVENTORIES
                        // updateProgramAAO = $ProgramService.updateInventory('Program', bos, program, vm.AAOPROGRAMID, 'PROGRAMAAO1', sourceData, 'AAO');
                        //var updateProgramAPO = $ProgramService.updateInventory('Program', bos, program, vm.APOPROGRAMID, 'PROGRAMAPO1', sourceData, 'APO');
                        //var updateProgramRO = $ProgramService.updateInventory('Program', bos, program, vm.ROPROGRAMID, 'PROGRAMRO1', sourceData, 'RO');


                        //UPDATE AUTHORITATIVE DATA VIA PROGRAM
                        


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
