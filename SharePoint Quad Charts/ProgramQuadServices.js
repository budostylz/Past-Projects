/*PAGE LOAD SERVICE*/
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
    APPNDOM:function(program, fys){
        try{   

            var APPNdb = TAFFY(program);
            //console.log(program);
            
            //math.sum( POMdb({APPN:"RDTE"}).select(fyprop) );


            for(var i = 0; i < fys.length; i++){

                var fy = fys[i].Title;
                var fystr = "OData__x0066_y"+fys[i].Title;
                var dollarValue = program[fystr].toString();
                var fySum = math.sum(program['arr']);

                if(program.Path.search('RDTE') !== -1){
                    //console.log('RDTE');
                    //console.log( program[fystr].toString() );
                    //console.log(fySum);
                    jQuery("#rdtefy"+fy).val(dollarValue);
                    jQuery("#rdtePOMPeriod").val(fySum);



                }else if(program.Path.search('PROC') !== -1){
                    //console.log('PROC');
                    //console.log(program);
                    //console.log( program[fystr] );
                    jQuery("#procfy"+fy).val(dollarValue);
                    jQuery("#procPOMPeriod").val(fySum);



    
    
                }else if(program.Path.search('OTHER') !== -1){
                    //console.log('Other');
                    //console.log(program);
                    //console.log( program[fystr] );
                    jQuery("#otherfy"+fy).val(dollarValue);
                    jQuery("#otherPOMPeriod").val(fySum);



    
    
                }else if(program.Path.search('TOTAL') !== -1){
                    //console.log('Total');
                    //console.log(program);
                    //console.log( program[fystr] );
                    jQuery("#totalfy"+fy).val(dollarValue);
                    jQuery("#totalPOMPeriod").val(fySum);


    
    
                }else if(program.Path.search('QUANTITY') !== -1){
                    //console.log('Quantity');
                    //console.log(program);
                    //console.log( program[fystr] );
                    jQuery("#quantityfy"+fy).val(dollarValue);
                    jQuery("#quantityPOMPeriod").val(fySum);



    
    
                }else if(program.Path.search('MYCFLOOR') !== -1){
                    //console.log('MYC Floor');
                    //console.log(program);
                    //console.log( program[fystr] );
                    jQuery("#mycfloorfy"+fy).val(dollarValue);
                    jQuery("#mycfloorPOMPeriod").val(fySum);



    
                }else if(program.Path.search('DEEPDIVE') !== -1){
                    //console.log('Deep Dive');
                    //console.log(program);
                    //console.log( program[fystr] );
                    jQuery("#deepdivefy"+fy).val(dollarValue);
                    jQuery("#deepdivePOMPeriod").val(fySum);



                }

                



            }


            
        }
        catch(e){
            console.log(e);
        }

        
    },//APPNDOM()
    

  }//return
}]);//PageLoadService

