
angular.module('app').controller('personnelInfoCtrl', ['$q','InternalMovesAPI', function ($q, $InternalMovesAPI) {


            var peoplePicker = (function () {

                function initPeoplePicker(){

                        try{

                            console.log('initPeoplePicker');

                            //view model
                            var vm = this; 
    
                            //define dom
                            var identity = $("input[title='Identity']");
                            var sourceBox = $("input[title='Source(Rank)']");
                            var peopleSelect = $('#peoplePickerResults');
                            var emailBox = $("input[title='Email']");
                            var positionBox = $("input[title='Position']");
                            var firstLineSupervisorBox = $("input[title='1st Line Supervisor']");
                            
                            peopleSelect.hide(); //hide options


                            getIdentity(identity,sourceBox,peopleSelect,emailBox,positionBox,firstLineSupervisorBox);
                            selectPeople(identity,sourceBox,peopleSelect,emailBox,positionBox,firstLineSupervisorBox);


                        }
                        catch(e){
                            console.log(e);
                        }

                }//initPeoplePicker

                function getIdentity(identity,sourceBox,peopleSelect,emailBox,positionBox,firstLineSupervisorBox){
                    try{

                        identity.keyup(function(e){

                            try{
                                    const regex = /[^\w]/gi;
                                    var value = $(this).val().replace(regex, ' '); //ex. a comma is considered a space


                                    var searchArr = _.compact(value.split(' '));

                                    console.log('value', value);
                                    //console.log('searchArr',searchArr);
        

                                    //console.log(searchArr, searchArr.length)
        
                                    
                                    var cpUrl = $InternalMovesAPI.searchCommandPersonnel(searchArr);
                                    var cpItems = $InternalMovesAPI.getItems(cpUrl);
                                    //console.log(cpUrl)
        
        
                                    var personnelData = $q.all([   
                                        cpItems//command personnel items
                                               
                                    ]);
        
                                    personnelData.then(function (__personnelData) {//Personnel Data
        
                                        console.log('__personnelData', __personnelData);
        
                                        var firstName = searchArr[0];
                                        var lastName = (searchArr.length > 1) ? searchArr[1] : "";
                                        var personnelData = (__personnelData[0]) ? __personnelData[0] : null;
                                        store.getState().PersonnelData = [];
        
                                        
                                        /*console.log('__personnelData', __personnelData);
                                        console.log('__personnelData[0]', __personnelData[0]);
                                        console.log('firstName', firstName);
                                        console.log('lastName', lastName);
                                        console.log('personnelData', personnelData);
                                        console.log('searchArr.length', searchArr.length);
                                        console.log('store.getState().PersonnelData', store.getState().PersonnelData);*/
        

                                        
        
                                        if(searchArr.length == 1 && personnelData !== null){
                                            //console.log('searchArr.length', searchArr.length);
                                            //console.log('__personnelData', __personnelData);
                                            //console.log('personnelData',personnelData);

                                            store.getState().FirstNames = [];
                                            store.getState().LastNames = [];
                                            store.dispatch(getFirstNames(personnelData));
        
                                            store.dispatch(setPersonnelData(personnelData));
                                            //console.log( 'personnel data', store.getState().PersonnelData[0], personnelData );
                                            showResults( store.getState().PersonnelData[0], peopleSelect);
                                            
                                            

                                            
                                        }else if(searchArr.length == 2 && personnelData !== null){

                                            //console.log('searchArr.length', searchArr.length);
                                            //console.log('__personnelData', __personnelData);
                                            //console.log('personnelData',personnelData);


                                            store.getState().LastNames = [];
                                            store.dispatch(getLastNames(personnelData));
                                            store.getState().FirstNames.concat(store.getState().LastNames);
                                            var result =  _.flatten( store.getState().FirstNames.concat(store.getState().LastNames) );
                                            var resultUnique = _.uniqBy(result, 'ID');
                                            
                                            
                                            var targetArr =  _.filter(resultUnique[0].results, function(o) 
                                                            { 
                                                                /*console.log('o', o);
                                                                console.log('o.First_x0020_Name', o.First_x0020_Name);
                                                                console.log('o.Last_x0020_Name', o.Last_x0020_Name);
                                                                console.log('searchArr[0]', searchArr[0]);
                                                                console.log('searchArr[1]', searchArr[1]);*/

                                                            return (o.First_x0020_Name && o.Last_x0020_Name) 
                                                                        ? 
                                                                        o.First_x0020_Name.toLowerCase() === searchArr[0] && o.Last_x0020_Name.toLowerCase() === searchArr[1]  
                                                                        : 
                                                                        null

                                                            });

                                            //console.log('resultUnique',resultUnique);
                                            //console.log('targetArr', targetArr);

                                            /*console.log('store.getState().LastNames', store.getState().LastNames);
                                            console.log('store.dispatch(getLastNames(personnelData))', store.dispatch(getLastNames(personnelData)));
                                            console.log('store.getState().FirstNames.concat(store.getState().LastNames)', store.getState().FirstNames.concat(store.getState().LastNames));
                                            console.log('result', result);
                                            console.log('resultUnique[0].results', resultUnique[0].results);
                                            console.log('targetArr', targetArr);*/
                                            
                                            
                                            
                                            //console.log('targetArr', targetArr);
        
                                            
                                            if(targetArr.length > 0){
                                                //console.log('targetArr.length > 0', targetArr.length );
                                                //console.log('targetArr', targetArr);
                                                //console.log('resultUnique',resultUnique);

                                                var nonTargetArr =  _.filter(resultUnique[0].results, function(o) 
                                                                    { 
                                                                        //console.log('o', o)
                                                                        //console.log('o.ID', o.ID)
                                                                        //console.log('targetArr[0].ID', targetArr[0].Id)
                                                                        return (o.ID || o.ID) !== (targetArr[0].ID || targetArr[0].Id)
                                                                    });
                                                
                                                //console.log('nonTargetArr',  nonTargetArr);
                                                var result1 = targetArr.concat(nonTargetArr);
                                                //console.log('result', result1)
                                                
                                                store.dispatch(setPersonnelData(result1));
                                                //console.log('store.getState().PersonnelData[0]', store.getState().PersonnelData[0]);
                                                //console.log('result1', result1 );

                                                showResults( store.getState().PersonnelData[0], peopleSelect);
        
                                            }else {
                                                
                                                //console.log('targetArr.length === 0', targetArr.length );
                                                //console.log('result', resultUnique)
                                                store.dispatch( setPersonnelData(resultUnique) );
                                                //console.log( 'store.getState().PersonnelData[0]', store.getState().PersonnelData[0] );
                                                showResults( store.getState().PersonnelData[0], peopleSelect);
        
        
                                            }

                                            
        
                                        }
        

                                    });//personnelData
        
        
                                
                                
                                if(searchArr.length === 0){
                                    console.log('clear options')
                                    store.getState().FirstNames = [];
                                    store.getState().LastNames = [];
        
                                    //hide options results
                                    $('#peoplePickerResults').hide();
                                }
        
                            }
                            catch(e){
                                console.log('identity.keyup', e);
                            }
        
                        });//identity.keyup


                    }
                    catch(e){
                        console.log(e);
                    }

                }//getIdentity

                function showResults(_results, peopleSelect){
                    try{

                        console.log('show results');
                        console.log('_results[0].results: ', _results[0].results);
                        peopleSelect.empty();

                        var results = (_results[0].results) ? _results[0].results : _results;

                        $.each(results, function(index, obj) {

                            if(index === 0){
                                $('#peoplePickerResults').append(
                                    $('<option></option>').val('Choose a Name').html('Choose a Name'),
                                    $('<option></option>').val(obj.Name).html(obj.Name).attr('useritemid', obj.ID )
                                );

                            }else{
                                $('#peoplePickerResults').append(
                                    $('<option></option>').val(obj.Name).html(obj.Name).attr('useritemid', obj.ID )
                                );
                                
                            }

                            
                           
                        });

                    //show options results
                    peopleSelect.show();

                    }
                    catch(e){
                        console.log(e);
                    }
                }//showResults

                function selectPeople(identity,sourceBox,peopleSelect,emailBox,positionBox,firstLineSupervisorBox){
                    try{

                        peopleSelect.change(function(e){ 
    
                            try{
        
                                    //console.log(e)
                                    

                                    var displayName = $(this).val();
                                    var firstNames = (store.getState()['FirstNames'][0]) ? store.getState()['FirstNames'][0] : [];
                                    var lastNames = (store.getState()['LastNames'][0]) ? store.getState()['LastNames'][0] : [];
                                    var firstAndLastNames = _.uniqBy( firstNames.concat(lastNames), 'ID' )
                                    var userItemID = parseInt($('option:selected', this).attr('useritemid'), 10)
                                    var item = ( _.filter(firstAndLastNames[0].results, function(o) { return (o.ID || o.Id) === userItemID }) ) ? _.filter(firstAndLastNames[0].results, function(o) { return (o.ID || o.Id) === userItemID }) : null
        
                                    //console.log('userItemID', userItemID);

                                    /*console.log('displayName', displayName);
                                    console.log('firstNames',  firstNames);
                                    console.log('lastNames',   lastNames);
                                    console.log('firstAndLastNames', firstAndLastNames);
                                    console.log('userItemID', userItemID);
                                    console.log('item', item);*/


                                    if(item){
        
                                        
                                        //Location1
                                        var winUrl = $InternalMovesAPI.getWin(displayName);
                                        var winItems = $InternalMovesAPI.getItems(winUrl);

                                        //ACP
                                        var acpUrl = $InternalMovesAPI. getName(userItemID);
                                        var acpItem = $InternalMovesAPI.getItems(acpUrl);

                                        //console.log(acpUrl);
                                        //console.log(acpItem);


                                        //get WIN items and draw dom
                                        var getWinItems = $InternalMovesAPI.calls(winItems,'LOCATION1');
                                        var getACPItem = $InternalMovesAPI.calls(acpItem,'ACP');

                                        
                                        
                                       peopleSelect.hide();
        
        
                                }

                                
        
                            }
                            catch(e){
                                console.log('peopleSelect.change', e);
                            }
        
        
                        });//peopleSelect.change


                    }
                    catch(e){
                        console.log(e);
                    }
                }


                return {
                    _initPeoplePicker: function(){
                        initPeoplePicker();
                    }
                };


            }());


    
        //console.log(peoplePicker);

        //people picker namespace
        peoplePicker._initPeoplePicker();
    
    
}]);//personnelInfoCtrl

