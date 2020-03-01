
$(document).ready(function () {
    console.log("ready!");
});

angular.module('myApp', []);

angular.module('myApp').factory('RandomNameService', function ($q, $timeout) {

    var firstNames = ['David', 'Scott', 'Joe', 'Michael', 'Mark', 'Scott'];
    var middleNames = ['Anson', 'Paul', 'George', 'Israel', 'Matthew', 'Todd'];
    var lastNames = ['Smith', 'Nicolas', 'Miller', 'Roberts', 'Johnson'];

    return {
        getName: function (nameType) {
            var defer = $q.defer();
            var duration = Math.round(Math.random() * 3000);

            $timeout(function () {//simulates an asynchronous call

                var name = '';
                switch (nameType) {
                    case 'first':
                        name = firstNames[Math.floor(Math.random() * firstNames.length)];
                        break;

                    case 'middle':
                        name = middleNames[Math.floor(Math.random() * middleNames.length)];
                        break;

                    case 'last':
                        name = lastNames[Math.floor(Math.random() * lastNames.length)];
                        break;
                }

                defer.resolve(name);

            }, duration);

            return defer.promise;
        }
    }


});

angular.module('myApp').controller('MainController', ['$q', 'RandomNameService', function ($q, $RandomNameService) {

    var vm = this;

    var firstNamePromise = $RandomNameService.getName('first');
    var middleNamePromise = $RandomNameService.getName('middle');
    var lastNamePromise = $RandomNameService.getName('last');

    /* This pattern receives asynchronous data one at a time.
    firstNamePromise.then(function (name) {
        vm.firstName = name;
    });

    middleNamePromise.then(function (name) {
        vm.middleName = name;
    });

    lastNamePromise.then(function (name) {
        vm.lastName = name;
    });
    */

    //This pattern returns all asynchronous calls at one time.
    var completed = $q.all([firstNamePromise, middleNamePromise, lastNamePromise]);

    completed.then(function (data) {
        vm.firstName = data[0];
        vm.middleName = data[1];
        vm.lastName = data[2];

    });

}]);



