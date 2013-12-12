AngularJS json rpc
==================

JSON-RPC-2.0 implementation for [AngularJS](http://angularjs.org/).

For Usage see `test.js`.

An example JSFiddle is working here: http://jsfiddle.net/89D4b/1/


Instead of creating a new factory for handling jsonrpc request, this angular module (angular-json-rpc) creates a new shortcut just like $http.get, but is instead $http.jsonrpc;


This code is under [WTFPL](http://www.wtfpl.net/).


Author
========
* Idea by: [0xAX](https://twitter.com/0xAX)
* Changed to decorator by [cfairweather](https://www.github.com/cfairweather)

Example usage:
====
        //url, method, parameters, config
        $http.jsonrpc('url/to/jsonrpc/service', 'methodToCall', [1, 2, 3], {}).success(function(){}).error(function(){});
For more information on callacks, see [$http](http://docs.angularjs.org/api/ng.$http).
