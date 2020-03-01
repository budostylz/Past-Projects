
(function(){
    angular.module('app').controller('admincontroller', ['$q', 'itemsAPI',  function ($q, $itemsAPI) {

        jQuery('#updateCurrentAvails').click(function(e){
            e.stopPropagation();

        
            getListItems($q, $itemsAPI, CurrentAvailsStore);


        
        
        
        });
        


    }]);//admincontroller

})();





function getListItems($q, $itemsAPI, CurrentAvailsStore){

    try{


            var vm = this; //view model
            var oldCurrentAvailsUrl = $itemsAPI.oldCurrentAvailsItemsUrl();            
            var oldCurrentAvailsItems = $itemsAPI.getItems(oldCurrentAvailsUrl); 
            
            //set promise all
            var allData = $q.all([oldCurrentAvailsItems]);

            //receive responses
            allData.then(function (_allData) {
            

                vm.oldCurrentAvailsItems = _allData[0];

                /*console.log('get data')
                console.log(_allData);    
                console.log(vm.oldCurrentAvailsItems)          
                console.log(CurrentAvails);*/

                updateNewCurrentAvails(vm.oldCurrentAvailsItems, CurrentAvailsStore)




            });

            


        


    }
    catch(e){
        console.log(e);
    }
}

function updateNewCurrentAvails(oldCurrentAvailsItems, CurrentAvailsStore){

    try{

        //console.log('update')
        console.log(oldCurrentAvailsItems)
        //console.log(CurrentAvailsStore)
        //console.log( _.map(CurrentAvailsStore) )
        

        for(var i =0; i < oldCurrentAvailsItems.length; i++){

            

                var oldItem = oldCurrentAvailsItems[i];

                //if(oldItem.ID === 38){
                console.log(' Item ID: ' + oldItem.ID || oldItem.Id);
    
                for(var prop in oldItem){
    
                    //if(oldItem[prop]){
                        //console.log(prop)

                        //if(prop === 'End_x0020_Date_x003a_'){
        

                            var oldFieldItem = _.filter(CurrentAvailsStore, ['oldField', prop]);

                            


                            if(oldFieldItem.length > 0){

                                var sourceFieldType = oldFieldItem[0].oldFieldType;
                                var sourceField = oldFieldItem[0].oldField;
                                var destField = oldFieldItem[0].newField;
                                var value = oldItem[sourceField];


                                
                                var shipName = '';
                                var MARMCPOC = '';
                                var sitePOC = '';
                                var network = ''
                                var siteITPOCs = ''; 

                                //console.log(ctx); 
                                console.log(sourceField)






                                SP.SOD.executeFunc('SP.Runtime.js', 'SP.ClientContext',
                                function () {
                                    SP.SOD.executeFunc('SP.js', 'SP.ClientContext',
                                    function () {

                                        //set context
                                        var ctx = _spPageContextInfo.webAbsoluteUrl;  
                                        var clientContext = new SP.ClientContext(ctx);
                                        var oList =  clientContext.get_web().get_lists().getByTitle('CurrentAvails');
                                        var itemCreateInfo = new SP.ListItemCreationInformation();
                                        var oListItem = oList.addItem(itemCreateInfo); 
                                        console.log()

                                        switch(sourceField) {
                                            case 'Ship_x0020_name':
                                                console.log('Ship_x0020_name')
                                                console.log(oldItem.Ship_x0020_name)
                                                shipName  = (oldItem.Ship_x0020_name) ? _.concat(oldItem.Ship_x0020_name.results).toString() : null;
                                                console.log(shipName)
                                                oListItem.set_item(destField, shipName);
        
                                              break;
                                            case 'MARMCPOC':
                                                console.log('MARMCPOC')
                                                console.log(oldItem.MARMCPOC)
                                                MARMCPOC  = (oldItem.MARMCPOC) ? _.concat(oldItem.MARMCPOC.results).toString() : null;
                                                console.log(MARMCPOC)
                                                oListItem.set_item(destField, MARMCPOC);
        
                                                
                                              break;
                                            case 'SITEPOC':
                                                console.log('SITEPOC')
                                                console.log(oldItem.SITEPOC)
                                                sitePOC  = (oldItem.SITEPOC) ? _.concat(oldItem.SITEPOC.results).toString() : null;
                                                console.log(sitePOC)
                                                oListItem.set_item(destField, sitePOC);
        
                                              break;
                                            case 'Network':
                                                console.log('Network')
                                                console.log(oldItem.Network)
                                                network  = (oldItem.Network) ? _.concat(oldItem.Network.results).toString() : null;
                                                console.log(network)
                                                oListItem.set_item(destField, network);
        
                                              break;
                                            case 'SiteITPOCs':
                                                console.log('SiteITPOCs')
                                                console.log(oldItem.SiteITPOCs)
                                                siteITPOCs  = (oldItem.SiteITPOCs) ? _.concat(oldItem.SiteITPOCs.results).toString() : null;
                                                console.log(siteITPOCs)
                                                oListItem.set_item(destField, siteITPOCs);
                                              break;
        
                                            default:
                                                oListItem.set_item(destField, value);
        
        
                                          }

                                        oListItem.update();                 
                                        clientContext.load(oListItem);
                                        clientContext.executeQueryAsync(onRequestSucceeded, onRequestFailed);	

        
        




                                    });
                                });


                                


                                function onRequestSucceeded() {                                
                                    console.log('success')                
                                }
                
                                function onRequestFailed(sender, args) {
                                        console.log('Request failed. ' + args.get_message() + 
                                            '\n' + args.get_stackTrace());
                                }

                                





                                //console.log(prop)
                                //console.log(oldItem[prop])    
                                //console.log( oldItem.ID + ' : ' +  sourceFieldType + ' : ' + sourceField + ' : ' + destField )
                                //console.log(oldItem)
                                //console.log(value)
                               //console.log(oldItem.sourceField)

                               //console.log( choiceItem )

                               //console.log(oldField[0].oldFieldType)

                                


                            }


    

                       // }
    
        
    
                    //}
    
                }
    

            //}

            

            //console.log(oldCurrentAvailsItems[i])


        }


    }
    catch(e){
        console.log(e);
    }
}


