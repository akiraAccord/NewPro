/*! Gruntfile.JS 20-12-2014 */
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
app.controller('LoginController', ['$scope', function($scope){
	
}])
app.controller('RegisterController', ['$scope','$http','$location', function($scope,$http,$location){
	$scope.reset = function(){
		$scope.myForm.$setPristine();
	}

	$scope.register = function(){
		console.log($scope.data);
	}
	
}])
app.controller('SetController', ['$scope', function($scope){
	
}])
app.controller('UserController', ['$scope', function($scope){
	
}])