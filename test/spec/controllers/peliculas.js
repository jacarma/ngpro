'use strict';

describe('Controller: PeliculasCtrl', function () {

  // load the controller's module
  beforeEach(module('ngproApp'));

  var PeliculasCtrl,
    scope, $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$httpBackend_, $controller, $rootScope) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('http://localhost:2403/peliculas').
          respond([{"nombre":"El Club de la Lucha","director":"David Fincher","puntuacion":5,"favorita":1,"id":"e1e5d51724f7c893"},{"director":"Hermanos Wachowski","favorita":1,"nombre":"Matrix","puntuacion":4,"id":"12b80499162fe95a"}]);
    scope = $rootScope.$new();
    PeliculasCtrl = $controller('PeliculasCtrl', {
      $scope: scope
    });
  }));

  it('should request the peliculas list', function () {
    $httpBackend.flush();
    expect(scope.peliculas.length).toBe(2);
  });
});
