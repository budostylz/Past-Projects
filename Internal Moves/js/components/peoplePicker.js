
angular.module('app').controller('personnelInfoCtrl', ['$q','InternalMovesAPI', function ($q, $InternalMovesAPI) {


            var peoplePicker = (function () {

                function initPeoplePicker(){

                        //console.log('inside people picker');

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


                        function showResults(results){
                            try{

                                peopleSelect.empty();

                                $.each(results, function(val, obj) {
                                    //console.log(val, obj);
                                    if(val === 0){
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
                        }

                        peopleSelect.change(function(e){ 

                            try{

                                    //console.log(e)
                                    var displayName = $(this).val();
                                    var firstNames = (store.getState()['FirstNames'][0]) ? store.getState()['FirstNames'][0] : [];
                                    var lastNames = (store.getState()['LastNames'][0]) ? store.getState()['LastNames'][0] : [];
                                    var firstAndLastNames = _.uniqBy( firstNames.concat(lastNames), 'ID' )
                                    var userItemID = parseInt($('option:selected', this).attr('useritemid'), 10)
                                    var item = ( _.filter(firstAndLastNames, function(o) { return (o.ID || o.Id) === userItemID }) ) ? _.filter(firstAndLastNames, function(o) { return (o.ID || o.Id) === userItemID }) : null

                                    if(item){
                                        //console.log('item', item)

                                        var winUrl = $InternalMovesAPI.getWin(displayName);
                                        var winItems = $InternalMovesAPI.getItems(winUrl);
                                        var getWinItems = $InternalMovesAPI.calls(winItems);
                                        

                                    
                                        var _item = item[0];
                                        var source = (_item.Source) ? _item.Source : '';
                                        var email = (_item.Email) ? _item.Email : '';
                                        var position = (_item.PositionTitle) ? _item.PositionTitle : '';
                                        var firstLineSupervisor = (_item.OData__x0031_st_x0020_Line_x0020_Super) ? _item.OData__x0031_st_x0020_Line_x0020_Super : '';


                                        //set dom
                                        identity.val(displayName)
                                        sourceBox.val(source)
                                        emailBox.val(email)
                                        positionBox.val(position)
                                        firstLineSupervisorBox.val(firstLineSupervisor)

                                        peopleSelect.hide();
                                        //console.log( source, email, firstLineSupervisor, position )


                                }

                            }
                            catch(e){
                                console.log('peopleSelect.change', e);
                            }


                        });

                        //console.log('personnel',identity)

                        identity.keyup(function(e){

                            try{

                                var value = $(this).val();
                                var searchArr = _.compact(value.split(' '));

                                if(searchArr.length === 1 || searchArr.length === 2){



                                    //console.log(searchArr, searchArr.length)

                                    
                                    var cpUrl = $InternalMovesAPI.searchCommandPersonnel(searchArr);
                                    var cpItems = $InternalMovesAPI.getItems(cpUrl);
                                    //console.log(cpUrl)


                                    var personnelData = $q.all([   
                                        cpItems//command personnel items
                                            
                                                                                    
                                    ]);

                                    personnelData.then(function (__personnelData) {//Personnel Data


                                        var firstName = searchArr[0];
                                        var lastName = (searchArr.length > 1) ? searchArr[1] : "";
                                        var personnelData = __personnelData[0];
                                        store.getState().PersonnelData = [];

                                        //console.log(searchArr.length, personnelData)

                                        if(searchArr.length == 1){
                                            store.getState().FirstNames = [];
                                            store.getState().LastNames = [];
                                            store.dispatch(getFirstNames(personnelData))
                                            //console.log(personnelData)

                                            store.dispatch(setPersonnelData(personnelData));
                                            //console.log( 'personnel data', store.getState().PersonnelData[0], personnelData );
                                            showResults( store.getState().PersonnelData[0] );
                                            
    
                                            
                                        }else if(searchArr.length == 2){
                                            store.getState().LastNames = [];
                                            store.dispatch(getLastNames(personnelData))
                                            store.getState().FirstNames.concat(store.getState().LastNames) 
                                            var result =  _.flatten( store.getState().FirstNames.concat(store.getState().LastNames) );
                                            var resultUnique = _.uniqBy(result, 'ID')
                                            var targetArr =  _.filter(resultUnique, function(o) { return o.First_x0020_Name.toLowerCase() === searchArr[0] && o.Last_x0020_Name.toLowerCase() === searchArr[1] });
                                            //console.log('unique', resultUnique)

                                            
                                            if(targetArr.length > 0){
                                                targetArr =  _.filter(resultUnique, function(o) { return o.First_x0020_Name.toLowerCase() === searchArr[0] && o.Last_x0020_Name.toLowerCase() === searchArr[1] });
                                                var nonTargetArr =  _.filter(resultUnique, function(o) { return (o.ID || o.ID) !== (targetArr[0].ID || targetArr[0].Id)});
                                                var result1 = targetArr.concat(nonTargetArr);
                                                //console.log('non-target',  nonTargetArr)
                                                //console.log('result', result1)
                                                store.dispatch(setPersonnelData(result1));
                                                //console.log( 'personnel data', store.getState().PersonnelData[0], result1 );
                                                showResults( store.getState().PersonnelData[0] );

                                            }else {

                                                //console.log('result', resultUnique)
                                                store.dispatch( setPersonnelData(resultUnique) );
                                                //console.log( 'personnel data', store.getState().PersonnelData[0], resultUnique );
                                                showResults( store.getState().PersonnelData[0] );


                                            }

                                        }

                                        
                                            
                                    });//personnelData


                                }else if(searchArr.length === 0){
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

                }//initPeoplePicker

                return {
                    _initPeoplePicker: function(){
                        initPeoplePicker();
                    }
                };


            }());


    
        //console.log(peoplePicker);

        //driver
        peoplePicker._initPeoplePicker();
    
    
}]);//personnelInfoCtrl

