// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require angular
//= require angular-ui-router
//= require angular-rails-templates
//= require_tree ../templates
//= require_self
//= require controllers/projects
//= require controllers/home

var app = angular.module( 'routerApp', ['ui.router', 'templates']);

 app.config([
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

		$urlRouterProvider.otherwise('home');
		$locationProvider.html5Mode({
			enabled:true,
			requireBase: false
		});
	}]);
