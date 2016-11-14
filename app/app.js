'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [])
    .controller('Ctrl',function($scope) {
      $scope.items = ['hot', 'cold'];
    })
    .directive("hot",function(){
      return {
        restrict:'E',
        link:function(scope,elem,attrs){
          console.log("hot-dir");
        },
        template:'HOTTTT'
      }
    })
    .directive("cold",function(){
      return {
        restrict:'E',
        link:function(scope,elem,attrs){
          console.log("cold-dir");
        },
        template:'COLDDD'
      }
    })
    .directive("dynAmic",function($compile){
      return {
        restrict:'E',
        link:function(scope,elem,attrs){
          elem.html('<'+scope.typeitem+'></'+scope.typeitem+'>');
          $compile(elem.contents())(scope);
        },
        scope:{
          typeitem:'='
        }
      }
    });