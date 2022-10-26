

/*

Callbacks
En pocas palabras, un callback (llamada de vuelta) no es más que una función que se pasa
como argumento de otra función, y que será invocada para completar algún tipo de acción.

Ahora bien, hablando desde el contexto asíncrono, un callback representa el: ¿Qué quieres
hacer una vez que tu operación asíncrona termine? Por tanto, es el trozo de código que será
ejecutado una vez que una operación asíncrona notifique que ha terminado. Esta ejecución
se hará en algún momento futuro, gracias al mecanismo que implementa el bucle de
eventos.

Cuando llamamos o ejecutamos una función, normalmente esperamos a que
termine de procesar todas las sentencias que tenga y nos retorne un resultado. Por ende, los
callbacks se utilizan para esperar la ejecución de otros códigos antes de ejecutar el propio.

*/

// ECMA6
const getName = ( callback ) => {
    callback('John Doe')
}


getName( (name) => {
    console.log(name)
}) // output: John Doe

//ECMA5
function getName( callback ) {
    callback('John Doe');
}

function callback(name){
    console.log(name);
}

getName(callback); // John Doe

// Otro ejemplo de Callbacks ECMA 5
const getSquare = ( number, callback ) => {
    callback(number * number)
};

getSquare( 4, result => console.log(result) );
getSquare( 2, result => console.log(result) );
getSquare( 5, result => console.log(result) );
getSquare( 12, result => console.log(result) );


// CALLBACK ANIDADO
const principal = ( number ) => {

    const double = number * 2

    multiply( double, square => {

        calculate25Percent( square, percent => {
            console.log(percent)
        })

    })

}

const multiply = ( number, callback ) => {
    callback( number * number )
};

const calculate25Percent = ( number, callback ) => {
    callback( number * 25 /100 )
};

principal( 5 );