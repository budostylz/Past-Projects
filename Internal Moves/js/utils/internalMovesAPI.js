angular.module('app').factory('InternalMovesAPI', function ($q) {

    var ctx = _spPageContextInfo;
    var url = null;

	
    return {

        calls:function(items, tag){

            console.log('calls', items, tag);

            

            var data = $q.all([   
                items
                                                    
            ]);

            data.then(function (__data) {

                //console.log('__data', __data);

                var results = __data[0][0].results;

                switch(tag){
                    case 'LOCATION1': //https://mcscviper.usmc.mil/sites/pd/WM/Lists/Location

                        if(results.length > 0) {
                            var item = results[0];
                            var WIN = (item.Win) ? item.Win : '';
                            var building = (item.Building) ? item.Building : '';
                            var dataPort = (item.Jack_x0020__x0023_) ? item.Jack_x0020__x0023_ : '';

                            //console.log('item: ', item);
                            //console.log(WIN, building, dataPort);

                            $("input[title='WIN']").val( WIN )
                            $("input[title='BLDG']").val( building )
                            $("input[title='Data Port']").val( dataPort )

                        }else{
                            $("input[title='WIN']").val( '' );
                            $("input[title='BLDG']").val( '' );
                            $("input[title='Data Port']").val( '' );
                        }

                        break;
                       

                    case 'ACP' :


                        if(results.length > 0){
                            var item = results[0];

                            var name = (item.Name) ? item.Name : '';
                            var source = (item.Source) ? item.Source : '';
                            var position = (item.PositionTitle) ? item.PositionTitle : '';
                            var firstLineSupervisor = (item.OData__x0031_st_x0020_Line_x0020_Super) ? item.OData__x0031_st_x0020_Line_x0020_Super : '';
                            var email = (item.Email) ? item.Email : '';

                            console.log(source, position, firstLineSupervisor, email);

                            $("input[title='Identity']").val( name );
                            $("input[title='Source(Rank)']").val( source );
                            $("input[title='Email']").val( email );
                            $("input[title='Position']").val( position );
                            $("input[title='1st Line Supervisor']").val( firstLineSupervisor );


                            console.log('item: ', item);


                        }else{
                            $("input[title='Identity']").val( '' );
                            $("input[title='Source(Rank)']").val( '' );
                            $("input[title='Email']").val( '' );
                            $("input[title='Position']").val( '' );
                            $("input[title='1st Line Supervisor']").val( '' );

                        }

                        break
                }


            
            });

            

        },

        searchCommandPersonnel:function(searchArr){//get ACP items
            try{


                //console.log('search command personnel');
                //console.log(searchArr, searchArr.length);

                if(searchArr.length === 2){
                    url = "https://mcscviper.usmc.mil/sites/pd/_api/web/lists/getbytitle('All%20Command%20Personnel')/items?$select=*&$filter=First_x0020_Name eq '"+encodeURIComponent(''+searchArr[1]+'')+"' or Last_x0020_Name eq '"+encodeURIComponent(''+searchArr[1]+'')+"'";
                    //console.log(url)
                    return url;
    

                }else if(searchArr.length === 1){
                    url = "https://mcscviper.usmc.mil/sites/pd/_api/web/lists/getbytitle('All%20Command%20Personnel')/items?$select=*&$filter=First_x0020_Name eq '"+encodeURIComponent(''+searchArr[0]+'')+"' or Last_x0020_Name eq '"+encodeURIComponent(''+searchArr[0]+'')+"'";
                    return url;
         
                }

                return null;

            }
            catch(e){
                console.log(e);
            }


        },

        getName:function(str){//get ACP item
            try{


                url = "https://mcscviper.usmc.mil/sites/pd/_api/web/lists/getbytitle('All%20Command%20Personnel')/items?$select=*&$filter=ID eq '"+encodeURIComponent(''+str+'')+"'";
                return url;


            }
            catch(e){
                console.log(e);
            }


        },



        getWin:function(str){//get WIN from Location
            try{


                //console.log(searchArr, searchArr.length);

                url = "https://mcscviper.usmc.mil/sites/pd/WM/_api/web/lists/getbytitle('Location')/items?$select=*&$filter=txtDisplayName eq '"+encodeURIComponent(''+str+'')+"'";
                return url;


            }
            catch(e){
                console.log(e);
            }


        },

        currentUserGroupsURL:function(){
            try{
               
                 url = ctx.webAbsoluteUrl + '/cico/_api/web/currentuser/?$expand=groups';


                return url;

            }
            catch(e){
                console.log(e);
            }


        },

        


        getItems:function(url){
            try{
               //console.log('url', url);
                var response = response || [];  // this variable is used for storing list items
                var defer = $q.defer();
                GetItems();

   
                function GetItems(){
                    $.ajax({
                        url: url,  
                        method: "GET",  
                        headers: {  
                            "Accept": "application/json; odata=verbose"
                        },
                        success: function(data){
                           //console.log(data);
                           response = response.concat(data.d); //user groups
                           //response = response.concat(data.d.results); //fix this for people picker

                           //console.log(response);

                                                       
                            if (data.d.__next) {
                               //console.log('next');
                               url = data.d.__next;
                               GetItems();
                           }else{
                               
                               //console.log('stop')
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

        },
        getItem:function(url){/* Recursive Design Pattern for SharePoint Restful Services: https://codewithrohit.wordpress.com/2017/06/01/sharepoint-rest-api/ */

            try{
               // console.log(url);


                var response = response || [];  // this variable is used for storing list items
                var defer = $q.defer();
                GetItem();

   
                function GetItem(){
                    $.ajax({
                        url: url,  
                        method: "GET",  
                        headers: {  
                            "Accept": "application/json; odata=verbose"
                        },
                        success: function(data){
                           //console.log(data);
                           response = response.concat(data.d);
                           //console.log(response);

                                                       
                            if (data.d.__next) {
                               //console.log('next');
                               url = data.d.__next;
                               GetItem();
                           }else{
                               
                               //console.log('stop')
                               defer.resolve(response);
                           }
  
                        },
                        error: function(e){
                              // error handler code goes here
                              console.log(e);
                        }
                    });
                }//GetItem()


            }
            catch(e){
                console.log(e);
            }

            return defer.promise;

        }

  }//return
});//InternalMovesAPI



