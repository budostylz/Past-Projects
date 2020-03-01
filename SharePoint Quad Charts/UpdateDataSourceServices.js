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



/*Quad Service*/
angular.module('app').factory('QuadService', ['$q',function ($q) {

	
    return {

        addProgram: function (area, bos, program, obj) {

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
                        var mycFloor = obj[0].MYCFLOOR;
                        var deepdive = obj[0].DEEPDIVE;

                        var arr = [programs,programRequirements,aaoAPO,programOverview,programPOM,rdte,proc,other,total,quantity,mycFloor,deepdive];                      
                        var ctx = _spPageContextInfo.webAbsoluteUrl + '/programs';                
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

                                console.log('redirect');
                                console.log(_spPageContextInfo.webAbsoluteUrl + "/Pages/ProgramFunding.aspx?area="+area+","+bos+","+program+"");
                                alert(program + " Created\nClick OK to Redirect to Funding Page");
                                setTimeout(function(){ location.href = _spPageContextInfo.webAbsoluteUrl + "/Pages/ProgramFunding.aspx?area="+area+","+bos+","+program+"";  }, 5000);


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

        },//addProgram()

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
                    var bos= bosArr[i].Title;      
                    //console.log(bosname);

                    jQuery("#bos1").append('<option>'+bos+'</option>');
                    jQuery("#bos2").append('<option>'+bos+'</option>');
                    jQuery("#bos3").append('<option>'+bos+'</option>');
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

                
                elem.empty();

                //load Areas drop down
                for(var i = 0; i < programArr.length; i++){     
                    var program= programArr[i].Title;      
                    //console.log(area);

                    elem.append('<option>'+program+'</option>');

                } 

                if(programArr.length === 0){
                    elem.append('<option>No Programs/Commands Found</option>');

                }


            }
            catch(e){
                console.log(e);
            }

            
        },//programDOMPres








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
                            var progTrim = program.replace( ' ', '').trim();
                            //console.log(progTrim);
 
                            jQuery('#program4').append('<span id="'+progTrim+'"><input type="checkbox" id="'+program+'" class="'+bos+'" value="'+area+'"><label>'+program+'</label> <br/><br/></span>');

                            //console.log(program);
                        }
    

                    }else{

                        for(var i = 0; i < programs.length; i++){
                            var program = programs[i].Title;
                            var progTrim = program.replace( ' ', '').trim();
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

        changePresentationProgram:function(area, bos, program, sourceData, checked){

            try{

                if (typeof(Storage) !== "undefined") {


                    
                    if(checked){
                            sourceData[area][bos][program] = {};

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


        addSlideData:function(area, bos, program, slides, sourceData, checked){

            try{

                if (typeof(Storage) !== "undefined") {

                    if(checked){
                        sourceData[area][bos][program]['Slides'] = slides;

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

        },//addSlideData

        buildSlides:function(sourceData){

            try{

                var pptx = new PptxGenJS();//set presentation



                for(var area in sourceData){

                    //console.log(area)
                    for(var bos in sourceData[area]){
                        //console.log(bos);

                        for(var program in sourceData[area][bos]){


                            if(area === "ManPower"){
                        
                            }else if( area === "S&T"){
        
                            }else if (area === "AMMO"){
        
                            }else if(area === "Program"){
                                
                                console.log(area + ' : ' + bos + ' : ' + program )
                                var slides = sourceData[area][bos][program]['Slides'];
                                pptx = this.programSlides(bos, program, slides, pptx);
            
        
        
                            }
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

        programSlides:function(bos, program, slides, pptx){

            try{

                console.log(program);
                console.log(slides);

                var programRequirements = (slides[0][0]) ? slides[0][0] : "";
                var programOverview = (slides[1][0]) ? slides[1][0] : "";
                var programCapability = (slides[2][0]) ? slides[2][0] : "";
                var POMAllo = (slides[3][0]) ? slides[3][0] : "";
                var rdte =  (slides[4][0]) ? slides[4][0] : "";
                var proc =  (slides[5][0]) ? slides[5][0] : "";
                var other =  (slides[6][0]) ? slides[6][0] : "";
                var total =  (slides[7][0]) ? slides[7][0] : "";
                var quantity =  (slides[8][0]) ? slides[8][0] : "";
                var deepdive =  (slides[9][0]) ? slides[9][0] : "";
                var mycFloor =  (slides[10][0]) ? slides[10][0] : "";

                //Program Requirements
                var progReq = programRequirements.approvedRequirementsDoc || "";
                var progAROC_JROC = programRequirements.arocjroc || "";
                var progIOC_FOC = programRequirements.iocfoc || "";
                var progCap = programRequirements.capability || ""; 
                var progModPrio = programRequirements.armymodernizationpriority || "";
                var progAsessment = programRequirements.coecgassessment || "";
                var progRisk = programRequirements.risk || "";

                //Program Capability

                //Program Overview
                var progVendor = programOverview.vendor || "";
                var progProponent = programOverview.Proponent || "";
                var progContractType = programOverview.contracttype || "";
                var progStates = programOverview.US || "";
                var progMileStones = programOverview.Milestones || "";
                var progAlternative = programOverview.costalternative || "";
                var progCOTS = programOverview.COTSOptions || "";
                var progBaseImpacts = programOverview.industryBaseImpacts || "";
                var progAPUC = programOverview.APUC || "";
                var progLimits = programOverview.limitations || "";
                var progMSR = programOverview.MSR || "";
                var programMPR = programOverview.MPR || "";

                //Program Capability
                var programCapDesc = programCapability.CapabilityDescription || "";

                //POM Allocation
                var POMImpacts = POMAllo.DeepDiveImpacts || "";
                var POMMarks = POMAllo.CongressionalMarks || "";
                var POMPDM = POMAllo.PDM || "";
                var POMFunding = POMAllo.OtherFundingIssues || "";
                var progRoot = POMAllo.progRoot || "";
                var progMOD = POMAllo.MODLevel || "";
                var progLINs = POMAllo.progLIN || "";

                //RDTE
                var rdte19 = rdte.OData__x0066_y19 || 0;
                var rdte20 = rdte.OData__x0066_y20 || 0;
                var rdte21 = rdte.OData__x0066_y21 || 0;
                var rdte22 = rdte.OData__x0066_y22 || 0;
                var rdte23 = rdte.OData__x0066_y23 || 0;
                var rdte24 = rdte.OData__x0066_y24 || 0;
                var rdte25 = rdte.OData__x0066_y25 || 0;

                //PROC
                var proc19 = proc.OData__x0066_y19 || 0;
                var proc20 = proc.OData__x0066_y20 || 0;
                var proc21 = proc.OData__x0066_y21 || 0;
                var proc22 = proc.OData__x0066_y22 || 0;
                var proc23 = proc.OData__x0066_y23 || 0;
                var proc24 = proc.OData__x0066_y24 || 0;
                var proc25 = proc.OData__x0066_y25 || 0;

                //OTHER
                var other19 = other.OData__x0066_y19 || 0;
                var other20 = other.OData__x0066_y20 || 0;
                var other21 = other.OData__x0066_y21 || 0;
                var other22 = other.OData__x0066_y22 || 0;
                var other23 = other.OData__x0066_y23 || 0;
                var other24 = other.OData__x0066_y24 || 0;
                var other25 = other.OData__x0066_y25 || 0;

                //TOTAL
                var total19 = total.OData__x0066_y19 || 0;
                var total20 = total.OData__x0066_y20 || 0;
                var total21 = total.OData__x0066_y21 || 0;
                var total22 = total.OData__x0066_y22 || 0;
                var total23 = total.OData__x0066_y23 || 0;
                var total24 = total.OData__x0066_y24 || 0;
                var total25 = total.OData__x0066_y25 || 0;

                //Quantity
                var quantity19 = quantity.OData__x0066_y19 || 0;
                var quantity20 = quantity.OData__x0066_y20 || 0;
                var quantity21 = quantity.OData__x0066_y21 || 0;
                var quantity22 = quantity.OData__x0066_y22 || 0;
                var quantity23 = quantity.OData__x0066_y23 || 0;
                var quantity24 = quantity.OData__x0066_y24 || 0;
                var quantity25 = quantity.OData__x0066_y25 || 0;

                //MYC Floor
                var mycFloor19 = mycFloor.OData__x0066_y19 || 0;
                var mycFloor20 = mycFloor.OData__x0066_y20 || 0;
                var mycFloor21 = mycFloor.OData__x0066_y21 || 0;
                var mycFloor22 = mycFloor.OData__x0066_y22 || 0;
                var mycFloor23 = mycFloor.OData__x0066_y23 || 0;
                var mycFloor24 = mycFloor.OData__x0066_y24 || 0;
                var mycFloor25 = mycFloor.OData__x0066_y25 || 0;

                //Deep Dive
                var deepDive19 = deepdive.OData__x0066_y19 || 0;
                var deepDive20 = deepdive.OData__x0066_y20 || 0;
                var deepDive21 = deepdive.OData__x0066_y21 || 0;
                var deepDive22 = deepdive.OData__x0066_y22 || 0;
                var deepDive23 = deepdive.OData__x0066_y23 || 0;
                var deepDive24 = deepdive.OData__x0066_y24 || 0;
                var deepDive25 = deepdive.OData__x0066_y25 || 0;



                




                


                //Grid Properties: QUAD
                var POMAlloGrid = [
                    [
                        { text:'$($000)', options:{ valign:'t', align:'c', fontFace:'Courier'   } },
                        { text:'FY19', options:{ valign:'t', align:'c', fontFace:'Courier'   } },
                        { text:'FY20', options:{ valign:'t', align:'c', fontFace:'Courier' } },
                        { text:'FY21', options:{ valign:'t', align:'c', fontFace:'Courier' } },
                        { text:'FY22', options:{ valign:'t', align:'c', fontFace:'Courier' } },
                        { text:'FY23', options:{ valign:'t', align:'c', fontFace:'Courier' } },
                        { text:'FY24', options:{ valign:'t', align:'c', fontFace:'Courier' } },
                        { text:'FY25', options:{ valign:'t', align:'c', fontFace:'Courier' } }
                    ],
                    [
                        { text:'RDTE', options:{ valign:'t', align:'l', fontFace:'Courier'   } },
                        { text:'$'+rdte19+'', options:{ valign:'t', align:'c', fontFace:'Courier'   } },
                        { text:'$'+rdte20+'', options:{ valign:'t', align:'c', fontFace:'Courier' } },
                        { text:'$'+rdte21+'', options:{ valign:'t', align:'c', fontFace:'Courier' } },
                        { text:'$'+rdte22+'', options:{ valign:'t', align:'c', fontFace:'Courier' } },
                        { text:'$'+rdte23+'', options:{ valign:'t', align:'c', fontFace:'Courier' } },
                        { text:'$'+rdte24+'', options:{ valign:'t', align:'c', fontFace:'Courier' } },
                        { text:'$'+rdte25+'', options:{ valign:'t', align:'c', fontFace:'Courier' } }
                
                    ],
                    [
                        { text:'PROC', options:{ valign:'t', align:'l', fontFace:'Courier'   } },
                        { text:'$'+proc19+'', options:{ valign:'t', align:'c', fontFace:'Courier'   } },
                        { text:'$'+proc20+'', options:{ valign:'t', align:'c', fontFace:'Courier' } },
                        { text:'$'+proc21+'', options:{ valign:'t', align:'c', fontFace:'Courier' } },
                        { text:'$'+proc22+'', options:{ valign:'t', align:'c', fontFace:'Courier' } },
                        { text:'$'+proc23+'', options:{ valign:'t', align:'c', fontFace:'Courier' } },
                        { text:'$'+proc24+'', options:{ valign:'t', align:'c', fontFace:'Courier' } },
                        { text:'$'+proc25+'', options:{ valign:'t', align:'c', fontFace:'Courier' } }
                    ],
                    [
                        { text:'Other', options:{ valign:'t', align:'l', fontFace:'Courier'   } },
                        { text:'$'+other19+'', options:{ valign:'t', align:'c', fontFace:'Courier'   } },
                        { text:'$'+other20+'', options:{ valign:'t', align:'c', fontFace:'Courier' } },
                        { text:'$'+other21+'', options:{ valign:'t', align:'c', fontFace:'Courier' } },
                        { text:'$'+other22+'', options:{ valign:'t', align:'c', fontFace:'Courier' } },
                        { text:'$'+other23+'', options:{ valign:'t', align:'c', fontFace:'Courier' } },
                        { text:'$'+other24+'', options:{ valign:'t', align:'c', fontFace:'Courier' } },
                        { text:'$'+other25+'', options:{ valign:'t', align:'c', fontFace:'Courier' } }
                    ],
                    [
                        { text:'Total', options:{ valign:'t', align:'l', fontFace:'Courier'   } },
                        { text:'$'+total19+'', options:{ valign:'t', align:'c', fontFace:'Courier'   } },
                        { text:'$'+total20+'', options:{ valign:'t', align:'c', fontFace:'Courier' } },
                        { text:'$'+total21+'', options:{ valign:'t', align:'c', fontFace:'Courier' } },
                        { text:'$'+total22+'', options:{ valign:'t', align:'c', fontFace:'Courier' } },
                        { text:'$'+total23+'', options:{ valign:'t', align:'c', fontFace:'Courier' } },
                        { text:'$'+total24+'', options:{ valign:'t', align:'c', fontFace:'Courier' } },
                        { text:'$'+total25+'', options:{ valign:'t', align:'c', fontFace:'Courier' } }
                    ],
                    [
                        { text:'Quantity', options:{ valign:'t', align:'l', fontFace:'Courier'   } },
                        { text:'$'+quantity19+'', options:{ valign:'t', align:'c', fontFace:'Courier'   } },
                        { text:'$'+quantity20+'', options:{ valign:'t', align:'c', fontFace:'Courier' } },
                        { text:'$'+quantity21+'', options:{ valign:'t', align:'c', fontFace:'Courier' } },
                        { text:'$'+quantity22+'', options:{ valign:'t', align:'c', fontFace:'Courier' } },
                        { text:'$'+quantity23+'', options:{ valign:'t', align:'c', fontFace:'Courier' } },
                        { text:'$'+quantity24+'', options:{ valign:'t', align:'c', fontFace:'Courier' } },
                        { text:'$'+quantity25+'', options:{ valign:'t', align:'c', fontFace:'Courier' } }
                    ],
                    [
                        { text:'MYC Floor', options:{ valign:'t', align:'l', fontFace:'Courier'   } },
                        { text:'$'+mycFloor19+'', options:{ valign:'t', align:'c', fontFace:'Courier'   } },
                        { text:'$'+mycFloor20+'', options:{ valign:'t', align:'c', fontFace:'Courier' } },
                        { text:'$'+mycFloor21+'', options:{ valign:'t', align:'c', fontFace:'Courier' } },
                        { text:'$'+mycFloor22+'', options:{ valign:'t', align:'c', fontFace:'Courier' } },
                        { text:'$'+mycFloor23+'', options:{ valign:'t', align:'c', fontFace:'Courier' } },
                        { text:'$'+mycFloor24+'', options:{ valign:'t', align:'c', fontFace:'Courier' } },
                        { text:'$'+mycFloor25+'', options:{ valign:'t', align:'c', fontFace:'Courier' } }
                    ],
                    [
                        { text:'Deep Dive', options:{ valign:'t', align:'l', fontFace:'Courier'   } },
                        { text:'$'+deepDive19+'', options:{ valign:'t', align:'c', fontFace:'Courier'   } },
                        { text:'$'+deepDive20+'', options:{ valign:'t', align:'c', fontFace:'Courier' } },
                        { text:'$'+deepDive21+'', options:{ valign:'t', align:'c', fontFace:'Courier' } },
                        { text:'$'+deepDive22+'', options:{ valign:'t', align:'c', fontFace:'Courier' } },
                        { text:'$'+deepDive23+'', options:{ valign:'t', align:'c', fontFace:'Courier' } },
                        { text:'$'+deepDive24+'', options:{ valign:'t', align:'c', fontFace:'Courier' } },
                        { text:'$'+deepDive25+'', options:{ valign:'t', align:'c', fontFace:'Courier' } }
                    ]
            
            
            
            
                ];
            
                var requirementsCap = [
            
                    [{ text:'Requirements/Capability to the Force:', options:{ valign:'t', align:'l', fontFace:'Courier', underline:true, bold:true   } }],
                    [{ text:'Approved Requirements Document: '+progReq+'', options:{ valign:'t', align:'l', fontFace:'Courier'   } }],
                    [{ text:'AROC/JROC:'+progAROC_JROC+'', options:{ valign:'t', align:'l', fontFace:'Courier'   } }],
                    [{ text:'IOC/FOC:'+progIOC_FOC+'', options:{ valign:'t', align:'l', fontFace:'Courier'   } }],
                    [{ text:'New, Modernization or Replacement Capability:'+progCap+'', options:{ valign:'t', align:'l', fontFace:'Courier'   } }],
                    [{ text:'Army Modernization Priority:'+progModPrio+'', options:{ valign:'t', align:'l', fontFace:'Courier'   } }],
                    [{ text:'COE CG Assessment:'+progAsessment+'', options:{ valign:'t', align:'l', fontFace:'Courier'   } }],
                    [{ text:'Operational Impact & Risk:'+progRisk+'', options:{ valign:'t', align:'l', fontFace:'Courier'   } }]
            
            
                ]
            
                var AAO_APO = [
                    [{ text:'AAO:  APO: Inventory: ', options:{ valign:'t', align:'c', fontFace:'Courier', underline:true, bold:true   } }] 
                ]
            
                var programmaticOverview = [
                    [{ text:'Programmatic Overview:', options:{ valign:'t', align:'l', fontFace:'Courier', underline:true, bold:true   } }],
                    [{ text:'Define why is modernization required:', options:{ valign:'t', align:'l', fontFace:'Courier', bold:true, italic:true   } }],
                    [{ text:'Vendor: '+progVendor+'', options:{ valign:'t', align:'l', fontFace:'Courier'   } }],
                    [{ text:'Proponent:   ' +progProponent+' ACAT Level: '+programOverview.acatlevel+' '     , options:{ valign:'t', align:'l', fontFace:'Courier'   } }],
                    [{ text:'Type of Contract:  '+progContractType+' ', options:{ valign:'t', align:'l', fontFace:'Courier'   } }],
                    [{ text:'US States/Interest:  '+progStates+'  ', options:{ valign:'t', align:'l', fontFace:'Courier'   } }],
                    [{ text:'Current Milestone: '+progMileStones+'  ', options:{ valign:'t', align:'l', fontFace:'Courier'   } }],
                    [{ text:'Cost of Alternatives:  '+progAlternative+'  ', options:{ valign:'t', align:'l', fontFace:'Courier'   } }]
            
                ]
            
                var programmaticOverview2 = [
            
                    [{ text:'COTS Options: '+progCOTS+'', options:{ valign:'t', align:'l', fontFace:'Courier'   } }],
                    [{ text:'Industrial base impacts: ' +progBaseImpacts+'', options:{ valign:'t', align:'l', fontFace:'Courier'   } }],
                    [{ text:'APUC: ' +progAPUC+'', options:{ valign:'t', align:'l', fontFace:'Courier'   } }],
                    [{ text:'Limitations: ' +progLimits+'', options:{ valign:'t', align:'l', fontFace:'Courier'   } }],
                    [{ text:'MSR(yr):    '+progMSR+'          MPR(yr): '+programMPR+'   ', options:{ valign:'t', align:'l', fontFace:'Courier'   } }]
            
            
                ]
            
                var capabilityDescription = [      
                    [{ text:'Capability Description: ', options:{ valign:'t', align:'l', fontFace:'Courier', underline:true, bold:true   } }],
                    [{ text:'Describe the program and equipment: ', options:{ valign:'t', align:'l', fontFace:'Courier', bold:true, italic:true   } }],
                    [{ text:'Program Description: ' +programCapDesc+'', options:{ valign:'t', align:'l', fontFace:'Courier'   } }]
                ]
            
                var POMDesc = [
                    [{ text:'Deep Dive Impacts: ' +POMImpacts+'', options:{ valign:'t', align:'l', fontFace:'Courier', underline:true, bold:true   } }],
                    [{ text:'Congressional Marks: ' +POMMarks+'', options:{ valign:'t', align:'l', fontFace:'Courier', underline:true, bold:true   } }],
                    [{ text:'PDM: ' +POMPDM+'', options:{ valign:'t', align:'l', fontFace:'Courier', underline:true, bold:true  } }],
                    [{ text:'Other Funding Issues: ' +POMFunding +'', options:{ valign:'t', align:'l', fontFace:'Courier', underline:true, bold:true   } }],
                    [{ text:'Root: ' +progRoot+'', options:{ valign:'t', align:'l', fontFace:'Courier', underline:true, bold:true   } }],
                    [{ text:'MoD Level: ' +progMOD+'', options:{ valign:'t', align:'l', fontFace:'Courier', underline:true, bold:true   } }],
                ]
            
                var LINs = [
                    [{ text:'LINs: C78192,C91673,R42399', options:{ valign:'t', align:'l', fontFace:'Courier', bold:true   } }]
                ]
            
                //Grid Properties: FACER
                var facerStruct = [
                    [
                        { text:'LIN', options:{ valign:'t', align:'c', fontFace:'Courier'   } },
                        { text:'Nomenclature', options:{ valign:'t', align:'c', fontFace:'Courier'   } },
                        { text:'Proc', options:{ valign:'t', align:'c', fontFace:'Courier' } },
                        { text:'AAO/RO', options:{ valign:'t', align:'c', fontFace:'Courier' } },
                        { text:'APO', options:{ valign:'t', align:'c', fontFace:'Courier' } },
                        { text:'Inventory', options:{ valign:'t', align:'c', fontFace:'Courier' } },
                        { text:'COMPO', options:{ valign:'t', align:'c', fontFace:'Courier' } },
                        { text:'Risk Assessment', options:{ valign:'t', align:'c', fontFace:'Courier' } }
                    ]
            
                ];
            
                    //Grid Properties: BACKUP
                    var backupStruct = [
                    [
                        { text:'BOS', options:{ valign:'t', align:'c', fontFace:'Courier'   } },
                        { text:'Root', options:{ valign:'t', align:'c', fontFace:'Courier'   } },
                        { text:'MDEP', options:{ valign:'t', align:'c', fontFace:'Courier' } },
                        { text:'APE', options:{ valign:'t', align:'c', fontFace:'Courier' } },
                        { text:'APO', options:{ valign:'t', align:'c', fontFace:'Courier' } },
                        { text:'APPN', options:{ valign:'t', align:'c', fontFace:'Courier' } },
                        { text:'ROC', options:{ valign:'t', align:'c', fontFace:'Courier' } },
                        { text:'LINOUT', options:{ valign:'t', align:'c', fontFace:'Courier' } },
                        { text:'LININ', options:{ valign:'t', align:'c', fontFace:'Courier' } },
                        { text:'FY19', options:{ valign:'t', align:'c', fontFace:'Courier' } },
                        { text:'FY20', options:{ valign:'t', align:'c', fontFace:'Courier' } },
                        { text:'FY21', options:{ valign:'t', align:'c', fontFace:'Courier' } },
                        { text:'FY22', options:{ valign:'t', align:'c', fontFace:'Courier' } },
                        { text:'FY23', options:{ valign:'t', align:'c', fontFace:'Courier' } },
                        { text:'FY24', options:{ valign:'t', align:'c', fontFace:'Courier' } },
                        { text:'FY25', options:{ valign:'t', align:'c', fontFace:'Courier' } }
                    ]
                
                ];
                
            
            
            
            
            
            
            
            
            
            
                //Set Layout Dimensions
                pptx.setLayout({ name:'Test Layout', width:16.5, height:11.7 });
            
                //Define Master Slide
                /*pptx.defineSlideMaster({
                    title: 'PROGRAM_QUAD',
                    bkgd:  'FFFFFF',
                    objects: [
                    { 'line':  { x:1.00, y:6.50, w:15, h:0, line:'000000', lineSize:4 } },
                    { 'line':  { x:3.10, y:6.50, w:10, h:0, line:'000000', lineSize:4, rotate:90 } },
                    { 'line':  { x:3.10, y:6.50, w:10, h:0, line:'000000', lineSize:4, rotate:90 } },
                    { 'RECTANGLE': { x:0.50, y:0.75, w:5, h:3, fill:'FF0000' } }
                    ]
                });*/
            
            
            
            
                    //Build Slides
                    var quad = pptx.addNewSlide();
                    var facer = pptx.addNewSlide();
                    var backup = pptx.addNewSlide();
            
            
                    /* QUAD */
                    quad.addText(''+program+'',  { x:10, y:0.60, fontSize:30, fontFace:'Arial', color:'000000' });
                    quad.addText('POM 21-25', { x:14, y:0.25, fontSize:20, fontFace:'Arial', color:'000000' });
            
            
                    // RECTANGLE
                    //quad.addShape(pptx.shapes.RECTANGLE, { x:0.30, y:0.75, w:16, h:1, lineDash:'solid' });
            
            
                    //Lines
                    quad.addShape(pptx.shapes.LINE,      { x:1.00, y:5.50, w:15, h:0, line:'000000', lineSize:1 });
                    quad.addShape(pptx.shapes.LINE,      { x:3.10, y:6.50, w:10, h:0, line:'000000', lineSize:1, rotate:90 });
                    quad.addShape(pptx.shapes.LINE,      { x:3.10, y:6.50, w:10, h:0, line:'000000', lineSize:1, rotate:90 });
            
            
            
                    //Set Grid
                    var ReqGrid = { x:0.0, y:1.5, w:7.0, h:2.0, rowH:0.1, fill:'FFFFFF', fontSize:13, color:'000000', valign:'m', border:{pt:'0', color:'FFFFFF'}};
                    quad.addTable( requirementsCap, ReqGrid );
            
                    var AAO_APOGrid = { x:0.5, y:4.5, w:7.0, h:2.0, rowH:0.1, fill:'FFFFFF', fontSize:13, color:'000000', valign:'m', border:{pt:'0', color:'FFFFFF'}};
                    quad.addTable( AAO_APO, AAO_APOGrid );
            
            
                    var ProgrammaticOverviewGrid = { x:0.0, y:5.6, w:5.0, h:2.0, rowH:0.0, fill:'FFFFFF', fontSize:13, color:'000000', valign:'m', border:{pt:'0', color:'FFFFFF'}};
                    quad.addTable( programmaticOverview,  ProgrammaticOverviewGrid );
            
                    var ProgrammaticOverviewGrid2 = { x:0.0, y:8.0, w:5.0, h:2.0, rowH:0.0, fill:'FFFFFF', fontSize:13, color:'000000', valign:'m', border:{pt:'0', color:'FFFFFF'}};
                    quad.addTable( programmaticOverview2,  ProgrammaticOverviewGrid2 );
            
                    var capabilityDescriptionGrid = { x:8.2, y:1.5, w:5.5, h:2.0, rowH:0.0, fill:'FFFFFF', fontSize:13, color:'000000', valign:'m', border:{pt:'0', color:'FFFFFF'}};
                    quad.addTable( capabilityDescription,  capabilityDescriptionGrid );
            
                    var POMGrid = { x:8.2, y:5.6, w:7.0, h:2.0, rowH:0.1, fill:'FFFFFF', fontSize:13, color:'000000', valign:'m'};
                    quad.addTable( POMAlloGrid, POMGrid );
            
                    var POMDescGrid = { x:8.2, y:8.9, w:7.0, h:2.0, rowH:0.1, fill:'FFFFFF', fontSize:13, color:'000000', valign:'m',border:{pt:'0', color:'FFFFFF'}};
                    quad.addTable( POMDesc, POMDescGrid );
            
                    var LINGrid = { x:8.2, y:11.0, w:7.0, h:2.0, rowH:0.1, fill:'FFFFFF', fontSize:13, color:'000000', valign:'m',border:{pt:'0', color:'FFFFFF'}};
                    quad.addTable( LINs, LINGrid );
            
            
            
            
            
                    //Set Image
                    quad.addImage({ path:'https://spcs3qa.kc.army.mil/asaalt/hqdag8/quad/programs/PublishingImages/airdefense.jpg', x:13.0, y:1.5, w:3, h:2 })
                    //quad.addImage({ path:'https://shaunlewisdevdomaincom.sharepoint.com/quad/program/PublishingImages/latvcrop.jpg', x:12.5, y:1.5, w:3.5, h:3 })//O-365
            
            
                    /* FACER */
                    facer.addText(''+program+'',  { x:5, y:0.60, fontSize:30, fontFace:'Arial', color:'000000' });
                    facer.addText('FACER SLIDE', { x:11, y:0.60, fontSize:30, fontFace:'Arial', color:'000000' });
            
                    var facerGrid = { x:0.0, y:1.5, w:15.0, h:2.0, rowH:0.1, fill:'29526D', fontSize:13, color:"FFFFFF", valign:'m'};
                    facer.addTable( facerStruct, facerGrid );
            
                    /* BACKUP */
                    backup.addText(''+program+'', { x:5, y:0.60, fontSize:30, fontFace:'Arial', color:'000000' });
                    backup.addText('BACKUP SLIDE', { x:11, y:0.60, fontSize:30, fontFace:'Arial', color:'000000' });
            
                    var backupGrid = { x:0.0, y:1.5, w:15.0, h:2.0, rowH:0.1, fill:'29526D', fontSize:13, color:"FFFFFF", valign:'m'};
                    backup.addTable( backupStruct, backupGrid );
            
            
                    return pptx;


                    


                

                

            }
            catch(e){
                console.log(e);
            }

        },//programSlides






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





        BOSDOM:function(bosArr){

            //load Portfolios drop down
            for(var i = 0; i < bosArr.length; i++){     
                var bos = bosArr[i];      
                //console.log(bosname);
                if(i===0){
                    jQuery("#allProgramBOS").append('<option>Choose a Portfolio</option>');
                }
                jQuery("#allProgramBOS").append('<option>'+bos+'</option>');
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






        updateProgramRequirements: function (area, bos, program, id, list) {

            try{

                SP.SOD.executeFunc('SP.Runtime.js', 'SP.ClientContext',
                function () {
                    SP.SOD.executeFunc('SP.js', 'SP.ClientContext',
                    function () {



                        


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
                        

                         oListItem.set_item('BOS', bos);
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


                var editor = program.Editor.Title || "";
                var modified = moment(program.Modified).format('MMMM Do YYYY, h:mm:ss a') || "";
                var modStr = "Last Modified by " + editor + " at " + modified;
                var approvedRequirementsDoc = program.approvedRequirementsDoc || "";
                var armymodernizationpriority = program.armymodernizationpriority || "";
                var arocjroc = program.arocjroc || "";
                var capability = program.capability || "";
                var coecgassessment = program.coecgassessment || "";
                var formation = program.formation || "";
                var iocfoc = program.iocfoc || "";
                var risk = program.risk || "";

                jQuery("#modifiedSpanReqCap").empty()
                var modified = jQuery("#modifiedSpanReqCap").append("<strong> "+modStr+" </strong>");
                var formation = jQuery("#formation").val(formation);
                var reqDoc = jQuery("#reqDoc").val(approvedRequirementsDoc);    
                var arocjroc = jQuery("#aroc-jroc").val(arocjroc);
                var reqCap = jQuery("#capability").val(capability);
                var priority = jQuery("#priority").val(armymodernizationpriority);
                var assessment = jQuery("#assessment").val(coecgassessment);
                var risk = jQuery("#risk").val(risk); 
                /*var aao = currentProgram[0].TotalAAO || "";
                var apo = currentProgram[0].TotalAPO || "";
                var inventoryNum = currentProgram[0].Inventory || "";
                var inventoryPercent = currentProgram[0].InventoryPercent || "";*/




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
                        

                         oListItem.set_item('BOS', bos);
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

                var editor = program.Editor.Title || "";
                var modified = moment(program.Modified).format('MMMM Do YYYY, h:mm:ss a') || "";
                var modStr = "Last Modified by " + editor + " at " + modified;

                var APUC = program.APUC || "";
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
                var limitations = program.limitations || "";
                var vendor = program.vendor || ""


                jQuery("#modifiedOverview").empty()
                var modified = jQuery("#modifiedOverview").append("<strong> "+modStr+" </strong>");
                var vendor = jQuery("#vendor").val(vendor); 
                var proponent = jQuery("#proponent").val(Proponent);
                var contractType = jQuery("#contractType").val(contracttype);
                var acatlevel = jQuery("#acatlevel").val(acatlevel);
                var states =  jQuery("#states-interest").val(US);
                var milestone =  jQuery("#milestone").val(Milestones); 
                var alternative = jQuery("#alternative").val(costalternative);
                var cotsOptions =  jQuery("#cots-options").val(COTSOptions); 
                var impacts = jQuery("#impacts").val(industryBaseImpacts);
                var apuc = jQuery("#apuc").val(APUC ); 
                var limitations = jQuery("#limitations").val(limitations); 
                var msr = jQuery("#msr").val(MSR); 
                var mpr =  jQuery("#mpr").val(MPR); 



            }
            catch(e){

                console.log(e);

            }

        },//downloadProgramOverview


        downloadProgramCapability: function (program) {

            try{

                //console.log('Capability')
                //console.log(program)

                var editor = program.Editor.Title || "";
                var modified = moment(program.Modified).format('MMMM Do YYYY, h:mm:ss a') || "";
                var modStr = "Last Modified by " + editor + " at " + modified;
                var CapabilityDescription = program.CapabilityDescription || "";
                var desc = jQuery("#programdesc").val(CapabilityDescription);

                jQuery("#modifiedSpanProgDesc").empty()
                var modified = jQuery("#modifiedSpanProgDesc").append("<strong> "+modStr+" </strong>");




            }
            catch(e){

                console.log(e);

            }

        },//downloadProgramCapability

        updateProgramCapability: function (area, bos, program, id, list) {

            try{

                SP.SOD.executeFunc('SP.Runtime.js', 'SP.ClientContext',
                function () {
                    SP.SOD.executeFunc('SP.js', 'SP.ClientContext',
                    function () {
        
                        var desc = jQuery("#programdesc").val();
                        console.log(desc)

        
                        //Update Program Details
                        var ctx = _spPageContextInfo.webAbsoluteUrl;                
                        var clientContext = new SP.ClientContext(ctx);
                        var oList =  clientContext.get_web().get_lists().getByTitle(list);//MILTECH
                        var oListItem = oList.getItemById(id);  
                        

                        oListItem.set_item('BOS', bos);
                        oListItem.set_item('CapabilityDescription',  desc);

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

        },//updateProgramOverview


        updatePOMAllocation: function (area, bos, program, id, list) {

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

        },//updatePOMAllocation

        downloadPOMAllocation: function (program) {

            try{

                console.log('POM Allo')
                console.log(program);

                var editor = program.Editor.Title || "";
                var modified = moment(program.Modified).format('MMMM Do YYYY, h:mm:ss a') || "";
                var modStr = "Last Modified by " + editor + " at " + modified;
                var CongressionalMarks = program.CongressionalMarks || "";
                var DeepDiveImpacts = program.DeepDiveImpacts || "";
                var MODLevel = program.MODLevel || "";
                var OtherFundingIssues = program.OtherFundingIssues || "";
                var PDM = program.PDM || "";
            


                jQuery("#modifiedSpanPOMAllo").empty()
                var modified = jQuery("#modifiedSpanPOMAllo").append("<strong> "+modStr+" </strong>");
                var deepDiveImpacts = jQuery("#deep-dive-impacts").val(DeepDiveImpacts);
                var congressionalMarks = jQuery("#congressional-marks").val(CongressionalMarks);
                var pdm = jQuery("#pdm").val(PDM);
                var funding = jQuery("#funding").val(OtherFundingIssues); 
                var modLevel = jQuery("#MODLevel").val(MODLevel);





            }
            catch(e){

                console.log(e);

            }

        },//downloadPOMAllocation



        updateProgram: function (area, bos, program, id, list, sourceData) {

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

                        console.log(root)
                        console.log(key4)
                        console.log(LIN)

                        //Update Program Details
                        var ctx = _spPageContextInfo.webAbsoluteUrl + '/programs';                
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

        },//updateProgram


        updateProgramPOMAllo: function (area, bos, program, id, list, appn, tag, pomTag, sourceData, FYs) {

            try{

                SP.SOD.executeFunc('SP.Runtime.js', 'SP.ClientContext',
                function () {
                    SP.SOD.executeFunc('SP.js', 'SP.ClientContext',
                    function () {


                        //console.log(sourceData)

                        var root  = sourceData[bos]['Roots'].toString();
                        var POMPeriod  = sourceData[bos][appn]['POM'];





                        //Update Program Details
                        var ctx = _spPageContextInfo.webAbsoluteUrl + '/programs';                
                        var clientContext = new SP.ClientContext(ctx);
                        var oList =  clientContext.get_web().get_lists().getByTitle(list);//MILTECH
                        var oListItem = oList.getItemById(id);  

                        
                        oListItem.set_item('progRoot', root);
                        oListItem.set_item('POMPeriod', POMPeriod);


                        for(var i = 0; i < FYs.length; i++){
                            if(FYs[i].OData__x0050_2){//USE SITE COLUMN WHEN IMPORTING FROM ACCESS
                
                                var fystr = 'FY'+ FYs[i].OData__x0050_2;//USE SITE COLUMN WHEN IMPORTING FROM ACCESS
                                var fy = FYs[i].OData__x0050_2;
                                var sum =  sourceData[bos][appn][fystr]['SUM'];
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
                                
                                if(appn === "TOTAL"){
                                    console.log('redirect');
                                    console.log(_spPageContextInfo.webAbsoluteUrl + "/programs/Pages/collab.aspx?area="+area+","+bos+","+program+"");
                                    alert(program + '\nUpdated. Click OK to Redirect to Quad Page.');
                                    setTimeout(function(){ location.href = _spPageContextInfo.webAbsoluteUrl + "/programs/Pages/collab.aspx?area="+area+","+bos+","+program+"";  }, 5000);
    

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

        }//updateProgramPOMAllo

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

        addItem:function(area, bos, program, rootArr, FYs){

            try{

                if (typeof(Storage) !== "undefined") {

                    //console.log('Add BOS');
                    //console.log(bos)
                    //console.log(rootArr);
                    //console.log(sourceData);


                    var sourceData = {};
                    sourceData['Area'] = area;
                    sourceData['BOS'] = bos;
                    sourceData['Program'] = program;

                    sourceData[bos] = {};
                    sourceData[bos]['RDTE'] = {};
                    sourceData[bos]['PROC'] = {};
                    sourceData[bos]['OTHER'] = {};
                    sourceData[bos]['TOTAL'] = {};
                    sourceData[bos]['Quantity'] = {};
                    sourceData[bos]['DEEPDIVE'] = {};
                    sourceData[bos]['DEEPDIVE']['RDTE'] = {};
                    sourceData[bos]['DEEPDIVE']['PROC'] = {};
                    sourceData[bos]['DEEPDIVE']['OTHER'] = {};
                    sourceData[bos]['DEEPDIVE']['POM'] = 0;



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
                            sourceData[bos]['Quantity'][fystr] = {};
                            sourceData[bos]['DEEPDIVE'][fystr] = {};


                            sourceData[bos]['RDTE'][fystr]['SUM'] = 0;
                            sourceData[bos]['PROC'][fystr]['SUM'] = 0;
                            sourceData[bos]['OTHER'][fystr]['SUM'] = 0;
                            sourceData[bos]['TOTAL'][fystr]['SUM'] = 0;
                            sourceData[bos]['Quantity'][fystr] = 0;
                            sourceData[bos]['DEEPDIVE'][fystr] = 0;
                            sourceData[bos]['DEEPDIVE']['RDTE'][fystr] = 0;
                            sourceData[bos]['DEEPDIVE']['PROC'][fystr] = 0;
                            sourceData[bos]['DEEPDIVE']['OTHER'][fystr] = 0;
        







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

                    var bos = jQuery("#bos option:selected").text();

                    if(checked){
                        sourceData[bos][root] = {};
                        sourceData[bos]['Roots'].unshift(root);

                        jQuery('#currentProgramRoot').empty();
                        jQuery('#currentProgramRoot').append(sourceData[bos]['Roots'].toString())



                    }else{
                        var index = sourceData[bos]['Roots'].indexOf(root);
                        //console.log(index);
                        sourceData[bos]['Roots'].splice(index,1);

                        jQuery('#currentProgramRoot').empty();
                        jQuery('#currentProgramRoot').append(sourceData[bos]['Roots'].toString())

                        
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

        changeKey4:function(bos, key4, sourceData, checked){

            try{

                //console.log(bos + ' : ' + key4)

                if (typeof(Storage) !== "undefined") {

                    var bos = jQuery("#bos option:selected").text();

                    if(checked){
                        sourceData[bos]['Key4s'].unshift(key4);

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

        changeLIN:function(bos, LIN, sourceData, checked){

            try{

               //console.log(bos + ' : ' + LIN)


                if (typeof(Storage) !== "undefined") {

                    var bos = jQuery("#bos option:selected").text();

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



        createProgramAPPN:function(sourceData, bos, root, BOSRoot, FYs){

            try{

                if (typeof(Storage) !== "undefined") {


                                //console.log('APPN')
                                var bos = jQuery("#bos option:selected").text();
                                var POMdb = TAFFY(BOSRoot);


                                //console.log(bos);
                                //console.log(root)


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

                    if(sourceData[bos][root]){

                        sourceData[bos][root]['RDTE']['Key4s'] = {}; 
                        sourceData[bos][root]['PROC']['Key4s'] = {};
                        sourceData[bos][root]['OTHER']['Key4s'] = {};

                        //Distinct Key 4s
                        var key4Arr = POMdb().distinct('OData__x006b_ey4'); 
                        //console.log(key4Arr);

                        for(var j = 0; j < key4Arr.length; j++){

                            var key4 = key4Arr[j];




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

        removeProgramDeepDive:function(sourceData, bos, root, BOSRoot, FYs){

            try{

                if (typeof(Storage) !== "undefined") {

                    console.log('Subtract Key 4s')



                    //console.log('APPN')
                    var bos = jQuery("#bos option:selected").text();
                    var POMdb = TAFFY(BOSRoot);







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
                        var dollars = POMdb({OData__x006b_ey4:key4}).select(fyprop);
                        var sum = math.sum(POMdb({OData__x006b_ey4:key4}).select(fyprop));

                        //console.log(key4 + ' : ' + sum)

                        if(sum > 0){

                            if(sourceData[bos][root][appn]['Key4s'][key4]){
                                sourceData[bos][root][appn]['Key4s'][key4][fystr] = {};
                                sourceData[bos][root][appn]['Key4s'][key4][fystr]['Items'] = dollars;
                                sourceData[bos][root][appn]['Key4s'][key4][fystr]['SUM'] = sum;
                                sourceData[bos][root][appn]['Key4s'][key4]['SUM'] += sum;

    
    
                            }else{
                                sourceData[bos][root][appn]['Key4s'][key4] = {};
                                sourceData[bos][root][appn]['Key4s'][key4]['Root'] = root;//set root
                                sourceData[bos][root][appn]['Key4s'][key4][fystr] = {};
                                sourceData[bos][root][appn]['Key4s'][key4][fystr]['Items'] = dollars;
                                sourceData[bos][root][appn]['Key4s'][key4][fystr]['SUM'] = sum;
                                sourceData[bos][root][appn]['Key4s'][key4]['POM'] = 0;
                                sourceData[bos][root][appn]['Key4s'][key4]['SUM'] = sum;

    
    
    
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
                                sourceData[bos][root]['Quantity']['LINs'][LIN]['SUM'] += sum;



                            }else{
                                sourceData[bos][root]['Quantity']['LINs'][LIN] = {};
                                sourceData[bos][root]['Quantity']['LINs'][LIN]['Root'] = root;//set root
                                sourceData[bos][root]['Quantity']['LINs'][LIN]['NOMEN'] = nomen;//set LIN Nomenclature
                                sourceData[bos][root]['Quantity']['LINs'][LIN][fystr] = {};
                                sourceData[bos][root]['Quantity']['LINs'][LIN][fystr]['Items'] = quantities;
                                sourceData[bos][root]['Quantity']['LINs'][LIN][fystr]['SUM'] = 0;
                                sourceData[bos][root]['Quantity']['LINs'][LIN][fystr]['SUM'] = sum;
                                sourceData[bos][root]['Quantity']['LINs'][LIN]['POM'] = 0;
                                sourceData[bos][root]['Quantity']['LINs'][LIN]['SUM'] = sum;


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
                            jQuery('#key4').append('<span id="'+key4+'"><input type="checkbox" class="'+key4+'"><label class='+key4+'>'+key4+'</label> : <label class='+key4+'root>'+ root +'</label><br/><br/></span>');
    

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
                            jQuery('#LIN').prepend('<span id="'+LIN+'"><input type="checkbox" class="'+LIN+'"><label class='+LIN+'>'+LIN+' : '+nomen+'</label> : <label class='+LIN+'root>'+root+'</label><br/><br/></span>');
        

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

        loadKey4Allo:function(bos, root, key4, sourceData, FYs, checked){
            try{  

                //console.log('Load Key 4 Allo')
                //console.log(bos + ' : ' + root + ' : ' + key4)
                //console.log(sourceData)
                //console.log( jQuery("#key4Allo") )

                //console.log('previous root ' + previousRoot)

                

                if(checked){

                            

                            if(sourceData[bos][root]['RDTE']['Key4s'][key4]){
                                var sum = sourceData[bos][root]['RDTE']['Key4s'][key4]['SUM'];
                                var pom = sourceData[bos][root]['RDTE']['Key4s'][key4]['POM'];
                                //console.log(pom);
                                this.drawKey4Allo(root, key4, sum, pom);


                            }else if(sourceData[bos][root]['PROC']['Key4s'][key4]){
                                var sum = sourceData[bos][root]['PROC']['Key4s'][key4]['SUM'];
                                var pom  = sourceData[bos][root]['PROC']['Key4s'][key4]['POM'];
                                //console.log(pom);
                                this.drawKey4Allo(root, key4, sum, pom);



                            }else if(sourceData[bos][root]['OTHER']['Key4s'][key4]){
                                var sum = sourceData[bos][root]['OTHER']['Key4s'][key4]['SUM'];
                                var pom = sourceData[bos][root]['OTHER']['Key4s'][key4]['POM'];
                                //console.log(pom);
                                this.drawKey4Allo(root, key4, sum, pom);

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

        loadKey4AlloModal:function(sourceData, key4){
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
                                                        '<td><input id= "fy19Allo" type="textbox"/ ></td>' +
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
                                title: key4 + " Allocation",
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
                     // call your Jquery method here...


    





                }else{
                    console.log(true);
                }

            }






            }
            catch(e){
                console.log(e);
            }
   
        },//loadKey4AlloModal

        key4Split:function(bos, key4, sourceData, FYs){  

            try{

                console.log('Key 4 Split');


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
                        this.fySplit(FYs, sourceData[bos]['DEEPDIVE']['RDTE'], sourceData[bos], 'RDTE');


               }else if(acft !== -1 || ammo !== -1 | msls !== -1 || opa !== -1 || wtcv !== -1){

                       // console.log('PROC: ' + key4)
                       // console.log(sourceData[bos])
                       // console.log(sourceData[bos]['DEEPDIVE']['PROC']);
                        this.fySplit(FYs, sourceData[bos]['DEEPDIVE']['PROC'], sourceData[bos], 'PROC');



               }else if(awcf !== -1 || chmc !== -1 || chmd !== -1 || mca !== -1 || ngpa !== -1 || 
                            oma !== -1 || omng !== -1 || omar !== -1  || rdta !== -1  || rpa !== -1 || wedg !== -1 ){

                       // console.log('OTHER: ' + key4)
                        //console.log(sourceData[bos])
                       // console.log(sourceData[bos]['DEEPDIVE']['OTHER']);
                        this.fySplit(FYs, sourceData[bos]['DEEPDIVE']['OTHER'], sourceData[bos], 'OTHER');

                


                }

    
                var obj = JSON.stringify(sourceData);
                sessionStorage.setItem('SourceData', obj);
    
                

            }
            catch(e){
                console.log(e);
            }



        },

        key4Reset:function(bos, key4, sourceData, FYs){  

            try{

                console.log('Key 4 Reset');


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

                        console.log('RDTE: ' + key4)
                        console.log(sourceData[bos])
                        console.log(sourceData[bos]['DEEPDIVE']['RDTE']);
                        this.fyReset(FYs, sourceData[bos]['DEEPDIVE']['RDTE'], sourceData[bos], 'RDTE');


               }else if(acft !== -1 || ammo !== -1 | msls !== -1 || opa !== -1 || wtcv !== -1){

                        console.log('PROC: ' + key4)
                        console.log(sourceData[bos])
                        console.log(sourceData[bos]['DEEPDIVE']['PROC']);
                        this.fyReset(FYs, sourceData[bos]['DEEPDIVE']['PROC'], sourceData[bos], 'PROC');



               }else if(awcf !== -1 || chmc !== -1 || chmd !== -1 || mca !== -1 || ngpa !== -1 || 
                            oma !== -1 || omng !== -1 || omar !== -1  || rdta !== -1  || rpa !== -1 || wedg !== -1 ){

                        console.log('OTHER: ' + key4)
                        console.log(sourceData[bos])
                        console.log(sourceData[bos]['DEEPDIVE']['OTHER']);
                        this.fyReset(FYs, sourceData[bos]['DEEPDIVE']['OTHER'], sourceData[bos], 'OTHER');

                }

    
                var obj = JSON.stringify(sourceData);
                sessionStorage.setItem('SourceData', obj);
    
                

            }
            catch(e){
                console.log(e);
            }



        },


        fySplit:function(FYs, appnData, sourceData, appn){

            //console.log('FY Roll')
            console.log(FYs);
            //console.log(sourceData);

            for(var i = FYs.length - 1; i >= 0; i--){
                if(FYs[i].OData__x0050_2){//USE SITE COLUMN WHEN IMPORTING FROM ACCESS
    
                    var fystr = 'FY'+ FYs[i].OData__x0050_2;//USE SITE COLUMN WHEN IMPORTING FROM ACCESS
                    var fy = FYs[i].OData__x0050_2;


                    appnData[fystr] += 10;//GET FROM JSON

                    //console.log(sourceData[appn][fystr]['SUM']);


                    if(i < 2 && sourceData[appn][fystr]['SUM'] > 0){//disregard POM interval
                        sourceData[appn][fystr]['SUM'] -= appnData[fystr];
                        sourceData['DEEPDIVE'][fystr] -= appnData[fystr];
                        sourceData['TOTAL'][fystr]['SUM'] -= appnData[fystr];


                    }else if(i >= 2 && (sourceData[appn]['POM']  > 0 && sourceData[appn][fystr]['SUM'] > 0)){//apply POM interval
                        sourceData[appn][fystr]['SUM'] -= appnData[fystr];
                        sourceData[appn]['POM'] -= appnData[fystr];
                        sourceData['DEEPDIVE'][fystr] -= appnData[fystr];
                        sourceData['DEEPDIVE']['POM'] -= appnData[fystr];
                        sourceData['TOTAL'][fystr]['SUM'] -= appnData[fystr];



                    }



                }
            }

            //console.log('Subtract RDTE');
            //console.log(sourceData);
            //console.log(appnData)



        },

        fyReset:function(FYs, appnData, sourceData, appn){

            //console.log('FY Roll')
            //console.log(FYs);
            //console.log(sourceData);

            for(var i = FYs.length - 1; i >= 0; i--){
                if(FYs[i].OData__x0050_2){//USE SITE COLUMN WHEN IMPORTING FROM ACCESS
    
                    var fystr = 'FY'+ FYs[i].OData__x0050_2;//USE SITE COLUMN WHEN IMPORTING FROM ACCESS
                    var fy = FYs[i].OData__x0050_2;




                    //console.log(sourceData[appn][fystr]['SUM']);


                    if(i < 2 && sourceData[appn][fystr]['SUM'] > 0){//disregard POM interval
                        sourceData[appn][fystr]['SUM'] += appnData[fystr];
                        sourceData['DEEPDIVE'][fystr] += appnData[fystr];
                        sourceData['TOTAL'][fystr]['SUM'] += appnData[fystr];


                    }else if(i >= 2 && (sourceData[appn]['POM']  > 0 && sourceData[appn][fystr]['SUM'] > 0)){//apply POM interval
                        sourceData[appn][fystr]['SUM'] += appnData[fystr];
                        sourceData[appn]['POM'] += appnData[fystr];
                        sourceData['DEEPDIVE'][fystr] += appnData[fystr];
                        sourceData['DEEPDIVE']['POM'] += appnData[fystr];
                        sourceData['TOTAL'][fystr]['SUM'] += appnData[fystr];


                    }

                   appnData[fystr] -= 10;//GET FROM JSON




                }
            }

            //console.log('Subtract RDTE');
            //console.log(sourceData);
            //console.log(appnData)



        },



        loadLINAllo:function(bos, root, LIN, sourceData, FYs, checked){  
            try{  

                //console.log('Load LIN Allo')
                //console.log(bos + ' : ' + root + ' : ' + LIN)
                //console.log(sourceData)

                //console.log('previous root ' + previousRoot)

                
                if(checked){

                    if(sourceData[bos][root]['Quantity']['LINs'][LIN]){

                        //console.log(root + ' : ' + key4)
                        var sum = sourceData[bos][root]['Quantity']['LINs'][LIN]['SUM'];
                        var pom = sourceData[bos][root]['Quantity']['LINs'][LIN]['POM'];
                        //console.log( sourceData[bos][root]['Quantity']['LINs'] );
                        //console.log(pom)
                        this.drawLINAllo(root, LIN, sum, pom);


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

        drawKey4Allo:function(root, key4, sum, pom){

            try{

                //console.log('draw allo')
                //console.log(FYs)
                //console.log(allo);


                jQuery("#key4Table").append('<tr id="'+key4+'rowDisp">')
                jQuery("#"+key4+"rowDisp").append('<td><span>'+root+'</span></td>');
                jQuery("#"+key4+"rowDisp").append('<td><span>'+key4+'</span></td>');
                jQuery("#"+key4+"rowDisp").append('<td><span>$'+sum+'</span></td>');
                jQuery("#"+key4+"rowDisp").append('<td><span><a href="#"><div id="'+key4+'" class="blackbutton">Allocate</div></a></span></td></td><td><span><a href="#"><div id="'+key4+'" class="blackbutton">Reset</div></a></span></td></td>');







            }
            catch(e){
                console.log(e)
            }


        },//drawKey4Allo

        drawLINAllo:function(root, LIN, sum, pom){

            try{

                //console.log('draw allo')
                //console.log(FYs)
                //console.log(allo);


                jQuery("#LINTable").append('<tr id="'+LIN+'rowDisp">')
                jQuery("#"+LIN+"rowDisp").append('<td><span>'+root+'</span></td>');
                jQuery("#"+LIN+"rowDisp").append('<td><span>'+LIN+'</span></td>');
                jQuery("#"+LIN+"rowDisp").append('<td><span>'+sum+'</span></td>');
                //jQuery("#"+LIN+"rowDisp").append('<td><span><input type="text" id="'+LIN+'"></span></td>');
                //jQuery("#"+LIN+"rowDisp").append('<td><span><input type="checkbox" id="'+LIN+'all"></span></td></td>');






            }
            catch(e){
                console.log(e)
            }

        },//drawLINAllo

        defineKey4s:function(bos, key4, sourceData, FYs, checked){

            try{

                for(var root in sourceData[bos]){


                    if(root !== 'RDTE' && root !== 'PROC' && root !== 'OTHER' && root !== 'TOTAL' && root !== 'Quantity' && root !== 'Roots' 
                            && root !== 'Key4s' && root !== 'LINs' && root !== 'DEEPDIVE'){//modify JSON
                            

                            if(sourceData[bos][root]['RDTE']['Key4s'][key4]){

                               // console.log('rdte')

                                var rootKey4 = sourceData[bos][root]['RDTE']['Key4s'][key4];
                                //console.log(rootKey4)
                                this.createKey4s(bos, root, key4, sourceData, rootKey4, FYs, checked, 'RDTE');


                            }else if(sourceData[bos][root]['PROC']['Key4s'][key4]){
                               // console.log('proc')

                                var rootKey4 = sourceData[bos][root]['PROC']['Key4s'][key4];
                                //console.log(rootKey4)
                                this.createKey4s(bos, root, key4, sourceData, rootKey4, FYs, checked, 'PROC');


                            }else if(sourceData[bos][root]['OTHER']['Key4s'][key4]){
                                //console.log('other')
                                var rootKey4 = sourceData[bos][root]['OTHER']['Key4s'][key4];
                                //console.log(rootKey4)
                                this.createKey4s(bos, root, key4, sourceData, rootKey4, FYs, checked, 'OTHER');


                            }


                            


                    }


                }


 

            }
            catch(e){
                console.log(e)
            }


        },//defineKey4s

        defineQuantity:function(bos, LIN, sourceData, FYs, checked){

            try{

                for(var root in sourceData[bos]){


                    if(sourceData[bos][root]['Quantity']){//modify JSON
                            
                        console.log(root);
                        console.log(sourceData[bos][root]['Quantity'])

                        var rootLIN = sourceData[bos][root]['Quantity']['LINs'][LIN];
                        this.createLINs(bos, root, LIN, sourceData, rootLIN, FYs, checked, 'OTHER');


                            
                            

                    }


                }


 

            }
            catch(e){
                console.log(e)
            }


        },//defineQuantity


        createKey4s:function(bos, root, key4, sourceData, rootKey4, FYs, checked, id){
            try{



                //console.log('sum key 4s')


                
                

                for(var i = 0; i < FYs.length; i++){


                    if(FYs[i].OData__x0050_2){

                        var fystr = 'FY'+ FYs[i].OData__x0050_2;//USE SITE COLUMN WHEN IMPORTING FROM ACCESS
                        var fy = FYs[i].OData__x0050_2;




                        if(checked && sourceData[bos][root][id]['Key4s'][key4][fystr]){
                                    
                            //console.log(fystr);
                            //console.log(sourceData[bos][root][id]['Key4s'][key4][fystr]['SUM'])
                            sourceData[bos]['DEEPDIVE'][fystr] += sourceData[bos][root][id]['Key4s'][key4][fystr]['SUM'];


                        } else if(!checked && sourceData[bos][root][id]['Key4s'][key4][fystr]){
                            
                                
                            sourceData[bos]['DEEPDIVE'][fystr] -= sourceData[bos][root][id]['Key4s'][key4][fystr]['SUM'];


                        }
                        



                    }


                }

                //POM
                if(checked){
                    sourceData[bos]['DEEPDIVE']['POM'] += sourceData[bos][root][id]['Key4s'][key4]['POM'];


                }else{
                    sourceData[bos]['DEEPDIVE']['POM'] -= sourceData[bos][root][id]['Key4s'][key4]['POM'];


                }



                


                var obj = JSON.stringify(sourceData);
                sessionStorage.setItem('SourceData', obj);



            }
            catch(e){
                console.log(e);
            }

        },

        createLINs:function(bos, root, LIN, sourceData, rootLIN, FYs, checked, id){
            try{



                //console.log('sum key 4s')


                
                

                for(var i = 0; i < FYs.length; i++){


                    if(FYs[i].OData__x0050_2){

                        var fystr = 'FY'+ FYs[i].OData__x0050_2;//USE SITE COLUMN WHEN IMPORTING FROM ACCESS
                        var fy = FYs[i].OData__x0050_2;



                        if(checked && sourceData[bos][root]['Quantity']['LINs'][LIN][fystr]){
                                    
                            //console.log(fystr);
                            //console.log(sourceData[bos][root]['Quantity']['LINs'][LIN][fystr]['SUM'])
                            sourceData[bos]['Quantity'][fystr] += sourceData[bos][root]['Quantity']['LINs'][LIN][fystr]['SUM'];


                        } else if(!checked && sourceData[bos][root]['Quantity']['LINs'][LIN][fystr]){
                            
                            //console.log(fystr);
                            //console.log(sourceData[bos][root]['Quantity']['LINs'][LIN][fystr]['SUM'])

                            sourceData[bos]['Quantity'][fystr] -= sourceData[bos][root]['Quantity']['LINs'][LIN][fystr]['SUM'];


                        }
                        



                    }


                }

                //POM
                if(checked){
                    sourceData[bos]['Quantity']['POM'] += sourceData[bos][root]['Quantity']['LINs'][LIN]['POM'];


                }else{
                    sourceData[bos]['Quantity']['POM'] -= sourceData[bos][root]['Quantity']['LINs'][LIN]['POM'];


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

                                    if(sourceData[bos][root][id]['Key4s'][key4][fystr]){

                
                                        sourceData[bos][root][id]['Key4s'][key4]['SUM'] -= diff;//key 4 level
                                        sourceData[bos][root][id][fystr]['SUM'] -= diff;//root level
                                        sourceData[bos][id][fystr]['SUM'] -= diff;//bos level
                                        sourceData[bos]['TOTAL'][fystr]['SUM'] -= diff;//total



                                        console.log(sourceData[bos][root][id]['Key4s'][key4][fystr]);//key 4 level
                                        //console.log(sourceData[bos][root][id][fystr][appn]);//root level
                                        //console.log(sourceData[bos][id][fystr]);//bos level
                                        //console.log(sourceData[bos]['TOTAL'][fystr]);//total
                                        //console.log(' ')





                                    }


                                 }else{


                                    if(sourceData[bos][root][id]['Key4s'][key4][fystr]){

                                            sourceData[bos][root][id]['Key4s'][key4][fystr]['SUM'] -= diff;//key 4 level
                                            sourceData[bos][root][id][fystr][appn]['SUM'] -= diff;//root level
                                            sourceData[bos][id][fystr]['SUM'] -= diff;//bos level
                                            sourceData[bos]['TOTAL'][fystr]['SUM'] -= diff;//total




                                            //console.log(sourceData[bos][root][id]['Key4s'][key4][fystr]);//key 4 level
                                            //console.log(sourceData[bos][root][id][fystr][appn]);//root level
                                            //console.log(sourceData[bos][id][fystr]);//bos level
                                            //console.log(sourceData[bos]['TOTAL'][fystr]);//total
                                            //console.log(' ')
  
                                    }




                                 }


                                

        
                    }
                }//for

                //POM
                sourceData[bos][root][id]['Key4s'][key4]['POM'] -=  total; //POM difference : key 4 level
                sourceData[bos][root][id]['POM'] -= total; //POM difference bos level




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


                

                if(sourceData[bos][root]['Quantity']['LINs'][LIN]){

                    var pomDif = dollar / 5;//set difference to allocate from POM period
                    //console.log(bos + ' : ' + root + ' : ' + LIN + ' : ' + dollar + ' : ' + pomDif);
                    //console.log(sourceData[bos][root]['Quantity']['LINs'][LIN])

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


                            

                            if(sourceData[bos][root]['Quantity']['LINs'][LIN][fystr]){
                                sourceData[bos][root]['Quantity']['LINs'][LIN][fystr]['SUM'] -= diff;//LIN level



                                console.log(fystr);
                                console.log(sourceData[bos][root]['Quantity']['LINs'][LIN][fystr]);//LIN Level
                                console.log(sourceData[bos]['Quantity'][fystr]);//bos Level





                            }
                            

        
                    }
                }//for

                sourceData[bos][root]['Quantity']['LINs'][LIN]['POM'] -=  total; //POM difference : LIN level

                
                


                var obj = JSON.stringify(sourceData);
                sessionStorage.setItem('SourceData', obj);





            }
            catch(e){
                console.log(e);
            }
        },//setLINAlloFYs

        RDTEDOM:function(bos, sourceData, FYs){

            try{

                //console.log(sourceData)
                //console.log(FYs)
                
                
                //var editor = currentProgram[0].Editor.Title || "";
                //var modified = moment(currentProgram[0].Modified).format('MMMM Do YYYY, h:mm:ss a') || "";


                for(var i = 0; i < FYs.length; i++){
                    if(FYs[i].OData__x0050_2){//USE SITE COLUMN WHEN IMPORTING FROM ACCESS
        
                        var fystr = 'FY'+ FYs[i].OData__x0050_2;//USE SITE COLUMN WHEN IMPORTING FROM ACCESS
                        var fy = FYs[i].OData__x0050_2;
                        var sum =sourceData[bos]['RDTE'][fystr].SUM;
                        var pom =sourceData[bos]['RDTE']['POM'];


                        //console.log(fystr)
                        //console.log(sourceData[bos]['RDTE'][fystr].SUM)

                        jQuery("#rdtefy"+fy+"").val('$'+sum);
                        jQuery("#rdtePOMPeriod").val('$'+pom);




                    }
                }

               
            }
            catch(e){
                console.log(e);
            }
    
    
    
        },//RDTEDOM()

        APPNDOM:function(appnData, FYs, tag, pomTag){

            try{

                //console.log(appnData)
                
                
                var editor = appnData.Editor.Title || "";
                var modified = moment(appnData.Modified).format('MMMM Do YYYY, h:mm:ss a') || "";
                var pom = appnData['POMPeriod'];

                for(var i = 0; i < FYs.length; i++){
                    if(FYs[i].OData__x0050_2){//USE SITE COLUMN WHEN IMPORTING FROM ACCESS
        
                        var fystr = 'FY'+ FYs[i].OData__x0050_2;//USE SITE COLUMN WHEN IMPORTING FROM ACCESS
                        var fy = FYs[i].OData__x0050_2;
                        var sum = appnData['OData__x0066_y'+fy];


                        //console.log(fystr)
                        //console.log(sum)
                        //console.log(appnData['OData__x0066_y'+fy])
                        //console.log(sourceData[bos]['RDTE'][fystr].SUM)

                        jQuery("#"+tag+""+fy+"").val('$'+sum);
                        jQuery("#"+pomTag+"").val('$'+pom);




                    }
                }

                jQuery("#modifiedSpanPOMAllo").empty();
                jQuery("#modifiedSpanPOMAllo").append('<strong>Last Modified by ' + editor + ' at ' + modified + "</strong>");    


               
            }
            catch(e){
                console.log(e);
            }
    
    
    
        },//RDTEDOM()


        PROCDOM:function(bos, sourceData, FYs){

            try{

                //console.log(sourceData)
                //console.log(FYs)
                
                
                //var editor = currentProgram[0].Editor.Title || "";
                //var modified = moment(currentProgram[0].Modified).format('MMMM Do YYYY, h:mm:ss a') || "";


                for(var i = 0; i < FYs.length; i++){
                    if(FYs[i].OData__x0050_2){//USE SITE COLUMN WHEN IMPORTING FROM ACCESS
        
                        var fystr = 'FY'+ FYs[i].OData__x0050_2;//USE SITE COLUMN WHEN IMPORTING FROM ACCESS
                        var fy = FYs[i].OData__x0050_2;
                        var sum =sourceData[bos]['PROC'][fystr].SUM;
                        var pom =sourceData[bos]['PROC']['POM'];


                        //console.log(fystr)
                        //console.log(sourceData[bos]['PROC'][fystr].SUM)

                        jQuery("#procfy"+fy+"").val('$'+sum);
                        jQuery("#procPOMPeriod").val('$'+pom);




                    }
                }

               
            }
            catch(e){
                console.log(e);
            }
    
    
    
        },//PROCDOM()

        OTHERDOM:function(bos, sourceData, FYs){

            try{

                //console.log(sourceData)
                //console.log(FYs)
                
                
                //var editor = currentProgram[0].Editor.Title || "";
                //var modified = moment(currentProgram[0].Modified).format('MMMM Do YYYY, h:mm:ss a') || "";


                for(var i = 0; i < FYs.length; i++){
                    if(FYs[i].OData__x0050_2){//USE SITE COLUMN WHEN IMPORTING FROM ACCESS
        
                        var fystr = 'FY'+ FYs[i].OData__x0050_2;//USE SITE COLUMN WHEN IMPORTING FROM ACCESS
                        var fy = FYs[i].OData__x0050_2;
                        var sum =sourceData[bos]['OTHER'][fystr].SUM;
                        var pom =sourceData[bos]['OTHER']['POM'];


                        //console.log(fystr)
                        //console.log(sourceData[bos]['OTHER'][fystr].SUM)

                        jQuery("#otherfy"+fy+"").val('$'+sum);
                        jQuery("#otherPOMPeriod").val('$'+pom);




                    }
                }

               
            }
            catch(e){
                console.log(e);
            }
    
    
    
        },//OTHERDOM()

        TOTALDOM:function(bos, sourceData, FYs){

            try{

                //console.log(sourceData)
                //console.log(FYs)
                
                
                //var editor = currentProgram[0].Editor.Title || "";
                //var modified = moment(currentProgram[0].Modified).format('MMMM Do YYYY, h:mm:ss a') || "";


                for(var i = 0; i < FYs.length; i++){
                    if(FYs[i].OData__x0050_2){//USE SITE COLUMN WHEN IMPORTING FROM ACCESS
        
                        var fystr = 'FY'+ FYs[i].OData__x0050_2;//USE SITE COLUMN WHEN IMPORTING FROM ACCESS
                        var fy = FYs[i].OData__x0050_2;
                        var sum =sourceData[bos]['TOTAL'][fystr].SUM;
                        var pom =sourceData[bos]['TOTAL']['POM'];


                        console.log(fystr)
                        //console.log(sourceData[bos]['TOTAL'][fystr].SUM)

                        jQuery("#totalfy"+fy+"").val('$'+sum);
                        jQuery("#totalPOMPeriod").val('$'+pom);




                    }
                }

               
            }
            catch(e){
                console.log(e);
            }
    
    
    
        },//TOTALDOM()

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
    
    
    
        },//QUANTITYDOM()


        MYCFLOORDOM:function(bos, sourceData, FYs){

            try{

                //console.log(sourceData)
                //console.log(FYs)
                
                
                //var editor = currentProgram[0].Editor.Title || "";
                //var modified = moment(currentProgram[0].Modified).format('MMMM Do YYYY, h:mm:ss a') || "";


                for(var i = 0; i < FYs.length; i++){
                    if(FYs[i].OData__x0050_2){//USE SITE COLUMN WHEN IMPORTING FROM ACCESS
        
                        var fystr = 'FY'+ FYs[i].OData__x0050_2;//USE SITE COLUMN WHEN IMPORTING FROM ACCESS
                        var fy = FYs[i].OData__x0050_2;
                        var sum =sourceData[bos]['TOTAL'][fystr].SUM;
                        var pom =sourceData[bos]['TOTAL']['POM'];


                        //console.log(fystr)
                        //console.log(sourceData[bos]['TOTAL'][fystr].SUM)

                        jQuery("#totalfy"+fy+"").val('$'+sum);
                        jQuery("#totalPOMPeriod").val('$'+pom);




                    }
                }

               
            }
            catch(e){
                console.log(e);
            }
    
    
    
        },//MYCFLOORDOM()

        DEEPDIVEDOM:function(bos, sourceData, FYs){

            try{

                console.log(sourceData)
                console.log(FYs)
                
                
                //var editor = currentProgram[0].Editor.Title || "";
                //var modified = moment(currentProgram[0].Modified).format('MMMM Do YYYY, h:mm:ss a') || "";

                

                for(var i = 0; i < FYs.length; i++){
                    if(FYs[i].OData__x0050_2){//USE SITE COLUMN WHEN IMPORTING FROM ACCESS
        
                        var fystr = 'FY'+ FYs[i].OData__x0050_2;//USE SITE COLUMN WHEN IMPORTING FROM ACCESS
                        var fy = FYs[i].OData__x0050_2;
                        var sum = sourceData[bos]['DEEPDIVE'][fystr];
                        var pom = sourceData[bos]['DEEPDIVE']['POM'];


                        //console.log(fystr)
                        //console.log(sourceData[bos]['TOTAL'][fystr].SUM)

                        jQuery("#deepdivefy"+fy+"").val('$'+sum);
                        jQuery("#deepdivePOMPeriod").val('$'+pom);




                    }
                }

                

               
            }
            catch(e){
                console.log(e);
            }
    
    
    
        }//DEEPDIVEDOM()




        



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
        programUrl:function(program){
            try{
                var ctx = _spPageContextInfo;
                var progLoc = ctx.webAbsoluteUrl.search('programs');
                console.log(progLoc)
                if(progLoc === -1){
                    url = ctx.webAbsoluteUrl + "/programs/_api/web/lists/getbytitle('Programs1')/items?Title eq '"+encodeURIComponent(''+program+'')+"'";  


                }else{
                    url = ctx.webAbsoluteUrl + "/_api/web/lists/getbytitle('Programs1')/items?Title eq '"+encodeURIComponent(''+program+'')+"'";  


                }
                console.log(url);
                return url;

            }
            catch(e){
                console.log(e);
            }


        },
        programUrl2:function(program){
            try{
                var ctx = _spPageContextInfo;
                var url = ctx.webAbsoluteUrl + "/_api/web/lists/getbytitle('Programs1')/items?$filter=Title eq '"+encodeURIComponent(''+program+'')+"'";         
                //console.log(url);
                return url;

            }
            catch(e){
                console.log(e);
            }


        },

        programUrl3:function(bos, program){
            try{
                var ctx = _spPageContextInfo;
                var url = ctx.webAbsoluteUrl + "/programs/_api/web/lists/getbytitle('Programs1')/items?BOS eq '"+encodeURIComponent(''+bos+'')+"'"; 
                console.log(url) 
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

        programListsUrl:function(programName){
            try{
                var ctx = _spPageContextInfo;
                var url = ctx.webAbsoluteUrl + "/programs/_api/web/lists/getbytitle('PROGRAMLISTS')/items";
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

        ProgramRequirementsUrl:function(program){
            try{
                var ctx = _spPageContextInfo;
                var url = "";
                var progLoc = ctx.webAbsoluteUrl.search('programs');
                if(progLoc === -1){
                    url = ctx.webAbsoluteUrl + "/programs/_api/web/lists/getbytitle('ProgramRequirements1')/items?$select=ID,Title,BOS,formation,approvedRequirementsDoc,arocjroc,iocfoc,capability,armymodernizationpriority,coecgassessment,risk,TotalAAO,TotalAPO,Inventory,InventoryPercent,Editor/Title,Modified,FileRef/FileRef&$expand=Editor&$filter=Title eq '"+encodeURIComponent(''+program+'')+"'";


                }else{
                    url = ctx.webAbsoluteUrl + "/_api/web/lists/getbytitle('ProgramRequirements1')/items?$select=ID,Title,BOS,formation,approvedRequirementsDoc,arocjroc,iocfoc,capability,armymodernizationpriority,coecgassessment,risk,TotalAAO,TotalAPO,Inventory,InventoryPercent,Editor/Title,Modified,FileRef/FileRef&$expand=Editor&$filter=Title eq '"+encodeURIComponent(''+program+'')+"'";


                }

                //console.log(url);
                return url;

            }
            catch(e){
                console.log(e);
            }


        },



        ProgramOverviewUrl:function(program){
            try{
                var ctx = _spPageContextInfo;
                var url = "";
                var progLoc = ctx.webAbsoluteUrl.search('programs');
                if(progLoc === -1){
                    url = ctx.webAbsoluteUrl + "/programs/_api/web/lists/getbytitle('ProgrammaticOverview1')/items?$select=ID,Title,BOS,vendor,Proponent,acatlevel,contracttype,US,Milestones,costalternative,COTSOptions,industryBaseImpacts,APUC,limitations,MSR,MPR,Editor/Title,Modified,FileRef/FileRef&$expand=Editor&$filter=Title eq '"+encodeURIComponent(''+program+'')+"'";


                }else{
                    url = ctx.webAbsoluteUrl + "/_api/web/lists/getbytitle('ProgrammaticOverview1')/items?$select=ID,Title,BOS,vendor,Proponent,acatlevel,contracttype,US,Milestones,costalternative,COTSOptions,industryBaseImpacts,APUC,limitations,MSR,MPR,Editor/Title,Modified,FileRef/FileRef&$expand=Editor&$filter=Title eq '"+encodeURIComponent(''+program+'')+"'";


                }
                return url;

            }
            catch(e){
                console.log(e);
            }


        },



        ProgramCapabilityUrl:function(program){
            try{
                var ctx = _spPageContextInfo;
                var url = "";
                var progLoc = ctx.webAbsoluteUrl.search('programs');
                if(progLoc === -1){
                    url = ctx.webAbsoluteUrl + "/programs/_api/web/lists/getbytitle('ProgramCapability1')/items?$select=ID,Title,BOS,CapabilityDescription,Editor/Title,Modified,FileRef/FileRef&$expand=Editor&$filter=Title eq '"+encodeURIComponent(''+program+'')+"'";


                }else{
                    url = ctx.webAbsoluteUrl + "/_api/web/lists/getbytitle('ProgramCapability1')/items?$select=ID,Title,BOS,CapabilityDescription,Editor/Title,Modified,FileRef/FileRef&$expand=Editor&$filter=Title eq '"+encodeURIComponent(''+program+'')+"'";


                }
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
                    url = ctx.webAbsoluteUrl + "/programs/_api/web/lists/getbytitle('POMAllocation1')/items?$select=ID,Title,BOS,progRoot,progkey4,progLIN,DeepDiveImpacts,CongressionalMarks,PDM,OtherFundingIssues,MODLevel,progLIN,Editor/Title,Modified,FileRef/FileRef&$expand=Editor&$filter=Title eq '"+encodeURIComponent(''+program+'')+"'";


                }else{
                    url = ctx.webAbsoluteUrl + "/_api/web/lists/getbytitle('POMAllocation1')/items?$select=ID,Title,BOS,progRoot,progkey4,progLIN,DeepDiveImpacts,CongressionalMarks,PDM,OtherFundingIssues,MODLevel,progLIN,Editor/Title,Modified,FileRef/FileRef&$expand=Editor&$filter=Title eq '"+encodeURIComponent(''+program+'')+"'";


                }
                return url;

            }
            catch(e){
                console.log(e);
            }


        },


        RDTEUrl:function(program){
            try{
                var ctx = _spPageContextInfo;
                var progLoc = ctx.webAbsoluteUrl.search('programs');
                if(progLoc === -1){
                    url = ctx.webAbsoluteUrl + "/programs/_api/web/lists/getbytitle('RDTE1')/items?$select=ID,Title,BOS,progRoot,progkey4,progLIN,OData__x0066_y19,OData__x0066_y20,OData__x0066_y21,OData__x0066_y22,OData__x0066_y23,OData__x0066_y24,OData__x0066_y25,POMPeriod,Editor/Title,Modified,FileRef/FileRef&$expand=Editor&$filter=Title eq '"+encodeURIComponent(''+program+'')+"'";


                }else{
                    url = ctx.webAbsoluteUrl + "/_api/web/lists/getbytitle('RDTE1')/items?$select=ID,Title,BOS,progRoot,progkey4,progLIN,OData__x0066_y19,OData__x0066_y20,OData__x0066_y21,OData__x0066_y22,OData__x0066_y23,OData__x0066_y24,OData__x0066_y25,POMPeriod,Editor/Title,Modified,FileRef/FileRef&$expand=Editor&$filter=Title eq '"+encodeURIComponent(''+program+'')+"'";


                }
                return url;

            }
            catch(e){
                console.log(e);
            }


        },


        PROCUrl:function(program){
            try{
                var ctx = _spPageContextInfo;
                var progLoc = ctx.webAbsoluteUrl.search('programs');
                if(progLoc === -1){
                    url = ctx.webAbsoluteUrl + "/programs/_api/web/lists/getbytitle('PROC1')/items?$select=ID,Title,BOS,progRoot,progkey4,progLIN,OData__x0066_y19,OData__x0066_y20,OData__x0066_y21,OData__x0066_y22,OData__x0066_y23,OData__x0066_y24,OData__x0066_y25,POMPeriod,Editor/Title,Modified,FileRef/FileRef&$expand=Editor&$filter=Title eq '"+encodeURIComponent(''+program+'')+"'";


                }else{
                    url = ctx.webAbsoluteUrl + "/_api/web/lists/getbytitle('PROC1')/items?$select=ID,Title,BOS,progRoot,progkey4,progLIN,OData__x0066_y19,OData__x0066_y20,OData__x0066_y21,OData__x0066_y22,OData__x0066_y23,OData__x0066_y24,OData__x0066_y25,POMPeriod,Editor/Title,Modified,FileRef/FileRef&$expand=Editor&$filter=Title eq '"+encodeURIComponent(''+program+'')+"'";


                }
                return url;

            }
            catch(e){
                console.log(e);
            }


        },



        OtherUrl:function(program){
            try{
                var ctx = _spPageContextInfo;
                var progLoc = ctx.webAbsoluteUrl.search('programs');
                if(progLoc === -1){
                    url = ctx.webAbsoluteUrl + "/programs/_api/web/lists/getbytitle('OTHER1')/items?$select=ID,Title,BOS,progRoot,progkey4,progLIN,OData__x0066_y19,OData__x0066_y20,OData__x0066_y21,OData__x0066_y22,OData__x0066_y23,OData__x0066_y24,OData__x0066_y25,POMPeriod,Editor/Title,Modified,FileRef/FileRef&$expand=Editor&$filter=Title eq '"+encodeURIComponent(''+program+'')+"'";


                }else{
                    url = ctx.webAbsoluteUrl + "/_api/web/lists/getbytitle('OTHER1')/items?$select=ID,Title,BOS,progRoot,progkey4,progLIN,OData__x0066_y19,OData__x0066_y20,OData__x0066_y21,OData__x0066_y22,OData__x0066_y23,OData__x0066_y24,OData__x0066_y25,POMPeriod,Editor/Title,Modified,FileRef/FileRef&$expand=Editor&$filter=Title eq '"+encodeURIComponent(''+program+'')+"'";


                }
                return url;

            }
            catch(e){
                console.log(e);
            }


        },
        TotalUrl:function(program){
            try{
                var ctx = _spPageContextInfo;
                var progLoc = ctx.webAbsoluteUrl.search('programs');
                if(progLoc === -1){
                    url = ctx.webAbsoluteUrl + "/programs/_api/web/lists/getbytitle('TOTAL1')/items?$select=ID,Title,BOS,progRoot,progkey4,progLIN,OData__x0066_y19,OData__x0066_y20,OData__x0066_y21,OData__x0066_y22,OData__x0066_y23,OData__x0066_y24,OData__x0066_y25,POMPeriod,Editor/Title,Modified,FileRef/FileRef&$expand=Editor&$filter=Title eq '"+encodeURIComponent(''+program+'')+"'";


                }else{
                    url = ctx.webAbsoluteUrl + "/_api/web/lists/getbytitle('TOTAL1')/items?$select=ID,Title,BOS,progRoot,progkey4,progLIN,OData__x0066_y19,OData__x0066_y20,OData__x0066_y21,OData__x0066_y22,OData__x0066_y23,OData__x0066_y24,OData__x0066_y25,POMPeriod,Editor/Title,Modified,FileRef/FileRef&$expand=Editor&$filter=Title eq '"+encodeURIComponent(''+program+'')+"'";


                }
                return url;

            }
            catch(e){
                console.log(e);
            }


        },



        QuantityUrl:function(program){
            try{
                var ctx = _spPageContextInfo;
                var progLoc = ctx.webAbsoluteUrl.search('programs');
                if(progLoc === -1){
                    url = ctx.webAbsoluteUrl + "/programs/_api/web/lists/getbytitle('QUANTITY1')/items?$select=ID,Title,BOS,progRoot,progkey4,progLIN,OData__x0066_y19,OData__x0066_y20,OData__x0066_y21,OData__x0066_y22,OData__x0066_y23,OData__x0066_y24,OData__x0066_y25,POMPeriod,Editor/Title,Modified,FileRef/FileRef&$expand=Editor&$filter=Title eq '"+encodeURIComponent(''+program+'')+"'";


                }else{
                    url = ctx.webAbsoluteUrl + "/_api/web/lists/getbytitle('QUANTITY1')/items?$select=ID,Title,BOS,progRoot,progkey4,progLIN,OData__x0066_y19,OData__x0066_y20,OData__x0066_y21,OData__x0066_y22,OData__x0066_y23,OData__x0066_y24,OData__x0066_y25,POMPeriod,Editor/Title,Modified,FileRef/FileRef&$expand=Editor&$filter=Title eq '"+encodeURIComponent(''+program+'')+"'";


                }
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



        DeepDiveUrl:function(program){
            try{
                var ctx = _spPageContextInfo;
                var progLoc = ctx.webAbsoluteUrl.search('programs');
                if(progLoc === -1){
                    url = ctx.webAbsoluteUrl + "/programs/_api/web/lists/getbytitle('DEEPDIVE1')/items?$select=ID,Title,BOS,progRoot,progkey4,progLIN,OData__x0066_y19,OData__x0066_y20,OData__x0066_y21,OData__x0066_y22,OData__x0066_y23,OData__x0066_y24,OData__x0066_y25,POMPeriod,Editor/Title,Modified,FileRef/FileRef&$expand=Editor&$filter=Title eq '"+encodeURIComponent(''+program+'')+"'";


                }else{
                    url = ctx.webAbsoluteUrl + "/_api/web/lists/getbytitle('DEEPDIVE1')/items?$select=ID,Title,BOS,progRoot,progkey4,progLIN,OData__x0066_y19,OData__x0066_y20,OData__x0066_y21,OData__x0066_y22,OData__x0066_y23,OData__x0066_y24,OData__x0066_y25,POMPeriod,Editor/Title,Modified,FileRef/FileRef&$expand=Editor&$filter=Title eq '"+encodeURIComponent(''+program+'')+"'";


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



