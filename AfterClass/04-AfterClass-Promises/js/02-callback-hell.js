/*  ====INICIO PASO UNO
    const paises = [];

    function nuevoHero(pais, callback) {

    }

    function mostrarHeroes() {

    }

    function iniciarCallbackHell() {

    }

    iniciarCallbackHell();
*/


/*  ====INICIO PASO DOS

    const heroes = [];

    //DOS DOS
    function nuevoHero( hero , callback) {
        heroes.push(hero);
        console.log(`Agregado: ${hero}`)
        callback();
    }

    //DOS TRES
    function mostrarheroes() {
        //Mostramos con un console.log
        console.log(heroes)
    }

    // DOS UNO
    function iniciarCallbackHell() {
        setTimeout(() => {
            // le pasamos nuestro callback
            nuevoHero( 'Superman', mostrarheroes )
        }, 3000);
    }

    iniciarCallbackHell();

*/


/*  ====INICIO PASO TRES

    const heroes = [];


    function nuevoHero( hero , callback) {
        heroes.push(hero);
        console.log(`Agregado: ${hero}`)
        callback();
    }


    function mostrarheroes() {
        //Mostramos con un console.log
        console.log(heroes)
    }

    // TRES UNO
    // Agregamos un nuevo setTimeOut bajo nuevoPais
    function iniciarCallbackHell() {
        setTimeout(() => {
            // le pasamos nuestro callback
            nuevoHero( 'Aquaman', mostrarheroes )
            setTimeout(() => {
                 nuevoHero( 'Spiderman', mostrarheroes )
                setTimeout(() => {
                     nuevoHero( 'Batman', mostrarheroes )
                }, 3000);
            }, 3000);
        }, 3000);
    }


    iniciarCallbackHell();
    
*/


const heroes = [];


function nuevoHero( hero , callback) {
    heroes.push(hero);
    console.log(`Agregado: ${hero}`)
    callback();
}


function mostrarheroes() {
    //Mostramos con un console.log
    console.log(heroes)
}

// TRES UNO
// Agregamos un nuevo setTimeOut bajo nuevoPais
function iniciarCallbackHell() {
    setTimeout(() => {
        // le pasamos nuestro callback
        nuevoHero( 'Aquaman', mostrarheroes )
        setTimeout(() => {
             nuevoHero( 'Spiderman', mostrarheroes )
            setTimeout(() => {
                 nuevoHero( 'Batman', mostrarheroes )
            }, 3000);
        }, 3000);
    }, 3000);
}


iniciarCallbackHell();


