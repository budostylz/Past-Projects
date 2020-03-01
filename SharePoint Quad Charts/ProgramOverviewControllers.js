
/*** PageLoadCtrl ***/
angular.module('app').controller('PageLoadCtrl', ['$q', 'PageLoadService','$cacheFactory','ProgramService', 'GetItemsService','SourceDataDOMService', function ($q, $PageLoadService, $cacheFactory, $ProgramService, $GetItemsService, $SourceDataDOMService) {

    


    
    try{


                   console.log('page load1')

                   $( document ).ready(function() {






                        var qStr1 = location.search.split('=')[1];
                        var qStr2 = qStr1.split(',');
                        var programID = qStr2[0].replace(/%20/g, ' ');
                        var bos = qStr2[1].replace(/%20/g, ' ');
                        var vm = this; //view model

                        console.log(programID + ' : ' + bos);


                        /*
         
                        //Program Item
                            var programUrl = $GetItemsService.programUrl(program); 
                            var programItem = $GetItemsService.getItems(programUrl); 
        
        
                        //FY Url
                            var fyUrl = $GetItemsService.FYUrl();
                            var fyItems = $GetItemsService.getItems(fyUrl);//FY Items

        
                        //Program Battle Space Image Items
                            var programBattleSpaceUrl = $GetItemsService.ProgramBattleSpaceUrl(program); 
                            var programBattleSpaceItem = $GetItemsService.getItems(programBattleSpaceUrl);

                        
                    
                        //Program Capability Image Items
                            var programCapabilityImageUrl = $GetItemsService.ProgramCapabilityImagesUrl(program); 
                            var programCapabilityImageItem = $GetItemsService.getItems(programCapabilityImageUrl);  
                            
                        
                            
                        //Program Capability Items
                            var programCapabilityUrl = $GetItemsService.ProgramCapabilityUrl(program); 
                            var programCapabilityItem = $GetItemsService.getItems(programCapabilityUrl);               
                        
        
                        //Requirements/Capability to the Force
                            var programRequirementsUrl = $GetItemsService.ProgramRequirementsUrl(program);  
                            var programRequirementsItem = $GetItemsService.getItems(programRequirementsUrl); 
                    
                        //Where it Fits Items
                            var programWhereItFitsUrl = $GetItemsService.WhereItFitsUrl(program);  
                            var programWhereItFitsItem = $GetItemsService.getItems(programWhereItFitsUrl); 

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
                                    programBattleSpaceItem,
                                    programCapabilityImageItem,
                                    programRequirementsItem,
                                    programWhereItFitsItem,
                                    programCapabilityItem,
                                    ProgramAAOItem,
                                    ProgramAPOItem,
                                    ProgramROItem
        
        
                            ]);
        
                            AllData.then(function (allData) {
                                
        
                                console.log(allData);
                                vm.FYs = (allData[0]) ? (allData[0]) : "";    
                                vm.bos = (allData[1].length > 0) ? (allData[1][0].BOS) : "";  
                                vm.portfolio = (allData[1].length > 0) ? (allData[1][0].Portfolio) : "";            
                                vm.roots = (allData[1].length > 0) ? (allData[1][0].progRoot) : "";
                                vm.key4 = (allData[1].length > 0) ? (allData[1][0].progkey4) : "";
                                vm.LINs = (allData[1].length > 0) ? (allData[1][0].progLIN) : "";
                                vm.battleSpacePics = (allData[2].length > 0) ? (allData[2]) : "";
                                vm.capabilityPics = (allData[3].length > 0) ? (allData[3]) : "";
                                vm.programRequirements = (allData[4].length > 0) ? (allData[4][0]) : "";
                                vm.programWhereItFits = (allData[5].length > 0) ? (allData[5][0]) : "";
                                vm.capabilityDescription = (allData[6].length > 0) ? (allData[6][0]) : "";
                                vm.AAO = (allData[7].length > 0) ?  (allData[7][0]) : "";
                                vm.APO = (allData[8].length > 0) ?  (allData[8][0]) : "";
                                vm.RO = (allData[9].length > 0) ?  (allData[9][0]) : "";
        
        
 
                                //Build Source Data
                                var clearStorage = $SourceDataDOMService.clearStorage(); 
                                var sourceData = $SourceDataDOMService.addProgramItem('Program', vm.bos, vm.portfolio, program, vm.roots, vm.FYs);
                                sourceData = $SourceDataDOMService.getItem(); 
        

        
                                //Download Program Properties
                                var downloadProgramProperties = (allData[1].length > 0 ) ? $ProgramService.downloadProgram('Program', vm.bos, program, vm.roots, vm.key4, vm.LINs) : "";
                                
        
                                var downloadCapabilityPics = (vm.capabilityPics.length > 0) ? $ProgramService.downloadCapabilityPics(vm.capabilityPics) : ""; 
                                var downloadBattleSpacePics = ( vm.battleSpacePics.length > 0) ? $ProgramService.downloadBattleSpacePics(vm.battleSpacePics) : "";
                                var downloadProgramRequirements = ( allData[4].length > 0) ? $ProgramService.downloadProgramRequirements(vm.programRequirements) : "";
                                var downloadProgramWhereItFits = ( allData[5].length > 0) ? $ProgramService.downloadWhereItFits(vm.programWhereItFits) : ""; 
                                var downloadProgramCapability = ( allData[6].length > 0) ? $ProgramService.downloadProgramCapability(vm.capabilityDescription) : ""; 
                                var downloadInventory2 = ( allData[6].length > 0) ? $ProgramService.downloadInventory2(vm.AAO, vm.APO, vm.RO) : ""; 


                                

                                console.log(sourceData)
        
        
        
        
        
                            });//AllData

                            */

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

                            jQuery("#BLUF").click(function(e) {

                                var openBLUF = $SourceDataDOMService.BLUFModal(null);

                            });//BLUF

                            jQuery("#Where-It-Fits").click(function(e) {

                                var openWhereItFits = $SourceDataDOMService.whereItFitsModal(null);

                            });//Where-It-Fits

                            jQuery("#Capability").click(function(e) {

                                var openCapability = $SourceDataDOMService.capabilityModal(null);

                            });//Capability Description/Capabilities

                            jQuery("#Why-We-Need-This").click(function(e) {

                                var openWhyWeNeedThis = $SourceDataDOMService.whyWeNeedThisModal(null);

                            });//Why-We-Need-This

                            jQuery("#SEECAPPIC").click(function(e) {

                                var openWhereItFits = $SourceDataDOMService.whereItFitsModal(null);

                            });//See PIC

                            jQuery("#ADDCAPPIC").click(function(e) {

                                var openWhereItFits = $SourceDataDOMService.whereItFitsModal(null);

                            });//Add PIC

                            jQuery("#DELETECAPPIC").click(function(e) {

                                var openWhereItFits = $SourceDataDOMService.whereItFitsModal(null);

                            });//Delete PIC





            
        
            
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

                console.log(program)
             
                    jQuery("#PAButton").click(function(e) {
    
                        //update('requirements');

                        console.log(true)
    
    
    
    
                    });//updateOverview
    
                    jQuery("#updateCapability").click(function(e) {
    
                        update('capability-description');
    
    
    
    
                    });//updateOverview
    
    
    
                    jQuery("#ADDCAPPIC").click(function(e) {
    
                        var ctx = _spPageContextInfo.webAbsoluteUrl 
                        location.href = ctx + "/_layouts/Upload.aspx?List=a8df729a-2a52-4c6a-86f9-ed45893ecdc8";
                        
                        
    
                    });//addCapabilityPIC
    
                    jQuery("#DELETECAPPIC").click(function(e) {
    
                        var ctx = _spPageContextInfo.webAbsoluteUrl 
                        console.log(program)
                        console.log(ctx + '/PROGRAMCAPABILITYIMAGES1/Forms/AllItems.aspx?Title='+program+'')
                        location.href = ctx + '/PROGRAMCAPABILITYIMAGES1/Forms/AllItems.aspx?Title='+program+'';
                        
                        
    
                    });//removeCapabilityPIC
    
                    jQuery("#ADDBATSPACEPIC").click(function(e) {
    
                        var ctx = _spPageContextInfo.webAbsoluteUrl 
                        location.href = ctx + "/_layouts/Upload.aspx?List=f190d3de-3b79-4e6e-b161-0ca0a7133371";
                        
                        
    
                    });//addCapabilityPIC
    
                    jQuery("#DELETEBATSPACEPIC").click(function(e) {
    
                        var ctx = _spPageContextInfo.webAbsoluteUrl 
                        console.log(program)
                        console.log(ctx + '/PROGRAMBATTLESPACEIMAGES1/Forms/AllItems.aspx#InplviewHash0d1caa05-5383-491a-bea7-8d3973bef4f2=FilterField1=Title-FilterValue1='+program+'')
                        location.href = ctx + '/PROGRAMBATTLESPACEIMAGES1/Forms/AllItems.aspx#InplviewHash0d1caa05-5383-491a-bea7-8d3973bef4f2=FilterField1=Title-FilterValue1='+program+'';
                        
                        
    
                    });//removeBattleSpacePIC

        
    
    









                function update(id){

                    try{

                        console.log('update')
                        var sourceData = $SourceDataDOMService.getItem(); 
                        var area = sourceData["Area"];
                        var bos = sourceData["BOS"];
                        var program = sourceData["Program"];
                        //console.log(sourceData)
                        //console.log(program);


                    
                        //Program Capability Items
                            var programCapabilityUrl = $GetItemsService.ProgramCapabilityUrl(program); 
                            var programCapabilityItem = $GetItemsService.getItems(programCapabilityUrl);               

                        //Requirements/Capability to the Force
                            var programRequirementsUrl = $GetItemsService.ProgramRequirementsUrl(program);  
                            var programRequirementsItem = $GetItemsService.getItems(programRequirementsUrl); 
                    
                        //Where it Fits Items
                            var programWhereItFitsUrl = $GetItemsService.WhereItFitsUrl(program);  
                            var programWhereItFitsItem = $GetItemsService.getItems(programWhereItFitsUrl); 

                            AllData = $q.all([
                                programCapabilityItem,
                                programRequirementsItem,
                                programWhereItFitsItem
     
                            ]);


                            AllData.then(function (allData) {

                                console.log(allData)

                                if(id === 'where-it-fits'){

                                    vm.ProgramReq = allData[0];
                                    vm.ReqID = allData[2][0].ID || allData[2][0].Id;

                                    console.log(id)
                                    console.log(vm.ProgramReq)
                                    console.log(vm.ReqID)      
                                    var updateWhereItFits = $ProgramService.updateWhereItFits(area, bos, program, vm.ReqID,'WHEREITFITSINFIGHT1');                 


                                }else if(id === 'requirements'){
                                    vm.ProgramReq = allData[0];
                                    vm.ReqID = allData[1][0].ID || allData[1][0].Id;

                                    console.log(id)
                                    console.log(vm.ProgramReq)
                                    console.log(vm.ReqID)      


                                    var updateProgramRequirements = $ProgramService.updateProgramRequirements(area, bos, program, vm.ReqID,'ProgramRequirements1');                 



                                }else if(id === 'capability-description'){
                                    vm.ProgramReq = allData[0];
                                    vm.ReqID = allData[0][0].ID || allData[0][0].Id;

                                    console.log(id)
                                    console.log(vm.ProgramReq)
                                    console.log(vm.ReqID)      

                                    
                                    var updateProgramCapability = $ProgramService.updateProgramCapability(area, bos, program, vm.ReqID,'PROGRAMCAPABILITY1');                 




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
