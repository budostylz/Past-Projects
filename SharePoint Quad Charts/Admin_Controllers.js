/**
 * 
    vm.key4s = key4DB().distinct('OData__x006b_ey4');//USE  SITE COLUMN INSTEAD - MILTECH
    vm.key4s = key4DB().distinct('OData__x004b_ey4');//USE  SITE COLUMN INSTEAD - O365

 */


/*** PageLoadCtrl ***/
angular.module('app').controller('PageLoadCtrl', ['$q', 'AdminService', 'PageLoadService','$cacheFactory','ProgramService', 'GetItemsService','SourceDataDOMService', function ($q, $AdminService, $PageLoadService, $cacheFactory, $ProgramService, $GetItemsService, $SourceDataDOMService) {

    


    
    try{

        $( document ).ready(function() {

            console.log('Admin')


        });


                   
        
    }
    catch(e){
        console.log(e);
    }
    
    

}]);//PageLoadCtrl




angular.module('app').controller('UserSelectCtrl', ['$q', 'AdminService', 'SourceDataDOMService','PageLoadService', 'ProgramService', 'GetItemsService',
function ($q, $AdminService, $SourceDataDOMService, $PageLoadService, $ProgramService,$GetItemsService) {

    
    try{
        $( document ).ready(function() {




                /*HANDLERS*/




                jQuery("#createProgramLists").click(function(e) {//Modal

                    //console.log(e);
                    e.stopPropagation();
                    //console.log(true)

                    var vm = this; //view model

                    var bosUrl = $GetItemsService.bosUrl();
                    var programListUrl = $GetItemsService.programListsUrl();

                    var bosItems = $GetItemsService.getItems(bosUrl); 
                    var programListItems = $GetItemsService.getItems(programListUrl);


                    var data = $q.all([bosItems,programListItems]);

                    data.then(function (_data) {

                        //console.log(_data);
                        vm.bosList = _data[0];
                        vm.programList = _data[1];

                        var createProgramLists = $AdminService.createProgramLists(vm.bosList,vm.programList);





                    });//data










                });


                jQuery("#addProgramContentTypes").click(function(e) {//Modal

                    //console.log(e);
                    e.stopPropagation();
                    //console.log(true)

                    var vm = this; //view model

                    var bosUrl = $GetItemsService.bosUrl();
                    var programListUrl = $GetItemsService.programListsUrl();

                    var bosItems = $GetItemsService.getItems(bosUrl); 
                    var programListItems = $GetItemsService.getItems(programListUrl);


                    var data = $q.all([bosItems,programListItems]);

                    data.then(function (_data) {

                        //console.log(_data);
                        vm.bosList = _data[0];
                        vm.programList = _data[1];

                        var createProgramContentTypes = $AdminService.createProgramContentTypes(vm.bosList,vm.programList);





                    });//data








                });

                jQuery("#createListViews").click(function(e) {//Modal

                    //console.log(e);
                    e.stopPropagation();
                    //console.log(true)

                    var vm = this; //view model

                    var bosUrl = $GetItemsService.bosUrl();
                    var programListUrl = $GetItemsService.programListsUrl();

                    var bosItems = $GetItemsService.getItems(bosUrl); 
                    var programListItems = $GetItemsService.getItems(programListUrl);


                    var data = $q.all([bosItems,programListItems]);

                    data.then(function (_data) {

                        //console.log(_data);
                        vm.bosList = _data[0];
                        vm.programList = _data[1];

                        var createListViews = $AdminService.createListViews(vm.bosList,vm.programList);





                    });//data





                });

                jQuery("#addWorkflows").click(function(e) {//Modal

                    //console.log(e);
                    e.stopPropagation();
                    //console.log(true)

                    var vm = this; //view model

                    var bosUrl = $GetItemsService.bosUrl();
                    var programListUrl = $GetItemsService.programListsUrl();

                    var bosItems = $GetItemsService.getItems(bosUrl); 
                    var programListItems = $GetItemsService.getItems(programListUrl);


                    var data = $q.all([bosItems,programListItems]);

                    data.then(function (_data) {

                        //console.log(_data);
                        vm.bosList = _data[0];
                        vm.programList = _data[1];


                        var attachWorkflow = $AdminService.attachWorkflow(vm.bosList,vm.programList);





                    });//data






                });




        });// $( document ).ready();





    }
    catch(e){
        console.log(e);
    }
    
    

}]);//UserSelectCtrl
