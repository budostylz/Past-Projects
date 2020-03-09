
angular.module('app').controller('loadStateCtrl', ['$q','InternalMovesAPI', function ($q, $InternalMovesAPI) {


    try{

        var vm = this; //view model
        console.log('load state')
        store.dispatch(getFirstNames([]))//Set Personnel Data
        store.dispatch(getLastNames([]))//Set Personnel Data
        //store.dispatch(getPersonnelInfoAction('p2'))//Set Personnel Data
        //store.dispatch(getPersonnelInfoAction('p3'))//Set Personnel Data

			

    }
    catch(e){
        console.log('loadState.js')
        console.log(e);
    }


}]);//loadStateCtrl