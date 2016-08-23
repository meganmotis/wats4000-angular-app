'use strict';

/**
 * @ngdoc function
 * @name wats4000AngularAppApp.controller:CurrentCtrl
 * @description
 * # CurrentCtrl
 * Controller of the wats4000AngularAppApp
 */
angular.module('wats4000AngularAppApp')
 .controller('CurrentCtrl', function ($scope, $routeParams, current) {
   $scope.cityID = $routeParams.cityID;

   $scope.currentWeather = current.query({
      cityID: $routeParams.cityID
   });
 });
