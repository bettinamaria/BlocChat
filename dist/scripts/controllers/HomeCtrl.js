/**
* @desc Controller created to display Rooms in the view
* @type {Object}?? or param {xx}??
*/
(function() {
     function HomeCtrl(Room, $scope) {
            $scope.rooms = Room.all;
     }
 
     angular
         .module('blocChat')
         .controller('HomeCtrl', ['Room', '$scope', HomeCtrl]);
 })();

