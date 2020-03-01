
console.log('Checking Cache2');

angular.module('myApp', []);

angular.module('myApp').factory('GetDataService', function ($q) {

    return {
        getData: function () {
            var defer = $q.defer();

            //set context
            var ctx = _spPageContextInfo;
	    
	        //test permissions
            var BOSNamesEndPoint = ctx.siteAbsoluteUrl + "/quad/_api/web/lists/getbytitle('BOS')/items?$top=5000&select=Title";
			
            //console.log(ctx);
            //console.log(BOSNamesEndPoint);
	
            jQuery.ajax({
                   url: BOSNamesEndPoint,
                   type: "GET",
                   contentType: "application/json;odata=verbose",
                   headers: { "accept": "application/json; odata=verbose" },
                   success: getBOSNames,
                   error: getBOSNamesError
            });

	    
	     
            
            function getBOSNames(data){

              try{

               //console.log('getBOSNames');
               //console.log(data);
               var results = data.d.results;         
               var BOSNamesArr = [];
               //console.log(results);
               for(var i = 0; i < results.length; i++){
                  //console.log(results[i].Title);
                  BOSNamesArr.push(results[i].Title);
               }
               //console.log(BOSNamesArr);
               defer.resolve(BOSNamesArr);

              }
              catch(e){
               console.log(e);
              }

            }

            function getBOSNamesError(e) {

              try{
               console.log(e);
              }
              catch(e){
               console.log(e);
              }

            }

	   	    return defer.promise;

        },//getData()
        
        
        getData2:function(bos){
        
           //set context
           var ctx = _spPageContextInfo;
        
           //console.log('bos: ' + encodeURIComponent(bos));
           var defer = $q.defer();
           var BOSRootEndPoint = ctx.siteAbsoluteUrl + "/quad/_api/web/lists/getbytitle('BOS Root')/items?$top=5000&select=Root&$filter=BOS eq '"+encodeURIComponent(bos)+"'";
           
           
           jQuery.ajax({
                   url: BOSRootEndPoint,
                   type: "GET",
                   contentType: "application/json;odata=verbose",
                   headers: { "accept": "application/json; odata=verbose" },
                   success: getRoots,
                   error: getRootsError
            });
            
            function getRoots(data){

              try{

           	   //console.log('getBOSRoot');
               var results = data.d.results;
               //console.log(results);
               var programsArr = [];
             
               //console.log(results);
               for(var i = 0; i < results.length; i++){
               	  var rootObj = {};
                  rootObj.Root = results[i].Root;    
                  //console.log(results[i].Root);
                  programsArr.push(rootObj);
               }            
               defer.resolve(results);

              }
              catch(e){
               console.log(e);
              }

	    	}//getRoots()

            function getRootsError(e) {

              try{
               console.log(e);
              }
              catch(e){
               console.log(e);
              }

            }//getRoots()
            
             return defer.promise;
        
        },//getData2()
              
        getData3:function(bos, root){
         		//console.log('getData4');
            
            
            var ctx = _spPageContextInfo;		
            var defer4 = $q.defer();
            var key4EndPoint = ctx.webAbsoluteUrl + "/_api/web/lists/getbytitle('BOS Root')/items?$top=5000&$filter=BOS eq '"+encodeURIComponent(bos)+"' and Root eq '"+encodeURIComponent(root)+"'";
            
            //console.log(key4EndPoint);
            jQuery.ajax({
                   url:key4EndPoint,
                   type: "GET",
                   contentType: "application/json;odata=verbose",
                   headers: { "accept": "application/json; odata=verbose" },
                   success: getkey4s,
                   error: getkey4sError
            });
            
            
            
            function getkey4s(data){

              try{
              
               var results = data.d.results;         
               //console.log(results);

               defer4.resolve(results);

              }
              catch(e){
               console.log(e);
              }
              
              return defer4.promise;

	    			}//getkey4s(data)

            function getkey4sError(e) {

              try{
               console.log(e);
              }
              catch(e){
               console.log(e);
              }

            }//getkey4sError(e)
            
             return defer4.promise;

        }



    }//return


});//GetDataService


