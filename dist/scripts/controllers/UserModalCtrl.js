(function(){
    function UserModalCtrl($scope, $uibModalInstance, $cookies){
        
        // creates room from open modal
        $scope.confirm = function(userName){
            $cookies.put('blocChatCurrentUser', userName);
            $uibModalInstance.close(); 
            //standard close per uibmodal website
        };
    }

    angular
        .module("blocChat")
        .controller('UserModalCtrl', ['$scope', '$uibModalInstance', '$cookies', UserModalCtrl]);
})();