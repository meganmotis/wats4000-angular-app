'use strict';

/**
 * @ngdoc service
 * @name wats4000AngularAppApp.forecast
 * @description
 * # forecast
 * Factory in the wats4000AngularAppApp.
 */
angular.module('wats4000AngularAppApp')
.factory('forecast', function ($resource) {
  // Service logic
  // ...

  // Public API here
  return $resource('http://api.openweathermap.org/data/2.5/forecast/daily?id=:cityID&cnt=5&units=imperial&APPID=e4ee4b46e97613602c84924cc1b9f629', {}, {
    query: {
      method:'GET',
      params:{
        cityID: '5809844' // Seattle, US
      },
      isArray:false
    }
  });
});
