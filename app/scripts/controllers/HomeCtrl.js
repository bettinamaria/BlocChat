/**
* @desc Controller created to display Rooms in the view, associated with home template through $state. 
*/
(function() {
     function HomeCtrl(Room, $scope) {
            $scope.rooms = Room.all;
     }
 
     angular
         .module('blocChat')
         .controller('HomeCtrl', ['Room', '$scope', HomeCtrl]);
})();
