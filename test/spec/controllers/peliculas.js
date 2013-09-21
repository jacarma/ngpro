'use strict';

describe('Controller: PeliculasCtrl', function () {

  // load the controller's module
  beforeEach(module('ngproApp'));

  var PeliculasCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PeliculasCtrl = $controller('PeliculasCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
