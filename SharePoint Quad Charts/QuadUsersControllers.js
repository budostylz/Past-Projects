
/*** PageLoadCtrl ***/
angular.module('app').controller('PageLoadCtrl', ['$q', 'GetItemsService','QuadService', 'SourceDataDOMService', 'PermissionsService', function ($q, $GetItemsService, $QuadService, $SourceDataDOMService, $PermissionsService) {

    


    
    try{


                   console.log('page load')



                   
        var clearStorage = $PermissionsService.clearStorage();//clear storage


        
        //Set People Picker Scripts and Properties
        RegisterScriptFiles('clienttemplates.js');
        RegisterScriptFiles('clientforms.js');
        RegisterScriptFiles('clientpeoplepicker.js');
        RegisterScriptFiles('autofill.js');


        function RegisterScriptFiles(filename) {

            var scriptEle = document.createElement('script');
            scriptEle.setAttribute("type", "text/javascript")
            scriptEle.setAttribute("src", "/_layouts/15/" + filename);
            document.getElementsByTagName("head")[0].appendChild(scriptEle)

        }

        // Render and initialize the client-side People Picker.
        function initializePeoplePicker(eleId) {

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
            this.SPClientPeoplePicker_InitStandaloneControlWrapper(eleId, null, schema);

        }


        function GetPeoplePickerValues(eleId, remove, itemID, roleDef, programLists) {



            console.log(eleId)
            console.log(remove)
            console.log(itemID)
            console.log(roleDef)
            console.log(programLists)

            var toSpanKey = eleId + "_TopSpan";
            var peoplePicker = null;

            // Get the people picker object from the page.
            //var peoplePicker = this.SPClientPeoplePicker.SPClientPeoplePickerDict.peoplePickerDiv_TopSpan;

            var ClientPickerDict = this.SPClientPeoplePicker.SPClientPeoplePickerDict;

            // Get the people picker object from the page.

            for (var propertyName in ClientPickerDict) {
                if (propertyName == toSpanKey) {
                    peoplePicker = ClientPickerDict[propertyName];
                    break;

                }

            }

            if (peoplePicker != null) {

                // Get information about all users.
                var users = peoplePicker.GetAllUserInfo();
                var userInfo = '';
                for (var i = 0; i < users.length; i++) {
                    var user = users[i];

                    console.log(user);


                    //var registerUser = $PermissionsService.registerUserToProgram(user);//register user or group
                    //var registerGroup = $PermissionsService.breakSecurityInheritanceAddUser(user, listArr, program);//add user or group to program



                    userInfo += user['DisplayText'] + ";#";
                }
                return userInfo;
            }

            else
                return '';

        }


        jQuery.fn.spPeoplePicker = function () {
            var eleId = jQuery(this).attr('id');
            ExecuteOrDelayUntilScriptLoaded(function () { initializePeoplePicker(eleId); }, 'sp.core.js');

        };


        // Query the picker for user information.

        jQuery.fn.getUserInfo = function (remove, itemID, roleDef, programLists) {
            var eleId = jQuery(this).attr('id');
            var spUsersInfo = GetPeoplePickerValues(eleId, remove, itemID, roleDef, programLists);
            return spUsersInfo.slice(0, -2);
        }


        jQuery(document).ready(function() {
            jQuery("#peoplePickerDiv").spPeoplePicker();
            jQuery("#anotherPeoplePickerDiv").spPeoplePicker();

            
        
            jQuery("#pp1").click(function(){


                //console.log(true);
                var bos = jQuery("#bos1 option:selected").text();
                var program = jQuery("#programLoad option:selected").text();
                var programID = parseInt( jQuery('#programLoad').children(":selected").attr("id"), 10);  
                var roleDef = parseInt( jQuery('#roles').children(":selected").attr("value"), 10);



                var AAOUrl = $GetItemsService.AAOProgramUrl(programID, bos);
                var AAOItems = $GetItemsService.getItems(AAOUrl);

                var programLists = $GetItemsService.programListsUrl(bos);
                var programListItems = $GetItemsService.getItems(programLists);


                


                var _allData = $q.all([
                    AAOItems,
                    programListItems
                  ]);

                  

                  _allData.then(function (allData) {//ALL DATA

                    vm.itemID = allData[0][0].ID ||  allData[0][0].Id;
                    vm.programLists = [allData[1][0].AAO]

                    //console.log(allData);
                    //console.log(vm.programLists)
                    //console.log(vm.itemID);
                   // console.log(roleDef);

                    jQuery("#pp11").text(jQuery("#peoplePickerDiv").getUserInfo(false, vm.itemID, roleDef, vm.programLists));


                   



                  });








                return false;     
            });

            /*
            
            jQuery("#pp2").click(function(){       
                jQuery("#pp21").text(jQuery("#anotherPeoplePickerDiv").getUserInfo(false));
                return false;    
            });

            jQuery("#pp3").click(function(){    
                
                //console.log(true) 
                
                jQuery("#pp21").text(jQuery("#anotherPeoplePickerDiv").getUserInfo(true));
                return false;    
            });

            */


        });//ready







                  


                   var vm = this; //view model
                   var bosUrl = $GetItemsService.bosUrl();
                   var getBOSItems = $GetItemsService.getItems(bosUrl);


                   //console.log(bosUrl);
      
                   
                   var loadBOSDOM = $q.all([getBOSItems]);

                
                   loadBOSDOM.then(function (BOSdata) {
                      // console.log(BOSdata);

                      vm.BOSData = BOSdata[0];
                      vm.areaData = BOSdata[1];
                      var bos = vm.BOSData[0].Title;

                      

                      var programUrl = $GetItemsService.programBOSUrl(bos);

                      //console.log(programUrl)
                      var programItems = $GetItemsService.getItems(programUrl);

                      var _allData = $q.all([
                        programItems
                      ]);

                      

                      _allData.then(function (allData) {//ALL DATA



                        //console.log(allData);
                        vm.programs = allData[0];
                       // console.log(vm.programs)
                       // console.log(vm.commands)
                       // console.log(vm.ammo)
                       // console.log(vm.stItems)


                       

                        var loadBOS = $QuadService.BOSDOM(vm.BOSData);//Load BOS
                        var loadPrograms = $QuadService.programDOM(jQuery("#programLoad"), vm.programs);//Load Programs


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


                /* New Quad */

                jQuery("#bos1").change(function(e) {//bos1

                    try{


                        console.log(true);
                        var bos = this.value;
                        var programUrl = $GetItemsService.programBOSUrl(bos);
                        var programItems = $GetItemsService.getItems(programUrl);

                        
    
                        
    
                        var _allData = $q.all([
                          programItems
                        ]);

                        _allData.then(function (allData) {//ALL DATA


                            //console.log(allData);
    

                            vm.programs = allData[0];
                            var loadPrograms = $QuadService.programDOM(jQuery("#programLoad"), vm.programs);//Load Programs
    

    
                        });
    
    

                    }
                    catch(e){
                        console.log(e);
                    }


                });//bos1




           

        });//ready





    }
    catch(e){
        console.log(e);
    }
    
    

}]);//UserSelectCtrl
