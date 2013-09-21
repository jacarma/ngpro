'use strict';

describe('Controller: Controlador1Ctrl', function () {

  // load the controller's module
  beforeEach(module('ngproApp'));

  var Controlador1Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Controlador1Ctrl = $controller('Controlador1Ctrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
