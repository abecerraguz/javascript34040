console.log('====================FUNCIONES DE ORDEN SUPERIOR====================')



/**
    Javascript es un lenguaje imperativo con aspectos funcionales, que es un subparadigma del
    paradigma declarativo. 

    Antes de adentrarnos en la teoría de la programación funcional,
    veremos un par de características de las funciones en JavaScript que son necesarias para
    entender a cabalidad la teoría.
 */

console.log('================= CUIDADANAS DE PRIMERA CLASE ========================')
// Como ya saben, las funciones en JavaScript pueden declararse de dos formas:

function formaDeclaracion (a, b, c){
   
}

var formaExpresion = function (a, b, c) {
    
}
/*

    Cuando se usa la primera forma, se dice que es una declaración de función y cuando se usa
    la segunda, se le llama una expresión de función o lambda .

    Una función lambda es aquella que se utiliza como argumento o valor de retorno para otra
    función, generalmente como función anónima. A modo general, las funciones lambda son
    aquellas utilizadas como datos.

*/
console.log('================= FUNCIONES POR PARAMETRO Y RETORNO DE FUNCIONES ========================')
// PASO 3 
function aritmeticaSumar ( a, b ) {
    return a + b;
}

function aritmeticaRestar ( a, b ) {
    return a - b;
}

function aritmeticaMultiplicar ( a, b ) {
    return a * b;
}

function aritmeticaDividir ( a, b ) {
    return a / b;
}

// PASO 2 parámetro de tipo función
function operatoria ( a, b, operacion ) {
    console.log('Estoy en sumar Salida de a y b -->', a, b)
    console.log('Estoy en sumar Salida de operacion -->', operacion)
    return operacion( a, b );
}

// PASO 1 función como valor de retorno 
function operacionAritmetica ( operacion ) {
    // devuelve una función que recibe los valores de a y b,
    // y devuelve el resultado de la suma según el cálculo
    // efectuado por el sumador
    return function ( a, b ) {
        console.log('Salida de a y b --->', a, b )
        console.log('salida de operacion --->', operacion)
        return operatoria( a, b, operacion );
    }
}

// Esta función, al llamarse, "levanta" la función sumar, es decir, devuelve una función sumar
// con el sumador ya cargado, que solo requiere los valores de a y b:

let sumarNumeros = operacionAritmetica( aritmeticaSumar );
let restarNumeros = operacionAritmetica( aritmeticaRestar );
let multiplicarNumeros = operacionAritmetica( aritmeticaMultiplicar );
let dividirNumeros = operacionAritmetica( aritmeticaDividir );

console.log( sumarNumeros( 2 , 3 ) )  // 5
console.log( restarNumeros( 2 , 3 ) ) // -1
console.log( multiplicarNumeros( 2 , 3 ) ) // 6
console.log( dividirNumeros( 2 , 3 ) ) // 0.6666666666666666


console.log('================= EJERCICO DE EJEMPLO ========================')

// EJERCICO DEMOSTRACION

let calcular = document .getElementById( 'calcular' );
let resultado = document .getElementById( 'resultado' );

calcular.addEventListener( 'click' , calculadora );

function calculadora( event ) {

    event.preventDefault();

    let num1 = parseInt( document.getElementById("num1").value );
    let num2 = parseInt( document.getElementById("num2").value );
    let operador = document.getElementById("operador").value;

    if ( num1 && num2 ) {
        if (operador == "sumar") {
            resultado.innerHTML = ` ${operador} es igual a ${operacion(num1, num2, sumar)} `;
        } else {
            resultado.innerHTML = ` ${operador} es igual a ${operacion(num1, num2, restar)} `;
        }
    } else {
        alert("Ingrese un valor numérico en ambas casillas");
    }
}

function operacion ( num1, num2, opera) {
    return opera(num1,num2);
}

function restar (num1,num2){
    return num1-num2;
}

function sumar (num1,num2){
    return num1+num2;
}

