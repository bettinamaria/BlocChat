/**
* @desc Controller created to display modal to create and add new chat room in the view. 
*/
(function() {

     function ModalCtrl(Room, $scope) {
            $scope.rooms = $firebaseArray(ref);
     }
 
     angular
         .module('blocChat')
         .controller('ModalCtrl', ['Room', '$scope', ModalCtrl]);
})();