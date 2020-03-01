

angular.module('app', []);

angular.module('app').factory('AddPrograms', function ($q) {

    return {
        addProgram: function (program) {

            try{

                SP.SOD.executeFunc('SP.Runtime.js', 'SP.ClientContext',
                function () {
                    SP.SOD.executeFunc('SP.js', 'SP.ClientContext',
                    function () {
      
      
                          var ctx = _spPageContextInfo.webAbsoluteUrl;                
                          var clientContext = new SP.ClientContext(ctx);
                          //var oList =  clientContext.get_web().get_lists().getByTitle('Program');//MILTECH
                          var oList =  clientContext.get_web().get_lists().getByTitle('Program1');//TEKSOUTH                                  
                          var itemCreateInfo = new SP.ListItemCreationInformation();
                          var oListItem = oList.addItem(itemCreateInfo);     
                          oListItem.set_item('Title', program);
                          oListItem.set_item('newprogram', true);
                          oListItem.update();                 
                          clientContext.load(oListItem);	       
                          clientContext.executeQueryAsync(onRequestSucceeded, onRequestFailed);
      
                          
      
                         function onRequestSucceeded() {
                                var itemID = oListItem.get_id().toString();
                                alert( program + '\nCreated ');    
                                location.href = ctx + "/Pages/quad1.aspx?itemID="+itemID+"";//redirect to quad1.aspx  
                         }
      
                         function onRequestFailed(sender, args) {
                                console.log('Request failed. ' + args.get_message() + 
                                    '\n' + args.get_stackTrace());
                         }
      
                        
      
      
      
                    });//SP.SOD.executeFunc('SP.js', 'SP.ClientContext')
                });// SP.SOD.executeFunc('SP.Runtime.js', 'SP.ClientContext')


            }
            catch(e){

                console.log(e);

            }

        },//addProgram()
        checkProgram: function(program){

            try{

                var ctx = _spPageContextInfo;
                //var url = ctx.webServerRelativeUrl + "/_api/web/lists/getbytitle('Programs')/items?$filter=Title eq '"+program+"'";//MILTECH
                var url = ctx.webServerRelativeUrl + "/_api/web/lists/getbytitle('Program1')/items?$filter=Title eq '"+program+"'";//TEKSOUTH
                var defer = $q.defer();

                    jQuery.ajax({
                        url: url,  
                        method: "GET",  
                        headers: {  
                            "Accept": "application/json; odata=verbose"  
                        },
                        success: function(data){
                            var response = data.d.results;



                            if(response.length > 0){
                                alert(program + '\nExists. Please Enter A New Name.');
                                defer.resolve(false);
                                
                            }else{
                                defer.resolve(true);
                            }

                        },
                        error: function(e){
                              // error handler code goes here
                              console.log(e);
                        }
                    });

                    

            }
            catch(e){
                console.log(e);
            }

            return defer.promise;

        },//checkProgram()

        validateInput: function(newProg){

            try{

                //remove white spaces
                var str = "";
                str = newProg.replace(/\s+/g, " ").trim();
                return str;

            }
            catch(e){
                console.log(e);
            }


        }//validateInput()

    }//return


});//AddPrograms







/*** MAINCONTROLLER ***/
angular.module('app').controller('MainController', ['$q', 'AddPrograms', function ($q, $AddPrograms) {

    var vm = this;

    jQuery("#saveprogram").click(function(e){//new program button


        try{

            var newProg = jQuery('#newprogram').val();
            var validateStr = $AddPrograms.validateInput(newProg);
            var check = $AddPrograms.checkProgram(validateStr);  
            var programCheckComplete = $q.all([check]);
    
            programCheckComplete.then(function (data) {
    
                    vm.check = data[0];
    
                    if(validateStr.length > 0 && vm.check){//create program after input validation and existence of same program name 
                        
                        jQuery("#saveprogram").hide();//hide save button to prevent multiple clicks
                        var newProgram = $AddPrograms.addProgram(validateStr);
    
                    }else if(validateStr.length === 0){
                        alert("ENTER A VALID PROGRAM NAME");
                    }
            });//programCheckComplete
    



        }
        catch(e){
            console.log(e);
        }


    });//jQuery("#saveprogram").click()

}]);//MainController



