angular.module('angular-json-rpc', []);
//
// json rpc for angular js. JSON-RPC-2.0 compatible.
// spec - http://www.jsonrpc.org/specification
//
var jsonRpc = angular.module('angular-json-rpc', []).factory("jsonRpc", ['$http', function($http) {
	this.version = "2.0";

	this.url = null;

	//
	// setup rpc
	//
	this.setup = function(params){
		// check params
		check_params(params);
		this.url = params.url;
		return this;
	}


	success = function(data, status, headers, config){

	}

	error = function(data, status, headers, config){

	}

	//
	// json-rpc request
	//
	this.request = function(method, options){
		if(options === undefined) 
        	options = { id: 1 };

        if (options.id === undefined)
        	options.id = 1;

        // make request
        var bodyRequest = JSON.stringify({"jsonrpc": this.version, "method": method, "params": options.params, "id" : options.id});
        var headers = {'Content-Type': 'application/json'};
        $http({'url': this.url, 'method': 'POST', 'data' : bodyRequest, 'headers': headers})
        	.success(function (data, status, headers, config){
        		return data;
        	}).error(function (data, status, headers, config) {
        		return data;
        	});
        // return
        return true;
	}

	//
	// Check params
	//
	check_params = function(params){
		if (params == undefined){
			throw("Wrong params");
		}

		if (typeof(params.url) !== 'string' || params.url == '')
			throw("Wrong url parameter");
	}

	return this;

}]);