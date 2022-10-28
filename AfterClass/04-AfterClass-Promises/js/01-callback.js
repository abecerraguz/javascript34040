/*
    SUPONGAMOS 
    Por ejemplo, supongamos que estamos descargando un listado de clientes y es lo que yo estoy descargando.
    Los últimos diez clientes se agrega uno nuevo en ese momento en el que yo ya comencé a descargar y se
    agrega ese nuevo cliente no va a ser parte ya de mi descarga?
    No, porque yo ya comencé a descargar ese listado de clientes.
    Para eso son útiles los callbacks.
*/

// Listado de paises
const heroes = ['Superman', 'Aquaman', 'Spiderman', 'Batman', 'Linterna Verde', 'Catwoman'];

// PASO TRES
// Un nuevo pais se agrega despues de 2 segundos...
function nuevoHero( hero, callback) {
    setTimeout( () =>  {
        heroes.push(hero);
        callback();
    }, 2000  ); // Pero el segundo ya paso, y se agrega uno nuevo, ejecutamos el callback para que se vuelva a llamar la función
}




// Paso uno 
// PASO UNO crear la funcion que me va a mostrar los paises
// Esto nos nosrara los paises que se realizan en la la descarga
function mostrarHeroes() {
    setTimeout(  () =>  {
        heroes.forEach( hero =>  {
            console.log( hero )
        });
    }, 1000 ); // Después de un segundo obtenemos los paises...
}

// PASO DOS ejecutamos la funcion
// Despues de un segundo muestra los paises 
// La pregunta es que sucede si en ese momento se actualiza en la base 
// de datos un pais mas 
// cometamos la linea para crear nuestro callback

// PASO TRES comentar la funcion que descarga todo y luego creamos nuestro callback
mostrarHeroes(); // Opcional


// PASO 4
// Agregar nuevo pais
nuevoHero('Flash', mostrarHeroes); // mostrarPaises es el callback, una vez agregado alemania se va a ejecutar esa linea...