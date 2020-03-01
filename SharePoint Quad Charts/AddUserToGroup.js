

angular.module('app').controller('PageLoadCtrl', ['$q', 'GetItemsService','QuadService', function ($q, $GetItemsService, $QuadService) {

    /*var vm = this; //view model
    var bosUrl = $GetItemsService.bosUrl();
    var getBOSItems = $GetItemsService.getItems(bosUrl);
    var loadBOSDOM = $q.all([getBOSItems]);


    loadBOSDOM.then(function (BOSdata) {

        console.log(BOSdata)
        vm.BOSData = BOSdata[0];

        var loadBOS = $QuadService.BOSDOM(vm.BOSData);//Load BOS



    });*/




}]);//PageLoadCtrl




// Run your custom code when the DOM is ready.
jQuery(document).ready(function () {

    // Specify the unique ID of the DOM element where the
    // picker will render.
    initializePeoplePicker('peoplePickerDiv');
    initializePeoplePicker('peoplePickerDiv2');

    buildProfileObj();
    
    console.log( getProfileObj() )

    console.log('Session Storage Length: ' + sessionStorage.length);






});


function buildProfileObj(){

    try{


        

        if (typeof(Storage) !== "undefined") {

            sessionStorage.clear();

            var sourceData = {};
            sourceData['User'] = {};
            sourceData['Group'] = {};

            


            var obj = JSON.stringify(sourceData);
            sessionStorage.setItem('SourceData', obj);
            




        } else {
            console.log('storage not supported');
        }


    }
    catch(e){
        console.log(e);
    }

}

function getProfileObj(){
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

function updateProfileObj(sourceData){
    try{

        var obj = JSON.stringify(sourceData);
        sessionStorage.setItem('SourceData', obj);



    }
    catch(e){
        console.log(e);
    }
}

// Render and initialize the client-side People Picker.
function initializePeoplePicker(peoplePickerElementId) {

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

// Query the picker for user information.
function getUserInfo() {

    try{

        // Get the people picker object from the page.
        var peoplePicker = this.SPClientPeoplePicker.SPClientPeoplePickerDict.peoplePickerDiv_TopSpan;

        // Get information about all users.
        var users = peoplePicker.GetAllUserInfo();
        var userInfo = '';

        //console.log(users)
        for (var i = 0; i < users.length; i++) {
            var user = users[i];
            var userType = user.EntityData.PrincipalType;

            if(userType === 'User'){
                console.log(userType)
                console.log(user)
                jQuery('#userKeys').html(user.Key);



            }else if(userType === 'SharePointGroup'){
                alert('PLEASE ENTER A VALID USER');
                jQuery('#userKeys').html('');
                jQuery('#userId').html('');




            }
            for (var userProperty in user) { 
                userInfo += userProperty + ':  ' + user[userProperty] + '<br>';
            }
        }
        $('#resolvedUsers').html(userInfo);

        // Get user keys.
        var keys = peoplePicker.GetAllUserKeys();
        //$('#userKeys').html(keys);

        // Get the first user's ID by using the login name.
        getUserId(users[0].Key);


    }
    catch(e){
        console.log(e);
    }

}


// Query the picker for user information.
function getUserInfo2() {

    try{

        // Get the people picker object from the page.
        var peoplePicker = this.SPClientPeoplePicker.SPClientPeoplePickerDict.peoplePickerDiv2_TopSpan;

        // Get information about all users.
        var users = peoplePicker.GetAllUserInfo();
        var userInfo = '';

        //console.log(users)
        for (var i = 0; i < users.length; i++) {
            var user = users[i];
            var userType = user.EntityData.PrincipalType;

            if(userType === 'User'){
                //console.log(userType)
                //console.log(user)
                alert('PLEASE CHOOSE A VALID GROUP');
                jQuery('#userKeys2').html('');
                jQuery('#userId2').html('');



            }else if(userType === 'SharePointGroup'){
                //console.log(userType)
                //console.log(user)
                jQuery('#userId2').html(user.EntityData.SPGroupID);
                var groupID = parseInt( jQuery('#userId2').text(), 10);
                var key = jQuery('#userKeys').text();



                console.log(groupID + ' : ' + key)

                addUserToSharePointGroup(groupID, key);



            }


            for (var userProperty in user) { 
                userInfo += userProperty + ':  ' + user[userProperty] + '<br>';
            }
        }
        $('#resolvedUsers2').html(userInfo);

        // Get user keys.
        var keys = peoplePicker.GetAllUserKeys();
        //$('#userKeys2').html(keys);

        // Get the first user's ID by using the login name.
        //getUserId2(users[0].Key);


    }
    catch(e){
        console.log(e);
    }

}


// Get the user ID.
function getUserId(loginName) {

    try{

        var context = new SP.ClientContext.get_current();
        this.user = context.get_web().ensureUser(loginName);
        context.load(this.user);
        context.executeQueryAsync(
            Function.createDelegate(null, ensureUserSuccess), 
            Function.createDelegate(null, onFail)
        );
    

    }   
    catch(e){
        console.log(e);
    }             
}

function getUserId2(loginName) {

    try{

        var context = new SP.ClientContext.get_current();
        this.user = context.get_web().ensureUser(loginName);
        context.load(this.user);
        context.executeQueryAsync(
            Function.createDelegate(null, ensureUserSuccess2), 
            Function.createDelegate(null, onFail2)
        );
    

    }   
    catch(e){
        console.log(e);
    }             
}


function ensureUserSuccess() {

    try{

        $('#userId').html(this.user.get_id());
        var userID = this.user.get_id();
        //console.log(userID)
        //console.log( jQuery('#userKeys') );
    
        //add user to selected groups
    

    }
    catch(e){
        console.log(e);
    }


}

function ensureUserSuccess2() {

    try{

        $('#userId2').html(this.user.get_id());
        var userID = this.user.get_id();
        //console.log(userID)
        //console.log( jQuery('#userKeys') );
    
        //add user to selected groups
    

    }
    catch(e){
        console.log(e);
    }


}


function onFail(sender, args) {
    console.log('Query failed. Error: ' + args.get_message());
}

function onFail2(sender, args) {
    console.log('Query failed. Error: ' + args.get_message());
}


/*ADD USER TO SHAREPOINT GROUP */

function addUserToSharePointGroup(groupID, key) {


    console.log(groupID + ' : ' + key);

    

    var siteUrl = '/asaalt/hqdag8/quad';

    var clientContext = new SP.ClientContext(siteUrl);
    var collGroup = clientContext.get_web().get_siteGroups();
    var oGroup = collGroup.getById(groupID);
    var userCreationInfo = new SP.UserCreationInformation();
    //userCreationInfo.set_email('david.m.lewandowsky.ctr@mail.mil');
    userCreationInfo.set_loginName(key);
    //userCreationInfo.set_title('MAINTENANCE TEST PILOT');
    this.oUser = oGroup.get_users().add(userCreationInfo);
    
    clientContext.load(oUser);
    clientContext.executeQueryAsync(Function.createDelegate(this, this.onQuerySucceeded), Function.createDelegate(this, this.onQueryFailed));
    

}

function onQuerySucceeded() {
        
    alert(this.oUser.get_title() + " added.");
}

function onQueryFailed(sender, args) {

    alert('Request failed. ' + args.get_message() + '\n' + args.get_stackTrace());
}


