var scotchApp = angular.module('scotchApp', ['ngRoute']);

scotchApp.config(function($routeProvider) {
	$routeProvider

	.when('/', {

	})
});

scotchApp.controller('mainController', function($scope) {
	$scope.message = "This is the main page";
});