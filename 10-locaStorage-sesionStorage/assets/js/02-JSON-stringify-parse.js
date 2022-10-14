if( typeof window === 'object' ){ 

            // INICIO DEL DOMContentLoaded
            window.addEventListener('DOMContentLoaded', () => {

                // Primero creamos nuestro objeto
                var usuario = {

                    nombre: 'Alejandro Becerra',
                    email: 'abcerraguz@gmail.com',
                    web: 'http:www.abecerrafrontend.cl'

                };

                /* 
                Guardamos nuestro objeto, importante para guardar datos estos
                deben ser convertidos a un string si no el objeto quedaria como
                Indefinido. Para esto se utiliza la propiedad JSON.stringfy().
                */

                localStorage.setItem('usuario', JSON.stringify(usuario));


                /*
                Recuperar datos del objeto del LocalStorage.
                Primero hay que parsear el objeto dado que al recuperarlo
                este recupera un string.
                */

                var usuarioJs = JSON.parse(localStorage.getItem('usuario'));

                // Mostramos los usuarios por la consola
                console.log(usuarioJs);

        })
}
