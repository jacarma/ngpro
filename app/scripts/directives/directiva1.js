'use strict';

angular.module('ngproApp')
  .directive('directiva1', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element) {
        element.text('this is the directiva1 directive');
      }
    };
  });
