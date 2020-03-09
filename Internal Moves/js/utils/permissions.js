angular.module('app').controller('permissionsCtrl', ['$q','InternalMovesAPI', function ($q, $InternalMovesAPI) {



    var groups = (function () {

       function GetItems (itemArr) {
           try{

               var itemData = $q.all(itemArr);
               itemData.then(function (_itemData) {
                   console.log(_itemData.length);
                   if(_itemData.length > 0){
                       var userGroups = _itemData[0][0].Groups.results;

                       hideTabs(userGroups);

                   }
               });
           }
           catch(e){
               console.log('getItems', e)
           }
       } // getItems ( itemArr, tag )


       function hideTabs(userGroups){
           try{


                var adminOfficers = _.filter(userGroups, function(o) { return o.Title   ===   'Admin Officers';});
                var G1Admin = _.filter(userGroups, function(o) { return o.Title === 'G1 Admins';});
                var G1GroupManager = _.filter(userGroups, function(o) { return o.Title === 'G1 Group Manager';});
                var G2Admin = _.filter(userGroups, function(o) { return o.Title === 'G2 Admins';});
                var G4Admin = _.filter(userGroups, function(o) { return o.Title === 'G4 Admins';});
                var G6Admin = _.filter(userGroups, function(o) { return o.Title === 'G6 Admins';});




                if( (G1Admin.length > 0 || G1GroupManager.length > 0) && adminOfficers.length === 0){
                    //console.log('show G1 tab');
                    $('#G2Tab').hide();$('#tabs-4').hide();
                    $('#G6Tab').hide();$('#tabs-5').hide();
                }
                
                if( G2Admin.length > 0 && adminOfficers.length === 0 ){
                    //console.log('show G2 tab');
                    $('#G1Tab').hide();$('#tabs-2').hide();
                    $('#G6Tab').hide();$('#tabs-5').hide();

                    $('#tabs-3').show();
                }
                
                if( G6Admin.length > 0 && adminOfficers.length === 0 ){
                    //console.log('show G6 tab');
                    $('#G1Tab').hide();$('#tabs-2').hide();
                    $('#G2Tab').hide();$('#tabs-4').hide();

                    $('#tabs-5').show();

                }

                if(G1Admin.length === 0 && G1GroupManager.length === 0 && G2Admin.length === 0 && G6Admin.length === 0 && adminOfficers.length === 0){
                    $('#changeActions').hide();
                }


                /*console.log('hide tabs', userGroups);
                console.log('adminOfficers', adminOfficers);
                console.log('G1Admin', G1Admin);
                console.log('G1GroupManager', G1GroupManager);
                console.log('G2Admin', G2Admin);
                console.log('G4Admin', G4Admin);
                console.log('G6Admin', G6Admin);*/



                
           }
           catch(e){
               console.log(e);
           }
       }

      




       return {

           _getUserGroups: function (arr) {
                GetItems(arr);
           }
       };
       
       

   }());

   //drivers
   var currentUsersGroupUrl = $InternalMovesAPI.currentUserGroupsURL();
   console.log(currentUsersGroupUrl);
   
   
   var currentUserGroupsItems = $InternalMovesAPI.getItems(currentUsersGroupUrl);
   groups._getUserGroups([ currentUserGroupsItems ]); //get current user groups
       

}]);//permissionsCtrl



