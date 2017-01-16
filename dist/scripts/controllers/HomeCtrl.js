/**
* @desc Controller created to display Rooms in the view, associated with home template through $state. 
*/
(function() {
     function config($locationProvider, $stateProvider) {
         $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: false
            });
         $stateProvider
             .state('home', {
                 url: '/',
                 controller: 'HomeCtrl as home',
                 templateUrl: '/templates/home.html'
             });

     function HomeCtrl(Room, $scope) {
            $scope.rooms = $firebaseArray(ref);
     }
 
     angular
         .module('blocChat')
         .controller('HomeCtrl', ['Room', '$scope', HomeCtrl]);
     }
})();
