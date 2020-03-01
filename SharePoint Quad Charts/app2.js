
angular.module('myApp', ['ngRoute']);

angular.module('myApp').config(['$routeProvider', function ($routeProvider) {

    //routes
    $routeProvider
        .when('/', {
            templateUrl: 'https://shaunlewisdevdomaincom.sharepoint.com/quad/programs/Pages/collab1.aspx',//html fragment
            controller: 'AboutController',
            controllerAs: 'vm'//vm is used in view pages

        })

        .when('/', {
            templateUrl: 'https://shaunlewisdevdomaincom.sharepoint.com/quad/programs/Pages/collab2.aspx',//html fragment
            controller: 'ContactController',
            controllerAs: 'vm'//vm is used in view pages

        })

        .when('/', {
            templateUrl: 'https://shaunlewisdevdomaincom.sharepoint.com/quad/programs/Pages/collab3.aspx',//html fragment
            controller: 'WelcomeController',
            controllerAs: 'vm'//vm is used in view pages

        })

}]);

angular.module('myApp').controller('AboutController', [function () {

    console.log('Collab1 Controller');

    //this.details = 'Hello, from AboutController.';


}]);

angular.module('myApp').controller('ContactController', [function () {

    console.log('Collab2 Controller');

    //this.details = 'Hello, from ContactController.';


}]);

angular.module('myApp').controller('WelcomeController', [function () {

    console.log('Collab3 Controller');


    //this.details = 'Hello, from WelcomeController.';


}]);


