'use strict';

angular.module('ngproApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma',
      'Livereload',
      'Javi5'
    ];
    var mivariable = 5;
    if (mivariable === 0){
      return;
    }
  });
