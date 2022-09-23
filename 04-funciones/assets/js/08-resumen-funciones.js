// FUNCION EN ECMA5
// VARIABLE GLOBAL
console.log('=============== FUNCION EN ECMA5 Y CONCEPTO DE SCOPE ==============')

let saludar = 'Hola buenos dias mundo'

function saludarUno(){
    // VARIABLE LOCAL SU SCOPE O AMBITO ESTA DENTRO DE LA FUNCION
    let saludar = "Hola mundo con Javascript";
    return saludar;
}

function saludarDos(){
    // VARIABLE LOCAL SU SCOPE O AMBITO ESTA DENTRO DE LA FUNCION
    let saludar = "Hola mundo con Javascript scope local"
    return saludar; 
}

console.log( saludarUno() );
console.log( saludarDos() );

// Si hacemos referencia de la variable local fuera del scope 
// esto nos dara saludar is not defined
// Pero si la deinimos de forma global esta nos dara el valor 
// de su asignación gloabal
console.log('Salida de saludar', saludar )


console.log('=================== PARAMETROS Y PARAMETROS POR DEFECTO =======================')
// PARAMETROS
function areaDeUnTriangulo( base=100, altura=200 ){
    // (Base * Altura) / 2
    let area = ( base*altura )/2
    return area
}
// Se llama a la funcion con argumentos para los parametros
console.log('========== Resultado de la función con argumentos ======')
console.log( areaDeUnTriangulo( 400,100 ) );
// Se llama a la funcion sin argumentos esta toma los valores por defecto 
// de la funcion
console.log('========== Resultado de la función sin argumentos valores por defecto ======')
console.log( areaDeUnTriangulo() );

console.log('=================== FUNCION INTEGRACION CON PROMPT SIN RETURN =======================')

let num1 = parseInt( prompt("Ingrese la base del triangulo") );
let num2 = parseInt( prompt("Ingrese la altura del triangulo") );

let mensaje;

function verificar( numero1, numero2 ){
    
    if( !isNaN( numero1 ) && !isNaN( numero2 ) ){
        document.write( '<div class="alert alert-danger" role="alert">'+areaDeUnTriangulo( numero1, numero2 )+'</div>' );
        console.log('Es un numero')
    }else{
        mensaje = alert(`Debes ingresar sólo numeros`)
        num1 = parseInt( prompt("Ingrese la base del triangulo") );
        num2 = parseInt( prompt("Ingrese la altura del triangulo") );
        verificar( num1, num2 );
    }
}

verificar( num1, num2 );

console.log('=================== FUNCION ANONIMA ECMA5 CALLBACK =======================')

var funcionAnonima = function( numero1, numero2 ){
    let operacion = numero1+numero2
    return operacion
}

function resultado( callback, a, b ){
    return callback( a, b )
}

console.log( resultado( funcionAnonima, 10, 10 ));

console.log('=================== FUNCION DE FLECHA ECMA6 =======================')
// P = 2· a + 2· b
const perimetroDeUnRectangulo = ( ladoA,ladoB ) => {
    let perimetro = (2*ladoA)+(2*ladoB)
    return perimetro
}

//const perimetroDeUnRectangulo = ( ladoA, ladoB ) => ( 2*ladoA )+( 2*ladoB );



console.log( perimetroDeUnRectangulo(300,200) );