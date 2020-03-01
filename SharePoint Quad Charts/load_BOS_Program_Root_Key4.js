

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

       
       loadBOSMenu:function(){
       
           try{


                var ctx = _spPageContextInfo;
                var url = ctx.siteAbsoluteUrl + "/quad/_api/web/lists/getbytitle('BOS Root')/items?$top=1000";
                var response = response || [];  // this variable is used for storing list items
                var defer = $q.defer();

                /* Recursive Design Pattern Source: https://codewithrohit.wordpress.com/2017/06/01/sharepoint-rest-api/ */
                function GetBOSItems(){
                    $.ajax({
                        url: url,  
                        method: "GET",  
                        headers: {  
                            "Accept": "application/json; odata=verbose"  
                        },
                        success: function(data){


                            response = response.concat(data.d.results);
                            //console.log(response);
                            if (data.d.__next) {
                                url = data.d.__next;
                                GetBOSItems();
                            }else{

                                /*var BOSNamesArr = [];
                                for(var i = 0; i < results.length; i++){
                                    BOSNamesArr.push(results[i].Title);
                                }*/
                                defer.resolve(response);
                            }
                            
                        },
                        error: function(e){
                              // error handler code goes here
                              console.log(e);
                        }
                    });
                }

                GetBOSItems();
             
            }
            catch(e){
             console.log(e);
            }
            return defer.promise;
            
       }//loadBOSMenu()

    }//return


});//GetDataService



/*** MAINCONTROLLER ***/
angular.module('myApp').controller('MainController', ['$q', 'GetDataService', function ($q, $GetDataService) {

    
    try{

        //console.log('Select BOS Program Root and Key 4');

        var checkPageSource = $GetDataService.checkPageSource();
        var loadBOSItems = $GetDataService.loadBOSMenu();
        var loadBOSDOM = $q.all([loadBOSItems]);

        loadBOSDOM.then(function (data) {

                console.log('complete load2');
                console.log(data);



        });//loadBOSDOM()



        /*
            if(typeof checkPageSource === "number"){//set new program look & feel
                console.log("load new program look & feel");


            }else if( typeof checkPageSource === "boolean"){//set current program look and feel
                console.log("load current program look & feel");


            }
        */


    }
    catch(e){
        console.log(e);
    }
    
    

}]);//MainController



