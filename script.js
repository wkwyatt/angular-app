var scotchApp = angular.module('scotchApp', ['ngRoute']);

// configure our routes for our pages
scotchApp.config(function($routeProvider) {
	$routeProvider

	// route for home page
	.when('/home', {
		templateUrl: 'pages/home.html',
		controller: 'mainController'
	})

	// route for about page
	.when('/about', {
		templateUrl: 'pages/about.html',
		controller: 'aboutController'
	})

	// route for contact page
	.when('/contact', {
		templateUrl: 'pages/contact.html',
		controller: 'contactController'
	})
});

scotchApp.controller('mainController', function($scope) {
	$scope.message = "This is the main page";
});

scotchApp.controller('aboutController', function($scope) {
	$scope.message = "Look at the about page";
});

scotchApp.controller('contactController', function($scope) {
	$scope.message = "Contact us! Psyc this isnt a real site.";
});