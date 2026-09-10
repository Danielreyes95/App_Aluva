/* =========================================================
   ALUVA
   JavaScript personalizado
   Evaluación N°3 - Diseño Web
   ========================================================= */

document.addEventListener('DOMContentLoaded', function () {

    'use strict';


    /* =====================================================
       FORMULARIO DE CONTACTO
       ===================================================== */

    var formulario = document.getElementById('form-contacto');


    /*
     * Solo ejecuta la validación si el formulario existe.
     * Esto evita errores de JavaScript.
     */
    if (formulario) {

        var nombre = document.getElementById('nombre');
        var correo = document.getElementById('correo');
        var asunto = document.getElementById('asunto');
        var mensaje = document.getElementById('mensaje');

        var errorNombre = document.getElementById('error-nombre');
        var errorCorreo = document.getElementById('error-correo');
        var errorAsunto = document.getElementById('error-asunto');
        var errorMensaje = document.getElementById('error-mensaje');

        var resultado =
            document.getElementById('resultado-formulario');


        /* =================================================
           VALIDAR NOMBRE
           ================================================= */

        function validarNombre() {

            var valor = nombre.value.trim();


            if (valor === '') {

                errorNombre.textContent =
                    'Por favor, ingresa tu nombre.';

                nombre.classList.add('campo-error');
                nombre.classList.remove('campo-correcto');

                return false;
            }


            if (valor.length < 3) {

                errorNombre.textContent =
                    'El nombre debe contener al menos 3 caracteres.';

                nombre.classList.add('campo-error');
                nombre.classList.remove('campo-correcto');

                return false;
            }


            errorNombre.textContent = '';

            nombre.classList.remove('campo-error');
            nombre.classList.add('campo-correcto');

            return true;
        }


        /* =================================================
           VALIDAR CORREO
           ================================================= */

        function validarCorreo() {

            var valor = correo.value.trim();

            var expresionCorreo =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


            if (valor === '') {

                errorCorreo.textContent =
                    'Por favor, ingresa tu correo electrónico.';

                correo.classList.add('campo-error');
                correo.classList.remove('campo-correcto');

                return false;
            }


            if (!expresionCorreo.test(valor)) {

                errorCorreo.textContent =
                    'Ingresa un correo electrónico válido.';

                correo.classList.add('campo-error');
                correo.classList.remove('campo-correcto');

                return false;
            }


            errorCorreo.textContent = '';

            correo.classList.remove('campo-error');
            correo.classList.add('campo-correcto');

            return true;
        }


        /* =================================================
           VALIDAR ASUNTO
           ================================================= */

        function validarAsunto() {

            if (asunto.value === '') {

                errorAsunto.textContent =
                    'Selecciona el motivo de tu consulta.';

                asunto.classList.add('campo-error');
                asunto.classList.remove('campo-correcto');

                return false;
            }


            errorAsunto.textContent = '';

            asunto.classList.remove('campo-error');
            asunto.classList.add('campo-correcto');

            return true;
        }


        /* =================================================
           VALIDAR MENSAJE
           ================================================= */

        function validarMensaje() {

            var valor = mensaje.value.trim();


            if (valor === '') {

                errorMensaje.textContent =
                    'Por favor, escribe tu consulta.';

                mensaje.classList.add('campo-error');
                mensaje.classList.remove('campo-correcto');

                return false;
            }


            if (valor.length < 10) {

                errorMensaje.textContent =
                    'El mensaje debe contener al menos 10 caracteres.';

                mensaje.classList.add('campo-error');
                mensaje.classList.remove('campo-correcto');

                return false;
            }


            errorMensaje.textContent = '';

            mensaje.classList.remove('campo-error');
            mensaje.classList.add('campo-correcto');

            return true;
        }


        /* =================================================
           EVENTOS BLUR
           ================================================= */

        nombre.addEventListener('blur', validarNombre);

        correo.addEventListener('blur', validarCorreo);

        asunto.addEventListener('blur', validarAsunto);

        mensaje.addEventListener('blur', validarMensaje);


        /* =================================================
           EVENTO SUBMIT
           ================================================= */

        formulario.addEventListener('submit', function (evento) {

            /*
             * Evita que el formulario recargue la página.
             */
            evento.preventDefault();


            var nombreValido = validarNombre();
            var correoValido = validarCorreo();
            var asuntoValido = validarAsunto();
            var mensajeValido = validarMensaje();


            if (
                nombreValido &&
                correoValido &&
                asuntoValido &&
                mensajeValido
            ) {

                resultado.innerHTML =
                    '<div class="formulario-exito">' +
                    'Consulta validada correctamente. ' +
                    'Gracias por contactar a ALUVA.' +
                    '</div>';


                /*
                 * Limpiar formulario.
                 */
                formulario.reset();


                /*
                 * Eliminar estilos de validación.
                 */
                nombre.classList.remove(
                    'campo-correcto',
                    'campo-error'
                );

                correo.classList.remove(
                    'campo-correcto',
                    'campo-error'
                );

                asunto.classList.remove(
                    'campo-correcto',
                    'campo-error'
                );

                mensaje.classList.remove(
                    'campo-correcto',
                    'campo-error'
                );

            } else {

                resultado.innerHTML = '';

            }

        });

    }



    /* =====================================================
       NAVEGACIÓN
       ===================================================== */

    var enlacesMenu =
        document.querySelectorAll(
            '.navbar .nav-link[href^="#"]'
        );

    var secciones =
        document.querySelectorAll(
            '#inicio, ' +
            '#nosotros, ' +
            '#productos, ' +
            '#testimonios, ' +
            '#contacto'
        );


    /* =====================================================
       MARCAR SECCIÓN ACTIVA
       ===================================================== */

    function actualizarMenuActivo() {

        var posicionScroll =
            window.scrollY + 160;

        var seccionActual = 'inicio';


        secciones.forEach(function (seccion) {

            if (
                posicionScroll >= seccion.offsetTop
            ) {

                seccionActual = seccion.id;

            }

        });


        enlacesMenu.forEach(function (enlace) {

            var item =
                enlace.closest('.nav-item');


            if (!item) {
                return;
            }


            item.classList.remove('active');


            if (
                enlace.getAttribute('href') ===
                '#' + seccionActual
            ) {

                item.classList.add('active');

            }

        });

    }


    window.addEventListener(
        'scroll',
        actualizarMenuActivo
    );


    actualizarMenuActivo();



    /* =====================================================
       CERRAR MENÚ EN CELULAR
       ===================================================== */

    enlacesMenu.forEach(function (enlace) {

        enlace.addEventListener('click', function () {

            var menu =
                document.getElementById(
                    'navbarNavDropdown'
                );


            /*
             * Solo se ejecuta en pantallas pequeñas.
             */
            if (
                menu &&
                window.innerWidth < 992 &&
                menu.classList.contains('show')
            ) {

                /*
                 * Bootstrap 4 usa jQuery.
                 */
                if (
                    typeof jQuery !== 'undefined'
                ) {

                    jQuery(menu).collapse('hide');

                }

            }

        });

    });

});