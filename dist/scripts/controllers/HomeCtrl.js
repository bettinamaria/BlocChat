/**
* @desc Controller created to display Rooms in the view, associated with home template through $state. 
*/
(function() {
     function HomeCtrl(Room, $scope, $uibModal) {
            $scope.rooms = Room.all;
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
         .controller('HomeCtrl', ['Room', '$scope', '$uibModal', HomeCtrl]);
})();
