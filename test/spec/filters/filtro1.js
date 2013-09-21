'use strict';

describe('Filter: filtro1', function () {

  // load the filter's module
  beforeEach(module('ngproApp'));

  // initialize a new instance of the filter before each test
  var filtro1;
  beforeEach(inject(function ($filter) {
    filtro1 = $filter('filtro1');
  }));

  it('should return the input prefixed with "filtro1 filter:"', function () {
    var text = 'angularjs';
    expect(filtro1(text)).toBe('filtro1 filter: ' + text);
  });

});
