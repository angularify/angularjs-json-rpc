// json rpc for angular js. JSON-RPC-2.0 compatible.
// spec - http://www.jsonrpc.org/specification

//Created by 0xAX (https://github.com/0xAX/angularjs-json-rpc)
//Modified by cfairweather (https://www.github.com/cfairweather/angularjs-json-rpc)

//By omission of 0xAX, I've added the following permissive license:
//--------------------------------------------------------------------
/*           DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE
                   Version 2, December 2004

Copyright (C) 2004 Sam Hocevar <sam@hocevar.net>

Everyone is permitted to copy and distribute verbatim or modified
copies of this license document, and changing it is allowed as long
as the name is changed.

           DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE
  TERMS AND CONDITIONS FOR COPYING, DISTRIBUTION AND MODIFICATION

 0. You just DO WHAT THE FUCK YOU WANT TO.*/


//Par ommision de 0xAX, j'ai ajouté la license permissive, qui suit:
//--------------------------------------------------------------------
/*             LICENCE PUBLIQUE RIEN À BRANLER
                     Version 1, Mars 2009

Copyright (C) 2009 Sam Hocevar

La copie et la distribution de copies exactes de cette licence sont
autorisées, et toute modification est permise à condition de changer
le nom de la licence.

        CONDITIONS DE COPIE, DISTRIBUTON ET MODIFICATION
              DE LA LICENCE PUBLIQUE RIEN À BRANLER

 0. Faites ce que vous voulez, j’en ai RIEN À BRANLER.
*/

angular.module('angular-json-rpc', []).config([ "$provide", function($provide) {
    
    return $provide.decorator('$http', ['$delegate', function($delegate){
            $delegate.jsonrpc = function(url, method, parameters, config){
                var data = {"jsonrpc": "2.0", "method": method, "params": parameters, "id" : 1};
                return $delegate.post(url, data, angular.extend({'headers':{'Content-Type': 'application/json'}}, config) );
            };
            return $delegate;
        }]);
}]);
