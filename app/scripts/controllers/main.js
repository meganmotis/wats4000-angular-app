'use strict';

/**
 * @ngdoc function
 * @name wats4000AngularAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the wats4000AngularAppApp
 */
angular.module('wats4000AngularAppApp')
  .controller('MainCtrl', function ($scope, current) {
    $scope.current = current.query();
   
    $scope.refreshCurrent = function(){
       $scope.current = current.query({
          location: $scope.location
       });
    };
  });
