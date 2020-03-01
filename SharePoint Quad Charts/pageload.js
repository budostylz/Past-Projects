/* Recursive Design Pattern Source: https://codewithrohit.wordpress.com/2017/06/01/sharepoint-rest-api/ */


angular.module('myApp', []);

angular.module('myApp').factory('GetDataService', function ($q) {

	  


    return {


        checkPageSource:function(){

            try{

                if(location.search){
                    var itemID =  parseInt( location.search.split('=')[1], 10 );
                    return itemID;

                }else{
                    return false;
                }

            }
            catch(e){
                console.log(e);
            }


        },

       

       loadBOSDOMElements:function(BOSdata){

            try{       
                
                //load Portfolios
                for(var i = 0; i < BOSdata.length; i++){     
                    var bosname = (BOSdata[i].Title);      
                    jQuery("#bos").append('<option>'+bosname+'</option>');//add portfolio names to drop down
                } 
            }
            catch(e){
                console.log(e);
            }


       },// loadBOSDOMElements()

    loadProgramDOMElements:function(programID, programData){

        try{

            var newProgram = "";

            if(programID !== null){
                newProgram = programData[0][0].Title;
            }
            var programs = programData[1];

            //load Programs
            for(var i = 0; i < programs.length; i++){     

                var program = programs[i].Title;

                if(newProgram === program){
                    jQuery("#program").append('<option selected="selected">'+newProgram+'</option>');
    
                }else{
                   jQuery("#program").append('<option>'+program+'</option>');
                }

            } 

            
        }
        catch(e){
            console.log(e);
        }



    },//loadProgramDOMElements()

    loadRootDOMElements:function(arr){
        try{           
            jQuery('#roots').empty();//empty roots div
            for(var i = 0; i < arr.length; i++){
                var root = arr[i];
                jQuery('#roots').append('<p></p><input type="checkbox" value="'+root+'">'+root+'');
            }    
        }
        catch(e){
            console.log(e);
        }

        
    },//loadRootDOMElements()

    getItems:function(id,programID,bos){
       
        try{

           // console.log(id);
             var ctx = _spPageContextInfo;
             var url="";
             if(id === 'bos'){//BOS
                //url = ctx.webAbsoluteUrl + "/quad/_api/web/lists/getbytitle('BOS')/items?$top=1000";//MILTECH
                url = ctx.siteAbsoluteUrl + "/lewis/_api/web/lists/getbytitle('BOS')/items?$top=1000";//TEKSOUTH
                //console.log(url);
                GetItems();

             }else if(id === 'program'){//PROGRAM


                    if(programID !== null){//target newly created program
                        //url = ctx.webAbsoluteUrl + "/_api/web/lists/getbytitle('Program')/items("+programID+")";//MILTECH
                        url = ctx.webAbsoluteUrl + "/_api/web/lists/getbytitle('Program1')/items("+programID+")";//TEKSOUTH
                        //console.log(url);
                        GetItems();


                    }else if(programID === null){
                        //url = ctx.webAbsoluteUrl + "/_api/web/lists/getbytitle('Programs')/items?$top=1000&select=Root&$filter=BOS eq '"+encodeURIComponent(''+bos+'')+"' or newprogram eq '1'";//MILTECH
                        url = ctx.webAbsoluteUrl + "/_api/web/lists/getbytitle('Program1')/items?$top=1000&select=Root&$filter=BOS eq '"+encodeURIComponent(''+bos+'')+"' or newprogram eq '1'";//TEKSOUTH
                        //console.log(url); 
                        GetItems();

                    }

    
             }else if(id === 'root'){//ROOT
                //url = ctx.siteAbsoluteUrl + "/quad/_api/web/lists/getbytitle('BOS Root')/items?$top=1000&$filter=BOS eq '"+encodeURIComponent(bos)+"'";//MILTECH
                url = ctx.siteAbsoluteUrl + "/lewis/_api/web/lists/getbytitle('BOS Root')/items?$top=1000&$filter=BOS eq '"+encodeURIComponent(bos)+"'";
                //console.log(url);
                GetItems();

             }


             var response = response || [];  // this variable is used for storing list items
             var defer = $q.defer();

             function GetItems(){
                 $.ajax({
                     url: url,  
                     method: "GET",  
                     headers: {  
                         "Accept": "application/json; odata=verbose"  
                     },
                     success: function(data){

                        if(programID === null){
                            response = response.concat(data.d.results);
                            //console.log(data);



                        }else if(programID !== null){
                            response = response.concat(data.d);
                            //console.log(data);

                        }
                         //console.log(data);
                         //console.log(response);
                         if (data.d.__next) {
                             url = data.d.__next;
                             GetItems();
                         }else{

                             defer.resolve(response);
                         }
                         
                     },
                     error: function(e){
                           // error handler code goes here
                           console.log(e);
                     }
                 });
             }//GetItems()

          
         }
         catch(e){
          console.log(e);
         }
         return defer.promise;
         
    }//getItems()




  }//return
});//GetDataService



/*** MAINCONTROLLER ***/
angular.module('myApp').controller('MainController', ['$q', 'GetDataService', function ($q, $GetDataService) {

    
    try{
        var vm = this; //view model
        var checkPageSource = $GetDataService.checkPageSource();


                var getBOSItems = $GetDataService.getItems('bos',null,null);
                var loadBOSDOM = $q.all([getBOSItems]);


                loadBOSDOM.then(function (BOSdata) {//BOS
                   


                   vm.BOSData = BOSdata[0];
                   var loadBOSDOMElements = $GetDataService.loadBOSDOMElements(vm.BOSData);
                   var programID = null;
                   var getProgramItem = null;
                   var getProgramItems = null;

                   if(typeof checkPageSource === "number"){//redirect from newprogram.aspx
                     programID = checkPageSource;
                     getProgramItem = $GetDataService.getItems('program',programID,jQuery("#bos option:selected").text());
                     getProgramItems = $GetDataService.getItems('program',null,jQuery("#bos option:selected").text());


                   }else if(typeof checkPageSource === "boolean"){//redirect from anywhere else
                    getProgramItems = $GetDataService.getItems('program',null,jQuery("#bos option:selected").text());

                   }


                   var loadProgramDOM = $q.all([getProgramItem,getProgramItems]);
                   loadProgramDOM.then(function (programData) {//PROGRAM

                     var loadProgramDOMElements = $GetDataService.loadProgramDOMElements(programID,programData);     

                        var getRootItems = $GetDataService.getItems('root',null,jQuery("#bos option:selected").text());   
                        var loadRootDOM = $q.all([getRootItems]);

                        loadRootDOM.then(function (rootData) {//ROOT 
                                vm.roots = rootData[0];
                                var keydb = TAFFY(vm.roots); 
                                vm.roots  = keydb().distinct('Root');  
                                var loadRootDOMElements = $GetDataService.loadRootDOMElements(vm.roots);
                                
                        });//loadRootDOM()     

                        
                        
                        
                    });//loadProgramDOM()    

                    


                    
                });//loadBOSDOM()
        
    }
    catch(e){
        console.log(e);
    }
    
    

}]);//MainController




