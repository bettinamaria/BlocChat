/**
* @desc Controller created to display modal to create and add new chat room in the view. 
*/
(function() {
     function config($locationProvider, $stateProvider) {
         $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: false
            });
         $stateProvider
             .state('modal', {
                 animation: 'off',
                 url: '/',
                 controller: 'ModalCtrl as modal',
                 templateUrl: '/templates/home.html'
             });

     function ModalCtrl(Room, $scope) {
            $scope.rooms = $firebaseArray(ref);
     }
 
     angular
         .module('blocChat')
         .controller('ModalCtrl', ['Room', '$scope', ModalCtrl]);
     }
})();