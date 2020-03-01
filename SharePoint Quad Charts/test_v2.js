
console.log('Checking Cache3');

angular.module('myApp', []);

angular.module('myApp').factory('GetDataService', function ($q) {

	  


    return {
        getRoots: function () {
            var defer = $q.defer();

            //set context
            var ctx = _spPageContextInfo;

	    
	         //test permissions
            var RootEndPoint = ctx.webAbsoluteUrl + "/_api/web/lists/getbytitle('Roots')/items?$top=5000&select=Title";
     
	   
	
            jQuery.ajax({
                   url: RootEndPoint,
                   type: "GET",
                   contentType: "application/json;odata=verbose",
                   headers: { "accept": "application/json; odata=verbose" },
                   success: getRoots,
                   error: getRootsError
            });

	    
	     
            
            function getRoots(data){

              try{

               //console.log('getBOSNames');
               //console.log(data);
               var results = data.d.results;         
               var rootArr = [];
               //console.log(results);
               for(var i = 0; i < results.length; i++){
                  //console.log(results[i].Title);
                  rootArr.push(results[i].Title);
               }
               //console.log(rootArr);
               defer.resolve(rootArr);

              }
              catch(e){
               console.log(e);
              }

            }

            function getRootsError(e) {

              try{
               console.log(e);
              }
              catch(e){
               console.log(e);
              }

            }

	   				return defer.promise;

        },//getRoots()

          getPrograms:function(){
         
            //set context
            var ctx = _spPageContextInfo;   
            var defer3 = $q.defer();
            var ProgramEndPoint = ctx.webAbsoluteUrl + "/_api/web/lists/getbytitle('Programs')/items?$top=5000&select=Title";
            //console.log(ProgramEndPoint);
            
            jQuery.ajax({
                   url:ProgramEndPoint,
                   type: "GET",
                   contentType: "application/json;odata=verbose",
                   headers: { "accept": "application/json; odata=verbose" },
                   success: getPrograms,
                   error: getProgramsError
            });
            
          function getPrograms(data){

              try{
              
               var results = data.d.results;         
               var ProgramArr = [];
               for(var i = 0; i < results.length; i++){
                  //console.log(results[i].BOSTitles);
                  ProgramArr.push(results[i].Title);
               }
               
 
               //console.log(ProgramArr)
               defer3.resolve(ProgramArr);

              }
              catch(e){
               console.log(e);
              }

            }//getPrograms()

            function getProgramsError(e) {

              try{
               console.log(e);
              }
              catch(e){
               console.log(e);
              }

            }//getPrograms()
            
             return defer3.promise;

         },//getPrograms
        
        
       
        
         
         
         getData4:function(bos, root){
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

         },//getData4
         
         getData5:function(key4){
         
         		//console.log(key4);
            
            var ctx = _spPageContextInfo;		
            var defer = $q.defer();
            var key4SourceEndPoint = ctx.webAbsoluteUrl + "/_api/web/lists/getbytitle('BOS%20Root')/items?top=5000&$filter=_x004b_ey4 eq '"+encodeURIComponent(key4)+"'";
            
            //console.log(key4SourceEndPoint);
            jQuery.ajax({
                   url:key4SourceEndPoint,
                   type: "GET",
                   contentType: "application/json;odata=verbose",
                   headers: { "accept": "application/json; odata=verbose" },
                   success: getSourcekey4s,
                   error: getSourcekey4sError
            });
            
            
          
          	function getSourcekey4s(data){
            	
              try{
               
               var results = data.d.results;  
               //console.log(results);

               var key4Arr = [];
               var obj = {};
               for(var i = 0; i < results.length; i++){
               	 
               
                 var key4 = results[i].OData__x004b_ey4;
                 
                 //CREATE SHAREPOINT LIST TO GET FY VALUES DYNAMICALLY.
                 var fy19 = results[i].OData__x0046_Y19;
                 var fy20 = results[i].OData__x0046_Y20;
                 var fy21 = results[i].OData__x0046_Y21;
                 var fy22 = results[i].OData__x0046_Y22;
                 var fy23 = results[i].OData__x0046_Y23;
                 var fy24 = results[i].OData__x0046_Y24;
                 var fy25 = results[i].OData__x0046_Y25;
                 
                 /* 
                 console.log(key4);
                 console.log('fy19: ' + fy19);
                 console.log('fy20: ' + fy20);
                 console.log('fy21: ' + fy21);
                 console.log('fy22: ' + fy22);
                 console.log('fy23: ' + fy23);
                 console.log('fy24: ' + fy24);
                 console.log('fy25: ' + fy25);
                 */
                 
                 
                 if(obj[key4]){
                	
                  	
                    obj[key4]['fy19'].push(fy19);
                    obj[key4]['fy20'].push(fy20);
                    obj[key4]['fy21'].push(fy21);
                    obj[key4]['fy22'].push(fy22);
                    obj[key4]['fy23'].push(fy23);
                    obj[key4]['fy24'].push(fy24);
                    obj[key4]['fy25'].push(fy25);
                
                 
                 }else{
                 
                    obj[key4] = {};
                    obj[key4]['fy19'] = []; obj[key4]['fy19'].push(fy19);
                    obj[key4]['fy20'] = []; obj[key4]['fy20'].push(fy20);
                    obj[key4]['fy21'] = []; obj[key4]['fy21'].push(fy21);
                    obj[key4]['fy22'] = []; obj[key4]['fy22'].push(fy22);
                    obj[key4]['fy23'] = []; obj[key4]['fy23'].push(fy23);
                    obj[key4]['fy24'] = []; obj[key4]['fy24'].push(fy24);
                    obj[key4]['fy25'] = []; obj[key4]['fy25'].push(fy25);


                  //key4Arr.push(obj);
                 }

         			 }//for
               
               //console.log(obj);
               defer.resolve(obj);
               
               
               
              }
              catch(e){
               console.log(e);
              }

	    			}//getkey4s(data)

            function getSourcekey4sError(e) {
            
            	try{
               console.log(e);
              }
              catch(e){
               console.log(e);
              }

              

            }//getkey4sError(e)
            
             return defer.promise;

         },//getData5
         updateData:function(obj){
         
         		try{
               //console.log('update data');
               //console.log(obj);
               
               for(var prop in obj){
               	//console.log(obj[prop]);           
                //console.log(prop);
                
                for(var prop2 in obj[prop]){
                
                	//console.log(prop2);
                  //console.log( obj[prop][prop2] );
                  
                  var numbers = obj[prop][prop2];

                  function getSum(total, num) {
                      return total + num;
                  }
									var sum = numbers.reduce(getSum);
                  //console.log('get sum');
                  //console.log( sum );
                  
                  //console.log( jQuery("#"+prop2+"") );
                  
                  jQuery("#"+prop2+"").val(sum);
                 

                }
                
                
                
               }
               
               
              }
              catch(e){
               console.log(e);
              }
         
         }//updateData

    }//return


});//GetDataService



