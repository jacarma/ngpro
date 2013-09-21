'use strict';

angular.module('ngproApp')
  .filter('filtro1', function () {
    return function (input) {
      return 'filtro1 filter: ' + input;
    };
  });
