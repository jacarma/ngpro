'use strict';

angular.module('ngproApp', ['ngResource'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/controlador1', {
        templateUrl: 'views/controlador1.html',
        controller: 'Controlador1Ctrl'
      })
      .when('/peliculas', {
        templateUrl: 'views/peliculas.html',
        controller: 'PeliculasCtrl'
      })
      .when('/peliculas/:id', {
        templateUrl: 'views/pelicula.html',
        controller: 'PeliculaCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
