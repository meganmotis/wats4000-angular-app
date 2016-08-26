'use strict';

/**
 * @ngdoc function
 * @name wats4000AngularAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the wats4000AngularAppApp
 */
angular.module('wats4000AngularAppApp')
 .controller('MainCtrl', function ($scope, citysearch, $localStorage) {
    $scope.citiesFound = citysearch.find();
    $scope.storage = $localStorage;

    $scope.findCities = function(){
        $scope.citiesFound = citysearch.find({
            query: $scope.location
        });
        $scope.searchQuery = $scope.location;
    };
  });
