/**
 * 
 *                          vm.key4s = key4DB().distinct('OData__x006b_ey4');//USE  SITE COLUMN INSTEAD - MILTECH
                            vm.key4s = key4DB().distinct('OData__x004b_ey4');//USE  SITE COLUMN INSTEAD - O365

 */


/* ADMIN SERVICE */
angular.module('app').factory('AdminService', ['$q',function ($q) {

    return {

        createProgramLists:function(bosList, programList){

            try{
                console.log('Create Program Lists')
                console.log(bosList)
                console.log(programList)
                console.log(_spPageContextInfo)

                var listCount = 0;

                //var siteUrl = _spPageContextInfo.webAbsoluteUrl;//top level
                var siteUrl = _spPageContextInfo.webAbsoluteUrl + '/programs';//programs

                console.log(siteUrl)

                /*
                
                for(var i = 0; i < bosList.length; i++){
                    var bosTitle = bosList[i].Title;

                    for(var j = 0; j < programList.length; j++){
                        var programListTitle = programList[j].Title;
                        var listName = programListTitle + '_' + bosTitle;



                        //listCount += 1;

                        //console.log(listName + ' : ' + listCount);

                        

                        var clientContext = new SP.ClientContext(siteUrl);  
                        var oWebsite = clientContext.get_web();  
                        var listCreationInfo = new SP.ListCreationInformation();  
                        listCreationInfo.set_title(listName);  
                        listCreationInfo.set_templateType(SP.ListTemplateType.genericList);  
                    
                        var oList = oWebsite.get_lists().add(listCreationInfo);  
                    
                        clientContext.load(oList); 
                        
        
                        
                        clientContext.executeQueryAsync(onQuerySucceeded, onQueryFailed);

                        function onQuerySucceeded() {  
                            var result = oList.get_title() + ' created.';  
                            console.log(result);  
                        }  
                          
                        function onQueryFailed(sender, args) {  
                            console.log('Request failed. ' + args.get_message() +   
                                '\n' + args.get_stackTrace());  
                        }  

                        
        
        



                    }
                }


                */



                
                


            }
            catch(e){
                console.log(e);
            }


        },

        createProgramContentTypes:function(bosList, programList){

            try{
                console.log('Create Program Content Types')
                console.log(bosList)
                console.log(programList)

                var hostUrl = _spPageContextInfo.webAbsoluteUrl;//top level
                var siteUrl = _spPageContextInfo.webAbsoluteUrl + '/programs';//programs

                //var clientContext = new SP.ClientContext(siteUrl);  

                var context = new SP.ClientContext(siteUrl);  
                var context2 = new SP.ClientContext(hostUrl);  

                var subWeb = context.get_web(); 
                var hostWeb = context2.get_web(); 
				
				var listCount = 0;



                for(var i = 0; i < bosList.length; i++){
                    var bosTitle = bosList[i].Title;

                    for(var j = 0; j < programList.length; j++){
						
						var programListTitle = programList[j].Title;
                        var listName = programListTitle + '_' + bosTitle;
						var progCTID = programList[j].ProgramContentType;
						var topCTID = programList[j].TopLevelContentType;

						
						
						if(progCTID){
							
								
								console.log(listName + ' : ' + progCTID + ' : ' + listCount );
								
								
								
								
								var testList = context.get_web().get_lists().getByTitle(listName); 
								testList.set_contentTypesEnabled(true);
								testList.update();

								var contentType = subWeb.get_contentTypes().getById(progCTID);

								testList.get_contentTypes().addExistingContentType(contentType);
								testList.update();
								
								context.executeQueryAsync(onRequestSucceeded, onRequestFailed);
								
								
								

								
								
							
													





							
							
						}
						
						if(topCTID){
							//console.log(listName + ' : ' + topCTID + ' : ' + listCount );
							
							/*
							var testList = context2.get_web().get_lists().getByTitle(listName); 
							testList.set_contentTypesEnabled(true);
							testList.update();

							var contentType = hostWeb.get_contentTypes().getById(topCTID);

							testList.get_contentTypes().addExistingContentType(contentType);
							testList.update();
							
							context2.executeQueryAsync(onRequestSucceeded, onRequestFailed);
							*/
							


							
						}
						
						




                        listCount += 1;


						
					}
					
				}


				
				/*

                var testList = context.get_web().get_lists().getByTitle('AATest1'); 
                testList.set_contentTypesEnabled(true);
                testList.update();

                var contentType = subWeb.get_contentTypes().getById('0x010002011859C2727645A7F92F73E856E54301');

                testList.get_contentTypes().addExistingContentType(contentType);
                testList.update();

                context.load(testList);

                */
                



                //context.executeQueryAsync(onRequestSucceeded, onRequestFailed);

                function onRequestSucceeded() {

                    console.log( 'success' );
                    //console.log(testList.get_contentTypesEnabled());

                    //var itemID = oList.get_id().toString();
                    //console.log( program + '\nUpdated ');    

                }

                function onRequestFailed(sender, args) {
                        console.log('Request failed.');
                        console.log(args);
                        console.log(sender);
                }





            }
            catch(e){
                console.log(e);
            }


        },

        createListViews:function(bosList, programList){

            try{
                console.log('Create List Views')
                console.log(bosList)
                console.log(programList)


            }
            catch(e){
                console.log(e);
            }


        },

        attachWorkflow:function(bosList, programList){

            try{
                console.log('Attach Workflows')
                console.log(bosList)
                console.log(programList)


            }
            catch(e){
                console.log(e);
            }


        },









    }//return

}]);

 

/*QUAD 1 PAGE LOAD SERVICE*/
angular.module('app').factory('PageLoadService', ['$q',function ($q) {

	
    return {


    checkPageSource:function(){

            try{

                if(location.search){
                    var itemID =  parseInt( location.search.split('=')[1], 10 );
                    return itemID;

                }else{
                    return false;
                }

            }
            catch(e){
                console.log(e);
            }


        },

    

       

        programBOSDOM:function(program){

            try{       


                var bosArr = program['bosArr'];

                //load Portfolios drop down
                for(var i = 0; i < bosArr.length; i++){     
                    var bosname = bosArr[i];      
                    //console.log(bosname);
                    jQuery("#programBOS").append('<option>'+bosname+'</option>');
                } 


                

            }
            catch(e){
                console.log(e);
            }


       },//programBOSDOM()


    RootDOM:function(program){
        try{   

            //console.log('update roots')

            var bos = program['bosArr'][0];
            var rootArr = program['Portfolio'][bos]['Roots'];
            var programName = program['programArr'][0];

               
            //Load Roots DOM
            jQuery('#roots').empty();//empty roots div
            for(var i = 0; i < rootArr.length; i++){
                var root = rootArr[i];
                jQuery('#roots').append('<p></p><input type="checkbox" value="'+root+'">'+root+'');
            }   


            
        }
        catch(e){
            console.log(e);
        }

        
    },//RootDOM()
    requirementsCapabilityDOM:function(program){
        try{   
           //console.log('requirements-capability')
            //console.log(program)

            var formation = jQuery('#formation').val(program.formation);
            var reqDoc = jQuery('#reqDoc').val(program.reqDoc);
            var arocjroc = jQuery('#aroc-jroc').val(program.arocjroc);
            var reqCap = jQuery('#capability').val(program.reqCap);
            var priority = jQuery('#priority').val(program.priority);
            var assessment = jQuery('#assessment').val(program.assessment);
            var risk = jQuery('#risk').val(program.risk);
            var totalAAO = jQuery('#AAOLabel').append(program.totalAAO);
            var totalAPO = jQuery('#APOLabel').append(program.totalAPO);
            var inventory = jQuery('#InventoryLabelNum').append(program.inventory);
            var inventoryPercent = jQuery('#InventoryLabelPercent').append(program.inventoryPercent);



            
        }
        catch(e){
            console.log(e);
        }

        
    },//requirementsCapabilityDOM()
    programmaticOverviewDOM:function(program){
        try{   
            //console.log('programmatic overview');
            //console.log(program);

            var vendor = jQuery('#vendor').val(program.vendor);
            var proponent = jQuery('#proponent').val(program.proponent);
            var ACATLevel = jQuery('#acatlevel').val(program.ACATLevel);
            var contractType = jQuery('#contractType').val(program.contractType);
            var USInterest = jQuery('#states-interest').val(program.USInterest);
            var milestone = jQuery('#milestone').val(program.milestone);
            var alternative = jQuery('#alternative').val(program.alternative);
            var COTSOptions = jQuery('#cots-options').val(program.COTSOptions);
            var impacts = jQuery('#impacts').val(program.impacts);
            var APUC = jQuery('#apuc').val(program.APUC);
            var limitations = jQuery('#limitations').val(program.limitations);
            var MSR = jQuery('#msr').val(program.MSR);
            var MPR = jQuery('#mpr').val(program.MPR);


            
        }
        catch(e){
            console.log(e);
        }

        
    },//programmaticOverviewDOM()
    capabilityDescriptionDOM:function(program){
        try{   
            //console.log('capability description');
            //console.log(program);
            var capDesc = jQuery('#programdesc').val(program.capDesc);
            var imageUrl = program.Path + "?RenditionID=3";
            jQuery('#capImg').attr('src', imageUrl);



            
        }
        catch(e){
            console.log(e);
        }

        
    },//capabilityDescriptionDOM()
    POMAllocDOM:function(program){
        try{   
            //console.log('POM Alloc')
            //console.log(program)
            
            var deepDiveImpacts = jQuery('#deep-dive-impacts').val(program.deepDiveImpacts);
            var congressionalMarks = jQuery('#congressional-marks').val(program.congressionalMarks);
            var pdm = jQuery('#pdm').val(program.pdm);
            var fundingIssues = jQuery('#funding').val(program.fundingIssues);
            var root = jQuery('#rootLabel').val(program.Root.toString());
            var modLevel = jQuery('#MODLevel').val(program.modLevel);
            var LIN = jQuery('#LINs').val(program.LIN.toString());//UNIT TEST TO 5 MAX





            
        }
        catch(e){
            console.log(e);
        }

        
    },//POMAllocDOM()
    

  }//return
}]);//PageLoadService



/*Quad Service*/
angular.module('app').factory('QuadService', ['$q',function ($q) {

	
    return {

        addProgram: function (bos, portfolio, program, progID, list) {

            try{

                //console.log(bos)
                //console.log(portfolio)
                //console.log(program)
                //console.log(progID)
                //console.log(list)

                var ctx = _spPageContextInfo.webAbsoluteUrl;  
                //console.log(ctx); 

                var clientContext = new SP.ClientContext(ctx);
                var oList =  clientContext.get_web().get_lists().getByTitle(list);//MILTECH
                var itemCreateInfo = new SP.ListItemCreationInformation();
                var oListItem = oList.addItem(itemCreateInfo);     
                oListItem.set_item('Title', program);
                oListItem.set_item('BOS', bos);
                oListItem.set_item('PORTFOLIO', portfolio);
                oListItem.set_item('ProgramID', progID);
                oListItem.update();                 
                clientContext.load(oListItem);	
                       
                
                clientContext.executeQueryAsync(onRequestSucceeded, onRequestFailed);

                //console.log('redirect');
                //console.log(_spPageContextInfo.webAbsoluteUrl + "/Pages/collab3.aspx?programID="+progID+","+bos+" ");
                var url = _spPageContextInfo.webAbsoluteUrl + "/Pages/collab3.aspx?programID="+progID+","+bos+" ";

                

                function onRequestSucceeded() {
                    alert( program + '\nCreated ');    
					setTimeout(function(){ window.open(url, '_blank');   }, 3000);





                }

                function onRequestFailed(sender, args) {
                        console.log('Request failed. ' + args.get_message() + 
                            '\n' + args.get_stackTrace());
                }

                



            }
            catch(e){

                console.log(e);

            }

        },//addProgram()

        addProgItem: function (bos, portfolio, program, progID, list) {

            try{

                //console.log(bos)
                //console.log(portfolio)
                //console.log(program)
                //console.log(progID)
                //console.log(list)

                var ctx = _spPageContextInfo.webAbsoluteUrl;  
                //console.log(ctx); 

                var clientContext = new SP.ClientContext(ctx);
                var oList =  clientContext.get_web().get_lists().getByTitle(list);//MILTECH
                var itemCreateInfo = new SP.ListItemCreationInformation();
                var oListItem = oList.addItem(itemCreateInfo);     
                oListItem.set_item('Title', program);
                oListItem.set_item('BOS', bos);
                oListItem.set_item('PORTFOLIO', portfolio);
                oListItem.set_item('ProgramID', progID);
                oListItem.update();                 
                clientContext.load(oListItem);	
                       
                
                clientContext.executeQueryAsync(onRequestSucceeded, onRequestFailed);

                //console.log('redirect');
                //console.log(_spPageContextInfo.webAbsoluteUrl + "/Pages/collab3.aspx?programID="+progID+","+bos+" ");

                

                function onRequestSucceeded() {
                    console.log( list + 'Item\nCreated ');    





                }

                function onRequestFailed(sender, args) {
                        console.log('Request failed. ' + args.get_message() + 
                            '\n' + args.get_stackTrace());
                }

                



            }
            catch(e){

                console.log(e);

            }

        },//addProgItem()



        addManPower: function (bos, program, obj) {

            try{

                SP.SOD.executeFunc('SP.Runtime.js', 'SP.ClientContext',
                function () {
                    SP.SOD.executeFunc('SP.js', 'SP.ClientContext',
                    function () {

                        console.log(obj);

                        var commands = obj[0].COMMANDS;
                        var programRequirements = obj[0].REQRAT;
                        var programAdj = obj[0].ADJIMPACT;
                        var programPOM = obj[0].POMALLO;
                        var rdte = obj[0].RDTE;
                        var oma = obj[0].OMA;
                        var other = obj[0].OTHER;
                        var total = obj[0].TOTAL;
                        var civDirAuth = obj[0].CIVDIRAUTH;
                        var fte = obj[0].FTE;
                        var fteCost = obj[0].FTECOST;
                        var delta = obj[0].DELTA;
                        var deepdive = obj[0].DEEPDIVE;
                        var arr = [commands,programRequirements,programAdj,programPOM,rdte,oma,other,total,civDirAuth,fte,fteCost,delta,deepdive];                      
                        var ctx = _spPageContextInfo.webAbsoluteUrl + '/manpower';                
                        var clientContext = new SP.ClientContext(ctx);

                        console.log(arr);
                        


                        
                        
                        for(var i = 0; i < arr.length; i++){

                            var list = arr[i];
                            console.log(list + ' : ' + i + ' : ' + arr.length);

                            var oList =  clientContext.get_web().get_lists().getByTitle(list);//MILTECH
                            var itemCreateInfo = new SP.ListItemCreationInformation();
                            var oListItem = oList.addItem(itemCreateInfo);     
                            oListItem.set_item('Title', program);
                            oListItem.set_item('BOS', bos);
                            oListItem.update();                 
                            clientContext.load(oListItem);	       
                            clientContext.executeQueryAsync(onRequestSucceeded, onRequestFailed);

                            if(i === arr.length - 1){//redirect

                                //setTimeout(function(){ location.href = ctx + "/Pages/quad1.aspx?";  }, 5000);


                            }


                            function onRequestSucceeded() {
                                var itemID = oListItem.get_id().toString();
                                console.log( program + '\nCreated ');    

    


                            }
      
                            function onRequestFailed(sender, args) {
                                    console.log('Request failed. ' + args.get_message() + 
                                        '\n' + args.get_stackTrace());
                            }

                            


                        }

                        

                        
                        
                    });//SP.SOD.executeFunc('SP.js', 'SP.ClientContext')
                });// SP.SOD.executeFunc('SP.Runtime.js', 'SP.ClientContext')


            }
            catch(e){

                console.log(e);

            }
        },//addManPower()

        addST: function (bos, program, obj) {

            try{

                SP.SOD.executeFunc('SP.Runtime.js', 'SP.ClientContext',
                function () {
                    SP.SOD.executeFunc('SP.js', 'SP.ClientContext',
                    function () {

                        console.log(obj);
                        var programs = obj[0].PROGRAMS;
                        var programRequirements = obj[0].PROGRAMREQUIREMENTS;
                        var programOverview = obj[0].PROGRAMMATICOVERVIEW;
                        var programPOM = obj[0].POMALLO;
                        var rdte = obj[0].RDTE;
                        var proc = obj[0].PROC;
                        var other = obj[0].OTHER;
                        var total = obj[0].TOTAL;
                        var mycfloor = obj[0].MYCFLOOR;
                        var deepdive = obj[0].DEEPDIVE;
                        var quantity = obj[0].QUANTITY;
                        var arr = [programs,programRequirements,programOverview,programPOM,rdte,proc,other,total,mycfloor,deepdive,quantity];         
             
                        var ctx = _spPageContextInfo.webAbsoluteUrl + '/ammo';                
                        var clientContext = new SP.ClientContext(ctx);

                        console.log(arr)

                        

                        for(var i = 0; i < arr.length; i++){

                            var list = arr[i];
                            console.log(list + ' : ' + i + ' : ' + arr.length);

                            var oList =  clientContext.get_web().get_lists().getByTitle(list);//MILTECH
                            var itemCreateInfo = new SP.ListItemCreationInformation();
                            var oListItem = oList.addItem(itemCreateInfo);     
                            oListItem.set_item('Title', program);
                            oListItem.set_item('BOS', bos);
                            oListItem.update();                 
                            clientContext.load(oListItem);	       
                            clientContext.executeQueryAsync(onRequestSucceeded, onRequestFailed);

                            if(i === arr.length - 1){//redirect

                                //setTimeout(function(){ location.href = ctx + "/Pages/quad1.aspx?";  }, 5000);


                            }


                            function onRequestSucceeded() {
                                var itemID = oListItem.get_id().toString();
                                console.log( program + '\nCreated ');    

    


                            }
      
                            function onRequestFailed(sender, args) {
                                    console.log('Request failed. ' + args.get_message() + 
                                        '\n' + args.get_stackTrace());
                            }

                            


                        }

                        

                        
                        
                    });//SP.SOD.executeFunc('SP.js', 'SP.ClientContext')
                });// SP.SOD.executeFunc('SP.Runtime.js', 'SP.ClientContext')


            }
            catch(e){

                console.log(e);

            }

        },//addST()

        addAMMO: function (bos, program, obj) {

            try{

                SP.SOD.executeFunc('SP.Runtime.js', 'SP.ClientContext',
                function () {
                    SP.SOD.executeFunc('SP.js', 'SP.ClientContext',
                    function () {

                        //console.log(obj);
                        var programs = obj[0].PROGRAMS;
                        var programRequirements = obj[0].REQCAP;
                        var aaoAPO = obj[0].AAOAPO;
                        var programOverview = obj[0].PROGRAMMATICOVERVIEW;
                        var programPOM = obj[0].POMALLO;
                        var rdte = obj[0].RDTE;
                        var proc = obj[0].PROC;
                        var other = obj[0].OTHER;
                        var total = obj[0].TOTAL;
                        var quantity = obj[0].QUANTITY;
                        var maxCap = obj[0].MAXCAP;
                        var minCap = obj[0].MINCAP;
                        var deepdive = obj[0].DEEPDIVE;

                        var arr = [programs,programRequirements,aaoAPO,programOverview,programPOM,rdte,proc,other,total,quantity,maxCap,minCap,deepdive];                      
                        var ctx = _spPageContextInfo.webAbsoluteUrl + '/ammo';                
                        var clientContext = new SP.ClientContext(ctx);

                        console.log(arr);

                        

                        for(var i = 0; i < arr.length; i++){

                            var list = arr[i];
                            console.log(list + ' : ' + i + ' : ' + arr.length);

                            var oList =  clientContext.get_web().get_lists().getByTitle(list);//MILTECH
                            var itemCreateInfo = new SP.ListItemCreationInformation();
                            var oListItem = oList.addItem(itemCreateInfo);     
                            oListItem.set_item('Title', program);
                            oListItem.set_item('BOS', bos);
                            oListItem.update();                 
                            clientContext.load(oListItem);	       
                            clientContext.executeQueryAsync(onRequestSucceeded, onRequestFailed);

                            if(i === arr.length - 1){//redirect

                                //setTimeout(function(){ location.href = ctx + "/Pages/quad1.aspx?";  }, 5000);


                            }


                            function onRequestSucceeded() {
                                var itemID = oListItem.get_id().toString();
                                console.log( program + '\nCreated ');    

    


                            }
      
                            function onRequestFailed(sender, args) {
                                    console.log('Request failed. ' + args.get_message() + 
                                        '\n' + args.get_stackTrace());
                            }

                            


                        }

                        
                        
                    });//SP.SOD.executeFunc('SP.js', 'SP.ClientContext')
                });// SP.SOD.executeFunc('SP.Runtime.js', 'SP.ClientContext')


            }
            catch(e){

                console.log(e);

            }

        },//addAMMO()





        
        validateInput: function(newProg){

            try{

                //remove white spaces
                var str = "";
                str = newProg.replace(/\s+/g, " ").trim();
                return str;

            }
            catch(e){
                console.log(e);
            }


        },//validateInput()

        BOSDOM:function(bosArr){

            try{

                //load Portfolios drop down
                for(var i = 0; i < bosArr.length; i++){     
                    var bos = bosArr[i].Title;   
                    var portfolio = bosArr[i].PORTFOLIO || "";
                   //console.log(bos + ' : ' + portfolio);

                    /*if(i === 0){
                        jQuery("#bos1").append('<option>Select a Portfolio</option>');
                        jQuery("#bos2").append('<option>Select a Portfolio</option>');
                        jQuery("#bos3").append('<option>Select a Portfolio</option>');

                    }*/
                    jQuery("#bos1").append('<option id="'+portfolio+'">'+bos+'</option>');
                    jQuery("#bos2").append('<option id="'+portfolio+'">'+bos+'</option>');
                    jQuery("#bos3").append('<option id="'+portfolio+'">'+bos+'</option>');
                    jQuery("#bos4").append('<input type="checkbox" name="checkbox-1" id="'+bos+'"><label for="checkbox-1">'+bos+'</label><br></br>');

                } 


            }
            catch(e){
                console.log(e);
            }

            
        },//BOSDOM

        areaDOM:function(areaArr){

            try{

                //load Areas drop down
                for(var i = 0; i < areaArr.length; i++){     
                    var area = areaArr[i].Title;      
                    //console.log(area);

                    jQuery("#area1").append('<option>'+area+'</option>');
                    jQuery("#area2").append('<option>'+area+'</option>');
                    jQuery("#area3").append('<option>'+area+'</option>');
                    jQuery("#area4").append('<option>'+area+'</option>');




                } 


            }
            catch(e){
                console.log(e);
            }

            
        },//areaDOM

        programDOMPres:function(programArr, checked){
            try{  
                


                if(checked){


                    for(var program in programArr){
                            //console.log(obj[key4s]['POM'])
                            jQuery('#Key4Label').empty();
                            jQuery('#key4').append('<span id="'+program+'"><input type="checkbox" class="'+program+'"><label class='+program+'>'+program+'</label><br/><br/></span>');
    


                    }



                }else{

                    for(var program in programArr){
                        jQuery('#'+key4+'').remove();

                    }

                    

                }


                

            }
            catch(e){
                console.log(e);
            }
    
            
        },//programDOMPres()

        programDOM:function(elem, programArr){

            try{

                //console.log('update')
                //console.log(elem)
                //console.log(programArr)
                
                elem.empty();

                //load Areas drop down
                for(var i = 0; i < programArr.length; i++){     
                    var program = programArr[i].Title;  
					var programID = programArr[i].ProgramID;
                    //console.log(program);

                    elem.append('<option id='+programID+'>'+program+'</option>');

                } 

                if(programArr.length === 0){
                    elem.append('<option>No Programs/Commands Found</option>');

                }


            }
            catch(e){
                console.log(e);
            }

            
        },//programDOM








  }//return
}]);//QuadService

/*Presentation Service*/
angular.module('app').factory('PresentationService', ['$q',function ($q) {

    return{


        ProgramDOM:function(bos, programArr){

            try{

                //load Portfolios drop down
                for(var i = 0; i < programArr.length; i++){     
                    var program = programArr[i].Title;      
                    //console.log(bosname);

                    jQuery("#program").append('<input type="checkbox" name="checkbox-1" id="'+program+' '+bos+'"><label for="checkbox-1">'+program+'</label><br></br>');



                } 


            }
            catch(e){
                console.log(e);
            }

            
        },//BOSDOM


        clearStorage:function(obj){

            try{

                if (typeof(Storage) !== "undefined") {

                    sessionStorage.clear();

    
    
                } else {
                    console.log('storage not supported');
                }
    

            }
            catch(e){
                console.log(e);
            }

        },

        initPresentationItem:function(){

            try{

                if (typeof(Storage) !== "undefined") {



                    var sourceData = {};




                    var obj = JSON.stringify(sourceData);
                    sessionStorage.setItem('SourceData', obj);
                    


    
    
                } else {
                    console.log('storage not supported');
                }
    

            }
            catch(e){
                console.log(e);
            }

        },

        changePresentationItem:function(area, bos, sourceData, programs, checked){

            try{

                if (typeof(Storage) !== "undefined") {


                    
                    if(checked){
                        //console.log('build');
                        //console.log(programs);

                        if(!sourceData[area]){

                            sourceData[area] = {};
                        }

                        sourceData[area][bos] = {};

                        for(var i = 0; i < programs.length; i++){
                            var program = programs[i].Title;
                            var programID = programs[i].ProgramID;

                            var progTrim = program.replace(/\s+/g, '');
                            //console.log(progTrim);
 
                            jQuery('#program4').prepend('<span id="'+progTrim+'"><input type="checkbox" id="'+programID+'" class="'+bos+'" value="'+area+'"><label>'+program+ ' :   ' +bos+'</label> <br/><br/></span>');

                            //console.log(program);
                        }
    

                    }else{

                        for(var i = 0; i < programs.length; i++){
                            var program = programs[i].Title;
                            var progTrim = program.replace(/\s+/g, '');
                            //console.log(progTrim);
                            
                            jQuery('#'+progTrim+'').remove();

                            //console.log(program);
                        }

                        
                        delete sourceData[area][bos];

                    }


                    var obj = JSON.stringify(sourceData);
                    sessionStorage.setItem('SourceData', obj);

    
                } else {
                    console.log('storage not supported');
                }
    
    

            }
            catch(e){
                console.log(e);
            }

        },

        changePresentationProgram:function(area, bos, program, slides, sourceData, checked){

            try{

                if (typeof(Storage) !== "undefined") {


                    
                    if(checked){
                            sourceData[area][bos][program] = {};
                            sourceData[area][bos][program]['Slides'] = slides;


                    }else{

                        delete sourceData[area][bos][program];

                    }


                    var obj = JSON.stringify(sourceData);
                    sessionStorage.setItem('SourceData', obj);

    
                } else {
                    console.log('storage not supported');
                }
    
    

            }
            catch(e){
                console.log(e);
            }

        },//changePresentationProgram



        buildSlides:function(sourceData){

            try{

                var pptx = new PptxGenJS();//set presentation
                
                
                

                console.log('build slides')


                 //pptx = this.programSlides1(null, null, null, pptx);
                 //pptx = this.programSlides2(null, null, null, pptx);
                 //pptx = this.programSlides3(null, null, null, pptx);
                 //pptx = this.programSlides4(null, null, null, pptx);

                
                for(var area in sourceData){

                    //console.log(area)
                    for(var bos in sourceData[area]){
                        //console.log(bos);

                        for(var program in sourceData[area][bos]){


                             //console.log(area + ' : ' + bos + ' : ' + program )
                             var slides = sourceData[area][bos][program]['Slides'];

                          
                          
                            //pptx = this.programSlides1(bos, program, slides, pptx);
                            //pptx = this.programSlides2(bos, program, slides, pptx);
                            pptx = this.programSlides3(bos, program, slides, pptx);
                            pptx = this.programSlides4(bos, program, slides, pptx);
                          
                          
                        }

                    }

                }


               //Save presentation
               pptx.save();

            }
            catch(e){
                console.log(e);
            }

        },//buildSlides

        programSlides1:function(bos, program, slides, pptx){//PORTFOLIO CONTEXT

            try{

                    //console.log(bos + ' : ' + program);
                    //console.log(slides);

                    //Set Slide Layout Dimensions
                    pptx.setLayout({ name:'ProgramLayout', width:16.5, height:11.7 });


                    //Create Slide
                    var quad = pptx.addNewSlide('PORTFOLIO_CONTEXT');

                    //Quad Layout Properties
                    quad.addShape(pptx.shapes.LINE,      { x:0.0, y:6.88, w:16.5, h:0.06, line:'000000', lineSize:2 });
                    quad.addShape(pptx.shapes.LINE,      { x:6.1, y:8.91, w:4.01, h:0, line:'000000', lineSize:2, rotate:90 });
                    //quad.addImage({ path:'https://shaunlewisdevdomaincom.sharepoint.com/quad/programs/PublishingImages/armylogo.png', x:0, y:0, w:1.33, h:0.97 }) //O365
                    quad.addImage({ path:'https://spcs3qa.kc.army.mil/asaalt/hqdag8/quad/programs/PublishingImages/armylogo.png', x:0, y:0, w:1.33, h:0.97 })//MILTECH

                    //Set Content
                    var overview = (slides[0][0]) ? slides[0][0].OVERVIEW || "" : "";
                    var capability = (slides[1][0]) ? slides[1][0].CAPABILITY || "" : "";
                    var near_term = (slides[2][0]) ? slides[2][0].NEARTERM || "" : "";
                    var mid_term = (slides[2][0]) ? slides[2][0].MIDTERM || "" : "";
                    var far_term = (slides[2][0]) ? slides[2][0].FARTERM || "" : "";


                    //console.log(overview)
                    //console.log(capability)



                    //Header
                    var header1 = [
                    
                        [
                            { text:''+bos+'', options:{ valign:'t', align:'c', fontFace:'Arial', fontSize:24, fill:'000000' } },
                            { text:'PORTFOLIO CONTEXT ', options:{ valign:'t', align:'c', fontFace:'Arial', fontSize:24, fill:'A0A0A0',bold:true  } }
                        ],
                    
                    ]                                                     
                        var header_Grid1 = { x:1.33, y:0.02, w:15.17, h:0.95, rowH:0.0, rowW:0.0, colW:[3.585, 11.585], fill:'000000', color:'FFFFFF', valign:'l', autoPage:false };
                        quad.addTable( header1, header_Grid1  );
                    



                    //Set Chart for POM/EE PEG
                    var dataChartPieStat = [
                        {
                            name  : 'EE Peg',
                            labels: ['2.0', '1.1', '1.0'],
                            values: [0, 0, 100]
                        }
                     ];



                    //// TOP-RIGHT
                    quad.addText( '.', {x:13.12, y:1.0, w:3.2, h:3.2, fill:'F1F1F1', color:'F1F1F1'} );
                    quad.addChart( pptx.charts.PIE, dataChartPieStat, {x:13.12, y:1.0, w:3.2, h:3.2, showLegend:true, legendPos:'t'} );

                    


                    //Portfolio Context
                    var Portfolio_Context = [
            
                       [{ text:''+overview+'', options:{ valign:'t', align:'l', fontFace:'Arial'  } }]
                                                                                         
                    ]                               
                    var Portfolio_Context_Grid = { x:0.5, y:1.0, w:12.49, h:5.63, rowH:0.0, rowW:0.0, fill:'FFFFFF', fontSize:12, color:'000000', valign:'l', autoPage:false, border:{color:'FFFFFF'}};
                    quad.addTable( Portfolio_Context, Portfolio_Context_Grid );

                    //Modernization Priorities
                    var Modernization_Priorities = [
            
                        [{ text:'Modernization Priorities  ', options:{ valign:'t', align:'c', fontFace:'Arial',bold:true, underline:true } }],
                        [{ text:''+capability+'', options:{ valign:'t', align:'l', fontFace:'Arial' } }]

                                                                                                              
                    ]                                                     
                    var Modernization_Priorities_Grid = { x:0.5, y:6.94, w:7.56, h:1.03, rowH:0.0, rowW:0.0, fill:'FFFFFF', fontSize:13, color:'000000', valign:'l', autoPage:false, border:{color:'FFFFFF'}};
                    quad.addTable( Modernization_Priorities, Modernization_Priorities_Grid );

                    //Portfolio Plan
                    var Portfolio_Plan = [
            
                        [
                            { text:'Transportation Portfolio Plan in Support of the Army Modernization Strategy  ', options:{ valign:'t', align:'c', fontFace:'Arial',bold:true, underline:true  } },
                            { text:'  ', options:{ valign:'t', align:'l', fontFace:'Arial'  }  }


                        ],
                        [
                            { text:'Near-term (2020-2024):  ', options:{ valign:'t', align:'l', fontFace:'Arial',bold:true, underline:true  } },
                            { text:' '+near_term+' ', options:{ valign:'t', align:'l', fontFace:'Arial'  } },


                        ],
                        [
                            { text:'Mid-term (2024-2028):  ', options:{ valign:'t', align:'l', fontFace:'Arial',bold:true, underline:true  } },
                            { text:' '+mid_term+' ', options:{ valign:'t', align:'l', fontFace:'Arial'  } },


                        ],

                        [
                            { text:'Far-term (28-34):  ', options:{ valign:'t', align:'l', fontFace:'Arial',bold:true, underline:true  } },
                            { text:' '+far_term+' ', options:{ valign:'t', align:'l', fontFace:'Arial'  } },


                        ],



                                                                     
                    ]
                    
                    var Portfolio_Plan_Grid = { x:8.25, y:6.97, w:7.56, h:1.03, rowH:0.0, rowW:0.0, fill:'FFFFFF', fontSize:13, color:'000000', valign:'m', autoPage:false, border:{color:'FFFFFF'}};
                    quad.addTable( Portfolio_Plan, Portfolio_Plan_Grid );


                    //Footer
                    var Footer = [
            
                        [{ text:'POM 21-25: $8.3B (4% EE PEG)  ', options:{ valign:'t', align:'c', fontFace:'Arial',bold:true  } }]
                                                                     
                    ]
                    
                    var Footer_Grid = { x:0.51, y:10.91, w:15.4, h:0.79, rowH:0.0, rowW:0.0, fill:'FBC304', fontSize:17, color:'000000', valign:'m', autoPage:false};
                    quad.addTable( Footer, Footer_Grid );
                    
                      

            
                    
            
            
                    return pptx;


                    


                

                

            }
            catch(e){
                console.log(e);
            }

        },//programSlides1

        programSlides3:function(bos, program, slides, pptx){//PROGRAM OVERVIEW

            try{

                    console.log(bos + ' : ' + program);
                    console.log(slides);



            
                    //Set Slide Layout Dimensions
                    pptx.setLayout({ name:'ProgramLayout', width:16.5, height:11.7 });

                    //Create Slide
                    var quad = pptx.addNewSlide('PROGRAM OVERVIEW');

                    //Quad Layout Properties
                    quad.addShape(pptx.shapes.LINE,      { x:1.00, y:5.50, w:15, h:0, line:'000000', lineSize:2  });
                    quad.addShape(pptx.shapes.LINE,      { x:3.10, y:6.50, w:10, h:0, line:'000000', lineSize:2, rotate:90 });
                    //quad.addImage({ path:'https://shaunlewisdevdomaincom.sharepoint.com/quad/programs/PublishingImages/armylogo.png', x:0, y:0, w:1.33, h:0.97 }) //O365
                    //quad.addImage({ path:'https://spcs3qa.kc.army.mil/asaalt/hqdag8/quad/programs/PublishingImages/armylogo.png', x:0, y:0, w:1.33, h:0.97 })//MILTECH
                    quad.addImage({ path:'https://spcs11.kc.army.mil/sites/hqdag8_quad/programs/PublishingImages/armylogo.png', x:0, y:0, w:1.33, h:0.97 })//MILTECH


                    
                    //Set Content
                    var program = (slides[0][0]) ? slides[0][0].Title || "" : "";
                    var bluf = (slides[1][0]) ? slides[1][0].BLUF || "" : "";
                    var capability = (slides[4][0]) ? slides[4][0].Capabilities || "": "";
                    var capDesc = (slides[4][0]) ? slides[4][0].CapabilityDescription1 || "" : "";
                    var where_it_fits_ = (slides[2][0]) ? slides[2][0].WhereItFits || "": "";
                    var why_we_need_this_ = (slides[3][0]) ? slides[3][0].WhyWeNeedThis || "": "";
                    var req = (slides[3][0]) ? slides[3][0].Requirements_x002d_Capability_x0 || "": "";

                    

                    //var formation = (slides[6][0]) ? slides[6][0].formation || "": "";
                    //var approvedRequirementsDoc = (slides[6][0]) ? slides[6][0].approvedRequirementsDoc || "": "";
                    //var arocjroc = (slides[6][0]) ? slides[6][0].arocjroc || "": "";
                    //var iocfoc = (slides[6][0]) ? slides[6][0].iocfoc || "": "";

                    //var where_it_fits_tag = (slides[7][0]) ? slides[7][0].WHEREITFITSTAG || "" : "";
                    



                  //Header
                    var header1 = [
                    
                        [
                            { text:'POM 21-25 ', options:{ valign:'t', align:'c', fontFace:'Arial', fontSize:20, fill:'000000' } },
                            { text:''+program+'  Program Overview', options:{ valign:'t', align:'l', fontFace:'Arial', fontSize:24, fill:'A0A0A0'  } }
                        ],


                                                                                                                                                            
                    ]                                                     
                    var header_Grid1 = { x:1.33, y:0.02, w:15.17, h:0.95, rowH:0.0, rowW:0.0, colW:[3.585, 11.585], fill:'000000', color:'FFFFFF', valign:'l', autoPage:false };
                    quad.addTable( header1, header_Grid1  );


                    


                    //set battlespace pics 
                    //var ctx = _spPageContextInfo.webAbsoluteUrl;

                    if(slides[15].length > 0){

                        switch(slides[15].length) {
                            case 1:                       
                                var pic = 'https://spcs11.kc.army.mil' + slides[15][0].FileRef;
                                quad.addImage({ path:pic, x:13.11, y:1.15, w:2.83, h:1.89 })
                              break;
                            case 2:
                                var pic1 = 'https://spcs11.kc.army.mil' + slides[15][0].FileRef;
                                var pic2 = 'https://spcs11.kc.army.mil' + slides[15][1].FileRef;
                                quad.addImage({ path:pic1, x:13.11, y:1.15, w:1.57, h:1.05 })
                                quad.addImage({ path:pic2, x:14.68, y:1.15, w:1.66, h:1.05 })
                              break;
    
                            case 3:
                                var pic1 = 'https://spcs11.kc.army.mil' + slides[15][0].FileRef;
                                var pic2 = 'https://spcs11.kc.army.mil' + slides[15][1].FileRef;
                                var pic3 = 'https://spcs11.kc.army.mil' + slides[15][2].FileRef;
                                //console.log(ctx)
                                //console.log(ctx + slides[3][0].FileRef.split('quad')[1])
                                quad.addImage({ path:pic1, x:13.11, y:1.15, w:1.57, h:1.05 })
                                quad.addImage({ path:pic2, x:14.68, y:1.15, w:1.66, h:1.05 })
                                quad.addImage({ path:pic3, x:13.11, y:2.2,  w:1.66, h:1.05 })  
                              break;
    
    
                            case 4:
                                var pic1 = 'https://spcs11.kc.army.mil' + slides[15][0].FileRef;
                                var pic2 = 'https://spcs11.kc.army.mil' + slides[15][1].FileRef;
                                var pic3 = 'https://spcs11.kc.army.mil' + slides[15][2].FileRef;
                                var pic4 = 'https://spcs11.kc.army.mil' + slides[15][3].FileRef;
                                quad.addImage({ path:pic1, x:13.11, y:1.15, w:1.57, h:1.05 });
                                quad.addImage({ path:pic2, x:14.68, y:1.15, w:1.73, h:1.05 });
                                quad.addImage({ path:pic3, x:13.11, y:2.2,  w:1.66, h:1.05 });
                                quad.addImage({ path:pic4, x:14.77, y:2.21, w:1.64, h:1.04 }); 
                              break;
                          }
                    }


                    
 



					
					//BLUF
                    var _bluf = [
                    
                            [{ text:'BLUF ', options:{ valign:'t', align:'c', fontFace:'Arial',bold:true, underline:true } }],
                            [{ text:' '+bluf+' ', options:{ valign:'t', align:'l', fontFace:'Arial' } }]


                                                                                                                                                                
                        ]                                                     
					var blufGrid = { x:0.65, y:1.15, w:7.21, h:2.17, rowH:0.0, rowW:0.0, fill:'FFFFFF', fontSize:14, color:'000000', valign:'l', autoPage:false, border:{color:'FFFFFF'} };
                    quad.addTable( _bluf, blufGrid  );
					
					//Where it Fits in the Fight
                    var where_it_fits = [
                    
                            [{ text:'Where it Fits in the Fight ', options:{ valign:'t', align:'c', fontFace:'Arial',bold:true, underline:true } }],
                            [{ text:' '+where_it_fits_+' ', options:{ valign:'t', align:'l', fontFace:'Arial' } }]


                                                                                                                                                                
                        ]                                                     
					var where_it_fits_Grid  = { x:0.74, y:5.64, w:7.21, h:2.17, rowH:0.0, rowW:0.0, fill:'FFFFFF', fontSize:14, color:'000000', valign:'l', autoPage:false, border:{color:'FFFFFF'} };

                    quad.addTable( where_it_fits, where_it_fits_Grid  );




                    


                   //Capability Description
                    var capability_description = [
                
                        [{ text:'Capability Description ', options:{ valign:'t', align:'c', fontFace:'Arial',bold:true, underline:true } }],
                        [{ text:''+capDesc+' ', options:{ valign:'t', align:'l', fontFace:'Arial' } }]

                                                                                                                                                            
                    ]                                                     
                   var capability_description_Grid = { x:8.31, y:1.11, w:4.56, h:1.98, rowH:0.0, rowW:0.0, fill:'FFFFFF', fontSize:14, color:'000000', valign:'l', autoPage:false, border:{color:'FFFFFF'} };
                   quad.addTable( capability_description, capability_description_Grid  );

                   

                    //Capabilities
                    var capabilities = [
                
                        [{ text:'Capabilities ', options:{ valign:'t', align:'c', fontFace:'Arial',bold:true, underline:true } }],
                        [{ text:''+capability+'', options:{ valign:'t', align:'l', fontFace:'Arial' } }]
                
                                                                                                                                                                            
                    ]                                                     
                    var capabilities_Grid = { x:8.41, y:3.85, w:3.4, h:1.25, rowH:0.0, rowW:0.0, fill:'FFFFFF', fontSize:14, color:'000000', valign:'l', autoPage:false, border:{color:'FFFFFF'} };
                    quad.addTable( capabilities, capabilities_Grid  );
                  



                //Why We Need This
                var why_we_need_this = [
            
                        [{ text:'Why We Need This ', options:{ valign:'t', align:'c', fontFace:'Arial',bold:true, underline:true } }],
                        [{ text:''+why_we_need_this_+'', options:{ valign:'t', align:'l', fontFace:'Arial' } }]

                                                                                                                                                             
                    ]                                                     
                var why_we_need_this_Grid = { x:8.25, y:5.64, w:8.25, h:1.3, rowH:0.0, rowW:0.0, fill:'FFFFFF', fontSize:14, color:'000000', valign:'l', autoPage:false, border:{color:'FFFFFF'} };
                quad.addTable( why_we_need_this, why_we_need_this_Grid  );

                
                
                //Requirements Capability to Force
                var req_cap_to_force = [
            
                [{ text:'Requirement/Capability to the Force: ', options:{ valign:'t', align:'c', fontFace:'Arial',bold:true, underline:true } }],
                [{ text:''+req+'', options:{ valign:'t', align:'l', fontFace:'Arial' } }]
                //[{ text:'- Approved Requirements Document: '+approvedRequirementsDoc+'  ', options:{ valign:'t', align:'l', fontFace:'Arial' } }],
                //[{ text:'- AROC/JROC (Date): '+arocjroc+'  ', options:{ valign:'t', align:'l', fontFace:'Arial' } }],
                //[{ text:'- IOC/FOC (Date): '+iocfoc+'  ', options:{ valign:'t', align:'l', fontFace:'Arial' } }],
                //[{ text:'- Upgrade to, Replacement of, or New capability: '+capability+'  ', options:{ valign:'t', align:'l', fontFace:'Arial' } }]

                
                ]                                                     
                var req_cap_to_force_Grid = { x:8.25, y:8.7, w:8.25, h:1.6, rowH:0.0, rowW:0.0, fill:'FFFFFF', fontSize:14, color:'000000', valign:'l', autoPage:false, border:{color:'FFFFFF'} };
                quad.addTable( req_cap_to_force, req_cap_to_force_Grid  );
                
                
            

                return pptx;




            }
            catch(e){
                console.log(e);
            }

        },//programSlides3

        programSlides4:function(bos, program, slides, pptx){//PROGRAM ASSESSMENT & RECOMMENDATION

            try{

                console.log(program);
                console.log(slides);

                //Set Layout Dimensions
                pptx.setLayout({ name:'PRORGAM', width:16.5, height:11.7 });


            
                //Build Slides
                var quad = pptx.addNewSlide();

                //Quad Layout Properties
                quad.addShape(pptx.shapes.LINE, { x:1.00, y:6.45, w:15, h:0, line:'000000', lineSize:2  });
                quad.addShape(pptx.shapes.LINE, { x:3.55, y:6.50, w:10, h:0, line:'000000', lineSize:2, rotate:90 });
                //quad.addImage({ path:'https://shaunlewisdevdomaincom.sharepoint.com/quad/programs/PublishingImages/armylogo.png', x:0, y:0, w:1.33, h:0.97 }) //O365
                //quad.addImage({ path:'https://spcs3qa.kc.army.mil/asaalt/hqdag8/quad/programs/PublishingImages/armylogo.png', x:0, y:0, w:1.33, h:0.97 })//MILTECH
                quad.addImage({ path:'https://spcs11.kc.army.mil/sites/hqdag8_quad/programs/PublishingImages/armylogo.png', x:0, y:0, w:1.33, h:0.97 })//MILTECH

                
                
                var program = (slides[0][0]) ? slides[0][0].Title || "" : "";

              //Header
                var header1 = [
                
                    [
                        { text:'POM 21-25 ', options:{ valign:'t', align:'c', fontFace:'Arial', fontSize:20, fill:'000000' } },
                        { text:''+program+' Program Assessment & Recommendation', options:{ valign:'t', align:'l', fontFace:'Arial', fontSize:24, fill:'A0A0A0'  } }
                    ],


                                                                                                                                                        
                ]                                                     
                var header_Grid1 = { x:1.33, y:0.02, w:15.17, h:0.95, rowH:0.0, rowW:0.0, colW:[3.585, 11.585], fill:'000000', color:'FFFFFF', valign:'l', autoPage:false };
                quad.addTable( header1, header_Grid1  );
				
				




                var vendor = "";var RqmtOwner = "";var contracttype = "";var DateRange = "" ;var US = "" ;var COTSOptions = "";var APUC = "";var baselines = "";var ObligationDisbursement = "";var MSR = "" ;var MPR = "";
                
                if(slides[5][0]){
                    vendor = (slides[5][0].vendor !== null) ? slides[5][0].vendor || "" : "";
                    //var acatlevel= (slides[5][0].acatlevel !== null) ? slides[5][0].acatlevel || "": "";
                    RqmtOwner = (slides[5][0].ReqmtOwner !== null) ? slides[5][0].ReqmtOwner || "": "";
					contracttype = (slides[5][0].contracttype !== null) ? slides[5][0].contracttype || "" : "";
					DateRange = (slides[5][0].DateRange !== null) ? slides[5][0].ProgFY || "" : "";
                    US = (slides[5][0].US !== null) ? slides[5][0].US|| "" : "";
                    //var TRL = (slides[5][0].TRL !== null) ? slides[5][0].TRL || "" : "";
                    COTSOptions = (slides[5][0].COTSOptions !== null) ? slides[5][0].COTSOptions|| "" : "";
                    APUC = (slides[5][0].APUC !== null) ? slides[5][0].APUC|| "" : "";
                    baselines = (slides[5][0].Rebaselines !== null) ? slides[5][0].Rebaselines || "" : "";
                    ObligationDisbursement = (slides[5][0].Disbursement !== null) ? slides[5][0].Disbursement || "" : "";
                    MSR = (slides[5][0].MSR !== null) ? slides[5][0].MSR|| "" : "";
                    MPR = (slides[5][0].MPR !== null) ? slides[5][0].MPR|| "" : "";
    

                }
				
				//Programmatic Overview
                                var Programmatic_Overview_Definitions = [
            
                                    [
                                        { text:' Programmatic Overview ', options:{ valign:'t', align:'l', fontFace:'Arial',underline:true,bold:true  } },
                                        { text:' ', options:{ valign:'t', align:'l', fontFace:'Arial' } }

                                    ],
                                    [
                                        { text:' Vendor:' +vendor+'', options:{ valign:'t', align:'l', fontFace:'Arial'  } },
                                        { text:'  ', options:{ valign:'t', align:'l', fontFace:'Arial'   } }

                                    ],
                                    [
                                        { text:' Rqmt Owner: '+RqmtOwner+'', options:{ valign:'t', align:'l', fontFace:'Arial'   } },
                                        { text:'  ', options:{ valign:'t', align:'l', fontFace:'Arial'   } }

                                    ],
                                    [
                                        { text:' Type of Contract/PoP '+contracttype+' ', options:{ valign:'t', align:'l', fontFace:'Arial'   } },
                                        { text:'  ', options:{ valign:'t', align:'l', fontFace:'Arial'   } }

                                    ],
                                    [
                                        { text:''+DateRange+'', options:{ valign:'t', align:'l', fontFace:'Arial'   } },
                                        { text:'  ', options:{ valign:'t', align:'l', fontFace:'Arial'   } }

                                    ],
                                    [
                                        { text:' US States/Interest:  '+US+' ', options:{ valign:'t', align:'l', fontFace:'Arial'   } },
                                        { text:'  ', options:{ valign:'t', align:'l', fontFace:'Arial'   } }

                                    ],
                                    [
                                        { text:' COTS Options: '+COTSOptions+' ', options:{ valign:'t', align:'l', fontFace:'Arial'   } },
                                        { text:'  ', options:{ valign:'t', align:'l', fontFace:'Arial'   } }

                                    ],
                                    [
                                        { text:' APUC: '+APUC+'', options:{ valign:'t', align:'l', fontFace:'Arial'   } },
                                        { text:'  ', options:{ valign:'t', align:'l', fontFace:'Arial'   } }

                                    ],
                                    [
                                        { text:' # of program rebaselines: '+baselines+'', options:{ valign:'t', align:'l', fontFace:'Arial'   } },
                                        { text:'  ', options:{ valign:'t', align:'l', fontFace:'Arial'   } }

                                    ],
                                    [
                                        { text:'Obligation/Disbursement: '+ObligationDisbursement+' ', options:{ valign:'t', align:'l', fontFace:'Arial'   } },
                                        { text:'  ', options:{ valign:'t', align:'l', fontFace:'Arial'   } }

                                    ],
                                    [
                                        { text:'Min Sustainment Rate/yr: '+MSR+' ', options:{ valign:'t', align:'l', fontFace:'Arial'   } },
                                        { text:'Max Prod Rate/yr: '+MPR+' ', options:{ valign:'t', align:'l', fontFace:'Arial'   } }

                                    ]

                                                                                                                 
                                ]
                                                                
                                var Programmatic_Overview_Grid = { x:0.37, y:1.91, w:8.12, h:3.45, rowH:0.1, rowW:0.0, colW:[4.06, 4.06], fill:'FFFFFF', fontSize:14, color:'000000', valign:'m', autoPage:false, border:{color:'FFFFFF'}};
                                quad.addTable( Programmatic_Overview_Definitions, Programmatic_Overview_Grid );

				
				
                 var rdtefy19 = ""; var rdtefy20 = ""; var rdtefy21 = ""; var rdtefy22 = ""; var rdtefy23 = ""; var rdtefy24 = "";  var rdtefy25 = "";  var rdtePOM = "";//RDTE
				 var procfy19 = ""; var procfy20 = ""; var procfy21 = ""; var procfy22 = ""; var procfy23 = ""; var procfy24 = ""; var procfy25 = ""; var procPOM = "";//PROC
				 var otherfy19 = "";  var otherfy20 = "";  var otherfy21 = "";  var otherfy22 = "";  var otherfy23 = "";  var otherfy24 = "";  var otherfy25 = "";  var otherPOM = ""; //OTHER
				 var totalfy19 = ""; var totalfy20 = ""; var totalfy21 = ""; var totalfy22 = ""; var totalfy23 = ""; var totalfy24 = ""; var totalfy25 = ""; var totalPOM = "";//TOTAL
				 var quantityfy19 = ""; var quantityfy20 = ""; var quantityfy21 = ""; var quantityfy22 = ""; var quantityfy23 = ""; var quantityfy24 = ""; var quantityfy25 = ""; var quantityPOM = "";//QUANTITY
				 var DDfy19 = ""; var DDfy20 = ""; var DDfy21 = ""; var DDfy22 = ""; var DDfy23 = ""; var DDfy24 = ""; var DDfy25 = ""; var DDPOM = "";
				 

                if(slides[9][0]){

                    rdtefy19 = (slides[9][0].OData__x0046_Y19 !== null) ? (slides[9][0].OData__x0046_Y19 !== 0) ? '$'+slides[9][0].OData__x0046_Y19 : "" : "";
                    rdtefy20 = (slides[9][0].OData__x0046_Y20 !== null) ? (slides[9][0].OData__x0046_Y20 !== 0) ? '$'+slides[9][0].OData__x0046_Y20 : "" : "";
                    rdtefy21 = (slides[9][0].OData__x0046_Y21 !== null) ? (slides[9][0].OData__x0046_Y21 !== 0) ? '$'+slides[9][0].OData__x0046_Y21 : "" : "";
                    rdtefy22 = (slides[9][0].OData__x0046_Y22 !== null) ? (slides[9][0].OData__x0046_Y22 !== 0) ? '$'+slides[9][0].OData__x0046_Y22 : "" : "";
                    rdtefy23 = (slides[9][0].OData__x0046_Y23 !== null) ? (slides[9][0].OData__x0046_Y23 !== 0) ? '$'+slides[9][0].OData__x0046_Y23 : "" : "";
                    rdtefy24 = (slides[9][0].OData__x0046_Y24 !== null) ? (slides[9][0].OData__x0046_Y24 !== 0) ? '$'+slides[9][0].OData__x0046_Y24 : "" : "";
                    rdtefy25 = (slides[9][0].OData__x0046_Y25 !== null) ? (slides[9][0].OData__x0046_Y25 !== 0) ? '$'+slides[9][0].OData__x0046_Y25 : "" : "";
                    rdtePOM = (slides[9][0].POMPeriod !== null) ? (slides[9][0].POMPeriod !== 0) ? '$'+slides[9][0].POMPeriod  : "" : "";


                }
				
				

                if(slides[10][0]){
                    procfy19 = (slides[10][0].OData__x0046_Y19 !== null) ? (slides[10][0].OData__x0046_Y19 !== 0) ? '$'+slides[10][0].OData__x0046_Y19 : "" : "";
                    procfy20 = (slides[10][0].OData__x0046_Y20 !== null) ? (slides[10][0].OData__x0046_Y20 !== 0) ? '$'+slides[10][0].OData__x0046_Y20 : "" : "";
                    procfy21 = (slides[10][0].OData__x0046_Y21 !== null) ? (slides[10][0].OData__x0046_Y21 !== 0) ? '$'+slides[10][0].OData__x0046_Y21 : "" : "";
                    procfy22 = (slides[10][0].OData__x0046_Y22 !== null) ? (slides[10][0].OData__x0046_Y22 !== 0) ? '$'+slides[10][0].OData__x0046_Y22 : "" : "";
                    procfy23 = (slides[10][0].OData__x0046_Y23 !== null) ? (slides[10][0].OData__x0046_Y23 !== 0) ? '$'+slides[10][0].OData__x0046_Y23 : "" : "";
                    procfy24 = (slides[10][0].OData__x0046_Y24 !== null) ? (slides[10][0].OData__x0046_Y24 !== 0) ? '$'+slides[10][0].OData__x0046_Y24 : "" : "";
                    procfy25 = (slides[10][0].OData__x0046_Y25 !== null) ? (slides[10][0].OData__x0046_Y25 !== 0) ? '$'+slides[10][0].OData__x0046_Y25 : "" : "";
                    procPOM =  (slides[10][0].POMPeriod !== null) ? (slides[10][0].POMPeriod !== 0) ? '$'+slides[10][0].POMPeriod  : "" : "";


               }

                if(slides[11][0]){
                    otherfy19 = (slides[11][0].OData__x0046_Y19 !== null) ? (slides[11][0].OData__x0046_Y19 !== 0) ? '$'+slides[11][0].OData__x0046_Y19 : "" : "";
                    otherfy20 = (slides[11][0].OData__x0046_Y20 !== null) ? (slides[11][0].OData__x0046_Y20 !== 0) ? '$'+slides[11][0].OData__x0046_Y20 : "" : "";
                    otherfy21 = (slides[11][0].OData__x0046_Y21 !== null) ? (slides[11][0].OData__x0046_Y21 !== 0) ? '$'+slides[11][0].OData__x0046_Y21 : "" : "";
                    otherfy22 = (slides[11][0].OData__x0046_Y22 !== null) ? (slides[11][0].OData__x0046_Y22 !== 0) ? '$'+slides[11][0].OData__x0046_Y22 : "" : "";
                    otherfy23 = (slides[11][0].OData__x0046_Y23 !== null) ? (slides[11][0].OData__x0046_Y23 !== 0) ? '$'+slides[11][0].OData__x0046_Y23 : "" : "";
                    otherfy24 = (slides[11][0].OData__x0046_Y24 !== null) ? (slides[11][0].OData__x0046_Y24 !== 0) ? '$'+slides[11][0].OData__x0046_Y24 : "" : "";
                    otherfy25 = (slides[11][0].OData__x0046_Y25 !== null) ? (slides[11][0].OData__x0046_Y25 !== 0) ? '$'+slides[11][0].OData__x0046_Y25 : "" : "";
                    otherPOM = (slides[11][0].POMPeriod !== null) ? (slides[11][0].POMPeriod !== 0) ? '$'+slides[11][0].POMPeriod  : "" : "";



                }

                if(slides[12][0]){
                    totalfy19 = (slides[12][0].OData__x0046_Y19 !== null) ? (slides[12][0].OData__x0046_Y19 !== 0) ? '$'+slides[12][0].OData__x0046_Y19 : "" : "";
                    totalfy20 = (slides[12][0].OData__x0046_Y20 !== null) ? (slides[12][0].OData__x0046_Y20 !== 0) ? '$'+slides[12][0].OData__x0046_Y20 : "" : "";
                    totalfy21 = (slides[12][0].OData__x0046_Y21 !== null) ? (slides[12][0].OData__x0046_Y21 !== 0) ? '$'+slides[12][0].OData__x0046_Y21 : "" : "";
                    totalfy22 = (slides[12][0].OData__x0046_Y22 !== null) ? (slides[12][0].OData__x0046_Y22 !== 0) ? '$'+slides[12][0].OData__x0046_Y22 : "" : "";
                    totalfy23 = (slides[12][0].OData__x0046_Y23 !== null) ? (slides[12][0].OData__x0046_Y23 !== 0) ? '$'+slides[12][0].OData__x0046_Y23 : "" : "";
                    totalfy24 = (slides[12][0].OData__x0046_Y24 !== null) ? (slides[12][0].OData__x0046_Y24 !== 0) ? '$'+slides[12][0].OData__x0046_Y24 : "" : "";
                    totalfy25 = (slides[12][0].OData__x0046_Y25 !== null) ? (slides[12][0].OData__x0046_Y25 !== 0) ? '$'+slides[12][0].OData__x0046_Y25 : "" : "";
                    totalPOM = (slides[12][0].POMPeriod !== null) ? (slides[12][0].POMPeriod !== 0) ? '$'+slides[12][0].POMPeriod  : "" : "";


                }

                if(slides[14][0]){

                    quantityfy19 = (slides[14][0].PQtyFY19 !== null) ? (slides[14][0].PQtyFY19 !== 0) ? slides[14][0].PQtyFY19 : "" : "";
                    quantityfy20 = (slides[14][0].PQtyFY20 !== null) ? (slides[14][0].PQtyFY20 !== 0) ? slides[14][0].PQtyFY20 : "" : "";
                    quantityfy21 = (slides[14][0].PQtyFY21 !== null) ? (slides[14][0].PQtyFY21 !== 0) ? slides[14][0].PQtyFY21 : "" : "";
                    quantityfy22 = (slides[14][0].PQtyFY22 !== null) ? (slides[14][0].PQtyFY22 !== 0) ? slides[14][0].PQtyFY22 : "" : "";
                    quantityfy23 = (slides[14][0].PQtyFY23 !== null) ? (slides[14][0].PQtyFY23 !== 0) ? slides[14][0].PQtyFY23 : "" : "";
                    quantityfy24 = (slides[14][0].PQtyFY24 !== null) ? (slides[14][0].PQtyFY24 !== 0) ? slides[14][0].PQtyFY24 : "" : "";
                    quantityfy25 = (slides[14][0].PQtyFY25 !== null) ? (slides[14][0].PQtyFY25 !== 0) ? slides[14][0].PQtyFY25 : "" : "";
                    quantityPOM= (slides[14][0].POMPeriod !== null) ? (slides[14][0].POMPeriod !== 0) ? slides[14][0].POMPeriod  : "" : "";




                }

               if(slides[13][0]){

                    DDfy19 = (slides[13][0].OData__x0046_Y19 !== null) ? (slides[13][0].OData__x0046_Y19 !== 0) ? '$'+slides[13][0].OData__x0046_Y19 : "" : "";
                    DDfy20 = (slides[13][0].OData__x0046_Y20 !== null) ? (slides[13][0].OData__x0046_Y20 !== 0) ? '$'+slides[13][0].OData__x0046_Y20 : "" : "";
                    DDfy21 = (slides[13][0].OData__x0046_Y21 !== null) ? (slides[13][0].OData__x0046_Y21 !== 0) ? '$'+slides[13][0].OData__x0046_Y21 : "" : "";
                    DDfy22 = (slides[13][0].OData__x0046_Y22 !== null) ? (slides[13][0].OData__x0046_Y22 !== 0) ? '$'+slides[13][0].OData__x0046_Y22 : "" : "";
                    DDfy23 = (slides[13][0].OData__x0046_Y23 !== null) ? (slides[13][0].OData__x0046_Y23 !== 0) ? '$'+slides[13][0].OData__x0046_Y23 : "" : "";
                    DDfy24 = (slides[13][0].OData__x0046_Y24 !== null) ? (slides[13][0].OData__x0046_Y24 !== 0) ? '$'+slides[13][0].OData__x0046_Y24 : "" : "";
                    DDfy25 = (slides[13][0].OData__x0046_Y25 !== null) ? (slides[13][0].OData__x0046_Y25 !== 0) ? '$'+slides[13][0].OData__x0046_Y25 : "" : "";
                    DDPOM= (slides[13][0].POMPeriod !== null) ? (slides[13][0].POMPeriod !== 0) ? '$'+slides[13][0].POMPeriod  : "" : "";



               }
				
				
										//Grid Properties: POM ALLO
								quad.addText('POM Allocation:', { x:0.89, y:6.5, fontSize:12, fontFace:'Arial', color:'000000', bold:true, underline:true });
								quad.addText('Actual amount funded', { x:0.89, y:6.78, fontSize:9, fontFace:'Arial', color:'000000', bold:true, italic:true, });


								var rows = [];
								// Row One: cells will be formatted according to any options provided to `addTable()`
								rows.push( ['$($000)', 'FY19', 'FY20', 'FY21', 'FY22', 'FY23', 'FY24', 'FY25', 'FY21-25'] );
								// Row Two: set/override formatting for each cell
								rows.push(
								
								[
                                        { text:'RDTE', options:{ valign:'t', align:'l', fontFace:'Arial'   } },
                                        { text:''+rdtefy19+' ', options:{ valign:'t', align:'c', fontFace:'Arial'   } },
                                        { text:''+rdtefy20+'', options:{ valign:'t', align:'c', fontFace:'Arial' } },
                                        { text:''+rdtefy21+'', options:{ valign:'t', align:'c', fontFace:'Arial' } },
                                        { text:''+rdtefy22+'', options:{ valign:'t', align:'c', fontFace:'Arial' } },
                                        { text:''+rdtefy23+'', options:{ valign:'t', align:'c', fontFace:'Arial' } },
                                        { text:''+rdtefy24+'', options:{ valign:'t', align:'c', fontFace:'Arial' } },
                                        { text:''+rdtefy25+'', options:{ valign:'t', align:'c', fontFace:'Arial' } },
                                        { text:''+rdtePOM+'', options:{ valign:'t', align:'c', fontFace:'Arial' } }
								],
								                                    [
                                        { text:'PROC', options:{ valign:'t', align:'l', fontFace:'Arial'   } },
                                        { text:''+procfy19+' ', options:{ valign:'t', align:'c', fontFace:'Arial'   } },
                                        { text:''+procfy20+' ', options:{ valign:'t', align:'c', fontFace:'Arial' } },
                                        { text:''+procfy21+' ', options:{ valign:'t', align:'c', fontFace:'Arial' } },
                                        { text:''+procfy22+' ', options:{ valign:'t', align:'c', fontFace:'Arial' } },
                                        { text:''+procfy23+' ', options:{ valign:'t', align:'c', fontFace:'Arial' } },
                                        { text:''+procfy24+' ', options:{ valign:'t', align:'c', fontFace:'Arial' } },
                                        { text:''+procfy25+' ', options:{ valign:'t', align:'c', fontFace:'Arial' } },
                                        { text:''+procPOM+'', options:{ valign:'t', align:'c', fontFace:'Arial' } }

                                    ],
                                    [
                                        { text:'Other', options:{ valign:'t', align:'l', fontFace:'Arial'   } },
                                        { text:''+otherfy19+' ', options:{ valign:'t', align:'c', fontFace:'Arial'   } },
                                        { text:''+otherfy20+' ', options:{ valign:'t', align:'c', fontFace:'Arial' } },
                                        { text:''+otherfy21+' ', options:{ valign:'t', align:'c', fontFace:'Arial' } },
                                        { text:''+otherfy22+' ', options:{ valign:'t', align:'c', fontFace:'Arial' } },
                                        { text:''+otherfy23+' ', options:{ valign:'t', align:'c', fontFace:'Arial' } },
                                        { text:''+otherfy24+' ', options:{ valign:'t', align:'c', fontFace:'Arial' } },
                                        { text:''+otherfy25+' ', options:{ valign:'t', align:'c', fontFace:'Arial' } },
                                        { text:''+otherPOM+'', options:{ valign:'t', align:'c', fontFace:'Arial' } }

                                    ],
                                    [
                                        { text:'Total', options:{ valign:'t', align:'l', fontFace:'Arial'   } },
                                        { text:''+totalfy19+' ', options:{ valign:'t', align:'c', fontFace:'Arial'   } },
                                        { text:''+totalfy20+' ', options:{ valign:'t', align:'c', fontFace:'Arial' } },
                                        { text:''+totalfy21+' ', options:{ valign:'t', align:'c', fontFace:'Arial' } },
                                        { text:''+totalfy22+' ', options:{ valign:'t', align:'c', fontFace:'Arial' } },
                                        { text:''+totalfy23+' ', options:{ valign:'t', align:'c', fontFace:'Arial' } },
                                        { text:''+totalfy24+' ', options:{ valign:'t', align:'c', fontFace:'Arial' } },
                                        { text:''+totalfy25+' ', options:{ valign:'t', align:'c', fontFace:'Arial' } },
                                        { text:''+totalPOM+'', options:{ valign:'t', align:'c', fontFace:'Arial' } }

                                    ],
                                    [
                                        { text:'Quantity', options:{ valign:'t', align:'l', fontFace:'Arial'   } },
                                        { text:''+quantityfy19+' ', options:{ valign:'t', align:'c', fontFace:'Arial'   } },
                                        { text:''+quantityfy20+' ', options:{ valign:'t', align:'c', fontFace:'Arial' } },
                                        { text:''+quantityfy21+' ', options:{ valign:'t', align:'c', fontFace:'Arial' } },
                                        { text:''+quantityfy22+' ', options:{ valign:'t', align:'c', fontFace:'Arial' } },
                                        { text:''+quantityfy23+' ', options:{ valign:'t', align:'c', fontFace:'Arial' } },
                                        { text:''+quantityfy24+' ', options:{ valign:'t', align:'c', fontFace:'Arial' } },
                                        { text:''+quantityfy25+' ', options:{ valign:'t', align:'c', fontFace:'Arial' } },
                                        { text:''+quantityPOM+'', options:{ valign:'t', align:'c', fontFace:'Arial' } }

                                    ],
                                    [
                                        { text:'Deep Dive', options:{ valign:'t', align:'l', fontFace:'Arial'   } },
                                        { text:''+DDfy19+'', options:{ valign:'t', align:'c', fontFace:'Arial'   } },
                                        { text:''+DDfy20+'', options:{ valign:'t', align:'c', fontFace:'Arial' } },
                                        { text:''+DDfy21+'', options:{ valign:'t', align:'c', fontFace:'Arial' } },
                                        { text:''+DDfy22+'', options:{ valign:'t', align:'c', fontFace:'Arial' } },
                                        { text:''+DDfy23+'', options:{ valign:'t', align:'c', fontFace:'Arial' } },
                                        { text:''+DDfy24+'', options:{ valign:'t', align:'c', fontFace:'Arial' } },
                                        { text:''+DDfy25+'', options:{ valign:'t', align:'c', fontFace:'Arial' } },
                                        { text:''+DDPOM+'', options:{ valign:'t', align:'c', fontFace:'Arial' } }

                                    ]

								
								
								);
								quad.addTable( rows, { x:0.49, y:7.08, w:8.0, h:2.0, rowH:0.1, rowW:0.0, fill:'FFFFFF', fontSize:14, color:'000000', valign:'m', autoPage:false } );
								
								
								
								


								/*var aao_TNG_Base_TDA = (slides[7][0]) ? slides[7][0].TRAINING_BASE || "" : "";
								var aao_COMPO_1_OTOE= (slides[7][0]) ? slides[7][0].ACTIVE_OTOE || "" : "";
								var aao_COMPO_2_OTOE = (slides[7][0]) ? slides[7][0].ARNG_OTOE || "" : "";
								var aao_COMPO_3_OTOE = (slides[7][0]) ? slides[7][0].USAR_OTOE || "" : "";
								var aao_APS_OTOE = (slides[7][0]) ? slides[7][0].APS_OTOE|| "" : "";
								var aao_ACT_SETS = (slides[7][0]) ? slides[7][0].ACT_SETS|| "" : "";
								var aao_WR = (slides[7][0]) ? slides[7][0].WR|| "" : "";
								var aao_WRA = (slides[7][0]) ? slides[7][0].WRA|| "" : "";
								var aao_OPS = (slides[7][0]) ? slides[7][0].OPS|| "" : "";
								var aao_RCF = (slides[7][0]) ? slides[7][0].RCF|| "" : "";
								var aao_ORF = (slides[7][0]) ? slides[7][0].ORF|| "" : "";
								var aao_Other_TDA = (slides[7][0]) ? ( slides[7][0].OTHER_TDA && slides[7][0].OTHER_REQ ) ? slides[7][0].OTHER_TDA + slides[7][0].OTHER_REQ : 0   || "" : "";
								
								

								/*var aao_TNG_Base_TDA = (slides[7][0]) ? slides[7][0].TRAINING_BASE || "" : "";
								var aao_COMPO_1_OTOE= (slides[7][0]) ? slides[7][0].ACTIVE_OTOE || "" : "";
								var aao_COMPO_2_OTOE = (slides[7][0]) ? slides[7][0].ARNG_OTOE || "" : "";
								var aao_COMPO_3_OTOE = (slides[7][0]) ? slides[7][0].USAR_OTOE || "" : "";
								var aao_APS_OTOE = (slides[7][0]) ? slides[7][0].APS_OTOE|| "" : "";
								var aao_ACT_SETS = (slides[7][0]) ? slides[7][0].ACT_SETS|| "" : "";
								var aao_WR = (slides[7][0]) ? slides[7][0].WR|| "" : "";
								var aao_WRA = (slides[7][0]) ? slides[7][0].WRA|| "" : "";
								var aao_OPS = (slides[7][0]) ? slides[7][0].OPS|| "" : "";
								var aao_RCF = (slides[7][0]) ? slides[7][0].RCF|| "" : "";
								var aao_ORF = (slides[7][0]) ? slides[7][0].ORF|| "" : "";
								var aao_Other_TDA = (slides[7][0]) ? ( slides[7][0].OTHER_TDA && slides[7][0].OTHER_REQ ) ? slides[7][0].OTHER_TDA + slides[7][0].OTHER_REQ : 0   || "" : "";
								var aao_Total = (slides[7][0]) ? slides[7][0].TOTAL_|| "" : ""; */



								
								
								
								
								var rows2 = [];
								// Row One: cells will be formatted according to any options provided to `addTable()`
								rows2.push( ['Element', 'AAO', 'APO', 'On-Hand'] );
								// Row Two: set/override formatting for each cell
								rows2.push(
								
									[
											{ text:'Training Base Quantity for TDAs', options:{ valign:'t', align:'l', fontFace:'Arial'} },
											{ text:'', options:{ valign:'t', align:'c', fontFace:'Arial'} },
											{ text:'', options:{ valign:'t', align:'c', fontFace:'Arial'} },
											{ text:' ', options:{ valign:'t', align:'c', fontFace:'Arial'} }
									],
									[
											{ text:'BOIP - OTOE COMPO 1', options:{ valign:'t', align:'l', fontFace:'Arial'} },
											{ text:'', options:{ valign:'t', align:'c', fontFace:'Arial'} },
											{ text:'', options:{ valign:'t', align:'c', fontFace:'Arial'} },
											{ text:'', options:{ valign:'t', align:'c', fontFace:'Arial'} }

                                    ],
									[
											{ text:'BOIP - OTOE COMPO 2', options:{ valign:'t', align:'l', fontFace:'Arial'} },
											{ text:'', options:{ valign:'t', align:'c', fontFace:'Arial'} },
											{ text:'', options:{ valign:'t', align:'c', fontFace:'Arial'} },
											{ text:'', options:{ valign:'t', align:'c', fontFace:'Arial'} }

                                    ],
									[
											{ text:'BOIP - OTOE COMPO 3', options:{ valign:'t', align:'l', fontFace:'Arial'} },
											{ text:'', options:{ valign:'t', align:'c', fontFace:'Arial'} },
											{ text:'', options:{ valign:'t', align:'c', fontFace:'Arial'} },
											{ text:'', options:{ valign:'t', align:'c', fontFace:'Arial'} }

                                    ],
									[
                                        { text:'Army Pre-positioned Stock Unit Sets', options:{ valign:'t', align:'l', fontFace:'Arial'} },
                                        { text:'', options:{ valign:'t', align:'c', fontFace:'Arial'} },
                                        { text:'', options:{ valign:'t', align:'c', fontFace:'Arial'} },
                                        { text:'', options:{ valign:'t', align:'c', fontFace:'Arial'} }


                                    ],
                                    [
                                        { text:'APS Activity Sets', options:{ valign:'t', align:'l', fontFace:'Arial'} },
                                        { text:'', options:{ valign:'t', align:'c', fontFace:'Arial'} },
                                        { text:'', options:{ valign:'t', align:'c', fontFace:'Arial'} },
                                        { text:'', options:{ valign:'t', align:'c', fontFace:'Arial'} }


                                    ],
                                    [
                                        { text:'Army War Reserve Sustainment Stocks', options:{ valign:'t', align:'l', fontFace:'Arial'} },
                                        { text:'', options:{ valign:'t', align:'c', fontFace:'Arial'} },
                                        { text:'', options:{ valign:'t', align:'c', fontFace:'Arial'} },
                                        { text:'', options:{ valign:'t', align:'c', fontFace:'Arial'} }


                                    ],
                                    [
                                        { text:'War Reserve Stocks for Allies', options:{ valign:'t', align:'l', fontFace:'Arial'} },
                                        { text:'', options:{ valign:'t', align:'c', fontFace:'Arial'} },
                                        { text:'', options:{ valign:'t', align:'c', fontFace:'Arial'} },
                                        { text:'', options:{ valign:'t', align:'c', fontFace:'Arial'} }


                                    ],
                                    [
                                        { text:'Operational Project Stocks', options:{ valign:'t', align:'l', fontFace:'Arial'} },
                                        { text:'', options:{ valign:'t', align:'c', fontFace:'Arial'} },
                                        { text:'', options:{ valign:'t', align:'c', fontFace:'Arial'} },
                                        { text:'', options:{ valign:'t', align:'c', fontFace:'Arial'} }


                                    ],
                                    [
                                        { text:'Repair Cycle Float', options:{ valign:'t', align:'l', fontFace:'Arial'} },
                                        { text:'', options:{ valign:'t', align:'c', fontFace:'Arial'} },
                                        { text:'', options:{ valign:'t', align:'c', fontFace:'Arial'} },
                                        { text:'', options:{ valign:'t', align:'c', fontFace:'Arial'} }


                                    ],
                                    [
                                        { text:'Operational Readiness Float', options:{ valign:'t', align:'l', fontFace:'Arial'} },
                                        { text:'', options:{ valign:'t', align:'c', fontFace:'Arial'} },
                                        { text:'', options:{ valign:'t', align:'c', fontFace:'Arial'} },
                                        { text:'', options:{ valign:'t', align:'c', fontFace:'Arial'} }


                                    ],
                                    [
                                        { text:'Other TDA Requirements', options:{ valign:'t', align:'l', fontFace:'Arial'} },
                                        { text:'', options:{ valign:'t', align:'c', fontFace:'Arial'} },
                                        { text:'', options:{ valign:'t', align:'c', fontFace:'Arial'} },
                                        { text:'', options:{ valign:'t', align:'c', fontFace:'Arial'} }


                                    ],
                                    [
                                        { text:'Total', options:{ valign:'t', align:'r', fontFace:'Arial', bold:true} },
                                        { text:'', options:{ valign:'t', align:'c', fontFace:'Arial', bold:true} },
                                        { text:'', options:{ valign:'t', align:'c', fontFace:'Arial', bold:true} },
                                        { text:'', options:{ valign:'t', align:'c', fontFace:'Arial', bold:true} }


                                    ]




								
								
								);
								quad.addTable( rows2, { x:8.61, y:1.93, w:5.0, h:2.0, rowH:0.1, rowW:0.0, colW:[4.5, 1.0, 1.0], fill:'FFFFFF', fontSize:14, color:'000000', valign:'m', autoPage:false} );
								
								var MDOASSESSMENT = (slides[6][0]) ? slides[6][0].ContributionToMDO || "" : "";
								var PROGRAMMATICASSESSMENT = (slides[6][0]) ? slides[6][0].PROGASSESSMENT || "" : "";
								var COECGASSESSMENT = (slides[6][0]) ? slides[6][0].COE || "" : "";
								var EEPEGREC = (slides[6][0]) ? slides[6][0].EEPEG || "" : "";

								
								//Programmatic Assessment
                                var Programmatic_Assessment = [
            
                                    [{ text:'Programmatic Assessment ', options:{ valign:'t', align:'c', fontFace:'Arial', bold:true  } }],
                                    [{ text:'Contribution to MDO: '+MDOASSESSMENT+' ', options:{ valign:'t', align:'l', fontFace:'Arial', bold:true  } }],
                                    [{ text:'Programmatic Assessment: '+PROGRAMMATICASSESSMENT+'   ', options:{ valign:'t', align:'l', fontFace:'Arial', bold:true  } }],
                                    [{ text:'COE CG Assessment: '+COECGASSESSMENT+' ', options:{ valign:'t', align:'l', fontFace:'Arial', bold:true   } }],
                                    [{ text:'EE PEG Co-Chair Recommendation: '+EEPEGREC+' ', options:{ valign:'t', align:'l', fontFace:'Arial', bold:true   } }]

                                                                                 
                                ]
                                
                                    var Programmatic_Assessment_Grid = { x:8.73, y:6.52, w:7.77, h:5.18, rowH:0.1, rowW:0.0, fill:'FFFFFF', fontSize:14, color:'000000', valign:'m', autoPage:false, border:{color:'FFFFFF'}};
                                    quad.addTable( Programmatic_Assessment, Programmatic_Assessment_Grid );



								/*
                                

                                //POM Info
                                var POM_Definitions = [
            
                                    [{ text:'Deep Dive Impacts: Reduced to ~$1B / yr (-$1.04B over FYDP) No Impact to the AAO (104,525) or APO (49,099)', options:{ valign:'t', align:'l', fontFace:'Arial',bold:true  } }],
                                    [{ text:'Congressional Marks ', options:{ valign:'t', align:'l', fontFace:'Arial',bold:true   } }],
                                    [{ text:'PDM ', options:{ valign:'t', align:'l', fontFace:'Arial',bold:true   } }],
                                    [{ text:'Other Funding Issues ', options:{ valign:'t', align:'l', fontFace:'Arial',bold:true   } }],
                                    [{ text:'Root # ', options:{ valign:'t', align:'l', fontFace:'Arial',bold:true   } }],
                                    [{ text:'MoD Level ', options:{ valign:'t', align:'l', fontFace:'Arial',bold:true   } }],
                                    [{ text:'LINs ', options:{ valign:'t', align:'l', fontFace:'Arial'   } }]
                                ]

                                var POM_Definitions_Grid = { x:0.5, y:9.5, w:7.99, h:1.63, rowH:0.1, rowW:0.0,  fill:'FFFFFF', fontSize:9, color:'000000', valign:'m', autoPage:false, border:{color:'FFFFFF'}};
                                quad.addTable( POM_Definitions, POM_Definitions_Grid  );

                                
                
                                
									
									*/

                                    
                                


                    return pptx;


                    


                

                

            }
            catch(e){
                console.log(e);
            }

        },//programSlides4





        getItem:function(){

            try{

                if (typeof(Storage) !== "undefined") {
                    var data = sessionStorage.getItem('SourceData');
                    var obj = JSON.parse(data);
                    return obj;

       
                } else {
                    console.log('storage not supported');
                }
            }
            catch(e){
                console.log(e);
            }

        }


    }//return

}]);//PresentationService


/*Permissions Service */
angular.module('app').factory('PermissionsService', ['$q',function ($q) {

    return{


        clearStorage:function(){

            try{

                if (typeof(Storage) !== "undefined") {

                    sessionStorage.clear();

    
    
                } else {
                    console.log('storage not supported');
                }
    

            }
            catch(e){
                console.log(e);
            }

        },


        getItem:function(){

            try{

                if (typeof(Storage) !== "undefined") {
                    var data = sessionStorage.getItem('SourceData');
                    var obj = JSON.parse(data);
                    return obj;

       
                } else {
                    console.log('storage not supported');
                }
            }
            catch(e){
                console.log(e);
            }

        },


        registerUser:function(user){

            try{

                if (typeof(Storage) !== "undefined") {

                    //console.log('Add BOS');
                    //console.log(bos)
                    //console.log(rootArr);
                    //console.log(sourceData);

                    console.log(user)
                    var key = user.Key;
                    var principalType = user.EntityData.PrincipalType;

                    if(principalType === 'SharePointGroup'){
                        alert('PLEASE ENTER A VALID USER');
                    }else{

                        var sourceData = {};
                        sourceData['Key'] = key;
                        sourceData['Principal'] = principalType;
    

                    }


                    var obj = JSON.stringify(sourceData);
                    sessionStorage.setItem('SourceData', obj);
                    


    
    
                } else {
                    console.log('storage not supported');
                }
    

            }
            catch(e){
                console.log(e);
            }

        },


        addUserToSharePointGroup: function(user, sourceData){

            try{

                console.log('adding user to group')
                console.log(user);
                console.log(sourceData)

                var principalType = user.EntityData.PrincipalType;
                var key = sourceData.Key;

                if(principalType === 'User'){
                    alert('PLEASE ENTER A VALID USER');
                    
                }else if(principalType === 'SharePointGroup'){

                    var siteUrl = _spPageContextInfo.webAbsoluteUrl;
                    var groupID = parseInt(user.EntityData.SPGroupID, 10)
                    var groupName = user.Key;
                    console.log(groupID + ' : ' + key +  ' : ' + siteUrl);


                        
                    var clientContext = new SP.ClientContext(siteUrl);
                    var collGroup = clientContext.get_web().get_siteGroups();
                    var web = clientContext.get_web(); 
                    var spGroup = collGroup.getByName(groupName);
                    var user = web.ensureUser(key);

                    var userCollection = spGroup.get_users();  
                    userCollection.addUser(user);

                    clientContext.load(user);  
                    clientContext.load(spGroup); 
                    clientContext.executeQueryAsync(onQuerySucceeded, onQueryFailed);

                }

                function onQuerySucceeded() {  

                    var url = siteUrl + '/_layouts/15/people.aspx?MembershipGroupId='+groupID+'';
                    setTimeout(function(){ window.open(url, '_blank'); }, 3000);

                }  
              
                function onQueryFailed() {  
                    alert('Request failed. ' + args.get_message() + '\n' + args.get_stackTrace());
                }  
        

            }
            catch(e){
                console.log(e);
            }


        },

        removeUserFromSharePointGroup: function(user, sourceData){

            try{

                console.log('removing user from group');
                console.log(user);
                console.log(sourceData)

                var principalType = user.EntityData.PrincipalType;
                var key = sourceData.Key;

                

                if(principalType === 'User'){
                    alert('PLEASE ENTER A VALID USER');
                    
                }else if(principalType === 'SharePointGroup'){

                    var siteUrl = _spPageContextInfo.webAbsoluteUrl;
                    var groupID = parseInt(user.EntityData.SPGroupID, 10)
                    var groupName = user.Key;
                    console.log(groupID + ' : ' + key +  ' : ' + siteUrl);


                        
                    var clientContext = new SP.ClientContext(siteUrl);
                    var collGroup = clientContext.get_web().get_siteGroups();
                    var web = clientContext.get_web(); 
                    var spGroup = collGroup.getByName(groupName);
                    var user = web.ensureUser(key);

                    var userCollection = spGroup.get_users();  
                    userCollection.removeByLoginName(key); 


                    clientContext.executeQueryAsync(onQuerySucceeded, onQueryFailed);

                }



                function onQuerySucceeded() {  

                    var url = siteUrl + '/_layouts/15/people.aspx?MembershipGroupId='+groupID+'';
                    setTimeout(function(){ window.open(url, '_blank'); }, 3000);



                }  
              
                function onQueryFailed() {  
                    alert('Request failed. ' + args.get_message() + '\n' + args.get_stackTrace());
                }  

                


        
        

            }
            catch(e){
                console.log(e);
            }

        },

        breakSecurityInheritanceAddUser: function(user, itemID, roleDef, programLists){

            try{
                var siteUrl  = _spPageContextInfo.webServerRelativeUrl;
                console.log(siteUrl)      
                console.log(list + ' : ' + key + ' : ' + itemID + ' : ' + principalType);
            
        
                var clientContext = new SP.ClientContext(siteUrl);
                var oList = clientContext.get_web().get_lists().getByTitle(list);
                
                var oListItem = oList.getItemById(itemID);  
                oListItem.breakRoleInheritance(false);
        
                var oUser = clientContext.get_web().get_siteUsers().getByLoginName(key);
        
                var collRoleDefinitionBinding = SP.RoleDefinitionBindingCollection.newObject(clientContext);
            
                collRoleDefinitionBinding.add(clientContext.get_web().get_roleDefinitions().getByType(roleDef));
            
                oListItem.get_roleAssignments().add(oUser, collRoleDefinitionBinding);
        
                clientContext.load(oUser);
                clientContext.load(oListItem);
        
                clientContext.executeQueryAsync(Function.createDelegate(this, this.onQuerySucceeded), Function.createDelegate(this, this.onQueryFailed));
        

            }
            catch(e){
                console.log(e);
            }
        
        }




    }//return

}]);//Permissions Service




/* PROGRAM SERVICE */
angular.module('app').factory('ProgramService', function ($q) {

	
    return {

        createProgramGroups: function (area, bos, program, id, list, sourceData) {

            try{

                SP.SOD.executeFunc('SP.Runtime.js', 'SP.ClientContext',
                function () {
                    SP.SOD.executeFunc('SP.js', 'SP.ClientContext',
                    function () {

                        //console.log(sourceData);
                        //console.log(programID);

                        console.log('update program')

                        var root  = (sourceData[bos]['Roots'].length > 0) ?  sourceData[bos]['Roots'].toString() : ""; 
                        var key4  = (sourceData[bos]['Key4s'].length > 0) ?  sourceData[bos]['Key4s'].toString() : ""; 
                        var LIN  = (  sourceData[bos]['LINs'].length > 0) ?  sourceData[bos]['LINs'].toString() : "";

                        console.log(root)
                        console.log(key4)
                        console.log(LIN)
                        console.log(list + ' : ' + id)


                        

                        //Update Program Details
                        var path = location.pathname;
                        var locsearch1 = path.search('/programs');
                        var ctx = '';

                        if(locsearch1 !== -1){
                            ctx = _spPageContextInfo.webAbsoluteUrl;  

                        }else{
                            ctx = _spPageContextInfo.webAbsoluteUrl + '/programs';  

                        }
                
                        var clientContext = new SP.ClientContext(ctx);
                        var oList =  clientContext.get_web().get_lists().getByTitle(list);//MILTECH
                        var oListItem = oList.getItemById(id);  

                        

                        //core                 
                        oListItem.set_item('progRoot', root);
                        oListItem.set_item('progkey4', key4);
                        oListItem.set_item('progLIN', LIN);


                        oListItem.update();                 
                        clientContext.load(oListItem);	 
                        
                        
                        clientContext.executeQueryAsync(onRequestSucceeded, onRequestFailed);

                            function onRequestSucceeded() {
                                var itemID = oListItem.get_id().toString();
                                console.log( program + '\nUpdated ');    

                            }
      
                            function onRequestFailed(sender, args) {
                                    console.log('Request failed. ' + args.get_message() + 
                                        '\n' + args.get_stackTrace());
                            }



                    
                            
                            
                                

                        
                    });//SP.SOD.executeFunc('SP.js', 'SP.ClientContext')
                });// SP.SOD.executeFunc('SP.Runtime.js', 'SP.ClientContext')



            }
            catch(e){

                console.log(e);

            }

        },//createProgramGroups


        initializePeoplePicker: function (peoplePickerElementId) {

            try{

                    // Create a schema to store picker properties, and set the properties.
                    var schema = {};
                    schema['PrincipalAccountType'] = 'User,DL,SecGroup,SPGroup';
                    schema['SearchPrincipalSource'] = 15;
                    schema['ResolvePrincipalSource'] = 15;
                    schema['AllowMultipleValues'] = true;
                    schema['MaximumEntitySuggestions'] = 50;
                    schema['Width'] = '280px';

                    // Render and initialize the picker. 
                    // Pass the ID of the DOM element that contains the picker, an array of initial
                    // PickerEntity objects to set the picker value, and a schema that defines
                    // picker properties.
                    this.SPClientPeoplePicker_InitStandaloneControlWrapper(peoplePickerElementId, null, schema);

            }
            catch(e){

                console.log(e);

            }

        },//renderPeoplePicker





        updateProgramKey4s: function (bos, programItemID, sourceData) {

            try{


                        //console.log(sourceData);
                        //console.log(programID);

                        console.log('update program')

                        var list = 'Programs_'+bos+'';
                        var itemID = sourceData.ItemID;
                        var program = sourceData.Program;
                        var root  = (sourceData[bos]['Roots'].length > 0) ? sourceData[bos]['Roots'].toString() : ""; 
                        var key4  = (sourceData[bos]['Key4s'].length > 0) ? sourceData[bos]['Key4s'].toString() : ""; 
                        //var LIN  = (  sourceData[bos]['LINs'].length > 0) ?  sourceData[bos]['LINs'].toString() : "";

                        console.log(root)
                        console.log(key4 )
                        console.log(list + ' : ' + itemID)


                        

                        var ctx = _spPageContextInfo.webAbsoluteUrl;  
                        var clientContext = new SP.ClientContext(ctx);
                        var oList =  clientContext.get_web().get_lists().getByTitle(list);//MILTECH
                        var oListItem = oList.getItemById(itemID);  

                        

                        //core                 
                        oListItem.set_item('progRoots', root);
                        oListItem.set_item('progkey4s', key4);
                        //oListItem.set_item('progLINs', LIN);


                        oListItem.update();                 
                        clientContext.load(oListItem);	 
                        
                        
                        clientContext.executeQueryAsync(onRequestSucceeded, onRequestFailed);

                        

                            function onRequestSucceeded() {
                                var itemID = oListItem.get_id().toString();
                                alert( program + '\nUpdated ');    

                            }
      
                            function onRequestFailed(sender, args) {
                                    console.log('Request failed. ' + args.get_message() + 
                                        '\n' + args.get_stackTrace());
                            }




            }
            catch(e){

                console.log(e);

            }

        },//updateProgram

        downloadProgram: function (bos, portfolio, program, programID, root, key4, LIN) {

            try{

                console.log('download program properties')

                
        

                //Download
                jQuery('#currentProgramBOS').append(bos);
                jQuery('#currentProgramPortfolio').append(portfolio);
                jQuery('#currentProgramID').text(programID);
                jQuery('#currentProgramName').append(program);
                jQuery('#currentProgramRoot').append(root);
                jQuery('#currentProgramKey4').append(key4);
                jQuery('#currentProgramLIN').append(LIN);

                


            }
            catch(e){

                console.log(e);

            }

        },//downloadProgram

        updateProgramAssessment: function (area, bos, program, id, list) {

            try{

                SP.SOD.executeFunc('SP.Runtime.js', 'SP.ClientContext',
                function () {
                    SP.SOD.executeFunc('SP.js', 'SP.ClientContext',
                    function () {

                        var mdo_assessment_status =  $( "#mdo-assessment-status option:selected" ).text();
                        var mdo_viability_assessment_text = jQuery("#mdo-viability-assessment-text").val();
                        var program_assessment_status =  $( "#program-assessment-status option:selected" ).text();
                        var programmatic_assessment_text = jQuery("#programmatic-assessment-text").val();
                        var coe_cg_assessment_status =  $( "#coe-cg-assessment-status option:selected" ).text();
                        var COE_CG_Assessment_text = jQuery("#COE-CG-Assessment-text").val();
                        var EE_PEG_Rec_text = jQuery("#EE-PEG-Rec-text").val();


    
                        //Update Program Details
                        var ctx = _spPageContextInfo.webAbsoluteUrl;                
                        var clientContext = new SP.ClientContext(ctx);
                        var oList =  clientContext.get_web().get_lists().getByTitle(list);//MILTECH
                        var oListItem = oList.getItemById(id);  
                        

                         oListItem.set_item('mdoassessmentstatus', mdo_assessment_status);
                         oListItem.set_item('MDOASSESSMENT', mdo_viability_assessment_text);
                         oListItem.set_item('programmaticassessmentstatus', program_assessment_status);
                         oListItem.set_item('PROGRAMMATICASSESSMENT', programmatic_assessment_text);
                         oListItem.set_item('coecgassessmentstatus', coe_cg_assessment_status);
                         oListItem.set_item('COECGASSESSMENT', COE_CG_Assessment_text);
                         oListItem.set_item('EEPEGREC', EE_PEG_Rec_text);




                        oListItem.update();                 
                        clientContext.load(oListItem);	       
                        clientContext.executeQueryAsync(onRequestSucceeded, onRequestFailed);

                            function onRequestSucceeded() {
                                var itemID = oListItem.get_id().toString();
                                alert( program + ' \nPROGRAM ASSESSMENT \nUPDATED ');    

    


                            }
      
                            function onRequestFailed(sender, args) {
                                    console.log('Request failed. ' + args.get_message() + 
                                        '\n' + args.get_stackTrace());
                            }

                            
                                

                        

                        
                    });//SP.SOD.executeFunc('SP.js', 'SP.ClientContext')
                });// SP.SOD.executeFunc('SP.Runtime.js', 'SP.ClientContext')



            }
            catch(e){

                console.log(e);

            }

        },//updateProgramAssessment

        downloadProgramAssessment: function (program) {

            try{

                console.log('download program assessment')
                console.log(program)

                

                var editor = program.Editor.Title || "";
                var modified = moment(program.Modified).format('MMMM Do YYYY, h:mm:ss a') || "";
                var modStr = "Last Modified by " + editor + " at " + modified;
                var mdoassessmentstatus = program.mdoassessmentstatus || "";
                var programmaticassessmentstatus = program.programmaticassessmentstatus || "";
                var coecgassessmentstatus = program.coecgassessmentstatus || "";
                var MDOASSESSMENT = program.MDOASSESSMENT || "";
                var PROGRAMMATICASSESSMENT = program.PROGRAMMATICASSESSMENT || "";
                var COECGASSESSMENT = program.COECGASSESSMENT || "";
                var EEPEGREC = program.EEPEGREC || "";


                

                jQuery("#modified-program-assessment").empty();
                var modified = jQuery("#modified-program-assessment").append("<strong> "+modStr+" </strong>");
                var _mdoassessmentstatus = jQuery("#mdo-assessment-status").val(mdoassessmentstatus);
                var _programmaticassessmentstatus = jQuery("#program-assessment-status").val(programmaticassessmentstatus);
                var _coecgassessmentstatus = jQuery("#coe-cg-assessment-status").val(coecgassessmentstatus);
                var _MDOASSESSMENT = jQuery("#mdo-viability-assessment-text").val(MDOASSESSMENT);
                var _PROGRAMMATICASSESSMENT = jQuery("#programmatic-assessment-text").val(PROGRAMMATICASSESSMENT);
                var _COECGASSESSMENT = jQuery("#COE-CG-Assessment-text").val(COECGASSESSMENT);
                var _EEPEGREC = jQuery("#EE-PEG-Rec-text").val(EEPEGREC);

                



            }
            catch(e){

                console.log(e);

            }

        },//downloadProgramAssessment




        updateWhereItFits: function (area, bos, program, id, list) {

            try{

                SP.SOD.executeFunc('SP.Runtime.js', 'SP.ClientContext',
                function () {
                    SP.SOD.executeFunc('SP.js', 'SP.ClientContext',
                    function () {



                        


                        var where_it_fits_text = jQuery("#where-it-fits-text").val();
                        var where_it_fits_tag = jQuery("#where-it-fits-tag").val();

                        
  
                        
                        
                        
                        //Update Program Details
                        var ctx = _spPageContextInfo.webAbsoluteUrl;                
                        var clientContext = new SP.ClientContext(ctx);
                        var oList =  clientContext.get_web().get_lists().getByTitle(list);//MILTECH
                        var oListItem = oList.getItemById(id);  
                        

                         oListItem.set_item('WHEREITFITS', where_it_fits_text);
                         oListItem.set_item('WHEREITFITSTAG', where_it_fits_tag);



                        oListItem.update();                 
                        clientContext.load(oListItem);	       
                        clientContext.executeQueryAsync(onRequestSucceeded, onRequestFailed);

                            function onRequestSucceeded() {
                                var itemID = oListItem.get_id().toString();
                                alert( program + ' \nWHERE IT FITS IN THE FIGHT \nUPDATED ');    

    


                            }
      
                            function onRequestFailed(sender, args) {
                                    console.log('Request failed. ' + args.get_message() + 
                                        '\n' + args.get_stackTrace());
                            }

                            
                                

                        

                        
                    });//SP.SOD.executeFunc('SP.js', 'SP.ClientContext')
                });// SP.SOD.executeFunc('SP.Runtime.js', 'SP.ClientContext')



            }
            catch(e){

                console.log(e);

            }

        },//updateWhereItFits

        downloadWhereItFits: function (program) {

            try{

                console.log('download where it fits')
                console.log(program)

                var editor = program.Editor.Title || "";
                var modified = moment(program.Modified).format('MMMM Do YYYY, h:mm:ss a') || "";
                var modStr = "Last Modified by " + editor + " at " + modified;
                var where_it_fits = program.WHEREITFITS || "";
                var where_it_fits_tag = program.WHEREITFITSTAG || "";



                jQuery("#modified-program-where-it-fit").empty()
                var modified = jQuery("#modified-program-where-it-fit").append("<strong> "+modStr+" </strong>");
                var _where_it_fits = jQuery("#where-it-fits-text").val(where_it_fits);
                var _where_it_fits_tag = jQuery("#where-it-fits-tag").val(where_it_fits_tag);


            }
            catch(e){

                console.log(e);

            }

        },//downloadWhereItFits



        updatePortfolioOverview: function (area, bos, program, id, list) {

            try{

                SP.SOD.executeFunc('SP.Runtime.js', 'SP.ClientContext',
                function () {
                    SP.SOD.executeFunc('SP.js', 'SP.ClientContext',
                    function () {



                        


                        var portfolio_overview = jQuery("#portfolio-overview-text").val();
                        console.log('Value')
                        console.log( portfolio_overview )
                        //console.log( jQuery( jQuery("#portfolio-overview")[0] ).val() );
                        
  
                        
                        
                        
                        //Update Program Details
                        var ctx = _spPageContextInfo.webAbsoluteUrl;                
                        var clientContext = new SP.ClientContext(ctx);
                        var oList =  clientContext.get_web().get_lists().getByTitle(list);//MILTECH
                        var oListItem = oList.getItemById(id);  
                        

                         oListItem.set_item('OVERVIEW', portfolio_overview);


                        oListItem.update();                 
                        clientContext.load(oListItem);	       
                        clientContext.executeQueryAsync(onRequestSucceeded, onRequestFailed);

                            function onRequestSucceeded() {
                                var itemID = oListItem.get_id().toString();
                                alert( program + ' \nPORTFOLIO OVERVIEW \nUPDATED ');    

    


                            }
      
                            function onRequestFailed(sender, args) {
                                    console.log('Request failed. ' + args.get_message() + 
                                        '\n' + args.get_stackTrace());
                            }

                            
                                

                        

                        
                    });//SP.SOD.executeFunc('SP.js', 'SP.ClientContext')
                });// SP.SOD.executeFunc('SP.Runtime.js', 'SP.ClientContext')



            }
            catch(e){

                console.log(e);

            }

        },//updatePortfolioOverview

        downloadPortfolioOverview: function (program) {

            try{

                //console.log(program)

                var editor = program.Editor.Title || "";
                var modified = moment(program.Modified).format('MMMM Do YYYY, h:mm:ss a') || "";
                var modStr = "Last Modified by " + editor + " at " + modified;
                var OVERVIEW = program.OVERVIEW || "";

                jQuery("#modifiedportfolioOverview").empty()
                var modified = jQuery("#modifiedportfolioOverview").append("<strong> "+modStr+" </strong>");
                var overview = jQuery("#portfolio-overview-text").val(OVERVIEW);

            }
            catch(e){

                console.log(e);

            }

        },//downloadPortfolioOverview

        updatePortfolioKeyCapabilities: function (area, bos, program, id, list) {

            try{

                SP.SOD.executeFunc('SP.Runtime.js', 'SP.ClientContext',
                function () {
                    SP.SOD.executeFunc('SP.js', 'SP.ClientContext',
                    function () {



                        

                        
                        var key_capabilities = jQuery("#key-capabilities-text").val();    
  
                        
                        
                        
                        //Update Program Details
                        var ctx = _spPageContextInfo.webAbsoluteUrl;                
                        var clientContext = new SP.ClientContext(ctx);
                        var oList =  clientContext.get_web().get_lists().getByTitle(list);//MILTECH
                        var oListItem = oList.getItemById(id);  
                        

                        oListItem.set_item('CAPABILITY', key_capabilities);


                        oListItem.update();                 
                        clientContext.load(oListItem);	       
                        clientContext.executeQueryAsync(onRequestSucceeded, onRequestFailed);

                            function onRequestSucceeded() {
                                var itemID = oListItem.get_id().toString();
                                alert( program + ' \nPORTFOLIO KEY CAPABILITIES  \nUPDATED ');    

    


                            }
      
                            function onRequestFailed(sender, args) {
                                    console.log('Request failed. ' + args.get_message() + 
                                        '\n' + args.get_stackTrace());
                            }

                            
                                

                        

                        
                    });//SP.SOD.executeFunc('SP.js', 'SP.ClientContext')
                });// SP.SOD.executeFunc('SP.Runtime.js', 'SP.ClientContext')



            }
            catch(e){

                console.log(e);

            }

        },//updatePortfolioKeyCapabilities

        downloadPortfolioKeyCapabilities: function (program) {

            try{


                var editor = program.Editor.Title || "";
                var modified = moment(program.Modified).format('MMMM Do YYYY, h:mm:ss a') || "";
                var modStr = "Last Modified by " + editor + " at " + modified;
                var KEYCAPABILITIES = program.CAPABILITY  || "";

                jQuery("#modified-key-capabilities").empty()
                var modified = jQuery("#modified-key-capabilities").append("<strong> "+modStr+" </strong>");
                var keycapabilities = jQuery("#key-capabilities-text").val(KEYCAPABILITIES);




            }
            catch(e){

                console.log(e);

            }

        },//downloadPortfolioKeyCapabilities

        updatePortfolioPlan: function (area, bos, program, id, list) {

            try{

                SP.SOD.executeFunc('SP.Runtime.js', 'SP.ClientContext',
                function () {
                    SP.SOD.executeFunc('SP.js', 'SP.ClientContext',
                    function () {



                        

                        
                        var Near_Term = jQuery("#Near-Term").val();
                        var Mid_Term = jQuery("#Mid-Term").val();
                        var Far_Term = jQuery("#Far-Term").val();
  
                        
                        
                        
                        //Update Program Details
                        var ctx = _spPageContextInfo.webAbsoluteUrl;                
                        var clientContext = new SP.ClientContext(ctx);
                        var oList =  clientContext.get_web().get_lists().getByTitle(list);//MILTECH
                        var oListItem = oList.getItemById(id);  
                        

                        oListItem.set_item('NEARTERM', Near_Term);
                        oListItem.set_item('MIDTERM', Mid_Term);
                        oListItem.set_item('FARTERM', Far_Term);



                        oListItem.update();                 
                        clientContext.load(oListItem);	       
                        clientContext.executeQueryAsync(onRequestSucceeded, onRequestFailed);

                            function onRequestSucceeded() {
                                var itemID = oListItem.get_id().toString();
                                alert( program + ' \nPORTFOLIO PLAN  \nUPDATED ');    

    


                            }
      
                            function onRequestFailed(sender, args) {
                                    console.log('Request failed. ' + args.get_message() + 
                                        '\n' + args.get_stackTrace());
                            }

                            
                                

                        

                        
                    });//SP.SOD.executeFunc('SP.js', 'SP.ClientContext')
                });// SP.SOD.executeFunc('SP.Runtime.js', 'SP.ClientContext')



            }
            catch(e){

                console.log(e);

            }

        },//updatePortfolioPlan

        downloadPortfolioPlan: function (program) {

            try{


                var editor = program.Editor.Title || "";
                var modified = moment(program.Modified).format('MMMM Do YYYY, h:mm:ss a') || "";
                var modStr = "Last Modified by " + editor + " at " + modified;
                var Near_Term = program.NEARTERM || "";
                var Mid_Term  = program.MIDTERM || "";
                var Far_Term = program.FARTERM || "";

                
                jQuery("#modified-portfolio-plan").empty()
                var modified = jQuery("#modified-portfolio-plan").append("<strong> "+modStr+" </strong>");
                var near_term = jQuery("#Near-Term").val(Near_Term);
                var mid_term = jQuery("#Mid-Term").val(Mid_Term);    
                var far_term = jQuery("#Far-Term").val(Far_Term);




            }
            catch(e){

                console.log(e);

            }

        },//downloadPortfolioPlan









        updateProgramRequirements: function (area, bos, program, id, list) {

            try{

                SP.SOD.executeFunc('SP.Runtime.js', 'SP.ClientContext',
                function () {
                    SP.SOD.executeFunc('SP.js', 'SP.ClientContext',
                    function () {



                        


                        var why_we_need_this_text = jQuery("#why-we-need-this-text").val();
                        var formation = jQuery("#formation").val();
                        var reqDoc = jQuery("#reqDoc").val();    
                        var arocjroc = jQuery("#aroc-jroc").val();
                        var ioc = jQuery("#ioc").val(); 
                        var capability = jQuery("#capability").val(); 
                        var assessment = jQuery("#assessment").val();



  
                        
                        
                        
                        //Update Program Details
                        var ctx = _spPageContextInfo.webAbsoluteUrl;                
                        var clientContext = new SP.ClientContext(ctx);
                        var oList =  clientContext.get_web().get_lists().getByTitle(list);//MILTECH
                        var oListItem = oList.getItemById(id);  
                        

                         oListItem.set_item('WHYWENEEDTHIS', why_we_need_this_text);
                         oListItem.set_item('formation', formation);
                         oListItem.set_item('approvedRequirementsDoc', reqDoc);
                         oListItem.set_item('arocjroc', arocjroc);
                         oListItem.set_item('iocfoc', ioc);
                         oListItem.set_item('capability', capability);
                         oListItem.set_item('coecgassessment', assessment);


                        oListItem.update();                 
                        clientContext.load(oListItem);	       
                        clientContext.executeQueryAsync(onRequestSucceeded, onRequestFailed);

                            function onRequestSucceeded() {
                                var itemID = oListItem.get_id().toString();
                                alert( program + ' \nRequirements/Capability to the Force\nUpdated ');    

    


                            }
      
                            function onRequestFailed(sender, args) {
                                    console.log('Request failed. ' + args.get_message() + 
                                        '\n' + args.get_stackTrace());
                            }

                            
                                

                        

                        
                    });//SP.SOD.executeFunc('SP.js', 'SP.ClientContext')
                });// SP.SOD.executeFunc('SP.Runtime.js', 'SP.ClientContext')



            }
            catch(e){

                console.log(e);

            }

        },// updateProgramRequirements

        downloadProgramRequirements: function (program) {

            try{
                console.log(program)

                var editor = program.Editor.Title || "";
                var modified = moment(program.Modified).format('MMMM Do YYYY, h:mm:ss a') || "";
                var modStr = "Last Modified by " + editor + " at " + modified;
                var why_we_need_this = program.WHYWENEEDTHIS || "";
                var formation = program.formation || "";
                var reqDoc = program.approvedRequirementsDoc || "";
                var arocjroc = program.arocjroc || "";
                var ioc = program.iocfoc || "";
                var capability = program.capability || "";
                var assessment = program.coecgassessment || "";

                jQuery("#modified-program-req").empty()
                var modified = jQuery("#modified-program-req").append("<strong> "+modStr+" </strong>");
                var _why_we_need_this = jQuery("#why-we-need-this-text").val(why_we_need_this);
                var _formation = jQuery("#formation").val(formation);
                var _reqDoc = jQuery("#reqDoc").val(reqDoc);    
                var _arocjroc = jQuery("#aroc-jroc").val(arocjroc);
                var _ioc = jQuery("#ioc").val(ioc);
                var _capability  = jQuery("#capability").val(capability);
                var _assessment = jQuery("#assessment").val(assessment); 




            }
            catch(e){

                console.log(e);

            }

        },// downloadProgramRequirements


        updateProgramOverview: function (area, bos, program, id, list) {

            try{

                SP.SOD.executeFunc('SP.Runtime.js', 'SP.ClientContext',
                function () {
                    SP.SOD.executeFunc('SP.js', 'SP.ClientContext',
                    function () {


                        var vendor = jQuery("#vendor").val(); 
                        var RqmtOwner = jQuery("#req-owner").val();
                        var DateRange = jQuery("#date-range").val();
                        var baselines = jQuery("#rebaselines").val();
                        var ObligationDisbursement = jQuery("#obligation-disbursement").val();     
                        //var Proponent = jQuery("#proponent").val();
                        var contractType = jQuery("#contractType").val();
                        var acatlevel = jQuery("#acatlevel").val();
                        var US =  $( "#state option:selected" ).text();
                        var Milestones =  jQuery("#milestone").val(); 
                        //var costalternative = jQuery("#alternative").val();
                        var COTSOptions =  jQuery("#cots-options").val(); 
                        var industryBaseImpacts = jQuery("#impacts").val();
                        var APUC = jQuery("#apuc").val(); 
                        var limitations = jQuery("#limitations").val(); 
                        var MSR = jQuery("#msr").val(); 
                        var MPR =  jQuery("#mpr").val(); 
                        var FRP =  jQuery("#frp").val(); 
                        var TRL =  jQuery("#trl").val(); 

        

                        

                        
                        //Update Program Details
                        var ctx = _spPageContextInfo.webAbsoluteUrl;                
                        var clientContext = new SP.ClientContext(ctx);
                        var oList =  clientContext.get_web().get_lists().getByTitle(list);//MILTECH
                        var oListItem = oList.getItemById(id);  

                        

                        oListItem.set_item('BOS', bos);
                        oListItem.set_item('vendor', vendor);
                        oListItem.set_item('RqmtOwner', RqmtOwner);
                        oListItem.set_item('DateRange', DateRange);
                        oListItem.set_item('baselines', baselines);
                        oListItem.set_item('ObligationDisbursement', ObligationDisbursement);
                        //oListItem.set_item('Proponent', Proponent);
                        oListItem.set_item('contracttype', contractType);
                        oListItem.set_item('acatlevel', acatlevel);
                        oListItem.set_item('US', US);
                        oListItem.set_item('Milestones', Milestones);
                        //oListItem.set_item('costalternative', costalternative);
                        oListItem.set_item('COTSOptions', COTSOptions);
                        oListItem.set_item('industryBaseImpacts', industryBaseImpacts);
                        oListItem.set_item('APUC', APUC);
                        oListItem.set_item('Limitations', limitations);
                        oListItem.set_item('MSR', MSR);
                        oListItem.set_item('MPR', MPR);
                        oListItem.set_item('FRP', FRP);
                        oListItem.set_item('TRL', TRL);




                        oListItem.update();                 
                        clientContext.load(oListItem);	       
                        clientContext.executeQueryAsync(onRequestSucceeded, onRequestFailed);

                            function onRequestSucceeded() {
                                var itemID = oListItem.get_id().toString();
                                alert( program + ' \nProgrammatic Overview\nUpdated ');    

    


                            }
      
                            function onRequestFailed(sender, args) {
                                    console.log('Request failed. ' + args.get_message() + 
                                        '\n' + args.get_stackTrace());
                            }


                            

                            
                                

                        
                    });//SP.SOD.executeFunc('SP.js', 'SP.ClientContext')
                });// SP.SOD.executeFunc('SP.Runtime.js', 'SP.ClientContext')



            }
            catch(e){

                console.log(e);

            }

        },//updateProgramOverview

        downloadProgramOverview: function (program) {

            try{

                console.log('download program overview')
                console.log(program)

                var editor = program.Editor.Title || "";
                var modified = moment(program.Modified).format('MMMM Do YYYY, h:mm:ss a') || "";
                var modStr = "Last Modified by " + editor + " at " + modified;

                var APUC = program.APUC || "";
                var RqmtOwner = program.RqmtOwner || "";
                var DateRange = program.DateRange || "";
                var baselines = program.baselines || "";
                var ObligationDisbursement = program.ObligationDisbursement || "";
                var COTSOptions = program.COTSOptions || "";
                var MPR = program.MPR || "";
                var MSR = program.MSR || "";
                var Milestones = program.Milestones || "";
                var Proponent = program.Proponent || "";
                var US = program.US || "";
                var acatlevel = program.acatlevel || "";
                var contracttype = program.contracttype || "";
                var costalternative = program.costalternative || "";
                var industryBaseImpacts = program.industryBaseImpacts || "";
                var limitations = program.Limitations || "";
                var vendor = program.vendor || "";
                var FRP = program.FRP || "";
                var TRL = program.TRL || "";



                jQuery("#modifiedOverview").empty()
                var modified = jQuery("#modifiedOverview").append("<strong> "+modStr+" </strong>");
                var _vendor = jQuery("#vendor").val(vendor); 
                var _RqmtOwner = jQuery("#req-owner").val(RqmtOwner);
                var _DateRange = jQuery("#date-range").val(DateRange);
                var _baselines = jQuery("#rebaselines").val(baselines);
                var _ObligationDisbursement = jQuery("#obligation-disbursement").val(ObligationDisbursement);     
                var _Proponent = jQuery("#proponent").val(Proponent);
                var _contracttype = jQuery("#contractType").val(contracttype);
                var _acatlevel = jQuery("#acatlevel").val(acatlevel);
                var _US =  $( "#state option:selected" ).text(US);
                var _Milestones =  jQuery("#milestone").val(Milestones); 
                var _costalternative = jQuery("#alternative").val(costalternative);
                var _COTSOptions =  jQuery("#cots-options").val(COTSOptions); 
                var _industryBaseImpacts = jQuery("#impacts").val(industryBaseImpacts);
                var _APUC = jQuery("#apuc").val(APUC); 
                var _limitations = jQuery("#limitations").val(limitations); 
                var _MSR = jQuery("#msr").val(MSR); 
                var _MPR =  jQuery("#mpr").val(MPR); 
                var _FRP =  jQuery("#frp").val(FRP); 
                var _TRL =  jQuery("#trl").val(TRL); 




            }
            catch(e){

                console.log(e);

            }

        },//downloadProgramOverview

        updateProgramCapability: function (area, bos, program, id, list) {

            try{

                SP.SOD.executeFunc('SP.Runtime.js', 'SP.ClientContext',
                function () {
                    SP.SOD.executeFunc('SP.js', 'SP.ClientContext',
                    function () {
        
                        var program_capability = jQuery("#program-capability").val();

        
                        //Update Program Details
                        var ctx = _spPageContextInfo.webAbsoluteUrl;                
                        var clientContext = new SP.ClientContext(ctx);
                        var oList =  clientContext.get_web().get_lists().getByTitle(list);//MILTECH
                        var oListItem = oList.getItemById(id);  
                        

                        oListItem.set_item('CAPABILITY',  program_capability);

                        oListItem.update();                 
                        clientContext.load(oListItem);	       
                        clientContext.executeQueryAsync(onRequestSucceeded, onRequestFailed);

                            function onRequestSucceeded() {
                                var itemID = oListItem.get_id().toString();
                                alert( program + '\nCapability Description\nUpdated ');    

                            }
      
                            function onRequestFailed(sender, args) {
                                    console.log('Request failed. ' + args.get_message() + 
                                        '\n' + args.get_stackTrace());
                            }

                            
                            
                                

                        
                    });//SP.SOD.executeFunc('SP.js', 'SP.ClientContext')
                });// SP.SOD.executeFunc('SP.Runtime.js', 'SP.ClientContext')



            }
            catch(e){

                console.log(e);

            }

        },//updateProgramCapability



        downloadProgramCapability: function (program) {

            try{

                console.log('Capability')
                console.log(program)

                var editor = program.Editor.Title || "";
                var modified = moment(program.Modified).format('MMMM Do YYYY, h:mm:ss a') || "";
                var modStr = "Last Modified by " + editor + " at " + modified;
                var CapabilityDescription = program.CAPABILITY || "";
                var _CapabilityDescription = jQuery("#program-capability").val(CapabilityDescription);

                jQuery("#modified-program-capability").empty()
                var modified = jQuery("#modified-program-capability").append("<strong> "+modStr+" </strong>");





            }
            catch(e){

                console.log(e);

            }

        },//downloadProgramCapability






        updateProgramPOMAlloInfo: function (area, bos, program, id, list) {

            try{

                SP.SOD.executeFunc('SP.Runtime.js', 'SP.ClientContext',
                function () {
                    SP.SOD.executeFunc('SP.js', 'SP.ClientContext',
                    function () {

                        var deepDiveImpacts = jQuery("#deep-dive-impacts").val();
                        var congressionalMarks = jQuery("#congressional-marks").val();
                        var pdm = jQuery("#pdm").val();
                        var funding = jQuery("#funding").val(); 
                        var modLevel = jQuery("#MODLevel").val();

    
                        //Update Program Details
                        var ctx = _spPageContextInfo.webAbsoluteUrl;                
                        var clientContext = new SP.ClientContext(ctx);
                        var oList =  clientContext.get_web().get_lists().getByTitle(list);//MILTECH
                        var oListItem = oList.getItemById(id);  
                        
                        oListItem.set_item('BOS', bos);
                        oListItem.set_item('DeepDiveImpacts', deepDiveImpacts);
                        oListItem.set_item('CongressionalMarks', congressionalMarks);
                        oListItem.set_item('PDM', pdm);
                        oListItem.set_item('OtherFundingIssues', funding);
                        oListItem.set_item('MODLevel', modLevel);


                        oListItem.update();                 
                        clientContext.load(oListItem);	       
                        clientContext.executeQueryAsync(onRequestSucceeded, onRequestFailed);

                            function onRequestSucceeded() {
                                var itemID = oListItem.get_id().toString();
                                alert( program + '\nPOM Allo \nUpdated');    

                            }
      
                            function onRequestFailed(sender, args) {
                                    console.log('Request failed. ' + args.get_message() + 
                                        '\n' + args.get_stackTrace());
                            }
                        
                    });//SP.SOD.executeFunc('SP.js', 'SP.ClientContext')
                });// SP.SOD.executeFunc('SP.Runtime.js', 'SP.ClientContext')



            }
            catch(e){

                console.log(e);

            }

        },//updateProgramPOMAlloInfo


        downloadProgramPOMAlloInfo:function(program){
            try{   
                //console.log('POM Alloc')
                //console.log(program)

                if(program){

                    var deepDiveImpacts = jQuery('#deep-dive-impacts').val(program.DeepDiveImpacts);
                    var congressionalMarks = jQuery('#congressional-marks').val(program.CongressionalMarks);
                    var pdm = jQuery('#pdm').val(program.PDM);
                    var fundingIssues = jQuery('#funding').val(program.OtherFundingIssues);
                    var modLevel = jQuery('#MODLevel').val(program.MODLevel);
    

                }
                
    
    
    
    
    
                
            }
            catch(e){
                console.log(e);
            }
    
            
        },//downloadProgramPOMAlloInfo
    



        downloadProgramPOMAllo:function(appnData, FYs, tag, pomTag){

            try{

                //console.log(appnData)
                
                
                var editor = appnData.Editor.Title || "";
                var modified = moment(appnData.Modified).format('MMMM Do YYYY, h:mm:ss a') || "";
                var pom = appnData['POMPeriod'] || 0;

                for(var i = 0; i < FYs.length; i++){
                    if(FYs[i].OData__x0050_2){//USE SITE COLUMN WHEN IMPORTING FROM ACCESS
        
                        var fystr = 'FY'+ FYs[i].OData__x0050_2;//USE SITE COLUMN WHEN IMPORTING FROM ACCESS
                        var fy = FYs[i].OData__x0050_2;
                        var sum = appnData['OData__x0066_y'+fy] || 0;


                        //console.log(fystr)
                        //console.log(sum)
                        //console.log(appnData['OData__x0066_y'+fy])
                        //console.log(sourceData[bos]['RDTE'][fystr].SUM)

                        //console.log("#"+tag+"fy"+fy+"")

                        if(tag !== 'quantityfy'){
                            var fysum = jQuery("#"+tag+""+fy+"").val('$'+sum);
                            var pomVal = jQuery("#"+pomTag+"").val('$'+pom);
    

                        }else{
                            var fysum = jQuery("#"+tag+""+fy+"").val(sum);
                            var pomVal = jQuery("#"+pomTag+"").val(pom);
    
                        }




                    }
                }

                jQuery("#modifiedSpanPOMAllo").empty();
                jQuery("#modifiedSpanPOMAllo").append('<strong>Last Modified by ' + editor + ' at ' + modified + "</strong>");    


               
            }
            catch(e){
                console.log(e);
            }
    
    
    
        },//downloadProgramPOMAllo




        updateInventory: function (area, bos, program, id, list, sourceData, qty) {

            try{

                SP.SOD.executeFunc('SP.Runtime.js', 'SP.ClientContext',
                function () {
                    SP.SOD.executeFunc('SP.js', 'SP.ClientContext',
                    function () {


                        //console.log(sourceData)
                        var total = 'Total'+qty;
                        var root  = sourceData[bos]['Roots'].toString();
                        var ACT_SETS  = sourceData[bos]['Inventory'][qty]['ACT_SETS'];
                        var APS_OTOE  = sourceData[bos]['Inventory'][qty]['APS_OTOE'];
                        var COMPO_1_OTOE  = sourceData[bos]['Inventory'][qty]['COMPO_1_OTOE'];
                        var COMPO_2_OTOE  = sourceData[bos]['Inventory'][qty]['COMPO_2_OTOE'];
                        var COMPO_3_OTOE  = sourceData[bos]['Inventory'][qty]['COMPO_3_OTOE'];
                        var OPS = sourceData[bos]['Inventory'][qty]['OPS'];
                        var ORF  = sourceData[bos]['Inventory'][qty]['ORF'];
                        var Other_TDA  = sourceData[bos]['Inventory'][qty]['Other_TDA'];
                        var RCF  = sourceData[bos]['Inventory'][qty]['RCF'];
                        var TNG_Base_TDA  = sourceData[bos]['Inventory'][qty]['TNG_Base_TDA'];
                        var WR  = sourceData[bos]['Inventory'][qty]['WR'];
                        var WRA  = sourceData[bos]['Inventory'][qty]['WRA'];
                        var TOTAL_  = sourceData[bos]['Inventory'][qty][total];


                        console.log(sourceData[bos]['Inventory'][qty])
                        console.log(list + ' : ' +  id + ' : ' + ' : ' + qty )

                        

                        //Update Program Details
                        var ctx = _spPageContextInfo.webAbsoluteUrl; 
                        console.log(ctx)               
                        var clientContext = new SP.ClientContext(ctx);
                        var oList =  clientContext.get_web().get_lists().getByTitle(list);//MILTECH
                        var oListItem = oList.getItemById(id);  

                        oListItem.set_item('ACT_SETS', ACT_SETS);
                        oListItem.set_item('APS_OTOE', APS_OTOE);
                        oListItem.set_item('COMPO_1_OTOE', COMPO_1_OTOE);
                        oListItem.set_item('COMPO_2_OTOE', COMPO_2_OTOE);
                        oListItem.set_item('COMPO_3_OTOE', COMPO_3_OTOE);
                        oListItem.set_item('OPS', OPS);
                        oListItem.set_item('ORF', ORF);
                        oListItem.set_item('Other_TDA', Other_TDA);
                        oListItem.set_item('RCF', RCF);
                        oListItem.set_item('TNG_Base_TDA', TNG_Base_TDA);
                        oListItem.set_item('WR', WR);
                        oListItem.set_item('WRA', WRA);
                        oListItem.set_item('TOTAL_', TOTAL_);

                        
                        oListItem.update();                 
                        clientContext.load(oListItem);	       
                        clientContext.executeQueryAsync(onRequestSucceeded, onRequestFailed);
                        

                            function onRequestSucceeded() {
                                var itemID = oListItem.get_id().toString();

                                    if(qty === 'RO'){
                                        alert(program + '\nUpdated. \nSelect Program Navigation to Redirect to Other Quad Pages.');
                                        console.log(list + '\nUpdated. \nSelect Program Navigation to Redirect to Other Quad Pages.');
    
                                    }else{
                                        console.log(list + '\nUpdated. \nSelect Program Navigation to Redirect to Other Quad Pages.');


                                    }
                                
    


                            }
      
                            function onRequestFailed(sender, args) {
                                    console.log('Request failed. ' + args.get_message() + 
                                        '\n' + args.get_stackTrace());
                            }

                            
                                

                        
                    });//SP.SOD.executeFunc('SP.js', 'SP.ClientContext')
                });// SP.SOD.executeFunc('SP.Runtime.js', 'SP.ClientContext')



            }
            catch(e){

                console.log(e);

            }

        },//updateInventory

        downloadInventory: function (program, tag) {

            try{

                if(program){

                    //console.log('download AAO-APO-RO distribution')
                    //console.log(program)
    
                    var editor = program.Editor.Title || "";
                    var modified = moment(program.Modified).format('MMMM Do YYYY, h:mm:ss a') || "";
                    var modStr = "Last Modified by " + editor + " at " + modified;
                    
                    var TNG_Base_TDA = program.TNG_Base_TDA || "";//Training Base Quantity for TDAs
                    var COMPO_1_OTOE = program.COMPO_1_OTOE || "";//BOIP - OTOE
                    var COMPO_2_OTOE = program.COMPO_2_OTOE || "";//BOIP - OTOE
                    var COMPO_3_OTOE = program.COMPO_3_OTOE || "";//BOIP - OTOE
                    var APS_OTOE = program.APS_OTOE || "";//Army pre-positioned Stock Unit Sets
                    var ACT_SETS = program.ACT_SETS || "";//APS Activity Sets
                    var WR = program.WR || "";//Army War Reserve Sustainment Stocks
                    var WRA = program.WRA || "";//Army War Reserve Stocks for Allies
                    var OPS = program.OPS || "";//Operational Project Stocks
                    var RCF = program.RCF || "";//Repair Cycle Float
                    var ORF = program.ORF || "";//Operational Readiness Float
                    var Other_TDA = program.Other_TDA || "";//Other TDA Requirements




                    jQuery("#modifiedSpanAAO").empty();
                    var modified = jQuery("#modifiedSpanAAO").append("<strong> "+modStr+" </strong>");
                    var _TNG_Base_TDA  = jQuery('#'+tag+'tda').val(TNG_Base_TDA);
                    var _COMPO_1_OTOE  = jQuery('#'+tag+'compo1').val(COMPO_1_OTOE);
                    var _COMPO_2_OTOE  = jQuery('#'+tag+'compo2').val(COMPO_2_OTOE);
                    var _COMPO_3_OTOE  = jQuery('#'+tag+'compo3').val(COMPO_3_OTOE);
                    var _APS_OTOE  = jQuery('#'+tag+'sus').val(APS_OTOE);
                    var _ACT_SETS  = jQuery('#'+tag+'aps').val(ACT_SETS);
                    var _WR  = jQuery('#'+tag+'awr').val(WR);
                    var _WRA  = jQuery('#'+tag+'wrs').val(WRA);
                    var _OPS  = jQuery('#'+tag+'ops').val(OPS);
                    var _OPS  = jQuery('#'+tag+'ops').val(OPS);
                    var _RCF  = jQuery('#'+tag+'rcf').val(RCF);
                    var _ORF  = jQuery('#'+tag+'orf').val(ORF);
                    var _Other_TDA  = jQuery('#'+tag+'o_tda').val(Other_TDA);



    

                }



            }
            catch(e){

                console.log(e);

            }

        },//downloadInventory

        downloadInventory2: function (AAO, APO, RO) {

            try{


                    var str = '';
                    var AAO, APO, RO;

                    if(AAO){
                        console.log(true)
                        AAO = AAO.TOTAL_ || "";//Total AAO
                        str = 'AAO:'+AAO+'  '; 


                    }
                    if(APO){
                        APO = APO.TOTAL_ || "";//Total APO
                        str = 'AAO:'+AAO+'     APO:'+APO+'  '; 


                    }
                    if(RO){
                        var RO = RO.TOTAL_ || "";//Total RO
                        str = 'AAO:'+AAO+'     APO:'+APO+'     INVENTORY:'+RO+' '; 

                    }

                    var aao_apo_ro  = jQuery('#aao-apo-ro').val(str);

    




            }
            catch(e){

                console.log(e);

            }

        },//downloadInventory



        downloadCapabilityPics: function (pics) {

            try{


                switch(pics.length) {
                    case 1:

                        var pic_link = pics[0].FileRef || "";
                        jQuery('.progPic').append('<tr><td><img src="'+pic_link+'?RenditionID=3"></td></tr>')
                      break;
                    case 2:
                        var pic_link1 = pics[0].FileRef || "";
                        var pic_link2 = pics[1].FileRef || "";


                        jQuery('.progPic').append('<tr>'+
                                                        '<td><img src="'+pic_link1+'?RenditionID=3"></td>'+
                                                        '<td><img src="'+pic_link2+'?RenditionID=3"></td>'+

                                                 '</tr>');
                    break;

                      case 3:

                      var pic_link1 = pics[0].FileRef || "";
                      var pic_link2 = pics[1].FileRef || "";
                      var pic_link3 = pics[2].FileRef || "";


                        jQuery('.progPic').append('<tr>'+
                                                        '<td><img src="'+pic_link1+'?RenditionID=3"></td>'+
                                                        '<td><img src="'+pic_link2+'?RenditionID=3"></td>'+
                                                  '</tr>' +
                                                  '<tr>' +
                                                    '<td><img src="'+pic_link3+'?RenditionID=3"></td>'+
                                                  '</tr>' 
                                                );

                      break;


                      case 4:

                      var pic_link1 = pics[0].FileRef || "";
                      var pic_link2 = pics[1].FileRef || "";
                      var pic_link3 = pics[2].FileRef || "";
                      var pic_link4 = pics[3].FileRef || "";


                                                

                      jQuery('.progPic').append('<tr>'+
                                                    '<td><img src="'+pic_link1+'?RenditionID=3"></td>'+
                                                    '<td><img src="'+pic_link2+'?RenditionID=3"></td>'+
                                                '</tr>' +
                                                '<tr>' +
                                                    '<td><img src="'+pic_link3+'?RenditionID=3"></td>'+
                                                    '<td><img src="'+pic_link4+'?RenditionID=3"></td>'+
                                                '</tr>' 
                                                );



                      break;


                      
                    default:
                      // code block
                  }




            }
            catch(e){

                console.log(e);

            }

        },//downloadCapabilityPics

        downloadBattleSpacePics: function (pics) {

            try{


                switch(pics.length) {
                    case 1:

                        var pic_link = pics[0].FileRef || "";
                        jQuery('.battleSpacePic').append('<tr><td><img src="'+pic_link+'?RenditionID=3"></td></tr>')
                      break;
                    case 2:
                        var pic_link1 = pics[0].FileRef || "";
                        var pic_link2 = pics[1].FileRef || "";


                        jQuery('.battleSpacePic').append('<tr>'+
                                                        '<td><img src="'+pic_link1+'?RenditionID=5"></td>'+
                                                        '<td><img src="'+pic_link2+'?RenditionID=5"></td>'+

                                                 '</tr>');
                    break;

                      case 3:

                      var pic_link1 = pics[0].FileRef || "";
                      var pic_link2 = pics[1].FileRef || "";
                      var pic_link3 = pics[2].FileRef || "";


                        jQuery('.battleSpacePic').append('<tr>'+
                                                        '<td><img src="'+pic_link1+'?RenditionID=5"></td>'+
                                                        '<td><img src="'+pic_link2+'?RenditionID=5"></td>'+
                                                  '</tr>' +
                                                  '<tr>' +
                                                    '<td><img src="'+pic_link3+'?RenditionID=5"></td>'+
                                                  '</tr>' 
                                                );

                      break;


                      case 4:

                      var pic_link1 = pics[0].FileRef || "";
                      var pic_link2 = pics[1].FileRef || "";
                      var pic_link3 = pics[2].FileRef || "";
                      var pic_link4 = pics[3].FileRef || "";


                                                

                      jQuery('.battleSpacePic').append('<tr>'+
                                                    '<td><img src="'+pic_link1+'?RenditionID=3"></td>'+
                                                    '<td><img src="'+pic_link2+'?RenditionID=3"></td>'+
                                                '</tr>' +
                                                '<tr>' +
                                                    '<td><img src="'+pic_link3+'?RenditionID=3"></td>'+
                                                    '<td><img src="'+pic_link4+'?RenditionID=3"></td>'+
                                                '</tr>' 
                                                );



                      break;


                      
                    default:
                      // code block
                  }




            }
            catch(e){

                console.log(e);

            }

        },//downloadBattleSpacePics

        downloadPortfolioContextPics: function (pics) {

            try{

                console.log('download portfolio context pics')
                console.log(pics[0])


                switch(pics.length) {
                    case 1:

                        var pic_link = pics[0].FileRef || "";
                        console.log(pic_link)
                        jQuery('.portfolioChart').append('<tr><td><img src="'+pic_link+'?RenditionID=3"></td></tr>')
                      break;
                    case 2:
                        var pic_link1 = pics[0].FileRef || "";
                        var pic_link2 = pics[1].FileRef || "";


                        jQuery('.portfolioChart').append('<tr>'+
                                                        '<td><img src="'+pic_link1+'?RenditionID=5"></td>'+
                                                        '<td><img src="'+pic_link2+'?RenditionID=5"></td>'+

                                                 '</tr>');
                    break;

                      case 3:

                      var pic_link1 = pics[0].FileRef || "";
                      var pic_link2 = pics[1].FileRef || "";
                      var pic_link3 = pics[2].FileRef || "";


                        jQuery('.portfolioChart').append('<tr>'+
                                                        '<td><img src="'+pic_link1+'?RenditionID=5"></td>'+
                                                        '<td><img src="'+pic_link2+'?RenditionID=5"></td>'+
                                                  '</tr>' +
                                                  '<tr>' +
                                                    '<td><img src="'+pic_link3+'?RenditionID=5"></td>'+
                                                  '</tr>' 
                                                );

                      break;


                      case 4:

                      var pic_link1 = pics[0].FileRef || "";
                      var pic_link2 = pics[1].FileRef || "";
                      var pic_link3 = pics[2].FileRef || "";
                      var pic_link4 = pics[3].FileRef || "";


                                                

                      jQuery('.portfolioChart').append('<tr>'+
                                                    '<td><img src="'+pic_link1+'?RenditionID=3"></td>'+
                                                    '<td><img src="'+pic_link2+'?RenditionID=3"></td>'+
                                                '</tr>' +
                                                '<tr>' +
                                                    '<td><img src="'+pic_link3+'?RenditionID=3"></td>'+
                                                    '<td><img src="'+pic_link4+'?RenditionID=3"></td>'+
                                                '</tr>' 
                                                );

                      break;


                      
                    default:
                      // code block
                  }




            }
            catch(e){

                console.log(e);

            }

        }//downloadPortfolioContextPics










        


  }//return
});//ProgramService


/*SOURCE DATA SERVICE */
angular.module('app').factory('SourceDataDOMService', function ($q) {

	
    return {

        clearStorage:function(obj){

            try{

                if (typeof(Storage) !== "undefined") {

                    sessionStorage.clear();

    
    
                } else {
                    console.log('storage not supported');
                }
    

            }
            catch(e){
                console.log(e);
            }

        },

        getItem:function(){

            try{

                if (typeof(Storage) !== "undefined") {
                    var data = sessionStorage.getItem('SourceData');
                    var obj = JSON.parse(data);
                    return obj;

       
                } else {
                    console.log('storage not supported');
                }
            }
            catch(e){
                console.log(e);
            }

        },

        addProgramItem:function(area, bos, portfolio, program, programID, itemID, rootArr, FYs){

            try{

                if (typeof(Storage) !== "undefined") {

                    //console.log('Add BOS');
                    //console.log(bos)
                    //console.log(rootArr);
                    //console.log(sourceData);


                    var sourceData = {};

                    //Areas
                    sourceData['Area'] = area;
                    sourceData['BOS'] = bos;
                    sourceData['PORTFOLIO'] = portfolio;
                    sourceData['Program'] = program;
                    sourceData['ProgramID'] = programID;
                    sourceData['ItemID'] = itemID;



                    

                    //Appropriations
                    sourceData[bos] = {};
                    sourceData[bos]['RDTE'] = {};
                    sourceData[bos]['PROC'] = {};
                    sourceData[bos]['OTHER'] = {};
                    sourceData[bos]['TOTAL'] = {};

                    
                    

                    //Selected Roots
                    sourceData[bos]['SelectedRoots'] = {};

                    //User Roots
                    sourceData[bos]['UserRoots'] = {};


                    //AAO-APO Inventory & SACS
                    sourceData[bos]['Inventory'] = {};
                    sourceData[bos]['Inventory']['AAO'] = {};
                    sourceData[bos]['Inventory']['APO'] = {};
                    sourceData[bos]['Inventory']['RO'] = {};

                    
                    sourceData[bos]['Inventory']['LINs'] = {};
                    sourceData[bos]['Inventory']['LINs']['AAO'] = {};
                    sourceData[bos]['Inventory']['LINs']['APO'] = {};
                    sourceData[bos]['Inventory']['LINs']['RO'] = {};
                    sourceData[bos]['Inventory']['LINs']['SACS_TOTAL'] = {};



                    sourceData[bos]['Inventory']['AAO']['TotalAAO'] = 0;
                    sourceData[bos]['Inventory']['APO']['TotalAPO'] = 0;
                    sourceData[bos]['Inventory']['RO']['TotalRO'] = 0;
                    sourceData[bos]['Inventory']['SACS_TOTAL'] = 0;


                    sourceData[bos]['Inventory']['AAO']['TNG_Base_TDA'] = 0;
                    sourceData[bos]['Inventory']['AAO']['COMPO_1_OTOE'] = 0;
                    sourceData[bos]['Inventory']['AAO']['COMPO_2_OTOE'] = 0;
                    sourceData[bos]['Inventory']['AAO']['COMPO_3_OTOE'] = 0;
                    sourceData[bos]['Inventory']['AAO']['ACT_SETS'] = 0;
                    sourceData[bos]['Inventory']['AAO']['APS_OTOE'] = 0;
                    sourceData[bos]['Inventory']['AAO']['WR'] = 0;
                    sourceData[bos]['Inventory']['AAO']['WRA'] = 0;
                    sourceData[bos]['Inventory']['AAO']['OPS'] = 0;
                    sourceData[bos]['Inventory']['AAO']['RCF'] = 0;
                    sourceData[bos]['Inventory']['AAO']['ORF'] = 0;
                    sourceData[bos]['Inventory']['AAO']['Other_TDA'] = 0;

                    sourceData[bos]['Inventory']['APO']['TNG_Base_TDA'] = 0;
                    sourceData[bos]['Inventory']['APO']['COMPO_1_OTOE'] = 0;
                    sourceData[bos]['Inventory']['APO']['COMPO_2_OTOE'] = 0;
                    sourceData[bos]['Inventory']['APO']['COMPO_3_OTOE'] = 0;
                    sourceData[bos]['Inventory']['APO']['ACT_SETS'] = 0;
                    sourceData[bos]['Inventory']['APO']['APS_OTOE'] = 0;
                    sourceData[bos]['Inventory']['APO']['WR'] = 0;
                    sourceData[bos]['Inventory']['APO']['WRA'] = 0;
                    sourceData[bos]['Inventory']['APO']['OPS'] = 0;
                    sourceData[bos]['Inventory']['APO']['RCF'] = 0;
                    sourceData[bos]['Inventory']['APO']['ORF'] = 0;
                    sourceData[bos]['Inventory']['APO']['Other_TDA'] = 0;

                    sourceData[bos]['Inventory']['RO']['TNG_Base_TDA'] = 0;
                    sourceData[bos]['Inventory']['RO']['COMPO_1_OTOE'] = 0;
                    sourceData[bos]['Inventory']['RO']['COMPO_2_OTOE'] = 0;
                    sourceData[bos]['Inventory']['RO']['COMPO_3_OTOE'] = 0;
                    sourceData[bos]['Inventory']['RO']['ACT_SETS'] = 0;
                    sourceData[bos]['Inventory']['RO']['APS_OTOE'] = 0;
                    sourceData[bos]['Inventory']['RO']['WR'] = 0;
                    sourceData[bos]['Inventory']['RO']['WRA'] = 0;
                    sourceData[bos]['Inventory']['RO']['OPS'] = 0;
                    sourceData[bos]['Inventory']['RO']['RCF'] = 0;
                    sourceData[bos]['Inventory']['RO']['ORF'] = 0;
                    sourceData[bos]['Inventory']['RO']['Other_TDA'] = 0;


                    //Deep Dive(Key 4)
                    sourceData[bos]['DEEPDIVE'] = {};
                    sourceData[bos]['DEEPDIVE']['RDTE'] = {};
                    sourceData[bos]['DEEPDIVE']['PROC'] = {};
                    sourceData[bos]['DEEPDIVE']['OTHER'] = {};
                    sourceData[bos]['DEEPDIVE']['POM'] = 0;
                    sourceData[bos]['DEEPDIVE']['RDTEACCUM'] = {};
                    sourceData[bos]['DEEPDIVE']['PROCACCUM'] = {};
                    sourceData[bos]['DEEPDIVE']['OTHERACCUM'] = {};


                    //Quantities(LINs)
                    sourceData[bos]['Quantity'] = {};
                    sourceData[bos]['Quantity']['LINs'] = {};

                    //Roots, Key4s, LINs Arrays
                    sourceData[bos]['Roots'] = [];
                    sourceData[bos]['Key4s'] = [];
                    sourceData[bos]['LINs'] = [];
                    
                    //MYC FLOOR
                    sourceData[bos]['MYCFLOOR'] = {};
                    sourceData[bos]['MYCFLOOR']['POM'] = 0;


                    //UFRs
                    sourceData[bos]['RDTEUFR'] = {};
                    sourceData[bos]['PROCUFR'] = {};
                    sourceData[bos]['OTHERUFR'] = {};
                    sourceData[bos]['TOTALUFR'] = {};
                    sourceData[bos]['TOTALUFR'] = {};
                    sourceData[bos]['QUANTITYUFR'] = {};

                    //POMs
                    sourceData[bos]['RDTE']['POM'] = 0;
                    sourceData[bos]['PROC']['POM'] = 0;
                    sourceData[bos]['OTHER']['POM'] = 0;
                    sourceData[bos]['TOTAL']['POM'] = 0;
                    sourceData[bos]['Quantity']['POM'] = 0;

                    sourceData[bos]['RDTEUFR']['POM'] = 0;
                    sourceData[bos]['PROCUFR']['POM'] = 0;
                    sourceData[bos]['OTHERUFR']['POM'] = 0;
                    sourceData[bos]['TOTALUFR']['POM'] = 0;
                    sourceData[bos]['QUANTITYUFR']['POM'] = 0;

                    


                    


                    for(var i = FYs.length - 1; i >= 0; i--){
                                            
        
                        if(FYs[i].OData__x0050_2){

                            //var fyprop = 'OData__x0066_y' + FYs[i].OData__x0050_2;//USE SITE COLUMN WHEN IMPORTING FROM ACCESS
                            var fystr = 'FY'+ FYs[i].OData__x0050_2;//USE SITE COLUMN WHEN IMPORTING FROM ACCESS
                            //console.log(fystr);
                            sourceData[bos]['RDTE'][fystr] = {};
                            sourceData[bos]['PROC'][fystr] = {};
                            sourceData[bos]['OTHER'][fystr] = {};
                            sourceData[bos]['TOTAL'][fystr] = {};
                            sourceData[bos]['Quantity'][fystr] = {};
                            sourceData[bos]['DEEPDIVE'][fystr] = {};

                            sourceData[bos]['RDTEUFR'][fystr] = {};
                            sourceData[bos]['PROCUFR'][fystr] = {};
                            sourceData[bos]['OTHERUFR'][fystr] = {};
                            sourceData[bos]['TOTALUFR'][fystr] = {};
                            sourceData[bos]['TOTALUFR'][fystr] = {};
                            sourceData[bos]['QUANTITYUFR'][fystr] = {};
        


                            sourceData[bos]['RDTE'][fystr]= 0;
                            sourceData[bos]['PROC'][fystr] = 0;
                            sourceData[bos]['OTHER'][fystr] = 0;
                            sourceData[bos]['TOTAL'][fystr] = 0;
                            sourceData[bos]['Quantity'][fystr] = 0;
                            sourceData[bos]['DEEPDIVE'][fystr] = 0;
                            sourceData[bos]['MYCFLOOR'][fystr] = 0;

                            sourceData[bos]['RDTEUFR'][fystr] = 0;
                            sourceData[bos]['PROCUFR'][fystr] = 0;
                            sourceData[bos]['OTHERUFR'][fystr] = 0;
                            sourceData[bos]['TOTALUFR'][fystr] = 0;
                            sourceData[bos]['TOTALUFR'][fystr] = 0;
                            sourceData[bos]['QUANTITYUFR'][fystr] = 0;


                            sourceData[bos]['DEEPDIVE']['RDTE'][fystr] = 0;
                            sourceData[bos]['DEEPDIVE']['PROC'][fystr] = 0;
                            sourceData[bos]['DEEPDIVE']['OTHER'][fystr] = 0;
                            sourceData[bos]['DEEPDIVE']['RDTEACCUM'][fystr] = 0;
                            sourceData[bos]['DEEPDIVE']['PROCACCUM'][fystr] = 0;
                            sourceData[bos]['DEEPDIVE']['OTHERACCUM'][fystr] = 0;



                        }

                    }



                    var obj = JSON.stringify(sourceData);
                    sessionStorage.setItem('SourceData', obj);
                    


    
    
                } else {
                    console.log('storage not supported');
                }
    

            }
            catch(e){
                console.log(e);
            }

        },
		
		 addProgramOverviewItem:function(allData){

            try{

                if (typeof(Storage) !== "undefined") {
					
					
				var bos = allData[0][0].BOS;
				var portfolio = allData[0][0].PORTFOLIO;
				var program = allData[0][0].Title;
				var programID = allData[0][0].ProgramID;
				var BLUFID = allData[1][0].ID || allData[1][0].Id;
				var WhereItFitsID = allData[2][0].ID || allData[2][0].Id;
				var WhyWeNeedThisID = allData[3][0].ID || allData[3][0].Id;
				var CapabilityID = allData[4][0].ID || allData[4][0].Id;
				
				console.log(bos)
				console.log(portfolio)
				console.log(program)
				console.log(programID)

								
				console.log('BLUF: ' +  BLUFID);
				console.log('Where it Fits: ' +  WhereItFitsID);
				console.log('Why We Need This: ' +  WhyWeNeedThisID);
				console.log('Capability: ' +  CapabilityID);


					


                    var sourceData = {};
                    sourceData['BOS'] = bos;
                    sourceData['PORTFOLIO'] = portfolio;
                    sourceData['Program'] = program;
					sourceData['ProgramID'] = programID;
					sourceData['BLUFID'] = BLUFID;
					sourceData['WhereItFitsID'] = WhereItFitsID;
					sourceData['WhyWeNeedThisID'] = WhyWeNeedThisID;
					sourceData['CapabilityID'] = CapabilityID;


					


                    var obj = JSON.stringify(sourceData);
                    sessionStorage.setItem('SourceData', obj);
                    


    
    
                } else {
                    console.log('storage not supported');
                }
    

            }
            catch(e){
                console.log(e);
            }

        },
		
		addProgramAssessmentItem:function(allData){

            try{

                if (typeof(Storage) !== "undefined") {
					
				console.log(allData);
					
				var bos = allData[0][0].BOS;
				var portfolio = allData[0][0].PORTFOLIO;
				var program = allData[0][0].Title;
				var programID = allData[0][0].ProgramID;
				
				
				var POID = allData[1][0].ID || allData[1][0].Id;
				var PAID = allData[2][0].ID || allData[2][0].Id;
				//var WhyWeNeedThisID = allData[3][0].ID || allData[3][0].Id;
				//var CapabilityID = allData[4][0].ID || allData[4][0].Id;
				
				console.log(bos)
				console.log(portfolio)
				console.log(program)
				console.log(programID)

								
				console.log('PO: ' +  POID);
				console.log('PA: ' +  PAID);
				//console.log('Why We Need This: ' +  WhyWeNeedThisID);
				//console.log('Capability: ' +  CapabilityID);


					


                    var sourceData = {};
                    sourceData['BOS'] = bos;
                    sourceData['PORTFOLIO'] = portfolio;
                    sourceData['Program'] = program;
					sourceData['ProgramID'] = programID;
					sourceData['POID'] = POID;
					sourceData['PAID'] = PAID;
					//sourceData['WhyWeNeedThisID'] = WhyWeNeedThisID;
					//sourceData['CapabilityID'] = CapabilityID;


					


                    var obj = JSON.stringify(sourceData);
                    sessionStorage.setItem('SourceData', obj);
                    


    
    
                } else {
                    console.log('storage not supported');
                }
    

            }
            catch(e){
                console.log(e);
            }

        },



        changeBOS:function(bos, rootArr, FYs){

            try{

                if (typeof(Storage) !== "undefined") {

                    sessionStorage.removeItem('SourceData');

                    var bos = jQuery("#bos option:selected").text();

                    var sourceData = {};
                    sourceData[bos] = {};
                    sourceData[bos]['RDTE'] = {};
                    sourceData[bos]['PROC'] = {};
                    sourceData[bos]['OTHER'] = {};
                    sourceData[bos]['TOTAL'] = {};
                    sourceData[bos]['Quantity'] = {};

                    sourceData[bos]['Roots'] = [];
                    sourceData[bos]['Key4s'] = [];
                    sourceData[bos]['LINs'] = [];

                    sourceData[bos]['RDTE']['POM'] = 0;
                    sourceData[bos]['PROC']['POM'] = 0;
                    sourceData[bos]['OTHER']['POM'] = 0;
                    sourceData[bos]['TOTAL']['POM'] = 0;
                    sourceData[bos]['Quantity']['POM'] = 0;

                    

                    for(var i = FYs.length - 1; i >= 0; i--){
                                            
        
                        if(FYs[i].OData__x0050_2){

                            //var fyprop = 'OData__x0066_y' + FYs[i].OData__x0050_2;//USE SITE COLUMN WHEN IMPORTING FROM ACCESS
                            var fystr = 'FY'+ FYs[i].OData__x0050_2;//USE SITE COLUMN WHEN IMPORTING FROM ACCESS
                            //console.log(fystr);
                            sourceData[bos]['RDTE'][fystr] = {};
                            sourceData[bos]['PROC'][fystr] = {};
                            sourceData[bos]['OTHER'][fystr] = {};
                            sourceData[bos]['TOTAL'][fystr] = {};
                            sourceData[bos]['RDTE'][fystr]['SUM'] = 0;
                            sourceData[bos]['PROC'][fystr]['SUM'] = 0;
                            sourceData[bos]['OTHER'][fystr]['SUM'] = 0;
                            sourceData[bos]['TOTAL'][fystr]['SUM'] = 0;



                        }

                    }



                    //console.log(sourceData);


                    var obj = JSON.stringify(sourceData);
                    sessionStorage.setItem('SourceData', obj);
                    


    
    
                } else {
                    console.log('storage not supported');
                }
    

            }
            catch(e){
                console.log(e);
            }

        },

        changeRoot:function(sourceData, bos, root, checked, FYs){

            try{

                if (typeof(Storage) !== "undefined") {


                    if(checked){
                        sourceData[bos]['SelectedRoots'][root] = {};
                        sourceData[bos]['Roots'].unshift(root);

                        jQuery('#currentProgramRoot').empty();
                        jQuery('#currentProgramRoot').append(sourceData[bos]['Roots'].toString())



                    }else{
                        var index = sourceData[bos]['Roots'].indexOf(root);
                        //console.log(index);
                        sourceData[bos]['Roots'].splice(index,1);

                        jQuery('#currentProgramRoot').empty();
                        jQuery('#currentProgramRoot').append(sourceData[bos]['Roots'].toString())

                        
                        delete sourceData[bos]['SelectedRoots'][root];

                    }


                    var obj = JSON.stringify(sourceData);
                    sessionStorage.setItem('SourceData', obj);

    
                } else {
                    console.log('storage not supported');
                }
    

            }
            catch(e){
                console.log(e);
            }

        },

        changeKey4:function(bos, root, key4, sourceData, checked){

            try{

                //console.log('Change Key4')
                //console.log(bos + ' : ' + key4)

                if (typeof(Storage) !== "undefined") {


                    if(checked){

                        //console.log('Check Key 4s');
                        sourceData[bos]['Key4s'].unshift(key4);
                        //console.log(sourceData[bos]['Key4s'])


                        jQuery('#currentProgramKey4').empty();
                        jQuery('#currentProgramKey4').append(sourceData[bos]['Key4s'].toString())



                    }else{


                        var index = sourceData[bos]['Key4s'].indexOf(key4);
                        //console.log(index);
                        sourceData[bos]['Key4s'].splice(index,1);

                        jQuery('#currentProgramKey4').empty();
                        jQuery('#currentProgramKey4').append(sourceData[bos]['Key4s'].toString())

                        

                    }


                    var obj = JSON.stringify(sourceData);
                    sessionStorage.setItem('SourceData', obj);

    
                } else {
                    console.log('storage not supported');
                }
    

            }
            catch(e){
                console.log(e);
            }

        },

        enableDisableRoot:function(bos, selectedRoot, coorRootElem, sourceData, checked){

            try{



                if (typeof(Storage) !== "undefined") {

                    console.log('Check Key4s')
                    console.log(coorRootElem)
    

                    if(checked){

                        if(sourceData[bos]['UserRoots'][selectedRoot]){
                            sourceData[bos]['UserRoots'][selectedRoot]['checked'].push([true]);
    
    
                        }else{
                            sourceData[bos]['UserRoots'][selectedRoot] = {};
                            sourceData[bos]['UserRoots'][selectedRoot]['checked'] = [];
                            sourceData[bos]['UserRoots'][selectedRoot]['checked'].push([true]);
    
    
    
                        }
    

                    }else{
                        sourceData[bos]['UserRoots'][selectedRoot]['checked'].shift();


                    }


                    if(sourceData[bos]['UserRoots'][selectedRoot]){

                        if(sourceData[bos]['UserRoots'][selectedRoot]['checked'].length > 0){
                            coorRootElem.attr('disabled', true);
    
    
                        }else{
                            coorRootElem.attr('disabled', false);
    
    
                        }
    

                    }





                    var obj = JSON.stringify(sourceData);
                    sessionStorage.setItem('SourceData', obj);




                }else {
                    console.log('storage not supported');
                }
                

                
                /*if(arr.length > 1){
                    coorRootElem.attr('disabled', true);


                }else{
                    coorRootElem.attr('disabled', false);


                }*/
                

                /*for(var i = 0; i < key4Col.length; i++){


                    if(key4Col[i].checked){
                        colChecked = true;
                        

                    }

                    if(colChecked){

                        coorRootElem.attr('disabled', true);

                    }else{

                        coorRootElem.attr('disabled', false);

                    }



                    console.log(i + ' : ' + key4Col[i].checked)


                }*/


    
    

            }
            catch(e){
                console.log(e);
            }

        },


        updateFundedAssigned:function(bos, key4, allFunded, programID, checked){

            try{


                //Update Program Details
                var list = 'BOS_ROOT_'+bos+'';
                var ctx = _spPageContextInfo.siteAbsoluteUrl;   
                
                //console.log(ctx)
                //console.log(allFunded)
                var clientContext = new SP.ClientContext(ctx);
                var oList =  clientContext.get_web().get_lists().getByTitle(list);//MILTECH

                for(var i = 0; i < allFunded.length; i++){


                    //console.log('Get All Funded');
                    //console.log(allFunded[i]);
                    var id = allFunded[i].ID || allFunded[i].id;
                    //console.log('ID: ' + id);
                    var oListItem = oList.getItemById(id);  

                    if(checked){

                        //console.log(key4 + 'Assigned');
                        //console.log(allFunded)
    
    
    
                        oListItem.set_item('Assigned', true);
                        oListItem.set_item('ProgramID', programID);
    
                    }else{
    
                        //console.log(key4 + ' Unassigned');
                        //console.log(allFunded);
    
                        oListItem.set_item('Assigned', false);
                        oListItem.set_item('ProgramID', null);
    
                    }
    
                    oListItem.update();                 
                    clientContext.load(oListItem);	       
                    clientContext.executeQueryAsync(onRequestSucceeded, onRequestFailed);
    

                    
                }


                function onRequestSucceeded() {
                    var itemID = oListItem.get_id().toString();
                    console.log(list + 'itemID : ' + id + ' updated' );    

                }
                          
                function onRequestFailed(sender, args) {
                    console.log('Request failed. ' + args.get_message() + '\n' + args.get_stackTrace());
                }
                    



            }
            catch(e){
                console.log(e);
            }

        },


        changeLIN:function(bos, LIN, sourceData, checked){

            try{

               //console.log(bos + ' : ' + LIN)


                if (typeof(Storage) !== "undefined") {


                    if(checked){
                        sourceData[bos]['LINs'].unshift(LIN);

                        jQuery('#currentProgramLIN').empty();
                        jQuery('#currentProgramLIN').append(sourceData[bos]['LINs'].toString())


                    }else{
                        var index = sourceData[bos]['LINs'].indexOf(LIN);
                        //console.log(index);
                        sourceData[bos]['LINs'].splice(index,1);

                        jQuery('#currentProgramLIN').empty();
                        jQuery('#currentProgramLIN').append(sourceData[bos]['LINs'].toString())

                        

                    }


                    var obj = JSON.stringify(sourceData);
                    sessionStorage.setItem('SourceData', obj);

    
                } else {
                    console.log('storage not supported');
                }
    

            }
            catch(e){
                console.log(e);
            }

        },



        createProgramAPPN:function(sourceData, bos, BOSRoot, rootArr, FYs){

            try{

                if (typeof(Storage) !== "undefined") {


                                //console.log('Set APPN Framework')
                                //console.log(BOSRoot);
                                //console.log(rootArr);

                                var POMdb = TAFFY(BOSRoot);

                                for(var i = 0; i < rootArr.length; i++){
                                    var root = rootArr[i];
                                   // console.log(root + ' : ' + i)


                                    sourceData[bos]['SelectedRoots'][root] = {};

                                    sourceData[bos]['SelectedRoots'][root]['RDTE'] = {};  sourceData[bos]['SelectedRoots'][root]['RDTE']['POM'] = 0; 
                                    sourceData[bos]['SelectedRoots'][root]['PROC'] = {};  sourceData[bos]['SelectedRoots'][root]['PROC']['POM'] = 0;
                                    sourceData[bos]['SelectedRoots'][root]['OTHER'] = {}; sourceData[bos]['SelectedRoots'][root]['OTHER']['POM'] = 0;

                                    sourceData[bos]['SelectedRoots'][root]['RDTEUFR'] = {};  sourceData[bos]['SelectedRoots'][root]['RDTEUFR']['POM'] = 0; 
                                    sourceData[bos]['SelectedRoots'][root]['PROCUFR'] = {};  sourceData[bos]['SelectedRoots'][root]['PROCUFR']['POM'] = 0;
                                    sourceData[bos]['SelectedRoots'][root]['OTHERUFR'] = {}; sourceData[bos]['SelectedRoots'][root]['OTHERUFR']['POM'] = 0;


                                    for(var j = 0; j < FYs.length; j++){
                                        if(FYs[j].OData__x0050_2){//USE SITE COLUMN WHEN IMPORTING FROM ACCESS

                                            var fyprop = 'OData__x0046_Y' + FYs[j].OData__x0050_2;//USE SITE COLUMN WHEN IMPORTING FROM ACCESS
                                            var fystr = 'FY'+ FYs[j].OData__x0050_2;//USE SITE COLUMN WHEN IMPORTING FROM ACCESS

                                            //console.log(fystr + ' : ' + j);

                                                //console.log( POMdb( {Root:root,APPN:"AMMO"} ).select(fyprop) )//array of values
                                                //console.log( math.sum(POMdb( {Root:root,APPN:"AMMO"} ).select(fyprop) ) );//sum of array values

                                                //RDTE
                                                var rdteItems = POMdb( {Root:root,APPN:"RDTE"} ).select(fyprop);
                                                var rdteSUM = math.sum(POMdb( {Root:root,APPN:"RDTE"} ).select(fyprop) );
                                                sourceData[bos]['SelectedRoots'][root]['RDTE'][fystr] = {}; 
                                                sourceData[bos]['SelectedRoots'][root]['RDTE'][fystr]['Items'] = rdteItems;  
                                                sourceData[bos]['SelectedRoots'][root]['RDTE'][fystr]['SUM'] = rdteSUM;//scope:root
                                                //sourceData[bos]['RDTE'][fystr] += rdteSUM;//scope all roots
                                                //sourceData[bos]['TOTAL'][fystr] += rdteSUM;//scope all roots

                                                //PROC
                                                sourceData[bos]['SelectedRoots'][root]['PROC'][fystr] = {};

                                                var acftItems = POMdb( {Root:root,APPN:"ACFT"} ).select(fyprop);
                                                var acftSUM = math.sum(POMdb( {Root:root,APPN:"ACFT"} ).select(fyprop) );

                                                var ammoItems = POMdb( {Root:root,APPN:"AMMO"} ).select(fyprop);
                                                var ammoSUM = math.sum(POMdb( {Root:root,APPN:"AMMO"} ).select(fyprop) );

                                                var mslsItems = POMdb( {Root:root,APPN:"MSLS"} ).select(fyprop);
                                                var mslsSUM = math.sum(POMdb( {Root:root,APPN:"MSLS"} ).select(fyprop) );

                                                var opaItems = POMdb( {Root:root,APPN:"OPA"} ).select(fyprop);
                                                var opaSUM = math.sum(POMdb( {Root:root,APPN:"OPA"} ).select(fyprop) );

                                                var wtcvItems = POMdb( {Root:root,APPN:"WTCV"} ).select(fyprop);
                                                var wtcvSUM = math.sum(POMdb( {Root:root,APPN:"WTCV"} ).select(fyprop) );


        
                                                sourceData[bos]['SelectedRoots'][root]['PROC'][fystr]['ACFT'] = {}; 
                                                sourceData[bos]['SelectedRoots'][root]['PROC'][fystr]['ACFT']['Items'] = acftItems;
                                                sourceData[bos]['SelectedRoots'][root]['PROC'][fystr]['ACFT']['SUM'] = acftSUM;
        
                                                sourceData[bos]['SelectedRoots'][root]['PROC'][fystr]['AMMO'] = {}; 
                                                sourceData[bos]['SelectedRoots'][root]['PROC'][fystr]['AMMO']['Items'] = ammoItems;
                                                sourceData[bos]['SelectedRoots'][root]['PROC'][fystr]['AMMO']['SUM'] = ammoSUM;
        
                                                sourceData[bos]['SelectedRoots'][root]['PROC'][fystr]['MSLS'] = {}; 
                                                sourceData[bos]['SelectedRoots'][root]['PROC'][fystr]['MSLS']['Items'] = mslsItems;
                                                sourceData[bos]['SelectedRoots'][root]['PROC'][fystr]['MSLS']['SUM'] = mslsSUM 
        
                                                sourceData[bos]['SelectedRoots'][root]['PROC'][fystr]['OPA'] = {}; 
                                                sourceData[bos]['SelectedRoots'][root]['PROC'][fystr]['OPA']['Items'] = opaItems;
                                                sourceData[bos]['SelectedRoots'][root]['PROC'][fystr]['OPA']['SUM'] = opaSUM;
        
                                                sourceData[bos]['SelectedRoots'][root]['PROC'][fystr]['WTCV'] = {}; 
                                                sourceData[bos]['SelectedRoots'][root]['PROC'][fystr]['WTCV']['Items'] = wtcvItems;
                                                sourceData[bos]['SelectedRoots'][root]['PROC'][fystr]['WTCV']['SUM'] = wtcvSUM;
                                                sourceData[bos]['SelectedRoots'][root]['PROC'][fystr]['SUM'] = (acftSUM + ammoSUM + mslsSUM + opaSUM + wtcvSUM);//scope: root
                                                //sourceData[bos]['PROC'][fystr] += (acftSUM + ammoSUM + mslsSUM + opaSUM + wtcvSUM);//scope: all roots                                                             
                                                //sourceData[bos]['TOTAL'][fystr] += (acftSUM + ammoSUM + mslsSUM + opaSUM + wtcvSUM);//scope: all roots

                                                //OTHER   
                                                var awcfItems = POMdb( {Root:root,APPN:"ACFT"} ).select(fyprop);
                                                var awcfSUM = math.sum(POMdb( {Root:root,APPN:"AWCF"} ).select(fyprop) );

                                                var chmcItems = POMdb( {Root:root,APPN:"CHMC"} ).select(fyprop);
                                                var chmcSUM = math.sum(POMdb( {Root:root,APPN:"CHMC"} ).select(fyprop) );

                                                var chmdItems = POMdb( {Root:root,APPN:"CHMD"} ).select(fyprop);
                                                var chmdSUM = math.sum(POMdb( {Root:root,APPN:"CHMD"} ).select(fyprop) );

                                                var mcaItems = POMdb( {Root:root,APPN:"MCA"} ).select(fyprop);
                                                var mcaSUM = math.sum(POMdb( {Root:root,APPN:"MCA"} ).select(fyprop) );

                                                var ngpaItems = POMdb( {Root:root,APPN:"NGPA"} ).select(fyprop);
                                                var ngpaSUM = math.sum(POMdb( {Root:root,APPN:"NGPA"} ).select(fyprop) );

                                                var omaItems = POMdb( {Root:root,APPN:"OMA"} ).select(fyprop);
                                                var omaSUM = math.sum(POMdb( {Root:root,APPN:"OMA"} ).select(fyprop) );

                                                var omngItems = POMdb( {Root:root,APPN:"OMNG"} ).select(fyprop);
                                                var omngSUM = math.sum(POMdb( {Root:root,APPN:"OMNG"} ).select(fyprop) );

                                                var omarItems = POMdb( {Root:root,APPN:"OMAR"} ).select(fyprop);
                                                var omarSUM = math.sum(POMdb( {Root:root,APPN:"OMAR"} ).select(fyprop) );

                                                var rdtaItems = POMdb( {Root:root,APPN:"RDTA"} ).select(fyprop);
                                                var rdtaSUM = math.sum(POMdb( {Root:root,APPN:"RDTA"} ).select(fyprop) );

                                                var rpaItems = POMdb( {Root:root,APPN:"RPA"} ).select(fyprop);
                                                var rpaSUM = math.sum(POMdb( {Root:root,APPN:"RPA"} ).select(fyprop) );

                                                var wedgItems = POMdb( {Root:root,APPN:"WEDG"} ).select(fyprop);
                                                var wedgSUM = math.sum(POMdb( {Root:root,APPN:"WEDG"} ).select(fyprop) );

                                                sourceData[bos]['SelectedRoots'][root]['OTHER'][fystr] = {}
                                                sourceData[bos]['SelectedRoots'][root]['OTHER'][fystr]['AWCF'] = {}; 
                                                sourceData[bos]['SelectedRoots'][root]['OTHER'][fystr]['AWCF']['Items'] = awcfItems;
                                                sourceData[bos]['SelectedRoots'][root]['OTHER'][fystr]['AWCF']['SUM'] = awcfSUM;
                                            
                                                sourceData[bos]['SelectedRoots'][root]['OTHER'][fystr]['CHMC'] = {}; 
                                                sourceData[bos]['SelectedRoots'][root]['OTHER'][fystr]['CHMC']['Items'] = chmcItems;
                                                sourceData[bos]['SelectedRoots'][root]['OTHER'][fystr]['CHMC']['SUM'] = chmcSUM;
        
                                                sourceData[bos]['SelectedRoots'][root]['OTHER'][fystr]['CHMD'] = {}; 
                                                sourceData[bos]['SelectedRoots'][root]['OTHER'][fystr]['CHMD']['Items'] = chmdItems;
                                                sourceData[bos]['SelectedRoots'][root]['OTHER'][fystr]['CHMD']['SUM'] = chmdSUM;
                                    
                                                sourceData[bos]['SelectedRoots'][root]['OTHER'][fystr]['MCA']  = {}; 
                                                sourceData[bos]['SelectedRoots'][root]['OTHER'][fystr]['MCA']['Items'] = mcaItems;
                                                sourceData[bos]['SelectedRoots'][root]['OTHER'][fystr]['MCA']['SUM'] = mcaSUM;
        
                                                sourceData[bos]['SelectedRoots'][root]['OTHER'][fystr]['NGPA'] = {}; 
                                                sourceData[bos]['SelectedRoots'][root]['OTHER'][fystr]['NGPA']['Items'] = ngpaItems;
                                                sourceData[bos]['SelectedRoots'][root]['OTHER'][fystr]['NGPA']['SUM'] = ngpaSUM;
                                                
                                                sourceData[bos]['SelectedRoots'][root]['OTHER'][fystr]['OMA'] = {}; 
                                                sourceData[bos]['SelectedRoots'][root]['OTHER'][fystr]['OMA']['Items'] = omaItems;
                                                sourceData[bos]['SelectedRoots'][root]['OTHER'][fystr]['OMA']['SUM'] = omaSUM;
        
                                                sourceData[bos]['SelectedRoots'][root]['OTHER'][fystr]['OMNG'] = {}; 
                                                sourceData[bos]['SelectedRoots'][root]['OTHER'][fystr]['OMNG']['Items'] = omngItems;
                                                sourceData[bos]['SelectedRoots'][root]['OTHER'][fystr]['OMNG']['SUM'] = omngSUM;
        
                                                sourceData[bos]['SelectedRoots'][root]['OTHER'][fystr]['OMAR'] = {}; 
                                                sourceData[bos]['SelectedRoots'][root]['OTHER'][fystr]['OMAR']['Items'] = omarItems;
                                                sourceData[bos]['SelectedRoots'][root]['OTHER'][fystr]['OMAR']['SUM'] = omarSUM;
        
                                                sourceData[bos]['SelectedRoots'][root]['OTHER'][fystr]['RDTA'] = {}; 
                                                sourceData[bos]['SelectedRoots'][root]['OTHER'][fystr]['RDTA']['Items'] = rdtaItems;
                                                sourceData[bos]['SelectedRoots'][root]['OTHER'][fystr]['RDTA']['SUM'] = rdtaSUM;
        
                                                sourceData[bos]['SelectedRoots'][root]['OTHER'][fystr]['RPA'] = {}; 
                                                sourceData[bos]['SelectedRoots'][root]['OTHER'][fystr]['RPA']['Items'] = rpaItems;  
                                                sourceData[bos]['SelectedRoots'][root]['OTHER'][fystr]['RPA']['SUM'] = rpaSUM;
        
                                                sourceData[bos]['SelectedRoots'][root]['OTHER'][fystr]['WEDG'] = {};
                                                sourceData[bos]['SelectedRoots'][root]['OTHER'][fystr]['WEDG']['Items'] = wedgItems;
                                                sourceData[bos]['SelectedRoots'][root]['OTHER'][fystr]['WEDG']['SUM'] = wedgSUM;
                   
                                                sourceData[bos]['SelectedRoots'][root]['OTHER'][fystr]['SUM'] = (awcfSUM + chmcSUM + chmdSUM + mcaSUM + ngpaSUM + omaSUM + omngSUM + omarSUM + rdtaSUM + rpaSUM + wedgSUM); //scope: root
                                                //sourceData[bos]['OTHER'][fystr] += (awcfSUM + chmcSUM + chmdSUM + mcaSUM + ngpaSUM + omaSUM + omngSUM + omarSUM + rdtaSUM + rpaSUM + wedgSUM);//scope: all roots                                                              
                                                //sourceData[bos]['TOTAL'][fystr] += (awcfSUM + chmcSUM + chmdSUM + mcaSUM + ngpaSUM + omaSUM + omngSUM + omarSUM + rdtaSUM + rpaSUM + wedgSUM);//scope: all roots  





                                                //POM Count
                                                if(j >=2){//POM Total :  Interval of 5 
                                                    //console.log(i)
                                                    //console.log(fyprop);
                                                    //console.log(fystr);
                                                    
                                                    //RDTE POM
                                                    sourceData[bos]['SelectedRoots'][root]['RDTE']['POM'] += rdteSUM;//scope:root
                                                    //sourceData[bos]['RDTE']['POM'] += rdteSUM;//scope:all roots
                                                    //sourceData[bos]['TOTAL']['POM'] += rdteSUM;//scope:all roots
                                                    

                                                    //PROC POM
                                                    sourceData[bos]['SelectedRoots'][root]['PROC']['POM'] += (acftSUM + ammoSUM + mslsSUM + opaSUM + wtcvSUM);//scope:roots
                                                    //sourceData[bos]['PROC']['POM'] += (acftSUM + ammoSUM + mslsSUM + opaSUM + wtcvSUM);//scope:all roots
                                                    //sourceData[bos]['TOTAL']['POM'] += (acftSUM + ammoSUM + mslsSUM + opaSUM + wtcvSUM);//scope:all roots


                                                    //OTHER POM
                                                    sourceData[bos]['SelectedRoots'][root]['OTHER']['POM'] += (awcfSUM + chmcSUM + chmdSUM + mcaSUM + ngpaSUM + omaSUM + omngSUM + omarSUM + rdtaSUM + rpaSUM + wedgSUM);//scope:roots
                                                    //sourceData[bos]['OTHER']['POM'] += (awcfSUM + chmcSUM + chmdSUM + mcaSUM + ngpaSUM + omaSUM + omngSUM + omarSUM + rdtaSUM + rpaSUM + wedgSUM);//scope:all roots
                                                    //sourceData[bos]['TOTAL']['POM'] += (awcfSUM + chmcSUM + chmdSUM + mcaSUM + ngpaSUM + omaSUM + omngSUM + omarSUM + rdtaSUM + rpaSUM + wedgSUM);//scope:all roots


                                                    

    
                                                }





                                        }


                                    }



                                }








                    var obj = JSON.stringify(sourceData);
                    sessionStorage.setItem('SourceData', obj);

    
                } else {
                    console.log('storage not supported');
                }
    

            }
            catch(e){
                console.log(e);
            }

        
        },

        createProgramAPPNUFR:function(sourceData, bos, root, BOSRoot, BOSRootUFR, FYs){

            try{

                if (typeof(Storage) !== "undefined") {





                    var obj = JSON.stringify(sourceData);
                    sessionStorage.setItem('SourceData', obj);

    
                } else {
                    console.log('storage not supported');
                }
    

            }
            catch(e){
                console.log(e);
            }

        
        },
        

        

        removeProgramAPPN:function(sourceData, bos, root, BOSRoot, FYs){

            try{

                if (typeof(Storage) !== "undefined") {


                                //console.log('APPN')
                                var bos = jQuery("#bos option:selected").text();
                                var POMdb = TAFFY(BOSRoot);




                                if(sourceData[bos]['SelectedRoots'][root]){

    
                                       
        
                                       
                                        for(var i = 0; i < FYs.length; i++){
                                            
        
                                            if(FYs[i].OData__x0050_2){//USE SITE COLUMN WHEN IMPORTING FROM ACCESS
        
                                                var fyprop = 'OData__x0066_y' + FYs[i].OData__x0050_2;//USE SITE COLUMN WHEN IMPORTING FROM ACCESS
                                                var fystr = 'FY'+ FYs[i].OData__x0050_2;//USE SITE COLUMN WHEN IMPORTING FROM ACCESS


                                                //RDTE
                                                sourceData[bos]['RDTE'][fystr]['SUM'] -= sourceData[bos]['SelectedRoots'][root]['RDTE'][fystr]['SUM'];
                                                sourceData[bos]['TOTAL'][fystr]['SUM'] -= sourceData[bos]['SelectedRoots'][root]['RDTE'][fystr]['SUM'];

                                                //PROC
                                                sourceData[bos]['PROC'][fystr]['SUM'] -= sourceData[bos]['SelectedRoots'][root]['PROC'][fystr]['SUM'];
                                                sourceData[bos]['TOTAL'][fystr]['SUM'] -= sourceData[bos]['SelectedRoots'][root]['PROC'][fystr]['SUM'];

                                                //OTHER
                                                sourceData[bos]['OTHER'][fystr]['SUM'] -= sourceData[bos]['SelectedRoots'][root]['OTHER'][fystr]['SUM'];
                                                sourceData[bos]['TOTAL'][fystr]['SUM'] -= sourceData[bos]['SelectedRoots'][root]['OTHER'][fystr]['SUM'];


                                            }

        
                                        }//for

                                        //RDTE POM
                                        sourceData[bos]['RDTE']['POM'] -= sourceData[bos]['SelectedRoots'][root]['RDTE']['POM'];
                                        sourceData[bos]['TOTAL']['POM'] -= sourceData[bos]['SelectedRoots'][root]['RDTE']['POM'];

                                        //PROC POM
                                        sourceData[bos]['PROC']['POM'] -= sourceData[bos]['SelectedRoots'][root]['PROC']['POM'];
                                        sourceData[bos]['TOTAL']['POM'] -= sourceData[bos]['SelectedRoots'][root]['PROC']['POM'];

                                        //OTHER POM
                                        sourceData[bos]['OTHER']['POM'] -= sourceData[bos]['SelectedRoots'][root]['OTHER']['POM'];
                                        sourceData[bos]['TOTAL']['POM'] -= sourceData[bos]['SelectedRoots'][root]['OTHER']['POM'];
                                        


                                }



                    var obj = JSON.stringify(sourceData);
                    sessionStorage.setItem('SourceData', obj);

    
                } else {
                    console.log('storage not supported');
                }
    

            }
            catch(e){
                console.log(e);
            }

        },

        clearRoot:function(bos, root, sourceData){

            try{


               delete sourceData[bos]['SelectedRoots'][root];
                /*console.log('Clear Root');
                console.log(bos + ' : ' + root);
                console.log(sourceData[bos]['SelectedRoots'][root])

                var rootObj = sourceData[bos]['SelectedRoots'][root];

                for(var prop in rootObj){

                    for(var key4 in rootObj[prop]['Key4s']){

                        console.log( key4 );



                    }

                        
                    


                }

                */


                    
           

            }
            catch(e){
                console.log(e);
            }


        },

        resetQuantity:function(sourceData, bos, root, FYs){

            try{

                if (typeof(Storage) !== "undefined") {


                    console.log('Reset')
                    //console.log(sourceData[bos]['SelectedRoots'][root])
                    

                    //Reset Quantity
                    for(var LIN in sourceData[bos]['SelectedRoots'][root]['Quantity']['LINs']){

                        for(var i = 0; i < FYs.length; i++){

                            if(FYs[i].OData__x0050_2){//USE SITE COLUMN WHEN IMPORTING FROM ACCESS

                                var fyprop = 'OData__x0046_Y' + FYs[i].OData__x0050_2;//USE SITE COLUMN WHEN IMPORTING FROM ACCESS
                                var fystr = 'FY'+ FYs[i].OData__x0050_2;//USE SITE COLUMN WHEN IMPORTING FROM ACCESS

                                if(sourceData[bos]['SelectedRoots'][root]['Quantity']['LINs'][LIN][fystr]){
                    
                    
                    
                                    var checkLIN = sourceData[bos]['LINs'].indexOf(LIN);
                            
                            
                            
                                        if(checkLIN !== -1){

                                            //console.log(LIN + ' : ' + fystr);
                                            //console.log(checkLIN)
                                            //console.log(sourceData[bos]['Quantity'][fystr] + ' - ' + sourceData[bos]['SelectedRoots'][root]['Quantity']['LINs'][LIN][fystr]['SUM'])
                            
                                                sourceData[bos]['Quantity'][fystr] -= sourceData[bos]['SelectedRoots'][root]['Quantity']['LINs'][LIN][fystr]['SUM'];
                            
                            
                            
                                                                                
                                                if(i >= 2){//POM
                                    
                                                    sourceData[bos]['Quantity']['POM'] -= sourceData[bos]['SelectedRoots'][root]['Quantity']['LINs'][LIN][fystr]['SUM'];
                                            
                                            
                                                }

                                        }
                            

                                }

                            }



                        }
                        //console.log(LIN)
                    
                    }


                    var obj = JSON.stringify(sourceData);
                    sessionStorage.setItem('SourceData', obj);

    
                } else {
                    console.log('storage not supported');
                }


    

            }
            catch(e){
                console.log(e);
            }


        },



        resetAPPNs_Key4s:function(sourceData, bos, root, FYs){

            try{

                if (typeof(Storage) !== "undefined") {


                    console.log('Selected Root');
                    console.log(sourceData[bos]['SelectedRoots'][root])
                    
                    //Reset Appropriations and Key4s
                    for(var appn in sourceData[bos]['SelectedRoots'][root]){
                        console.log(appn)

                        if(sourceData[bos]['SelectedRoots'][root]){

                            for(var i = 0; i < FYs.length; i++){
                                        

                                if(FYs[i].OData__x0050_2){//USE SITE COLUMN WHEN IMPORTING FROM ACCESS

                                    var fyprop = 'OData__x0046_Y' + FYs[i].OData__x0050_2;//USE SITE COLUMN WHEN IMPORTING FROM ACCESS
                                    var fystr = 'FY'+ FYs[i].OData__x0050_2;//USE SITE COLUMN WHEN IMPORTING FROM ACCESS
                                    //console.log(fystr + ' : ' + appn)

                                    //RESET APPNs
                                    if(sourceData[bos]['SelectedRoots'][root][appn][fystr]){



                                        if(appn !== 'RDTEUFR' && appn !== 'PROCUFR' && appn !== 'OTHERUFR'){
                                            sourceData[bos][appn][fystr] -= sourceData[bos]['SelectedRoots'][root][appn][fystr]['SUM'];
                                            sourceData[bos]['TOTAL'][fystr] -= sourceData[bos]['SelectedRoots'][root][appn][fystr]['SUM'];
    

                                        }else{
                                            sourceData[bos][appn][fystr] -= sourceData[bos]['SelectedRoots'][root][appn][fystr]['SUM'];
                                            sourceData[bos]['TOTALUFR'][fystr] -= sourceData[bos]['SelectedRoots'][root][appn][fystr]['SUM'];
                                        }


                                        

                                        //RESET KEY 4s
                                        for(var key4 in sourceData[bos]['SelectedRoots'][root][appn]['Key4s']){

                                            //console.log(key4)

                                            if(sourceData[bos]['SelectedRoots'][root][appn]['Key4s'][key4][fystr]){
                                                //console.log(sourceData[bos]['SelectedRoots'][root][appn]['Key4s'][key4][fystr]['ALLOSUM'])


                                                sourceData[bos]['DEEPDIVE'][fystr] -= sourceData[bos]['SelectedRoots'][root][appn]['Key4s'][key4][fystr]['ALLOSUM'];
                                                sourceData[bos]['DEEPDIVE'][appn+'ACCUM'][fystr] -= sourceData[bos]['SelectedRoots'][root][appn]['Key4s'][key4][fystr]['ALLOSUM'];
                                                sourceData[bos]['DEEPDIVE'][appn][fystr] = 0;

                                                if(i >= 2){//POM
    
                                                    sourceData[bos]['DEEPDIVE']['POM'] -= sourceData[bos]['SelectedRoots'][root][appn]['Key4s'][key4][fystr]['ALLOSUM'];
            
            
                                                }
        

                                            }

                                        }

                                        //RESET APPNs POM
                                        if(i >= 2){//POM
    
                                            if(appn !== 'RDTEUFR' && appn !== 'PROCUFR' && appn !== 'OTHERUFR'){
                                                sourceData[bos][appn]['POM'] -= sourceData[bos]['SelectedRoots'][root][appn][fystr]['SUM'];
                                                sourceData[bos]['TOTAL']['POM'] -= sourceData[bos]['SelectedRoots'][root][appn][fystr]['SUM'];
    


                                            }else{
                                                sourceData[bos][appn]['POM'] -= sourceData[bos]['SelectedRoots'][root][appn][fystr]['SUM'];
                                                sourceData[bos]['TOTALUFR']['POM'] -= sourceData[bos]['SelectedRoots'][root][appn][fystr]['SUM'];


                                            }




    
    
                                        }
    

                                    }

        



                                }


                            }//for



                        }
    



                    }



                    




                    var obj = JSON.stringify(sourceData);
                    sessionStorage.setItem('SourceData', obj);

    
                } else {
                    console.log('storage not supported');
                }


    

            }
            catch(e){
                console.log(e);
            }


        },



        createProgramDeepDive:function(sourceData, bos, BOSRoot, roots, key4Arr, FYs){
            

            try{

                if (typeof(Storage) !== "undefined") {


                    console.log('Set Deep Dive Framework')
                    //console.log(BOSRoot)
                    var POMdb = TAFFY(BOSRoot);


                    for(var i = 0; i < roots.length; i++ ){
                        var root = roots[i];
                        //console.log(root);

                        if(sourceData[bos]['SelectedRoots'][root]){

                            sourceData[bos]['SelectedRoots'][root]['RDTE']['Key4s'] = {}; 
                            sourceData[bos]['SelectedRoots'][root]['PROC']['Key4s'] = {};
                            sourceData[bos]['SelectedRoots'][root]['OTHER']['Key4s'] = {};
    
    
                            //console.log(key4Arr);





                            
    
                            for(var j = 0; j < key4Arr.length; j++){
    
                                var key4 = key4Arr[j];
                               // console.log(key4);

    
                                
                                if(key4.search('RDTE') !== -1){//RDTE
                                    //console.log('RDTE: ' + key4);
                                    this.setKey4FYs(bos, root, key4, FYs, POMdb, sourceData,'RDTE');
    
                                }else if(key4.search('ACFT') !== -1 || key4.search('AMMO') !== -1 || key4.search('MSLS') !== -1 || key4.search('OPA') !== -1 || key4.search('WTCV') !== -1 ){//PROC
                                    //console.log('PROC: ' + key4);
                                    this.setKey4FYs(bos, root, key4, FYs, POMdb, sourceData,'PROC');
    
    
                                }else if(key4.search('AWCF') !== -1 || key4.search('CHMC') !== -1 || key4.search('CHMD') !== -1 || key4.search('MCA') !== -1 || 
                                            key4.search('NGPA') !== -1 || key4.search('OMA') !== -1 || key4.search('OMNG') !== -1 || key4.search('OMAR') !== -1 ||
                                            key4.search('RDTA') !== -1 || key4.search('RPA') !== -1 || key4.search('WEDG') !== -1 || key4.search('WTCV') !== -1){//OTHER
                                                
                                    //console.log('OTHER: ' + key4);
                                    this.setKey4FYs(bos, root, key4, FYs, POMdb, sourceData,'OTHER');
    
                                                
    
                                }

                                
    
    
    
                            }

                            
    
    
                        }
    




                    }



                    


                    

               

                    var obj = JSON.stringify(sourceData);
                    sessionStorage.setItem('SourceData', obj);

    
                } else {
                    console.log('storage not supported');
                }


    

            }
            catch(e){
                console.log(e);
            }

        },


        removeQuantityDependencies:function(sourceData, bos, root, FYs){

            try{

                if (typeof(Storage) !== "undefined") {


                    console.log('Remove Quantity Dependencies');
                    console.log(sourceData[bos]['SelectedRoots'][root]['Quantity']['LINs']);

                    for(var LIN in sourceData[bos]['SelectedRoots'][root]['Quantity']['LINs']){


                        for(var i = FYs.length - 1; i >= 0; i--){
                                            
        
                            if(FYs[i].OData__x0050_2){//USE SITE COLUMN WHEN IMPORTING FROM ACCESS
        
                                var fyprop = 'PQtyFY' + FYs[i].OData__x0050_2;//USE SITE COLUMN WHEN IMPORTING FROM ACCESS
                                var fystr = 'FY'+ FYs[i].OData__x0050_2;//USE SITE COLUMN WHEN IMPORTING FROM ACCESS

                                if(sourceData[bos]['SelectedRoots'][root]['Quantity']['LINs'][LIN][fystr] && sourceData[bos]['Quantity']['LINs'][LIN]){
                                    console.log(LIN);

                                    //change Quantity
                                    sourceData[bos]['Quantity'][fystr] -= sourceData[bos]['SelectedRoots'][root]['Quantity']['LINs'][LIN][fystr]['SUM'];



                                }

                            }

                        }

                        //change POM

                        
                        if(sourceData[bos]['SelectedRoots'][root]['Quantity']['LINs'][LIN][fystr] && sourceData[bos]['Quantity']['LINs'][LIN]){
                            console.log(sourceData[bos]['Quantity']['POM'] + '-=' + sourceData[bos]['SelectedRoots'][root]['Quantity']['LINs'][LIN]['POM'])
                            sourceData[bos]['Quantity']['POM'] -= sourceData[bos]['SelectedRoots'][root]['Quantity']['LINs'][LIN]['POM'];
                            delete sourceData[bos]['Quantity']['LINs'][LIN];


                        }


                    }
                   





                    var obj = JSON.stringify(sourceData);
                    sessionStorage.setItem('SourceData', obj);

    
                } else {
                    console.log('storage not supported');
                }


    

            }
            catch(e){
                console.log(e);
            }


        },



        



        createQuantity:function(sourceData, bos, root, LINObj, LINArr, FYs){

            try{

                if (typeof(Storage) !== "undefined") {

                    console.log('SET LINs')
                   // console.log(LINObj)


                    //Distinct LINs and Nomenclatures
                    var LINdb = TAFFY(LINObj); 

                    //console.log(LINArr);
                    

                    if(sourceData[bos]['SelectedRoots'][root]){
                        

                        sourceData[bos]['SelectedRoots'][root]['Quantity'] = {};
                        sourceData[bos]['SelectedRoots'][root]['Quantity']['LINs'] = {};



                        for(var i = 0; i < LINArr.length; i++){

                            var LIN = LINArr[i];
                            var nomen = (LINdb({LIN_OUT:LIN}).select('LIN_NOMEN'))[0];
                            //console.log(LIN + ' : ' + nomen);
                            //console.log( (LINdb({LINOUT:LIN}).select('LINNOMEN'))[0] )
                            this.setLINFYs(bos, root, LIN, nomen, FYs, LINdb, sourceData);


                        }


                    }


                    var obj = JSON.stringify(sourceData);
                    sessionStorage.setItem('SourceData', obj);


                    

    
                } else {
                    console.log('storage not supported');
                }


    

            }
            catch(e){
                console.log(e);
            }

        },

        createRootInventory:function(sourceData, bos, root, LINObj, LINArr, FYs){

            try{

                if (typeof(Storage) !== "undefined") {

                    //console.log('SET LINs')
                   // console.log(LINObj)


                    //Distinct LINs and Nomenclatures
                    var LINdb = TAFFY(LINObj); 

                    //console.log(LINArr);
                    

                    if(sourceData[bos]['SelectedRoots'][root]){
                        

                        sourceData[bos]['SelectedRoots'][root]['Inventory'] = {};
                        sourceData[bos]['SelectedRoots'][root]['Inventory']['LINs'] = {};


                    }


                    var obj = JSON.stringify(sourceData);
                    sessionStorage.setItem('SourceData', obj);


                    

    
                } else {
                    console.log('storage not supported');
                }


    

            }
            catch(e){
                console.log(e);
            }

        },


        setKey4FYs:function(bos, root, key4, FYs, POMdb, sourceData, appn){
            try{

                //console.log('Set Key4 FYs');
                //console.log(FYs)
                for(var i = FYs.length - 1; i >= 0; i--){
                                            
                    
                    if(FYs[i].OData__x0050_2){//USE SITE COLUMN WHEN IMPORTING FROM ACCESS

                        var fyprop = 'OData__x0046_Y' + FYs[i].OData__x0050_2;//USE SITE COLUMN WHEN IMPORTING FROM ACCESS
                        var fystr = 'FY'+ FYs[i].OData__x0050_2;//USE SITE COLUMN WHEN IMPORTING FROM ACCESS

                        var dollars = POMdb({Root:root,OData__x006b_ey4:key4}).select(fyprop);//MILTECH
                        var sum = math.sum(POMdb({Root:root,OData__x006b_ey4:key4}).select(fyprop));//MILTECH


                        

                        if(sum > 0){

                            if(sourceData[bos]['SelectedRoots'][root][appn]['Key4s'][key4]){
                                sourceData[bos]['SelectedRoots'][root][appn]['Key4s'][key4][fystr] = {};
                                sourceData[bos]['SelectedRoots'][root][appn]['Key4s'][key4][fystr]['Items'] = dollars;
                                sourceData[bos]['SelectedRoots'][root][appn]['Key4s'][key4][fystr]['SUM'] = sum;
                                sourceData[bos]['SelectedRoots'][root][appn]['Key4s'][key4]['SUM'] += sum;
                                sourceData[bos]['SelectedRoots'][root][appn]['Key4s'][key4][fystr]['ALLOSUM'] = 0;
                                sourceData[bos]['SelectedRoots'][root][appn]['Key4s'][key4]['ALLOSUM'] += sum;


                               // console.log(true + 1)



    
    
                            }else{


                                //console.log('Create ' + key4 + ' Object');;
                                sourceData[bos]['SelectedRoots'][root][appn]['Key4s'][key4] = {};
                                sourceData[bos]['SelectedRoots'][root][appn]['Key4s'][key4]['Root'] = root;//set root
                                sourceData[bos]['SelectedRoots'][root][appn]['Key4s'][key4][fystr] = {};
                                sourceData[bos]['SelectedRoots'][root][appn]['Key4s'][key4][fystr]['Items'] = dollars;
                                sourceData[bos]['SelectedRoots'][root][appn]['Key4s'][key4][fystr]['SUM'] = sum;
                                sourceData[bos]['SelectedRoots'][root][appn]['Key4s'][key4]['POM'] = 0;
                                sourceData[bos]['SelectedRoots'][root][appn]['Key4s'][key4]['SUM'] = sum;
                                sourceData[bos]['SelectedRoots'][root][appn]['Key4s'][key4][fystr]['ALLOSUM'] = 0;
                                sourceData[bos]['SelectedRoots'][root][appn]['Key4s'][key4]['ALLO'] = 0;
                                sourceData[bos]['SelectedRoots'][root][appn]['Key4s'][key4]['ALLOACCUM'] = 0;
                                sourceData[bos]['SelectedRoots'][root][appn]['Key4s'][key4]['ALLOSUM'] = sum;
                                sourceData[bos]['SelectedRoots'][root][appn]['Key4s'][key4]['POMALLO'] = 0;




    
                            }
    
                            if(i >=2){//POM Total :  Interval of 5 
                                sourceData[bos]['SelectedRoots'][root][appn]['Key4s'][key4]['POM'] += sum;
    

                            }
                        }





                        

                    }

                }


            }
            catch(e){
                console.log(e);
            }

        },

        setLINFYs:function(bos, root, LIN, nomen, FYs, LINdb, sourceData){
            try{


                console.log('SET LIN FYs');

                for(var i = FYs.length - 1; i >= 0; i--){
                                            
        
                    if(FYs[i].OData__x0050_2){//USE SITE COLUMN WHEN IMPORTING FROM ACCESS

                        var fyprop = 'PQtyFY' + FYs[i].OData__x0050_2;//USE SITE COLUMN WHEN IMPORTING FROM ACCESS
                        var fystr = 'FY'+ FYs[i].OData__x0050_2;//USE SITE COLUMN WHEN IMPORTING FROM ACCESS
                        var quantities = LINdb({LIN_OUT:LIN}).select(fyprop);
                        var sum = math.sum(LINdb({LIN_OUT:LIN}).select(fyprop));



                        if(sum > 0){

                            if(sourceData[bos]['SelectedRoots'][root]['Quantity']['LINs'][LIN]){
                                sourceData[bos]['SelectedRoots'][root]['Quantity']['LINs'][LIN][fystr] = {};
                                sourceData[bos]['SelectedRoots'][root]['Quantity']['LINs'][LIN][fystr]['Items'] = quantities;
                                sourceData[bos]['SelectedRoots'][root]['Quantity']['LINs'][LIN][fystr]['SUM'] = sum;
                                sourceData[bos]['SelectedRoots'][root]['Quantity']['LINs'][LIN]['SUM'] += sum;

                                //console.log('SUM: ' + sum);




                            }else{
                                sourceData[bos]['SelectedRoots'][root]['Quantity']['LINs'][LIN] = {};
                                sourceData[bos]['SelectedRoots'][root]['Quantity']['LINs'][LIN]['Root'] = root;//set root
                                sourceData[bos]['SelectedRoots'][root]['Quantity']['LINs'][LIN]['NOMEN'] = nomen;//set LIN Nomenclature
                                sourceData[bos]['SelectedRoots'][root]['Quantity']['LINs'][LIN][fystr] = {};
                                sourceData[bos]['SelectedRoots'][root]['Quantity']['LINs'][LIN][fystr]['Items'] = quantities;
                                sourceData[bos]['SelectedRoots'][root]['Quantity']['LINs'][LIN][fystr]['SUM'] = 0;
                                sourceData[bos]['SelectedRoots'][root]['Quantity']['LINs'][LIN][fystr]['SUM'] = sum;
                                sourceData[bos]['SelectedRoots'][root]['Quantity']['LINs'][LIN]['POM'] = 0;
                                sourceData[bos]['SelectedRoots'][root]['Quantity']['LINs'][LIN]['SUM'] = sum;

                                //console.log('SUM: ' + sum);



                            }

                            if(i >=2){//POM Total :  Interval of 5 
                                sourceData[bos]['SelectedRoots'][root]['Quantity']['LINs'][LIN]['POM'] += sum;
    
    
    
                            }



                        }


                    }

                }


            }
            catch(e){
                console.log(e);
            }

        },

        BOSDOM:function(bosArr){

            //load Portfolios drop down
            for(var i = 0; i < bosArr.length; i++){     
                var bosname = bosArr[i];      
                //console.log(bosname);
                jQuery("#bos").append('<option>'+bosname+'</option>');
            } 
            
        },//BOSDOM

        RootDOM:function(rootArr){

            //console.log('load roots');
            //console.log(rootArr);
         
            //Load Roots DOM
            jQuery('#roots').empty();//empty roots div
            for(var i = 0; i < rootArr.length; i++){
                var root = rootArr[i];
                jQuery('#roots').append('<p></p><input type="checkbox" value="'+root+'">'+root+'');
            }  
            


        },//RootDOM

        Key4DOM:function(key4Arr, root, obj, checked){
            try{  
                
                 //console.log('KEY4 DOM')
                 //console.log(key4Arr);
                 //console.log(obj)



                if(key4Arr.length === 0) alert('NO KEY 4 for\n'+ root +'');

                if(checked){

                    //console.log('Key 4 DOM')
                    //console.log(obj);

                    for(var key4 in obj){
                        //console.log(key4);
                            //console.log(obj[key4s]['POM'])
                            jQuery('#Key4Label').empty();
                            jQuery('#key4').append('<span id="'+key4+'" root="'+root+'"><input type="checkbox" class="'+key4+'" root="'+root+'"><label class='+key4+'>'+key4+'</label> : <label class='+key4+'root>'+ root +'</label><br/><br/></span>');
    

                        

                    }



                }else{
                    //console.log('UnChecked');

                    for(var key4 in obj){
                        jQuery('#'+key4+'').remove();

                    }

                    

                }


                

            }
            catch(e){
                console.log(e);
            }
    
            
        },//Key4DOM()

        LINDOM:function(LINs, root, obj, checked){
            try{  


              console.log('COUNT: ' + LINs.length)

              if(LINs.length === 0) alert('NO LIN for\n'+ root +'');              
                
                
                if(checked){

                    console.log('LIN DOM')

                    for(var LIN in obj){
                        var pom = obj[LIN]['POM'];
                        var nomen = obj[LIN]['NOMEN'];

                        console.log(LIN + ' : ' + nomen);


                        //if(pom > 0){
                            //console.log(obj[LIN]['POM'])
                            jQuery('#LINLabel').empty();
                            jQuery('#LIN').prepend('<span id="'+LIN+'"><input type="checkbox" class="'+LIN+'"><label class='+LIN+'>'+LIN+' : '+nomen+'</label> : <label class='+LIN+'root>'+root+'</label><br/><br/></span>');
        

                        //}

                    }

                }else{
                    //console.log('UnChecked');


                    
                    for(var LIN in obj){
                        jQuery('#'+LIN+'').remove();

                    }


                }
            }
            catch(e){
                console.log(e);
            }
    
            
        },//loadLINelements()

        loadAPPNAllo:function(sourceData, bos, root, FYs){

            try{
                console.log('Set POM')
                //console.log(sourceData[bos]['SelectedRoots'][root])

                for(var appn in sourceData[bos]['SelectedRoots'][root]){


                    for(var i = 0; i < FYs.length; i++){


                        if(FYs[i].OData__x0050_2){//USE SITE COLUMN WHEN IMPORTING FROM ACCESS
            
                            var fystr = 'FY'+ FYs[i].OData__x0050_2;//USE SITE COLUMN WHEN IMPORTING FROM ACCESS
                            var fy = FYs[i].OData__x0050_2;

                            if(sourceData[bos]['SelectedRoots'][root][appn][fystr]){
                                var sum = sourceData[bos]['SelectedRoots'][root][appn][fystr]['SUM'];
                                var pom = sourceData[bos]['SelectedRoots'][root][appn]['POM'];
                                //console.log(fystr);
                                //console.log(appn)
                                //console.log(sourceData[bos]['SelectedRoots'][root][appn])
                                //console.log(sum)
                                //console.log(pom)

                                if(appn === 'RDTE'){
    
                                    jQuery("#rdtefy"+fy).val(sum);
                                    jQuery("#rdtePOMPeriod").val(pom);


                                }else if(appn === 'PROC'){
                                    jQuery("#procfy"+fy).val(sum);
                                    jQuery("#procPOMPeriod").val(pom);



                                }else if(appn === 'OTHER'){
                                    jQuery("#otherfy"+fy).val(sum);
                                    jQuery("#otherPOMPeriod").val(pom);



                                }else if(appn === 'TOTAL'){
                                    jQuery("#totalfy"+fy).val(sum);
                                    jQuery("#totalPOMPeriod").val(pom);

                                }
            

                            }
    
    
                        }
                    }
    

                }


            }
            catch(e){
                console.log(e)
            }

        },

        loadKey4Allo:function(bos, root, key4, sourceData, FYs, checked){
            try{  

                console.log('Load Key 4 Allo')
                console.log(bos + ' : ' + root + ' : ' + key4)
                //console.log(sourceData)
                //console.log( jQuery("#key4Allo") )

                //console.log('previous root ' + previousRoot)

                

                if(checked){

                            

                            if(sourceData[bos]['SelectedRoots'][root]['RDTE']['Key4s'][key4]){
                                var sum = sourceData[bos]['SelectedRoots'][root]['RDTE']['Key4s'][key4]['SUM'];
                                var pom = sourceData[bos]['SelectedRoots'][root]['RDTE']['Key4s'][key4]['POM'];
                                //console.log(pom);
                                this.drawKey4Allo(bos, root, key4, sum, pom, sourceData, FYs,'RDTE');


                            }else if(sourceData[bos]['SelectedRoots'][root]['PROC']['Key4s'][key4]){
                                var sum = sourceData[bos]['SelectedRoots'][root]['PROC']['Key4s'][key4]['SUM'];
                                var pom  = sourceData[bos]['SelectedRoots'][root]['PROC']['Key4s'][key4]['POM'];
                                //console.log(pom);
                                this.drawKey4Allo(bos, root, key4, sum, pom, sourceData, FYs, 'PROC');



                            }else if(sourceData[bos]['SelectedRoots'][root]['OTHER']['Key4s'][key4]){
                                var sum = sourceData[bos]['SelectedRoots'][root]['OTHER']['Key4s'][key4]['SUM'];
                                var pom = sourceData[bos]['SelectedRoots'][root]['OTHER']['Key4s'][key4]['POM'];
                                //console.log(pom);
                                this.drawKey4Allo(bos, root, key4, sum, pom, sourceData, FYs, 'OTHER');

                            }
                        
                            
                    

     
                }else{

                    //console.log('clear')
                    //console.log(jQuery("#"+key4+"key4allo"))
                    jQuery("#"+key4+"rowDisp").remove();
                                


                }

                

                var obj = JSON.stringify(sourceData);
                sessionStorage.setItem('SourceData', obj);




            }
            catch(e){
                console.log(e);
            }
   
        },//loadKey4Allo

        drawKey4Allo:function(bos, root, key4, sum, pom, sourceData, FYs, appn){

            try{

                //console.log('draw allo');
                //console.log(sourceData)
                //console.log(FYs)
                //console.log(key4);

                jQuery("#key4Table").append('<tr id="'+key4+'rowDisp">')
                jQuery("#"+key4+"rowDisp").append('<td><span>'+root+'</span></td>');
                jQuery("#"+key4+"rowDisp").append('<td><span>'+key4+'</span></td>');
                jQuery("#"+key4+"rowDisp").append('<td><span id=allo'+key4+'>$'+sum+'</span></td>');


                for(var i = 0; i < FYs.length; i++){
                                            
        
                    if(FYs[i].OData__x0050_2){//USE SITE COLUMN WHEN IMPORTING FROM ACCESS

                        var fyprop = 'OData__x0046_Y' + FYs[i].OData__x0050_2;//USE SITE COLUMN WHEN IMPORTING FROM ACCESS
                        var fystr = 'FY'+ FYs[i].OData__x0050_2;//USE SITE COLUMN WHEN IMPORTING FROM ACCESS


                        var yr = FYs[i].OData__x0050_2;


                        if(sourceData[bos]['SelectedRoots'][root][appn]['Key4s'][key4][fystr] ){


                            //console.log(fystr);
                            //console.log( sourceData[bos]['SelectedRoots'][root][appn]['Key4s'][key4][fystr] );
                            jQuery("#"+key4+"rowDisp").append('<td><input id= "fy'+yr+''+key4+'" type="textbox"/></td>')

                            
    

                        }else{
                            //console.log('append read only')
                            //console.log(fystr);
                            //console.log( sourceData[bos]['SelectedRoots'][root][appn]['Key4s'][key4][fystr] );
                            //console.log(yr);

                            jQuery("#"+key4+"rowDisp").append('<td><input id= "fy'+yr+''+key4+'" type="textbox" value="0" readonly/></td>')

                        }

                    }

                }

                

                jQuery("#"+key4+"rowDisp").append('<td><span><a href="#"><div id="'+key4+'" class="blackbutton">Split</div></a></span></td></td><td><span><a href="#"><div id="'+key4+'" class="blackbutton">Reset</div></a></span></td></td>');

                
                    





            }
            catch(e){
                console.log(e)
            }


        },//drawKey4Allo

        loadInventoryModal:function(sourceData){
            try{  

                console.log('load inventory modal')

                console.log(sourceData)

                var open_dialog = function(){
			
                    var _html = document.createElement('div');
                    
                        _html.innerHTML =  '<style>.testStyle { border: 1px solid black;}</style>'+ 
                                            '<div class="wrapper" id="AllocateKey4">' +
                                                '<table class="testStyle">'+
                                                    '<tr>'+
                                                        '<th>Element</th>' +
                                                        '<th>AAO</th>' +
                                                        '<th>APO</th>' + 
                                                        '<th>RO</th>' +

                                                    '</tr>'+

                                                    '<tr class="testStyle">'+
                                                        '<td>Training Base Quantity for TDAs</td>' +
                                                        '<td>'+sourceData['AAO'].TNG_Base_TDA+'</td>' +
                                                        '<td>'+sourceData['APO'].TNG_Base_TDA+'</td>' +
                                                        '<td>'+sourceData['RO'].TNG_Base_TDA+'</td>' +


                                                    '</tr>'+
                                                    '<tr>'+
                                                        '<td>BOIP - OTOE(COMPO 1)</td>' +
                                                        '<td>'+sourceData['AAO'].COMPO_1_OTOE+'</td>' +
                                                        '<td>'+sourceData['APO'].COMPO_1_OTOE+'</td>' +
                                                        '<td>'+sourceData['RO'].COMPO_1_OTOE+'</td>' +


                                                    '</tr>'+
                                                    '<tr>'+
                                                        '<td>BOIP - OTOE(COMPO 2)</td>' +
                                                        '<td>'+sourceData['AAO'].COMPO_2_OTOE+'</td>' +
                                                        '<td>'+sourceData['APO'].COMPO_2_OTOE+'</td>' +
                                                        '<td>'+sourceData['RO'].COMPO_2_OTOE+'</td>' +

                                                    '</tr>'+
                                                    '<tr>'+
                                                        '<td>BOIP - OTOE(COMPO 3)</td>' +
                                                        '<td>'+sourceData['AAO'].COMPO_3_OTOE+'</td>' +
                                                        '<td>'+sourceData['APO'].COMPO_3_OTOE+'</td>' +
                                                        '<td>'+sourceData['RO'].COMPO_3_OTOE+'</td>' +

                                                    '</tr>'+

                                                    '<tr>'+
                                                        '<td>Army Pre-positioned Stock Unit Sets</td>' +
                                                        '<td>'+sourceData['AAO'].ACT_SETS+'</td>' +
                                                        '<td>'+sourceData['APO'].ACT_SETS+'</td>' +
                                                        '<td>'+sourceData['RO'].ACT_SETS+'</td>' +

                                                    '</tr>'+
                                                    '<tr>'+
                                                        '<td>APS Activity Sets</td>' +
                                                        '<td>'+sourceData['AAO'].APS_OTOE+'</td>' +
                                                        '<td>'+sourceData['APO'].APS_OTOE+'</td>' +
                                                        '<td>'+sourceData['RO'].APS_OTOE+'</td>' +

                                                    '</tr>'+

                                                    '<tr>'+
                                                        '<td>Army War Reserve Sustainment Stocks</td>' +
                                                        '<td>'+sourceData['AAO'].WR+'</td>' +
                                                        '<td>'+sourceData['APO'].WR+'</td>' +
                                                        '<td>'+sourceData['RO'].WR+'</td>' +                                                      
                                                    '</tr>'+

                                                    '<tr>'+
                                                        '<td>War Reserve Stocks for Allies</td>' +
                                                        '<td>'+sourceData['AAO'].WRA+'</td>' +
                                                        '<td>'+sourceData['APO'].WRA+'</td>' +
                                                        '<td>'+sourceData['RO'].WRA+'</td>' +

                                                    '</tr>'+

                                                    '<tr>'+
                                                        '<td>Repair Cycle Float</td>' +
                                                        '<td>'+sourceData['AAO'].RCF+'</td>' +
                                                        '<td>'+sourceData['APO'].RCF+'</td>' +
                                                        '<td>'+sourceData['RO'].RCF+'</td>' +

                                                    '</tr>'+                        

                                                    '<tr>'+
                                                        '<td>Operational Readiness Float</td>' +
                                                        '<td>'+sourceData['AAO'].ORF+'</td>' +
                                                        '<td>'+sourceData['APO'].ORF+'</td>' +
                                                        '<td>'+sourceData['RO'].ORF+'</td>' +

                                                    '</tr>'+


                                                    '<tr>'+
                                                        '<td>Other TDA Requirements</td>' +
                                                        '<td>'+sourceData['AAO'].Other_TDA+'</td>' +
                                                        '<td>'+sourceData['APO'].Other_TDA+'</td>' +
                                                        '<td>'+sourceData['RO'].Other_TDA+'</td>' +

                                                    '</tr>'+

                                                    '<tr>'+
                                                        '<td>Total</td>' +
                                                        '<td>'+sourceData['AAO'].TotalAAO+'</td>' +
                                                        '<td>'+sourceData['APO'].TotalAPO+'</td>' +
                                                        '<td>'+sourceData['RO'].TotalRO+'</td>' +
                                                    '</tr>'+



                                                 '</table>'+
                                                 '<input id="accept" type="button"  value="OK" onclick="SP.UI.ModalDialog.commonModalDialogClose(SP.UI.DialogResult.OK); return true;"/>' +
                                         '</div>' +
                                       
                                       '<style>'+
                                               '#wrapper{position:relative;}' +
                                                '#dod_header{color:#000000;font-family:serif;margin-left:20px;text-align:center}'  +
                                                '#dod_header2{color:#000000;font-size:medium;font-family:serif;margin-left:70px}'  +
                                                '.dod_content{color:#000000;font-size:medium;font-family:serif;margin-left:120px}' +
                                                '#accept{margin-left:350px}'+		
                                       '<style>';
                
        
                            //Using the DialogOptions class.
                            var options = SP.UI.$create_DialogOptions();
                            
                            //Using a generic object.
                            options = {
                                title: "AAO-APO-RO Distibution",
                                width: 1100,
                                height: 650,
                                showClose: false,
                                allowMaximize:false,
                                html: _html
                                
                            }; 
                               
                            SP.UI.ModalDialog.showModalDialog(options);




            }//end open_dialog
            
            
            //load sp.js library before running script
            ExecuteOrDelayUntilScriptLoaded(function () {open_dialog()}, "sp.js");
            

     
     
    






            }
            catch(e){
                console.log(e);
            }
   
        },//loadInventoryModal
		
		programmaticOverviewModal:function(sourceData){
            try{  

				
				var ctx = _spPageContextInfo.webAbsoluteUrl;
				var bos = sourceData['BOS'];
				var itemID = sourceData['POID'].toString();
				var _url  = ctx +'/Lists/PROGRAMMATICOVERVIEW_'+bos+'/EditForm.aspx?ID='+itemID+'';



                var open_dialog = function(){
			
                
        
                            //Using the DialogOptions class.
                            var options = SP.UI.$create_DialogOptions();
                            
                            //Using a generic object.
                            options = {
                                title: "Programmatic Overview",
                                width: 1100,
                                height: 650,
                                showClose: false,
                                allowMaximize:false,
                                url: _url
                                
                            }; 
                               
                            SP.UI.ModalDialog.showModalDialog(options);




            }//end open_dialog
            
            
            //load sp.js library before running script
            ExecuteOrDelayUntilScriptLoaded(function () {open_dialog()}, "sp.js");
            

     
     
    






            }
            catch(e){
                console.log(e);
            }
   
        },//programmaticOverviewModal

        programmaticAssessmentModal:function(sourceData){
            try{  

				var ctx = _spPageContextInfo.webAbsoluteUrl;
				var bos = sourceData['BOS'];
				var itemID = sourceData['PAID'].toString();
				var _url  = ctx +'/Lists/PROGRAMASSESSMENT_'+bos+'/EditForm.aspx?ID='+itemID+'';



                var open_dialog = function(){

        
                            //Using the DialogOptions class.
                            var options = SP.UI.$create_DialogOptions();
                            
                            //Using a generic object.
                            options = {
                                title: "Program Assessment",
                                width: 1100,
                                height: 650,
                                showClose: false,
                                allowMaximize:false,
                                url: _url
                                
                            }; 
                               
                            SP.UI.ModalDialog.showModalDialog(options);




            }//end open_dialog
            
            
            //load sp.js library before running script
            ExecuteOrDelayUntilScriptLoaded(function () {open_dialog()}, "sp.js");
            

     
     
    






            }
            catch(e){
                console.log(e);
            }
   
        },//programmaticOverviewModal
		
		POMAllocationModal:function(bos, sourceData){
            try{  

                console.log('POM ALLO')

                console.log(sourceData)


                var open_dialog = function(){
			
                    var _html = document.createElement('div');
                    
                    _html.innerHTML =  '<style>.testStyle { border: 1px solid black;}</style>'+ 
                    '<div class="wrapper" id="AllocateKey4">' +
                    '<div id="lastModified-ReqCap"><span id="modifiedSpanPOMAllo"></span></div>'+

                        '<table class="testStyle">'+

                        '<thead>'+
                        '<tr>'+
                            '<th></th>'+
                            '<th>FY19</th>'+
                            '<th>FY20</th>'+
                            '<th>FY21</th>'+
                            '<th>FY22</th>'+
                            '<th>FY23</th>'+
                            '<th>FY24</th>'+
                            '<th>FY25</th>'+
                            '<th>FY21 - 25</th>'+
                        '</tr>'+
                    '</thead>'+

                    '<tbody>'+
                    '<tr>'+
                        '<td><strong>RDTE</strong></td>'+
                        '<td><input class = "POMAllocTable APPNSec" id="rdtefy19" type="text" width="20px" style="text-align:right" value=" '+sourceData[bos]['RDTE']['FY19']+'" readonly></td>'+
                        '<td><input class = "POMAllocTable APPNSec" id="rdtefy20" type="text" width="20px" style="text-align:right" value=" '+sourceData[bos]['RDTE']['FY20']+'" readonly></td>'+
                        '<td><input class = "POMAllocTable APPNSec" id="rdtefy21" type="text" width="20px" style="text-align:right" value=" '+sourceData[bos]['RDTE']['FY21']+'" readonly></td>'+
                        '<td><input class = "POMAllocTable APPNSec" id="rdtefy22" type="text" width="20px" style="text-align:right" value=" '+sourceData[bos]['RDTE']['FY22']+'" readonly></td>'+
                        '<td><input class = "POMAllocTable APPNSec" id="rdtefy23" type="text" width="20px" style="text-align:right" value=" '+sourceData[bos]['RDTE']['FY23']+'" readonly></td>'+
                        '<td><input class = "POMAllocTable APPNSec" id="rdtefy24" type="text" width="20px" style="text-align:right" value=" '+sourceData[bos]['RDTE']['FY24']+'" readonly></td>'+
                        '<td><input class = "POMAllocTable APPNSec" id="rdtefy25" type="text" width="20px" style="text-align:right" value=" '+sourceData[bos]['RDTE']['FY25']+'" readonly></td>'+
                        '<td><input class = "POMAllocTable APPNSec" id="rdtePOMPeriod" type="text" width="20px" style="text-align:right" value=" '+sourceData[bos]['RDTE']['POM']+'" readonly></td>'+

                    '</tr>'+  

                    '<tr>'+
                    '<td><strong>PROC</strong></td>'+
                    '<td><input class = "POMAllocTable APPNSec" id="procfy19" type="text" width="20px" style="text-align:right" value=" '+sourceData[bos]['PROC']['FY19']+'" readonly></td>'+
                    '<td><input class = "POMAllocTable APPNSec" id="procfy20" type="text" width="20px" style="text-align:right" value=" '+sourceData[bos]['PROC']['FY20']+'" readonly></td>'+
                    '<td><input class = "POMAllocTable APPNSec" id="procfy21" type="text" width="20px" style="text-align:right" value=" '+sourceData[bos]['PROC']['FY21']+'" readonly></td>'+
                    '<td><input class = "POMAllocTable APPNSec" id="procfy22" type="text" width="20px" style="text-align:right" value=" '+sourceData[bos]['PROC']['FY22']+'" readonly></td>'+
                    '<td><input class = "POMAllocTable APPNSec" id="procfy23" type="text" width="20px" style="text-align:right" value=" '+sourceData[bos]['PROC']['FY23']+'" readonly></td>'+
                    '<td><input class = "POMAllocTable APPNSec" id="procfy24" type="text" width="20px" style="text-align:right" value=" '+sourceData[bos]['PROC']['FY24']+'" readonly></td>'+
                    '<td><input class = "POMAllocTable APPNSec" id="procfy25" type="text" width="20px" style="text-align:right" value=" '+sourceData[bos]['PROC']['FY25']+'" readonly></td>'+
                    '<td><input class = "POMAllocTable APPNSec" id="procPOMPeriod" type="text" width="20px" style="text-align:right" value=" '+sourceData[bos]['PROC']['POM']+'" readonly></td>'+
                    '</tr>'+

                    '<tr>'+
                '<td><strong>OTHER</strong></td>'+
                    '<td><input class = "POMAllocTable APPNSec" id="otherfy19" type="text" width="20px" style="text-align:right" value=" '+sourceData[bos]['OTHER']['FY19']+'" readonly></td>'+
                    '<td><input class = "POMAllocTable APPNSec" id="otherfy20" type="text" width="20px" style="text-align:right" value=" '+sourceData[bos]['OTHER']['FY20']+'" readonly></td>'+
                    '<td><input class = "POMAllocTable APPNSec" id="otherfy21" type="text" width="20px" style="text-align:right" value=" '+sourceData[bos]['OTHER']['FY21']+'" readonly></td>'+
                    '<td><input class = "POMAllocTable APPNSec" id="otherfy22" type="text" width="20px" style="text-align:right" value=" '+sourceData[bos]['OTHER']['FY22']+'" readonly></td>'+
                    '<td><input class = "POMAllocTable APPNSec" id="otherfy23" type="text" width="20px" style="text-align:right" value=" '+sourceData[bos]['OTHER']['FY23']+'" readonly></td>'+
                    '<td><input class = "POMAllocTable APPNSec" id="otherfy24" type="text" width="20px" style="text-align:right" value=" '+sourceData[bos]['OTHER']['FY24']+'" readonly></td>'+
                    '<td><input class = "POMAllocTable APPNSec" id="otherfy25" type="text" width="20px" style="text-align:right" value=" '+sourceData[bos]['OTHER']['FY25']+'" readonly></td>'+
                    '<td><input class = "POMAllocTable APPNSec" id="otherPOMPeriod" type="text" width="20px" style="text-align:right" value=" '+sourceData[bos]['OTHER']['POM']+'" readonly></td>'+
                '</tr>'+

                '<tr>'+
                '<td><strong>TOTAL</strong></td>'+
                '<td><input class = "POMAllocTable APPNSec" id="totalfy19" type="text" width="20px" style="text-align:right" value=" '+sourceData[bos]['TOTAL']['FY19']+'" readonly></td>'+
                '<td><input class = "POMAllocTable APPNSec" id="totalfy20" type="text" width="20px" style="text-align:right" value=" '+sourceData[bos]['TOTAL']['FY20']+'" readonly></td>'+
                '<td><input class = "POMAllocTable APPNSec" id="totalfy21" type="text" width="20px" style="text-align:right" value=" '+sourceData[bos]['TOTAL']['FY21']+'" readonly></td>'+
                '<td><input class = "POMAllocTable APPNSec" id="totalfy22" type="text" width="20px" style="text-align:right" value=" '+sourceData[bos]['TOTAL']['FY22']+'" readonly></td>'+
                '<td><input class = "POMAllocTable APPNSec" id="totalfy23" type="text" width="20px" style="text-align:right" value=" '+sourceData[bos]['TOTAL']['FY23']+'" readonly></td>'+
                '<td><input class = "POMAllocTable APPNSec" id="totalfy24" type="text" width="20px" style="text-align:right" value=" '+sourceData[bos]['TOTAL']['FY24']+'" readonly ></td>'+
                '<td><input class = "POMAllocTable APPNSec" id="totalfy25" type="text" width="20px" style="text-align:right" value=" '+sourceData[bos]['TOTAL']['FY25']+'" readonly></td>'+
                '<td><input class = "POMAllocTable APPNSec" id="totalPOMPeriod" type="text" width="20px" style="text-align:right" value=" '+sourceData[bos]['TOTAL']['POM']+'" readonly></td>'+
            '</tr>'+
            '<tr>'+
                '<td><strong>DEEP DIVE</strong></td>'+
                '<td><input class = "POMAllocTable DeepDiveSec" id="deepdivefy19" type="text" width="20px" style="text-align:right" value=" '+sourceData[bos]['DEEPDIVE']['FY19']+'" readonly></td>'+
                '<td><input class = "POMAllocTable DeepDiveSec" id="deepdivefy20" type="text" width="20px" style="text-align:right" value=" '+sourceData[bos]['DEEPDIVE']['FY20']+'" readonly></td>'+
                '<td><input class = "POMAllocTable DeepDiveSec" id="deepdivefy21" type="text" width="20px" style="text-align:right" value=" '+sourceData[bos]['DEEPDIVE']['FY21']+'" readonly></td>'+
                '<td><input class = "POMAllocTable DeepDiveSec" id="deepdivefy22" type="text" width="20px" style="text-align:right" value=" '+sourceData[bos]['DEEPDIVE']['FY22']+'" readonly></td>'+
                '<td><input class = "POMAllocTable DeepDiveSec" id="deepdivefy23" type="text" width="20px" style="text-align:right" value=" '+sourceData[bos]['DEEPDIVE']['FY23']+'" readonly></td>'+
                '<td><input class = "POMAllocTable DeepDiveSec" id="deepdivefy24" type="text" width="20px" style="text-align:right" value=" '+sourceData[bos]['DEEPDIVE']['FY24']+'" readonly></td>'+
                '<td><input class = "POMAllocTable DeepDiveSec" id="deepdivefy25" type="text" width="20px" style="text-align:right" value=" '+sourceData[bos]['DEEPDIVE']['FY25']+'" readonly></td>'+
                '<td><input class = "POMAllocTable DeepDiveSec" id="deepdivePOMPeriod" type="text" width="20px" style="text-align:right" value=" '+sourceData[bos]['DEEPDIVE']['POM']+'" readonly></td>'+
            '</tr>'+
    

                    '</tbody>'+

                         '</table>'+

                        '<div id="modalButtons">'+ 
						
						
                         '<input id="accept" type="button"  value="OK" onclick="SP.UI.ModalDialog.commonModalDialogClose(SP.UI.DialogResult.OK); return true;"/>' +
                         '</div>'+

                 '</div>' +
               
               '<style>'+
                       '#wrapper{position:relative;}' +
                        '#dod_header{color:#000000;font-family:serif;margin-left:20px;text-align:center}'  +
                        '#dod_header2{color:#000000;font-size:medium;font-family:serif;margin-left:70px}'  +
                        '.dod_content{color:#000000;font-size:medium;font-family:serif;margin-left:120px}' +
                        '#accept{margin-left:350px}'
               '<style>';

        
                            //Using the DialogOptions class.
                            var options = SP.UI.$create_DialogOptions();
                            
                            //Using a generic object.
                            options = {
                                title: "POM Allocation",
                                width: 1500,
                                height: 650,
                                showClose: false,
                                allowMaximize:false,
                                html: _html,
                                dialogReturnValueCallback: updateAssessment

                                
                            }; 
                               
                            SP.UI.ModalDialog.showModalDialog(options);




            }//end open_dialog
            
            
            //load sp.js library before running script
            ExecuteOrDelayUntilScriptLoaded(function () {open_dialog()}, "sp.js");

            function updateAssessment(dialogResult, returnValue) {



                if (dialogResult == SP.UI.DialogResult.OK) {
                     

                    //alert('Program Assessment Updated');
                    



                }

            }

            

     
     
    






            }
            catch(e){
                console.log(e);
            }
   
        },//POM Allocation

        quantityModal:function(bos, sourceData){
            try{  

                console.log('load Programmatic Overview')

                console.log(sourceData)

                var open_dialog = function(){
			
                    var _html = document.createElement('div');
                    
                    _html.innerHTML =  '<style>.testStyle { border: 1px solid black;}</style>'+ 
                    '<div class="wrapper" id="AllocateKey4">' +
                    '<div id="lastModified-ReqCap"><span id="modifiedSpanPOMAllo"></span></div>'+

                        '<table class="testStyle">'+

                        '<thead>'+
                        '<tr>'+
                            '<th></th>'+
                            '<th>FY19</th>'+
                            '<th>FY20</th>'+
                            '<th>FY21</th>'+
                            '<th>FY22</th>'+
                            '<th>FY23</th>'+
                            '<th>FY24</th>'+
                            '<th>FY25</th>'+
                            '<th>FY21 - 25</th>'+
                        '</tr>'+
                    '</thead>'+

                    '<tbody>'+

             '<tr>'+
                '<td><strong>QUANTITY</strong></td>'+
                '<td><input class = "POMAllocTable QuantitySec" id="quantityfy19" type="text" width="20px" style="text-align:center" value="'+sourceData[bos]['Quantity']['FY19']+'" readonly></td>'+
                '<td><input class = "POMAllocTable QuantitySec" id="quantityfy20" type="text" width="20px" style="text-align:center" value="'+sourceData[bos]['Quantity']['FY20']+'" readonly></td>'+
                '<td><input class = "POMAllocTable QuantitySec" id="quantityfy21" type="text" width="20px" style="text-align:center" value="'+sourceData[bos]['Quantity']['FY21']+'" readonly></td>'+
                '<td><input class = "POMAllocTable QuantitySec" id="quantityfy22" type="text" width="20px" style="text-align:center" value="'+sourceData[bos]['Quantity']['FY22']+'" readonly></td>'+
                '<td><input class = "POMAllocTable QuantitySec" id="quantityfy23" type="text" width="20px" style="text-align:center" value="'+sourceData[bos]['Quantity']['FY23']+'" readonly></td>'+
                '<td><input class = "POMAllocTable QuantitySec" id="quantityfy24" type="text" width="20px" style="text-align:center" value="'+sourceData[bos]['Quantity']['FY24']+'" readonly></td>'+
                '<td><input class = "POMAllocTable QuantitySec" id="quantityfy25" type="text" width="20px" style="text-align:center" value="'+sourceData[bos]['Quantity']['FY25']+'" readonly></td>'+
                '<td><input class = "POMAllocTable QuantitySec" id="quantityPOMPeriod" type="text" width="20px" style="text-align:center" value="'+sourceData[bos]['Quantity']['POM']+'" readonly></td>'+
            '</tr>'+
    

                    '</tbody>'+

                         '</table>'+

                        '<div id="modalButtons">'+ 
						
						
                         '<input id="accept" type="button"  value="OK" onclick="SP.UI.ModalDialog.commonModalDialogClose(SP.UI.DialogResult.OK); return true;"/>' +
                         '</div>'+

                 '</div>' +
               
               '<style>'+
                       '#wrapper{position:relative;}' +
                        '#dod_header{color:#000000;font-family:serif;margin-left:20px;text-align:center}'  +
                        '#dod_header2{color:#000000;font-size:medium;font-family:serif;margin-left:70px}'  +
                        '.dod_content{color:#000000;font-size:medium;font-family:serif;margin-left:120px}' +
                        '#accept{margin-left:350px}'
               '<style>';

        
                            //Using the DialogOptions class.
                            var options = SP.UI.$create_DialogOptions();
                            
                            //Using a generic object.
                            options = {
                                title: "PROCUREMENT QUANTITIES",
                                width: 1500,
                                height: 650,
                                showClose: false,
                                allowMaximize:false,
                                html: _html,
                                dialogReturnValueCallback: updateAssessment

                                
                            }; 
                               
                            SP.UI.ModalDialog.showModalDialog(options);




            }//end open_dialog
            
            
            //load sp.js library before running script
            ExecuteOrDelayUntilScriptLoaded(function () {open_dialog()}, "sp.js");

            function updateAssessment(dialogResult, returnValue) {



                if (dialogResult == SP.UI.DialogResult.OK) {
                     

                    //alert('Program Assessment Updated');
                    



                }

            }

            

     
     
    






            }
            catch(e){
                console.log(e);
            }
   
        },//quantityModal


		BLUFModal:function(sourceData){
            try{  


				//console.log(sourceData);
				//console.log(sourceData['BLUFID'].toString())
				
                var ctx = _spPageContextInfo.webAbsoluteUrl;
				var bos = sourceData['BOS'];
				var itemID = sourceData['BLUFID'].toString();
				var _url  = ctx +'/Lists/BLUF_'+bos+'/EditForm.aspx?ID='+itemID+'';
				console.log(_url);

				

                var open_dialog = function(){
			
                    
        
                            //Using the DialogOptions class.
                            var options = SP.UI.$create_DialogOptions();
                            
                            //Using a generic object.
                            options = {
                                title: "BLUF",
                                width: 1100,
                                height: 650,
                                showClose: false,
                                allowMaximize:false,
                                url: _url,
								args: 'args',
                                dialogReturnValueCallback: updateOverview


                                
                            }; 
                               
                            SP.UI.ModalDialog.showModalDialog(options);


            }//end open_dialog
            
            
            //load sp.js library before running script
            ExecuteOrDelayUntilScriptLoaded(function () {open_dialog()}, "sp.js");

            function updateOverview(dialogResult, returnValue) {



                if (dialogResult == SP.UI.DialogResult.OK) {
                     

                    console.log('BLUF Updated');
					console.log(sourceData)
					console.log( jQuery('#BLUF') )
					//console.log(window.frameElement.dialogArgs);
					
                    



                }

            }

            

     
     
    






            }
            catch(e){
                console.log(e);
            }
   
        },//BLUF

        whereItFitsModal:function(sourceData){
            try{  

                var ctx = _spPageContextInfo.webAbsoluteUrl;
				var bos = sourceData['BOS'];
				var itemID = sourceData['WhereItFitsID'].toString();
				var _url  = ctx +'/Lists/WHEREITFITS_'+bos+'/EditForm.aspx?ID='+itemID+'';
				console.log(_url);



                var open_dialog = function(){
			
                    var _html = document.createElement('div');
                    
        
                            //Using the DialogOptions class.
                            var options = SP.UI.$create_DialogOptions();
                            
                            //Using a generic object.
                            options = {
                                title: "Where it Fits",
                                width: 1100,
                                height: 650,
                                showClose: false,
                                allowMaximize:false,
                                url:_url

                                
                            }; 
                               
                            SP.UI.ModalDialog.showModalDialog(options);




            }//end open_dialog
            
            
            //load sp.js library before running script
            ExecuteOrDelayUntilScriptLoaded(function () {open_dialog()}, "sp.js");




            }
            catch(e){
                console.log(e);
            }
   
        },//Where it Fits

        capabilityModal:function(sourceData){
            try{  

                console.log('load Programmatic Overview')

                console.log(sourceData)
				
				var ctx = _spPageContextInfo.webAbsoluteUrl;
				var bos = sourceData['BOS'];
				var itemID = sourceData['CapabilityID'].toString();
				var _url  = ctx +'/Lists/CAPABILITIES_'+bos+'/EditForm.aspx?ID='+itemID+'';
				console.log(_url);



                var open_dialog = function(){
			
                
        
                            //Using the DialogOptions class.
                            var options = SP.UI.$create_DialogOptions();
                            
                            //Using a generic object.
                            options = {
                                title: "Capability Description/Capabilities",
                                width: 1100,
                                height: 650,
                                showClose: false,
                                allowMaximize:false,
                                url: _url


                                
                            }; 
                               
                            SP.UI.ModalDialog.showModalDialog(options);




            }//end open_dialog
            
            
            //load sp.js library before running script
            ExecuteOrDelayUntilScriptLoaded(function () {open_dialog()}, "sp.js");





            }
            catch(e){
                console.log(e);
            }
   
        },//Capability

        whyWeNeedThisModal:function(sourceData){
            try{  

                console.log('load Programmatic Overview')

                console.log(sourceData)
                var ctx = _spPageContextInfo.webAbsoluteUrl;
				var bos = sourceData['BOS'];
				var itemID = sourceData['WhyWeNeedThisID'].toString();
				var _url  = ctx +'/Lists/WHYWENEEDTHIS_'+bos+'/EditForm.aspx?ID='+itemID+'';
				console.log(_url);



                var open_dialog = function(){
			
        
                            //Using the DialogOptions class.
                            var options = SP.UI.$create_DialogOptions();
                            
                            //Using a generic object.
                            options = {
                                title: "Why We Need This --- Requirements/Capability to the Force",
                                width: 1100,
                                height: 650,
                                showClose: false,
                                allowMaximize:false,
                                url: _url


                                
                            }; 
                               
                            SP.UI.ModalDialog.showModalDialog(options);




            }//end open_dialog
            
            
            //load sp.js library before running script
            ExecuteOrDelayUntilScriptLoaded(function () {open_dialog()}, "sp.js");




            }
            catch(e){
                console.log(e);
            }
   
        },//whyWeNeedThisModal







        key4Modal:function(sourceData){
            try{  




                var open_dialog = function(){
			
                    var _html = document.createElement('div');
                    
                        _html.innerHTML = '<div class="wrapper" id="AllocateKey4">' +
                                                '<table>'+
                                                    '<tr>'+
                                                        '<th>FY19</th>' +
                                                        '<th>FY20</th>' +
                                                        '<th>FY21</th>' + 
                                                        '<th>FY22</th>' +
                                                        '<th>FY23</th>' +
                                                        '<th>FY24</th>' +
                                                        '<th>FY25</th>' +
                                                    '</tr>'+

                                                    '<tr>'+
                                                        '<td><input id= "fy19Allo" type="textbox"/></td>' +
                                                        '<td><input id= "fy20Allo" type="textbox"/></td>' +
                                                        '<td><input id= "fy21Allo" type="textbox"/></td>' +
                                                        '<td><input id= "fy22Allo" type="textbox"/></td>' +
                                                        '<td><input id= "fy23Allo" type="textbox"/></td>' +
                                                        '<td><input id= "fy24Allo" type="textbox"/></td>' +
                                                        '<td><input id= "fy25Allo" type="textbox"/></td>' +
                                                    '</tr>'+

                                                    
                
                                                 '</table>'+
                                                 '<input id="accept" type="button"  value="OK" onclick="SP.UI.ModalDialog.commonModalDialogClose(SP.UI.DialogResult.OK); return true;"/>' +
                                                 '<input id="accept" type="button"  value="Cancel" onclick="SP.UI.ModalDialog.commonModalDialogClose(SP.UI.DialogResult.cancel); return false;"/>' +
                                         '</div>' +
                                       
                                       '<style>'+
                                               '#wrapper{position:relative;}' +
                                                '#dod_header{color:#000000;font-family:serif;margin-left:20px;text-align:center}'  +
                                                '#dod_header2{color:#000000;font-size:medium;font-family:serif;margin-left:70px}'  +
                                                '.dod_content{color:#000000;font-size:medium;font-family:serif;margin-left:120px}' +
                                                '#accept{margin-left:350px}'+		
                                       '<style>';
                
        
                            //Using the DialogOptions class.
                            var options = SP.UI.$create_DialogOptions();
                            
                            //Using a generic object.
                            options = {
                                title: "AAO-APO-RO Distibution",
                                width: 1100,
                                height: 650,
                                showClose: false,
                                allowMaximize:false,
                                html: _html,
                                dialogReturnValueCallback: allocateCallback
                                
                            }; 
                               
                            SP.UI.ModalDialog.showModalDialog(options);




            }//end open_dialog
            
            
            //load sp.js library before running script
            ExecuteOrDelayUntilScriptLoaded(function () {open_dialog()}, "sp.js");
            

            function allocateCallback(dialogResult, returnValue) {



                if (dialogResult == SP.UI.DialogResult.OK) {
                     

                    console.log(true);



                }else{
                    console.log(false);
                }

            }

     
     
    






            }
            catch(e){
                console.log(e);
            }
   
        },//key4Modal


        




        key4Split:function(bos, root, key4, sourceData, FYs, alloFYs, alloSum, id){  

            try{

                console.log('Key 4 Split');
                //console.log(alloFYs);
                //console.log(alloSum);
                //console.log(FYs);


               //RDTE
               var rdte = key4.search('RDTE'); 

               //PROC
               var acft =  key4.search('ACFT');  
               var ammo =  key4.search('AMMO');  
               var msls =  key4.search('MSLS');  
               var opa =   key4.search('OPA');   
               var wtcv =  key4.search('WTCV');  



               //OTHER
               var awcf =  key4.search('AWCF');
               var chmc =  key4.search('CHMC'); 
               var chmd =  key4.search('CHMD'); 
               var mca =   key4.search('MCA'); 
               var ngpa =  key4.search('NGPA'); 
               var oma =   key4.search('OMA');  
               var omng =  key4.search('OMNG');
               var omar =  key4.search('OMAR'); 
               var rdta =  key4.search('RDTA');
               var rpa =   key4.search('RPA');  
               var wedg =  key4.search('WEDG');


               if(rdte !== -1){

                        //console.log('RDTE: ' + key4)
                        //console.log(sourceData[bos])
                        //console.log(sourceData[bos]['DEEPDIVE']['RDTE']);
                        if(id === 'SPLIT'){
                            
                            this.APPNSplit(FYs, sourceData[bos]['DEEPDIVE']['RDTE'], sourceData[bos]['DEEPDIVE']['RDTEACCUM'], sourceData[bos], alloFYs, alloSum, 'RDTE');
                            this.KeySplit(FYs, root, key4, sourceData[bos]['SelectedRoots'], sourceData[bos], alloFYs, alloSum, 'RDTE');


                        }else if(id === 'RESET'){
                            //console.log('reset')
                            this.APPNReset(FYs, sourceData[bos]['DEEPDIVE']['RDTE'], sourceData[bos]['DEEPDIVE']['RDTEACCUM'], sourceData[bos], alloFYs, alloSum, 'RDTE');
                            this.KeyReset(FYs, root, key4, sourceData[bos]['SelectedRoots'],sourceData[bos], 'RDTE');
                        }


               }else if(acft !== -1 || ammo !== -1 | msls !== -1 || opa !== -1 || wtcv !== -1){

                       // console.log('PROC: ' + key4)
                       // console.log(sourceData[bos])
                       // console.log(sourceData[bos]['DEEPDIVE']['PROC']);


                       if(id === 'SPLIT'){
                            this.APPNSplit(FYs, sourceData[bos]['DEEPDIVE']['PROC'], sourceData[bos]['DEEPDIVE']['PROCACCUM'], sourceData[bos], alloFYs, alloSum, 'PROC');
                            this.KeySplit(FYs, root, key4, sourceData[bos]['SelectedRoots'], sourceData[bos], alloFYs, alloSum, 'PROC');


                       }else if(id === 'RESET'){
                           //console.log('reset');
                           this.APPNReset(FYs, sourceData[bos]['DEEPDIVE']['PROC'], sourceData[bos]['DEEPDIVE']['PROCACCUM'], sourceData[bos], alloFYs, alloSum, 'PROC');
                           this.KeyReset(FYs, root, key4, sourceData[bos]['SelectedRoots'],sourceData[bos], 'PROC');


                       }



               }else if(awcf !== -1 || chmc !== -1 || chmd !== -1 || mca !== -1 || ngpa !== -1 || 
                            oma !== -1 || omng !== -1 || omar !== -1  || rdta !== -1  || rpa !== -1 || wedg !== -1 ){

                       // console.log('OTHER: ' + key4)
                        //console.log(sourceData[bos])
                       // console.log(sourceData[bos]['DEEPDIVE']['OTHER']);


                       if(id === 'SPLIT'){
                            this.APPNSplit(FYs, sourceData[bos]['DEEPDIVE']['OTHER'], sourceData[bos]['DEEPDIVE']['OTHERACCUM'], sourceData[bos], alloFYs, alloSum, 'OTHER');
                            this.KeySplit(FYs, root, key4, sourceData[bos]['SelectedRoots'], sourceData[bos], alloFYs, alloSum, 'OTHER');



                       }else if(id === 'RESET'){
                            //console.log('reset');
                            this.APPNReset(FYs, sourceData[bos]['DEEPDIVE']['OTHER'], sourceData[bos]['DEEPDIVE']['OTHERACCUM'], sourceData[bos], alloFYs, alloSum, 'OTHER');
                            this.KeyReset(FYs, root, key4, sourceData[bos]['SelectedRoots'],sourceData[bos], 'OTHER');

                       }

                


                }

    
                var obj = JSON.stringify(sourceData);
                sessionStorage.setItem('SourceData', obj);
    
                

            }
            catch(e){
                console.log(e);
            }



        },



        APPNSplit:function(FYs, appnData, appnDataAccum, sourceData, alloFYs, alloSum, appn){

            //console.log('FY Split ' + appn)
           // console.log(FYs);
           // console.log(appnData)
            //console.log(appnDataAccum)
            //console.log(sourceData)
            //console.log(alloFYs)
            //console.log(alloSum)
            //console.log(appn)
            //console.log('FYs Length: ' + FYs.length);

            try{

                

                for(var i = FYs.length - 1; i >= 0; i--){
                    if(FYs[i].OData__x0050_2){//USE SITE COLUMN WHEN IMPORTING FROM ACCESS
        
                        var fystr = 'FY'+ FYs[i].OData__x0050_2;//USE SITE COLUMN WHEN IMPORTING FROM ACCESS
                        var fy = FYs[i].OData__x0050_2;
                        var allo = alloFYs[i];
    
    
                        //console.log(fystr + ' : ' + sourceData[appn][fystr]['SUM']);
                        //console.log(sourceData[appn][fystr]['SUM']);
    
    
    
                        if(i < 2 && sourceData[appn][fystr] > 0){//disregard POM interval
    
    
                            appnData[fystr] = allo;//GET FROM JSON
                            appnDataAccum[fystr] += allo;//GET FROM JSON
        
    
                            sourceData[appn][fystr] -= appnData[fystr];
                            sourceData['TOTAL'][fystr] -= appnData[fystr];
                            
    
    
                        }else if(i >= 2 && sourceData[appn][fystr] > 0 ){//apply POM interval
    
                            //console.log('apply POM')
                            //console.log(fystr)
    
                            appnData[fystr] = allo;//GET FROM JSON
                            appnDataAccum[fystr] += allo;//GET FROM JSON
        
                            sourceData[appn][fystr] -= appnData[fystr];
                            sourceData[appn]['POM'] -= appnData[fystr];
                            sourceData['TOTAL'][fystr] -= appnData[fystr];
                            sourceData['TOTAL']['POM'] -= appnData[fystr];
    
    
    
    
    
                        }

                        
    
    
    
                    }
                }

                
    

            }
            catch(e){
                console.log(e);
            }

            



            //console.log('Subtract RDTE');
            //console.log(sourceData);
            //console.log(appnData)



        },

        APPNReset:function(FYs, appnData, appnDataAccum, sourceData, alloFYs, alloSum, appn){

            //console.log('FY Reset ' + appn)
            //console.log(FYs);
            //console.log(appnData);

            try{

                for(var i = FYs.length - 1; i >= 0; i--){
                    if(FYs[i].OData__x0050_2){//USE SITE COLUMN WHEN IMPORTING FROM ACCESS
        
                        var fystr = 'FY'+ FYs[i].OData__x0050_2;//USE SITE COLUMN WHEN IMPORTING FROM ACCESS
                        var fy = FYs[i].OData__x0050_2;
    
    
    
                        //console.log(fystr);
                        //console.log(appnDataAccum[fystr]);
                        //console.log(sourceData[appn][fystr]['SUM']);
                        //console.log(appnDataAccum);
    
                        
    
    
                        if(i < 2 && sourceData[appn][fystr] > 0){//disregard POM interval
                            sourceData[appn][fystr] += appnDataAccum[fystr];
                            sourceData['TOTAL'][fystr] += appnDataAccum[fystr];
    
                            //zero out values
                            appnDataAccum[fystr] = 0;
                            appnData[fystr] = 0;
    
    
    
    
    
                        }else if(i >= 2 && (sourceData[appn]['POM']  > 0 && sourceData[appn][fystr] > 0)){//apply POM interval
                            
                            sourceData[appn][fystr] += appnDataAccum[fystr];
                            sourceData['TOTAL'][fystr] += appnDataAccum[fystr];
    
    
                            sourceData[appn]['POM'] += appnDataAccum[fystr];
                            sourceData['TOTAL']['POM'] += appnDataAccum[fystr];
    
                            //zero out values
                            appnDataAccum[fystr] = 0;
                            appnData[fystr] = 0;
                            
    
    
    
                        }
    
                        
    
                       //appnData[fystr] -= 10;//GET FROM JSON
    
    
    
    
                    }
                }
    

            }
            catch(e){
                console.log(e);
            }

            
            


            

            //console.log('Subtract RDTE');
            //console.log(sourceData);
            //console.log(appnData)



        },

        KeySplit:function(FYs, root, key4, sourceDataRoot, sourceDataBOS, alloFYs, alloSum, appn, subAPPN){

            console.log(root + ' : ' + key4 + ' : ' +  appn );
            //console.log(FYs);
            //console.log(sourceData[root][appn]['Key4s'])
            //console.log(alloFYs)
            //console.log(alloSum)
            //console.log(appn)
            //console.log('FYs Length: ' + FYs.length);

            try{

                var alloSum = 0;

                for(var i = FYs.length - 1; i >= 0; i--){
                    if(FYs[i].OData__x0050_2){//USE SITE COLUMN WHEN IMPORTING FROM ACCESS
        
                        var fystr = 'FY'+ FYs[i].OData__x0050_2;//USE SITE COLUMN WHEN IMPORTING FROM ACCESS
                        var fy = FYs[i].OData__x0050_2;
                        var allo = alloFYs[i];
    
    
    
                        if(sourceDataRoot[root][appn]['Key4s'][key4][fystr]){

                            console.log(fystr + ' : ' + appn)
    
                            sourceDataRoot[root][appn][fystr]['SUM']  -= allo;
                            sourceDataRoot[root][appn]['Key4s'][key4]['ALLOACCUM'] += allo;              
                            sourceDataRoot[root][appn]['Key4s'][key4]['ALLO']  += allo;
                            sourceDataRoot[root][appn]['Key4s'][key4][fystr]['ALLOSUM']  += allo;
                            sourceDataRoot[root][appn]['Key4s'][key4][fystr]['SUM']  -= allo;
                            sourceDataRoot[root][appn]['Key4s'][key4]['ALLOSUM'] -= allo;
                            alloSum = sourceDataRoot[root][appn]['Key4s'][key4]['ALLOSUM'];
                            sourceDataBOS['DEEPDIVE'][fystr] += allo;

                            
    
                            if(i >= 2){
                                console.log(fystr + ' POM Allo ' + allo);
                                sourceDataRoot[root][appn]['Key4s'][key4]['POMALLO'] += allo;
                                sourceDataBOS['DEEPDIVE']['POM'] += allo;

    
    
                            }
    
                            
                
    
                        }
    
    
                    }
                }
    
    
    
                //modify DOM
                jQuery('#allo'+key4+'').text('$'+alloSum);
    

            }
            catch(e){
                console.log(e);
            }



            


        },

        KeyReset:function(FYs, root, key4, sourceDataRoot, sourceDataBOS, appn, subAPPN){

            try{

                console.log('FY Reset ' + appn)

                var alloSum = 0;


                for(var i = FYs.length - 1; i >= 0; i--){
                    if(FYs[i].OData__x0050_2){//USE SITE COLUMN WHEN IMPORTING FROM ACCESS
        
                        var fystr = 'FY'+ FYs[i].OData__x0050_2;//USE SITE COLUMN WHEN IMPORTING FROM ACCESS
                        var fy = FYs[i].OData__x0050_2;
    

    
    
                        if(sourceDataRoot[root][appn]['Key4s'][key4][fystr]){



                            var allo = sourceDataRoot[root][appn]['Key4s'][key4][fystr]['ALLOSUM'];

                            sourceDataRoot[root][appn][fystr]['SUM']  += allo;
                            sourceDataRoot[root][appn]['Key4s'][key4]['ALLOACCUM'] -= allo;
                            sourceDataRoot[root][appn]['Key4s'][key4]['ALLO']  -= allo;
                            sourceDataRoot[root][appn]['Key4s'][key4][fystr]['ALLOSUM']  -= allo;
                            sourceDataRoot[root][appn]['Key4s'][key4]['ALLOSUM'] += allo;
                            sourceDataRoot[root][appn]['Key4s'][key4][fystr]['SUM']  += allo;
                            alloSum = sourceDataRoot[root][appn]['Key4s'][key4]['ALLOSUM'];
                            sourceDataBOS['DEEPDIVE'][fystr] -= allo;

                            
    
                            if(i >= 2){
                                console.log(fystr + ' POM Allo ' + allo);
                                sourceDataRoot[root][appn]['Key4s'][key4]['POMALLO'] -= allo;
                                sourceDataBOS['DEEPDIVE']['POM'] -= allo;

    
    
                            }
    

                            
                
    
                        }
    
    
                    }
                }




                //modify DOM
                jQuery('#allo'+key4+'').text('$'+alloSum);

            }
            catch(e){
                console.log(e);
            }




        },




        loadLINAllo:function(bos, root, LIN, sourceData, FYs, checked){  
            try{  

                //console.log('Load LIN Allo')
                //console.log(bos + ' : ' + root + ' : ' + LIN)
                //console.log(sourceData)

                //console.log('previous root ' + previousRoot)

                
                if(checked){

                    if(sourceData[bos]['SelectedRoots'][root]['Quantity']['LINs'][LIN]){

                        //console.log(root + ' : ' + key4)
                        var sum = sourceData[bos]['SelectedRoots'][root]['Quantity']['LINs'][LIN]['SUM'];
                        var pom = sourceData[bos]['SelectedRoots'][root]['Quantity']['LINs'][LIN]['POM'];
                        var nomen = (sourceData[bos]['SelectedRoots'][root]['Quantity']['LINs'][LIN]) ? sourceData[bos]['SelectedRoots'][root]['Quantity']['LINs'][LIN]['NOMEN'] : "";

                        //console.log( sourceData[bos]['SelectedRoots'][root]['Quantity']['LINs'] );
                        //console.log(pom)
                        //this.drawLINAllo(bos, root, LIN, sum, pom, sourceData);

                        jQuery("#LINTable").append('<tr id="'+LIN+'rowDisp">')
                        jQuery("#"+LIN+"rowDisp").append('<td><span>'+root+'</span></td>');
                        jQuery("#"+LIN+"rowDisp").append('<td><span>'+LIN+'</span></td>');
                        jQuery("#"+LIN+"rowDisp").append('<td><span>'+nomen+'</span></td>');
                        jQuery("#"+LIN+"rowDisp").append('<td><span>'+sum+'</span></td>');
                


                    }

                        
                    }else{

                        //console.log('clear')
                        //console.log(jQuery("#"+LIN+"LINallo"))
                        jQuery("#"+LIN+"rowDisp").remove();


                    }


                var obj = JSON.stringify(sourceData);
                sessionStorage.setItem('SourceData', obj);

            }
            catch(e){
                console.log(e);
            }
   
       
        },//loadLINAllo


        drawLINAllo:function(bos, root, LIN, sum, pom, sourceData){

            try{

                console.log('draw allo2')

                //var nomen = (sourceData[bos]['SelectedRoots'][root]['Quantity']['LINs'][LIN]) ? sourceData[bos]['SelectedRoots'][root]['Quantity']['LINs'][LIN]['NOMEN'] : "";
                //var aao = (sourceData[bos]['Inventory']['LINs']['AAO'][LIN])? sourceData[bos]['Inventory']['LINs']['AAO'][LIN]['TotalAAO'] : 0;
                //var apo = (sourceData[bos]['Inventory']['LINs']['APO'][LIN]) ? sourceData[bos]['Inventory']['LINs']['APO'][LIN]['TotalAPO'] : 0;
                //var ro = (sourceData[bos]['Inventory']['LINs']['RO'][LIN]) ? sourceData[bos]['Inventory']['LINs']['RO'][LIN]['TOTALRO'] : 0;
                //var sacs = (sourceData[bos]['Inventory']['LINs']['SACS_TOTAL'][LIN]) ? sourceData[bos]['Inventory']['LINs']['SACS_TOTAL'][LIN] :  0;

                




                jQuery("#LINTable").append('<tr id="'+LIN+'rowDisp">')
                jQuery("#"+LIN+"rowDisp").append('<td><span>1</span></td>');
                jQuery("#"+LIN+"rowDisp").append('<td><span>2</span></td>');
                jQuery("#"+LIN+"rowDisp").append('<td><span>3</span></td>');
                jQuery("#"+LIN+"rowDisp").append('<td><span>4</span></td>');
                //jQuery("#"+LIN+"rowDisp").append('<td><span>'+aao+'</span></td>');
                //jQuery("#"+LIN+"rowDisp").append('<td><span>'+apo+'</span></td>');
                //jQuery("#"+LIN+"rowDisp").append('<td><span>'+ro+'</span></td>');
                //jQuery("#"+LIN+"rowDisp").append('<td><span>'+sacs+'</span></td>');


                //jQuery("#"+LIN+"rowDisp").append('<td><span><input type="checkbox" id="'+LIN+'all"></span></td></td>');






            }
            catch(e){
                console.log(e)
            }

        },//drawLINAllo


        defineQuantity:function(bos, root, LIN, sourceData, FYs, checked){

            try{

                console.log('define quantity')
                //console.log(root)

                for(var root in sourceData[bos]['SelectedRoots']){



                    if(sourceData[bos]['SelectedRoots'][root]['Quantity']){//modify JSON
                            
                        //console.log(sourceData[bos]['SelectedRoots'][root]['Quantity'])

                        var rootLIN = sourceData[bos]['SelectedRoots'][root]['Quantity']['LINs'][LIN];
                        this.createLINs(bos, root, LIN, sourceData, rootLIN, FYs, checked);


                            
                            

                    }


                }


 

            }
            catch(e){
                console.log(e)
            }


        },//defineQuantity



        createLINs:function(bos, root, LIN, sourceData, rootLIN, FYs, checked){
            try{



                console.log('CREATE LINS')


                
                

                for(var i = 0; i < FYs.length; i++){


                    if(FYs[i].OData__x0050_2){

                        var fystr = 'FY'+ FYs[i].OData__x0050_2;//USE SITE COLUMN WHEN IMPORTING FROM ACCESS
                        var fy = FYs[i].OData__x0050_2;

                        //console.log(fystr);


                        if(sourceData[bos]['SelectedRoots'][root]['Quantity']['LINs'][LIN]){

                            if(checked && sourceData[bos]['SelectedRoots'][root]['Quantity']['LINs'][LIN][fystr]){
                                    
                                console.log(fystr);
                                console.log(sourceData[bos]['SelectedRoots'][root]['Quantity']['LINs'][LIN][fystr]['SUM'])
                                sourceData[bos]['Quantity'][fystr] += sourceData[bos]['SelectedRoots'][root]['Quantity']['LINs'][LIN][fystr]['SUM'];
                                sourceData[bos]['Quantity']['LINs'][LIN] = {};
    
                            } else if(!checked && sourceData[bos]['SelectedRoots'][root]['Quantity']['LINs'][LIN][fystr]){
                                
                                console.log(fystr);
                                console.log(sourceData[bos]['SelectedRoots'][root]['Quantity']['LINs'][LIN][fystr]['SUM'])
    
                                sourceData[bos]['Quantity'][fystr] -= sourceData[bos]['SelectedRoots'][root]['Quantity']['LINs'][LIN][fystr]['SUM'];
                                delete sourceData[bos]['Quantity']['LINs'][LIN];
    
                            }

                            //POM
                            if(checked){
                                sourceData[bos]['Quantity']['POM'] += sourceData[bos]['SelectedRoots'][root]['Quantity']['LINs'][LIN]['POM'];


                            }else{
                                sourceData[bos]['Quantity']['POM'] -= sourceData[bos]['SelectedRoots'][root]['Quantity']['LINs'][LIN]['POM'];


                            }


                        }

                        
                        



                    }


                }






                


                var obj = JSON.stringify(sourceData);
                sessionStorage.setItem('SourceData', obj);



            }
            catch(e){
                console.log(e);
            }

        },



        allocateKey4:function(bos, root, key4, dollar, sourceData, FYs){

            try{
               // console.log(FYs);
               var pomDif = dollar / 5;//set difference to allocate from POM period


               //console.log(bos + ' : ' + root + ' : ' + key4 + ' : ' + dollar );

               //WORK ON OPTIMIZING THE APPROPRIATIONS

               //Appropriations
               //RDTE
               var rdte = key4.search('RDTE');  var rdteAPPN = 'RDTE';

               //PROC
               var acft =  key4.search('ACFT');  var acftAPPN = 'ACFT';
               var ammo =  key4.search('AMMO');  var ammoAPPN = 'AMMO';
               var msls =  key4.search('MSLS');  var mslsAPPN = 'MSLS';
               var opa =   key4.search('OPA');   var opaAPPN =  'OPA';
               var wtcv =  key4.search('WTCV');  var wtcvAPPN = 'WTCV';

               //OTHER
               var awcf =  key4.search('AWCF'); var awcfAPPN = 'AWCF';
               var chmc =  key4.search('CHMC'); var chmcAPPN = 'CHMC';
               var chmd =  key4.search('CHMD'); var chmdAPPN = 'CHMD';
               var mca =   key4.search('MCA');  var mcaAPPN =  'MCA';
               var ngpa =  key4.search('NGPA'); var ngpaAPPN = 'NGPA';
               var oma =   key4.search('OMA');  var omaAPPN =  'OMA';
               var omng =  key4.search('OMNG'); var omngAPPN = 'OMNG';
               var omar =  key4.search('OMAR'); var omarAPPN = 'OMAR';
               var rdta =  key4.search('RDTA'); var rdtaAPPN = 'RDTA';
               var rpa =   key4.search('RPA');  var rpaAPPN =  'RPA';
               var wedg =  key4.search('WEDG'); var wedgAPPN = 'WEDG';


               //Set RDTE
               var rdteCal = (rdte !== -1) ? this.setKey4AlloFYs(bos, root, key4, rdteAPPN, dollar, pomDif, sourceData, FYs, 'RDTE') : false;

               //Set PROC
               var acftCal = (acft !== -1) ? this.setKey4AlloFYs(bos, root, key4, acftAPPN, dollar, pomDif, sourceData, FYs, 'PROC') : false;
               var ammoCal = (ammo !== -1) ? this.setKey4AlloFYs(bos, root, key4, ammoAPPN, dollar, pomDif, sourceData, FYs, 'PROC') : false;
               var mslsCal = (msls !== -1) ? this.setKey4AlloFYs(bos, root, key4, mslsAPPN, dollar, pomDif, sourceData, FYs, 'PROC') : false;
               var opaCal = (opa !== -1) ? this.setKey4AlloFYs(bos, root, key4, opaAPPN, dollar, pomDif, sourceData, FYs, 'PROC') : false;
               var wtcvCal = (wtcv !== -1) ? this.setKey4AlloFYs(bos, root, key4, wtcvAPPN, dollar, pomDif, sourceData, FYs, 'PROC') : false;

               //Set OTHER
               var awcfCal = (awcf !== -1) ? this.setKey4AlloFYs(bos, root, key4, awcfAPPN, dollar, pomDif, sourceData, FYs, 'OTHER') : false;
               var chmcCal = (chmc !== -1) ? this.setKey4AlloFYs(bos, root, key4, chmcAPPN, dollar, pomDif, sourceData, FYs, 'OTHER') : false;
               var chmdCal = (chmd !== -1) ? this.setKey4AlloFYs(bos, root, key4, chmdAPPN, dollar, pomDif, sourceData, FYs, 'OTHER') : false;
               var mcaCal = (mca !== -1) ? this.setKey4AlloFYs(bos, root, key4, mcaAPPN, dollar, pomDif, sourceData, FYs, 'OTHER') : false;
               var ngpaCal = (ngpa !== -1) ? this.setKey4AlloFYs(bos, root, key4, ngpaAPPN, dollar, pomDif, sourceData, FYs, 'OTHER') : false;
               var omaCal = (oma !== -1) ? this.setKey4AlloFYs(bos, root, key4, omaAPPN, dollar, pomDif, sourceData, FYs, 'OTHER') : false;
               var omngCal = (omng !== -1) ? this.setKey4AlloFYs(bos, root, key4, omngAPPN, dollar, pomDif, sourceData, FYs, 'OTHER') : false;
               var omarCal = (omar !== -1) ? this.setKey4AlloFYs(bos, root, key4, omarAPPN, dollar, pomDif, sourceData, FYs, 'OTHER') : false;
               var rdtaCal = (rdta !== -1) ? this.setKey4AlloFYs(bos, root, key4, rdtaAPPN, dollar, pomDif, sourceData, FYs, 'OTHER') : false;
               var rpaCal = (rpa !== -1) ? this.setKey4AlloFYs(bos, root, key4, rpaAPPN, dollar, pomDif, sourceData, FYs, 'OTHER') : false;              
               var wedgCal = (wedg !== -1) ? this.setKey4AlloFYs(bos, root, key4, wedgAPPN, dollar, pomDif, sourceData, FYs, 'OTHER') : false;






 

                    

            }
            catch(e){
                console.log(e)
            }


        },//allocateKey4



        setKey4AlloFYs:function(bos, root, key4, appn, total, diff, sourceData, FYs, id){
            try{

                console.log(bos + ' : ' + root + ' : ' + key4 + ' : ' + appn + ' : ' + total + ' : ' + diff + ' :' + id);


                
                for(var i = FYs.length - 1; i >= 0; i--){
                                            
        
                    if(FYs[i].OData__x0050_2){//USE SITE COLUMN WHEN IMPORTING FROM ACCESS

                        var fystr = 'FY'+ FYs[i].OData__x0050_2;//USE SITE COLUMN WHEN IMPORTING FROM ACCESS

                                 console.log(fystr);

                                 if(id === 'RDTE'){

                                    if(sourceData[bos]['SelectedRoots'][root][id]['Key4s'][key4][fystr]){

                
                                        sourceData[bos]['SelectedRoots'][root][id]['Key4s'][key4]['SUM'] -= diff;//key 4 level
                                        sourceData[bos]['SelectedRoots'][root][id][fystr]['SUM'] -= diff;//root level
                                        sourceData[bos][id][fystr]['SUM'] -= diff;//bos level
                                        sourceData[bos]['TOTAL'][fystr]['SUM'] -= diff;//total



                                        console.log(sourceData[bos]['SelectedRoots'][root][id]['Key4s'][key4][fystr]);//key 4 level
                                        //console.log(sourceData[bos]['SelectedRoots'][root][id][fystr][appn]);//root level
                                        //console.log(sourceData[bos][id][fystr]);//bos level
                                        //console.log(sourceData[bos]['TOTAL'][fystr]);//total
                                        //console.log(' ')





                                    }


                                 }else{


                                    if(sourceData[bos]['SelectedRoots'][root][id]['Key4s'][key4][fystr]){

                                            sourceData[bos]['SelectedRoots'][root][id]['Key4s'][key4][fystr]['SUM'] -= diff;//key 4 level
                                            sourceData[bos]['SelectedRoots'][root][id][fystr][appn]['SUM'] -= diff;//root level
                                            sourceData[bos][id][fystr]['SUM'] -= diff;//bos level
                                            sourceData[bos]['TOTAL'][fystr]['SUM'] -= diff;//total




                                            //console.log(sourceData[bos]['SelectedRoots'][root][id]['Key4s'][key4][fystr]);//key 4 level
                                            //console.log(sourceData[bos]['SelectedRoots'][root][id][fystr][appn]);//root level
                                            //console.log(sourceData[bos][id][fystr]);//bos level
                                            //console.log(sourceData[bos]['TOTAL'][fystr]);//total
                                            //console.log(' ')
  
                                    }




                                 }


                                

        
                    }
                }//for

                //POM
                sourceData[bos]['SelectedRoots'][root][id]['Key4s'][key4]['POM'] -=  total; //POM difference : key 4 level
                sourceData[bos]['SelectedRoots'][root][id]['POM'] -= total; //POM difference bos level




                var obj = JSON.stringify(sourceData);
                sessionStorage.setItem('SourceData', obj);

            }
            catch(e){
                console.log(e);
            }
        },//setKey4AlloFYs

        allocateLIN:function(bos, root, LIN, dollar, sourceData, FYs){
            try{
               // console.log(FYs);

               console.log(bos + ' : ' + root + ' : ' + LIN + ' : ' + dollar);


                

                if(sourceData[bos]['SelectedRoots'][root]['Quantity']['LINs'][LIN]){

                    var pomDif = dollar / 5;//set difference to allocate from POM period
                    //console.log(bos + ' : ' + root + ' : ' + LIN + ' : ' + dollar + ' : ' + pomDif);
                    //console.log(sourceData[bos]['SelectedRoots'][root]['Quantity']['LINs'][LIN])

                    this.setLINAlloFYs(bos, root, LIN, dollar, pomDif, sourceData, FYs);
    
    
                }


            }
            catch(e){
                console.log(e)
            }
        },//allocateLIN


        setLINAlloFYs:function(bos, root, LIN, total, diff, sourceData, FYs){
            try{

                console.log(root + ' : ' + LIN + '  : ' + total + ' : ' +  diff);
                console.log(sourceData);
                //console.log(FYs);
                //console.log(sourceData[root][appn]['Key4s'][key4]);

                

                for(var i = FYs.length - 1; i >= 0; i--){
                                            
        
                    if(FYs[i].OData__x0050_2){//USE SITE COLUMN WHEN IMPORTING FROM ACCESS

                        var fystr = 'FY'+ FYs[i].OData__x0050_2;//USE SITE COLUMN WHEN IMPORTING FROM ACCESS


                            

                            if(sourceData[bos]['SelectedRoots'][root]['Quantity']['LINs'][LIN][fystr]){
                                sourceData[bos]['SelectedRoots'][root]['Quantity']['LINs'][LIN][fystr]['SUM'] -= diff;//LIN level



                                console.log(fystr);
                                console.log(sourceData[bos]['SelectedRoots'][root]['Quantity']['LINs'][LIN][fystr]);//LIN Level
                                console.log(sourceData[bos]['Quantity'][fystr]);//bos Level





                            }
                            

        
                    }
                }//for

                sourceData[bos]['SelectedRoots'][root]['Quantity']['LINs'][LIN]['POM'] -=  total; //POM difference : LIN level

                
                


                var obj = JSON.stringify(sourceData);
                sessionStorage.setItem('SourceData', obj);





            }
            catch(e){
                console.log(e);
            }
        },//setLINAlloFYs

        defineAAO_APO_ONHAND:function(bos, root, LIN, AAO, APO, ONHAND, sourceData, checked){
            try{

                console.log('Define AAO/APO')
                console.log(AAO)
                console.log(APO)
                console.log(ONHAND)
                //console.log(bos);
                //console.log(LIN);
                //console.log(SACS)
                //console.log(Inventory)
                //console.log(checked);

                var AAODB = TAFFY(AAO);
                var APODB = TAFFY(APO);
                var ONHANDDB = TAFFY(ONHAND);

                


                //determine item
                var approveCol = ONHANDDB({STATUS:"Approved"}).select("STATUS");
                var proposed_changeCol = ONHANDDB({STATUS:"Proposed Change"}).select("STATUS");
                var proposedCol = ONHANDDB({STATUS:"Proposed"}).select("STATUS");

                console.log(approveCol)
                console.log(proposed_changeCol)
                console.log(proposedCol)
                
                


                //console.log(sourceData[bos]['Inventory']['LINs'])

                

                //var SACSDB = TAFFY(SACS);
                //var InventoryDB = TAFFY(Inventory);




                //SACS Item
                //var SACSItem = "";

                //Set Obj
                //sourceData[bos]['SelectedRoots'][root]['Inventory']['LINs'][LIN] ={};




                


                


                //console.log(approveCol)
                //console.log(proposed_changeCol)
                //console.log(proposedCol)
                //console.log(InventoryDB().max("DATE_"))

                //Determine Item
                if( approveCol.length > 0 && !(proposed_changeCol.length > 0 )){

                    console.log('APPROVED')
                    console.log(approveCol)
                    console.log( ONHANDDB().filter({STATUS:"Approved"}).first()  )

                    /*


                    if(AAO > 0){
                        //console.log('Approved '+ InventoryDB({STATUS_:"Approved"}).select("QTY_TYPE")[0] +' Item. Add to AAO Count.')
                        var inventoryItem = InventoryDB().filter({STATUS_:"Approved"}).first();
                        SACSItem = SACSDB().filter({Title:LIN}).first();
                        //console.log( inventoryItem )
                        //console.log( SACSItem )


                        this.createAAO(bos, root, LIN, SACSItem, inventoryItem, sourceData, checked); 




                    }
                    if(APO > 0 || APO === 0){
                        //console.log('Approved '+ InventoryDB({STATUS_:"Approved"}).select("QTY_TYPE")[0] +' Item. Add to APO Count.')
                        var inventoryItem = InventoryDB().filter({STATUS_:"Approved"}).first();
                        SACSItem = SACSDB().filter({Title:LIN}).first();
                        //console.log( inventoryItem )
                        //console.log( SACSItem )

                        this.createAPO(bos, root, LIN, SACSItem, inventoryItem, sourceData, checked);




                    }
                    if(RO > 0){

                        //console.log('Approved '+ InventoryDB({STATUS_:"Approved"}).select("QTY_TYPE")[0] +' Item. Add to RO Count.')
                        var inventoryItem = InventoryDB().filter({STATUS_:"Approved"}).first();
                        SACSItem = SACSDB().filter({Title:LIN}).first();
                        //console.log( inventoryItem )
                        //console.log( SACSItem )

                        this.createRO(bos, root, LIN, SACSItem, inventoryItem, sourceData, checked);



                    }

                    //SACS
                    this.createSACS(bos, root, LIN, SACSItem, sourceData, checked); 


                    */


                    

                }else if(proposed_changeCol.length > 0 && approveCol.length > 0){//use latest AS_OF_DATE

                    console.log('LATEST DATE')
                    console.log(approveCol)

                    var latestDate = ONHANDDB().filter({AS_OF_DATE:ONHANDDB().max("AS_OF_DATE")}).first();
                    console.log( latestDate  )




                    /*

                    if(AAO > 0){
                        //console.log('Proposed  '+ InventoryDB({STATUS_:"Proposed"}).select("QTY_TYPE")[0] +' Item. Add to AAO Count.')
                        //console.log( InventoryDB().max("DATE_") )
                        var inventoryItem = InventoryDB().filter({DATE_:InventoryDB().max("DATE_")}).first();
                        SACSItem = SACSDB().filter({Title:LIN}).first();
                        //console.log( inventoryItem )
                        //console.log( SACSItem )

                        this.createAAO(bos, root, LIN, SACSItem, inventoryItem, sourceData, checked);




                    }
                    if(APO > 0 || APO === 0){
                        //console.log('Proposed '+ InventoryDB({STATUS_:"Proposed"}).select("QTY_TYPE")[0] +' Item. Add to APO Count.')
                        //console.log( InventoryDB().max("DATE_") )
                        var inventoryItem = InventoryDB().filter({DATE_:InventoryDB().max("DATE_")}).first();
                        SACSItem = SACSDB().filter({Title:LIN}).first();
                        //console.log( inventoryItem )
                        //console.log( SACSItem )

                        this.createAPO(bos, root, LIN, SACSItem, inventoryItem, sourceData, checked);

    


    


                    }
                    if(RO > 0){

                        //console.log('Proposed '+ InventoryDB({STATUS_:"Proposed"}).select("QTY_TYPE")[0] +' Item. Add to APO Count.')
                        //console.log( InventoryDB().max("DATE_") )
                        var inventoryItem = InventoryDB().filter({DATE_:InventoryDB().max("DATE_")}).first();
                        SACSItem = SACSDB().filter({Title:LIN}).first();
                        //console.log( inventoryItem )
                        //console.log( SACSItem )

                        this.createRO(bos, root, LIN, SACSItem, inventoryItem, sourceData, checked);



    

                    }

                    //SACS
                    this.createSACS(bos, root, LIN, SACSItem, sourceData, checked); 


                    */



                }

                




            }
            catch(e){
                console.log(e);
            }
        },//defineAAOAPO


        createAAO:function(bos, root, LIN, SACSItem, inventoryItem, sourceData, checked){

            try{

                var TNG_Base_TDA = parseInt(SACSItem['TNG_Base_TDA']) || 0;
                var AAO_COMPO_1_OTOE = parseInt(SACSItem['AAO_COMPO_1_OTOE']) || 0;
                var AAO_COMPO_2_OTOE = parseInt(SACSItem['AAO_COMPO_2_OTOE']) || 0;
                var AAO_COMPO_3_OTOE = parseInt(SACSItem['AAO_COMPO_3_OTOE']) || 0;

                var ACT_SETS = parseInt(inventoryItem['ACT_SETS']) || 0;
                var APS_OTOE = parseInt(inventoryItem['APS_OTOE']) || 0;
                var WR = parseInt(inventoryItem['WR']) || 0;
                var WRA = parseInt(inventoryItem['WRA']) || 0;
                var OPS = parseInt(inventoryItem['OPS']) || 0;
                var RCF = parseInt(inventoryItem['RCF']) || 0;
                var ORF = parseInt(inventoryItem['ORF']) || 0;
                var Other_TDA = parseInt(inventoryItem['Other_TDA']) || 0;



                if(checked){

                    


                    if(sourceData[bos]['Inventory']['LINs']['AAO'][LIN] && sourceData[bos]['SelectedRoots'][root]['Inventory']['LINs'][LIN]['AAO']){

                        //LIN Level

                        if(SACSItem){
                            sourceData[bos]['Inventory']['LINs']['AAO'][LIN]['TNG_Base_TDA'] += TNG_Base_TDA; sourceData[bos]['Inventory']['LINs']['AAO'][LIN]['TotalAAO'] += TNG_Base_TDA;
                            sourceData[bos]['Inventory']['LINs']['AAO'][LIN]['AAO_COMPO_1_OTOE'] += AAO_COMPO_1_OTOE; sourceData[bos]['Inventory']['LINs']['AAO'][LIN]['TotalAAO'] +=  AAO_COMPO_1_OTOE;
                            sourceData[bos]['Inventory']['LINs']['AAO'][LIN]['AAO_COMPO_2_OTOE'] += AAO_COMPO_2_OTOE;  sourceData[bos]['Inventory']['LINs']['AAO'][LIN]['TotalAAO'] += AAO_COMPO_2_OTOE; 
                            sourceData[bos]['Inventory']['LINs']['AAO'][LIN]['AAO_COMPO_3_OTOE'] += AAO_COMPO_3_OTOE; sourceData[bos]['Inventory']['LINs']['AAO'][LIN]['TotalAAO'] += AAO_COMPO_3_OTOE;

                            sourceData[bos]['SelectedRoots'][root]['Inventory']['LINs'][LIN]['AAO']['TNG_Base_TDA'] += TNG_Base_TDA; sourceData[bos]['SelectedRoots'][root]['Inventory']['LINs'][LIN]['AAO']['TotalAAO'] += TNG_Base_TDA;
                            sourceData[bos]['SelectedRoots'][root]['Inventory']['LINs'][LIN]['AAO']['AAO_COMPO_1_OTOE'] += AAO_COMPO_1_OTOE; sourceData[bos]['SelectedRoots'][root]['Inventory']['LINs'][LIN]['AAO']['TotalAAO'] +=  AAO_COMPO_1_OTOE;
                            sourceData[bos]['SelectedRoots'][root]['Inventory']['LINs'][LIN]['AAO']['AAO_COMPO_2_OTOE'] += AAO_COMPO_2_OTOE;  sourceData[bos]['SelectedRoots'][root]['Inventory']['LINs'][LIN]['AAO']['TotalAAO'] += AAO_COMPO_2_OTOE; 
                            sourceData[bos]['SelectedRoots'][root]['Inventory']['LINs'][LIN]['AAO']['AAO_COMPO_3_OTOE'] += AAO_COMPO_3_OTOE; sourceData[bos]['SelectedRoots'][root]['Inventory']['LINs'][LIN]['AAO']['TotalAAO'] += AAO_COMPO_3_OTOE;


                            
    

                        }

                        if(inventoryItem){
                            sourceData[bos]['Inventory']['LINs']['AAO'][LIN]['ACT_SETS'] += ACT_SETS; sourceData[bos]['Inventory']['LINs']['AAO'][LIN]['TotalAAO'] += ACT_SETS; 
                            sourceData[bos]['Inventory']['LINs']['AAO'][LIN]['APS_OTOE'] += APS_OTOE; sourceData[bos]['Inventory']['LINs']['AAO'][LIN]['TotalAAO'] += APS_OTOE;
                            sourceData[bos]['Inventory']['LINs']['AAO'][LIN]['WR'] += WR; sourceData[bos]['Inventory']['LINs']['AAO'][LIN]['TotalAAO'] += WR;
                            sourceData[bos]['Inventory']['LINs']['AAO'][LIN]['WRA'] += WRA; sourceData[bos]['Inventory']['LINs']['AAO'][LIN]['TotalAAO'] += WRA;
                            sourceData[bos]['Inventory']['LINs']['AAO'][LIN]['OPS'] += OPS; sourceData[bos]['Inventory']['LINs']['AAO'][LIN]['TotalAAO'] += OPS; 
                            sourceData[bos]['Inventory']['LINs']['AAO'][LIN]['RCF'] += RCF; sourceData[bos]['Inventory']['LINs']['AAO'][LIN]['TotalAAO'] += RCF;
                            sourceData[bos]['Inventory']['LINs']['AAO'][LIN]['ORF'] += ORF; sourceData[bos]['Inventory']['LINs']['AAO'][LIN]['TotalAAO'] += ORF;
                            sourceData[bos]['Inventory']['LINs']['AAO'][LIN]['Other_TDA'] += Other_TDA ; sourceData[bos]['Inventory']['LINs']['AAO'][LIN]['TotalAAO'] += Other_TDA;

                            sourceData[bos]['SelectedRoots'][root]['Inventory']['LINs'][LIN]['AAO']['ACT_SETS'] += ACT_SETS; sourceData[bos]['SelectedRoots'][root]['Inventory']['LINs'][LIN]['AAO']['TotalAAO'] += ACT_SETS; 
                            sourceData[bos]['SelectedRoots'][root]['Inventory']['LINs'][LIN]['AAO']['APS_OTOE'] += APS_OTOE; sourceData[bos]['SelectedRoots'][root]['Inventory']['LINs'][LIN]['AAO']['TotalAAO']+= APS_OTOE;
                            sourceData[bos]['SelectedRoots'][root]['Inventory']['LINs'][LIN]['AAO']['WR'] += WR; sourceData[bos]['SelectedRoots'][root]['Inventory']['LINs'][LIN]['AAO']['TotalAAO'] += WR;
                            sourceData[bos]['SelectedRoots'][root]['Inventory']['LINs'][LIN]['AAO']['WRA'] += WRA; sourceData[bos]['SelectedRoots'][root]['Inventory']['LINs'][LIN]['AAO']['TotalAAO'] += WRA;
                            sourceData[bos]['SelectedRoots'][root]['Inventory']['LINs'][LIN]['AAO']['OPS'] += OPS; sourceData[bos]['SelectedRoots'][root]['Inventory']['LINs'][LIN]['AAO']['TotalAAO'] += OPS; 
                            sourceData[bos]['SelectedRoots'][root]['Inventory']['LINs'][LIN]['AAO']['RCF'] += RCF; sourceData[bos]['SelectedRoots'][root]['Inventory']['LINs'][LIN]['AAO']['TotalAAO'] += RCF;
                            sourceData[bos]['SelectedRoots'][root]['Inventory']['LINs'][LIN]['AAO']['ORF'] += ORF; sourceData[bos]['SelectedRoots'][root]['Inventory']['LINs'][LIN]['AAO']['TotalAAO'] += ORF;
                            sourceData[bos]['SelectedRoots'][root]['Inventory']['LINs'][LIN]['AAO']['Other_TDA'] += Other_TDA; sourceData[bos]['SelectedRoots'][root]['Inventory']['LINs'][LIN]['AAO']['TotalAAO'] += Other_TDA;

    

                        }



                        //Global Level
                        if(SACSItem){

                            sourceData[bos]['Inventory']['AAO']['TNG_Base_TDA'] += TNG_Base_TDA; sourceData[bos]['Inventory']['AAO']['TotalAAO'] += TNG_Base_TDA;
                            sourceData[bos]['Inventory']['AAO']['COMPO_1_OTOE'] += AAO_COMPO_1_OTOE; sourceData[bos]['Inventory']['AAO']['TotalAAO'] += AAO_COMPO_1_OTOE;
                            sourceData[bos]['Inventory']['AAO']['COMPO_2_OTOE'] += AAO_COMPO_2_OTOE; sourceData[bos]['Inventory']['AAO']['TotalAAO'] += AAO_COMPO_2_OTOE; 
                            sourceData[bos]['Inventory']['AAO']['COMPO_3_OTOE'] += AAO_COMPO_3_OTOE; sourceData[bos]['Inventory']['AAO']['TotalAAO'] += AAO_COMPO_3_OTOE;
    

                        }

                        if(inventoryItem){

                            sourceData[bos]['Inventory']['AAO']['ACT_SETS'] += ACT_SETS; sourceData[bos]['Inventory']['AAO']['TotalAAO'] += ACT_SETS; 
                            sourceData[bos]['Inventory']['AAO']['APS_OTOE'] += APS_OTOE; sourceData[bos]['Inventory']['AAO']['TotalAAO'] += APS_OTOE;
                            sourceData[bos]['Inventory']['AAO']['WR'] += WR; sourceData[bos]['Inventory']['AAO']['TotalAAO'] += WR;
                            sourceData[bos]['Inventory']['AAO']['WRA'] += WRA; sourceData[bos]['Inventory']['AAO']['TotalAAO'] += WRA;
                            sourceData[bos]['Inventory']['AAO']['OPS'] += OPS; sourceData[bos]['Inventory']['AAO']['TotalAAO'] += OPS; 
                            sourceData[bos]['Inventory']['AAO']['RCF'] += RCF; sourceData[bos]['Inventory']['AAO']['TotalAAO'] += RCF;
                            sourceData[bos]['Inventory']['AAO']['ORF'] += ORF; sourceData[bos]['Inventory']['AAO']['TotalAAO'] += ORF;
                            sourceData[bos]['Inventory']['AAO']['Other_TDA'] += Other_TDA; sourceData[bos]['Inventory']['AAO']['TotalAAO'] += Other_TDA;
    

                        }



                    }else{




                        
                        //LIN-Root Level
                        sourceData[bos]['Inventory']['LINs']['AAO'][LIN] = {};
                        sourceData[bos]['Inventory']['LINs']['AAO'][LIN]['TotalAAO'] = 0;
                        sourceData[bos]['SelectedRoots'][root]['Inventory']['LINs'][LIN]['AAO'] = {};
                        sourceData[bos]['SelectedRoots'][root]['Inventory']['LINs'][LIN]['AAO']['TotalAAO'] = 0;



                        if(SACSItem){
                            sourceData[bos]['Inventory']['LINs']['AAO'][LIN]['TNG_Base_TDA'] = TNG_Base_TDA; sourceData[bos]['Inventory']['LINs']['AAO'][LIN]['TotalAAO'] += TNG_Base_TDA;
                            sourceData[bos]['Inventory']['LINs']['AAO'][LIN]['AAO_COMPO_1_OTOE'] = AAO_COMPO_1_OTOE; sourceData[bos]['Inventory']['LINs']['AAO'][LIN]['TotalAAO'] +=  AAO_COMPO_1_OTOE;
                            sourceData[bos]['Inventory']['LINs']['AAO'][LIN]['AAO_COMPO_2_OTOE'] = AAO_COMPO_2_OTOE;  sourceData[bos]['Inventory']['LINs']['AAO'][LIN]['TotalAAO'] += AAO_COMPO_2_OTOE; 
                            sourceData[bos]['Inventory']['LINs']['AAO'][LIN]['AAO_COMPO_3_OTOE'] = AAO_COMPO_3_OTOE; sourceData[bos]['Inventory']['LINs']['AAO'][LIN]['TotalAAO'] += AAO_COMPO_3_OTOE;

                            sourceData[bos]['SelectedRoots'][root]['Inventory']['LINs'][LIN]['AAO']['TNG_Base_TDA'] = TNG_Base_TDA; sourceData[bos]['SelectedRoots'][root]['Inventory']['LINs'][LIN]['AAO']['TotalAAO']+= TNG_Base_TDA;
                            sourceData[bos]['SelectedRoots'][root]['Inventory']['LINs'][LIN]['AAO']['AAO_COMPO_1_OTOE'] = AAO_COMPO_1_OTOE; sourceData[bos]['SelectedRoots'][root]['Inventory']['LINs'][LIN]['AAO']['TotalAAO'] +=  AAO_COMPO_1_OTOE;
                            sourceData[bos]['SelectedRoots'][root]['Inventory']['LINs'][LIN]['AAO']['AAO_COMPO_2_OTOE'] = AAO_COMPO_2_OTOE;  sourceData[bos]['SelectedRoots'][root]['Inventory']['LINs'][LIN]['AAO']['TotalAAO'] += AAO_COMPO_2_OTOE; 
                            sourceData[bos]['SelectedRoots'][root]['Inventory']['LINs'][LIN]['AAO']['AAO_COMPO_3_OTOE'] = AAO_COMPO_3_OTOE; sourceData[bos]['SelectedRoots'][root]['Inventory']['LINs'][LIN]['AAO']['TotalAAO'] += AAO_COMPO_3_OTOE;

    

                        }

                        if(inventoryItem){
                            sourceData[bos]['Inventory']['LINs']['AAO'][LIN]['ACT_SETS'] = ACT_SETS; sourceData[bos]['Inventory']['LINs']['AAO'][LIN]['TotalAAO'] += ACT_SETS; 
                            sourceData[bos]['Inventory']['LINs']['AAO'][LIN]['APS_OTOE'] = APS_OTOE; sourceData[bos]['Inventory']['LINs']['AAO'][LIN]['TotalAAO'] += APS_OTOE;
                            sourceData[bos]['Inventory']['LINs']['AAO'][LIN]['WR'] = WR; sourceData[bos]['Inventory']['LINs']['AAO'][LIN]['TotalAAO'] += WR;
                            sourceData[bos]['Inventory']['LINs']['AAO'][LIN]['WRA'] = WRA; sourceData[bos]['Inventory']['LINs']['AAO'][LIN]['TotalAAO'] += WRA;
                            sourceData[bos]['Inventory']['LINs']['AAO'][LIN]['OPS'] = OPS; sourceData[bos]['Inventory']['LINs']['AAO'][LIN]['TotalAAO'] += OPS; 
                            sourceData[bos]['Inventory']['LINs']['AAO'][LIN]['RCF'] = RCF; sourceData[bos]['Inventory']['LINs']['AAO'][LIN]['TotalAAO'] += RCF;
                            sourceData[bos]['Inventory']['LINs']['AAO'][LIN]['ORF'] = ORF; sourceData[bos]['Inventory']['LINs']['AAO'][LIN]['TotalAAO'] += ORF;
                            sourceData[bos]['Inventory']['LINs']['AAO'][LIN]['Other_TDA'] = Other_TDA; sourceData[bos]['Inventory']['LINs']['AAO'][LIN]['TotalAAO'] += Other_TDA;

                            sourceData[bos]['SelectedRoots'][root]['Inventory']['LINs'][LIN]['AAO']['ACT_SETS'] = ACT_SETS; sourceData[bos]['SelectedRoots'][root]['Inventory']['LINs'][LIN]['AAO']['TotalAAO'] += ACT_SETS; 
                            sourceData[bos]['SelectedRoots'][root]['Inventory']['LINs'][LIN]['AAO']['APS_OTOE'] = APS_OTOE; sourceData[bos]['SelectedRoots'][root]['Inventory']['LINs'][LIN]['AAO']['TotalAAO'] += APS_OTOE;
                            sourceData[bos]['SelectedRoots'][root]['Inventory']['LINs'][LIN]['AAO']['WR'] = WR; sourceData[bos]['SelectedRoots'][root]['Inventory']['LINs'][LIN]['AAO']['TotalAAO'] += WR;
                            sourceData[bos]['SelectedRoots'][root]['Inventory']['LINs'][LIN]['AAO']['WRA'] = WRA; sourceData[bos]['SelectedRoots'][root]['Inventory']['LINs'][LIN]['AAO']['TotalAAO'] += WRA;
                            sourceData[bos]['SelectedRoots'][root]['Inventory']['LINs'][LIN]['AAO']['OPS'] = OPS; sourceData[bos]['SelectedRoots'][root]['Inventory']['LINs'][LIN]['AAO']['TotalAAO']+= OPS; 
                            sourceData[bos]['SelectedRoots'][root]['Inventory']['LINs'][LIN]['AAO']['RCF'] = RCF; sourceData[bos]['SelectedRoots'][root]['Inventory']['LINs'][LIN]['AAO']['TotalAAO'] += RCF;
                            sourceData[bos]['SelectedRoots'][root]['Inventory']['LINs'][LIN]['AAO']['ORF'] = ORF; sourceData[bos]['SelectedRoots'][root]['Inventory']['LINs'][LIN]['AAO']['TotalAAO'] += ORF;
                            sourceData[bos]['SelectedRoots'][root]['Inventory']['LINs'][LIN]['AAO']['Other_TDA'] = Other_TDA; sourceData[bos]['SelectedRoots'][root]['Inventory']['LINs'][LIN]['AAO']['TotalAAO'] += Other_TDA;

    

                        }



                        //Global Level
                        if(SACSItem){

                            sourceData[bos]['Inventory']['AAO']['TNG_Base_TDA'] += TNG_Base_TDA; sourceData[bos]['Inventory']['AAO']['TotalAAO'] += TNG_Base_TDA;
                            sourceData[bos]['Inventory']['AAO']['COMPO_1_OTOE'] += AAO_COMPO_1_OTOE; sourceData[bos]['Inventory']['AAO']['TotalAAO'] += AAO_COMPO_1_OTOE;
                            sourceData[bos]['Inventory']['AAO']['COMPO_2_OTOE'] += AAO_COMPO_2_OTOE; sourceData[bos]['Inventory']['AAO']['TotalAAO'] += AAO_COMPO_2_OTOE; 
                            sourceData[bos]['Inventory']['AAO']['COMPO_3_OTOE'] += AAO_COMPO_3_OTOE; sourceData[bos]['Inventory']['AAO']['TotalAAO'] += AAO_COMPO_3_OTOE;
    

                        }

                        if(inventoryItem){

                            sourceData[bos]['Inventory']['AAO']['ACT_SETS'] += ACT_SETS; sourceData[bos]['Inventory']['AAO']['TotalAAO'] += ACT_SETS; 
                            sourceData[bos]['Inventory']['AAO']['APS_OTOE'] += APS_OTOE; sourceData[bos]['Inventory']['AAO']['TotalAAO'] += APS_OTOE;
                            sourceData[bos]['Inventory']['AAO']['WR'] += WR; sourceData[bos]['Inventory']['AAO']['TotalAAO'] += WR;
                            sourceData[bos]['Inventory']['AAO']['WRA'] += WRA; sourceData[bos]['Inventory']['AAO']['TotalAAO'] += WRA;
                            sourceData[bos]['Inventory']['AAO']['OPS'] += OPS; sourceData[bos]['Inventory']['AAO']['TotalAAO'] += OPS; 
                            sourceData[bos]['Inventory']['AAO']['RCF'] += RCF; sourceData[bos]['Inventory']['AAO']['TotalAAO'] += RCF;
                            sourceData[bos]['Inventory']['AAO']['ORF'] += ORF; sourceData[bos]['Inventory']['AAO']['TotalAAO'] += ORF;
                            sourceData[bos]['Inventory']['AAO']['Other_TDA'] += Other_TDA; sourceData[bos]['Inventory']['AAO']['TotalAAO'] += Other_TDA;
    

                        }




                    }

    


                }else{
                    



                    if(SACSItem){

                        sourceData[bos]['Inventory']['AAO']['TNG_Base_TDA'] -= TNG_Base_TDA; 
                        sourceData[bos]['Inventory']['AAO']['COMPO_1_OTOE'] -= AAO_COMPO_1_OTOE; 
                        sourceData[bos]['Inventory']['AAO']['COMPO_2_OTOE'] -= AAO_COMPO_2_OTOE; 
                        sourceData[bos]['Inventory']['AAO']['COMPO_3_OTOE'] -= AAO_COMPO_3_OTOE; 



                    }

                    if(inventoryItem){

                        sourceData[bos]['Inventory']['AAO']['ACT_SETS'] -= ACT_SETS; 
                        sourceData[bos]['Inventory']['AAO']['APS_OTOE'] -= APS_OTOE; 
                        sourceData[bos]['Inventory']['AAO']['WR'] -= WR; 
                        sourceData[bos]['Inventory']['AAO']['WRA'] -= WRA; 
                        sourceData[bos]['Inventory']['AAO']['OPS'] -= OPS; 
                        sourceData[bos]['Inventory']['AAO']['RCF'] -= RCF; 
                        sourceData[bos]['Inventory']['AAO']['ORF'] -= ORF; 
                        sourceData[bos]['Inventory']['AAO']['Other_TDA'] -= Other_TDA;

                    }
                    

                    sourceData[bos]['Inventory']['AAO']['TotalAAO'] -= sourceData[bos]['Inventory']['LINs']['AAO'][LIN]['TotalAAO'];             
                    delete sourceData[bos]['Inventory']['LINs']['AAO'][LIN];

                   
                }
                

                var obj = JSON.stringify(sourceData);
                sessionStorage.setItem('SourceData', obj);


            }
            catch(e){
                console.log(e);
            }


        },//createAAO

        createAPO:function(bos, root, LIN, SACSItem, inventoryItem, sourceData, checked){

            try{

                var TNG_Base_TDA = parseInt(SACSItem['TNG_Base_TDA']) || 0;
                var APO_COMPO_1_OTOE = parseInt(SACSItem['APO_COMPO_1_OTOE']) || 0;
                var APO_COMPO_2_OTOE = parseInt(SACSItem['APO_COMPO_2_OTOE']) || 0;
                var APO_COMPO_3_OTOE = parseInt(SACSItem['APO_COMPO_3_OTOE']) || 0;

                var ACT_SETS = parseInt(inventoryItem['ACT_SETS']) || 0;
                var APS_OTOE = parseInt(inventoryItem['APS_OTOE']) || 0;
                var WR = parseInt(inventoryItem['WR']) || 0;
                var WRA = parseInt(inventoryItem['WRA']) || 0;
                var OPS = parseInt(inventoryItem['OPS']) || 0;
                var RCF = parseInt(inventoryItem['RCF']) || 0;
                var ORF = parseInt(inventoryItem['ORF']) || 0;
                var Other_TDA = parseInt(inventoryItem['Other_TDA']) || 0;



                if(checked){

                    


                    if(sourceData[bos]['Inventory']['LINs']['APO'][LIN] && sourceData[bos]['SelectedRoots'][root]['Inventory']['LINs'][LIN]['APO']){

                        //LIN-Root Level

                        if(SACSItem){
                            sourceData[bos]['Inventory']['LINs']['APO'][LIN]['TNG_Base_TDA'] += TNG_Base_TDA; sourceData[bos]['Inventory']['LINs']['APO'][LIN]['TotalAPO'] += TNG_Base_TDA;
                            sourceData[bos]['Inventory']['LINs']['APO'][LIN]['APO_COMPO_1_OTOE'] += APO_COMPO_1_OTOE; sourceData[bos]['Inventory']['LINs']['APO'][LIN]['TotalAPO'] +=  APO_COMPO_1_OTOE;
                            sourceData[bos]['Inventory']['LINs']['APO'][LIN]['APO_COMPO_2_OTOE'] += APO_COMPO_2_OTOE;  sourceData[bos]['Inventory']['LINs']['APO'][LIN]['TotalAPO'] += APO_COMPO_2_OTOE; 
                            sourceData[bos]['Inventory']['LINs']['APO'][LIN]['APO_COMPO_3_OTOE'] += APO_COMPO_3_OTOE; sourceData[bos]['Inventory']['LINs']['APO'][LIN]['TotalAPO'] += APO_COMPO_3_OTOE;

                            sourceData[bos]['SelectedRoots'][root]['Inventory']['LINs'][LIN]['APO']['TNG_Base_TDA'] += TNG_Base_TDA; sourceData[bos]['SelectedRoots'][root]['Inventory']['LINs'][LIN]['APO']['TotalAPO'] += TNG_Base_TDA;
                            sourceData[bos]['SelectedRoots'][root]['Inventory']['LINs'][LIN]['APO']['APO_COMPO_1_OTOE'] += APO_COMPO_1_OTOE; sourceData[bos]['SelectedRoots'][root]['Inventory']['LINs'][LIN]['APO']['TotalAPO'] +=  APO_COMPO_1_OTOE;
                            sourceData[bos]['SelectedRoots'][root]['Inventory']['LINs'][LIN]['APO']['APO_COMPO_2_OTOE'] += APO_COMPO_2_OTOE;  sourceData[bos]['SelectedRoots'][root]['Inventory']['LINs'][LIN]['APO']['TotalAPO'] += APO_COMPO_2_OTOE; 
                            sourceData[bos]['SelectedRoots'][root]['Inventory']['LINs'][LIN]['APO']['APO_COMPO_3_OTOE'] += APO_COMPO_3_OTOE; sourceData[bos]['SelectedRoots'][root]['Inventory']['LINs'][LIN]['APO']['TotalAPO'] += APO_COMPO_3_OTOE;

    

                        }

                        if(inventoryItem){
                            sourceData[bos]['Inventory']['LINs']['APO'][LIN]['ACT_SETS'] += ACT_SETS; sourceData[bos]['Inventory']['LINs']['APO'][LIN]['TotalAPO'] += ACT_SETS; 
                            sourceData[bos]['Inventory']['LINs']['APO'][LIN]['APS_OTOE'] += APS_OTOE; sourceData[bos]['Inventory']['LINs']['APO'][LIN]['TotalAPO'] += APS_OTOE;
                            sourceData[bos]['Inventory']['LINs']['APO'][LIN]['WR'] += WR; sourceData[bos]['Inventory']['LINs']['APO'][LIN]['TotalAPO'] += WR;
                            sourceData[bos]['Inventory']['LINs']['APO'][LIN]['WRA'] += WRA; sourceData[bos]['Inventory']['LINs']['APO'][LIN]['TotalAPO'] += WRA;
                            sourceData[bos]['Inventory']['LINs']['APO'][LIN]['OPS'] += OPS; sourceData[bos]['Inventory']['LINs']['APO'][LIN]['TotalAPO'] += OPS; 
                            sourceData[bos]['Inventory']['LINs']['APO'][LIN]['RCF'] += RCF; sourceData[bos]['Inventory']['LINs']['APO'][LIN]['TotalAPO'] += RCF;
                            sourceData[bos]['Inventory']['LINs']['APO'][LIN]['ORF'] += ORF; sourceData[bos]['Inventory']['LINs']['APO'][LIN]['TotalAPO'] += ORF;
                            sourceData[bos]['Inventory']['LINs']['APO'][LIN]['Other_TDA'] += Other_TDA ; sourceData[bos]['Inventory']['LINs']['APO'][LIN]['TotalAPO'] += Other_TDA;

                            sourceData[bos]['SelectedRoots'][root]['Inventory']['LINs'][LIN]['APO']['ACT_SETS'] += ACT_SETS; sourceData[bos]['SelectedRoots'][root]['Inventory']['LINs'][LIN]['APO']['TotalAPO'] += ACT_SETS; 
                            sourceData[bos]['SelectedRoots'][root]['Inventory']['LINs'][LIN]['APO']['APS_OTOE'] += APS_OTOE; sourceData[bos]['SelectedRoots'][root]['Inventory']['LINs'][LIN]['APO']['TotalAPO'] += APS_OTOE;
                            sourceData[bos]['SelectedRoots'][root]['Inventory']['LINs'][LIN]['APO']['WR'] += WR; sourceData[bos]['SelectedRoots'][root]['Inventory']['LINs'][LIN]['APO']['TotalAPO'] += WR;
                            sourceData[bos]['SelectedRoots'][root]['Inventory']['LINs'][LIN]['APO']['WRA'] += WRA; sourceData[bos]['SelectedRoots'][root]['Inventory']['LINs'][LIN]['APO']['TotalAPO'] += WRA;
                            sourceData[bos]['SelectedRoots'][root]['Inventory']['LINs'][LIN]['APO']['OPS'] += OPS; sourceData[bos]['SelectedRoots'][root]['Inventory']['LINs'][LIN]['APO']['TotalAPO'] += OPS; 
                            sourceData[bos]['SelectedRoots'][root]['Inventory']['LINs'][LIN]['APO']['RCF'] += RCF; sourceData[bos]['SelectedRoots'][root]['Inventory']['LINs'][LIN]['APO']['TotalAPO'] += RCF;
                            sourceData[bos]['SelectedRoots'][root]['Inventory']['LINs'][LIN]['APO']['ORF'] += ORF; sourceData[bos]['SelectedRoots'][root]['Inventory']['LINs'][LIN]['APO']['TotalAPO'] += ORF;
                            sourceData[bos]['SelectedRoots'][root]['Inventory']['LINs'][LIN]['APO']['Other_TDA'] += Other_TDA; sourceData[bos]['SelectedRoots'][root]['Inventory']['LINs'][LIN]['APO']['TotalAPO'] += Other_TDA;

    

                        }



                        //Global Level
                        if(SACSItem){

                            sourceData[bos]['Inventory']['APO']['TNG_Base_TDA'] += TNG_Base_TDA; sourceData[bos]['Inventory']['APO']['TotalAPO'] += TNG_Base_TDA;
                            sourceData[bos]['Inventory']['APO']['COMPO_1_OTOE'] += APO_COMPO_1_OTOE; sourceData[bos]['Inventory']['APO']['TotalAPO'] += APO_COMPO_1_OTOE;
                            sourceData[bos]['Inventory']['APO']['COMPO_2_OTOE'] += APO_COMPO_2_OTOE; sourceData[bos]['Inventory']['APO']['TotalAPO'] += APO_COMPO_2_OTOE; 
                            sourceData[bos]['Inventory']['APO']['COMPO_3_OTOE'] += APO_COMPO_3_OTOE; sourceData[bos]['Inventory']['APO']['TotalAPO'] += APO_COMPO_3_OTOE;
    

                        }

                        if(inventoryItem){

                            sourceData[bos]['Inventory']['APO']['ACT_SETS'] += ACT_SETS; sourceData[bos]['Inventory']['APO']['TotalAPO'] += ACT_SETS; 
                            sourceData[bos]['Inventory']['APO']['APS_OTOE'] += APS_OTOE; sourceData[bos]['Inventory']['APO']['TotalAPO'] += APS_OTOE;
                            sourceData[bos]['Inventory']['APO']['WR'] += WR; sourceData[bos]['Inventory']['APO']['TotalAPO'] += WR;
                            sourceData[bos]['Inventory']['APO']['WRA'] += WRA; sourceData[bos]['Inventory']['APO']['TotalAPO'] += WRA;
                            sourceData[bos]['Inventory']['APO']['OPS'] += OPS; sourceData[bos]['Inventory']['APO']['TotalAPO'] += OPS; 
                            sourceData[bos]['Inventory']['APO']['RCF'] += RCF; sourceData[bos]['Inventory']['APO']['TotalAPO'] += RCF;
                            sourceData[bos]['Inventory']['APO']['ORF'] += ORF; sourceData[bos]['Inventory']['APO']['TotalAPO'] += ORF;
                            sourceData[bos]['Inventory']['APO']['Other_TDA'] += Other_TDA; sourceData[bos]['Inventory']['APO']['TotalAPO'] += Other_TDA;
    

                        }



                    }else{




                        
                        //LIN-Root Level
                        sourceData[bos]['Inventory']['LINs']['APO'][LIN] = {};
                        sourceData[bos]['Inventory']['LINs']['APO'][LIN]['TotalAPO'] = 0;
                        sourceData[bos]['SelectedRoots'][root]['Inventory']['LINs'][LIN]['APO'] = {};
                        sourceData[bos]['SelectedRoots'][root]['Inventory']['LINs'][LIN]['APO']['TotalAPO'] = 0;


                        if(SACSItem){
                            sourceData[bos]['Inventory']['LINs']['APO'][LIN]['TNG_Base_TDA'] = TNG_Base_TDA; sourceData[bos]['Inventory']['LINs']['APO'][LIN]['TotalAPO'] += TNG_Base_TDA;
                            sourceData[bos]['Inventory']['LINs']['APO'][LIN]['APO_COMPO_1_OTOE'] = APO_COMPO_1_OTOE; sourceData[bos]['Inventory']['LINs']['APO'][LIN]['TotalAPO'] +=  APO_COMPO_1_OTOE;
                            sourceData[bos]['Inventory']['LINs']['APO'][LIN]['APO_COMPO_2_OTOE'] = APO_COMPO_2_OTOE;  sourceData[bos]['Inventory']['LINs']['APO'][LIN]['TotalAPO'] += APO_COMPO_2_OTOE; 
                            sourceData[bos]['Inventory']['LINs']['APO'][LIN]['APO_COMPO_3_OTOE'] = APO_COMPO_3_OTOE; sourceData[bos]['Inventory']['LINs']['APO'][LIN]['TotalAPO'] += APO_COMPO_3_OTOE;

                            sourceData[bos]['SelectedRoots'][root]['Inventory']['LINs'][LIN]['APO']['TNG_Base_TDA'] = TNG_Base_TDA; sourceData[bos]['SelectedRoots'][root]['Inventory']['LINs'][LIN]['APO']['TotalAPO'] += TNG_Base_TDA;
                            sourceData[bos]['SelectedRoots'][root]['Inventory']['LINs'][LIN]['APO']['APO_COMPO_1_OTOE'] = APO_COMPO_1_OTOE; sourceData[bos]['SelectedRoots'][root]['Inventory']['LINs'][LIN]['APO']['TotalAPO'] +=  APO_COMPO_1_OTOE;
                            sourceData[bos]['SelectedRoots'][root]['Inventory']['LINs'][LIN]['APO']['APO_COMPO_2_OTOE'] = APO_COMPO_2_OTOE;  sourceData[bos]['SelectedRoots'][root]['Inventory']['LINs'][LIN]['APO']['TotalAPO'] += APO_COMPO_2_OTOE; 
                            sourceData[bos]['SelectedRoots'][root]['Inventory']['LINs'][LIN]['APO']['APO_COMPO_3_OTOE'] = APO_COMPO_3_OTOE; sourceData[bos]['SelectedRoots'][root]['Inventory']['LINs'][LIN]['APO']['TotalAPO'] += APO_COMPO_3_OTOE;

    

                        }

                        if(inventoryItem){
                            sourceData[bos]['Inventory']['LINs']['APO'][LIN]['ACT_SETS'] = ACT_SETS; sourceData[bos]['Inventory']['LINs']['APO'][LIN]['TotalAPO'] += ACT_SETS; 
                            sourceData[bos]['Inventory']['LINs']['APO'][LIN]['APS_OTOE'] = APS_OTOE; sourceData[bos]['Inventory']['LINs']['APO'][LIN]['TotalAPO'] += APS_OTOE;
                            sourceData[bos]['Inventory']['LINs']['APO'][LIN]['WR'] = WR; sourceData[bos]['Inventory']['LINs']['APO'][LIN]['TotalAPO'] += WR;
                            sourceData[bos]['Inventory']['LINs']['APO'][LIN]['WRA'] = WRA; sourceData[bos]['Inventory']['LINs']['APO'][LIN]['TotalAPO'] += WRA;
                            sourceData[bos]['Inventory']['LINs']['APO'][LIN]['OPS'] = OPS; sourceData[bos]['Inventory']['LINs']['APO'][LIN]['TotalAPO'] += OPS; 
                            sourceData[bos]['Inventory']['LINs']['APO'][LIN]['RCF'] = RCF; sourceData[bos]['Inventory']['LINs']['APO'][LIN]['TotalAPO'] += RCF;
                            sourceData[bos]['Inventory']['LINs']['APO'][LIN]['ORF'] = ORF; sourceData[bos]['Inventory']['LINs']['APO'][LIN]['TotalAPO'] += ORF;
                            sourceData[bos]['Inventory']['LINs']['APO'][LIN]['Other_TDA'] = Other_TDA ; sourceData[bos]['Inventory']['LINs']['APO'][LIN]['TotalAPO'] += Other_TDA;

                            sourceData[bos]['SelectedRoots'][root]['Inventory']['LINs'][LIN]['APO']['ACT_SETS'] = ACT_SETS; sourceData[bos]['SelectedRoots'][root]['Inventory']['LINs'][LIN]['APO']['TotalAPO'] += ACT_SETS; 
                            sourceData[bos]['SelectedRoots'][root]['Inventory']['LINs'][LIN]['APO']['APS_OTOE'] = APS_OTOE; sourceData[bos]['SelectedRoots'][root]['Inventory']['LINs'][LIN]['APO']['TotalAPO'] += APS_OTOE;
                            sourceData[bos]['SelectedRoots'][root]['Inventory']['LINs'][LIN]['APO']['WR'] = WR; sourceData[bos]['SelectedRoots'][root]['Inventory']['LINs'][LIN]['APO']['TotalAPO'] += WR;
                            sourceData[bos]['SelectedRoots'][root]['Inventory']['LINs'][LIN]['APO']['WRA'] = WRA; sourceData[bos]['SelectedRoots'][root]['Inventory']['LINs'][LIN]['APO']['TotalAPO'] += WRA;
                            sourceData[bos]['SelectedRoots'][root]['Inventory']['LINs'][LIN]['APO']['OPS'] = OPS; sourceData[bos]['SelectedRoots'][root]['Inventory']['LINs'][LIN]['APO']['TotalAPO'] += OPS; 
                            sourceData[bos]['SelectedRoots'][root]['Inventory']['LINs'][LIN]['APO']['RCF'] = RCF; sourceData[bos]['SelectedRoots'][root]['Inventory']['LINs'][LIN]['APO']['TotalAPO'] += RCF;
                            sourceData[bos]['SelectedRoots'][root]['Inventory']['LINs'][LIN]['APO']['ORF'] = ORF; sourceData[bos]['SelectedRoots'][root]['Inventory']['LINs'][LIN]['APO']['TotalAPO'] += ORF;
                            sourceData[bos]['SelectedRoots'][root]['Inventory']['LINs'][LIN]['APO']['Other_TDA'] = Other_TDA; sourceData[bos]['SelectedRoots'][root]['Inventory']['LINs'][LIN]['APO']['TotalAPO'] += Other_TDA;

    

                        }



                        //Global Level
                        if(SACSItem){

                            sourceData[bos]['Inventory']['APO']['TNG_Base_TDA'] += TNG_Base_TDA; sourceData[bos]['Inventory']['APO']['TotalAPO'] += TNG_Base_TDA;
                            sourceData[bos]['Inventory']['APO']['COMPO_1_OTOE'] += APO_COMPO_1_OTOE; sourceData[bos]['Inventory']['APO']['TotalAPO'] += APO_COMPO_1_OTOE;
                            sourceData[bos]['Inventory']['APO']['COMPO_2_OTOE'] += APO_COMPO_2_OTOE; sourceData[bos]['Inventory']['APO']['TotalAPO'] += APO_COMPO_2_OTOE; 
                            sourceData[bos]['Inventory']['APO']['COMPO_3_OTOE'] += APO_COMPO_3_OTOE; sourceData[bos]['Inventory']['APO']['TotalAPO'] += APO_COMPO_3_OTOE;
    

                        }

                        if(inventoryItem){

                            sourceData[bos]['Inventory']['APO']['ACT_SETS'] += ACT_SETS; sourceData[bos]['Inventory']['APO']['TotalAPO'] += ACT_SETS; 
                            sourceData[bos]['Inventory']['APO']['APS_OTOE'] += APS_OTOE; sourceData[bos]['Inventory']['APO']['TotalAPO'] += APS_OTOE;
                            sourceData[bos]['Inventory']['APO']['WR'] += WR; sourceData[bos]['Inventory']['APO']['TotalAPO'] += WR;
                            sourceData[bos]['Inventory']['APO']['WRA'] += WRA; sourceData[bos]['Inventory']['APO']['TotalAPO'] += WRA;
                            sourceData[bos]['Inventory']['APO']['OPS'] += OPS; sourceData[bos]['Inventory']['APO']['TotalAPO'] += OPS; 
                            sourceData[bos]['Inventory']['APO']['RCF'] += RCF; sourceData[bos]['Inventory']['APO']['TotalAPO'] += RCF;
                            sourceData[bos]['Inventory']['APO']['ORF'] += ORF; sourceData[bos]['Inventory']['APO']['TotalAPO'] += ORF;
                            sourceData[bos]['Inventory']['APO']['Other_TDA'] += Other_TDA; sourceData[bos]['Inventory']['APO']['TotalAPO'] += Other_TDA;
    

                        }




                    }

    


                }else{
                    



                    if(SACSItem){

                        sourceData[bos]['Inventory']['APO']['TNG_Base_TDA'] -= TNG_Base_TDA; 
                        sourceData[bos]['Inventory']['APO']['COMPO_1_OTOE'] -= APO_COMPO_1_OTOE; 
                        sourceData[bos]['Inventory']['APO']['COMPO_2_OTOE'] -= APO_COMPO_2_OTOE; 
                        sourceData[bos]['Inventory']['APO']['COMPO_3_OTOE'] -= APO_COMPO_3_OTOE; 



                    }

                    if(inventoryItem){

                        sourceData[bos]['Inventory']['APO']['ACT_SETS'] -= ACT_SETS; 
                        sourceData[bos]['Inventory']['APO']['APS_OTOE'] -= APS_OTOE; 
                        sourceData[bos]['Inventory']['APO']['WR'] -= WR; 
                        sourceData[bos]['Inventory']['APO']['WRA'] -= WRA; 
                        sourceData[bos]['Inventory']['APO']['OPS'] -= OPS; 
                        sourceData[bos]['Inventory']['APO']['RCF'] -= RCF; 
                        sourceData[bos]['Inventory']['APO']['ORF'] -= ORF; 
                        sourceData[bos]['Inventory']['APO']['Other_TDA'] -= Other_TDA;

                    }
                    

                    sourceData[bos]['Inventory']['APO']['TotalAPO'] -= sourceData[bos]['Inventory']['LINs']['APO'][LIN]['TotalAPO'];             
                    delete sourceData[bos]['Inventory']['LINs']['APO'][LIN];

                   
                }
                

                var obj = JSON.stringify(sourceData);
                sessionStorage.setItem('SourceData', obj);


            }
            catch(e){
                console.log(e);
            }


        },//createAPO

        createRO:function(bos, root, LIN, SACSItem, inventoryItem, sourceData, checked){

            try{

                var TNG_Base_TDA = parseInt(SACSItem['TNG_Base_TDA']) || 0;
                var RO_COMPO_1_OTOE = parseInt(SACSItem['RO_COMPO_1_OTOE']) || 0;
                var RO_COMPO_2_OTOE = parseInt(SACSItem['RO_COMPO_2_OTOE']) || 0;
                var RO_COMPO_3_OTOE = parseInt(SACSItem['RO_COMPO_3_OTOE']) || 0;

                var ACT_SETS = parseInt(inventoryItem['ACT_SETS']) || 0;
                var APS_OTOE = parseInt(inventoryItem['APS_OTOE']) || 0;
                var WR = parseInt(inventoryItem['WR']) || 0;
                var WRA = parseInt(inventoryItem['WRA']) || 0;
                var OPS = parseInt(inventoryItem['OPS']) || 0;
                var RCF = parseInt(inventoryItem['RCF']) || 0;
                var ORF = parseInt(inventoryItem['ORF']) || 0;
                var Other_TDA = parseInt(inventoryItem['Other_TDA']) || 0;



                if(checked){

                    


                    if(sourceData[bos]['Inventory']['LINs']['RO'][LIN] && sourceData[bos]['SelectedRoots'][root]['Inventory']['LINs'][LIN]['RO']){

                        //LIN Level

                        if(SACSItem){
                            sourceData[bos]['Inventory']['LINs']['RO'][LIN]['TNG_Base_TDA'] += TNG_Base_TDA; sourceData[bos]['Inventory']['LINs']['RO'][LIN]['TotalRO'] += TNG_Base_TDA;
                            sourceData[bos]['Inventory']['LINs']['RO'][LIN]['RO_COMPO_1_OTOE'] += RO_COMPO_1_OTOE; sourceData[bos]['Inventory']['LINs']['RO'][LIN]['TotalRO'] +=  RO_COMPO_1_OTOE;
                            sourceData[bos]['Inventory']['LINs']['RO'][LIN]['RO_COMPO_2_OTOE'] += RO_COMPO_2_OTOE;  sourceData[bos]['Inventory']['LINs']['RO'][LIN]['TotalRO'] += RO_COMPO_2_OTOE; 
                            sourceData[bos]['Inventory']['LINs']['RO'][LIN]['RO_COMPO_3_OTOE'] += RO_COMPO_3_OTOE; sourceData[bos]['Inventory']['LINs']['RO'][LIN]['TotalRO'] += RO_COMPO_3_OTOE;

                            sourceData[bos]['SelectedRoots'][root]['Inventory']['LINs'][LIN]['RO']['TNG_Base_TDA'] += TNG_Base_TDA; sourceData[bos]['SelectedRoots'][root]['Inventory']['LINs'][LIN]['RO']['TotalRO'] += TNG_Base_TDA;
                            sourceData[bos]['SelectedRoots'][root]['Inventory']['LINs'][LIN]['RO']['RO_COMPO_1_OTOE'] += RO_COMPO_1_OTOE; sourceData[bos]['SelectedRoots'][root]['Inventory']['LINs'][LIN]['RO']['TotalRO'] +=  RO_COMPO_1_OTOE;
                            sourceData[bos]['SelectedRoots'][root]['Inventory']['LINs'][LIN]['RO']['RO_COMPO_2_OTOE'] += RO_COMPO_2_OTOE;  sourceData[bos]['SelectedRoots'][root]['Inventory']['LINs'][LIN]['RO']['TotalRO'] += RO_COMPO_2_OTOE; 
                            sourceData[bos]['SelectedRoots'][root]['Inventory']['LINs'][LIN]['RO']['RO_COMPO_3_OTOE'] += RO_COMPO_3_OTOE; sourceData[bos]['SelectedRoots'][root]['Inventory']['LINs'][LIN]['RO']['TotalRO'] += RO_COMPO_3_OTOE;

    

                        }

                        if(inventoryItem){
                            sourceData[bos]['Inventory']['LINs']['RO'][LIN]['ACT_SETS'] += ACT_SETS; sourceData[bos]['Inventory']['LINs']['RO'][LIN]['TotalRO'] += ACT_SETS; 
                            sourceData[bos]['Inventory']['LINs']['RO'][LIN]['APS_OTOE'] += APS_OTOE; sourceData[bos]['Inventory']['LINs']['RO'][LIN]['TotalRO'] += APS_OTOE;
                            sourceData[bos]['Inventory']['LINs']['RO'][LIN]['WR'] += WR; sourceData[bos]['Inventory']['LINs']['RO'][LIN]['TotalRO'] += WR;
                            sourceData[bos]['Inventory']['LINs']['RO'][LIN]['WRA'] += WRA; sourceData[bos]['Inventory']['LINs']['RO'][LIN]['TotalRO'] += WRA;
                            sourceData[bos]['Inventory']['LINs']['RO'][LIN]['OPS'] += OPS; sourceData[bos]['Inventory']['LINs']['RO'][LIN]['TotalRO'] += OPS; 
                            sourceData[bos]['Inventory']['LINs']['RO'][LIN]['RCF'] += RCF; sourceData[bos]['Inventory']['LINs']['RO'][LIN]['TotalRO'] += RCF;
                            sourceData[bos]['Inventory']['LINs']['RO'][LIN]['ORF'] += ORF; sourceData[bos]['Inventory']['LINs']['RO'][LIN]['TotalRO'] += ORF;
                            sourceData[bos]['Inventory']['LINs']['RO'][LIN]['Other_TDA'] += Other_TDA ; sourceData[bos]['Inventory']['LINs']['RO'][LIN]['TotalRO'] += Other_TDA;

                            sourceData[bos]['SelectedRoots'][root]['Inventory']['LINs'][LIN]['RO']['ACT_SETS'] += ACT_SETS; sourceData[bos]['SelectedRoots'][root]['Inventory']['LINs'][LIN]['RO']['TotalRO'] += ACT_SETS; 
                            sourceData[bos]['SelectedRoots'][root]['Inventory']['LINs'][LIN]['RO']['APS_OTOE'] += APS_OTOE; sourceData[bos]['SelectedRoots'][root]['Inventory']['LINs'][LIN]['RO']['TotalRO'] += APS_OTOE;
                            sourceData[bos]['SelectedRoots'][root]['Inventory']['LINs'][LIN]['RO']['WR'] += WR; sourceData[bos]['SelectedRoots'][root]['Inventory']['LINs'][LIN]['RO']['TotalRO'] += WR;
                            sourceData[bos]['SelectedRoots'][root]['Inventory']['LINs'][LIN]['RO']['WRA'] += WRA; sourceData[bos]['SelectedRoots'][root]['Inventory']['LINs'][LIN]['RO']['TotalRO'] += WRA;
                            sourceData[bos]['SelectedRoots'][root]['Inventory']['LINs'][LIN]['RO']['OPS'] += OPS; sourceData[bos]['SelectedRoots'][root]['Inventory']['LINs'][LIN]['RO']['TotalRO'] += OPS; 
                            sourceData[bos]['SelectedRoots'][root]['Inventory']['LINs'][LIN]['RO']['RCF'] += RCF; sourceData[bos]['SelectedRoots'][root]['Inventory']['LINs'][LIN]['RO']['TotalRO'] += RCF;
                            sourceData[bos]['SelectedRoots'][root]['Inventory']['LINs'][LIN]['RO']['ORF'] += ORF; sourceData[bos]['SelectedRoots'][root]['Inventory']['LINs'][LIN]['RO']['TotalRO'] += ORF;
                            sourceData[bos]['SelectedRoots'][root]['Inventory']['LINs'][LIN]['RO']['Other_TDA'] += Other_TDA; sourceData[bos]['SelectedRoots'][root]['Inventory']['LINs'][LIN]['RO']['TotalRO'] += Other_TDA;

    

                        }



                        //Global Level
                        if(SACSItem){

                            sourceData[bos]['Inventory']['RO']['TNG_Base_TDA'] += TNG_Base_TDA; sourceData[bos]['Inventory']['RO']['TotalRO'] += TNG_Base_TDA;
                            sourceData[bos]['Inventory']['RO']['COMPO_1_OTOE'] += RO_COMPO_1_OTOE; sourceData[bos]['Inventory']['RO']['TotalRO'] += RO_COMPO_1_OTOE;
                            sourceData[bos]['Inventory']['RO']['COMPO_2_OTOE'] += RO_COMPO_2_OTOE; sourceData[bos]['Inventory']['RO']['TotalRO'] += RO_COMPO_2_OTOE; 
                            sourceData[bos]['Inventory']['RO']['COMPO_3_OTOE'] += RO_COMPO_3_OTOE; sourceData[bos]['Inventory']['RO']['TotalRO'] += RO_COMPO_3_OTOE;
    

                        }

                        if(inventoryItem){

                            sourceData[bos]['Inventory']['RO']['ACT_SETS'] += ACT_SETS; sourceData[bos]['Inventory']['RO']['TotalRO'] += ACT_SETS; 
                            sourceData[bos]['Inventory']['RO']['APS_OTOE'] += APS_OTOE; sourceData[bos]['Inventory']['RO']['TotalRO'] += APS_OTOE;
                            sourceData[bos]['Inventory']['RO']['WR'] += WR; sourceData[bos]['Inventory']['RO']['TotalRO'] += WR;
                            sourceData[bos]['Inventory']['RO']['WRA'] += WRA; sourceData[bos]['Inventory']['RO']['TotalRO'] += WRA;
                            sourceData[bos]['Inventory']['RO']['OPS'] += OPS; sourceData[bos]['Inventory']['RO']['TotalRO'] += OPS; 
                            sourceData[bos]['Inventory']['RO']['RCF'] += RCF; sourceData[bos]['Inventory']['RO']['TotalRO'] += RCF;
                            sourceData[bos]['Inventory']['RO']['ORF'] += ORF; sourceData[bos]['Inventory']['RO']['TotalRO'] += ORF;
                            sourceData[bos]['Inventory']['RO']['Other_TDA'] += Other_TDA; sourceData[bos]['Inventory']['RO']['TotalRO'] += Other_TDA;
    

                        }



                    }else{




                        
                        //LIN Level
                        sourceData[bos]['Inventory']['LINs']['RO'][LIN] = {};
                        sourceData[bos]['Inventory']['LINs']['RO'][LIN]['TotalRO'] = 0;
                        sourceData[bos]['SelectedRoots'][root]['Inventory']['LINs'][LIN]['RO'] = {};
                        sourceData[bos]['SelectedRoots'][root]['Inventory']['LINs'][LIN]['RO']['TotalRO'] = 0;


                        if(SACSItem){
                            sourceData[bos]['Inventory']['LINs']['RO'][LIN]['TNG_Base_TDA'] = TNG_Base_TDA; sourceData[bos]['Inventory']['LINs']['RO'][LIN]['TotalRO'] += TNG_Base_TDA;
                            sourceData[bos]['Inventory']['LINs']['RO'][LIN]['RO_COMPO_1_OTOE'] = RO_COMPO_1_OTOE; sourceData[bos]['Inventory']['LINs']['RO'][LIN]['TotalRO'] +=  RO_COMPO_1_OTOE;
                            sourceData[bos]['Inventory']['LINs']['RO'][LIN]['RO_COMPO_2_OTOE'] = RO_COMPO_2_OTOE;  sourceData[bos]['Inventory']['LINs']['RO'][LIN]['TotalRO'] += RO_COMPO_2_OTOE; 
                            sourceData[bos]['Inventory']['LINs']['RO'][LIN]['RO_COMPO_3_OTOE'] = RO_COMPO_3_OTOE; sourceData[bos]['Inventory']['LINs']['RO'][LIN]['TotalRO'] += RO_COMPO_3_OTOE;

                            sourceData[bos]['SelectedRoots'][root]['Inventory']['LINs'][LIN]['RO']['TNG_Base_TDA'] = TNG_Base_TDA; sourceData[bos]['SelectedRoots'][root]['Inventory']['LINs'][LIN]['RO']['TotalRO'] += TNG_Base_TDA;
                            sourceData[bos]['SelectedRoots'][root]['Inventory']['LINs'][LIN]['RO']['RO_COMPO_1_OTOE'] = RO_COMPO_1_OTOE; sourceData[bos]['SelectedRoots'][root]['Inventory']['LINs'][LIN]['RO']['TotalRO'] +=  RO_COMPO_1_OTOE;
                            sourceData[bos]['SelectedRoots'][root]['Inventory']['LINs'][LIN]['RO']['RO_COMPO_2_OTOE'] = RO_COMPO_2_OTOE;  sourceData[bos]['SelectedRoots'][root]['Inventory']['LINs'][LIN]['RO']['TotalRO'] += RO_COMPO_2_OTOE; 
                            sourceData[bos]['SelectedRoots'][root]['Inventory']['LINs'][LIN]['RO']['RO_COMPO_3_OTOE'] = RO_COMPO_3_OTOE; sourceData[bos]['SelectedRoots'][root]['Inventory']['LINs'][LIN]['RO']['TotalRO'] += RO_COMPO_3_OTOE;

    

                        }

                        if(inventoryItem){
                            sourceData[bos]['Inventory']['LINs']['RO'][LIN]['ACT_SETS'] = ACT_SETS; sourceData[bos]['Inventory']['LINs']['RO'][LIN]['TotalRO'] += ACT_SETS; 
                            sourceData[bos]['Inventory']['LINs']['RO'][LIN]['APS_OTOE'] = APS_OTOE; sourceData[bos]['Inventory']['LINs']['RO'][LIN]['TotalRO'] += APS_OTOE;
                            sourceData[bos]['Inventory']['LINs']['RO'][LIN]['WR'] = WR; sourceData[bos]['Inventory']['LINs']['RO'][LIN]['TotalRO'] += WR;
                            sourceData[bos]['Inventory']['LINs']['RO'][LIN]['WRA'] = WRA; sourceData[bos]['Inventory']['LINs']['RO'][LIN]['TotalRO'] += WRA;
                            sourceData[bos]['Inventory']['LINs']['RO'][LIN]['OPS'] = OPS; sourceData[bos]['Inventory']['LINs']['RO'][LIN]['TotalRO'] += OPS; 
                            sourceData[bos]['Inventory']['LINs']['RO'][LIN]['RCF'] = RCF; sourceData[bos]['Inventory']['LINs']['RO'][LIN]['TotalRO'] += RCF;
                            sourceData[bos]['Inventory']['LINs']['RO'][LIN]['ORF'] = ORF; sourceData[bos]['Inventory']['LINs']['RO'][LIN]['TotalRO'] += ORF;
                            sourceData[bos]['Inventory']['LINs']['RO'][LIN]['Other_TDA'] = Other_TDA ; sourceData[bos]['Inventory']['LINs']['RO'][LIN]['TotalRO'] += Other_TDA;

                            sourceData[bos]['SelectedRoots'][root]['Inventory']['LINs'][LIN]['RO']['ACT_SETS'] = ACT_SETS; sourceData[bos]['SelectedRoots'][root]['Inventory']['LINs'][LIN]['RO']['TotalRO'] += ACT_SETS; 
                            sourceData[bos]['SelectedRoots'][root]['Inventory']['LINs'][LIN]['RO']['APS_OTOE'] = APS_OTOE; sourceData[bos]['SelectedRoots'][root]['Inventory']['LINs'][LIN]['RO']['TotalRO'] += APS_OTOE;
                            sourceData[bos]['SelectedRoots'][root]['Inventory']['LINs'][LIN]['RO']['WR'] = WR; sourceData[bos]['SelectedRoots'][root]['Inventory']['LINs'][LIN]['RO']['TotalRO'] += WR;
                            sourceData[bos]['SelectedRoots'][root]['Inventory']['LINs'][LIN]['RO']['WRA'] = WRA; sourceData[bos]['SelectedRoots'][root]['Inventory']['LINs'][LIN]['RO']['TotalRO'] += WRA;
                            sourceData[bos]['SelectedRoots'][root]['Inventory']['LINs'][LIN]['RO']['OPS'] = OPS; sourceData[bos]['SelectedRoots'][root]['Inventory']['LINs'][LIN]['RO']['TotalRO'] += OPS; 
                            sourceData[bos]['SelectedRoots'][root]['Inventory']['LINs'][LIN]['RO']['RCF'] = RCF; sourceData[bos]['SelectedRoots'][root]['Inventory']['LINs'][LIN]['RO']['TotalRO'] += RCF;
                            sourceData[bos]['SelectedRoots'][root]['Inventory']['LINs'][LIN]['RO']['ORF'] = ORF; sourceData[bos]['SelectedRoots'][root]['Inventory']['LINs'][LIN]['RO']['TotalRO'] += ORF;
                            sourceData[bos]['SelectedRoots'][root]['Inventory']['LINs'][LIN]['RO']['Other_TDA'] = Other_TDA; sourceData[bos]['SelectedRoots'][root]['Inventory']['LINs'][LIN]['RO']['TotalRO'] += Other_TDA;

    

                        }



                        //Global Level
                        if(SACSItem){

                            sourceData[bos]['Inventory']['RO']['TNG_Base_TDA'] += TNG_Base_TDA; sourceData[bos]['Inventory']['RO']['TotalRO'] += TNG_Base_TDA;
                            sourceData[bos]['Inventory']['RO']['COMPO_1_OTOE'] += RO_COMPO_1_OTOE; sourceData[bos]['Inventory']['RO']['TotalRO'] += RO_COMPO_1_OTOE;
                            sourceData[bos]['Inventory']['RO']['COMPO_2_OTOE'] += RO_COMPO_2_OTOE; sourceData[bos]['Inventory']['RO']['TotalRO'] += RO_COMPO_2_OTOE; 
                            sourceData[bos]['Inventory']['RO']['COMPO_3_OTOE'] += RO_COMPO_3_OTOE; sourceData[bos]['Inventory']['RO']['TotalRO'] += RO_COMPO_3_OTOE;
    

                        }

                        if(inventoryItem){

                            sourceData[bos]['Inventory']['RO']['ACT_SETS'] += ACT_SETS; sourceData[bos]['Inventory']['RO']['TotalRO'] += ACT_SETS; 
                            sourceData[bos]['Inventory']['RO']['APS_OTOE'] += APS_OTOE; sourceData[bos]['Inventory']['RO']['TotalRO'] += APS_OTOE;
                            sourceData[bos]['Inventory']['RO']['WR'] += WR; sourceData[bos]['Inventory']['RO']['TotalRO'] += WR;
                            sourceData[bos]['Inventory']['RO']['WRA'] += WRA; sourceData[bos]['Inventory']['RO']['TotalRO'] += WRA;
                            sourceData[bos]['Inventory']['RO']['OPS'] += OPS; sourceData[bos]['Inventory']['RO']['TotalRO'] += OPS; 
                            sourceData[bos]['Inventory']['RO']['RCF'] += RCF; sourceData[bos]['Inventory']['RO']['TotalRO'] += RCF;
                            sourceData[bos]['Inventory']['RO']['ORF'] += ORF; sourceData[bos]['Inventory']['RO']['TotalRO'] += ORF;
                            sourceData[bos]['Inventory']['RO']['Other_TDA'] += Other_TDA; sourceData[bos]['Inventory']['RO']['TotalRO'] += Other_TDA;
    

                        }




                    }

    


                }else{
                    



                    if(SACSItem){

                        sourceData[bos]['Inventory']['RO']['TNG_Base_TDA'] -= TNG_Base_TDA; 
                        sourceData[bos]['Inventory']['RO']['COMPO_1_OTOE'] -= RO_COMPO_1_OTOE; 
                        sourceData[bos]['Inventory']['RO']['COMPO_2_OTOE'] -= RO_COMPO_2_OTOE; 
                        sourceData[bos]['Inventory']['RO']['COMPO_3_OTOE'] -= RO_COMPO_3_OTOE; 



                    }

                    if(inventoryItem){

                        sourceData[bos]['Inventory']['RO']['ACT_SETS'] -= ACT_SETS; 
                        sourceData[bos]['Inventory']['RO']['APS_OTOE'] -= APS_OTOE; 
                        sourceData[bos]['Inventory']['RO']['WR'] -= WR; 
                        sourceData[bos]['Inventory']['RO']['WRA'] -= WRA; 
                        sourceData[bos]['Inventory']['RO']['OPS'] -= OPS; 
                        sourceData[bos]['Inventory']['RO']['RCF'] -= RCF; 
                        sourceData[bos]['Inventory']['RO']['ORF'] -= ORF; 
                        sourceData[bos]['Inventory']['RO']['Other_TDA'] -= Other_TDA;

                    }
                    

                    sourceData[bos]['Inventory']['RO']['TotalRO'] -= sourceData[bos]['Inventory']['LINs']['RO'][LIN]['TotalRO'];             
                    delete sourceData[bos]['Inventory']['LINs']['RO'][LIN];

                   
                }
                

                var obj = JSON.stringify(sourceData);
                sessionStorage.setItem('SourceData', obj);


            }
            catch(e){
                console.log(e);
            }


        },//createRO

        createSACS:function(bos, root, LIN, SACSItem, sourceData, checked){

            try{

                var SACS_Total = parseInt(SACSItem['SACS_Total']) || 0;



                if(checked){

                    if(SACSItem){

                        //LIN Level

                        if(sourceData[bos]['Inventory']['LINs']['SACS_TOTAL'][LIN]){
                            sourceData[bos]['Inventory']['LINs']['SACS_TOTAL'][LIN] += SACS_Total;


                        }else{
                            sourceData[bos]['Inventory']['LINs']['SACS_TOTAL'][LIN] = SACS_Total;

                        }


                       //Global Level
                       sourceData[bos]['Inventory']['SACS_TOTAL'] += SACS_Total;

                    }


                }else{

                    if(SACSItem){
                        sourceData[bos]['Inventory']['SACS_TOTAL'] -= SACS_Total; 
                        delete sourceData[bos]['Inventory']['LINs']['SACS_TOTAL'][LIN];

                    }

                    


                   
                }
                

                var obj = JSON.stringify(sourceData);
                sessionStorage.setItem('SourceData', obj);


            }
            catch(e){
                console.log(e);
            }


        },//createSACS

        download_AAO_APO_LINDOM:function(bos, LINDB, LINArr){
            try{  


              console.log('count ' + LINArr.length)
              console.log(bos)
              console.log(LINDB)
              console.log(LINArr)

              if(LINArr.length === 0) alert('NO LIN for\n'+ root +'');              
                
                    for(var i = LINArr.length - 1; i >= 0; i--){

                        var _LIN = LINArr[i];
                        var LINNOMEN = (LINDB({LIN:_LIN}).first()).LIN_NOMENCLATURE;
                        console.log(_LIN);
                        console.log(   LINNOMEN   )

                        //console.log(obj[LIN]['POM'])
                        jQuery('#LINLabel').empty();
                        jQuery('#LIN').prepend('<span id="'+_LIN+'"><input type="checkbox" class="'+_LIN+'" nomen="'+LINNOMEN+'"><label class='+_LIN+'>'+_LIN+' : '+LINNOMEN+'</label><br/></br/></span>');
                        

                    }


                
            }
            catch(e){
                console.log(e);
            }
    
            
        },//download_AAO_APO_LINDOM()

        addAAOItem:function(area, bos, portfolio, program){

            try{

                if (typeof(Storage) !== "undefined") {

                    //console.log('Add BOS');
                    //console.log(bos)
                    //console.log(rootArr);
                    //console.log(sourceData);


                    var sourceData = {};

                    //Areas
                    sourceData['Area'] = area;
                    sourceData['BOS'] = bos;
                    sourceData['Portfolio'] = portfolio;
                    sourceData['Program'] = program;

                    

                    //Appropriations
                    sourceData[bos] = {};



                    //AAO-APO Inventory & SACS
                    sourceData[bos]['Inventory'] = {};
                    sourceData[bos]['Inventory']['AAO'] = {};
                    sourceData[bos]['Inventory']['APO'] = {};
                    sourceData[bos]['Inventory']['ONHand'] = {};

                    
                    sourceData[bos]['Inventory']['LINs'] = {};
                    sourceData[bos]['Inventory']['LINs']['AAO'] = {};
                    sourceData[bos]['Inventory']['LINs']['APO'] = {};
                    sourceData[bos]['Inventory']['LINs']['ONHand'] = {};
                    sourceData[bos]['Inventory']['LINs']['SACS_TOTAL'] = {};



                    sourceData[bos]['Inventory']['AAO']['TotalAAO'] = 0;
                    sourceData[bos]['Inventory']['APO']['TotalAPO'] = 0;
                    sourceData[bos]['Inventory']['ONHand']['TotalONHand'] = 0;
                    sourceData[bos]['Inventory']['SACS_TOTAL'] = 0;


                    sourceData[bos]['Inventory']['AAO']['TNG_Base_TDA'] = 0;
                    sourceData[bos]['Inventory']['AAO']['COMPO_1_OTOE'] = 0;
                    sourceData[bos]['Inventory']['AAO']['COMPO_2_OTOE'] = 0;
                    sourceData[bos]['Inventory']['AAO']['COMPO_3_OTOE'] = 0;
                    sourceData[bos]['Inventory']['AAO']['ACT_SETS'] = 0;
                    sourceData[bos]['Inventory']['AAO']['APS_OTOE'] = 0;
                    sourceData[bos]['Inventory']['AAO']['WR'] = 0;
                    sourceData[bos]['Inventory']['AAO']['WRA'] = 0;
                    sourceData[bos]['Inventory']['AAO']['OPS'] = 0;
                    sourceData[bos]['Inventory']['AAO']['RCF'] = 0;
                    sourceData[bos]['Inventory']['AAO']['ORF'] = 0;
                    sourceData[bos]['Inventory']['AAO']['Other_TDA'] = 0;

                    sourceData[bos]['Inventory']['APO']['TNG_Base_TDA'] = 0;
                    sourceData[bos]['Inventory']['APO']['COMPO_1_OTOE'] = 0;
                    sourceData[bos]['Inventory']['APO']['COMPO_2_OTOE'] = 0;
                    sourceData[bos]['Inventory']['APO']['COMPO_3_OTOE'] = 0;
                    sourceData[bos]['Inventory']['APO']['ACT_SETS'] = 0;
                    sourceData[bos]['Inventory']['APO']['APS_OTOE'] = 0;
                    sourceData[bos]['Inventory']['APO']['WR'] = 0;
                    sourceData[bos]['Inventory']['APO']['WRA'] = 0;
                    sourceData[bos]['Inventory']['APO']['OPS'] = 0;
                    sourceData[bos]['Inventory']['APO']['RCF'] = 0;
                    sourceData[bos]['Inventory']['APO']['ORF'] = 0;
                    sourceData[bos]['Inventory']['APO']['Other_TDA'] = 0;

                    sourceData[bos]['Inventory']['ONHand']['TNG_Base_TDA'] = 0;
                    sourceData[bos]['Inventory']['ONHand']['COMPO_1_OTOE'] = 0;
                    sourceData[bos]['Inventory']['ONHand']['COMPO_2_OTOE'] = 0;
                    sourceData[bos]['Inventory']['ONHand']['COMPO_3_OTOE'] = 0;
                    sourceData[bos]['Inventory']['ONHand']['ACT_SETS'] = 0;
                    sourceData[bos]['Inventory']['ONHand']['APS_OTOE'] = 0;
                    sourceData[bos]['Inventory']['ONHand']['WR'] = 0;
                    sourceData[bos]['Inventory']['ONHand']['WRA'] = 0;
                    sourceData[bos]['Inventory']['ONHand']['OPS'] = 0;
                    sourceData[bos]['Inventory']['ONHand']['RCF'] = 0;
                    sourceData[bos]['Inventory']['ONHand']['ORF'] = 0;
                    sourceData[bos]['Inventory']['ONHand']['Other_TDA'] = 0;




                    var obj = JSON.stringify(sourceData);
                    sessionStorage.setItem('SourceData', obj);
                    


    
    
                } else {
                    console.log('storage not supported');
                }
    

            }
            catch(e){
                console.log(e);
            }

        },





        APPNDOM:function(appnData, FYs, tag, pomTag){

            try{

                //console.log(appnData)downloadProgramPOMAllo
                
                
                //var editor = appnData.Editor.Title || "";
                //var modified = moment(appnData.Modified).format('MMMM Do YYYY, h:mm:ss a') || "";
                var pom = appnData['POM'];

                for(var i = 0; i < FYs.length; i++){
                    if(FYs[i].OData__x0050_2){//USE SITE COLUMN WHEN IMPORTING FROM ACCESS
        
                        var fystr = 'FY'+ FYs[i].OData__x0050_2;//USE SITE COLUMN WHEN IMPORTING FROM ACCESS
                        var fy = FYs[i].OData__x0050_2;
                        var sum = appnData[fystr];


                        //console.log(fystr + ' : ' + sum)
                        


                        //console.log(fystr)
                        //console.log(sum)
                        //console.log(appnData['OData__x0066_y'+fy])
                        //console.log(sourceData[bos]['RDTE'][fystr].SUM)

                        

                        if(tag !== 'quantityfy'){
                            //console.log(tag + ' : ' + pomTag + ' : ' + fystr)

                            var fysum = jQuery("#"+tag+""+fy+"").val('$'+sum);
                            var pomVal = jQuery("#"+pomTag+"").val('$'+pom);
    

                        }else{
                            //console.log(tag + ' : ' + pomTag + ' : ' + fystr)

                            var fysum = jQuery("#"+tag+""+fy+"").val(sum);
                            var pomVal = jQuery("#"+pomTag+"").val(pom);
    
                        }





                    }
                }





               
            }
            catch(e){
                console.log(e);
            }
    
    
    
        },//APPNDOM


        updateProgramPOMAllo: function (bos, itemID, list, appn, sourceData, FYs) {

            try{


                        console.log('Update ' + list)

                        var POMPeriod  = sourceData[bos][appn]['POM'];
                        console.log('POM Period ' + POMPeriod)


                        var ctx = _spPageContextInfo.webAbsoluteUrl; 
                        var clientContext = new SP.ClientContext(ctx);
                        var oList =  clientContext.get_web().get_lists().getByTitle(list);//MILTECH
                        var oListItem = oList.getItemById(itemID);  



                        
                        
                        oListItem.set_item('POMPeriod', POMPeriod)




                        for(var i = 0; i < FYs.length; i++){
                            if(FYs[i].OData__x0050_2){//USE SITE COLUMN WHEN IMPORTING FROM ACCESS
                
                                var fystr = 'FY'+ FYs[i].OData__x0050_2;//USE SITE COLUMN WHEN IMPORTING FROM ACCESS
                                var fy = FYs[i].OData__x0050_2;
                                var sum = sourceData[bos][appn][fystr];

                                oListItem.set_item('_x0046_Y'+fy+'',sum);
                            }
                        }

                        oListItem.update();                 
                        clientContext.load(oListItem);	       
                        clientContext.executeQueryAsync(onRequestSucceeded, onRequestFailed);

                            function onRequestSucceeded() {
                                console.log('success')
                                


                            }
      
                            function onRequestFailed(sender, args) {
                                    console.log('Request failed. ' + args.get_message() + 
                                        '\n' + args.get_stackTrace());
                            }

                            
                            

                        



            }
            catch(e){

                console.log(e);

            }

        },//updateProgramPOMAllo

        updateProgramQuantity: function (bos, itemID, list, appn, sourceData, FYs) {

            try{


                        console.log('Update ' + list)


                        
                        var POMPeriod  = sourceData[bos][appn]['POM'];
                        console.log('POM Period ' + POMPeriod)


                        var ctx = _spPageContextInfo.webAbsoluteUrl; 
                        var clientContext = new SP.ClientContext(ctx);
                        var oList =  clientContext.get_web().get_lists().getByTitle(list);//MILTECH
                        var oListItem = oList.getItemById(itemID);  



                        
                        
                        oListItem.set_item('POMPeriod', POMPeriod)


                        

                        for(var i = 0; i < FYs.length; i++){
                            if(FYs[i].OData__x0050_2){//USE SITE COLUMN WHEN IMPORTING FROM ACCESS
                
                                var fystr = 'FY'+ FYs[i].OData__x0050_2;//USE SITE COLUMN WHEN IMPORTING FROM ACCESS
                                var fy = FYs[i].OData__x0050_2;
                                var sum = sourceData[bos][appn][fystr];

                                console.log('PQty'+fystr+'')
                                oListItem.set_item('PQty'+fystr+'',sum);
                            }
                        }

                        oListItem.update();                 
                        clientContext.load(oListItem);	       
                        clientContext.executeQueryAsync(onRequestSucceeded, onRequestFailed);

                            function onRequestSucceeded() {
                                console.log('PROCUREMENT QUANTITIES UPDATED.')
                                


                            }
      
                            function onRequestFailed(sender, args) {
                                    console.log('Request failed. ' + args.get_message() + 
                                        '\n' + args.get_stackTrace());
                            }

                            
                            

                     



            }
            catch(e){

                console.log(e);

            }

        },//updateProgramQuantity



        updateBOSROOT: function (bos, itemID, list, appn, sourceData, FYs) {

            try{


                        console.log('Update ' + list)

                        var POMPeriod  = sourceData[bos][appn]['POM'];
                        console.log('POM Period ' + POMPeriod)


                        var ctx = _spPageContextInfo.webAbsoluteUrl; 
                        var clientContext = new SP.ClientContext(ctx);
                        var oList =  clientContext.get_web().get_lists().getByTitle(list);//MILTECH
                        var oListItem = oList.getItemById(itemID);  



                        
                        
                        oListItem.set_item('POMPeriod', POMPeriod)




                        for(var i = 0; i < FYs.length; i++){
                            if(FYs[i].OData__x0050_2){//USE SITE COLUMN WHEN IMPORTING FROM ACCESS
                
                                var fystr = 'FY'+ FYs[i].OData__x0050_2;//USE SITE COLUMN WHEN IMPORTING FROM ACCESS
                                var fy = FYs[i].OData__x0050_2;
                                var sum = sourceData[bos][appn][fystr];

                                oListItem.set_item('_x0046_Y'+fy+'',sum);
                            }
                        }

                        oListItem.update();                 
                        clientContext.load(oListItem);	       
                        clientContext.executeQueryAsync(onRequestSucceeded, onRequestFailed);

                            function onRequestSucceeded() {
                                console.log('success')
                                


                            }
      
                            function onRequestFailed(sender, args) {
                                    console.log('Request failed. ' + args.get_message() + 
                                        '\n' + args.get_stackTrace());
                            }

                            
                            

                        



            }
            catch(e){

                console.log(e);

            }

        },//updateBOSROOT

        load_AAO_APO_Allo:function(bos, LIN, sourceData, AAO, APO, checked){  
            try{  

                console.log('Load LIN Allo')
                //console.log(bos + ' : ' + root + ' : ' + LIN)
                //console.log(sourceData)

                //console.log('previous root ' + previousRoot)




                
                if(checked){

                    var totalAAO = "";
                    var totalAPO = "";
                    var SACS = "";
                    var nomen = "";
                    var onHand = "";


                    if(sourceData[bos]['Inventory']['LINs']['AAO'][LIN]){
                        console.log(AAO)

                        nomen = AAO[0]['LIN_NOMENCLATURE'];
                        totalAAO = sourceData[bos]['Inventory']['LINs']['AAO'][LIN]['TotalAAO'] || "";
                        var SACS = sourceData[bos]['Inventory']['LINs']['AAO'][LIN]['SACS_TOTAL'] || "";
                        onHand = sourceData[bos]['Inventory']['LINs']['ONHand'][LIN]['TotalONHand'] || "";


                    }

                    if(sourceData[bos]['Inventory']['LINs']['APO'][LIN]){
                        console.log(APO)
                        nomen = APO[0]['LIN_NOMENCLATURE'];
                        totalAPO = sourceData[bos]['Inventory']['LINs']['APO'][LIN]['TotalAPO'] || "";
                        console.log(totalAPO)
    

                    }


                    console.log('LIN:  ' + LIN)
                    console.log('total AAO: ' + totalAAO)
                    console.log('On Hand: ' + onHand)
                    console.log('SACS: ' + SACS)


                    jQuery("#LINTable").append('<tr id="'+LIN+'rowDisp">');
                    jQuery("#"+LIN+"rowDisp").append('<td><span>'+LIN+'</span></td>');
                    jQuery("#"+LIN+"rowDisp").append('<td><span>'+nomen+'</span></td>');
                    jQuery("#"+LIN+"rowDisp").append('<td><span>'+totalAAO+'</span></td>');
                    jQuery("#"+LIN+"rowDisp").append('<td><span>'+totalAPO+'</span></td>');
                    jQuery("#"+LIN+"rowDisp").append('<td><span>'+onHand+'</span></td>');
                    jQuery("#"+LIN+"rowDisp").append('<td><span>'+SACS+'</span></td>');






                    
                    //var nomen = (sourceData[bos]['Inventory']['LINs']['Quantity']['LINs'][LIN]) ? sourceData[bos]['SelectedRoots'][root]['Quantity']['LINs'][LIN]['NOMEN'] : "";
                    
                    /*var aao = (sourceData[bos]['Inventory']['LINs']['AAO'][LIN])? sourceData[bos]['Inventory']['LINs']['AAO'][LIN]['TotalAAO'] : 0;
                    var apo = (sourceData[bos]['Inventory']['LINs']['APO'][LIN]) ? sourceData[bos]['Inventory']['LINs']['APO'][LIN]['TotalAPO'] : 0;
                    var onHand = (sourceData[bos]['Inventory']['LINs']['RO'][LIN]) ? sourceData[bos]['Inventory']['LINs']['RO'][LIN]['TOTALRO'] : 0;
                    var sacs = (sourceData[bos]['Inventory']['LINs']['SACS_TOTAL'][LIN]) ? sourceData[bos]['Inventory']['LINs']['SACS_TOTAL'][LIN] :  0;
    

                    jQuery("#LINTable").append('<tr id="'+LIN+'rowDisp">')
                    jQuery("#"+LIN+"rowDisp").append('<td><span>'+LIN+'</span></td>');
                    jQuery("#"+LIN+"rowDisp").append('<td><span>'+nomen+'</span></td>');
                    jQuery("#"+LIN+"rowDisp").append('<td><span>'+aao+'</span></td>');
                    jQuery("#"+LIN+"rowDisp").append('<td><span>'+apo+'</span></td>');
                    jQuery("#"+LIN+"rowDisp").append('<td><span>'+onHand+'</span></td>');
                    jQuery("#"+LIN+"rowDisp").append('<td><span>'+sacs+'</span></td>');

                    */
        

                    

                        
                    }else{

                        //console.log('clear')
                        //console.log(jQuery("#"+LIN+"LINallo"))
                        jQuery("#"+LIN+"rowDisp").remove();


                    }


                var obj = JSON.stringify(sourceData);
                sessionStorage.setItem('SourceData', obj);

            }
            catch(e){
                console.log(e);
            }
   
       
        },//load_AAO_APO_Allo



        drawLINAllo:function(bos, root, LIN, sum, pom, sourceData){

            try{

                console.log('draw allo')

                var nomen = (sourceData[bos]['SelectedRoots'][root]['Quantity']['LINs'][LIN]) ? sourceData[bos]['SelectedRoots'][root]['Quantity']['LINs'][LIN]['NOMEN'] : "";
                var aao = (sourceData[bos]['Inventory']['LINs']['AAO'][LIN])? sourceData[bos]['Inventory']['LINs']['AAO'][LIN]['TotalAAO'] : 0;
                var apo = (sourceData[bos]['Inventory']['LINs']['APO'][LIN]) ? sourceData[bos]['Inventory']['LINs']['APO'][LIN]['TotalAPO'] : 0;
                var ro = (sourceData[bos]['Inventory']['LINs']['RO'][LIN]) ? sourceData[bos]['Inventory']['LINs']['RO'][LIN]['TOTALRO'] : 0;
                var sacs = (sourceData[bos]['Inventory']['LINs']['SACS_TOTAL'][LIN]) ? sourceData[bos]['Inventory']['LINs']['SACS_TOTAL'][LIN] :  0;

                




                jQuery("#LINTable").append('<tr id="'+LIN+'rowDisp">')
                jQuery("#"+LIN+"rowDisp").append('<td><span>'+root+'</span></td>');
                jQuery("#"+LIN+"rowDisp").append('<td><span>'+LIN+'</span></td>');
                jQuery("#"+LIN+"rowDisp").append('<td><span>'+sum+'</span></td>');
                jQuery("#"+LIN+"rowDisp").append('<td><span>'+nomen+'</span></td>');
                jQuery("#"+LIN+"rowDisp").append('<td><span>'+aao+'</span></td>');
                jQuery("#"+LIN+"rowDisp").append('<td><span>'+apo+'</span></td>');
                jQuery("#"+LIN+"rowDisp").append('<td><span>'+ro+'</span></td>');
                jQuery("#"+LIN+"rowDisp").append('<td><span>'+sacs+'</span></td>');


                //jQuery("#"+LIN+"rowDisp").append('<td><span><input type="checkbox" id="'+LIN+'all"></span></td></td>');






            }
            catch(e){
                console.log(e)
            }

        },//drawLINAllo

        countAAO:function(bos, LIN, AAO, sourceData, checked){

            try{

                console.log('AAO length ' + AAO.length)

                if(AAO.length > 0){

                    //console.log('count AAO')
                    //console.log(AAO)



                    var AAODB = TAFFY(AAO);//Work on Getting the Max AAO Values Via TAFFY DB to GET Item to Use(Optimization)
                    var AAOItem = AAODB().filter({AS_OF_DATE:AAODB().max("AS_OF_DATE")}).first();
                    console.log(AAOItem)

                    /*

                    var dateArr = AAODB().select("AS_OF_DATE");
                    
                    var millArr = [];

                    console.log(dateArr)
                    for(var i = 0; i < dateArr.length; i++){//Convert to Milliseconds
                        var mill = moment(dateArr[i]).valueOf();
                        millArr.push(mill)

                        //console.log(mill)
                    }
                    //console.log(millArr);

                    //Ref: https://stackoverflow.com/questions/840781/get-all-non-unique-values-i-e-duplicate-more-than-one-occurrence-in-an-array?page=1&tab=votes#tab-top
                    var sorted_arr = millArr.slice().sort(); // You can define the comparing function here. 
                                                            // JS by default uses a crappy string compare.
                                                           // (we use slice to clone the array so the
                                                          // original array won't be modified)
                    var results = [];
                    for (var i = 0; i < sorted_arr.length - 1; i++) {
                        if (sorted_arr[i + 1] == sorted_arr[i]) {
                            results.push(sorted_arr[i]);
                        }
                    }

                    //console.log(results);

                    if(results.length > 0){

                        for(var i = 0; i < results.length; i++){//Iterate through duplicates
                            var mill = results[i];
                            var _date = moment(mill).format();
                            var _dateStr = _date.split('T')[0];
    
                            console.log(mill)
                            console.log(_dateStr)
    
    
                            //{column:{has:value}} 
                            //console.log( AAODB() )
                            console.log( AAODB({AS_OF_DATE:_dateStr}).first() )
    
                            //console.log( AAODB().select(_date) )
    
                            
                        }
    



                    }

                    */


                    

                    

                    

                    if(AAO.length > 1){//Check Dates

                        
                        var dateArr = AAODB().select("AS_OF_DATE");
                        var testDate = moment(dateArr[0]).isSame(dateArr[1]);

                        console.log(dateArr)

                        if(testDate){//If same date use item with larger sum(Optimize Algorithm for More than 2 items)


                            var totalAAO1 = math.sum([AAO[0].TRAINING_BASE,AAO[0].ACTIVE_OTOE,AAO[0].ARNG_OTOE,AAO[0].USAR_OTOE,AAO[0].ACT_SETS,AAO[0].APS_OTOE,AAO[0].WR,AAO[0].WRA,AAO[0].OPS,AAO[0].RCF,AAO[0].ORF,AAO[0].OTHER_TDA])
                            var totalAAO2 = math.sum([AAO[1].TRAINING_BASE,AAO[1].ACTIVE_OTOE,AAO[1].ARNG_OTOE,AAO[1].USAR_OTOE,AAO[1].ACT_SETS,AAO[1].APS_OTOE,AAO[1].WR,AAO[1].WRA,AAO[1].OPS,AAO[1].RCF,AAO[1].ORF,AAO[1].OTHER_TDA])
    
                            if(totalAAO1 > totalAAO2){
                                AAOItem = AAO[0];
    
                            }else if(totalAAO1 < totalAAO2){
                                AAOItem = AAO[1];
    
    
                            }

                            //console.log('sum1 ' + totalAAO1)
                            //console.log('sum2 ' + totalAAO2)
    

                        }else{//Use item with latest date
                            AAOItem = AAODB().filter({AS_OF_DATE:AAODB().max("AS_OF_DATE")}).first();
                        }


                    }else if (AAO.length == 1){//Use unique item 
                        AAOItem = AAO[0];



                    }


                    
                    
    
                    
                    //console.log(AAOItem)

                    /*
                    
                    
                    var TNG_Base_TDA = AAOItem.TRAINING_BASE || 0;
                    var AAO_COMPO_1_OTOE = AAOItem.ACTIVE_OTOE || 0;
                    var AAO_COMPO_2_OTOE = AAOItem.ARNG_OTOE || 0;
                    var AAO_COMPO_3_OTOE = AAOItem.USAR_OTOE || 0;
    
                    var ACT_SETS = AAOItem.ACT_SETS || 0;
                    var APS_OTOE = AAOItem.APS_OTOE || 0;
                    var WR = AAOItem.WR || 0;
                    var WRA = AAOItem.WRA || 0;
                    var OPS = AAOItem.OPS || 0;
                    var RCF = AAOItem.RCF || 0;
                    var ORF = AAOItem.ORF || 0;
                    var Other_TDA = AAOItem.OTHER_TDA || 0;
    
                    //OnHand
                    var AAO_INVENTORY_ACTIVE = AAOItem.INVENTORY_ACTIVE || 0;
                    var AAO_INVENTORY_ARNG = AAOItem.INVENTORY_ARNG || 0;
                    var AAO_INVENTORY_USAR = AAOItem.INVENTORY_USAR || 0;
                    var AAO_INVENTORY_APS = AAOItem.INVENTORY_USAR || 0;
                    var onHand = AAOItem.ARMY_INVENTORY_TOTAL || 0;
    
                    //SACS
                    var SACS = AAOItem.SACS1809_ARMY_OTOE || 0;
                
                    var totalAAO = math.sum([TNG_Base_TDA,AAO_COMPO_1_OTOE,AAO_COMPO_2_OTOE,AAO_COMPO_3_OTOE,ACT_SETS,APS_OTOE,WR,WRA,OPS,RCF,ORF,Other_TDA])

                    //console.log(AAO_COMPO_1_OTOE)
                    
                    */
                    
                    /*

                    if(checked){

                        //LIN Level
                            sourceData[bos]['Inventory']['LINs']['AAO'][LIN] = {};
                            sourceData[bos]['Inventory']['LINs']['AAO'][LIN]['TotalAAO'] += totalAAO;  

                            sourceData[bos]['Inventory']['LINs']['ONHand'][LIN] = {};
                            sourceData[bos]['Inventory']['LINs']['ONHand'][LIN]['TotalONHand'] += onHand;  


                            //sourceData[bos]['SelectedRoots'][root]['Inventory']['LINs'][LIN] = {};
                            //sourceData[bos]['SelectedRoots'][root]['Inventory']['LINs'][LIN]['AAO'] = {};
                            //sourceData[bos]['SelectedRoots'][root]['Inventory']['LINs'][LIN]['AAO']['TotalAAO'] = totalAAO;

                            //sourceData[bos]['SelectedRoots'][root]['Inventory']['LINs'][LIN]['ONHand'] = {};
                            //sourceData[bos]['SelectedRoots'][root]['Inventory']['LINs'][LIN]['ONHand']['TotalONHand'] = onHand;

    


                            //Global Level
                            sourceData[bos]['Inventory']['AAO']['TNG_Base_TDA'] += TNG_Base_TDA; 
                            sourceData[bos]['Inventory']['AAO']['COMPO_1_OTOE'] += AAO_COMPO_1_OTOE; 
                            sourceData[bos]['Inventory']['AAO']['COMPO_2_OTOE'] += AAO_COMPO_2_OTOE; 
                            sourceData[bos]['Inventory']['AAO']['COMPO_3_OTOE'] += AAO_COMPO_3_OTOE; 
                            sourceData[bos]['Inventory']['AAO']['ACT_SETS'] += ACT_SETS; 
                            sourceData[bos]['Inventory']['AAO']['APS_OTOE'] += APS_OTOE; 
                            sourceData[bos]['Inventory']['AAO']['WR'] += WR; 
                            sourceData[bos]['Inventory']['AAO']['WRA'] += WRA;
                            sourceData[bos]['Inventory']['AAO']['OPS'] += OPS;  
                            sourceData[bos]['Inventory']['AAO']['RCF'] += RCF; 
                            sourceData[bos]['Inventory']['AAO']['ORF'] += ORF; 
                            sourceData[bos]['Inventory']['AAO']['Other_TDA'] += Other_TDA; 
                            sourceData[bos]['Inventory']['AAO']['TotalAAO'] += totalAAO;
                            sourceData[bos]['Inventory']['SACS_TOTAL'] += SACS;



                            
    
    
                            //LIN Level
                            sourceData[bos]['Inventory']['LINs']['AAO'][LIN]['TNG_Base_TDA'] = TNG_Base_TDA; 
                            sourceData[bos]['Inventory']['LINs']['AAO'][LIN]['COMPO_1_OTOE'] = AAO_COMPO_1_OTOE; 
                            sourceData[bos]['Inventory']['LINs']['AAO'][LIN]['COMPO_2_OTOE'] = AAO_COMPO_2_OTOE; 
                            sourceData[bos]['Inventory']['LINs']['AAO'][LIN]['COMPO_3_OTOE'] = AAO_COMPO_3_OTOE; 
                            sourceData[bos]['Inventory']['LINs']['AAO'][LIN]['ACT_SETS'] = ACT_SETS; 
                            sourceData[bos]['Inventory']['LINs']['AAO'][LIN]['APS_OTOE'] = APS_OTOE; 
                            sourceData[bos]['Inventory']['LINs']['AAO'][LIN]['WR'] = WR; 
                            sourceData[bos]['Inventory']['LINs']['AAO'][LIN]['WRA'] = WRA; 
                            sourceData[bos]['Inventory']['LINs']['AAO'][LIN]['OPS'] = OPS;
                            sourceData[bos]['Inventory']['LINs']['AAO'][LIN]['RCF'] = RCF;
                            sourceData[bos]['Inventory']['LINs']['AAO'][LIN]['ORF'] = ORF;
                            sourceData[bos]['Inventory']['LINs']['AAO'][LIN]['Other_TDA'] = Other_TDA; 
                            sourceData[bos]['Inventory']['LINs']['AAO'][LIN]['TotalAAO'] = totalAAO;
                            sourceData[bos]['Inventory']['LINs']['AAO'][LIN]['SACS_TOTAL'] = SACS;



    
                            
                            //ONHAND

                            //Global Level
                            //sourceData[bos]['Inventory']['ONHand']['TNG_Base_TDA'] += TNG_Base_TDA; 
                            sourceData[bos]['Inventory']['ONHand']['COMPO_1_OTOE'] += AAO_INVENTORY_ACTIVE;
                            sourceData[bos]['Inventory']['ONHand']['COMPO_2_OTOE'] += AAO_INVENTORY_ARNG;
                            sourceData[bos]['Inventory']['ONHand']['COMPO_3_OTOE'] += AAO_INVENTORY_USAR; 
                            //sourceData[bos]['Inventory']['ONHand']['ACT_SETS'] += ACT_SETS; 
                            sourceData[bos]['Inventory']['ONHand']['APS_OTOE'] += AAO_INVENTORY_APS; 
                            //sourceData[bos]['Inventory']['ONHand']['WR'] += WR; 
                            //sourceData[bos]['Inventory']['ONHand']['WRA'] += WRA;
                            //sourceData[bos]['Inventory']['ONHand']['OPS'] += OPS;  
                            //sourceData[bos]['Inventory']['ONHand']['RCF'] += RCF; 
                            //sourceData[bos]['Inventory']['ONHand']['ORF'] += ORF; 
                            //sourceData[bos]['Inventory']['ONHand']['Other_TDA'] += Other_TDA; 
                            sourceData[bos]['Inventory']['ONHand']['TotalONHand'] += onHand;


                            //LIN Level
                            //sourceData[bos]['Inventory']['LINs']['ONHand'][LIN]['TNG_Base_TDA'] = TNG_Base_TDA; 
                            sourceData[bos]['Inventory']['LINs']['ONHand'][LIN]['COMPO_1_OTOE'] = AAO_INVENTORY_ACTIVE; 
                            sourceData[bos]['Inventory']['LINs']['ONHand'][LIN]['COMPO_2_OTOE'] = AAO_INVENTORY_ARNG; 
                            sourceData[bos]['Inventory']['LINs']['ONHand'][LIN]['COMPO_3_OTOE'] = AAO_INVENTORY_USAR; 
                            //sourceData[bos]['Inventory']['LINs']['ONHand'][LIN]['ACT_SETS'] = ACT_SETS; 
                            sourceData[bos]['Inventory']['LINs']['ONHand'][LIN]['APS_OTOE'] = AAO_INVENTORY_APS; 
                            //sourceData[bos]['Inventory']['LINs']['ONHand'][LIN]['WR'] = WR; 
                            //sourceData[bos]['Inventory']['LINs']['ONHand'][LIN]['WRA'] = WRA; 
                            //sourceData[bos]['Inventory']['LINs']['ONHand'][LIN]['OPS'] = OPS;
                            //sourceData[bos]['Inventory']['LINs']['ONHand'][LIN]['RCF'] = RCF;
                            //sourceData[bos]['Inventory']['LINs']['ONHand'][LIN]['ORF'] = ORF;
                            //sourceData[bos]['Inventory']['LINs']['ONHand'][LIN]['Other_TDA'] = Other_TDA; 
                            sourceData[bos]['Inventory']['LINs']['ONHand'][LIN]['TotalONHand'] = onHand;


                            //sourceData[bos]['SelectedRoots'][root]['Inventory']['LINs'][LIN]['ONHand']['TNG_Base_TDA'] = TNG_Base_TDA; 
                            //sourceData[bos]['SelectedRoots'][root]['Inventory']['LINs'][LIN]['ONHand']['COMPO_1_OTOE'] = AAO_INVENTORY_ACTIVE;  
                            //sourceData[bos]['SelectedRoots'][root]['Inventory']['LINs'][LIN]['ONHand']['COMPO_2_OTOE'] = AAO_INVENTORY_ARNG;  
                            //sourceData[bos]['SelectedRoots'][root]['Inventory']['LINs'][LIN]['ONHand']['COMPO_3_OTOE'] = AAO_INVENTORY_USAR;  
                            //ourceData[bos]['SelectedRoots'][root]['Inventory']['LINs'][LIN]['ONHand']['ACT_SETS'] = ACT_SETS; 
                            //sourceData[bos]['SelectedRoots'][root]['Inventory']['LINs'][LIN]['ONHand']['APS_OTOE'] = AAO_INVENTORY_APS; 
                            //sourceData[bos]['SelectedRoots'][root]['Inventory']['LINs'][LIN]['ONHand']['WR'] = WR; 
                            //sourceData[bos]['SelectedRoots'][root]['Inventory']['LINs'][LIN]['ONHand']['WRA'] = WRA; 
                            //sourceData[bos]['SelectedRoots'][root]['Inventory']['LINs'][LIN]['ONHand']['OPS'] = OPS; 
                            //sourceData[bos]['SelectedRoots'][root]['Inventory']['LINs'][LIN]['ONHand']['RCF'] = RCF; 
                            //sourceData[bos]['SelectedRoots'][root]['Inventory']['LINs'][LIN]['ONHand']['ORF'] = ORF; 
                            //sourceData[bos]['SelectedRoots'][root]['Inventory']['LINs'][LIN]['ONHand']['Other_TDA'] = Other_TDA; 
                            //sourceData[bos]['SelectedRoots'][root]['Inventory']['LINs'][LIN]['ONHand']['TotalONHand'] = onHand;
    
    

    
    
                    }else{
                        
    
    
    
                            //AAO
                            sourceData[bos]['Inventory']['AAO']['TNG_Base_TDA'] -= TNG_Base_TDA; 
                            sourceData[bos]['Inventory']['AAO']['COMPO_1_OTOE'] -= AAO_COMPO_1_OTOE; 
                            sourceData[bos]['Inventory']['AAO']['COMPO_2_OTOE'] -= AAO_COMPO_2_OTOE; 
                            sourceData[bos]['Inventory']['AAO']['COMPO_3_OTOE'] -= AAO_COMPO_3_OTOE; 
                            sourceData[bos]['Inventory']['AAO']['ACT_SETS'] -= ACT_SETS; 
                            sourceData[bos]['Inventory']['AAO']['APS_OTOE'] -= APS_OTOE; 
                            sourceData[bos]['Inventory']['AAO']['WR'] -= WR; 
                            sourceData[bos]['Inventory']['AAO']['WRA'] -= WRA; 
                            sourceData[bos]['Inventory']['AAO']['OPS'] -= OPS; 
                            sourceData[bos]['Inventory']['AAO']['RCF'] -= RCF; 
                            sourceData[bos]['Inventory']['AAO']['ORF'] -= ORF; 
                            sourceData[bos]['Inventory']['AAO']['Other_TDA'] -= Other_TDA;
                            sourceData[bos]['Inventory']['AAO']['TotalAAO'] -= totalAAO;
                            sourceData[bos]['Inventory']['SACS_TOTAL'] -= SACS;



                            //ONHAND
                            sourceData[bos]['Inventory']['ONHand']['COMPO_1_OTOE'] -= AAO_INVENTORY_ACTIVE;
                            sourceData[bos]['Inventory']['ONHand']['COMPO_2_OTOE'] -= AAO_INVENTORY_ARNG;
                            sourceData[bos]['Inventory']['ONHand']['COMPO_3_OTOE'] -= AAO_INVENTORY_USAR; 
                            //sourceData[bos]['Inventory']['ONHand']['ACT_SETS'] -= ACT_SETS; 
                            sourceData[bos]['Inventory']['ONHand']['APS_OTOE'] -= AAO_INVENTORY_APS; 
                            //sourceData[bos]['Inventory']['ONHand']['WR'] -= WR; 
                            //sourceData[bos]['Inventory']['ONHand']['WRA'] -= WRA;
                            //sourceData[bos]['Inventory']['ONHand']['OPS'] -= OPS;  
                            //sourceData[bos]['Inventory']['ONHand']['RCF'] -= RCF; 
                            //sourceData[bos]['Inventory']['ONHand']['ORF'] -= ORF; 
                            //sourceData[bos]['Inventory']['ONHand']['Other_TDA'] -= Other_TDA; 
                            sourceData[bos]['Inventory']['ONHand']['TotalONHand'] -= onHand;


                            delete sourceData[bos]['Inventory']['LINs']['AAO'][LIN];
                            delete sourceData[bos]['Inventory']['LINs']['ONHand'][LIN];
                            //delete sourceData[bos]['SelectedRoots'][root]['Inventory']['LINs'][LIN];

    
                       
                    }
                    
                    
                    */
    
    


                }
                





                var obj = JSON.stringify(sourceData);
                sessionStorage.setItem('SourceData', obj);


            }
            catch(e){
                console.log(e);
            }


        },//countAAO

        countAPO:function(bos, LIN, APO, sourceData, checked){

            try{

                //console.log('APO length ' + APO.length)

                if(APO.length > 0){

                    //console.log('count APO')
                    //console.log(APO)



                    var APODB = TAFFY(APO);
                    var APOItem = APODB().filter({AS_OF_DATE:APODB().max("AS_OF_DATE")}).first();

                    

                    /*if(APO.length === 2){//Check Dates


                        
                        var dateArr = APODB().select("AS_OF_DATE");
                        var testDate = moment(dateArr[0]).isSame(dateArr[1]);

                        if(testDate){//If same date use item with larger sum(Optimize Algorithm for More than 2 items)
                            var totalAPO1 = math.sum([APO[0].TRAINING_BASE,APO[0].ACTIVE_OTOE,APO[0].ARNG_OTOE,APO[0].USAR_OTOE,APO[0].ACT_SETS,APO[0].APS_OTOE,APO[0].WR,APO[0].WRA,APO[0].OPS,APO[0].RCF,APO[0].ORF,APO[0].OTHER_TDA])
                            var totalAPO2 = math.sum([APO[1].TRAINING_BASE,APO[1].ACTIVE_OTOE,APO[1].ARNG_OTOE,APO[1].USAR_OTOE,APO[1].ACT_SETS,APO[1].APS_OTOE,APO[1].WR,APO[1].WRA,APO[1].OPS,APO[1].RCF,APO[1].ORF,APO[1].OTHER_TDA])
    
                            if(totalAPO1 > totalAPO2){
                                APOItem = APO[0];
    
                            }else if(totalAPO1 < totalAPO2){
                                APOItem = APO[1];
    
    
                            }

                            //console.log('sum1 ' + totalAPO1)
                            //console.log('sum2 ' + totalAPO2)
    

                        }else{//Use item with latest date
                        }


                    }else if (APO.length == 1){//Use unique item 
                        APOItem = APO[0];



                    }
                    */

                   //console.log(APOItem)

                    
    
                    

    
                    
                    var TNG_Base_TDA = APOItem.TRAINING_BASE || 0;
                    var APO_COMPO_1_OTOE = APOItem.ACTIVE_OTOE || 0;
                    var APO_COMPO_2_OTOE = APOItem.ARNG_OTOE || 0;
                    var APO_COMPO_3_OTOE = APOItem.USAR_OTOE || 0;
    
                    var ACT_SETS = APOItem.ACT_SETS || 0;
                    var APS_OTOE = APOItem.APS_OTOE || 0;
                    var WR = APOItem.WR || 0;
                    var WRA = APOItem.WRA || 0;
                    var OPS = APOItem.OPS || 0;
                    var RCF = APOItem.RCF || 0;
                    var ORF = APOItem.ORF || 0;
                    var Other_TDA = APOItem.OTHER_TDA || 0;
                    
                    var totalAPO = math.sum([TNG_Base_TDA,APO_COMPO_1_OTOE,APO_COMPO_2_OTOE,APO_COMPO_3_OTOE,ACT_SETS,APS_OTOE,WR,WRA,OPS,RCF,ORF,Other_TDA])

                    
                    

                    //console.log( totalAPO )
                    
                    

                    if(checked){

                        //LIN Level
                            sourceData[bos]['Inventory']['LINs']['APO'][LIN] = {};
                            sourceData[bos]['Inventory']['LINs']['APO'][LIN]['TotalAPO'] += totalAPO;  


                            //sourceData[bos]['SelectedRoots'][root]['Inventory']['LINs'][LIN] = {};
                            //sourceData[bos]['SelectedRoots'][root]['Inventory']['LINs'][LIN]['APO'] = {};
                            //sourceData[bos]['SelectedRoots'][root]['Inventory']['LINs'][LIN]['APO']['TotalAPO'] = totalAPO;


                            //Global Level
                            sourceData[bos]['Inventory']['APO']['TNG_Base_TDA'] += TNG_Base_TDA; 
                            sourceData[bos]['Inventory']['APO']['COMPO_1_OTOE'] += APO_COMPO_1_OTOE; 
                            sourceData[bos]['Inventory']['APO']['COMPO_2_OTOE'] += APO_COMPO_2_OTOE; 
                            sourceData[bos]['Inventory']['APO']['COMPO_3_OTOE'] += APO_COMPO_3_OTOE; 
                            sourceData[bos]['Inventory']['APO']['ACT_SETS'] += ACT_SETS; 
                            sourceData[bos]['Inventory']['APO']['APS_OTOE'] += APS_OTOE; 
                            sourceData[bos]['Inventory']['APO']['WR'] += WR; 
                            sourceData[bos]['Inventory']['APO']['WRA'] += WRA;
                            sourceData[bos]['Inventory']['APO']['OPS'] += OPS;  
                            sourceData[bos]['Inventory']['APO']['RCF'] += RCF; 
                            sourceData[bos]['Inventory']['APO']['ORF'] += ORF; 
                            sourceData[bos]['Inventory']['APO']['Other_TDA'] += Other_TDA; 
                            sourceData[bos]['Inventory']['APO']['TotalAPO'] += totalAPO;


                            
    
    
                            //LIN Level
                            sourceData[bos]['Inventory']['LINs']['APO'][LIN]['TNG_Base_TDA'] = TNG_Base_TDA; 
                            sourceData[bos]['Inventory']['LINs']['APO'][LIN]['COMPO_1_OTOE'] = APO_COMPO_1_OTOE; 
                            sourceData[bos]['Inventory']['LINs']['APO'][LIN]['COMPO_2_OTOE'] = APO_COMPO_2_OTOE; 
                            sourceData[bos]['Inventory']['LINs']['APO'][LIN]['COMPO_3_OTOE'] = APO_COMPO_3_OTOE; 
                            sourceData[bos]['Inventory']['LINs']['APO'][LIN]['ACT_SETS'] = ACT_SETS; 
                            sourceData[bos]['Inventory']['LINs']['APO'][LIN]['APS_OTOE'] = APS_OTOE; 
                            sourceData[bos]['Inventory']['LINs']['APO'][LIN]['WR'] = WR; 
                            sourceData[bos]['Inventory']['LINs']['APO'][LIN]['WRA'] = WRA; 
                            sourceData[bos]['Inventory']['LINs']['APO'][LIN]['OPS'] = OPS;
                            sourceData[bos]['Inventory']['LINs']['APO'][LIN]['RCF'] = RCF;
                            sourceData[bos]['Inventory']['LINs']['APO'][LIN]['ORF'] = ORF;
                            sourceData[bos]['Inventory']['LINs']['APO'][LIN]['Other_TDA'] = Other_TDA; 
                            sourceData[bos]['Inventory']['LINs']['APO'][LIN]['TotalAPO'] = totalAPO;


                            /*sourceData[bos]['SelectedRoots'][root]['Inventory']['LINs'][LIN]['APO']['TNG_Base_TDA'] = TNG_Base_TDA;
                            sourceData[bos]['SelectedRoots'][root]['Inventory']['LINs'][LIN]['APO']['COMPO_1_OTOE'] = APO_COMPO_1_OTOE; 
                            sourceData[bos]['SelectedRoots'][root]['Inventory']['LINs'][LIN]['APO']['COMPO_2_OTOE'] = APO_COMPO_2_OTOE;  
                            sourceData[bos]['SelectedRoots'][root]['Inventory']['LINs'][LIN]['APO']['COMPO_3_OTOE'] = APO_COMPO_3_OTOE;  
                            sourceData[bos]['SelectedRoots'][root]['Inventory']['LINs'][LIN]['APO']['ACT_SETS'] = ACT_SETS; 
                            sourceData[bos]['SelectedRoots'][root]['Inventory']['LINs'][LIN]['APO']['APS_OTOE'] = APS_OTOE; 
                            sourceData[bos]['SelectedRoots'][root]['Inventory']['LINs'][LIN]['APO']['WR'] = WR; 
                            sourceData[bos]['SelectedRoots'][root]['Inventory']['LINs'][LIN]['APO']['WRA'] = WRA; 
                            sourceData[bos]['SelectedRoots'][root]['Inventory']['LINs'][LIN]['APO']['OPS'] = OPS; 
                            sourceData[bos]['SelectedRoots'][root]['Inventory']['LINs'][LIN]['APO']['RCF'] = RCF; 
                            sourceData[bos]['SelectedRoots'][root]['Inventory']['LINs'][LIN]['APO']['ORF'] = ORF; 
                            sourceData[bos]['SelectedRoots'][root]['Inventory']['LINs'][LIN]['APO']['Other_TDA'] = Other_TDA; 
                            sourceData[bos]['SelectedRoots'][root]['Inventory']['LINs'][LIN]['APO']['TotalAPO'] = totalAPO;*/
    
    
    
    

    
    
                    }else{
                        
    
    
    
                            //APO
                            sourceData[bos]['Inventory']['APO']['TNG_Base_TDA'] -= TNG_Base_TDA; 
                            sourceData[bos]['Inventory']['APO']['COMPO_1_OTOE'] -= APO_COMPO_1_OTOE; 
                            sourceData[bos]['Inventory']['APO']['COMPO_2_OTOE'] -= APO_COMPO_2_OTOE; 
                            sourceData[bos]['Inventory']['APO']['COMPO_3_OTOE'] -= APO_COMPO_3_OTOE; 
                            sourceData[bos]['Inventory']['APO']['ACT_SETS'] -= ACT_SETS; 
                            sourceData[bos]['Inventory']['APO']['APS_OTOE'] -= APS_OTOE; 
                            sourceData[bos]['Inventory']['APO']['WR'] -= WR; 
                            sourceData[bos]['Inventory']['APO']['WRA'] -= WRA; 
                            sourceData[bos]['Inventory']['APO']['OPS'] -= OPS; 
                            sourceData[bos]['Inventory']['APO']['RCF'] -= RCF; 
                            sourceData[bos]['Inventory']['APO']['ORF'] -= ORF; 
                            sourceData[bos]['Inventory']['APO']['Other_TDA'] -= Other_TDA;
                            sourceData[bos]['Inventory']['APO']['TotalAPO'] -= totalAPO;



                            delete sourceData[bos]['Inventory']['LINs']['APO'][LIN];
                            //delete sourceData[bos]['SelectedRoots'][root]['Inventory']['LINs'][LIN];

    
                       
                    }

                    
                    


                }



                var obj = JSON.stringify(sourceData);
                sessionStorage.setItem('SourceData', obj);


            }
            catch(e){
                console.log(e);
            }


        },//countAPO



        APPNDOM:function(appnData, FYs, tag, pomTag){

            try{

                //console.log(appnData)downloadProgramPOMAllo
                
                
                //var editor = appnData.Editor.Title || "";
                //var modified = moment(appnData.Modified).format('MMMM Do YYYY, h:mm:ss a') || "";
                var pom = appnData['POM'];

                for(var i = 0; i < FYs.length; i++){
                    if(FYs[i].OData__x0050_2){//USE SITE COLUMN WHEN IMPORTING FROM ACCESS
        
                        var fystr = 'FY'+ FYs[i].OData__x0050_2;//USE SITE COLUMN WHEN IMPORTING FROM ACCESS
                        var fy = FYs[i].OData__x0050_2;
                        var sum = appnData[fystr];


                        //console.log(fystr + ' : ' + sum)
                        


                        //console.log(fystr)
                        //console.log(sum)
                        //console.log(appnData['OData__x0066_y'+fy])
                        //console.log(sourceData[bos]['RDTE'][fystr].SUM)

                        jQuery("#"+tag+""+fy+"").val('$'+sum);




                    }
                }

                jQuery("#"+pomTag+"").val('$'+pom);




               
            }
            catch(e){
                console.log(e);
            }
    
    
    
        },//APPNDOM

        QUANTITYDOM:function(bos, sourceData, FYs){

            try{

                //console.log(sourceData)
                //console.log(FYs)
                
                
                //var editor = currentProgram[0].Editor.Title || "";
                //var modified = moment(currentProgram[0].Modified).format('MMMM Do YYYY, h:mm:ss a') || "";


                for(var i = 0; i < FYs.length; i++){
                    if(FYs[i].OData__x0050_2){//USE SITE COLUMN WHEN IMPORTING FROM ACCESS
        
                        var fystr = 'FY'+ FYs[i].OData__x0050_2;//USE SITE COLUMN WHEN IMPORTING FROM ACCESS
                        var fy = FYs[i].OData__x0050_2;
                        var sum = sourceData[bos]['Quantity'][fystr];
                        var pom = sourceData[bos]['Quantity']['POM'];


                        //console.log(fystr)
                        //console.log(sourceData[bos]['TOTAL'][fystr].SUM)

                        jQuery("#quantityfy"+fy+"").val(+sum);
                        jQuery("#quantityPOMPeriod").val(pom);




                    }
                }

               
            }
            catch(e){
                console.log(e);
            }
    
    
    
        },//countAPO()








  }//return
});//SourceDataDOMService


/* GET ITEMS SERVICE */
angular.module('app').factory('GetItemsService', function ($q) {

	
    return {

        areaUrl:function(){
            try{
                var ctx = _spPageContextInfo;
                var url = ctx.siteAbsoluteUrl + "/quad/_api/web/lists/getbytitle('Area')/items?$top=1000";//MILTECH
                //var url = ctx.siteAbsoluteUrl + "/lewis/_api/web/lists/getbytitle('BOS')/items?$top=1000";//TEKSOUTH
                return url;

            }
            catch(e){
                console.log(e);
            }


        },

        
        bosUrl:function(){
            try{
                var ctx = _spPageContextInfo;
                var url = ctx.siteAbsoluteUrl + "/_api/web/lists/getbytitle('BOS')/items?select=ID,Title,BOS,PORTFOLIO&$top=5000&$orderby=Title asc";//MILTECH
                //var url = ctx.siteAbsoluteUrl + "/lewis/_api/web/lists/getbytitle('BOS')/items?$top=1000";//TEKSOUTH
                return url;

            }
            catch(e){
                console.log(e);
            }


        },



        BOSRootUrlDownload:function(bos, programID){
            try{
                var ctx = _spPageContextInfo;
                var url = ctx.siteAbsoluteUrl + "/_api/web/lists/getbytitle('BOS_Root_"+bos+"')/items?$top=5000&$filter=ProgramID eq '"+encodeURIComponent(programID)+"' or Assigned eq 0";//MILTECH
                return url;


            }
            catch(e){
                console.log(e);
            }


        },

        BOSRootUrl:function(bos, root, programID){
            try{
                var ctx = _spPageContextInfo;
                var url = ctx.siteAbsoluteUrl + "/_api/web/lists/getbytitle('BOS_Root_"+bos+"')/items?$top=5000&$filter=Root eq '"+encodeURIComponent(root)+"' and ProgramID eq '"+encodeURIComponent(programID)+"' and Assigned eq 0";//MILTECH
                return url;

            }
            catch(e){
                console.log(e);
            }


        },

        BOSRootUrl2:function(bos, root, key4){
            try{

                var ctx = _spPageContextInfo;
                var url = ctx.siteAbsoluteUrl + "/_api/web/lists/getbytitle('BOS_Root_"+bos+"')/items?$top=5000&$filter=Root eq '"+encodeURIComponent(root)+"' and OData__x006b_ey4 eq '"+encodeURIComponent(key4)+"'";//MILTECH
                return url;

            }
            catch(e){
                console.log(e);
            }


        },


        LQARootUrl:function(bos, root, programID){
            try{
                var ctx = _spPageContextInfo;
                var url = ctx.siteAbsoluteUrl + "/_api/web/lists/getbytitle('LQA_"+bos+"')/items?$top=5000&$filter=Root eq '"+encodeURIComponent(root)+"'";//MILTECH
                return url;

            }
            catch(e){
                console.log(e);
            }


        },


        BOSRootUFRUrl:function(bos, root){
            try{
                var ctx = _spPageContextInfo;
                var url = ctx.siteAbsoluteUrl + "/quad/_api/web/lists/getbytitle('UFRs')/items?$top=1000&$filter=BOS eq '"+encodeURIComponent(bos)+"' and Root eq '"+encodeURIComponent(root)+"'";//MILTECH
                //var url = ctx.webAbsoluteUrl + "/lewis/_api/web/lists/getbytitle('BOS Root')/items?$select=BOS,Root,APPN&$orderby=APPN asc&$top=1000&$filter=BOS eq '"+encodeURIComponent(bos)+"' and Root eq '"+encodeURIComponent(root)+"'";//TEKSOUTH
                console.log(url)
                return url;

            }
            catch(e){
                console.log(e);
            }


        },

        
        key4Url:function(root){
            try{

                var ctx = _spPageContextInfo;
                var url = ctx.siteAbsoluteUrl + "/quad/_api/web/lists/getbytitle('CSA Deep Dive')/items?$top=1000&$filter=Root eq '"+encodeURIComponent(root)+"'";//MILTECH
                //var url = ctx.siteAbsoluteUrl + "/lewis/_api/web/lists/getbytitle('CSA Deep Dive')/items?$top=1000&$filter=Root eq '"+encodeURIComponent(root)+"'";//TEKSOUTH                
                
                return url;

            }
            catch(e){
                console.log(e);
            }


        },

        LINUrl:function(bos, root){
            try{
                var ctx = _spPageContextInfo;
                var url = ctx.siteAbsoluteUrl + "/quad/_api/web/lists/getbytitle('LQA')/items?$top=1000&$orderby=LINOUT asc&$filter=BOS eq '"+encodeURIComponent(bos)+"' and Root eq '"+encodeURIComponent(root)+"'";//MILTECH
                //var url = ctx.siteAbsoluteUrl + "/lewis/_api/web/lists/getbytitle('LQA')/items?$top=1000&$filter=BOS eq '"+encodeURIComponent(bos)+"' and Root eq '"+encodeURIComponent(root)+"'";//TEKSOUTH
                
                //console.log(url);
                return url;

            }
            catch(e){
                console.log(e);
            }


        },

        POMUrl:function(bos, root){
            try{
                var ctx = _spPageContextInfo;
                var url = ctx.siteAbsoluteUrl + "/quad/_api/web/lists/getbytitle('Bos Root')/items?$top=1000&select=Root&$filter=BOS eq '"+encodeURIComponent(''+bos+'')+" 'and Root eq '"+encodeURIComponent(''+root+'')+"'";//MILTECH
                //var url = ctx.siteAbsoluteUrl + "/lewis/_api/web/lists/getbytitle('Bos Root')/items?$top=1000&select=Root&$filter=BOS eq '"+encodeURIComponent(''+bos+'')+" 'and Root eq '"+encodeURIComponent(''+root+'')+"'";//TEKSOUTH
                return url;

            }
            catch(e){
                console.log(e);
            }


        },

        AAOUrl:function(bos){
            try{
                var ctx = _spPageContextInfo;
                var url = ctx.siteAbsoluteUrl + "/_api/web/lists/getbytitle('AAO_"+bos+"')/items?$top=5000    ";//MILTECH
                //var url = ctx.siteAbsoluteUrl + "/lewis/_api/web/lists/getbytitle('Bos Root')/items?$top=1000&select=Root&$filter=BOS eq '"+encodeURIComponent(''+bos+'')+" 'and Root eq '"+encodeURIComponent(''+root+'')+"'";//TEKSOUTH
                return url;

            }
            catch(e){
                console.log(e);
            }


        },

        AAOUrl2:function(bos, programID){
            try{
                var ctx = _spPageContextInfo;
                var url = ctx.webAbsoluteUrl + "/_api/web/lists/getbytitle('AAO_"+bos+"')/items?&$filter=ProgramID eq '"+encodeURIComponent(''+programID+'')+"'";
                //var url = ctx.siteAbsoluteUrl + "/lewis/_api/web/lists/getbytitle('Bos Root')/items?$top=1000&select=Root&$filter=BOS eq '"+encodeURIComponent(''+bos+'')+" 'and Root eq '"+encodeURIComponent(''+root+'')+"'";//TEKSOUTH
                return url;

            }
            catch(e){
                console.log(e);
            }


        },

        

        APOUrl:function(bos){
            try{
                var ctx = _spPageContextInfo;
                var url = ctx.siteAbsoluteUrl + "/_api/web/lists/getbytitle('APO_"+bos+"')/items?$top=5000";//MILTECH
                //var url = ctx.siteAbsoluteUrl + "/lewis/_api/web/lists/getbytitle('Bos Root')/items?$top=1000&select=Root&$filter=BOS eq '"+encodeURIComponent(''+bos+'')+" 'and Root eq '"+encodeURIComponent(''+root+'')+"'";//TEKSOUTH
                //console.log(url)
                return url;

            }
            catch(e){
                console.log(e);
            }


        },

        APOUrl2:function(bos, programID){
            try{
                var ctx = _spPageContextInfo;
                var url = ctx.webAbsoluteUrl + "/_api/web/lists/getbytitle('APO_"+bos+"')/items?&$filter=ProgramID eq '"+encodeURIComponent(''+programID+'')+"'";
                //var url = ctx.siteAbsoluteUrl + "/lewis/_api/web/lists/getbytitle('Bos Root')/items?$top=1000&select=Root&$filter=BOS eq '"+encodeURIComponent(''+bos+'')+" 'and Root eq '"+encodeURIComponent(''+root+'')+"'";//TEKSOUTH
                //console.log(url)
                return url;

            }
            catch(e){
                console.log(e);
            }


        },

        imageUrl:function(bos, programID){
            try{
                var ctx = _spPageContextInfo;
                var url = ctx.webAbsoluteUrl + "/_api/web/lists/getbytitle('Images_"+bos+"')/items?$select=ID,ProgramID,Modified,FileRef/FileRef&$filter=ProgramID eq '"+encodeURIComponent(''+programID+'')+"'";
                //var url = ctx.siteAbsoluteUrl + "/lewis/_api/web/lists/getbytitle('Bos Root')/items?$top=1000&select=Root&$filter=BOS eq '"+encodeURIComponent(''+bos+'')+" 'and Root eq '"+encodeURIComponent(''+root+'')+"'";//TEKSOUTH
                //console.log(url)
                return url;

            }
            catch(e){
                console.log(e);
            }


        },




        ONHANDUrl:function(portfolio, LIN){
            try{
                var ctx = _spPageContextInfo;
                var url = ctx.siteAbsoluteUrl + "/quad/_api/web/lists/getbytitle('AAO_APO_ONHAND')/items?$top=1000&$filter=PORTFOLIO eq '"+encodeURIComponent(''+portfolio+'')+"'and Title eq '"+LIN+"'";//MILTECH
                //var url = ctx.siteAbsoluteUrl + "/lewis/_api/web/lists/getbytitle('Bos Root')/items?$top=1000&select=Root&$filter=BOS eq '"+encodeURIComponent(''+bos+'')+" 'and Root eq '"+encodeURIComponent(''+root+'')+"'";//TEKSOUTH
                //console.log(url)
                return url;

            }
            catch(e){
                console.log(e);
            }


        },


        AAOUrlSelect:function(bos, LIN){
            try{
                var ctx = _spPageContextInfo;
                var url = ctx.siteAbsoluteUrl + "/_api/web/lists/getbytitle('AAO_"+bos+"')/items?$top=5000&$filter=LIN eq '"+encodeURIComponent(''+LIN+'')+"'";//MILTECH
                //var url = ctx.siteAbsoluteUrl + "/lewis/_api/web/lists/getbytitle('Bos Root')/items?$top=1000&select=Root&$filter=BOS eq '"+encodeURIComponent(''+bos+'')+" 'and Root eq '"+encodeURIComponent(''+root+'')+"'";//TEKSOUTH
                return url;

            }
            catch(e){
                console.log(e);
            }


        },

        APOURLSelect:function(bos, LIN){
            try{
                var ctx = _spPageContextInfo;
                var url = ctx.siteAbsoluteUrl + "/_api/web/lists/getbytitle('APO_"+bos+"')/items?$top=5000&$filter=LIN eq '"+encodeURIComponent(''+LIN+'')+"'";//MILTECH
                //var url = ctx.siteAbsoluteUrl + "/lewis/_api/web/lists/getbytitle('Bos Root')/items?$top=1000&select=Root&$filter=BOS eq '"+encodeURIComponent(''+bos+'')+" 'and Root eq '"+encodeURIComponent(''+root+'')+"'";//TEKSOUTH
                return url;

            }
            catch(e){
                console.log(e);
            }


        },




        FYUrl:function(bos, root){
            try{
                var ctx = _spPageContextInfo;
                var url = ctx.siteAbsoluteUrl + "/quad/_api/web/lists/getbytitle('FYs')/items?$top=1000&select=Title";//MILTECH
                return url;

            }
            catch(e){
                console.log(e);
            }


        },

        BOSROOTKey4Url:function(bos, programID, sourceData){
            try{

                var key4s = sourceData.BOS['Key4s'];
                    
                for(var i = 0; i < key4s.length; i++){

                    var key4 = key4s[i];
                    console.log(key4)

                }



                var ctx = _spPageContextInfo;
                var url = ctx.siteAbsoluteUrl + "/_api/web/lists/getbytitle('BOS_Root_"+bos+"')/items?$top=5000&$filter=ProgramID eq '"+encodeURIComponent(programID)+"'";//MILTECH
                return url;

            }
            catch(e){
                console.log(e);
            }


        },

        programUrl:function(bos, program){
            try{
                var ctx = _spPageContextInfo;
                var url = ctx.webAbsoluteUrl + "/_api/web/lists/getbytitle('Programs_"+bos+"')/items?$filter=Title eq '"+encodeURIComponent(''+program+'')+"'";  
                return url;

            }
            catch(e){
                console.log(e);
            }


        },
		programIDUrl:function(bos, id){
            try{
                var ctx = _spPageContextInfo;
                var url = ctx.webAbsoluteUrl + "/_api/web/lists/getbytitle('Programs_"+bos+"')/items?$filter=ProgramID eq '"+encodeURIComponent(''+id+'')+"'";  
                return url;

            }
            catch(e){
                console.log(e);
            }


        },

        programBOSUrl:function(bos){
            try{
                var ctx = _spPageContextInfo;
                var url = ctx.webAbsoluteUrl + "/_api/web/lists/getbytitle('Programs_"+bos+"')/items?&$top=5000&$orderby=ProgramID desc";  
                return url;

            }
            catch(e){
                console.log(e);
            }


        },
		
		programBOSUrl2:function(bos){
            try{
                var ctx = _spPageContextInfo;
                var url = ctx.webAbsoluteUrl + "/_api/web/lists/getbytitle('Programs_"+bos+"')/items?&$orderby=Title asc";  
                return url;

            }
            catch(e){
                console.log(e);
            }


        },





        commandUrl:function(bos){
            try{
                var ctx = _spPageContextInfo;
                var url = ctx.webAbsoluteUrl + "/manpower/_api/web/lists/getbytitle('Commands1')/items?$filter=BOS eq '"+encodeURIComponent(''+bos+'')+"'";         
                //console.log(url);
                return url;

            }
            catch(e){
                console.log(e);
            }


        },
        STProgramUrl:function(bos){
            try{
                var ctx = _spPageContextInfo;
                var url = ctx.webAbsoluteUrl + "/st/_api/web/lists/getbytitle('Projects1')/items?$filter=BOS eq '"+encodeURIComponent(''+bos+'')+"'";         
               //console.log(url);
                return url;

            }
            catch(e){
                console.log(e);
            }


        },
        AMMOProgramUrl:function(bos){
            try{
                var ctx = _spPageContextInfo;
                var url = ctx.webAbsoluteUrl + "/ammo/_api/web/lists/getbytitle('Programs1')/items?$filter=BOS eq '"+encodeURIComponent(''+bos+'')+"'";         
                //console.log(url);
                return url;

            }
            catch(e){
                console.log(e);
            }


        },


        /* Area Data Sources*/        

        programListsUrl:function(){
            try{
                var ctx = _spPageContextInfo;
                var url = ctx.webAbsoluteUrl + "/_api/web/lists/getbytitle('PROGRAMLISTS')/items";
                //console.log(url);
                return url;

            }
            catch(e){
                console.log(e);
            }


        },

        commandListsUrl:function(programName){
            try{
                var ctx = _spPageContextInfo;
                var url = ctx.webAbsoluteUrl + "/manpower/_api/web/lists/getbytitle('MANPOWERLISTS')/items";
                //console.log(url);
                return url;

            }
            catch(e){
                console.log(e);
            }


        },
        ammoListsUrl:function(programName){
            try{
                var ctx = _spPageContextInfo;
                var url = ctx.webAbsoluteUrl + "/ammo/_api/web/lists/getbytitle('AMMOLISTS')/items";
                //console.log(url);
                return url;

            }
            catch(e){
                console.log(e);
            }


        },
        stListsUrl:function(programName){
            try{
                var ctx = _spPageContextInfo;
                var url = ctx.webAbsoluteUrl + "/st/_api/web/lists/getbytitle('STLISTS')/items";
                //console.log(url);
                return url;

            }
            catch(e){
                console.log(e);
            }


        },




        /* Program Endpoints */
        
          imageListsUrl:function(bos){
            try{
                var ctx = _spPageContextInfo;
                var url = ctx.webAbsoluteUrl + "/_api/web/lists/getbytitle('ImageLists')/items?$select=GUID0,Title&$filter=Title eq '"+encodeURIComponent(''+bos+'')+"'";
                return url;

            }
            catch(e){
                console.log(e);
            }


        },


        WhyWeNeedThisUrl:function(bos, programID){
            try{
                var ctx = _spPageContextInfo;
                var url = ctx.webAbsoluteUrl + "/_api/web/lists/getbytitle('WHYWENEEDTHIS_"+bos+"')/items?&$filter=ProgramID eq '"+encodeURIComponent(''+programID+'')+"'";
                return url;

            }
            catch(e){
                console.log(e);
            }


        },





        ProgramOverviewUrl:function(bos, programID){
            try{
                var ctx = _spPageContextInfo;
                var url = ctx.webAbsoluteUrl + "/_api/web/lists/getbytitle('PROGRAMMATICOVERVIEW_"+bos+"')/items?&$filter=ProgramID eq '"+encodeURIComponent(''+programID+'')+"'";
                return url;

            }
            catch(e){
                console.log(e);
            }


        },



        ProgramCapabilityImagesUrl:function(bos, programID){
            try{
                var ctx = _spPageContextInfo;
                var url = ctx.webAbsoluteUrl + "/_api/web/lists/getbytitle('CAPABILITIES_"+bos+"')/items?$select=ID,Title&$filter=ProgramID eq '"+encodeURIComponent(''+programID+'')+"'";
                return url;


            }
            catch(e){
                console.log(e);
            }


        },

        ProgramCapabilityUrl:function(bos, programID){
            try{
                var ctx = _spPageContextInfo;
                var url = ctx.webAbsoluteUrl + "/_api/web/lists/getbytitle('CAPABILITIES_"+bos+"')/items?&$filter=ProgramID eq '"+encodeURIComponent(''+programID+'')+"'";
                return url;

            }
            catch(e){
                console.log(e);
            }


        },

        ProgramBattleSpaceUrl:function(program){
            try{
                var ctx = _spPageContextInfo;
                var url = "";
                var progLoc = ctx.webAbsoluteUrl.search('programs');
                if(progLoc === -1){
                    url = ctx.webAbsoluteUrl + "/programs/_api/web/lists/getbytitle('PROGRAMBATTLESPACEIMAGES1')/items?$select=ID,Title,BOS,Editor/Title,Modified,FileRef/FileRef&$expand=Editor&$filter=Title eq '"+encodeURIComponent(''+program+'')+"'";


                }else{
                    url = ctx.webAbsoluteUrl + "/_api/web/lists/getbytitle('PROGRAMBATTLESPACEIMAGES1')/items?$select=ID,Title,BOS,Editor/Title,Modified,FileRef/FileRef&$expand=Editor&$filter=Title eq '"+encodeURIComponent(''+program+'')+"'";


                }
                return url;


            }
            catch(e){
                console.log(e);
            }


        },

        ProgramPortfolioContextImagesUrl:function(program){
            try{
                var ctx = _spPageContextInfo;
                var url = "";
                var progLoc = ctx.webAbsoluteUrl.search('programs');
                if(progLoc === -1){
                    url = ctx.webAbsoluteUrl + "/programs/_api/web/lists/getbytitle('PORTFOLIOCONTEXTIMAGES1')/items?$select=ID,Title,BOS,Editor/Title,Modified,FileRef/FileRef&$expand=Editor&$filter=Title eq '"+encodeURIComponent(''+program+'')+"'";


                }else{
                    url = ctx.webAbsoluteUrl + "/_api/web/lists/getbytitle('PORTFOLIOCONTEXTIMAGES1')/items?$select=ID,Title,BOS,Editor/Title,Modified,FileRef/FileRef&$expand=Editor&$filter=Title eq '"+encodeURIComponent(''+program+'')+"'";


                }
                return url;


            }
            catch(e){
                console.log(e);
            }


        },

        ProgramPortfolioOverviewUrl:function(program){
            try{
                var ctx = _spPageContextInfo;
                var url = "";
                var progLoc = ctx.webAbsoluteUrl.search('programs');
                if(progLoc === -1){
                    url = ctx.webAbsoluteUrl + "/programs/_api/web/lists/getbytitle('PORTFOLIOOVERVIEW1')/items?$select=ID,Title,BOS,OVERVIEW,Editor/Title,Modified,FileRef/FileRef&$expand=Editor&$filter=Title eq '"+encodeURIComponent(''+program+'')+"'";


                }else{
                    url = ctx.webAbsoluteUrl + "/_api/web/lists/getbytitle('PORTFOLIOOVERVIEW1')/items?$select=ID,Title,BOS,OVERVIEW,Editor/Title,Modified,FileRef/FileRef&$expand=Editor&$filter=Title eq '"+encodeURIComponent(''+program+'')+"'";


                }
                return url;


            }
            catch(e){
                console.log(e);
            }


        },

        ProgramPortfolioKeyCapabilitiesUrl:function(program){
            try{
                var ctx = _spPageContextInfo;
                var url = "";
                var progLoc = ctx.webAbsoluteUrl.search('programs');
                if(progLoc === -1){
                    url = ctx.webAbsoluteUrl + "/programs/_api/web/lists/getbytitle('PORTFOLIOKEYCAPABILITIES1')/items?$select=ID,Title,BOS,CAPABILITY,Editor/Title,Modified,FileRef/FileRef&$expand=Editor&$filter=Title eq '"+encodeURIComponent(''+program+'')+"'";


                }else{
                    url = ctx.webAbsoluteUrl + "/_api/web/lists/getbytitle('PORTFOLIOKEYCAPABILITIES1')/items?$select=ID,Title,BOS,CAPABILITY,Editor/Title,Modified,FileRef/FileRef&$expand=Editor&$filter=Title eq '"+encodeURIComponent(''+program+'')+"'";


                }
                return url;


            }
            catch(e){
                console.log(e);
            }


        },

        ProgramPortfolioPlanUrl:function(program){
            try{
                var ctx = _spPageContextInfo;
                var url = "";
                var progLoc = ctx.webAbsoluteUrl.search('programs');
                if(progLoc === -1){
                    url = ctx.webAbsoluteUrl + "/programs/_api/web/lists/getbytitle('PORTFOLIOPLAN1')/items?$select=ID,Title,BOS,FARTERM,MIDTERM,NEARTERM,Editor/Title,Modified,FileRef/FileRef&$expand=Editor&$filter=Title eq '"+encodeURIComponent(''+program+'')+"'";


                }else{
                    url = ctx.webAbsoluteUrl + "/_api/web/lists/getbytitle('PORTFOLIOPLAN1')/items?$select=ID,Title,BOS,FARTERM,MIDTERM,NEARTERM,Editor/Title,Modified,FileRef/FileRef&$expand=Editor&$filter=Title eq '"+encodeURIComponent(''+program+'')+"'";


                }
                return url;


            }
            catch(e){
                console.log(e);
            }


        },

        WhereItFitsUrl:function(bos, programID){
            try{
                var ctx = _spPageContextInfo;
                var url = ctx.webAbsoluteUrl + "/_api/web/lists/getbytitle('WHEREITFITS_"+bos+"')/items?&$filter=ProgramID eq '"+encodeURIComponent(''+programID+'')+"'";
                return url;


            }
            catch(e){
                console.log(e);
            }


        },
		
		BLUFUrl:function(bos, programID){
            try{
                var ctx = _spPageContextInfo;
                var url = ctx.webAbsoluteUrl + "/_api/web/lists/getbytitle('BLUF_"+bos+"')/items?&$filter=ProgramID eq '"+encodeURIComponent(''+programID+'')+"'";
                return url;


            }
            catch(e){
                console.log(e);
            }


        },



        ProgramAssessmentUrl:function(bos, programID){
            try{
                var ctx = _spPageContextInfo;
                var url = ctx.webAbsoluteUrl + "/_api/web/lists/getbytitle('PROGRAMASSESSMENT_"+bos+"')/items?&$filter=ProgramID eq '"+encodeURIComponent(''+programID+'')+"'";
                return url;


            }
            catch(e){
                console.log(e);
            }


        },



        POMAllocationUrl:function(program){
            try{
                var ctx = _spPageContextInfo;
                var progLoc = ctx.webAbsoluteUrl.search('programs');
                if(progLoc === -1){
                    url = ctx.webAbsoluteUrl + "/programs/_api/web/lists/getbytitle('POMALLOCATION1')/items?$select=ID,Title,BOS,DeepDiveImpacts,CongressionalMarks,PDM,OtherFundingIssues,MODLevel,Editor/Title,Modified,FileRef/FileRef&$expand=Editor&$filter=Title eq '"+encodeURIComponent(''+program+'')+"'";


                }else{
                    url = ctx.webAbsoluteUrl + "/_api/web/lists/getbytitle('POMALLOCATION1')/items?$select=ID,Title,BOS,DeepDiveImpacts,CongressionalMarks,PDM,OtherFundingIssues,MODLevel,Editor/Title,Modified,FileRef/FileRef&$expand=Editor&$filter=Title eq '"+encodeURIComponent(''+program+'')+"'";


                }
                return url;

            }
            catch(e){
                console.log(e);
            }


        },


        RDTEUrl:function(bos, programID){
            try{
                var ctx = _spPageContextInfo;
                var url = ctx.webAbsoluteUrl + "/_api/web/lists/getbytitle('RDTE_"+bos+"')/items?&$filter=ProgramID eq '"+encodeURIComponent(''+programID+'')+"'";
                //var url = ctx.webAbsoluteUrl + "/_api/web/lists/getbytitle('RDTE_"+bos+"')/items?$select=ID,Title,BOS,progRoot,OData__x0066_y19,OData__x0066_y20,OData__x0066_y21,OData__x0066_y22,OData__x0066_y23,OData__x0066_y24,OData__x0066_y25,POMPeriod,Editor/Title,Modified,FileRef/FileRef&$expand=Editor&$filter=Title eq '"+encodeURIComponent(''+program+'')+"'";

                return url;

            }
            catch(e){
                console.log(e);
            }


        },


        PROCUrl:function(bos, programID){
            try{
                var ctx = _spPageContextInfo;
                var url = ctx.webAbsoluteUrl + "/_api/web/lists/getbytitle('PROC_"+bos+"')/items?&$filter=ProgramID eq '"+encodeURIComponent(''+programID+'')+"'";
                //var url = ctx.webAbsoluteUrl + "/programs/_api/web/lists/getbytitle('PROC1')/items?$select=ID,Title,BOS,progRoot,OData__x0066_y19,OData__x0066_y20,OData__x0066_y21,OData__x0066_y22,OData__x0066_y23,OData__x0066_y24,OData__x0066_y25,POMPeriod,Editor/Title,Modified,FileRef/FileRef&$expand=Editor&$filter=Title eq '"+encodeURIComponent(''+program+'')+"'";
                return url;

            }
            catch(e){
                console.log(e);
            }


        },



        OtherUrl:function(bos, programID){
            try{
                var ctx = _spPageContextInfo;
                var url = ctx.webAbsoluteUrl + "/_api/web/lists/getbytitle('OTHER_"+bos+"')/items?&$filter=ProgramID eq '"+encodeURIComponent(''+programID+'')+"'";
                //var url = ctx.webAbsoluteUrl + "/_api/web/lists/getbytitle('OTHER1')/items?$select=ID,Title,BOS,progRoot,OData__x0066_y19,OData__x0066_y20,OData__x0066_y21,OData__x0066_y22,OData__x0066_y23,OData__x0066_y24,OData__x0066_y25,POMPeriod,Editor/Title,Modified,FileRef/FileRef&$expand=Editor&$filter=Title eq '"+encodeURIComponent(''+program+'')+"'";
                return url;

            }
            catch(e){
                console.log(e);
            }


        },
        TotalUrl:function(bos, programID){
            try{
                var ctx = _spPageContextInfo;
                var url = ctx.webAbsoluteUrl + "/_api/web/lists/getbytitle('TOTAL_"+bos+"')/items?&$filter=ProgramID eq '"+encodeURIComponent(''+programID+'')+"'";
                //var url = ctx.webAbsoluteUrl + "/_api/web/lists/getbytitle('TOTAL1')/items?$select=ID,Title,BOS,progRoot,OData__x0066_y19,OData__x0066_y20,OData__x0066_y21,OData__x0066_y22,OData__x0066_y23,OData__x0066_y24,OData__x0066_y25,POMPeriod,Editor/Title,Modified,FileRef/FileRef&$expand=Editor&$filter=Title eq '"+encodeURIComponent(''+program+'')+"'";
                return url;

            }
            catch(e){
                console.log(e);
            }


        },

        ProgramLQAUrl:function(bos, programID){
            try{
                var ctx = _spPageContextInfo;
                var url = ctx.webAbsoluteUrl + "/_api/web/lists/getbytitle('LQA_"+bos+"')/items?&$filter=ProgramID eq '"+encodeURIComponent(''+programID+'')+"'";
                //var url = ctx.webAbsoluteUrl + "/_api/web/lists/getbytitle('TOTAL1')/items?$select=ID,Title,BOS,progRoot,OData__x0066_y19,OData__x0066_y20,OData__x0066_y21,OData__x0066_y22,OData__x0066_y23,OData__x0066_y24,OData__x0066_y25,POMPeriod,Editor/Title,Modified,FileRef/FileRef&$expand=Editor&$filter=Title eq '"+encodeURIComponent(''+program+'')+"'";
                return url;

            }
            catch(e){
                console.log(e);
            }


        },




        QuantityUrl:function(bos, programID){
            try{
                var ctx = _spPageContextInfo;
                var url = ctx.siteAbsoluteUrl + "/_api/web/lists/getbytitle('LQA_"+bos+"')/items?$top=5000&$filter=ProgramID eq '"+encodeURIComponent(programID)+"' or Assigned eq 0";//MILTECH
                //var url = ctx.webAbsoluteUrl + "/_api/web/lists/getbytitle('QUANTITY1')/items?$select=ID,Title,BOS,progRoot,progkey4,progLIN,OData__x0066_y19,OData__x0066_y20,OData__x0066_y21,OData__x0066_y22,OData__x0066_y23,OData__x0066_y24,OData__x0066_y25,POMPeriod,Editor/Title,Modified,FileRef/FileRef&$expand=Editor&$filter=Title eq '"+encodeURIComponent(''+program+'')+"'";
                return url;

            }
            catch(e){
                console.log(e);
            }


        },



        MYCFloorUrl:function(program){
            try{
                var ctx = _spPageContextInfo;
                var progLoc = ctx.webAbsoluteUrl.search('programs');
                if(progLoc === -1){
                    url = ctx.webAbsoluteUrl + "/programs/_api/web/lists/getbytitle('MYCFLOOR1')/items?$select=ID,Title,BOS,progRoot,progkey4,progLIN,OData__x0066_y19,OData__x0066_y20,OData__x0066_y21,OData__x0066_y22,OData__x0066_y23,OData__x0066_y24,OData__x0066_y25,POMPeriod,Editor/Title,Modified,FileRef/FileRef&$expand=Editor&$filter=Title eq '"+encodeURIComponent(''+program+'')+"'";


                }else{
                    url = ctx.webAbsoluteUrl + "/_api/web/lists/getbytitle('MYCFLOOR1')/items?$select=ID,Title,BOS,progRoot,progkey4,progLIN,OData__x0066_y19,OData__x0066_y20,OData__x0066_y21,OData__x0066_y22,OData__x0066_y23,OData__x0066_y24,OData__x0066_y25,POMPeriod,Editor/Title,Modified,FileRef/FileRef&$expand=Editor&$filter=Title eq '"+encodeURIComponent(''+program+'')+"'";


                }
                return url;

            }
            catch(e){
                console.log(e);
            }


        },



        DeepDiveUrl:function(bos, programID){
            try{
                var ctx = _spPageContextInfo;
                var url = ctx.webAbsoluteUrl + "/_api/web/lists/getbytitle('DEEP_DIVE_"+bos+"')/items?&$filter=ProgramID eq '"+encodeURIComponent(''+programID+'')+"'";

                //var url = ctx.webAbsoluteUrl + "/programs/_api/web/lists/getbytitle('DEEPDIVE1')/items?$select=ID,Title,BOS,progRoot,progkey4,progLIN,OData__x0066_y19,OData__x0066_y20,OData__x0066_y21,OData__x0066_y22,OData__x0066_y23,OData__x0066_y24,OData__x0066_y25,POMPeriod,Editor/Title,Modified,FileRef/FileRef&$expand=Editor&$filter=Title eq '"+encodeURIComponent(''+program+'')+"'";
                return url;

            }
            catch(e){
                console.log(e);
            }


        },

        AAOProgramUrl:function(program){
            try{
                var ctx = _spPageContextInfo;
                var progLoc = ctx.webAbsoluteUrl.search('programs');
                if(progLoc === -1){
                    url = ctx.webAbsoluteUrl + "/programs/_api/web/lists/getbytitle('PROGRAMAAO1')/items?$select=ID,Title,BOS,WR,WRA,ACT_SETS,APS_OTOE,COMPO_1_OTOE,COMPO_2_OTOE,COMPO_3_OTOE,OPS,ORF,Other_TDA,RCF,TNG_Base_TDA,TOTAL_,Editor/Title,Modified,FileRef/FileRef&$expand=Editor&$filter=Title eq '"+encodeURIComponent(''+program+'')+"'";


                }else{
                    url = ctx.webAbsoluteUrl + "/_api/web/lists/getbytitle('PROGRAMAAO1')/items?$select=ID,Title,BOS,WR,WRA,ACT_SETS,APS_OTOE,COMPO_1_OTOE,COMPO_2_OTOE,COMPO_3_OTOE,OPS,ORF,Other_TDA,RCF,TNG_Base_TDA,TOTAL_,Editor/Title,Modified,FileRef/FileRef&$expand=Editor&$filter=Title eq '"+encodeURIComponent(''+program+'')+"'";


                }
                return url;

            }
            catch(e){
                console.log(e);
            }


        },

        APOProgramUrl:function(program){
            try{
                var ctx = _spPageContextInfo;
                var progLoc = ctx.webAbsoluteUrl.search('programs');
                if(progLoc === -1){
                    url = ctx.webAbsoluteUrl + "/programs/_api/web/lists/getbytitle('PROGRAMAPO1')/items?$select=ID,Title,BOS,WR,WRA,ACT_SETS,APS_OTOE,COMPO_1_OTOE,COMPO_2_OTOE,COMPO_3_OTOE,OPS,ORF,Other_TDA,RCF,TNG_Base_TDA,TOTAL_,Editor/Title,Modified,FileRef/FileRef&$expand=Editor&$filter=Title eq '"+encodeURIComponent(''+program+'')+"'";


                }else{
                    url = ctx.webAbsoluteUrl + "/_api/web/lists/getbytitle('PROGRAMAPO1')/items?$select=ID,Title,BOS,WR,WRA,ACT_SETS,APS_OTOE,COMPO_1_OTOE,COMPO_2_OTOE,COMPO_3_OTOE,OPS,ORF,Other_TDA,RCF,TNG_Base_TDA,TOTAL_,Editor/Title,Modified,FileRef/FileRef&$expand=Editor&$filter=Title eq '"+encodeURIComponent(''+program+'')+"'";


                }
                return url;

            }
            catch(e){
                console.log(e);
            }


        },

        ROProgramUrl:function(program){
            try{
                var ctx = _spPageContextInfo;
                var progLoc = ctx.webAbsoluteUrl.search('programs');
                if(progLoc === -1){
                    url = ctx.webAbsoluteUrl + "/programs/_api/web/lists/getbytitle('PROGRAMRO1')/items?$select=ID,Title,BOS,WR,WRA,ACT_SETS,APS_OTOE,COMPO_1_OTOE,COMPO_2_OTOE,COMPO_3_OTOE,OPS,ORF,Other_TDA,RCF,TNG_Base_TDA,TOTAL_,Editor/Title,Modified,FileRef/FileRef&$expand=Editor&$filter=Title eq '"+encodeURIComponent(''+program+'')+"'";


                }else{
                    url = ctx.webAbsoluteUrl + "/_api/web/lists/getbytitle('PROGRAMRO1')/items?$select=ID,Title,BOS,WR,WRA,ACT_SETS,APS_OTOE,COMPO_1_OTOE,COMPO_2_OTOE,COMPO_3_OTOE,OPS,ORF,Other_TDA,RCF,TNG_Base_TDA,TOTAL_,Editor/Title,Modified,FileRef/FileRef&$expand=Editor&$filter=Title eq '"+encodeURIComponent(''+program+'')+"'";


                }
                return url;

            }
            catch(e){
                console.log(e);
            }


        },



        
        getItems:function(url){
            try{
               //console.log(url);


                var response = response || [];  // this variable is used for storing list items
                var defer = $q.defer();
                GetItems();

   
                function GetItems(){
                    $.ajax({
                        url: url,  
                        method: "GET",  
                        headers: {  
                            "Accept": "application/json; odata=verbose"
                        },
                        success: function(data){
                           //console.log(data);
                           response = response.concat(data.d.results);
                           //console.log(response);

                                                       
                            if (data.d.__next) {
                               //console.log('next');
                               url = data.d.__next;
                               GetItems();
                           }else{
                               
                               //console.log('stop')
                               defer.resolve(response);
                           }
  
                        },
                        error: function(e){
                              // error handler code goes here
                              console.log(e);
                        }
                    });
                }//GetItems()


            }
            catch(e){
                console.log(e);
            }

            return defer.promise;

        },
        getItem:function(url){/* Recursive Design Pattern for SharePoint Restful Services: https://codewithrohit.wordpress.com/2017/06/01/sharepoint-rest-api/ */

            try{
               // console.log(url);


                var response = response || [];  // this variable is used for storing list items
                var defer = $q.defer();
                GetItem();

   
                function GetItem(){
                    $.ajax({
                        url: url,  
                        method: "GET",  
                        headers: {  
                            "Accept": "application/json; odata=verbose"
                        },
                        success: function(data){
                           //console.log(data);
                           response = response.concat(data.d);
                           //console.log(response);

                                                       
                            if (data.d.__next) {
                               //console.log('next');
                               url = data.d.__next;
                               GetItem();
                           }else{
                               
                               //console.log('stop')
                               defer.resolve(response);
                           }
  
                        },
                        error: function(e){
                              // error handler code goes here
                              console.log(e);
                        }
                    });
                }//GetItem()


            }
            catch(e){
                console.log(e);
            }

            return defer.promise;

        }

  }//return
});//GetItemsService



