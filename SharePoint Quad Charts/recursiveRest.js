
/* Use This Recursive Function to Surpass the OData 5000 Item Limit */
console.log('recursive test2');


                var ctx = _spPageContextInfo;
                var url = ctx.siteAbsoluteUrl + "/quad/_api/web/lists/getbytitle('BOS%20Root')/items?$top=1000";
                var response = response || [];  // this variable is used for storing list items


                function GetListItems(){
                    $.ajax({
                        url: url,  
                        method: "GET",  
                        headers: {  
                            "Accept": "application/json; odata=verbose"  
                        },
                        success: function(data){


                            response = response.concat(data.d.results);

                            console.log(data)

                            
                            if (data.d.__next) {
                                url = data.d.__next;


                                GetListItems();
                            }
                            


                        },
                        error: function(e){
                              // error handler code goes here
                              console.log(e);
                        }
                    });
                }


                GetListItems();


