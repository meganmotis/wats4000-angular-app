'use strict';

/**
 * @ngdoc service
 * @name wats4000AngularAppApp.current
 * @description
 * # current
 * Factory in the wats4000AngularAppApp.
 */
angular.module('wats4000AngularAppApp')
  .factory('current', function ($resource) {
    // Service logic
    // ...

    // Public API here
    return $resource('http://api.openweathermap.org/data/2.5/weather?q=:location&units=imperial&APPID=e4ee4b46e97613602c84924cc1b9f629', {}, {
      query: {
        method: 'GET',
	params:{
	  location: 'Seattle,us'
	},
	isArray:false
      }
    });
  });
