
//console.log('Update Data Sets');

angular.module('myApp', []);

angular.module('myApp').factory('UpdateDataSetsService', function ($q) {

	  


    return {
         
         updateBOSRoot:function(){
         
         	try{
               console.log('update BOS root');
               

              }
              catch(e){
               console.log(e);
              }
         
         }//updateData

    }//return


});//GetDataService



/*** MAINCONTROLLER ***/
angular.module('myApp').controller('MainController', ['$q', 'UpdateDataSetsService', function ($q, $UpdateDataSetsService) {

    

    jQuery("#updateDataSources").click(function(e){//choose  program button

        var vm = this;
        var updateDataSets = $UpdateDataSetsService.updateBOSRoot();

        

        //This pattern returns all asynchronous calls at one time.
        var completed = $q.all([updateDataSets]);

        completed.then(function (data) {
            
            
            vm.BOSRoot = data[0]; 

            var reader = new FileReader();
            console.log(reader);
        


        });//completed
                  

    });//jQuery("#chooseProg").click()
	
	

            

}]);//MainController



