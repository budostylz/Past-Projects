
/*** PageLoadCtrl ***/
angular.module('app').controller('PageLoadCtrl', ['$q', 'GetItemsService','QuadService', 'PresentationService', function ($q, $GetItemsService, $QuadService, $PresentationService) {

    


    
    try{


                   console.log('page load')

                   //Initialize Accordion
                   jQuery( "#accordion" ).accordion();

                   //Hide Program DOM
                   jQuery("#Title1").append("Command");
                   jQuery("#Title2").append("Command");
                   jQuery("#Title3").append("Command");
                   jQuery("#Title4").append("Command");
                   jQuery("#Title5").append("Presentation Options");





                  


                   var vm = this; //view model
                   var bosUrl = $GetItemsService.bosUrl();
                   var areaUrl = $GetItemsService.areaUrl(); 

                   var getBOSItems = $GetItemsService.getItems(bosUrl);
                   var getAreaItems = $GetItemsService.getItems(areaUrl);
                   var loadBOSDOM = $q.all([getBOSItems, getAreaItems]);

                
                   loadBOSDOM.then(function (BOSdata) {
                       //console.log(BOSdata);

                      vm.BOSData = BOSdata[0];
                      vm.areaData = BOSdata[1];
                      var bos = vm.BOSData[0].Title;


                      var programUrl = $GetItemsService.programUrl(bos);
                      var manPowerUrl = $GetItemsService.commandUrl(bos);
                      var ammoUrl = $GetItemsService.AMMOProgramUrl(bos);
                      var stUrl = $GetItemsService.STProgramUrl(bos);

                      var programItems = $GetItemsService.getItems(programUrl);
                      var manPowerItems = $GetItemsService.getItems(manPowerUrl);
                      var ammoItems = $GetItemsService.getItems(ammoUrl);
                      var stItems = $GetItemsService.getItems(stUrl);

                      var _allData = $q.all([
                        programItems,//0
                        manPowerItems,//1
                        ammoItems,//2
                        stItems//3
                      ]);

                      _allData.then(function (allData) {//ALL DATA

                        console.log(allData);
                        vm.programs = allData[0];
                        vm.commands = allData[1];
                        vm.ammo = allData[2];
                        vm.stItems = allData[3];

                       // console.log(vm.programs)
                       // console.log(vm.commands)
                       // console.log(vm.ammo)
                       // console.log(vm.stItems)

                        var loadArea = $QuadService.areaDOM(vm.areaData);//Load Area
                        var loadBOS = $QuadService.BOSDOM(vm.BOSData);//Load BOS

                        var area2 = jQuery("#area2 option:selected").text();
                        var area3 = jQuery("#area3 option:selected").text();

                        //Build Source Data
                        var clearStorage = $PresentationService.clearStorage(); 
                        var sourceData = $PresentationService.initPresentationItem();
                        sourceData = $PresentationService.getItem();  



                        console.log(sourceData);
                        console.log('Session Storage Length: ' + sessionStorage.length);
                        






  

                      });




                   });//loadBOSDOM()


                   
        
    }
    catch(e){
        console.log(e);
    }
    
    

}]);//PageLoadCtrl




