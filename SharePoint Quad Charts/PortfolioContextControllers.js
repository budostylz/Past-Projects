
/*** PageLoadCtrl ***/
angular.module('app').controller('PageLoadCtrl', ['$q', 'PageLoadService','$cacheFactory','ProgramService', 'GetItemsService','SourceDataDOMService', function ($q, $PageLoadService, $cacheFactory, $ProgramService, $GetItemsService, $SourceDataDOMService) {

    


    
    try{


                   console.log('page load')


                   var vm = this; //view model

                   //URL Query String

                   var qStr1 = location.search.split('=')[1];
                   var qStr2 = qStr1.split(',');

                   var program = qStr2[0].replace(/%20/g, ' ');
                   console.log(program);

                   

                  //Program Item
                   var programUrl = $GetItemsService.programUrl(program); 
                   var programItem = $GetItemsService.getItems(programUrl); 


                  //FY Item
                    var fyUrl = $GetItemsService.FYUrl();
                    var fyItems = $GetItemsService.getItems(fyUrl);//FY Items

                  //Portfolio Image Url Item
                   var programPortfolioContextImageUrl = $GetItemsService.ProgramPortfolioContextImagesUrl(program); 
                   var programPortfolioContextImageItem = $GetItemsService.getItems(programPortfolioContextImageUrl);

                  //Portfolio Overview
                    var ProgramPortfolioOverviewUrl = $GetItemsService.ProgramPortfolioOverviewUrl(program); 
                    var ProgramPortfolioOverviewItem = $GetItemsService.getItems(ProgramPortfolioOverviewUrl);

                                        
                  //Program Capability Image Items
                    var programCapabilityImageUrl = $GetItemsService.ProgramCapabilityImagesUrl(program); 
                    var programCapabilityImageItem = $GetItemsService.getItems(programCapabilityImageUrl);  

                   
                  //Portfolio Key Capabilities
                    var ProgramKeyCapabilitiesUrl = $GetItemsService.ProgramPortfolioKeyCapabilitiesUrl(program); 
                    var ProgramPortfolioCapabilitiesItem = $GetItemsService.getItems(ProgramKeyCapabilitiesUrl);
                   
                   
                  //Portfolio Plan
                    var ProgramPortfolioPlanUrl = $GetItemsService.ProgramPortfolioPlanUrl(program); 
                    var ProgramPortfolioPlanItem = $GetItemsService.getItems(ProgramPortfolioPlanUrl);
                   
        

                   

                   AllData = $q.all([
                           fyItems,
                           programItem,
                           programPortfolioContextImageItem,
                           ProgramPortfolioOverviewItem,
                           ProgramPortfolioCapabilitiesItem,
                           ProgramPortfolioPlanItem,
                           programCapabilityImageItem


                   ]);

                     AllData.then(function (allData) {
                         

                        console.log(allData);
                        vm.FYs = (allData[0]) ? (allData[0]) : "";
                        vm.bos = (allData[1].length > 0) ? (allData[1][0].BOS) : "";
                        vm.portfolio = (allData[1].length > 0) ? (allData[1][0].Portfolio) : "";
                        vm.roots = (allData[1].length > 0) ? (allData[1][0].progRoot) : "";
                        vm.key4 = (allData[1].length > 0) ? (allData[1][0].progkey4) : "";
                        vm.LINs = (allData[1].length > 0) ? (allData[1][0].progLIN) : "";
                        vm.portfolioContextPics = (allData[2]) ?  (allData[2]) : "";
                        vm.portfolioOverview = (allData[3].length > 0) ? (allData[3][0]) : "";
                        vm.portfolioKeyCapabilities = (allData[4].length > 0) ? (allData[4][0]) : "";
                        vm.portfolioPlan = (allData[5].length > 0) ? (allData[5][0]) : "";
                        vm.capabilityPics = (allData[6].length > 0) ? (allData[6]) : "";


                        //console.log(vm.bos);
                        

                        

                        //Build Source Data
                        var clearStorage = $SourceDataDOMService.clearStorage(); 
                        var sourceData = $SourceDataDOMService.addProgramItem('Program', vm.bos, vm.portfolio, program, vm.roots, vm.FYs);
                        sourceData = $SourceDataDOMService.getItem(); 


                        //Download
                        jQuery('#currentQuadName').append('Program');
                        jQuery('#currentProgramBOS').append(vm.bos);
                        jQuery('#currentProgramName').append(program);
                        jQuery('#currentProgramRoot').append(vm.roots);
                        jQuery('#currentProgramKey4').append(vm.key4);
                        jQuery('#currentProgramLIN').append(vm.LINs);

                        var downloadPortfolioContextPics = (vm.portfolioContextPics.length > 0 ) ? $ProgramService.downloadPortfolioContextPics(vm.portfolioContextPics) : "";
                        var downloadPortfolioOverview = ( allData[3].length > 0) ? $ProgramService.downloadPortfolioOverview(vm.portfolioOverview) : ""; 
                        var downloadPortfolioKeyCapabilities = ( allData[4].length > 0) ? $ProgramService.downloadPortfolioKeyCapabilities(vm.portfolioKeyCapabilities) : "";
                        var downloadPortfolioPlan = ( allData[5].length > 0 ) ? $ProgramService.downloadPortfolioPlan(vm.portfolioPlan) : "";
                        var downloadCapabilityPics = (vm.capabilityPics.length > 0) ? $ProgramService.downloadCapabilityPics(vm.capabilityPics) : ""; 



                        console.log(sourceData)

                        




                   });//AllData

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
                var area = sourceData["Area"];
                var bos = sourceData["BOS"];
                var program = sourceData["Program"];
                //console.log('Program LOAD')
                //console.log(sourceData)
                //console.log(program);

                jQuery("#update-portfolio-overview").click(function(e) {

                    update('portfolio-overview');





                });//update-portfolio-overview

                jQuery("#update-key-capabilities").click(function(e) {

                    update('key-capabilities');




                });//update-key-capabilities

                jQuery("#update-portfolio-plan").click(function(e) {

                    update('portfolio-plan');




                });//update-portfolio-plan



                jQuery("#ADDPORTFOLIOPIC").click(function(e) {

                    var ctx = _spPageContextInfo.webAbsoluteUrl 
                    var url = ctx + "/_layouts/Upload.aspx?List=1BB743DA-8691-47C7-B433-B848A57894AD";
                    window.open(url, '_blank');

                    
                    

                });//ADDPORTFOLIOPIC

                jQuery("#DELETEPORTFOLIOPIC").click(function(e) {

                    var ctx = _spPageContextInfo.webAbsoluteUrl;
                    var url = ctx + '/PORTFOLIOCONTEXTIMAGES1/Forms/AllItems.aspx#InplviewHashae7642f2-aa75-41f2-8461-8fd7e193dfc8=FilterField1=Title-FilterValue1='+program+'';
                    window.open(url, '_blank');
                    
                    

                });//DELETEPORTFOLIOPIC






                function update(id){

                    try{

                        console.log('update')
                        console.log(program);


                        //Portfolio Overview
                        var ProgramPortfolioOverviewUrl = $GetItemsService.ProgramPortfolioOverviewUrl(program); 
                        var ProgramPortfolioOverviewItem = $GetItemsService.getItems(ProgramPortfolioOverviewUrl);

                        //Portfolio Key Capabilities
                        var ProgramKeyCapabilitiesUrl = $GetItemsService.ProgramPortfolioKeyCapabilitiesUrl(program); 
                        var ProgramPortfolioCapabilitiesItem = $GetItemsService.getItems(ProgramKeyCapabilitiesUrl);


                        //Portfolio Plan
                        var ProgramPortfolioPlanUrl = $GetItemsService.ProgramPortfolioPlanUrl(program); 
                        var ProgramPortfolioPlanItem = $GetItemsService.getItems(ProgramPortfolioPlanUrl);



                            AllData = $q.all([
                                ProgramPortfolioOverviewItem,
                                ProgramPortfolioCapabilitiesItem,
                                ProgramPortfolioPlanItem
     
                            ]);


                            AllData.then(function (allData) {

                                console.log(allData)

                                if(id === 'portfolio-overview'){

                                    vm.ProgramReq = allData[0];
                                    vm.ReqID = allData[0][0].ID || allData[0][0].Id;

                                    console.log(id)
                                    console.log(vm.ProgramReq)
                                    console.log(vm.ReqID)      
                                    
                                    var updatePortfolioOverview = $ProgramService.updatePortfolioOverview(area, bos, program, vm.ReqID,'PORTFOLIOOVERVIEW1');                 


                                }else if(id === 'key-capabilities'){

                                    vm.ProgramReq = allData[0];
                                    vm.ReqID = allData[1][0].ID || allData[1][0].Id;

                                    console.log(id)
                                    console.log(vm.ProgramReq)
                                    console.log(vm.ReqID)      
                                    
                                    var updatePortfolioKeyCapabilities = $ProgramService.updatePortfolioKeyCapabilities(area, bos, program, vm.ReqID,'PORTFOLIOKEYCAPABILITIES1');                 




                                }else if(id === 'portfolio-plan'){

                                    vm.ProgramReq = allData[0];
                                    vm.ReqID = allData[2][0].ID || allData[2][0].Id;

                                    console.log(id)
                                    console.log(vm.ProgramReq)
                                    console.log(vm.ReqID)      
                                    
                                    var updatePortfolioPlan = $ProgramService.updatePortfolioPlan(area, bos, program, vm.ReqID,'PORTFOLIOPLAN1');                 



                                }

                                console.log(sourceData);


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
