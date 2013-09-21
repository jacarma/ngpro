'use strict';

angular.module('ngproApp')
  .controller('PeliculasCtrl', function ($scope, peliculas) {
    $scope.peliculas = peliculas.query();
  });
