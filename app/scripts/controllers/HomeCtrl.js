/**
* @desc Controller created to display Rooms in the view, associated with home template through $state. 
*/
(function() {
     function HomeCtrl(Room, Message, $scope, $uibModal) {
        $scope.rooms = Room.all;
        $scope.currentRoom = null;
        $scope.messages = [];
        $scope.changeRoom = function(room) {
            $scope.currentRoom = room;
            $scope.messages = Message.getByRoomId(room.$id);
        };
        $scope.sendMessage = function(newMessage) {
            console.log("Sending message from HomCtrl");
            Message.send(newMessage, $scope.currentRoom.$id);
        };
        $scope.open = function(){
            var modalInstance = $uibModal.open({
                templateUrl: '/templates/createRoomModal.html',
                controller: 'ModalInstanceCtrl',
                size: 'md', //size per uimodal website
                backdrop: 'static' //disables closing of modal by clicking anything but the buttons
            }); 
        };
     }


 
     angular
         .module('blocChat')
         .controller('HomeCtrl', ['Room', 'Message', '$scope', '$uibModal', HomeCtrl]);
})();
