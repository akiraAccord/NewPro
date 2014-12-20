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