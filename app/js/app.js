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
app.controller('LoginController', ['$scope','$http','$location', function($scope,$http,$location){
	/*提交数据*/
	$scope.login = function(){
		$http({
			method:"POST",
			url:'js/controller/test.json',
			data:$scope.data
		}).success(function(data){
			console.log("sucesss.....");
			$location.path('/user');
		}).error(function(data,status,headers,config){
			console.log("error....")
		})	
	}
}])
app.controller('RegisterController', ['$scope','$http','$location', function($scope,$http,$location){
	/*表单数据重置*/
	$scope.reset = function(){
		$scope.myForm.$setPristine();
	}

	/*数据提交*/
	$scope.register = function(){
		console.log($scope.data);

		$http({
			method:'POST',
			url:'js/controller/test.json',
			data:$scope.data
		}).success(function(data,status,headers,config){
			console.log(data);
			$location.path('/user');
		}).error(function(data,status,headers,config){
			console.log("error....");
		})
	}
}])
app.controller('SetController', ['$scope', function($scope){
	
}])
app.controller('UserController', ['$scope', function($scope){
	
}])