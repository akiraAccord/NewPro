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