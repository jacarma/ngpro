'use strict';

angular.module('ngproApp')
  .factory('peliculas', function ($resource, $http) {
  	delete $http.defaults.headers.common['X-Requested-With'];
    return $resource('http://localhost\\:2403/peliculas/:id');
  });
