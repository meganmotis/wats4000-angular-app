'use strict';

/**
 * @ngdoc function
 * @name wats4000AngularAppApp.controller:ForecastCtrl
 * @description
 * # ForecastCtrl
 * Controller of the wats4000AngularAppApp
 */
angular.module('wats4000AngularAppApp')
  .controller('ForecastCtrl', function ($scope, $routeParams, forecast) {
    $scope.cityID = $routeParams.cityID;

    $scope.forecastData = forecast.query({
        cityID: $routeParams.cityID
    });
  });
