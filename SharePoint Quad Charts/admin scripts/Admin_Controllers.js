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

					//source: https://social.msdn.microsoft.com/Forums/lync/en-US/3eee53ac-f051-42c4-a3de-c7f8979feca0/modify-a-list-view-via-javascript?forum=sharepointdevelopment
                    //console.log(e);
					
                    e.stopPropagation();

                    var listDef = 'BOS ROOT'
					var listName = 'BOS_ROOT_AD'
					var newView = 'Funded'
					
					

					
					
					
					//get view fields
					var context = new SP.ClientContext.get_current();
					var web = context.get_web();
					var list = web.get_lists().getByTitle(listDef);
					var view = list.get_views().getByTitle("All Items");
					var listFields = view.get_viewFields();
					context.load(listFields);
					
					context.executeQueryAsync(printFieldNames,onError);


				   function printFieldNames() {
					   
					   
					  var e = listFields.getEnumerator();
					  var viewFields = [];
					  while (e.moveNext()) {
						 var fieldName = e.get_current();
						 viewFields.push(fieldName)
						 console.log(fieldName);
					  }
					  
					  console.log(viewFields)
					  
					  
					  var context = new SP.ClientContext.get_current();
					  var web = context.get_web();
					  var listCollection = web.get_lists();  
					  list = listCollection.getByTitle(listName);  
					  viewCollection = list.get_views();  
					  context.load(viewCollection);  
					
					  var createView = new SP.ViewCreationInformation();  
					  createView.set_title(newView); 
					  					  
					  //var viewFields = ["ID","Title"...];  
					  createView.set_viewFields(viewFields); 
					  
					  
					
					  viewCollection.add(createView);
					  
					  context.load(viewCollection); 
					  
					  context.executeQueryAsync(ViewCreated, onFail);

					  function ViewCreated(){ 
					  
					  	var context = new SP.ClientContext.get_current();
						var web = context.get_web();
						var list = web.get_lists().getByTitle(listName);
						var view = list.get_views().getByTitle(newView);
						
						view.set_defaultView(true);
						view.set_mobileDefaultView(true);
						view.update()
						
						context.load(view); 
					    context.executeQueryAsync(UpdateView, onUpdateFail);
						
						
						function UpdateView(){  
						
						   console.log(' set to default view')

						
							var context = new SP.ClientContext.get_current();
							var web = context.get_web();
							var list = web.get_lists().getByTitle(listName);
							var view = list.get_views().getByTitle("All Items");
							
							view.deleteObject(); 
							
							context.executeQueryAsync(ViewDeleted, ViewDeletedFail);  
							
							function ViewDeleted(){  
								console.log('view deleted');  
							}
							
							function ViewDeletedFail(sender,args){  
								console.log(args);  
							}

						
						}
						
						function onUpdateFail(sender,args){  
						  console.log(args);  
						}
						  

 
					  }
					
					  function onFail(sender,args){  
						  console.log(args);  
					  }
					  
					  
					  
					  
				   }

				   function onError(sender,args)
				   {
					  console.log(args);
				   }
				   
				   
				   /*
					//create  view
					var context = new SP.ClientContext.get_current();
					var web = context.get_web();
					var listCollection = web.get_lists();  
					list = listCollection.getByTitle("AAO_AMM");  
					viewCollection = list.get_views();  
					context.load(viewCollection);  
					
					var createView = new SP.ViewCreationInformation();  
					createView.set_title("TestView");   
					var viewFields = ["ID","Title"];  
					createView.set_viewFields(viewFields); 
					
					viewCollection.add(createView);    
					context.load(viewCollection);    
					//context.executeQueryAsync(ViewCreated, onFail);

					function ViewCreated(){  
						console.log('view created')
 
					}
					
					function onFail(sender,args){  
						console.log(args);  
					}
					
					*/


					
					
					/*
					
					//update view
					var context = SP.ClientContext.get_current();  
					var web = context.get_web();  
					var listCollection = web.get_lists();  
					list = listCollection.getByTitle("AAO_AMM");  
					viewCollection = list.get_views();  
					view = viewCollection.getByTitle("All Items");  
					
				  
					//var camlQuery = new SP.CamlQuery();  
					//var query = "<View><RowLimit>1000</RowLimit></View>";  
					///camlQuery.set_viewXml(query);  
					//view.set_viewQuery(camlQuery); 

					view.get_viewFields().removeAll();		
					
					view.get_viewFields().add('ID');					
					
					view.set_rowLimit(10);  
					view.update();  
					context.load(view);  
				  
					context.executeQueryAsync(ViewModified,onFail); 
					
					
					
					function ViewModified(sender,args){  
						console.log('view updated')
 
					}
					
					function onFail(sender,args){  
						console.log(args);  
					}
					
					*/
					
					
					
					
					



					
					
					
					

					
					
					
					
					
					

					

					
					
					
					

                    //var context = new SP.ClientContext.get_current();
                    //var web = context.get_web();

                    //console.log("the web name is  = " + web)
                    
					/*

                    // loop through the array
                    var len = abbList.length; 
                    for (var i = 0; i < len; i++) 
                    {
                                    var progName = abbList[i] + "_AD";
                                   // console.log("list definition name is  = " + progName)


                                    // FOR BOS

                                   // var len = abbList.length; 
                                    
                                    // second step
                                    // get the list postfix from the BOS list
                                    var oList = context.get_web().get_lists().getByTitle("BOS");
                                    var camlQuery = new SP.CamlQuery();
                                    camlQuery.set_viewXml('<View><RowLimit>100</RowLimit></View>');               
                                    var collListItem = oList.getItems(camlQuery);
                                    context.load(collListItem);

                                    //console.log('TEST')

                                    context.executeQueryAsync(GetListNames,onError);


                                    function GetListNames() 
                                    {
                                    //    console.log('TEST2')
                                        context.load(collListItem);
                                        console.log( collListItem)
                                        collListItem.getEnumerator()
                                   //     console.log('TEST3')

                                    //  var e = collListItem.getEnumerator();

                                             for (var i = 0; i < len; i++) 
                                             {

                                                    var AAOlistItemEnumerator = collListItem.getEnumerator();

                                                    while (AAOlistItemEnumerator.moveNext()) {
                                                        // var ListName = e.get_current();
                                                        var oListItem = AAOlistItemEnumerator.get_current();
                                                        var ListName1 = oListItem.get_item('Title');
                                                        ListName1 = abbList[i] + "_" + ListName1;


                                                        var olist = context.get_web().get_lists().getByTitle(ListName1);

                                                        context.load(olist); 
                                            
                                                        console.log("list name new =  " + olist)


                                                        
                                                       
                                                                                        // code to get the default view and add the fields to it
                                                                                     //   console.log('TEST4')
                                                                                        var view = olist.get_views().getByTitle("All Items");
                                                                                        var fieldNames = view.get_viewFields();
                                                                                        console.log('default view fields are ' + fieldNames)
                                                       
                                                                                        context.load(view);
                                                                                     //   console.log('TEST5')
                                                       
                                                                                        var fieldNames = view.get_viewFields();
                                                                                        context.load(fieldNames);
                                                                                     //   console.log('TEST6')
                                                                                        var defaultView = olist.get_defaultView();
                                        
                                                                                        console.log('success2')                                                                                           
                                        
                                                                                        var defaultViewFields = defaultView.get_viewFields();


                                                                                        //   PROBLEM AREA IS IN THIS SECTION
                                                                                         // get the view fields from the view definition list
                                                                                         // Shaun, this is where the issue is. The loop is not
                                                                                         // working properly.

                                                                                                       console.log('program name is ' + progName)
                                                                                                        var list = context.get_web().get_lists().getByTitle(progName); // web.get_lists().getByTitle(progName); // web.get_lists().getByTitle(progName);  // web.get_lists().getByTitle("AAO_AD");
                                                                                                        //     console.log("List name is  = " + list)
                                                                                                            var view = list.get_views().getByTitle("All Items");
                                                                                                            var listFields = view.get_viewFields();
                                                                                                            context.load(listFields);
                                                                                                            console.log('TEST7')
                                                                                                            
                                                                                                           // context.executeQueryAsync(printFieldNames,onError);
                                                                        
                                                                        
                                                                                                        function printFieldNames() 
                                                                                                        {
                                                                                                            var e = listFields.getEnumerator();
                                                                                                            while (e.moveNext()) 
                                                                                                            {
                                                                                                                var fieldName = e.get_current();
                                                                                                                console.log(fieldName);
                                                                                                            }
                                                                                                        }
                                                                        
                                                                                                        function onError(sender,args)
                                                                                                        {
                                                                                                            console.log(args.get_message());
                                                                                                        }

                                                                                                        
                                                                                                        // end of getting the view definition fields


                                 
                                                                                        // add new fields
                                                                                          //loop and update fields here
                                                                                        for(var i = 0; i < listFields.length;i++) 
                                                                                        {
                                                                                            
                                                                                            var fname = listFields[i];
                                                                                          //  defaultViewFields.add(fname);
                                                                                            console.log("adding this field to the default view ...  " + fname)
                                                                                        }
                                                                                                                                     
                                                                                        defaultView.update();



                                                        console.log(ListName1);
                                                    }

                                                    
                                            }
                

                                 } // end of first array

                                 function onError(sender,args)
                                 {
                                    console.log(args.get_message());
                                 }
             

                
                }//for
				*/



            
                    function onQueryFailed(sender, args) 
                    {  
                        console.log(args)
    
                    }  
             
                     
                


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
