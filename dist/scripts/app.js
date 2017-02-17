(function() {
    function config($stateProvider, $locationProvider){
        $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: false
            });

        $stateProvider
            .state('home', {
                url:'/',
                controller: 'HomeCtrl as home',
                templateUrl: '/templates/home.html'
            });
    }


    function BlocChatCookies($cookies, $uibModal) {
        var currentUser = $cookies.get('blocChatCurrentUser');
        if (!currentUser || currentUser === ''){
            $uibModal.open({ //same modal used as in HomeCtrl
                templateUrl: '/templates/createRoomModal.html',
                controller: 'ModalInstanceCtrl',
                size: 'sm', //size used is small
                backdrop: 'static' //disables closing of modal by clicking anything but the buttons
            });
            currentUser = $cookies.get('blocChatCurrentUser');
        }
    }

    angular
        .module('blocChat', ['ui.router','firebase', 'ui.bootstrap', 'ngCookies'])
        .config(config)
        .run(['$cookies', '$uibModal', BlocChatCookies]);
})();