//SOURCE:https://social.technet.microsoft.com/Forums/ie/en-US/670313cb-233b-43f6-b603-c536a2ad5dae/sharepoint-2013-client-people-picker-control-in-script-editor?forum=sharepointgeneral


RegisterScriptFiles('clienttemplates.js');
RegisterScriptFiles('clientforms.js');
RegisterScriptFiles('clientpeoplepicker.js');
RegisterScriptFiles('autofill.js');


function RegisterScriptFiles(filename) {
    try{

        var scriptEle = document.createElement('script');
        scriptEle.setAttribute("type", "text/javascript")
        scriptEle.setAttribute("src", "/_layouts/15/" + filename);
        document.getElementsByTagName("head")[0].appendChild(scriptEle)
    

    }
    catch(e){
        console.log(e);
    }
}

// Render and initialize the client-side People Picker.

function initializePeoplePicker(eleId) {

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
        this.SPClientPeoplePicker_InitStandaloneControlWrapper(eleId, null, schema);


    }
    catch(e){
        console.log(e);
    }


}


function GetPeoplePickerValues(eleId) {

    try{

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
    

                var key = user.Key;
                var principal = user.EntityData.PrincipalType;

                console.log(user)
                console.log(key)
                console.log(principal)

                breakSecurityInheritanceAddUser('APO1', key, 1, principal, 3);


    
                //userInfo += user['DisplayText'] + ";#";
            }
            //return userInfo;
        }
    
        else
            return '';
    

    }
    catch(e){
        console.log(e);
    }


}


jQuery.fn.spPeoplePicker = function () {

    try{
        var eleId = jQuery(this).attr('id');
        ExecuteOrDelayUntilScriptLoaded(function () { initializePeoplePicker(eleId); }, 'sp.core.js');
    

    }
    catch(e){
        console.log(e);
    }
};


// Query the picker for user information.

jQuery.fn.getUserInfo = function () {

    try{
        var eleId = jQuery(this).attr('id');
        var spUsersInfo = GetPeoplePickerValues(eleId);
    

    }
    catch(e){
        console.log(e)
    }
    
    //return spUsersInfo.slice(0, -2);
}


jQuery(document).ready(function () {
        jQuery("#peoplePickerDiv").spPeoplePicker();
        jQuery("#anotherPeoplePickerDiv").spPeoplePicker();

    jQuery("#pp1").click(function(){
        jQuery("#peoplePickerDiv").getUserInfo()
        //console.log(jQuery("#peoplePickerDiv").getUserInfo());
        //$("#pp11").text(jQuery("#peoplePickerDiv").getUserInfo());
        return false;
    });


});




//Set Item Level Permissions
//var siteUrl = '/sites/hqdag8_quad';


function breakSecurityInheritanceAddUser(list, key, itemID, principalType, roleDef) {


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

function onQuerySucceeded(sender, args) {

    console.log(oUser.get_loginName())

    alert('Role inheritance broken for item ' + 
        this.oListItem.get_item('Title') + 
        ' and new role assignment for ' + 
        this.oUser.get_loginName());
}

function onQueryFailed(sender, args) {

    alert('Request failed. ' + args.get_message() + '\n' + args.get_stackTrace());
}