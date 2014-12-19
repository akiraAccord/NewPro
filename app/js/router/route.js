var app = angular.module('myApp', ['ngRoute']);

app.config(['$routeProvider',function($routeProvider) {
	$routeProvider.
	when('/',{
		controller: 'LoginController',
		templateUrl:'views/login.html'
	}).
	when('/register',{
		controller: 'RegisterController',
		templateUrl:'views/register.html'
	}).
	when('/set',{
		controller: 'SetController',
		templateUrl:'views/set.html'
	}).
	when('/user',{
		controller: 'UserController',
		templateUrl:'views/user.html'
	}).
	otherwise({
		redirectTo: '/'
	})
}])