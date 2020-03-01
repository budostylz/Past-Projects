
console.log('Checking Cache2');

angular.module('myApp', []);

angular.module('myApp').factory('GetDataService', function ($q) {

	  


    return {
        getData: function () {
            var defer = $q.defer();

            //set context
            var ctx = _spPageContextInfo;
	    
	         //test permissions
            var BOSNamesEndPoint = ctx.webAbsoluteUrl + "/_api/web/lists/getbytitle('BOSTitles')/items?$top=5000&select=Title";
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
           var defer2 = $q.defer();
           var BOSRootEndPoint = ctx.webAbsoluteUrl + "/_api/web/lists/getbytitle('BOS Root')/items?$top=5000&select=Root&$filter=BOS eq '"+encodeURIComponent(bos)+"'";
           
           
           jQuery.ajax({
                   url: BOSRootEndPoint,
                   type: "GET",
                   contentType: "application/json;odata=verbose",
                   headers: { "accept": "application/json; odata=verbose" },
                   success: getBOSRoot,
                   error: getBOSRootError
            });
            
            function getBOSRoot(data){

              try{

           	   //console.log('getBOSRoot');
               var results = data.d.results;
               //console.log(results);
               var BOSRootArr = [];
             
               //console.log(results);
               for(var i = 0; i < results.length; i++){
               	  var rootObj = {};
                  rootObj.Root = results[i].Root;    
                  //console.log(results[i].Root);
                  BOSRootArr.push(rootObj);
               }            
               defer2.resolve(results);

              }
              catch(e){
               console.log(e);
              }

	    			}//getBOSRoot()

            function getBOSRootError(e) {

              try{
               console.log(e);
              }
              catch(e){
               console.log(e);
              }

            }//getBOSNamesError()
            
             return defer2.promise;
        
        },//getData2()
        
        
         getData3:function(){
         
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

         },//getData3
         
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
            var key4SourceEndPoint = ctx.webAbsoluteUrl + "/_api/web/lists/getbytitle('BOS Root')/items?top=5000&$filter=_x004b_ey4 eq '"+encodeURIComponent(key4)+"'";
            
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
		 
		   getData6:function(key4){
         
         	//console.log(key4);
            
            var ctx = _spPageContextInfo;		
            //console.log(ctx);
			
			var defer = $q.defer();
			var program = jQuery( "#Programs option:selected" ).text();
            var programEndPoint = ctx.webAbsoluteUrl + "/_api/web/lists/getbytitle('Programs')/items?top=5000&$filter=Title eq '"+program+"'"; 
            
			//console.log(programEndPoint);
			//console.log( program );
			
            
			jQuery.ajax({
                   url:programEndPoint,
                   type: "GET",
                   contentType: "application/json;odata=verbose",
                   headers: { "accept": "application/json; odata=verbose" },
                   success: getProgram,
                   error: getProgramError
            });
            
            
          
          	function getProgram(data){
            	
              try{
               
			   var id = data.d.results[0].ID;   
               //console.log(id);
               
			   defer.resolve(id);
               
               
               
              }
              catch(e){
               console.log(e);
              }

	    	}//getProgram(data)

            function getProgramError(e) {
            
              try{
               console.log(e);
              }
              catch(e){
               console.log(e);
              }

              

            }//getProgramError(e)
            
             return defer.promise;

         },//getData6
		 
		 
		 
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
                  
                  //jQuery("#"+prop2+"").val(sum);
                 

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
    var BOSresultsPromise = $GetDataService.getData();
    var BOSRootResults = $GetDataService.getData2('AD'); //replace 'AD' with first-child to get initial rollup
    var LoadPrograms = $GetDataService.getData3();
    

    //This pattern returns all asynchronous calls at one time.
    var completed = $q.all([BOSresultsPromise, BOSRootResults, LoadPrograms]);

    completed.then(function (data) {
     
     
     var db = TAFFY(data[1]);//BOS Names
     vm.BOSName = data[0]; 
     vm.BOSRoot = db().distinct('Root');
     vm.Program = data[2];
     vm.key4Results = data[3];
  
  	 //console.log(vm.key4Results);
     //console.log(vm.BOSName);
     //console.log(vm.BOSRoot);
     //console.log(vm.Program);
     
     
     //build program drop down
     
     
      	 /*** DOCUMENT READY ***/
    jQuery( document ).ready(function() {  
         
       
       		//console.log(jQuery('#Programs'));
           //console.log(jQuery('#BOSNames'));
          //console.log(jQuery('#RootNames'));
          
          jQuery('#ProgramsInput').hide();
          jQuery('#BOSInput').hide();
          jQuery('#RootInput').hide();
          jQuery('#saveProg').hide();


          
          //load Programs
           for(var i = 0; i < vm.Program.length; i++){    
            var _programs = vm.Program[i];
            //console.log(_programs);
            jQuery("#Programs").append('<option>'+_programs+'</option>');  
            if(i === 0){//set Program 1
            	//console.log('set program 1');
              jQuery('#programlabel').text(_programs);          
            }               
           }//for(var i = 0; i < vm.Program.length; i++)
          
         
          //load Portfolios
          for(var i = 0; i < vm.BOSName.length; i++){      
            var _bosname = (vm.BOSName[i]);
            jQuery("#BOSNames").append('<option>'+_bosname+'</option>');
           	 //console.log(_bosname);    
           }   
          
         
         
           //load initial BOS Root dropdown
          jQuery("#RootNames").find('option').remove();
              
          for(var i = 0; i < vm.BOSRoot.length; i++){      
            var _bosroot = vm.BOSRoot[i];            
            //console.log(_bosroot);            
            jQuery("#RootNames").append('<option>'+_bosroot+'</option>');
            //console.log(vm.BOSName[i]);    
          }  
          
          


          var bos = jQuery("#BOSNames option:selected").text();
          var root = jQuery("#RootNames option:selected").text();
          var key4Results = $GetDataService.getData4(bos, root); 
          var completed2 = $q.all([key4Results]);


          completed2.then(function (data) {
               vm.Key4 = data[0];     
               var keydb = TAFFY(vm.Key4);       
          		 vm.key4 = keydb().distinct('OData__x004b_ey4');
				 jQuery('#key4div').empty();//empty Key 4 div

               //console.log(vm.Key4);

               jQuery('#Key4s').find('option').remove();
                    for(var j = 0; j < vm.key4.length; j++){
                      //console.log(vm.Key4[j].OData__x004b_ey4);
                      jQuery('#key4div').append('<p></p><input type="checkbox" value="'+vm.Key4[j].OData__x004b_ey4+'"> '+vm.Key4[j].OData__x004b_ey4+'<a href="#" id="All" value="'+vm.Key4[j].OData__x004b_ey4+'"> All </a><a href="#" id="Some" value="'+vm.Key4[j].OData__x004b_ey4+'">| Some</a>');
					  
                      
                      if(j === 0){
                      	 //console.log(vm.Key4[j]);
                         var key4Results2 = $GetDataService.getData5(vm.key4[j]); 
                         var completed3 = $q.all([key4Results2]);
                         completed3.then(function (data) {                   
                           vm.FYs = data[0];						   
                           //update grid
                           var update = $GetDataService.updateData(vm.FYs);
                          
                          
                         });
                         
                         
                         
                      }
                      
                      
               			}//for(var j = 0; j < vm.Key4.length; j++)

          			});//completed2



       

    		});//document.ready()

    });//completed


    
    /*** HANDLERS ***/


    jQuery("#Programs").change(function(e){//program drop down
    
       var prog =  jQuery(this).val();      
       jQuery("#programlabel").text(prog);
      
      //console.log( jQuery("#programlabel").text("test") );
    
    
    });

    jQuery("#BOSNames").change(function(e) {  //user select BOS names
    
   
      	var valueSelected = this.value;    
      	var BOSRootResults = $GetDataService.getData2(valueSelected);
        var completed = $q.all([BOSRootResults]);
      
       //console.log(valueSelected);
    
        

    
     	  completed.then(function (data) {
       
          var db = TAFFY(data[0]);       
          vm.BOSRoot = db().distinct('Root');
          //console.log(data[0]);
         
          //console.log( jQuery("#BOSNames option:selected").text() );
          //console.log( jQuery("#RootNames option:selected").text() );
          
          
          jQuery("#RootNames").find('option').remove();
          
          for(var i = 0; i < vm.BOSRoot.length; i++){      
            var _bosroot = vm.BOSRoot[i];
            
            //console.log(_bosroot);
            
            jQuery("#RootNames").append('<option>'+_bosroot+'</option>');
             

            if( i === 0 ){//GET KEY 4 FOR FIRST ROOT SELECTION
              //console.log(_bosroot);  

              var key4Results = $GetDataService.getData4(valueSelected, _bosroot); 
              var completed2 = $q.all([key4Results]);

              completed2.then(function (data) {

									 
                   vm.Key4 = data[0];
                   var keydb = TAFFY(vm.Key4);       
          		   vm.key4 = keydb().distinct('OData__x004b_ey4');
                   //console.log(vm.key4); 

                    jQuery('#key4div').empty();//empty Key 4 div 
                   
                    for(var j = 0; j < vm.key4.length; j++){
                      //console.log(vm.Key4[j]);
                    
                      
                      //append to Key 4 Dropdown
                      jQuery('#key4div').append('<p></p><input type="checkbox" value="'+vm.Key4[j].OData__x004b_ey4+'"> '+vm.Key4[j].OData__x004b_ey4+'<a href="#" id="All" value="'+vm.Key4[j].OData__x004b_ey4+'"> All </a><a href="#" id="Some" value="'+vm.Key4[j].OData__x004b_ey4+'">| Some</a>');

                      
                      if(j === 0){
                      	 //console.log(vm.Key4[j]);
                         var key4Results = $GetDataService.getData5(vm.key4[j]);
                         var completed3 = $q.all([key4Results]);
                         completed3.then(function (data) {           
                           vm.FYs = data[0];
                           //update grid
                           var update = $GetDataService.updateData(vm.FYs);                                     
                         });

                         
                      }
                      
                      
                    }//for(var j = 0; j < vm.Key4.length; j++)
                    
                   
                  
                  //console.log( jQuery('#Key4s') );
                  
                    


              });



            }

       		}  //for(var i = 0; i < vm.BOSRoot.length; i++)  
          
          
       
       });//completed2
        
        //var db = TAFFY(data[1]);
        //vm.BOSRoot = db().distinct('Root');
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
    
    
    
    jQuery("#saveProg").click(function(e){//save new program button

      SP.SOD.executeFunc('SP.Runtime.js', 'SP.ClientContext',
                function () {
                    SP.SOD.executeFunc('SP.js', 'SP.ClientContext',
                    function () {

											console.log('add program');
                      var ctx = _spPageContextInfo.webAbsoluteUrl;

              
              				//console.log( typeof jQuery("#BOSNames option:selected").text() );


                       //validate input
                       if(jQuery('#ProgramsInput').val().length > 0 ){
                       	
                          
                          var clientContext = new SP.ClientContext(ctx);
                          var oList =  clientContext.get_web().get_lists().getByTitle('Programs');
                          console.log(jQuery("#Key4s option:selected").text())
                          //console.log(clientContext);
                          //console.log(oList);

                          
                          var itemCreateInfo = new SP.ListItemCreationInformation();
                          var oListItem = oList.addItem(itemCreateInfo);

                          oListItem.set_item('Title', jQuery('#ProgramsInput').val());
                          oListItem.set_item('BOS', jQuery("#BOSNames option:selected").text() );
                          oListItem.set_item('Root', jQuery('#RootNames option:selected').text() );
                          oListItem.set_item('Ready', jQuery('#ready').is(':checked'));
						  oListItem.set_item('_x004b_ey4', jQuery("#Key4s option:selected").text());

                          oListItem.update();
                          clientContext.load(oListItem);							    
                          clientContext.executeQueryAsync(onRequestSucceeded, onRequestFailed);




                         function onRequestSucceeded() {
                                console.log('Item created: ' + oListItem.get_id());
                                alert( jQuery('#ProgramsInput').val() + '\nhas been added. ');
                         }

                         function onRequestFailed(sender, args) {
                                console.log('Request failed. ' + args.get_message() + 
                                    '\n' + args.get_stackTrace());
                         }



                         
                       
                       }//if(jQuery('#ProgramsInput').val().length > 0 && jQuery('#BOSInput').val().length > 0 && jQuery('#RootInput').val().length > 0)
                       
                       //validate input
                        if(jQuery('#ProgramsInput').val().length === 0 ){
                        	alert('Do Not Leave Anything Blank.');
                        }
                       
                       

									//console.log('Program Length: ' + programsInput.val().length);
                  //console.log('BOS Length: ' + bosNamesInput.length);
                  //console.log('Root Length: ' + rootInput.length);




                    });//SP.SOD.executeFunc('SP.js', 'SP.ClientContext')
                });// SP.SOD.executeFunc('SP.Runtime.js', 'SP.ClientContext')
    
    
    });// jQuery("#saveProg")
    
    jQuery("#deleteProg").click(function(e){//delete program button
    
     

   
                      //set context
                      var ctx = _spPageContextInfo;
                      var deleteEndpoint =  ctx.webAbsoluteUrl  + "/_api/web/lists/getbytitle('Programs')/items?top=5000&select=Title&$filter=Title eq '"+jQuery("#Programs option:selected").text() +"'";                              
                      //console.log(deleteEndpoint);
                      
                      
                      jQuery.ajax({
                         url: deleteEndpoint,
                         type: "GET",
                         contentType: "application/json;odata=verbose",
                         headers: { "accept": "application/json; odata=verbose" },
                         success: deleteProgram,
                         error: deleteProgramError
                      });
                      
                      
                      function deleteProgram(data){

                        try{


                          SP.SOD.executeFunc('SP.Runtime.js', 'SP.ClientContext',
                          function () {
                              SP.SOD.executeFunc('SP.js', 'SP.ClientContext',
                              function () {
                              
                              
                                console.log('delete program');
                                var results = data.d.results;  
                                var id = results[0].ID;
                                console.log(results);

                              
                                var ctx = _spPageContextInfo.webAbsoluteUrl;
                                var clientContext = new SP.ClientContext(ctx);
                                var oList =  clientContext.get_web().get_lists().getByTitle('Programs');
                                var oListItem = oList.getItemById(id);


                                oListItem.deleteObject();
                                clientContext.executeQueryAsync(onRequestSucceeded, onRequestFailed);




                               function onRequestSucceeded() {
                                      console.log('Item Deleted:');
                                      alert( jQuery("#Programs option:selected").text() + '\nhas been deleted.');
                               }

                               function onRequestFailed(sender, args) {
                                      console.log('Request failed. ' + args.get_message() + 
                                          '\n' + args.get_stackTrace());
                               }
                                
                                
                                
                                
                              });
                           });
                          
                         
                         
                         
                        }
                        catch(e){
                         console.log(e);
                        }

                      }//deleteProgram()

                      function deleteProgramError(e) {

                        try{
                         console.log(e);
                        }
                        catch(e){
                         console.log(e);
                        }

                      }//deleteProgramError()
    
    
    });//delete program
    
    jQuery("#updateProg").click(function(e){//new program button
    
                      //set context
                      var ctx = _spPageContextInfo;
                      var updateEndpoint =  ctx.webAbsoluteUrl  + "/_api/web/lists/getbytitle('Programs')/items?top=5000&select=Title&$filter=Title eq '"+jQuery("#Programs option:selected").text() +"'";                              
                      console.log(updateEndpoint);
                      
                      
                      jQuery.ajax({
                         url: updateEndpoint,
                         type: "GET",
                         contentType: "application/json;odata=verbose",
                         headers: { "accept": "application/json; odata=verbose" },
                         success: updateProgram,
                         error: updateProgramError
            					});
                      
                      
                      function updateProgram(data){

                        try{


                          SP.SOD.executeFunc('SP.Runtime.js', 'SP.ClientContext',
                          function () {
                              SP.SOD.executeFunc('SP.js', 'SP.ClientContext',
                              function () {
                              
                                console.log('update program');
                                var results = data.d.results;  
                                var id = results[0].ID;
                               //console.log(results);

                                var ctx = _spPageContextInfo.webAbsoluteUrl;
                                var clientContext = new SP.ClientContext(ctx);
                                var oList =  clientContext.get_web().get_lists().getByTitle('Programs');


                                
                                var oListItem = oList.getItemById(id);
                                oListItem.set_item('Title', jQuery("#Programs option:selected").text() );
                                oListItem.set_item('BOS', jQuery("#BOSNames option:selected").text() );
                                oListItem.set_item('Root', jQuery('#RootNames option:selected').text() );
                                oListItem.set_item('Ready', jQuery('#ready').is(':checked'));
                                oListItem.set_item('_x004b_ey4', jQuery("#Key4s option:selected").text());
                                
                                oListItem.update();
                                clientContext.load(oListItem);                  
                                clientContext.executeQueryAsync(onRequestSucceeded, onRequestFailed);




                               function onRequestSucceeded() {
                                      console.log('Item Updated: ' + oListItem.get_id());
                                      alert( jQuery("#Programs option:selected").text() + '\nhas been updated. ');
                               }

                               function onRequestFailed(sender, args) {
                                      console.log('Request failed. ' + args.get_message() + 
                                          '\n' + args.get_stackTrace());
                               }
                                
                                
                                
                                
                              });
                           });
                          
                         
                         
                         
                        }
                        catch(e){
                         console.log(e);
                        }

	    			  }//updateProgram()

                      function updateProgramError(e) {

                        try{
                         console.log(e);
                        }
                        catch(e){
                         console.log(e);
                        }

                      }//updateProgramError()
                      
                
      
    });//update program
    

    //new program
    jQuery("#newProg").click(function(e){//new program button
    

       
        jQuery('#Programs').hide();
 		//jQuery('#updateProg').hide();
        //jQuery('#deleteProg').hide();
        jQuery('#ProgramsInput').show();
        //jQuery('#saveProg').show();
        
   

    });//jQuery("#newProg").click()
    
      
            
    jQuery("#chooseProg").click(function(e){//choose  program button
             		

           //console.log('choose program');
                  
                  
           jQuery('#ProgramsInput').hide();
           jQuery('#BOSInput').hide();
           jQuery('#RootInput').hide();
           jQuery('#saveProg').hide();                  
           jQuery('#Programs').show();
           jQuery('#BOSNames').show();
           jQuery('#RootNames').show();
           jQuery('#deleteProg').show();
           jQuery('#updateProg').show();
                       
          


             
    });//jQuery("#chooseProg").click()
	
	jQuery("#key4div").on("click", "a#Some", function(e){
		
		
		var key4 = this.getAttribute("value");
		console.log(key4);
 
	    SP.SOD.executeFunc('sp.js', 'SP.ClientContext', showModalPopUp);//set   


		function showModalPopUp() {  
			//Set options for Modal PopUp  
			
			
			var getID = $GetDataService.getData6();
			
			var completed = $q.all([getID]);

			completed.then(function (data) {
			
				
				 vm.ProgramID = data[0].toString();
				 console.log(vm.ProgramID);
				 
				 var options = {  
					url: 'https://portal.teksouth.com/sites/dta/lewis/Lists/program/Key4Distribution.aspx?ID='+ vm.ProgramID+'', //Set the url of the page  
					title: 'Key 4 Allocation/Deallocation', //Set the title for the pop up 
					allowMaximize: false,  
					showClose: true,  
					width: 600,  
					height: 400  
				};  
				
				//Invoke the modal dialog by passing in the options array variable  
				SP.SOD.execute('sp.ui.dialog.js', 'SP.UI.ModalDialog.showModalDialog', options);  
				return false;  
				
			
			
			
		  });//completed
			
			
			
			
			
		}  
		
		
		
		
		
		
	});
	
	jQuery("#key4div").on("click", "a#All", function(e){
		
		
		var key4 = this.getAttribute("value");
		console.log(key4);
		
		SP.SOD.executeFunc('SP.Runtime.js', 'SP.ClientContext',
                function () {
                    SP.SOD.executeFunc('SP.js', 'SP.ClientContext',
                    function () {


                      var ctx = _spPageContextInfo.webAbsoluteUrl;
					  console.log(ctx);
    



                    });//SP.SOD.executeFunc('SP.js', 'SP.ClientContext')
        });// SP.SOD.executeFunc('SP.Runtime.js', 'SP.ClientContext')
		
		
		
		
		
		
	});
            
            
    
    
    
    
    

}]);//MainController



