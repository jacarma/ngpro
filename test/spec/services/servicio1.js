'use strict';

describe('Service: servicio1', function () {

  // load the service's module
  beforeEach(module('ngproApp'));

  // instantiate service
  var servicio1;
  beforeEach(inject(function (_servicio1_) {
    servicio1 = _servicio1_;
  }));

  it('should do something', function () {
    expect(!!servicio1).toBe(true);
  });

});
