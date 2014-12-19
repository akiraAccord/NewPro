app.controller('RegisterController', ['$scope', function($scope){
	$scope.reset = function(){
		$scope.myForm.$setPristine();
	}
}])