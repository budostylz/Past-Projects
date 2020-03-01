//Ref: https://social.technet.microsoft.com/Forums/ie/en-US/670313cb-233b-43f6-b603-c536a2ad5dae/sharepoint-2013-client-people-picker-control-in-script-editor?forum=sharepointgeneral



angular.module('app').controller('PageLoadCtrl', ['$q', 'GetItemsService','QuadService', 'SourceDataDOMService', 'PermissionsService', function ($q, $GetItemsService, $QuadService, $SourceDataDOMService, $PermissionsService) {

        /*var vm = this; //view model
        var bosUrl = $GetItemsService.bosUrl();
        var getBOSItems = $GetItemsService.getItems(bosUrl);
        var loadBOSDOM = $q.all([getBOSItems]);


        loadBOSDOM.then(function (BOSdata) {

            console.log(BOSdata)
            vm.BOSData = BOSdata[0];

            var loadBOS = $QuadService.BOSDOM(vm.BOSData);//Load BOS



        });*/


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


        function GetPeoplePickerValues(eleId, remove) {

            console.log(eleId)

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


                    if(eleId === 'peoplePickerDiv'){ 

                        var registerUser = $PermissionsService.registerUser(user);//register user

                    }else if(eleId === 'anotherPeoplePickerDiv' && !remove){

                        var sourceData = $PermissionsService.getItem();    
                        var registerGroup = $PermissionsService.addUserToSharePointGroup(user, sourceData);//add user to group

                    }else if(eleId === 'anotherPeoplePickerDiv' && remove){

                        console.log('remove from group')
                        var sourceData = $PermissionsService.getItem();    
                        var registerGroup = $PermissionsService.removeUserFromSharePointGroup(user, sourceData);//remove user to group


                    }


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

        jQuery.fn.getUserInfo = function (remove) {
            var eleId = jQuery(this).attr('id');
            var spUsersInfo = GetPeoplePickerValues(eleId, remove);
            return spUsersInfo.slice(0, -2);
        }




            
        

        jQuery(document).ready(function() {
            jQuery("#peoplePickerDiv").spPeoplePicker();
            jQuery("#anotherPeoplePickerDiv").spPeoplePicker();
        
            jQuery("#pp1").click(function(){
                jQuery("#pp11").text(jQuery("#peoplePickerDiv").getUserInfo(false));
                return false;     
            });
            
            jQuery("#pp2").click(function(){       
                jQuery("#pp21").text(jQuery("#anotherPeoplePickerDiv").getUserInfo(false));
                return false;    
            });

            jQuery("#pp3").click(function(){    
                
                //console.log(true) 
                
                jQuery("#pp21").text(jQuery("#anotherPeoplePickerDiv").getUserInfo(true));
                return false;    
            });


        });//ready




}]);//PageLoadCtrl



angular.module('app').controller('UserSelectCtrl', ['$q', 'SourceDataDOMService','PageLoadService', 'ProgramService', 'GetItemsService', 'PermissionsService',
function ($q, $SourceDataDOMService, $PageLoadService, $ProgramService,$GetItemsService, $PermissionsService) {




    








}]);









