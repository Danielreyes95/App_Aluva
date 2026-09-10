// Cube Portfolio - Productos ALUVA
(function ($, window, document, undefined) {

    'use strict';

    // Inicializar CubePortfolio
    $('#js-grid-mosaic-flat').cubeportfolio({

        // Filtros
        filters: '#js-filters-mosaic-flat',

        // Cambiamos mosaico por una grilla uniforme
        layoutMode: 'grid',

        // Distribución responsive
        mediaQueries: [
            {
                width: 1500,
                cols: 4
            },
            {
                width: 1100,
                cols: 3
            },
            {
                width: 800,
                cols: 2
            },
            {
                width: 480,
                cols: 1,
                options: {
                    gapHorizontal: 15,
                    gapVertical: 15
                }
            }
        ],

        // Mostrar todos inicialmente
        defaultFilter: '*',

        // Animación al filtrar
        animationType: 'quicksand',

        // Separación entre productos
        gapHorizontal: 22,
        gapVertical: 22,

        // Ajuste responsive
        gridAdjustment: 'responsive',

        // Efecto al pasar el mouse
        caption: 'fadeIn',

        // Entrada del contenido
        displayType: 'fadeIn',
        displayTypeSpeed: 100,

        // Lightbox
        lightboxDelegate: '.cbp-lightbox',
        lightboxGallery: true,
        lightboxTitleSrc: 'data-title',

        lightboxCounter:
            '<div class="cbp-popup-lightbox-counter">{{current}} de {{total}}</div>'
    });

})(jQuery, window, document);