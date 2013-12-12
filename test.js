//All you need to do to declare the dependency on the angular-json-rpc module is add it to the array when you create a module.

angular.module('test-module-jsonrpc', ['angular-json-rpc'])
.controller('TestController', function ($scope, $http) {
	$scope.name = "cfairweather";
	$scope.team = [];
	$scope.refresh = function(){
		//url, method, parameters, config
	        $http.jsonrpc('url/to/jsonrpc/service', 'methodToCall', [param1, param2, etc])
	        .success(function(data, status, headers, config){
	        	if(data.result.team){
	        		//If service returns team as an array
				$scope.team = data.result.team;
			}else{
				$scope.team = ["Unable to retrieve team members"];
			}
			
		}).error(function(data, status, headers, config){
	
		});
	};
	$scope.refresh();
});