angular.module('app').controller('UserSelectCtrl', ['$q','GetItemsService','QuadService', 'PresentationService', function ($q, $GetItemsService, $QuadService, $PresentationService) {

    
    try{
        var vm = this; //view model
        $( document ).ready(function() {



                /*HANDLERS*/



                jQuery("#area1").change(function(e) {//area1


                    var area = this.value;
                    var bos = jQuery("#bos1 option:selected").text();

                    console.log(area);

                    (area === 'Program' || area === "S&T" || area === "AMMO") ? jQuery( "#Title1" ).html('Program') : jQuery( "#Title1" ).html('Command');


                    jQuery('#programInput').empty();
                    jQuery('#programInput').append('Type Command or Program Name Here');






                });//area1

                jQuery("#area2").change(function(e) {//area2


                    //console.log('from area 1');



                    var area = this.value;
                    var bos = jQuery("#bos2 option:selected").text();

                    console.log(area);
                    (area === 'Program' || area === "S&T" || area === "AMMO") ? jQuery( "#Title2" ).html('Program') : jQuery( "#Title2" ).html('Command');

                    jQuery('#programInput').empty();
                    jQuery('#programInput').append('Type Command or Program Name Here');




                    var programUrl = $GetItemsService.programUrl(bos);
                    var manPowerUrl = $GetItemsService.commandUrl(bos);
                    var ammoUrl = $GetItemsService.AMMOProgramUrl(bos);
                    var stUrl = $GetItemsService.STProgramUrl(bos);

                    var programItems = $GetItemsService.getItems(programUrl);
                    var manPowerItems = $GetItemsService.getItems(manPowerUrl);
                    var ammoItems = $GetItemsService.getItems(ammoUrl);
                    var stItems = $GetItemsService.getItems(stUrl);

                    

                    var _allData = $q.all([
                      programItems,//0
                      manPowerItems,//1
                      ammoItems,//2
                      stItems//3
                    ]);

                    _allData.then(function (allData) {//ALL DATA



                        console.log(allData);


                        vm.programs = allData[0];
                        vm.commands = allData[1];
                        vm.ammo = allData[2];
                        vm.stItems = allData[3];

                        if(area === 'Program'){

                            var loadPrograms = $QuadService.programDOM(jQuery("#programLoad2"), vm.programs);//Load Programs


                        }else if( area === 'ManPower'){
                            var loadCommands = $QuadService.programDOM(jQuery("#programLoad2"), vm.commands);//Load Commands


                        }else if( area === 'S&T'){
                            var loadPrograms = $QuadService.programDOM(jQuery("#programLoad2"), vm.stItems);//Load Programs

                            

                        }else if (area === 'AMMO'){
                            var loadPrograms = $QuadService.programDOM(jQuery("#programLoad2"), vm.ammo);//Load AMMO


                        }

                        

                        console.log(vm.programs)
                        console.log(vm.commands)
                        console.log(vm.ammo)
                        console.log(vm.stItems)


                      


                    });



                    


                    

                });//area2

                jQuery("#area3").change(function(e) {//area3


                    //console.log('from area 1');



                    var area = this.value;
                    var bos = jQuery("#bos3 option:selected").text();

                    console.log(area);

                    (area === 'Program' || area === "S&T" || area === "AMMO") ? jQuery( "#Title3" ).html('Program') : jQuery( "#Title3" ).html('Command');

                    jQuery('#programInput').empty();
                    jQuery('#programInput').append('Type Command or Program Name Here');

                    var programUrl = $GetItemsService.programUrl(bos);
                    var manPowerUrl = $GetItemsService.commandUrl(bos);
                    var ammoUrl = $GetItemsService.AMMOProgramUrl(bos);
                    var stUrl = $GetItemsService.STProgramUrl(bos);

                    var programItems = $GetItemsService.getItems(programUrl);
                    var manPowerItems = $GetItemsService.getItems(manPowerUrl);
                    var ammoItems = $GetItemsService.getItems(ammoUrl);
                    var stItems = $GetItemsService.getItems(stUrl);

                    

                    var _allData = $q.all([
                      programItems,//0
                      manPowerItems,//1
                      ammoItems,//2
                      stItems//3
                    ]);

                    _allData.then(function (allData) {//ALL DATA



                        console.log(allData);


                        vm.programs = allData[0];
                        vm.commands = allData[1];
                        vm.ammo = allData[2];
                        vm.stItems = allData[3];

                        if(area === 'Program'){

                            var loadPrograms = $QuadService.programDOM(jQuery("#programLoad3"), vm.programs);//Load Programs


                        }else if( area === 'ManPower'){
                            var loadCommands = $QuadService.programDOM(jQuery("#programLoad3"), vm.commands);//Load Commands


                        }else if( area === 'S&T'){
                            var loadPrograms = $QuadService.programDOM(jQuery("#programLoad3"), vm.stItems);//Load Programs

                            

                        }else if (area === 'AMMO'){
                            var loadPrograms = $QuadService.programDOM(jQuery("#programLoad3"), vm.ammo);//Load AMMO


                        }

                        

                        console.log(vm.programs)
                        console.log(vm.commands)
                        console.log(vm.ammo)
                        console.log(vm.stItems)


                      


                    });





                });//area3

                jQuery("#area4").change(function(e) {//area4

                    try{


                        jQuery('#program4').empty();
                        var area = jQuery("#area4 option:selected").text();
                        var elem = jQuery('#bos4').find('input');

                        for(var i = 0; i < elem.length; i++){

                            var checkbox = elem[i];
                            checkbox.checked = false;
                            //console.log(elem[i])

                        }

                        //Build Source Data
                        var clearStorage = $PresentationService.clearStorage(); 
                        var sourceData = $PresentationService.initPresentationItem();
                        sourceData = $PresentationService.getItem();  



                        console.log(sourceData);
                        console.log('Session Storage Length: ' + sessionStorage.length);




                    }
                    catch(e){
                        console.log(e);
                    }


                });



                jQuery("#bos2").change(function(e) {//bos2

                    try{

                        var area = jQuery("#area2 option:selected").text();
                        var bos = this.value;

                        var programUrl = $GetItemsService.programUrl(bos);
                        var manPowerUrl = $GetItemsService.commandUrl(bos);
                        var ammoUrl = $GetItemsService.AMMOProgramUrl(bos);
                        var stUrl = $GetItemsService.STProgramUrl(bos);
    
                        var programItems = $GetItemsService.getItems(programUrl);
                        var manPowerItems = $GetItemsService.getItems(manPowerUrl);
                        var ammoItems = $GetItemsService.getItems(ammoUrl);
                        var stItems = $GetItemsService.getItems(stUrl);
    
                        
    
                        var _allData = $q.all([
                          programItems,//0
                          manPowerItems,//1
                          ammoItems,//2
                          stItems//3
                        ]);

                        _allData.then(function (allData) {//ALL DATA



                            console.log(allData);
    
    
                            vm.programs = allData[0];
                            vm.commands = allData[1];
                            vm.ammo = allData[2];
                            vm.stItems = allData[3];
    
                            if(area === 'Program'){

                                console.log('Program')
    
                                var loadPrograms = $QuadService.programDOM(jQuery("#programLoad2"), vm.programs);//Load Programs
    
    
                            }else if( area === 'ManPower'){
                                var loadCommands = $QuadService.programDOM(jQuery("#programLoad2"), vm.commands);//Load Commands
    
    
                            }else if( area === 'S&T'){
                                var loadPrograms = $QuadService.programDOM(jQuery("#programLoad2"), vm.stItems);//Load Programs
    
                                
    
                            }else if (area === 'AMMO'){
                                var loadPrograms = $QuadService.programDOM(jQuery("#programLoad2"), vm.ammo);//Load AMMO
    
    
                            }
    
                            
    
                            console.log(vm.programs)
                            console.log(vm.commands)
                            console.log(vm.ammo)
                            console.log(vm.stItems)
    
    
                          
    
    
                        });
    
    

                    }
                    catch(e){
                        console.log(e);
                    }


                });//bos2

                jQuery("#bos3").change(function(e) {//bos3

                    try{
                        var area = jQuery("#area3 option:selected").text();
                        var bos = this.value;

                        var programUrl = $GetItemsService.programUrl(bos);
                        var manPowerUrl = $GetItemsService.commandUrl(bos);
                        var ammoUrl = $GetItemsService.AMMOProgramUrl(bos);
                        var stUrl = $GetItemsService.STProgramUrl(bos);
    
                        var programItems = $GetItemsService.getItems(programUrl);
                        var manPowerItems = $GetItemsService.getItems(manPowerUrl);
                        var ammoItems = $GetItemsService.getItems(ammoUrl);
                        var stItems = $GetItemsService.getItems(stUrl);
    
                        
    
                        var _allData = $q.all([
                          programItems,//0
                          manPowerItems,//1
                          ammoItems,//2
                          stItems//3
                        ]);

                        _allData.then(function (allData) {//ALL DATA



                            console.log(allData);
    
    
                            vm.programs = allData[0];
                            vm.commands = allData[1];
                            vm.ammo = allData[2];
                            vm.stItems = allData[3];
    
                            if(area === 'Program'){

                                console.log('Program')
    
                                var loadPrograms = $QuadService.programDOM(jQuery("#programLoad3"), vm.programs);//Load Programs
    
    
                            }else if( area === 'ManPower'){
                                var loadCommands = $QuadService.programDOM(jQuery("#programLoad3"), vm.commands);//Load Commands
    
    
                            }else if( area === 'S&T'){
                                var loadPrograms = $QuadService.programDOM(jQuery("#programLoad3"), vm.stItems);//Load Programs
    
                                
    
                            }else if (area === 'AMMO'){
                                var loadPrograms = $QuadService.programDOM(jQuery("#programLoad3"), vm.ammo);//Load AMMO
    
    
                            }
    
                            
    
                            console.log(vm.programs)
                            console.log(vm.commands)
                            console.log(vm.ammo)
                            console.log(vm.stItems)
    
    
                          
    
    
                        });




                    }
                    catch(e){
                        console.log(e);
                    }


                });//bos3

                jQuery("#bos4").on( "click", "input", function(e) {//bos4

                    try{

                        var area = jQuery("#area4 option:selected").text();
                        var bos =  e.currentTarget.id;
                        var checked = jQuery(this).is(":checked");
                        //console.log(area + ' : ' + bos + ' : ' + checked);





                        var programUrl = "";
                        var manPowerUrl = "";
                        var ammoUrl = "";
                        var stUrl = "";
    
                        var programItems = "";
                        var manPowerItems = "";
                        var ammoItems = "";
                        var stItems = "";
    
                    
                        var DOMData = "";


                        if(area === "ManPower"){
                            console.log('ManPower')
                            var manPowerUrl = $GetItemsService.commandUrl(bos);
                            var manPowerItems = $GetItemsService.getItems(manPowerUrl);
                            DOMData = $q.all([manPowerItems]);
      




                        }else if(area === "Program"){
                            console.log('Program');

                            var programUrl = $GetItemsService.programUrl(bos);
                            var programItems = $GetItemsService.getItems(programUrl);
                            DOMData = $q.all([programItems]);




                        }else if(area === "S&T"){
                            console.log('S&T')

                            var stUrl = $GetItemsService.STProgramUrl(bos);
                            var stItems = $GetItemsService.getItems(stUrl);
                            DOMData = $q.all([stItems]);




                        }else if(area === "AMMO"){
                            console.log('AMMO')

                            var ammoUrl = $GetItemsService.AMMOProgramUrl(bos);
                            var ammoItems = $GetItemsService.getItems(ammoUrl);
                            DOMData = $q.all([ammoItems]);




                        }

                        DOMData.then(function (_DOMData) {

                            vm.Programs = _DOMData[0];
                            var sourceData = $PresentationService.getItem();  
                            var changeBOS = $PresentationService.changePresentationItem(area, bos, sourceData, vm.Programs, checked);  

                            console.log(sourceData);


                        });//DOMData



                    }
                    catch(e){
                        console.log(e);
                    }

                });

                jQuery("#program4").on( "click", "input", function(e) {

                    try{

                        var area= e.currentTarget.value;
                        var bos = e.currentTarget.className;
                        var program = e.currentTarget.id;
                        var checked = jQuery(this).is(":checked");


                        /* Program */

                        //Requirements/Capability to the Force
                            var programRequirementsUrl = "";  
                        //Programmatic Overview
                            var programOverviewUrl =  "";   
                        //Capability Description 
                            var programCapabilityUrl =  "";  
                        //POM Allocation  Urls
                            var POMAllocationUrl =  "";                   
                            var rdteUrl =  "";  
                            var procUrl =  "";  
                            var otherUrl =  ""; 
                            var totalUrl =  ""; 
                            var quantityUrl =  "";  
                            var MYCFloorUrl =  "";  
                            var deepDiveUrl =  ""; 
                        //Requirements/Capability to the Force Items
                            var programRequirementsItem =  ""; 
                        //Programmatic Overview Items
                            var programOverviewItem =  ""; 
                        //Capability Description Items
                            var programCapabilityItem =  ""; 
                        //POM Allocation Items
                            var POMAllocationItem =  ""; 
                            var rdteItem =  ""; 
                            var procItem =  ""; 
                            var otherItem =  ""; 
                            var totalItem =  ""; 
                            var quantityItem =  ""; 
                            var MYCFloorUrlItem = ""; 
                            var deepDiveItem =  ""; 

                            var AllData = "";

                            if(area === "ManPower"){
                                console.log('ManPower')
          
    
    
    
    
                            }else if(area === "Program"){
                                console.log(program)

    
                                //Requirements/Capability to the Force
                                var programRequirementsUrl = $GetItemsService.ProgramRequirementsUrl(program);                  
                                //Programmatic Overview
                                    var programOverviewUrl = $GetItemsService.ProgramOverviewUrl(program);                 
                                //Capability Description
                                    var programCapabilityUrl = $GetItemsService.ProgramCapabilityUrl(program);                
                                //POM Allocation  Urls
                                    var POMAllocationUrl = $GetItemsService.POMAllocationUrl(program);                   
                                    var rdteUrl = $GetItemsService.RDTEUrl(program); 
                                    var procUrl = $GetItemsService.PROCUrl(program); 
                                    var otherUrl = $GetItemsService.OtherUrl(program);
                                    var totalUrl = $GetItemsService.TotalUrl(program); 
                                    var quantityUrl = $GetItemsService.QuantityUrl(program); 
                                    var MYCFloorUrl = $GetItemsService.MYCFloorUrl(program); 
                                    var deepDiveUrl = $GetItemsService.DeepDiveUrl(program); 

                                
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
                                    var deepDiveItem = $GetItemsService.getItems(deepDiveUrl);
                                    var MYCFloorUrlItem = $GetItemsService.getItems(MYCFloorUrl); 

                                    AllData = $q.all([programRequirementsItem,//0
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
    
    
    
    
                            }else if(area === "S&T"){
                                console.log('S&T')
    
    
    
    
    
                            }else if(area === "AMMO"){
                                console.log('AMMO')
    
    
    
    
    
                            }

                            AllData.then(function (slides) {

                                
                                console.log(slides);

                                var sourceData = $PresentationService.getItem();  
                                var changeProgram = $PresentationService.changePresentationProgram(area, bos, program, sourceData, checked);   
                                var addSlides = $PresentationService.addSlideData(area, bos, program, slides, sourceData, checked);  



                                console.log(sourceData);
                                console.log('Session Storage Length: ' + sessionStorage.length);
        

                                
    
    
                            });//AllData
    
    

                        
                        





                    }
                    catch(e){
                        console.log(e);
                    }


                });



                jQuery("#programInput").focusin(function(e) {//area3


                    var val = e.target.innerText;
                    console.log(val)

                    if(val === "Type Command or Program Name Here"){

                        e.target.innerText = "";

                    }


                });//programInput




                jQuery("#submit1").click(function(e) {//Submit1

                    e.stopPropagation();

                    var vm = this; //view model

                    var area = jQuery("#area1 option:selected").text();
                    var bos = jQuery("#bos1 option:selected").text();



                    
                    if(area === "ManPower"){
                        var programName = jQuery("#programInput").text();
                        var programUrl = $GetItemsService.commandUrl(bos, programName);  
                        var programListsUrl = $GetItemsService.commandListsUrl(); 
                        var check = $GetItemsService.getItem(programUrl);
                        var validateStr = $QuadService.validateInput(programName);   
                        var programListsItems = $GetItemsService.getItems(programListsUrl);               
                        var check = $GetItemsService.getItem(programUrl); 
                        var programCheckComplete = $q.all([check,programListsItems]);

                        console.log(area + ' : ' + bos + ' : ' + programName);

                        

                        programCheckComplete.then(function (data) {

                            //console.log(data);
    
                            vm.result = data[0][0].results.length;
                            vm.POMLists = data[1];

                            var newProgram = $QuadService.addManPower(bos, validateStr, vm.POMLists);

    
                            //console.log(vm.result);
                            //console.log(vm.POMLists);
                            //console.log(validateStr);
    
                            /*
    
                            if(vm.result > 0){//program exists
                                alert(programName + '\nEXIST');
            
                            }else if(validateStr.length === 0){//valid string
                                alert('Enter a Valid Program');
            
                            }else if(vm.result=== 0 && validateStr.length > 0){//good to go
                                //console.log('create program');
                                //console.log(validateStr);
            
            
            
                            }

                            */
    
                            
    
    
                        });//programCheckComplete

    

                    }else if(area === "Program"){

                        var programName = jQuery("#programInput").text();
                        var programUrl = $GetItemsService.programUrl(bos, programName);  
                        var programListsUrl = $GetItemsService.programListsUrl(); 
                        var check = $GetItemsService.getItem(programUrl);
                        var validateStr = $QuadService.validateInput(programName);   
                        var programListsItems = $GetItemsService.getItems(programListsUrl);               
                        var check = $GetItemsService.getItem(programUrl); 
                        var programCheckComplete = $q.all([check,programListsItems]);

                        console.log(area + ' : ' + bos + ' : ' + programName);

                        

                        programCheckComplete.then(function (data) {

                            //console.log(data);
    
                            vm.result = data[0][0].results.length;
                            vm.POMLists = data[1];
    
                            console.log(vm.result);
                            //console.log(vm.POMLists);
                            //console.log(validateStr);

                            var newProgram = $QuadService.addProgram(bos, validateStr, vm.POMLists);

    
                            /*
    
                            if(vm.result > 0){//program exists
                                alert(programName + '\nEXIST');
            
                            }else if(validateStr.length === 0){//valid string
                                alert('Enter a Valid Program');
            
                            }else if(vm.result=== 0 && validateStr.length > 0){//good to go
                                //console.log('create program');
                                //console.log(validateStr);
            
            
            
                            }

                            */
    
                            
    
    
                        });//programCheckComplete

    


                    }else if(area === "S&T"){

                        var programName = jQuery("#programInput").text();
                        var programUrl = $GetItemsService.STProgramUrl(bos, programName);  
                        var programListsUrl = $GetItemsService.stListsUrl(); 
                        var check = $GetItemsService.getItem(programUrl);
                        var validateStr = $QuadService.validateInput(programName);   
                        var programListsItems = $GetItemsService.getItems(programListsUrl);               
                        var check = $GetItemsService.getItem(programUrl); 
                        var programCheckComplete = $q.all([check,programListsItems]);

                        console.log(area + ' : ' + bos + ' : ' + programName);

                        

                        programCheckComplete.then(function (data) {

                            console.log(data);
    
                            vm.result = data[0][0].results.length;
                            vm.POMLists = data[1];
    
                            console.log(vm.result);

                            var newProgram = $QuadService.addST(bos, validateStr, vm.POMLists);

                            //console.log(vm.POMLists);
                            //console.log(validateStr);
    
                            /*
    
                            if(vm.result > 0){//program exists
                                alert(programName + '\nEXIST');
            
                            }else if(validateStr.length === 0){//valid string
                                alert('Enter a Valid Program');
            
                            }else if(vm.result=== 0 && validateStr.length > 0){//good to go
                                //console.log('create program');
                                //console.log(validateStr);
            
            
            
                            }

                            */
    
                            
    
    
                        });//programCheckComplete




                    }else if(area === 'AMMO'){
                        console.log(area + ' : ' + bos);

                        var programName = jQuery("#programInput").text();
                        var programUrl = $GetItemsService.AMMOProgramUrl(bos, programName);  
                        var programListsUrl = $GetItemsService.ammoListsUrl(); 
                        var check = $GetItemsService.getItem(programUrl);
                        var validateStr = $QuadService.validateInput(programName);   
                        var programListsItems = $GetItemsService.getItems(programListsUrl);               
                        var check = $GetItemsService.getItem(programUrl); 
                        var programCheckComplete = $q.all([check,programListsItems]);

                        console.log(area + ' : ' + bos + ' : ' + programName);

                        

                        programCheckComplete.then(function (data) {

                            console.log(data);
    
                            vm.result = data[0][0].results.length;
                            vm.POMLists = data[1];
    
                            console.log(vm.result);
                            var newProgram = $QuadService.addAMMO(bos, validateStr, vm.POMLists);

                            //console.log(vm.POMLists);
                            //console.log(validateStr);
    
                            /*
    
                            if(vm.result > 0){//program exists
                                alert(programName + '\nEXIST');
            
                            }else if(validateStr.length === 0){//valid string
                                alert('Enter a Valid Program');
            
                            }else if(vm.result=== 0 && validateStr.length > 0){//good to go
                                //console.log('create program');
                                //console.log(validateStr);
            
            
            
                            }

                            */
    
                            
    
    
                        });//programCheckComplete


                        


                    }


                    



                });

                jQuery("#submit2").click(function(e) {//Submit2

                    e.stopPropagation();

                    var vm = this; //view model
                    var area = jQuery("#area2 option:selected").text();
                    var bos = jQuery("#bos2 option:selected").text();


                    if(area === "ManPower"){
                        console.log(area + ' : ' + bos);

    

                    }else if(area === "Program"){
                        console.log(area + ' : ' + bos);


                    }else if(area === "S&T"){
                        console.log(area + ' : ' + bos);


                    }else if(area === 'AMMO'){
                        console.log(area + ' : ' + bos);


                    }


                });

                jQuery("#submit3").click(function(e) {//Submit3

                    e.stopPropagation();

                    var vm = this; //view model
                    var area = jQuery("#area2 option:selected").text();
                    var bos = jQuery("#bos2 option:selected").text();


                    if(area === "ManPower"){
                        console.log(area + ' : ' + bos);

    

                    }else if(area === "Program"){
                        console.log(area + ' : ' + bos);


                    }else if(area === "S&T"){
                        console.log(area + ' : ' + bos);


                    }else if(area === 'AMMO'){
                        console.log(area + ' : ' + bos);


                    }

                });

                jQuery("#submit4").click(function(e) {

                    e.stopPropagation();

                    var sourceData = $PresentationService.getItem();  

                    var buildSlides = $PresentationService.buildSlides(sourceData);  



                    console.log(sourceData);


                });




           

        });// $( document ).ready();





    }
    catch(e){
        console.log(e);
    }
    
    

}]);//UserSelectCtrl
