app.controller('RegisterController', ['$scope','$http','$location', function($scope,$http,$location){
	$scope.reset = function(){
		$scope.myForm.$setPristine();
	}

	$scope.register = function(){
		console.log($scope.data);

		$http({
			method:'POST',
			url:'js/controller/test.json',
			data:$scope.data
		}).success(function(data,status,headers,config){
			console.log(data);
		}).error(function(data,status,headers,config){
			console.log("error....");
		})

	}
}])