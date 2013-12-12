
//This example uses dependency injection, which is minification safe!

//All you need to do to declare the dependency on the angularjs-json-rpc module is add it to the array when you create a module.

angular.module('test-module-jsonrpc', ['angularjs-json-rpc'])
.controller('TestController', ['$scope', '$http' , function (scope, $http) {
	scope.name = "cfairweather";
	scope.team = [];
	scope.refresh = function(){
		//url, method, parameters, config
	        $http.jsonrpc('url/to/jsonrpc/service', 'methodToCall', [param1, param2, etc])
	        .success(function(data, status, headers, config){
	        	if(data.result.success){
				scope.team = data.result.team;
			}else{
				scope.team = ["Unable to retrieve team members"];
			}
			
		}).error(function(data, status, headers, config){
	
		});
	};
	scope.refresh();
}]);  
