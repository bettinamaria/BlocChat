/**
* @desc Controller created to display modal to create and add new chat room in the view. 
*/
(function() {

     function ModalCtrl(Room, $scope,) {
            $scope.rooms = $firebaseArray(ref);
     }
    
    function ModalCtrl(Modal, $scope){
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
         .controller('ModalCtrl', ['Room', '$scope', 'uibModal', ModalCtrl]);
})();