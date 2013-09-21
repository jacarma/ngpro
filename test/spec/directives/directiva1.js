'use strict';

describe('Directive: directiva1', function () {

  // load the directive's module
  beforeEach(module('ngproApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<directiva1></directiva1>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the directiva1 directive');
  }));
});
