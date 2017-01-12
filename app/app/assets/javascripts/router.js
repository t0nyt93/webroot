angular.module('routerApp', ['ui.router', 'templates']).
    config([
    '$stateProvider',
    '$urlRouterProvider',
    '$locationProvider',
    function($stateProvider, $urlRouterProvider, $locationProvider){
        $stateProvider.state('projects', {
            url: '/projects',
            templateUrl: 'projects.html',
            controller: 'ProjectsCtrl'
        });
        $stateProvider.state('home', {
            url: '/home',
            templateUrl: 'home.html',
            controller: 'HomeCtrl'
        });
        $stateProvider.state('about', {
            url: '/about',
            templateUrl: 'about.html',
            controller: 'AboutCtrl'
        });
        $stateProvider.state('contact', {
            url: '/contact',
            templateUrl: 'contact.html',
            controller: 'ContactCtrl'
        });
        $stateProvider.state('webgl', {
            url: '/webgl',
            templateUrl: 'webgl.html',
            controller: 'WebglCtrl'
        });



        $urlRouterProvider.otherwise('home');

        $locationProvider.html5Mode({
            enabled:true,
            requireBase: false
        });
    }]);
