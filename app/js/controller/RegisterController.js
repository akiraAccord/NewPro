app.controller('RegisterController', ['$scope','$http','$location', function($scope,$http,$location){
	$scope.reset = function(){
		$scope.myForm.$setPristine();
	}

	$scope.register = function(){
		console.log($scope.data);
	}
	
}])