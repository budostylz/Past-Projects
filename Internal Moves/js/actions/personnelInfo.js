angular.module('app').controller('personnelInfoCtrl', ['$q','InternalMovesAPI', function ($q, $InternalMovesAPI) {


        try{


    
            var vm = this; //view model
            //store.dispatch(getPersonnelInfoAction('p1'))//Set Personnel Data
            //store.dispatch(getPersonnelInfoAction('p2'))//Set Personnel Data
            //store.dispatch(getPersonnelInfoAction('p3'))//Set Personnel Data


            //Command Personnel Url
            var identity = $("input[title='Identity']");

            //console.log('personnel',identity)

            identity.keyup(function(e){

                var value = $(this).val();
                var searchArr = _.compact(value.split(' '));

                if(searchArr.length === 1 || searchArr.length === 2){


                    //console.log(searchArr, searchArr.length)

                    
                    var cpUrl = $InternalMovesAPI.searchCommandPersonnel(searchArr);
                    var cpItems = $InternalMovesAPI.getItems(cpUrl);
                    console.log(cpUrl)
        
    
                    var personnelData = $q.all([   
                        cpItems,
                            
                                                                    
                    ]);
    
                    personnelData.then(function (__personnelData) {//Personnel Data

                        var firstName = searchArr[0];
                        var lastName = (searchArr.length > 1) ? searchArr[1] : "";
                        var personnelData = __personnelData[0];

                        console.log(searchArr.length, personnelData)

                        if(searchArr.length == 1){
                            store.getState().FirstNames = [];
                            store.getState().LastNames = [];
                            store.dispatch(getFirstNames(personnelData))
                        }else if(searchArr.length == 2){
                            store.getState().LastNames = [];
                            store.dispatch(getLastNames(personnelData))
                            console.log('results', store.getState().FirstNames.concat(store.getState().LastNames) )                       
                        }

                        
                        //console.log( store.getState() )
                        //console.log(firstName, lastName, personnelData)
                        

                        //console.log( store.getState().PersonnelInfo )
                        //store.dispatch(getFirstNames(personnelData))//Set Personnel Data

                        

                        //console.log( _.filter(personnelData, function(o) { return o.First_x0020_Name.toLowerCase() === firstName.toLowerCase() && o.Last_x0020_Name.toLowerCase() === lastName.toLowerCase() }) )

                        //console.log(searchArr, searchArr.length)
                        //console.log('personnelData', _personnelData);

                        //console.log('order', _.orderBy(personnelData, ['Name'], ['asc']) )
                    
                            
                            
                            
                    });//personnelData
    

                }




            });//identity.keyup

            function formatSearchStr(searchStr){
                try{


                    var searchArr = _.compact(searchStr.split(' '));

                    return searchArr;
                    

                }
                catch(e){
                    console.log('formatSearchStr', e);
                }
            }//formatSearchStr(searchStr)

         
            

            

            
            
    
                
    
        }
        catch(e){
            console.log('personnelInfo.js')
            console.log(e);
        }
    
    
}]);//personnelInfoCtrl

