'use strict';

describe('Peliculas', function() {

    beforeEach(function() {
        browser().navigateTo('/#/peliculas');
    });

    describe('Listado', function() {
        it('Al principio debe mostrar dos resultados', function() {
            expect(repeater('.pelicula').count()).toEqual(2);
        });

        it('La busqueda de Wach solo debe mostrar un resultado', function() {
            input('search').enter('Wach');
            expect(repeater('.pelicula').count()).toEqual(1);
        });
    });

});