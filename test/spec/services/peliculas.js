'use strict';

describe('Service: peliculas', function () {

  // load the service's module
  beforeEach(module('ngproApp'));

  // instantiate service
  var peliculas;
  beforeEach(inject(function (_peliculas_) {
    peliculas = _peliculas_;
  }));

  it('should do something', function () {
    expect(!!peliculas).toBe(true);
  });

});