angular.module('myApp').factory('DOMService', function ($q) {

    return {

        loadBOS:function(BOSarr){

            //console.log('load BOS');
            //load Portfolios    
            for(var i = 0; i < BOSarr.length; i++){      
                var _bosname = (BOSarr[i]);     
                //console.log(_bosname);
                jQuery("#bos").append('<option>'+_bosname+'</option>');
                //console.log(_bosname);    
            }


        },

        loadRoot:function(vm, data){

            //console.log('load root');
           var db = TAFFY(data[0]); 
           vm.RootCol = db().distinct('Root');//distict 'Root'
           var childCount = jQuery("#root").children().length;

           //console.log(childCount)

        
           if(childCount > 0){
               //console.log('remove')
                jQuery("#rootselection").remove();
                jQuery("#root").append('<div id="rootselection"></div>');

           }else {
               //console.log('append')
                jQuery("#root").append('<div id="rootselection"></div>');
           }

            for(var i = 0; i < vm.RootCol.length; i++){
                var root = vm.RootCol[i];
                jQuery("#rootselection").append('<input type="checkbox" id="'+root+'" value="'+root+'">'+root+'<br>');
            }

        },

        loadKey4:function(){



        }

    }



});//DOMService





/*** MAINCONTROLLER ***/
angular.module('myApp').controller('MainController', ['$q', 'GetDataService','DOMService', function ($q, $GetDataService,$DOMService) {


    
    
      //console.log('inside controller');
      var vm = this;
      var BOSresultsPromise = $GetDataService.getData();
      var completed = $q.all([BOSresultsPromise]);
      //var BOSRootResults = $GetDataService.getData2('AD'); //replace 'AD' with first-child to get initial rollup
      //var LoadPrograms = $GetDataService.getData3();
      //This pattern returns all asynchronous calls at one time.


    //Page Load
    completed.then(function (data) {
	 
      vm.BOSName = data[0]; 
      //console.log(vm.BOSName);

      var loadBOS = $DOMService.loadBOS(vm.BOSName);//load BOS
      var bostext = jQuery("#bos option:selected").text();
      var loadInitialRoots = $GetDataService.getData2(bostext);//load Initial Roots
      var completed2 = $q.all([loadInitialRoots]);

      completed2.then(function (data) {

        var loadroots = $DOMService.loadRoot(vm, data);


     });


    });//completed




    
    /*** HANDLERS ***/


    jQuery("#bos").change(function(e) {  //user select BOS names
    
       // console.log(true);
        var valueSelected = this.value;    
      	var BOSRootResults = $GetDataService.getData2(valueSelected);
        var completed = $q.all([BOSRootResults]);
        
        completed.then(function (data) {

           var loadroots = $DOMService.loadRoot(vm, data);


        });

	});

    jQuery("#RootNames").change(function(e) {  //Root Drop Down
    
   
      var valueSelected = this.value; 
      var bos = jQuery("#BOSNames option:selected").text();
      //console.log(jQuery("#BOSNames option:selected").text())
      var key4Results = $GetDataService.getData4(bos, valueSelected); 
      var completed = $q.all([key4Results]);
    

        completed.then(function (data) {
          

          vm.Key4 = data[0];
          var keydb = TAFFY(vm.Key4);  
          vm.key4 = keydb().distinct('OData__x004b_ey4');
          //console.log(vm.key4);
		  jQuery('#key4div').empty();//empty Key 4 div
		  


          jQuery('#Key4s').find('option').remove();
          for(var i = 0; i < vm.key4.length; i++){
                      //console.log(vm.Key4[i]);
                      jQuery('#key4div').append('<p></p><input type="checkbox" value="'+vm.Key4[i].OData__x004b_ey4+'"> '+vm.Key4[i].OData__x004b_ey4+'<a href="#" id="All" value="'+vm.Key4[i].OData__x004b_ey4+'"> All </a><a href="#" id="Some" value="'+vm.Key4[i].OData__x004b_ey4+'">| Some</a>');

					  console.log( jQuery("a[prop='"+vm.Key4[i].OData__x004b_ey4+"']") );
                      
                      if(i === 0){
                      	// console.log(vm.Key4[i]);
                         var key4Results = $GetDataService.getData5(vm.key4[i]);                      
                         var completed3 = $q.all([key4Results]);
                         completed3.then(function (data) {           
                           vm.FYs = data[0];
                           //update grid
                           var update = $GetDataService.updateData(vm.FYs);                                     
                         });
                      }
                      
          }//for(var i = 0; i < vm.Key4.length; i++)
          
         
          
       
        });//completed

        
        
        //var db = TAFFY(data[1]);
        //vm.BOSRoot = db().distinct('Root');
    });
    
    jQuery("#Key4s").change(function(e) { 
    	
      var valueSelected = this.value;       
      var key4Results = $GetDataService.getData5(valueSelected);
      var completed = $q.all([key4Results]);
      completed.then(function (data) {           
            vm.FYs = data[0];
            //update grid
             var update = $GetDataService.updateData(vm.FYs);                                     
      });

    
    });
    

}]);//MainController



