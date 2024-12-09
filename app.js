(function () {
    'use strict';
    var x="hello";
    angular.module('myFirstApp',[])
    .controller('MyFirstController', function($scope){
        $scope.name="Ahmed";
        $scope.sayhello = function(){
            return "hello courserra";
        };
    });
})();