/*** MAINCONTROLLER ***/
angular.module('myApp').controller('MainController', ['$q', 'GetDataService', function ($q, $GetDataService) {

    var vm = this;
    var GetRoots = $GetDataService.getRoots();
    var LoadPrograms = $GetDataService.getPrograms();
    var completed = $q.all([LoadPrograms, GetRoots]);

    completed.then(function (data) {
        
        vm.programs = data[0]; 
        vm.root = data[1]; 
        console.log(vm.root);
        console.log(vm.programs);



        jQuery( document ).ready(function() {  
            jQuery('#ProgramsInput').hide();
            jQuery('#BOSInput').hide();
            jQuery('#RootInput').hide();
            jQuery('#saveProg').hide();


            //load programs
          for(var i = 0; i < vm.programs.length; i++){      
            var program = (vm.programs[i]);
            jQuery("#Programs").append('<option>'+program+'</option>');
            //console.log(vm.BOSName[i]);    
           }

           //load Roots
          jQuery("#RootNames").find('option').remove();
              
          for(var i = 0; i < vm.root.length; i++){      
            var root = vm.root[i];            
            //console.log(_bosroot);            
            jQuery("#RootNames").append('<option>'+root+'</option>');
            //console.log(vm.BOSName[i]);    
          }  


        });



     });

  
    
            
    
    
    
    
    

}]);//MainController