/*NEW PROGRAM SERVICE*/
angular.module('app').factory('NewProgram', ['$q',function ($q) {

	
    return {

        addProgramLists: function (bos, program, obj) {

            try{

                SP.SOD.executeFunc('SP.Runtime.js', 'SP.ClientContext',
                function () {
                    SP.SOD.executeFunc('SP.js', 'SP.ClientContext',
                    function () {

                        //console.log(obj);

                        var programRequirements = obj[0].PROGRAMREQUIREMENTS;
                        var programOverview = obj[0].PROGRAMMATICOVERVIEW;
                        //var programCap = obj[0].CAPABILITYDESC;
                        var programPOM = obj[0].POMALLO;
                        var rdte = obj[0].RDTE;
                        var proc = obj[0].PROC;
                        var other = obj[0].OTHER;
                        var total = obj[0].TOTAL;
                        var mycfloor = obj[0].MYCFLOOR;
                        var deepdive = obj[0].DEEPDIVE;
                        var quantity = obj[0].QUANTITY;
                        var arr = [programRequirements,programOverview,programPOM,rdte,proc,other,total,mycfloor,deepdive,quantity];                      
                        var ctx = _spPageContextInfo.webAbsoluteUrl;                
                        var clientContext = new SP.ClientContext(ctx);


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

                            if(i === arr.length - 1){

                                setTimeout(function(){ location.href = ctx + "/Pages/quad1.aspx?";  }, 5000);


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

        },//addDeepDiveDetails()

        
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


        }//validateInput()


  }//return
}]);//NewProgramService

/* PROGRAM SERVICE */
angular.module('app').factory('ProgramService', function ($q) {

	
    return {


        ClearProgramDOM:function(){
            try{
                jQuery("#currentProgramName").empty();   
                jQuery("#currentProgramBOS").empty();           
                jQuery("#currentProgramRoot").empty();           
                jQuery("#currentProgramKey4").empty();           
                jQuery("#currentProgramLIN").empty();    
                
                jQuery(".reqcap").val('');     
                jQuery(".progOverview").val('');     
                jQuery(".progDesc").val('');            
                //jQuery(".progPic").val('');            
                jQuery(".POMAllocTable").val(''); 
                jQuery(".POMAllocSec").val('');             
            
      

 

            }
            catch(e){
                console.log(e)
            }
        },//ClearProgramDOM

        CurrentProgramDOM:function(currentProgram){

            try{

                //console.log(currentProgram)
                
                var programName = currentProgram[0].Title || "";
                var programBOS = currentProgram[0].BOS || "";
                var programRoot = currentProgram[0].progRoot || "";
                var programKey4 = currentProgram[0].progkey4 || "";
                var programLIN = currentProgram[0].progLIN || "";


               
                jQuery("#currentProgramName").append('<div>'+programName+'</div>');    
                jQuery("#currentProgramBOS").append('<div>'+programBOS+'</div>');           
                jQuery("#currentProgramRoot").append('<div>'+programRoot+'</div>');           
                jQuery("#currentProgramKey4").append('<div>'+programKey4+'</div>');           
                jQuery("#currentProgramLIN").append('<div>'+programLIN+'</div>');           
       
                


    
    
            
               
            }
            catch(e){
                console.log(e);
            }
    
    
    
        },//CurrentProgramDOM()

        RequirementsCapDOM:function(currentProgram){

            try{

                //console.log(currentProgram)
                
                var programName = currentProgram[0].Title || "";
                var programBOS = currentProgram[0].BOS || "";
                var programRoot = currentProgram[0].progRoot || "";
                var programKey4 = currentProgram[0].progkey4 || "";
                var programLIN = currentProgram[0].progLIN || "";

                var formation = currentProgram[0].formation || "";
                var reqDoc = currentProgram[0].approvedRequirementsDoc || "";
                var arocjroc = currentProgram[0].arocjroc || "";
                var reqCap = currentProgram[0].capability || "";
                var priority = currentProgram[0].armymodernizationpriority || "";
                var assessment = currentProgram[0].coecgassessment || "";
                var risk = currentProgram[0].risk || "";
                var aao = currentProgram[0].TotalAAO || "";
                var apo = currentProgram[0].TotalAPO || "";
                var inventoryNum = currentProgram[0].Inventory || "";
                var inventoryPercent = currentProgram[0].InventoryPercent || "";
                var editor = currentProgram[0].Editor.Title || "";
                var modified = moment(currentProgram[0].Modified).format('MMMM Do YYYY, h:mm:ss a') || "";




               
                jQuery("#formation").val(formation);    
                jQuery("#reqDoc").val(reqDoc);    
                jQuery("#aroc-jroc").val(arocjroc);    
                jQuery("#capability").val(reqCap);    
                jQuery("#priority").val(priority);    
                jQuery("#assessment").val(assessment);    
                jQuery("#risk").val(risk);    
                
                /*jQuery("#AAOLabel").val(aao);    
                jQuery("#formation").val(apo);   
                jQuery("#formation").val(inventoryNum);    
                jQuery("#formation").val(inventoryPercent);  */  

                jQuery("#modifiedSpanReqCap").empty();
                jQuery("#modifiedSpanReqCap").append('Last Modified by ' + editor + ' at ' + modified);    
 
                   
       
                


    
    
            
               
            }
            catch(e){
                console.log(e);
            }
    
    
    
        },//RequirementsCapDOM()

        ProgrammaticOverviewDOM:function(currentProgram){

            try{

                //console.log(currentProgram)
                
                var programName = currentProgram[0].Title || "";
                var programBOS = currentProgram[0].BOS || "";
                var programRoot = currentProgram[0].progRoot || "";
                var programKey4 = currentProgram[0].progkey4 || "";
                var programLIN = currentProgram[0].progLIN || "";

                var vendor = currentProgram[0].vendor || "";
                var proponent = currentProgram[0].Proponent || "";
                var contracttype = currentProgram[0].contracttype || "";
                var acatlevel = currentProgram[0].acatlevel || "";
                var states = currentProgram[0].US || "";
                var milestone = currentProgram[0].Milestones || "";
                var alternative = currentProgram[0].costalternative || "";
                var cotsOptions = currentProgram[0].COTSOptions || "";
                var impacts = currentProgram[0].industryBaseImpacts || "";
                var apuc = currentProgram[0].APUC || "";
                var limitations = currentProgram[0].limitations|| "";
                var msr = currentProgram[0].MSR || "";
                var mpr = currentProgram[0].MPR || "";
                var editor = currentProgram[0].Editor.Title || "";
                var modified = moment(currentProgram[0].Modified).format('MMMM Do YYYY, h:mm:ss a') || "";


    
                jQuery("#vendor").val(vendor);    
                jQuery("#proponent").val(proponent);    
                jQuery("#contractType").val(contracttype);    
                jQuery("#acatlevel").val(acatlevel);    
                jQuery("#states-interest").val(states);    
                jQuery("#milestone").val(milestone);    
                jQuery("#alternative").val(alternative);  
                jQuery("#cots-options").val(cotsOptions);    
                jQuery("#impacts").val(impacts);   
                jQuery("#apuc").val(apuc);    
                jQuery("#limitations").val(limitations);    
                jQuery("#msr").val(msr); 
                jQuery("#mpr").val(mpr);    
   
 

                jQuery("#modifiedOverview").empty();
                jQuery("#modifiedOverview").append('Last Modified by ' + editor + ' at ' + modified);    
 
                   
       
                


    
    
            
               
            }
            catch(e){
                console.log(e);
            }
    
    
    
        },//RequirementsCapDOM()

        ProgrammaticDescDOM:function(currentProgram){

            try{

                //console.log(currentProgram)
                
                var programName = currentProgram[0].Title || "";
                var programBOS = currentProgram[0].BOS || "";
                var programRoot = currentProgram[0].progRoot || "";
                var programKey4 = currentProgram[0].progkey4 || "";
                var programLIN = currentProgram[0].progLIN || "";

                var desc = currentProgram[0].CapabilityDescription || "";
                var editor = currentProgram[0].Editor.Title || "";
                var modified = moment(currentProgram[0].Modified).format('MMMM Do YYYY, h:mm:ss a') || "";


                console.log('DESC ' + desc)
                jQuery("#programdesc").val(desc);
                jQuery("#modifiedSpanProgDesc").empty();
                jQuery("#modifiedSpanProgDesc").append('Last Modified by ' + editor + ' at ' + modified);    
 
                   
       
                


    
    
            
               
            }
            catch(e){
                console.log(e);
            }
    
    
    
        },//ProgrammaticDescDOM()

        POMDOM:function(currentProgram){

            try{

                //console.log(currentProgram)
                
                var programName = currentProgram[0].Title || "";
                var programBOS = currentProgram[0].BOS || "";
                var programRoot = currentProgram[0].progRoot || "";
                var programKey4 = currentProgram[0].progkey4 || "";
                var programLIN = currentProgram[0].progLIN || "";

                var deepDiveImpacts = currentProgram[0].DeepDiveImpacts || "";
                var congressionalMarks = currentProgram[0].CongressionalMarks || "";
                var pdm = currentProgram[0].PDM || "";
                var funding = currentProgram[0].OtherFundingIssues || "";
                var modLevel = currentProgram[0].MODLevel || "";

                var editor = currentProgram[0].Editor.Title || "";
                var modified = moment(currentProgram[0].Modified).format('MMMM Do YYYY, h:mm:ss a') || "";
               
                jQuery("#deep-dive-impacts").val(deepDiveImpacts);    
                jQuery("#congressional-marks").val(congressionalMarks);    
                jQuery("#pdm").val(pdm);    
                jQuery("#funding").val(funding);    
                jQuery("#MODLevel").val(modLevel);    
                

                jQuery("#modifiedSpanPOMAllo").empty();
                jQuery("#modifiedSpanPOMAllo").append('Last Modified by ' + editor + ' at ' + modified);    
 
                   
       
                


    
    
            
               
            }
            catch(e){
                console.log(e);
            }
    
    
    
        },//POMDOM()


        ProgramRDTEDOM:function(currentProgram, FYs){

            try{

                console.log(FYs)
                //console.log(currentProgram)
                
                var programName = currentProgram[0].Title || "";
                var programBOS = currentProgram[0].BOS || "";
                var programRoot = currentProgram[0].progRoot || "";
                var programKey4 = currentProgram[0].progkey4 || "";
                var programLIN = currentProgram[0].progLIN || "";
                
                
                var editor = currentProgram[0].Editor.Title || "";
                var modified = moment(currentProgram[0].Modified).format('MMMM Do YYYY, h:mm:ss a') || "";


                for(var i = 0; i < FYs.length; i++){
                    if(FYs[i].OData__x0050_2){//USE SITE COLUMN WHEN IMPORTING FROM ACCESS
        
                        var fystr = 'FY'+ FYs[i].OData__x0050_2;//USE SITE COLUMN WHEN IMPORTING FROM ACCESS
                        var fy = FYs[i].OData__x0050_2;
                        var sum = currentProgram[0]['OData__x0066_y'+fy] || "";
                        console.log(fy + ' : ' + sum)
                        //console.log(fystr);
                        //console.log(sum)

                        //oListItem.set_item('_x0066_y'+fy+'',sum);

                        jQuery("#rdtefy"+fy+"").val(sum)


                    }
                }


                jQuery("#modifiedSpanPOMAllo").empty();
                jQuery("#modifiedSpanPOMAllo").append('Last Modified by ' + editor + ' at ' + modified);    
 
                   
       
                


    
    
            
               
            }
            catch(e){
                console.log(e);
            }
    
    
    
        },//ProgramRDTEDOM()

        ProgramPROCDOM:function(currentProgram, FYs){

            try{

                //console.log(FYs)
                //console.log(currentProgram)
                
                var programName = currentProgram[0].Title || "";
                var programBOS = currentProgram[0].BOS || "";
                var programRoot = currentProgram[0].progRoot || "";
                var programKey4 = currentProgram[0].progkey4 || "";
                var programLIN = currentProgram[0].progLIN || "";
                
                
                var editor = currentProgram[0].Editor.Title || "";
                var modified = moment(currentProgram[0].Modified).format('MMMM Do YYYY, h:mm:ss a') || "";


                for(var i = 0; i < FYs.length; i++){
                    if(FYs[i].OData__x0050_2){//USE SITE COLUMN WHEN IMPORTING FROM ACCESS
        
                        var fystr = 'FY'+ FYs[i].OData__x0050_2;//USE SITE COLUMN WHEN IMPORTING FROM ACCESS
                        var fy = FYs[i].OData__x0050_2;
                        var sum = currentProgram[0]['OData__x0066_y'+fy] || "";
                        //console.log(fy)
                        //console.log(fystr);
                        //console.log(sum)

                        //oListItem.set_item('_x0066_y'+fy+'',sum);

                        jQuery("#procfy"+fy+"").val(sum)

                    }
                }


                jQuery("#modifiedSpanPOMAllo").empty();
                jQuery("#modifiedSpanPOMAllo").append('Last Modified by ' + editor + ' at ' + modified);    
 

            
               
            }
            catch(e){
                console.log(e);
            }
    
    
    
        },//ProgramPROCDOM()

        ProgramOTHERDOM:function(currentProgram, FYs){

            try{

                //console.log(FYs)
                //console.log(currentProgram)
                
                var programName = currentProgram[0].Title || "";
                var programBOS = currentProgram[0].BOS || "";
                var programRoot = currentProgram[0].progRoot || "";
                var programKey4 = currentProgram[0].progkey4 || "";
                var programLIN = currentProgram[0].progLIN || "";
                
                
                var editor = currentProgram[0].Editor.Title || "";
                var modified = moment(currentProgram[0].Modified).format('MMMM Do YYYY, h:mm:ss a') || "";


                for(var i = 0; i < FYs.length; i++){
                    if(FYs[i].OData__x0050_2){//USE SITE COLUMN WHEN IMPORTING FROM ACCESS
        
                        var fystr = 'FY'+ FYs[i].OData__x0050_2;//USE SITE COLUMN WHEN IMPORTING FROM ACCESS
                        var fy = FYs[i].OData__x0050_2;
                        var sum = currentProgram[0]['OData__x0066_y'+fy] || "";
                        //console.log(fy)
                        //console.log(fystr);
                        //console.log(sum)

                        //oListItem.set_item('_x0066_y'+fy+'',sum);

                        jQuery("#otherfy"+fy+"").val(sum)

                    }
                }


                jQuery("#modifiedSpanPOMAllo").empty();
                jQuery("#modifiedSpanPOMAllo").append('Last Modified by ' + editor + ' at ' + modified);    
 

            
               
            }
            catch(e){
                console.log(e);
            }
    
    
    
        },//ProgramOTHERDOM()

        ProgramTOTALDOM:function(currentProgram, FYs){

            try{

                //console.log(FYs)
                //console.log(currentProgram)
                
                var programName = currentProgram[0].Title || "";
                var programBOS = currentProgram[0].BOS || "";
                var programRoot = currentProgram[0].progRoot || "";
                var programKey4 = currentProgram[0].progkey4 || "";
                var programLIN = currentProgram[0].progLIN || "";
                
                
                var editor = currentProgram[0].Editor.Title || "";
                var modified = moment(currentProgram[0].Modified).format('MMMM Do YYYY, h:mm:ss a') || "";


                for(var i = 0; i < FYs.length; i++){
                    if(FYs[i].OData__x0050_2){//USE SITE COLUMN WHEN IMPORTING FROM ACCESS
        
                        var fystr = 'FY'+ FYs[i].OData__x0050_2;//USE SITE COLUMN WHEN IMPORTING FROM ACCESS
                        var fy = FYs[i].OData__x0050_2;
                        var sum = currentProgram[0]['OData__x0066_y'+fy] || "";
                        //console.log(fy)
                        //console.log(fystr);
                        //console.log(sum)

                        //oListItem.set_item('_x0066_y'+fy+'',sum);

                        jQuery("#totalfy"+fy+"").val(sum)

                    }
                }


                jQuery("#modifiedSpanPOMAllo").empty();
                jQuery("#modifiedSpanPOMAllo").append('Last Modified by ' + editor + ' at ' + modified);    
 

            
               
            }
            catch(e){
                console.log(e);
            }
    
    
    
        },//ProgramTOTALDOM()

        ProgramMYCFLOORDOM:function(currentProgram, FYs){

            try{

                //console.log(FYs)
                //console.log(currentProgram)
                
                var programName = currentProgram[0].Title || "";
                var programBOS = currentProgram[0].BOS || "";
                var programRoot = currentProgram[0].progRoot || "";
                var programKey4 = currentProgram[0].progkey4 || "";
                var programLIN = currentProgram[0].progLIN || "";
                
                
                var editor = currentProgram[0].Editor.Title || "";
                var modified = moment(currentProgram[0].Modified).format('MMMM Do YYYY, h:mm:ss a') || "";


                for(var i = 0; i < FYs.length; i++){
                    if(FYs[i].OData__x0050_2){//USE SITE COLUMN WHEN IMPORTING FROM ACCESS
        
                        var fystr = 'FY'+ FYs[i].OData__x0050_2;//USE SITE COLUMN WHEN IMPORTING FROM ACCESS
                        var fy = FYs[i].OData__x0050_2;
                        var sum = currentProgram[0]['OData__x0066_y'+fy] || "";
                        //console.log(fy)
                        //console.log(fystr);
                        //console.log(sum)

                        //oListItem.set_item('_x0066_y'+fy+'',sum);

                        jQuery("#mycfloorfy"+fy+"").val(sum)

                    }
                }


                jQuery("#modifiedSpanPOMAllo").empty();
                jQuery("#modifiedSpanPOMAllo").append('Last Modified by ' + editor + ' at ' + modified);    
 

            
               
            }
            catch(e){
                console.log(e);
            }
    
    
    
        },//ProgramMYCFLOORDOM()



        BOSDOM:function(bosArr){

            //load Portfolios drop down
            for(var i = 0; i < bosArr.length; i++){     
                var bosname = bosArr[i];      
                //console.log(bosname);
                if(i===0){
                    jQuery("#allProgramBOS").append('<option>Choose a Portfolio</option>');
                }
                jQuery("#allProgramBOS").append('<option>'+bosname+'</option>');
            } 
            
        },//BOSDOM

        ProgramDOM:function(programArr){


                //console.log(programArr);

                if(programArr.length > 0){

                    jQuery("#allPrograms").empty();
                    for(var i = 0; i < programArr.length; i++){

                        var programName = programArr[i].Title;

                        //console.log(programName)


                        if(i===0){
                            jQuery("#allPrograms").append('<option>Choose a Program</option>');
                        }
                        jQuery("#allPrograms").append('<option>'+programName+'</option>');
        

                    }


                }else{
                    //console.log('clear')
                    jQuery("#allPrograms").empty();
                    jQuery("#allPrograms").append('<option>No Programs Found</option>');



                }


        
        },//ProgramDOM

        updateProgramRequirements: function (programName, id, list, bos, sourceData) {

            try{

                SP.SOD.executeFunc('SP.Runtime.js', 'SP.ClientContext',
                function () {
                    SP.SOD.executeFunc('SP.js', 'SP.ClientContext',
                    function () {

                        console.log(sourceData);
                        //console.log(programID);


                        

                        var root  = sourceData[bos]['Roots'].toString();
                        var key4  = sourceData[bos]['Key4s'].toString();
                        var LIN  = sourceData[bos]['LINs'].toString();

                        var formation = jQuery("#formation").val();
                        var reqDoc = jQuery("#reqDoc").val();    
                        var arocjroc = jQuery("#aroc-jroc").val();
                        var reqCap = jQuery("#capability").val();
                        var priority = jQuery("#priority").val();
                        var assessment = jQuery("#assessment").val();
                        var risk = jQuery("#risk").val(); 
                        /*var aao = currentProgram[0].TotalAAO || "";
                        var apo = currentProgram[0].TotalAPO || "";
                        var inventoryNum = currentProgram[0].Inventory || "";
                        var inventoryPercent = currentProgram[0].InventoryPercent || "";*/
  
                        
                        
                        
                        //Update Program Details
                        var ctx = _spPageContextInfo.webAbsoluteUrl;                
                        var clientContext = new SP.ClientContext(ctx);
                        var oList =  clientContext.get_web().get_lists().getByTitle(list);//MILTECH
                        var oListItem = oList.getItemById(id);  
                        
                        //core                 
                        //oListItem.set_item('Title', programName);
                        oListItem.set_item('BOS', bos);
                        oListItem.set_item('progRoot', root);
                        oListItem.set_item('progkey4', key4);
                        oListItem.set_item('progLIN', LIN);

                        
                         oListItem.set_item('formation', formation);
                         oListItem.set_item('approvedRequirementsDoc', reqDoc);
                         oListItem.set_item('arocjroc', arocjroc);
                         oListItem.set_item('capability', reqCap);
                         oListItem.set_item('armymodernizationpriority', priority);
                         oListItem.set_item('coecgassessment', assessment);
                         oListItem.set_item('risk', risk);
                        /* oListItem.set_item('TotalAAO', aao);
                         oListItem.set_item('TotalAPO', apo);
                         oListItem.set_item('Inventory', inventoryNum);
                         oListItem.set_item('InventoryPercent', inventoryPercent);*/


                        oListItem.update();                 
                        clientContext.load(oListItem);	       
                        clientContext.executeQueryAsync(onRequestSucceeded, onRequestFailed);

                            function onRequestSucceeded() {
                                var itemID = oListItem.get_id().toString();
                                console.log( programName + ' Requirements/Capability to the Force\nUpdated ');    

    


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

        },// updateProgramDetails

        updateProgramOverview: function (programName, id, list, bos, sourceData) {

            try{

                SP.SOD.executeFunc('SP.Runtime.js', 'SP.ClientContext',
                function () {
                    SP.SOD.executeFunc('SP.js', 'SP.ClientContext',
                    function () {

                        //console.log(sourceData);
                        //console.log(programID);

                        var root  = sourceData[bos]['Roots'].toString();
                        var key4  = sourceData[bos]['Key4s'].toString();
                        var LIN  = sourceData[bos]['LINs'].toString();

                        var vendor = jQuery("#vendor").val(); 
                        var proponent = jQuery("#proponent").val();
                        var contractType = jQuery("#contractType").val();
                        var acatlevel = jQuery("#acatlevel").val();
                        var states =  jQuery("#states-interest").val();
                        var milestone =  jQuery("#milestone").val(); 
                        var alternative = jQuery("#alternative").val();
                        var cotsOptions =  jQuery("#cots-options").val(); 
                        var impacts = jQuery("#impacts").val();
                        var apuc = jQuery("#apuc").val(); 
                        var limitations = jQuery("#limitations").val(); 
                        var msr = jQuery("#msr").val(); 
                        var mpr =  jQuery("#mpr").val(); 



                        
                        //Update Program Details
                        var ctx = _spPageContextInfo.webAbsoluteUrl;                
                        var clientContext = new SP.ClientContext(ctx);
                        var oList =  clientContext.get_web().get_lists().getByTitle(list);//MILTECH
                        var oListItem = oList.getItemById(id);  
                        
                        //core                 
                        //oListItem.set_item('Title', programName);
                        oListItem.set_item('BOS', bos);
                        oListItem.set_item('progRoot', root);
                        oListItem.set_item('progkey4', key4);
                        oListItem.set_item('progLIN', LIN);

                         oListItem.set_item('vendor', vendor);
                         oListItem.set_item('Proponent', proponent);
                         oListItem.set_item('acatlevel', acatlevel);
                         oListItem.set_item('contracttype', contractType);
                         oListItem.set_item('US', states);
                         oListItem.set_item('Milestones', milestone);
                         oListItem.set_item('costalternative', alternative);
                         oListItem.set_item('COTSOptions', cotsOptions);
                         oListItem.set_item('industryBaseImpacts', impacts);
                         oListItem.set_item('APUC', apuc);
                         oListItem.set_item('limitations', limitations);
                         oListItem.set_item('MSR', msr);
                         oListItem.set_item('MPR', mpr);

                        oListItem.update();                 
                        clientContext.load(oListItem);	       
                        clientContext.executeQueryAsync(onRequestSucceeded, onRequestFailed);

                            function onRequestSucceeded() {
                                var itemID = oListItem.get_id().toString();
                                console.log( programName + ' Programmatic Overview\nUpdated ');    

    


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

        updateProgramCapability: function (programName, id, list, bos, sourceData) {

            try{

                SP.SOD.executeFunc('SP.Runtime.js', 'SP.ClientContext',
                function () {
                    SP.SOD.executeFunc('SP.js', 'SP.ClientContext',
                    function () {

                        //console.log(sourceData);
                        //console.log(programID);

                        var root  = sourceData[bos]['Roots'].toString();
                        var key4  = sourceData[bos]['Key4s'].toString();
                        var LIN  = sourceData[bos]['LINs'].toString();
        
                        var desc = jQuery("#programdesc").val();

        
                        //Update Program Details
                        var ctx = _spPageContextInfo.webAbsoluteUrl;                
                        var clientContext = new SP.ClientContext(ctx);
                        var oList =  clientContext.get_web().get_lists().getByTitle(list);//MILTECH
                        var oListItem = oList.getItemById(id);  
                        
                        //core                 
                        //oListItem.set_item('Title', programName);
                        oListItem.set_item('BOS', bos);
                        oListItem.set_item('progRoot', root);
                        oListItem.set_item('progkey4', key4);
                        oListItem.set_item('progLIN', LIN);

                        oListItem.set_item('CapabilityDescription',  desc);

                        oListItem.update();                 
                        clientContext.load(oListItem);	       
                        clientContext.executeQueryAsync(onRequestSucceeded, onRequestFailed);

                            function onRequestSucceeded() {
                                var itemID = oListItem.get_id().toString();
                                console.log( programName + ' Capability Description\nUpdated ');    

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

        updateProgramRDTE: function (programName, id, list, bos, sourceData, FYs) {

            try{

                SP.SOD.executeFunc('SP.Runtime.js', 'SP.ClientContext',
                function () {
                    SP.SOD.executeFunc('SP.js', 'SP.ClientContext',
                    function () {

                        //console.log(sourceData);
                        //console.log(programID);

                        var root  = sourceData[bos]['Roots'].toString();
                        var key4  = sourceData[bos]['Key4s'].toString();
                        var LIN  = sourceData[bos]['LINs'].toString();

                        //Update Program Details
                        var ctx = _spPageContextInfo.webAbsoluteUrl;                
                        var clientContext = new SP.ClientContext(ctx);
                        var oList =  clientContext.get_web().get_lists().getByTitle(list);//MILTECH
                        var oListItem = oList.getItemById(id);  

                        //core                 
                        //oListItem.set_item('Title', programName);
                        oListItem.set_item('BOS', bos);
                        oListItem.set_item('progRoot', root);
                        oListItem.set_item('progkey4', key4);
                        oListItem.set_item('progLIN', LIN);

                        


                        for(var i = 0; i < FYs.length; i++){
                            if(FYs[i].OData__x0050_2){//USE SITE COLUMN WHEN IMPORTING FROM ACCESS
                
                                var fystr = 'FY'+ FYs[i].OData__x0050_2;//USE SITE COLUMN WHEN IMPORTING FROM ACCESS
                                var fy = FYs[i].OData__x0050_2;
                                var sum =  jQuery("#rdtefy"+fy+"").val();
                                //console.log(fystr);
                                //console.log(sum)

                                oListItem.set_item('_x0066_y'+fy+'',sum);
                            }
                        }

                        oListItem.update();                 
                        clientContext.load(oListItem);	       
                        clientContext.executeQueryAsync(onRequestSucceeded, onRequestFailed);

                            function onRequestSucceeded() {
                                var itemID = oListItem.get_id().toString();
                                console.log( programName + 'RDTE \nUpdated ');    

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

        },//updateProgramRDTE

        updateProgramPROC: function (programName, id, list, bos, sourceData, FYs) {

            try{

                SP.SOD.executeFunc('SP.Runtime.js', 'SP.ClientContext',
                function () {
                    SP.SOD.executeFunc('SP.js', 'SP.ClientContext',
                    function () {

                        //console.log(sourceData);
                        //console.log(programID);

                        var root  = sourceData[bos]['Roots'].toString();
                        var key4  = sourceData[bos]['Key4s'].toString();
                        var LIN  = sourceData[bos]['LINs'].toString();

                        //Update Program Details
                        var ctx = _spPageContextInfo.webAbsoluteUrl;                
                        var clientContext = new SP.ClientContext(ctx);
                        var oList =  clientContext.get_web().get_lists().getByTitle(list);//MILTECH
                        var oListItem = oList.getItemById(id);  

                        //core                 
                        //oListItem.set_item('Title', programName);
                        oListItem.set_item('BOS', bos);
                        oListItem.set_item('progRoot', root);
                        oListItem.set_item('progkey4', key4);
                        oListItem.set_item('progLIN', LIN);

                        


                        for(var i = 0; i < FYs.length; i++){
                            if(FYs[i].OData__x0050_2){//USE SITE COLUMN WHEN IMPORTING FROM ACCESS
                
                                var fystr = 'FY'+ FYs[i].OData__x0050_2;//USE SITE COLUMN WHEN IMPORTING FROM ACCESS
                                var fy = FYs[i].OData__x0050_2;
                                var sum =  jQuery("#procfy"+fy+"").val();
                                //console.log(fystr);
                                //console.log(sum)

                                oListItem.set_item('_x0066_y'+fy+'',sum);
                            }
                        }

                        oListItem.update();                 
                        clientContext.load(oListItem);	       
                        clientContext.executeQueryAsync(onRequestSucceeded, onRequestFailed);

                            function onRequestSucceeded() {
                                var itemID = oListItem.get_id().toString();
                                console.log( programName + 'PROC \nUpdated ');    

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

        },//updateProgramPROC

        updateProgramOTHER: function (programName, id, list, bos, sourceData, FYs) {

            try{

                SP.SOD.executeFunc('SP.Runtime.js', 'SP.ClientContext',
                function () {
                    SP.SOD.executeFunc('SP.js', 'SP.ClientContext',
                    function () {

                        //console.log(sourceData);
                        //console.log(programID);

                        var root  = sourceData[bos]['Roots'].toString();
                        var key4  = sourceData[bos]['Key4s'].toString();
                        var LIN  = sourceData[bos]['LINs'].toString();

                        //Update Program Details
                        var ctx = _spPageContextInfo.webAbsoluteUrl;                
                        var clientContext = new SP.ClientContext(ctx);
                        var oList =  clientContext.get_web().get_lists().getByTitle(list);//MILTECH
                        var oListItem = oList.getItemById(id);  

                        //core                 
                        //oListItem.set_item('Title', programName);
                        oListItem.set_item('BOS', bos);
                        oListItem.set_item('progRoot', root);
                        oListItem.set_item('progkey4', key4);
                        oListItem.set_item('progLIN', LIN);

                        


                        for(var i = 0; i < FYs.length; i++){
                            if(FYs[i].OData__x0050_2){//USE SITE COLUMN WHEN IMPORTING FROM ACCESS
                
                                var fystr = 'FY'+ FYs[i].OData__x0050_2;//USE SITE COLUMN WHEN IMPORTING FROM ACCESS
                                var fy = FYs[i].OData__x0050_2;
                                var sum =  jQuery("#otherfy"+fy+"").val();
                                //console.log(fystr);
                                //console.log(sum)

                                oListItem.set_item('_x0066_y'+fy+'',sum);
                            }
                        }


                        oListItem.update();                 
                        clientContext.load(oListItem);	       
                        clientContext.executeQueryAsync(onRequestSucceeded, onRequestFailed);

                            function onRequestSucceeded() {
                                var itemID = oListItem.get_id().toString();
                                console.log( programName + 'OTHER \nUpdated ');    

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

        },//updateProgramOTHER

        updateProgramTOTAL: function (programName, id, list, bos, sourceData, FYs) {

            try{

                SP.SOD.executeFunc('SP.Runtime.js', 'SP.ClientContext',
                function () {
                    SP.SOD.executeFunc('SP.js', 'SP.ClientContext',
                    function () {

                        //console.log(sourceData);
                        //console.log(programID);

                        var root  = sourceData[bos]['Roots'].toString();
                        var key4  = sourceData[bos]['Key4s'].toString();
                        var LIN  = sourceData[bos]['LINs'].toString();

                        //Update Program Details
                        var ctx = _spPageContextInfo.webAbsoluteUrl;                
                        var clientContext = new SP.ClientContext(ctx);
                        var oList =  clientContext.get_web().get_lists().getByTitle(list);//MILTECH
                        var oListItem = oList.getItemById(id);  

                        //core                 
                        //oListItem.set_item('Title', programName);
                        oListItem.set_item('BOS', bos);
                        oListItem.set_item('progRoot', root);
                        oListItem.set_item('progkey4', key4);
                        oListItem.set_item('progLIN', LIN);

                        


                        for(var i = 0; i < FYs.length; i++){
                            if(FYs[i].OData__x0050_2){//USE SITE COLUMN WHEN IMPORTING FROM ACCESS
                
                                var fystr = 'FY'+ FYs[i].OData__x0050_2;//USE SITE COLUMN WHEN IMPORTING FROM ACCESS
                                var fy = FYs[i].OData__x0050_2;
                                var sum =  jQuery("#totalfy"+fy+"").val();
                                //console.log(fystr);
                                //console.log(sum)

                                oListItem.set_item('_x0066_y'+fy+'',sum);
                            }
                        }

        
                        oListItem.update();                 
                        clientContext.load(oListItem);	       
                        clientContext.executeQueryAsync(onRequestSucceeded, onRequestFailed);

                            function onRequestSucceeded() {
                                var itemID = oListItem.get_id().toString();
                                console.log( programName + 'Total \nUpdated ');    

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

        },//updateProgramTOTAL

        updateProgramMYCFloor: function (programName, id, list, bos, sourceData, FYs) {

            try{

                SP.SOD.executeFunc('SP.Runtime.js', 'SP.ClientContext',
                function () {
                    SP.SOD.executeFunc('SP.js', 'SP.ClientContext',
                    function () {

                        //console.log(sourceData);
                        //console.log(programID);

                        var root  = sourceData[bos]['Roots'].toString();
                        var key4  = sourceData[bos]['Key4s'].toString();
                        var LIN  = sourceData[bos]['LINs'].toString();
        
                        //Update Program Details
                        var ctx = _spPageContextInfo.webAbsoluteUrl;                
                        var clientContext = new SP.ClientContext(ctx);
                        var oList =  clientContext.get_web().get_lists().getByTitle(list);//MILTECH
                        var oListItem = oList.getItemById(id);  

                        //core                 
                        //oListItem.set_item('Title', programName);
                        oListItem.set_item('BOS', bos);
                        oListItem.set_item('progRoot', root);
                        oListItem.set_item('progkey4', key4);
                        oListItem.set_item('progLIN', LIN);

                        


                        for(var i = 0; i < FYs.length; i++){
                            if(FYs[i].OData__x0050_2){//USE SITE COLUMN WHEN IMPORTING FROM ACCESS
                
                                var fystr = 'FY'+ FYs[i].OData__x0050_2;//USE SITE COLUMN WHEN IMPORTING FROM ACCESS
                                var fy = FYs[i].OData__x0050_2;
                                var sum =  jQuery("#mycfloorfy"+fy+"").val();

                                //console.log(fystr);
                                //console.log(sum)



                                oListItem.set_item('_x0066_y'+fy+'',sum);
                            }
                        }

        
                        oListItem.update();                 
                        clientContext.load(oListItem);	       
                        clientContext.executeQueryAsync(onRequestSucceeded, onRequestFailed);

                            function onRequestSucceeded() {
                                var itemID = oListItem.get_id().toString();
                                console.log( programName + ' MYC Floor\nUpdated ');    

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

        },//updateProgramMYCFloor


        updatePOMAllocation: function (programName, id, list, bos, sourceData) {

            try{

                SP.SOD.executeFunc('SP.Runtime.js', 'SP.ClientContext',
                function () {
                    SP.SOD.executeFunc('SP.js', 'SP.ClientContext',
                    function () {

                        //console.log(sourceData);
                        //console.log(programID);

                        var root  = sourceData[bos]['Roots'].toString();
                        var key4  = sourceData[bos]['Key4s'].toString();
                        var LIN  = sourceData[bos]['LINs'].toString();
        
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
                        
                        //core                 
                        //oListItem.set_item('Title', programName);
                        oListItem.set_item('BOS', bos);
                        oListItem.set_item('progRoot', root);
                        oListItem.set_item('progkey4', key4);
                        oListItem.set_item('progLIN', LIN);

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
                                console.log( programName + ' POM Allo \nUpdated ');    

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

        },//updatePOMAllocation



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

        addItem:function(bos, rootArr, FYs){

            try{

                if (typeof(Storage) !== "undefined") {

                    //console.log('Add BOS');
                    //console.log(bos)
                    //console.log(rootArr);
                    //console.log(sourceData);


                    var sourceData = {};
                    sourceData[bos] = {};
                    sourceData[bos]['RDTE'] = {};
                    sourceData[bos]['PROC'] = {};
                    sourceData[bos]['OTHER'] = {};
                    sourceData[bos]['TOTAL'] = {};
                    sourceData[bos]['DEEPDIVE'] = {};
                    sourceData[bos]['RDTE']['POM'] = 0;
                    sourceData[bos]['PROC']['POM'] = 0;
                    sourceData[bos]['OTHER']['POM'] = 0;
                    sourceData[bos]['TOTAL']['POM'] = 0;

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
                            sourceData[bos]['DEEPDIVE'][fystr] = 0;






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
                    sourceData[bos]['RDTE']['POM'] = 0;
                    sourceData[bos]['PROC']['POM'] = 0;
                    sourceData[bos]['OTHER']['POM'] = 0;
                    sourceData[bos]['TOTAL']['POM'] = 0;
                    
                    sourceData['rootArr'] = rootArr;

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

                    var bos = jQuery("#bos option:selected").text();

                    if(checked){
                        sourceData[bos][root] = {};

                    }else{

                        delete sourceData[bos][root];

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

        createProgramAPPN:function(sourceData, bos, root, BOSRoot, FYs){

            try{

                if (typeof(Storage) !== "undefined") {


                                //console.log('APPN')
                                var bos = jQuery("#bos option:selected").text();
                                var POMdb = TAFFY(BOSRoot);


                                //console.log(bos);
                                console.log(root)


                                if(sourceData[bos][root]){


                                    sourceData[bos][root]['RDTE'] = {};  sourceData[bos][root]['RDTE']['POM'] = 0; 
                                    sourceData[bos][root]['PROC'] = {};  sourceData[bos][root]['PROC']['POM'] = 0;
                                    sourceData[bos][root]['OTHER'] = {}; sourceData[bos][root]['OTHER']['POM'] = 0;
                
    
                                       //console.log(FYs)
                                       
        
                                        for(var i = FYs.length - 1; i >= 0; i--){
                                            
        
                                            if(FYs[i].OData__x0050_2){//USE SITE COLUMN WHEN IMPORTING FROM ACCESS
        
                                                var fyprop = 'OData__x0066_y' + FYs[i].OData__x0050_2;//USE SITE COLUMN WHEN IMPORTING FROM ACCESS
                                                var fystr = 'FY'+ FYs[i].OData__x0050_2;//USE SITE COLUMN WHEN IMPORTING FROM ACCESS
                    

                                                //RDTE
                                                var rdteSUM = math.sum(POMdb({APPN:"RDTE"}).select(fyprop));

                                                sourceData[bos][root]['RDTE'][fystr] = {}; 
                                                sourceData[bos][root]['RDTE'][fystr]['Items'] = POMdb({APPN:"RDTE"}).select(fyprop);

                                                
                                                sourceData[bos][root]['RDTE'][fystr]['SUM'] = rdteSUM;//scope:root
                                                sourceData[bos]['RDTE'][fystr]['SUM'] += rdteSUM;//scope all roots
                                                sourceData[bos]['TOTAL'][fystr]['SUM'] += rdteSUM;//scope all roots

                
                                                //PROC
                                                sourceData[bos][root]['PROC'][fystr] = {};
        
                                                sourceData[bos][root]['PROC'][fystr]['ACFT'] = {}; var acftSUM = math.sum(POMdb({APPN:"ACFT"}).select(fyprop));
                                                sourceData[bos][root]['PROC'][fystr]['ACFT']['Items'] = POMdb({APPN:"ACFT"}).select(fyprop);
                                                sourceData[bos][root]['PROC'][fystr]['ACFT']['SUM'] = acftSUM;
        
                                                sourceData[bos][root]['PROC'][fystr]['AMMO'] = {}; var ammoSUM = math.sum(POMdb({APPN:"AMMO"}).select(fyprop));
                                                sourceData[bos][root]['PROC'][fystr]['AMMO']['Items'] = POMdb({APPN:"AMMO"}).select(fyprop);
                                                sourceData[bos][root]['PROC'][fystr]['AMMO']['SUM'] = ammoSUM;
        
                                                sourceData[bos][root]['PROC'][fystr]['MSLS'] = {}; var mslsSUM = math.sum(POMdb({APPN:"MSLS"}).select(fyprop));
                                                sourceData[bos][root]['PROC'][fystr]['MSLS']['Items'] = POMdb({APPN:"MSLS"}).select(fyprop);
                                                sourceData[bos][root]['PROC'][fystr]['MSLS']['SUM'] = mslsSUM 
        
                                                sourceData[bos][root]['PROC'][fystr]['OPA'] = {}; var opaSUM = math.sum(POMdb({APPN:"OPA"}).select(fyprop));
                                                sourceData[bos][root]['PROC'][fystr]['OPA']['Items'] = POMdb({APPN:"OPA"}).select(fyprop);
                                                sourceData[bos][root]['PROC'][fystr]['OPA']['SUM'] = opaSUM;
        
                                                sourceData[bos][root]['PROC'][fystr]['WTCV'] = {}; var wtcvSUM = math.sum(POMdb({APPN:"WTCV"}).select(fyprop));
                                                sourceData[bos][root]['PROC'][fystr]['WTCV']['Items'] = POMdb({APPN:"WTCV"}).select(fyprop);
                                                sourceData[bos][root]['PROC'][fystr]['WTCV']['SUM'] = wtcvSUM;
                                                sourceData[bos][root]['PROC'][fystr]['SUM'] = (acftSUM + ammoSUM + mslsSUM + opaSUM + wtcvSUM);//scope: root
                                                sourceData[bos]['PROC'][fystr]['SUM'] += (acftSUM + ammoSUM + mslsSUM + opaSUM + wtcvSUM);//scope: all roots                                                             
                                                sourceData[bos]['TOTAL'][fystr]['SUM'] += (acftSUM + ammoSUM + mslsSUM + opaSUM + wtcvSUM);//scope: all roots



                                                //OTHER                   
                                                sourceData[bos][root]['OTHER'][fystr] = {}
                                                sourceData[bos][root]['OTHER'][fystr]['AWCF'] = {}; var awcfSUM = math.sum(POMdb({APPN:"AWCF"}).select(fyprop));
                                                sourceData[bos][root]['OTHER'][fystr]['AWCF']['Items'] = POMdb({APPN:"AWCF"}).select(fyprop);
                                                sourceData[bos][root]['OTHER'][fystr]['AWCF']['SUM'] = awcfSUM;
                                            
                                                sourceData[bos][root]['OTHER'][fystr]['CHMC'] = {}; var chmcSUM = math.sum(POMdb({APPN:"CHMC"}).select(fyprop));
                                                sourceData[bos][root]['OTHER'][fystr]['CHMC']['Items'] = POMdb({APPN:"CHMC"}).select(fyprop);
                                                sourceData[bos][root]['OTHER'][fystr]['CHMC']['SUM'] = chmcSUM;
        
                                                sourceData[bos][root]['OTHER'][fystr]['CHMD'] = {}; var chmdSUM = math.sum(POMdb({APPN:"CHMD"}).select(fyprop));
                                                sourceData[bos][root]['OTHER'][fystr]['CHMD']['Items'] = POMdb({APPN:"CHMD"}).select(fyprop);
                                                sourceData[bos][root]['OTHER'][fystr]['CHMD']['SUM'] = chmdSUM;
                                    
                                                sourceData[bos][root]['OTHER'][fystr]['MCA']  = {}; var mcaSUM = math.sum(POMdb({APPN:"MCA"}).select(fyprop));
                                                sourceData[bos][root]['OTHER'][fystr]['MCA']['Items'] = POMdb({APPN:"MCA"}).select(fyprop);
                                                sourceData[bos][root]['OTHER'][fystr]['MCA']['SUM'] = mcaSUM;
        
                                                sourceData[bos][root]['OTHER'][fystr]['NGPA'] = {}; var ngpaSUM = math.sum(POMdb({APPN:"NGPA"}).select(fyprop));
                                                sourceData[bos][root]['OTHER'][fystr]['NGPA']['Items'] = POMdb({APPN:"NGPA"}).select(fyprop);
                                                sourceData[bos][root]['OTHER'][fystr]['NGPA']['SUM'] = ngpaSUM;
                                                
                                                sourceData[bos][root]['OTHER'][fystr]['OMA'] = {}; var omaSUM = math.sum(POMdb({APPN:"OMA"}).select(fyprop));
                                                sourceData[bos][root]['OTHER'][fystr]['OMA']['Items'] = POMdb({APPN:"OMA"}).select(fyprop);
                                                sourceData[bos][root]['OTHER'][fystr]['OMA']['SUM'] = omaSUM;
        
                                                sourceData[bos][root]['OTHER'][fystr]['OMNG'] = {}; var omngSUM = math.sum(POMdb({APPN:"OMNG"}).select(fyprop));
                                                sourceData[bos][root]['OTHER'][fystr]['OMNG']['Items'] = POMdb({APPN:"OMNG"}).select(fyprop);
                                                sourceData[bos][root]['OTHER'][fystr]['OMNG']['SUM'] = omngSUM;
        
                                                sourceData[bos][root]['OTHER'][fystr]['OMAR'] = {}; var omarSUM = math.sum(POMdb({APPN:"OMAR"}).select(fyprop));
                                                sourceData[bos][root]['OTHER'][fystr]['OMAR']['Items'] = POMdb({APPN:"OMAR"}).select(fyprop);
                                                sourceData[bos][root]['OTHER'][fystr]['OMAR']['SUM'] = omarSUM;
        
                                                sourceData[bos][root]['OTHER'][fystr]['RDTA'] = {}; var rdtaSUM = math.sum(POMdb({APPN:"RDTA"}).select(fyprop));
                                                sourceData[bos][root]['OTHER'][fystr]['RDTA']['Items'] = POMdb({APPN:"RDTA"}).select(fyprop);
                                                sourceData[bos][root]['OTHER'][fystr]['RDTA']['SUM'] = rdtaSUM;
        
                                                sourceData[bos][root]['OTHER'][fystr]['RPA'] = {}; var rpaSUM = math.sum(POMdb({APPN:"RPA"}).select(fyprop));
                                                sourceData[bos][root]['OTHER'][fystr]['RPA']['Items'] = POMdb({APPN:"RPA"}).select(fyprop);  
                                                sourceData[bos][root]['OTHER'][fystr]['RPA']['SUM'] = rpaSUM;
        
                                                sourceData[bos][root]['OTHER'][fystr]['WEDG'] = {}; var wedgSUM = math.sum(POMdb({APPN:"WEDG"}).select(fyprop));
                                                sourceData[bos][root]['OTHER'][fystr]['WEDG']['Items'] = POMdb({APPN:"WEDG"}).select(fyprop);
                                                sourceData[bos][root]['OTHER'][fystr]['WEDG']['SUM'] = wedgSUM;
        
                                                sourceData[bos][root]['OTHER'][fystr]['WTCV'] = {}; var wtcvSUM = math.sum(POMdb({APPN:"WTCV"}).select(fyprop));
                                                sourceData[bos][root]['OTHER'][fystr]['WTCV']['Items'] = POMdb({APPN:"WTCV"}).select(fyprop);
                                                sourceData[bos][root]['OTHER'][fystr]['WTCV']['SUM'] = wtcvSUM;
                                                
                                                sourceData[bos][root]['OTHER'][fystr]['SUM'] = (awcfSUM + chmcSUM + chmdSUM + mcaSUM + ngpaSUM + omaSUM + omngSUM + omarSUM + rdtaSUM + rpaSUM + wedgSUM + wtcvSUM); //scope: root
                                                sourceData[bos]['OTHER'][fystr]['SUM'] += (awcfSUM + chmcSUM + chmdSUM + mcaSUM + ngpaSUM + omaSUM + omngSUM + omarSUM + rdtaSUM + rpaSUM + wedgSUM + wtcvSUM);//scope: all roots                                                              
                                                sourceData[bos]['TOTAL'][fystr]['SUM'] += (awcfSUM + chmcSUM + chmdSUM + mcaSUM + ngpaSUM + omaSUM + omngSUM + omarSUM + rdtaSUM + rpaSUM + wedgSUM + wtcvSUM);//scope: all roots  



                                                



                                                    //POM Count
                                                    if(i >=2){//POM Total :  Interval of 5 
                                                        //console.log(i)
                                                        //console.log(fyprop);
                                                        //console.log(fystr);
                                                        
                                                        //RDTE POM
                                                        sourceData[bos][root]['RDTE']['POM'] += rdteSUM;//scope:root
                                                        sourceData[bos]['RDTE']['POM'] += rdteSUM;//scope:all roots
                                                        sourceData[bos]['TOTAL']['POM'] += rdteSUM;//scope:all roots



                                                        //PROC POM
                                                        sourceData[bos][root]['PROC']['POM'] += (acftSUM + ammoSUM + mslsSUM + opaSUM + wtcvSUM);//scope:roots
                                                        sourceData[bos]['PROC']['POM'] += (acftSUM + ammoSUM + mslsSUM + opaSUM + wtcvSUM);//scope:all roots
                                                        sourceData[bos]['TOTAL']['POM'] += (acftSUM + ammoSUM + mslsSUM + opaSUM + wtcvSUM);//scope:all roots


                                                        //OTHER POM
                                                        sourceData[bos][root]['OTHER']['POM'] += (awcfSUM + chmcSUM + chmdSUM + mcaSUM + ngpaSUM + omaSUM + omngSUM + omarSUM + rdtaSUM + rpaSUM + wedgSUM + wtcvSUM);//scope:roots
                                                        sourceData[bos]['OTHER']['POM'] += (awcfSUM + chmcSUM + chmdSUM + mcaSUM + ngpaSUM + omaSUM + omngSUM + omarSUM + rdtaSUM + rpaSUM + wedgSUM + wtcvSUM);//scope:all roots
                                                        sourceData[bos]['TOTAL']['POM'] += (awcfSUM + chmcSUM + chmdSUM + mcaSUM + ngpaSUM + omaSUM + omngSUM + omarSUM + rdtaSUM + rpaSUM + wedgSUM + wtcvSUM);//scope:all roots


                                                        

        
                                                    }
        
        
                                                
                    
        
                                            }
        
        
        
        
        
                                        }//for


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
        

        removeProgramAPPN:function(sourceData, bos, root, BOSRoot, FYs){

            try{

                if (typeof(Storage) !== "undefined") {


                                //console.log('APPN')
                                var bos = jQuery("#bos option:selected").text();
                                var POMdb = TAFFY(BOSRoot);




                                if(sourceData[bos][root]){

    
                                       
        
                                       
                                        for(var i = 0; i < FYs.length; i++){
                                            
        
                                            if(FYs[i].OData__x0050_2){//USE SITE COLUMN WHEN IMPORTING FROM ACCESS
        
                                                var fyprop = 'OData__x0066_y' + FYs[i].OData__x0050_2;//USE SITE COLUMN WHEN IMPORTING FROM ACCESS
                                                var fystr = 'FY'+ FYs[i].OData__x0050_2;//USE SITE COLUMN WHEN IMPORTING FROM ACCESS


                                                //RDTE
                                                sourceData[bos]['RDTE'][fystr]['SUM'] -= sourceData[bos][root]['RDTE'][fystr]['SUM'];
                                                sourceData[bos]['TOTAL'][fystr]['SUM'] -= sourceData[bos][root]['RDTE'][fystr]['SUM'];

                                                //PROC
                                                sourceData[bos]['PROC'][fystr]['SUM'] -= sourceData[bos][root]['PROC'][fystr]['SUM'];
                                                sourceData[bos]['TOTAL'][fystr]['SUM'] -= sourceData[bos][root]['PROC'][fystr]['SUM'];

                                                //OTHER
                                                sourceData[bos]['OTHER'][fystr]['SUM'] -= sourceData[bos][root]['OTHER'][fystr]['SUM'];
                                                sourceData[bos]['TOTAL'][fystr]['SUM'] -= sourceData[bos][root]['OTHER'][fystr]['SUM'];


                                            }

        
                                        }//for

                                        //RDTE POM
                                        sourceData[bos]['RDTE']['POM'] -= sourceData[bos][root]['RDTE']['POM'];
                                        sourceData[bos]['TOTAL']['POM'] -= sourceData[bos][root]['RDTE']['POM'];

                                        //PROC POM
                                        sourceData[bos]['PROC']['POM'] -= sourceData[bos][root]['PROC']['POM'];
                                        sourceData[bos]['TOTAL']['POM'] -= sourceData[bos][root]['PROC']['POM'];

                                        //OTHER POM
                                        sourceData[bos]['OTHER']['POM'] -= sourceData[bos][root]['OTHER']['POM'];
                                        sourceData[bos]['TOTAL']['POM'] -= sourceData[bos][root]['OTHER']['POM'];
                                        


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


        createProgramDeepDive:function(sourceData, bos, root, BOSRoot, FYs){
            

            try{

                if (typeof(Storage) !== "undefined") {


                   // console.log('Deep Dive')
                   // console.log(BOSRoot)

                    var POMdb = TAFFY(BOSRoot);
                    //console.log(BOSRoot);

                    

                    if(sourceData[bos][root]){

                        sourceData[bos][root]['RDTE']['Key4s'] = {}; 
                        sourceData[bos][root]['PROC']['Key4s'] = {};
                        sourceData[bos][root]['OTHER']['Key4s'] = {};

                        //Distinct Key 4s
                        //var key4Arr = POMdb().distinct('OData__x006b_ey4');//MILTECH 
                        var key4Arr = POMdb().distinct('OData__x004b_ey4');//O365 

                        //console.log(key4Arr);

                        for(var j = 0; j < key4Arr.length; j++){

                            var key4 = key4Arr[j];
                            //console.log(key4);

                            

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

        createQuantity:function(sourceData, bos, root, LINObj, FYs){

            try{

                if (typeof(Storage) !== "undefined") {

                    //console.log('SET LINs')
                   // console.log(LINObj)


                    //Distinct LINs and Nomenclatures
                    var LINdb = TAFFY(LINObj); 
                    var LINArr = LINdb().distinct('LINOUT');

                    //console.log(LINArr);
                    

                    if(sourceData[bos][root]){
                        

                        sourceData[bos][root]['Quantity'] = {};
                        sourceData[bos][root]['Quantity']['LINs'] = {};

                        for(var i = 0; i < LINArr.length; i++){

                            var LIN = LINArr[i];
                            var nomen = (LINdb({LINOUT:LIN}).select('LINNOMEN'))[0];
                            //console.log(LIN);
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

        setKey4FYs:function(bos, root, key4, FYs, POMdb, sourceData, appn){
            try{

                for(var i = FYs.length - 1; i >= 0; i--){
                                            
        
                    if(FYs[i].OData__x0050_2){//USE SITE COLUMN WHEN IMPORTING FROM ACCESS

                        var fyprop = 'OData__x0066_y' + FYs[i].OData__x0050_2;//USE SITE COLUMN WHEN IMPORTING FROM ACCESS
                        var fystr = 'FY'+ FYs[i].OData__x0050_2;//USE SITE COLUMN WHEN IMPORTING FROM ACCESS
                        var dollars = POMdb({OData__x004b_ey4:key4}).select(fyprop);//O365
                       // var dollars = POMdb({OData__x006b_ey4:key4}).select(fyprop);//MILTECH

                        //var sum = math.sum(POMdb({OData__x006b_ey4:key4}).select(fyprop));//MILTECH
                        var sum = math.sum(POMdb({OData__x004b_ey4:key4}).select(fyprop));//O365


                        //console.log(key4 + ' : ' + sum)

                        if(sum > 0){


                            if(sourceData[bos][root][appn]['Key4s'][key4]){
                                sourceData[bos][root][appn]['Key4s'][key4][fystr] = {};
                                sourceData[bos][root][appn]['Key4s'][key4][fystr]['Items'] = dollars;
                                sourceData[bos][root][appn]['Key4s'][key4][fystr]['SUM'] = sum;

    
    
                            }else{
                                sourceData[bos][root][appn]['Key4s'][key4] = {};
                                sourceData[bos][root][appn]['Key4s'][key4][fystr] = {};
                                sourceData[bos][root][appn]['Key4s'][key4][fystr]['Items'] = dollars;
                                sourceData[bos][root][appn]['Key4s'][key4][fystr]['SUM'] = sum;
                                sourceData[bos][root][appn]['Key4s'][key4]['POM'] = 0;

    
    
    
                            }
    
                            if(i >=2){//POM Total :  Interval of 5 
                                sourceData[bos][root][appn]['Key4s'][key4]['POM'] += sum;
    

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

                for(var i = FYs.length - 1; i >= 0; i--){
                                            
        
                    if(FYs[i].OData__x0050_2){//USE SITE COLUMN WHEN IMPORTING FROM ACCESS

                        var fyprop = 'PQtyFY' + FYs[i].OData__x0050_2;//USE SITE COLUMN WHEN IMPORTING FROM ACCESS
                        var fystr = 'FY'+ FYs[i].OData__x0050_2;//USE SITE COLUMN WHEN IMPORTING FROM ACCESS
                        var quantities = LINdb({LINOUT:LIN}).select(fyprop);
                        var sum = math.sum(LINdb({LINOUT:LIN}).select(fyprop));


                        if(sum > 0){

                            if(sourceData[bos][root]['Quantity']['LINs'][LIN]){
                                sourceData[bos][root]['Quantity']['LINs'][LIN][fystr] = {};
                                sourceData[bos][root]['Quantity']['LINs'][LIN][fystr]['Items'] = quantities;
                                sourceData[bos][root]['Quantity']['LINs'][LIN][fystr]['SUM'] = sum;


                            }else{
                                sourceData[bos][root]['Quantity']['LINs'][LIN] = {};
                                sourceData[bos][root]['Quantity']['LINs'][LIN]['NOMEN'] = nomen;
                                sourceData[bos][root]['Quantity']['LINs'][LIN][fystr] = {};
                                sourceData[bos][root]['Quantity']['LINs'][LIN][fystr]['Items'] = quantities;
                                sourceData[bos][root]['Quantity']['LINs'][LIN][fystr]['SUM'] = 0;
                                sourceData[bos][root]['Quantity']['LINs'][LIN][fystr]['SUM'] = sum;
                                sourceData[bos][root]['Quantity']['LINs'][LIN]['POM'] = 0;

                            }

                            if(i >=2){//POM Total :  Interval of 5 
                                sourceData[bos][root]['Quantity']['LINs'][LIN]['POM'] += sum;
    
    
    
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
                
                 //console.log('load key 4')
                 //console.log(key4Arr);


                if(key4Arr.length === 0) alert('NO KEY 4 for\n'+ root +'');

                if(checked){

                    //console.log('Key 4 DOM')
                    //console.log(obj);

                    for(var key4 in obj){
                        //console.log(key4s);
                        var pom = obj[key4]['POM'];
                        if(pom > 0){
                            //console.log(obj[key4s]['POM'])
                            jQuery('#Key4Label').empty();
                            jQuery('#key4').append('<span id="'+key4+'"><input type="checkbox" class="'+key4+'"><label class='+key4+'>'+key4+' : '+ root +'</label><br/><br/></span>');
    

                        }

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


              //console.log('count ' + LINs.length)

              if(LINs.length === 0) alert('NO LIN for\n'+ root +'');              
                
                
                if(checked){

                    //console.log('LIN DOM')

                    for(var LIN in obj){
                        //console.log(key4s);
                        var pom = obj[LIN]['POM'];
                        var nomen = obj[LIN]['NOMEN'];

                        if(pom > 0){
                            //console.log(obj[LIN]['POM'])
                            jQuery('#LINLabel').empty();
                            jQuery('#LIN').prepend('<span id="'+LIN+'"><input type="checkbox" class="'+LIN+'"><label class='+LIN+'>'+LIN+' : '+nomen+'</label><br/><br/></span>');
        

                        }

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
                //console.log(sourceData[bos][root])

                for(var appn in sourceData[bos][root]){


                    for(var i = 0; i < FYs.length; i++){


                        if(FYs[i].OData__x0050_2){//USE SITE COLUMN WHEN IMPORTING FROM ACCESS
            
                            var fystr = 'FY'+ FYs[i].OData__x0050_2;//USE SITE COLUMN WHEN IMPORTING FROM ACCESS
                            var fy = FYs[i].OData__x0050_2;

                            if(sourceData[bos][root][appn][fystr]){
                                var sum = sourceData[bos][root][appn][fystr]['SUM'];
                                var pom = sourceData[bos][root][appn]['POM'];
                                //console.log(fystr);
                                //console.log(appn)
                                //console.log(sourceData[bos][root][appn])
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

        loadKey4Allo:function(sourceData, bos, key4, FYs, checked){
            try{  

                //console.log('Load Key 4 Allo')
                //console.log(sourceData)
                //console.log( jQuery("#key4Allo") )

                var previousRoot = sourceData[bos]['Previous Root'] || null;
                //console.log('previous root ' + previousRoot)

                if(checked){

                   // console.log(sourceData[bos]['Key4s'])
                    for(var root in sourceData[bos]){//OPTIMIZE FOR ROOT ONLY

                        if(root !== 'RDTE' && root !== 'PROC' && root !== 'OTHER' && root !== 'TOTAL' && root !== 'DEEPDIVE'){
                            console.log(root + ' : ' + key4)


                            if(sourceData[bos][root]['RDTE']['Key4s'][key4]){

                                var pom = sourceData[bos][root]['RDTE']['Key4s'][key4]['POM'];
                                //console.log(pom);
                                this.drawKey4Allo(key4, pom);

                                calculateKey4();




                            }else if(sourceData[bos][root]['PROC']['Key4s'][key4]){
                                var pom  = sourceData[bos][root]['PROC']['Key4s'][key4]['POM'];
                                //console.log(pom);
                                this.drawKey4Allo(key4, pom);




                            }else if(sourceData[bos][root]['OTHER']['Key4s'][key4]){
                                var pom = sourceData[bos][root]['OTHER']['Key4s'][key4]['POM'];
                                //console.log(pom);
                                this.drawKey4Allo(key4, pom);

                            }
                        }

                    }

     
                }else{

                    //console.log('clear')
                    //console.log(jQuery("#"+key4+"key4allo"))
                    jQuery("#"+key4+"rowDisp").remove();

                    for(var root in sourceData[bos]){//OPTIMIZE FOR ROOT ONLY

                        if(root !== 'RDTE' && root !== 'PROC' && root !== 'OTHER' && root !== 'TOTAL' && root !== 'DEEPDIVE'){
                            console.log(root + ' : ' + key4)


                            if(sourceData[bos][root]['RDTE']['Key4s'][key4]){

                                var pom = sourceData[bos][root]['RDTE']['Key4s'][key4]['POM'];
                                //console.log(pom);

                                calculateKey4();




                            }else if(sourceData[bos][root]['PROC']['Key4s'][key4]){
                                var pom  = sourceData[bos][root]['PROC']['Key4s'][key4]['POM'];
                                //console.log(pom);
                                this.drawKey4Allo(key4, pom);




                            }else if(sourceData[bos][root]['OTHER']['Key4s'][key4]){
                                var pom = sourceData[bos][root]['OTHER']['Key4s'][key4]['POM'];
                                //console.log(pom);
                                this.drawKey4Allo(key4, pom);

                            }
                        }

                    }
                                


                }

                function calculateKey4(){


                    console.log(FYs);
                    for(var i = 0; i < FYs.length; i++){


                        if(FYs[i].OData__x0050_2){

                            var fystr = 'FY'+ FYs[i].OData__x0050_2;//USE SITE COLUMN WHEN IMPORTING FROM ACCESS
                            var fy = FYs[i].OData__x0050_2;

                            if(checked && sourceData[bos][root]['RDTE']['Key4s'][key4][fystr]){
                                    
                                    console.log(fystr);
                                    console.log(sourceData[bos][root]['RDTE']['Key4s'][key4][fystr]['SUM'])
                                    sourceData[bos]['DEEPDIVE'][fystr] += sourceData[bos][root]['RDTE']['Key4s'][key4][fystr]['SUM'];


                            }
                            
                            if(!checked && sourceData[bos][root]['RDTE']['Key4s'][key4][fystr]){
                                
                                    
                                    sourceData[bos]['DEEPDIVE'][fystr] -= sourceData[bos][root]['RDTE']['Key4s'][key4][fystr]['SUM'];


                            }



                        }




                    }

                    console.log(sourceData);


                }

                var obj = JSON.stringify(sourceData);
                sessionStorage.setItem('SourceData', obj);

                




            }
            catch(e){
                console.log(e);
            }
   
        },//loadKey4Allo

        loadLINAllo:function(sourceData, bos, LIN, FYs, checked){  
            try{  

                //console.log('Load LIN Allo')
                //console.log(sourceData)

                var previousRoot = sourceData[bos]['Previous Root'] || null;
                //console.log('previous root ' + previousRoot)

                if(checked){

                    

                     for(var root in sourceData[bos]){//OPTIMIZE FOR ROOT ONLY

                        if(root !== 'RDTE' && root !== 'PROC' && root !== 'OTHER' && root !== 'TOTAL'){

                            if(sourceData[bos][root]['Quantity']['LINs'][LIN]){

                                //console.log(root + ' : ' + key4)
                                var pom = sourceData[bos][root]['Quantity']['LINs'][LIN]['POM'];
                                //console.log( sourceData[bos][root]['Quantity']['LINs'] );
                                //console.log(pom)
                                this.drawLINAllo(LIN, pom);


                            }

                        }

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

        drawKey4Allo:function(key4, pom){

            try{

                //console.log('draw allo')
                //console.log(FYs)
                //console.log(allo);


                jQuery("#key4Table").append('<tr id="'+key4+'rowDisp">')
                jQuery("#"+key4+"rowDisp").append('<td><span>'+key4+'</span></td>');
                jQuery("#"+key4+"rowDisp").append('<td><span>$'+pom+'</span></td>');
                jQuery("#"+key4+"rowDisp").append('<td><span><input type="text" id="'+key4+'"></span></td>');
                jQuery("#"+key4+"rowDisp").append('<td><span><input type="checkbox" id="'+key4+'all"></span></td></td>');







            }
            catch(e){
                console.log(e)
            }


        },//drawKey4Allo

        drawLINAllo:function(LIN, pom){

            try{

                //console.log('draw allo')
                //console.log(FYs)
                //console.log(allo);


                jQuery("#LINTable").append('<tr id="'+LIN+'rowDisp">')
                jQuery("#"+LIN+"rowDisp").append('<td><span>'+LIN+'</span></td>');
                jQuery("#"+LIN+"rowDisp").append('<td><span>$'+pom+'</span></td>');
                jQuery("#"+LIN+"rowDisp").append('<td><span><input type="text" id="'+LIN+'"></span></td>');
                jQuery("#"+LIN+"rowDisp").append('<td><span><input type="checkbox" id="'+LIN+'all"></span></td></td>');






            }
            catch(e){
                console.log(e)
            }

        },//

        allocateKey4:function(bos, key4, dollar, sourceData, FYs){
            try{
               // console.log(FYs);

                for(var root in sourceData[bos]){//OPTIMIZE FOR ROOT ONLY

                    if(root !== 'RDTE' && root !== 'PROC' && root !== 'OTHER' && root !== 'TOTAL'){

                        console.log('key4 search ' + key4.search('OPA'));

                        if(key4.search('RDTE') !== -1){

                            var appn = 'RDTE';
                            if(sourceData[bos][root][''+appn+'']['Key4s'][key4]){

                                var pomDif = dollar / 5;//set difference to allocate from POM period
    
                                this.setKey4AlloFYs(root, key4, appn, dollar, pomDif, sourceData[bos], FYs, 'RDTE');
    
    
                                break;
                            }
    

                        }else if(key4.search('ACFT') !== -1 || key4.search('AMMO') !== -1  || key4.search('MSLS') !== -1 ||
                                    key4.search('OPA') !== -1 || key4.search('WTCV') !== -1){
                                    console.log('PROC');

                        }


                    }
                }


            }
            catch(e){
                console.log(e)
            }
        },

        allocateLIN:function(bos, root, LIN, dollar, sourceData, FYs){
            try{
               // console.log(FYs);




                    if(root !== 'RDTE' && root !== 'PROC' && root !== 'OTHER' && root !== 'TOTAL'){



                            if(sourceData[bos][root]['Quantity']['LINs'][LIN]){

                                var pomDif = dollar / 5;//set difference to allocate from POM period
                                //console.log(bos + ' : ' + root + ' : ' + LIN + ' : ' + dollar + ' : ' + pomDif);

        
    
                                this.setLINAlloFYs(root, LIN, dollar, pomDif, sourceData[bos], FYs);
    
    
                            }
    

                        


                    }
                


            }
            catch(e){
                console.log(e)
            }
        },


        setKey4AlloFYs:function(root, key4, appn, total, diff, sourceData, FYs, id){
            try{

                console.log(root + ' : ' + LIN + ' : ' + total + ' : ' + diff);
                console.log(sourceData);
                //console.log(sourceData[root][appn]['Key4s'][key4]);


                /*
                for(var i = FYs.length - 1; i >= 0; i--){
                                            
        
                    if(FYs[i].OData__x0050_2){//USE SITE COLUMN WHEN IMPORTING FROM ACCESS

                        var fyprop = 'PQtyFY' + FYs[i].OData__x0050_2;//USE SITE COLUMN WHEN IMPORTING FROM ACCESS
                        var fystr = 'FY'+ FYs[i].OData__x0050_2;//USE SITE COLUMN WHEN IMPORTING FROM ACCESS

                            console.log(fystr);

                                if(sourceData[root][''+appn+''][fystr]){

                                    if(id === 'RDTE'){
                                    sourceData[root][''+appn+'']['Key4s'][key4]['SUM'] -= diff;//key 4 level
                                    sourceData[root][''+appn+''][fystr]['SUM'] -= diff;//root level
                                    sourceData[''+appn+''][fystr]['SUM'] -= diff;//bos level
                                    sourceData['TOTAL'][fystr]['SUM'] -= diff;//total
        

                                }


                            }

                            


                            //console.log(sourceData);


                            

        
                    }
                }//for

                sourceData[root][''+appn+'']['Key4s'][key4]['POM'] -=  total; //POM difference : key 4 level
                sourceData[root][''+appn+'']['POM'] -= total; //POM difference bos level
                */


                //console.log(sourceData);



                var obj = JSON.stringify(sourceData);
                sessionStorage.setItem('SourceData', obj);





            }
            catch(e){
                console.log(e);
            }
        },

        setLINAlloFYs:function(root, LIN, total, diff, sourceData, FYs){
            try{

                //console.log(root + ' : ' + key4 + '  : ' + diff);
                console.log(sourceData);
                //console.log(FYs);
                //console.log(sourceData[root][appn]['Key4s'][key4]);

                

                for(var i = FYs.length - 1; i >= 0; i--){
                                            
        
                    if(FYs[i].OData__x0050_2){//USE SITE COLUMN WHEN IMPORTING FROM ACCESS

                        var fyprop = 'PQtyFY' + FYs[i].OData__x0050_2;//USE SITE COLUMN WHEN IMPORTING FROM ACCESS
                        var fystr = 'FY'+ FYs[i].OData__x0050_2;//USE SITE COLUMN WHEN IMPORTING FROM ACCESS

                            console.log(fystr);

                            if(sourceData[root]['Quantity']['LINs'][LIN][fystr]){
                                sourceData[root]['Quantity']['LINs'][LIN][fystr]['SUM'] -= diff;//LIN 4 level

                                console.log(sourceData);


                            }



                            

        
                    }
                }//for

                    sourceData[root]['Quantity']['LINs'][LIN]['POM'] -=  total; //POM difference : LIN level
                    //sourceData[root]['Quantity']['POM'] -= total; //POM difference bos level : CREATE GLOBAL QUANTITY OBJECT
    



                
                console.log(sourceData);



                var obj = JSON.stringify(sourceData);
                sessionStorage.setItem('SourceData', obj);





            }
            catch(e){
                console.log(e);
            }
        }



  }//return
});//SourceDataDOMService


/* GET ITEMS SERVICE */
angular.module('app').factory('GetItemsService', function ($q) {

	
    return {
        
        bosUrl:function(){
            try{
                var ctx = _spPageContextInfo;
                var url = ctx.siteAbsoluteUrl + "/quad/_api/web/lists/getbytitle('BOS')/items?$top=1000";//MILTECH
                //var url = ctx.siteAbsoluteUrl + "/lewis/_api/web/lists/getbytitle('BOS')/items?$top=1000";//TEKSOUTH
                return url;

            }
            catch(e){
                console.log(e);
            }


        },
        bosUrl2:function(bos){
            try{
                var ctx = _spPageContextInfo;
                var url = ctx.siteAbsoluteUrl + "/quad/_api/web/lists/getbytitle('BOS Root')/items?$top=1000&$filter=BOS eq '"+encodeURIComponent(bos)+"'";//MILTECH
                 //var url = ctx.siteAbsoluteUrl + "/lewis/_api/web/lists/getbytitle('BOS Root')/items?$top=1000&$filter=BOS eq '"+encodeURIComponent(bos)+"'";//TEKSOUTH
                 return url;


            }
            catch(e){
                console.log(e);
            }


        },
        BOSRootUrl:function(bos, root){
            try{
                var ctx = _spPageContextInfo;
                var url = ctx.siteAbsoluteUrl + "/quad/_api/web/lists/getbytitle('BOS Root')/items?$top=1000&$filter=BOS eq '"+encodeURIComponent(bos)+"' and Root eq '"+encodeURIComponent(root)+"'";//MILTECH
                //var url = ctx.siteAbsoluteUrl + "/lewis/_api/web/lists/getbytitle('BOS Root')/items?$select=BOS,Root,APPN&$orderby=APPN asc&$top=1000&$filter=BOS eq '"+encodeURIComponent(bos)+"' and Root eq '"+encodeURIComponent(root)+"'";//TEKSOUTH
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
        FYUrl:function(bos, root){
            try{
                var ctx = _spPageContextInfo;
                var url = ctx.siteAbsoluteUrl + "/quad/_api/web/lists/getbytitle('FYs')/items?$top=1000&select=Title";//MILTECH
                //var url = ctx.siteAbsoluteUrl + "/lewis/_api/web/lists/getbytitle('FYs')/items?$top=1000&select=Title";//TEKSOUTH
                //console.log(url);
                return url;

            }
            catch(e){
                console.log(e);
            }


        },
        programUrlBOS:function(bos){
            try{
                var ctx = _spPageContextInfo;
                var url = ctx.webAbsoluteUrl + "/_api/web/lists/getbytitle('ProgramRequirements1')/items?$top=1000&$filter=BOS eq '"+encodeURIComponent(''+bos+'')+"'&$orderby=Modified desc ";//MILTECH           
                //console.log(url);
                return url;

            }
            catch(e){
                console.log(e);
            }


        },
        
        ProgramRequirementsPageLoadUrl:function(){
            try{
                var ctx = _spPageContextInfo;
                var url = ctx.webAbsoluteUrl + "/_api/web/lists/getbytitle('ProgramRequirements1')/items?$top=1&$select=Title,BOS,progRoot,progkey4,progLIN,formation,approvedRequirementsDoc,arocjroc,capability,armymodernizationpriority,coecgassessment,risk,TotalAAO,TotalAPO,Inventory,InventoryPercent,Editor/Title,Modified,FileRef/FileRef&$expand=Editor";
                //console.log(url);
                return url;

            }
            catch(e){
                console.log(e);
            }


        },
        ProgramOverviewPageLoadUrl:function(){
            try{
                var ctx = _spPageContextInfo;
                var url = ctx.webAbsoluteUrl + "/_api/web/lists/getbytitle('ProgrammaticOverview1')/items?$top=1&$select=Title,BOS,progRoot,progkey4,progLIN,vendor,Proponent,acatlevel,contracttype,US,Milestones,costalternative,COTSOptions,industryBaseImpacts,APUC,limitations,MSR,MPR,Editor/Title,Modified,FileRef/FileRef&$expand=Editor";
                return url;

            }
            catch(e){
                console.log(e);
            }


        },
        ProgramCapabilityPageLoadUrl:function(){
            try{
                var ctx = _spPageContextInfo;
                var url = ctx.webAbsoluteUrl + "/_api/web/lists/getbytitle('ProgramCapability1')/items?$top=1&$select=Title,BOS,progRoot,progkey4,progLIN,CapabilityDescription,Editor/Title,Modified,FileRef/FileRef&$expand=Editor";
                return url;


            }
            catch(e){
                console.log(e);
            }


        },
        POMAllocationPageLoadUrl:function(){
            try{
                var ctx = _spPageContextInfo;
                var url = ctx.webAbsoluteUrl + "/_api/web/lists/getbytitle('POMAllocation1')/items?$top=1&$select=Title,BOS,progRoot,progkey4,progLIN,DeepDiveImpacts,CongressionalMarks,PDM,OtherFundingIssues,MODLevel,progLIN,Editor/Title,Modified,FileRef/FileRef&$expand=Editor";
                return url;

            }
            catch(e){
                console.log(e);
            }


        },


        RDTEPageLoadUrl:function(){
            try{
                var ctx = _spPageContextInfo;
                var url = ctx.webAbsoluteUrl + "/_api/web/lists/getbytitle('RDTE1')/items?$top=1&$select=Title,BOS,progRoot,progkey4,progLIN,OData__x0066_y19,OData__x0066_y20,OData__x0066_y21,OData__x0066_y22,OData__x0066_y23,OData__x0066_y24,OData__x0066_y25,Editor/Title,Modified,FileRef/FileRef&$expand=Editor";
                return url;

            }
            catch(e){
                console.log(e);
            }


        },
        PROCPageLoadUrl:function(){
            try{
                var ctx = _spPageContextInfo;
                var url = ctx.webAbsoluteUrl + "/_api/web/lists/getbytitle('PROC1')/items?$top=1&$select=Title,BOS,progRoot,progkey4,progLIN,OData__x0066_y19,OData__x0066_y20,OData__x0066_y21,OData__x0066_y22,OData__x0066_y23,OData__x0066_y24,OData__x0066_y25,Editor/Title,Modified,FileRef/FileRef&$expand=Editor";
                return url;

            }
            catch(e){
                console.log(e);
            }


        },
        OtherPageLoadUrl:function(){
            try{
                var ctx = _spPageContextInfo;
                var url = ctx.webAbsoluteUrl + "/_api/web/lists/getbytitle('OTHER1')/items?$top=1&$select=Title,BOS,progRoot,progkey4,progLIN,OData__x0066_y19,OData__x0066_y20,OData__x0066_y21,OData__x0066_y22,OData__x0066_y23,OData__x0066_y24,OData__x0066_y25,Editor/Title,Modified,FileRef/FileRef&$expand=Editor";
                return url;

            }
            catch(e){
                console.log(e);
            }


        },
        TotalPageLoadUrl:function(){
            try{
                var ctx = _spPageContextInfo;
                var url = ctx.webAbsoluteUrl + "/_api/web/lists/getbytitle('TOTAL1')/items?$top=1&$select=Title,BOS,progRoot,progkey4,progLIN,OData__x0066_y19,OData__x0066_y20,OData__x0066_y21,OData__x0066_y22,OData__x0066_y23,OData__x0066_y24,OData__x0066_y25,Editor/Title,Modified,FileRef/FileRef&$expand=Editor";
                return url;

            }
            catch(e){
                console.log(e);
            }


        },
        QuantityPageLoadUrl:function(){
            try{
                var ctx = _spPageContextInfo;
                var url = ctx.webAbsoluteUrl + "/_api/web/lists/getbytitle('QUANTITY1')/items?$top=1&$select=Title,BOS,progRoot,progkey4,progLIN,OData__x0066_y19,OData__x0066_y20,OData__x0066_y21,OData__x0066_y22,OData__x0066_y23,OData__x0066_y24,OData__x0066_y25,Editor/Title,Modified,FileRef/FileRef&$expand=Editor";
                return url;

            }
            catch(e){
                console.log(e);
            }


        },
        MYCFloorPageLoadUrl:function(){
            try{
                var ctx = _spPageContextInfo;
                var url = ctx.webAbsoluteUrl + "/_api/web/lists/getbytitle('MYCFLOOR1')/items?$top=1&$select=Title,BOS,progRoot,progkey4,progLIN,OData__x0066_y19,OData__x0066_y20,OData__x0066_y21,OData__x0066_y22,OData__x0066_y23,OData__x0066_y24,OData__x0066_y25,Editor/Title,Modified,FileRef/FileRef&$expand=Editor";
                return url;

            }
            catch(e){
                console.log(e);
            }


        },
        DeepDivePageLoadUrl:function(){
            try{
                var ctx = _spPageContextInfo;
                var url = ctx.webAbsoluteUrl + "/_api/web/lists/getbytitle('DEEPDIVE1')/items?$top=1&$select=Title,BOS,progRoot,progkey4,progLIN,OData__x0066_y19,OData__x0066_y20,OData__x0066_y21,OData__x0066_y22,OData__x0066_y23,OData__x0066_y24,OData__x0066_y25,Editor/Title,Modified,FileRef/FileRef&$expand=Editor";
                return url;

            }
            catch(e){
                console.log(e);
            }


        },

        NewProgramUrl:function(programName){
            try{
                var ctx = _spPageContextInfo;
                var url = ctx.webAbsoluteUrl + "/_api/web/lists/getbytitle('ProgramRequirements1')/items?$select=ID,Title,BOS,progRoot,progkey4,progLIN,formation,approvedRequirementsDoc,arocjroc,capability,armymodernizationpriority,coecgassessment,risk,TotalAAO,TotalAPO,Inventory,InventoryPercent,Editor/Title,Modified,FileRef/FileRef&$expand=Editor&$filter=Title eq '"+encodeURIComponent(''+programName+'')+"'";
                //console.log(url);
                return url;

            }
            catch(e){
                console.log(e);
            }


        },

        programListsUrl:function(programName){
            try{
                var ctx = _spPageContextInfo;
                var url = ctx.webAbsoluteUrl + "/_api/web/lists/getbytitle('Program Lists')/items";
                //console.log(url);
                return url;

            }
            catch(e){
                console.log(e);
            }


        },



    

        ProgramRequirementsUrlBOS:function(bos){//Get BOS Programs
            try{
                var ctx = _spPageContextInfo;
                var url = ctx.webAbsoluteUrl + "/_api/web/lists/getbytitle('ProgramRequirements1')/items?$select=Title,BOS,progRoot,progkey4,progLIN,formation,approvedRequirementsDoc,arocjroc,capability,armymodernizationpriority,coecgassessment,risk,TotalAAO,TotalAPO,Inventory,InventoryPercent,Editor/Title,Modified,FileRef/FileRef&$expand=Editor&$filter=BOS eq '"+encodeURIComponent(''+bos+'')+"'";
                //console.log(url);
                return url;

            }
            catch(e){
                console.log(e);
            }


        },





        ProgramRequirementsUrlBOS:function(bos){//Get BOS Programs
            try{
                var ctx = _spPageContextInfo;
                var url = ctx.webAbsoluteUrl + "/_api/web/lists/getbytitle('ProgramRequirements1')/items?$select=Title,BOS,progRoot,progkey4,progLIN,formation,approvedRequirementsDoc,arocjroc,capability,armymodernizationpriority,coecgassessment,risk,TotalAAO,TotalAPO,Inventory,InventoryPercent,Editor/Title,Modified,FileRef/FileRef&$expand=Editor&$filter=BOS eq '"+encodeURIComponent(''+bos+'')+"'";
                //console.log(url);
                return url;

            }
            catch(e){
                console.log(e);
            }


        },
        ProgramRequirementsUrl:function(programName){
            try{
                var ctx = _spPageContextInfo;
                var url = ctx.webAbsoluteUrl + "/_api/web/lists/getbytitle('ProgramRequirements1')/items?$select=ID,Title,BOS,progRoot,progkey4,progLIN,formation,approvedRequirementsDoc,arocjroc,capability,armymodernizationpriority,coecgassessment,risk,TotalAAO,TotalAPO,Inventory,InventoryPercent,Editor/Title,Modified,FileRef/FileRef&$expand=Editor&$filter=Title eq '"+encodeURIComponent(''+programName+'')+"'";
                //console.log(url);
                return url;

            }
            catch(e){
                console.log(e);
            }


        },
        ProgramOverviewUrl:function(programName){
            try{
                var ctx = _spPageContextInfo;
                var url = ctx.webAbsoluteUrl + "/_api/web/lists/getbytitle('ProgrammaticOverview1')/items?$select=ID,Title,BOS,progRoot,progkey4,progLIN,vendor,Proponent,acatlevel,contracttype,US,Milestones,costalternative,COTSOptions,industryBaseImpacts,APUC,limitations,MSR,MPR,Editor/Title,Modified,FileRef/FileRef&$expand=Editor&$filter=Title eq '"+encodeURIComponent(''+programName+'')+"'";
                //console.log(url);
                return url;

            }
            catch(e){
                console.log(e);
            }


        },
        ProgramCapabilityUrl:function(programName){
            try{
                var ctx = _spPageContextInfo;
                var url = ctx.webAbsoluteUrl + "/_api/web/lists/getbytitle('ProgramCapability1')/items?$select=ID,Title,BOS,progRoot,progkey4,progLIN,CapabilityDescription,Editor/Title,Modified,FileRef/FileRef&$expand=Editor&$filter=Title eq '"+encodeURIComponent(''+programName+'')+"'";//MILTECH
                //console.log(url);
                return url;


            }
            catch(e){
                console.log(e);
            }


        },
        POMAllocationUrl:function(programName){
            try{
                var ctx = _spPageContextInfo;
                var url = ctx.webAbsoluteUrl + "/_api/web/lists/getbytitle('POMAllocation1')/items?$select=ID,Title,BOS,progRoot,progkey4,progLIN,DeepDiveImpacts,CongressionalMarks,PDM,OtherFundingIssues,MODLevel,progLIN,Editor/Title,Modified,FileRef/FileRef&$expand=Editor&$filter=Title eq '"+encodeURIComponent(''+programName+'')+"'";//MILTECH
                //console.log(url);
                return url;

            }
            catch(e){
                console.log(e);
            }


        },


        RDTEUrl:function(programName){
            try{
                var ctx = _spPageContextInfo;
                var url = ctx.webAbsoluteUrl + "/_api/web/lists/getbytitle('RDTE1')/items?$select=ID,Title,BOS,progRoot,progkey4,progLIN,OData__x0066_y19,OData__x0066_y20,OData__x0066_y21,OData__x0066_y22,OData__x0066_y23,OData__x0066_y24,OData__x0066_y25,Editor/Title,Modified,FileRef/FileRef&$expand=Editor&$filter=Title eq '"+encodeURIComponent(''+programName+'')+"'";//MILTECH
                //console.log(url);
                return url;

            }
            catch(e){
                console.log(e);
            }


        },
        PROCUrl:function(programName){
            try{
                var ctx = _spPageContextInfo;
                var url = ctx.webAbsoluteUrl + "/_api/web/lists/getbytitle('PROC1')/items?$select=ID,Title,BOS,progRoot,progkey4,progLIN,OData__x0066_y19,OData__x0066_y20,OData__x0066_y21,OData__x0066_y22,OData__x0066_y23,OData__x0066_y24,OData__x0066_y25,Editor/Title,Modified,FileRef/FileRef&$expand=Editor&$filter=Title eq '"+encodeURIComponent(''+programName+'')+"'";//MILTECH
                //console.log(url);
                return url;

            }
            catch(e){
                console.log(e);
            }


        },
        OtherUrl:function(programName){
            try{
                var ctx = _spPageContextInfo;
                var url = ctx.webAbsoluteUrl + "/_api/web/lists/getbytitle('OTHER1')/items?$select=ID,Title,BOS,progRoot,progkey4,progLIN,OData__x0066_y19,OData__x0066_y20,OData__x0066_y21,OData__x0066_y22,OData__x0066_y23,OData__x0066_y24,OData__x0066_y25,Editor/Title,Modified,FileRef/FileRef&$expand=Editor&$filter=Title eq '"+encodeURIComponent(''+programName+'')+"'";//MILTECH
                //console.log(url);
                return url;

            }
            catch(e){
                console.log(e);
            }


        },
        TotalUrl:function(programName){
            try{
                var ctx = _spPageContextInfo;
                var url = ctx.webAbsoluteUrl + "/_api/web/lists/getbytitle('TOTAL1')/items?$select=ID,Title,BOS,progRoot,progkey4,progLIN,OData__x0066_y19,OData__x0066_y20,OData__x0066_y21,OData__x0066_y22,OData__x0066_y23,OData__x0066_y24,OData__x0066_y25,Editor/Title,Modified,FileRef/FileRef&$expand=Editor&$filter=Title eq '"+encodeURIComponent(''+programName+'')+"'";//MILTECH
                //console.log(url);
                return url;

            }
            catch(e){
                console.log(e);
            }


        },
        QuantityUrl:function(programName){
            try{
                var ctx = _spPageContextInfo;
                var url = ctx.webAbsoluteUrl + "/_api/web/lists/getbytitle('QUANTITY1')/items?$select=ID,Title,BOS,progRoot,progkey4,progLIN,OData__x0066_y19,OData__x0066_y20,OData__x0066_y21,OData__x0066_y22,OData__x0066_y23,OData__x0066_y24,OData__x0066_y25,Editor/Title,Modified,FileRef/FileRef&$expand=Editor&$filter=Title eq '"+encodeURIComponent(''+programName+'')+"'";//MILTECH
                //console.log(url);
                return url;

            }
            catch(e){
                console.log(e);
            }


        },
        MYCFloorUrl:function(programName){
            try{
                var ctx = _spPageContextInfo;
                var url = ctx.webAbsoluteUrl + "/_api/web/lists/getbytitle('MYCFLOOR1')/items?$select=ID,Title,BOS,progRoot,progkey4,progLIN,OData__x0066_y19,OData__x0066_y20,OData__x0066_y21,OData__x0066_y22,OData__x0066_y23,OData__x0066_y24,OData__x0066_y25,Editor/Title,Modified,FileRef/FileRef&$expand=Editor&$filter=Title eq '"+encodeURIComponent(''+programName+'')+"'";//MILTECH
                //console.log(url);
                return url;

            }
            catch(e){
                console.log(e);
            }


        },
        DeepDiveUrl:function(programName){
            try{
                var ctx = _spPageContextInfo;
                var url = ctx.webAbsoluteUrl + "/_api/web/lists/getbytitle('DEEPDIVE1')/items?$select=ID,Title,BOS,progRoot,progkey4,progLIN,OData__x0066_y19,OData__x0066_y20,OData__x0066_y21,OData__x0066_y22,OData__x0066_y23,OData__x0066_y24,OData__x0066_y25,Editor/Title,Modified,FileRef/FileRef&$expand=Editor&$filter=Title eq '"+encodeURIComponent(''+programName+'')+"'";//MILTECH
                //console.log(url);
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



