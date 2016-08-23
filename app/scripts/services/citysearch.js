'use strict';

/**
 * @ngdoc service
 * @name wats4000AngularAppApp.citysearch
 * @description
 * # citysearch
 * Factory in the wats4000AngularAppApp.
 */
angular.module('wats4000AngularAppApp')
  .factory('citysearch', function ($resource) {
    // Service logic
    // ...

    // Public API here
    return $resource('http://api.openweathermap.org/data/2.5/find?q=:query&units=imperial&type=like&mode=json&APPID=e4ee4b46e97613602c84924cc1b9f629', {}, {
      find: {
        method: 'GET',
        params: {
          query: 'seattle'
        },
        isArray: false
      }
    });
  });
