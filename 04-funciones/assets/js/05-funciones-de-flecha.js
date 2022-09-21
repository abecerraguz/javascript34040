/*
========FUNCIONES DE FLECHA=============
    Los arrow functions son otra forma de declarar funciones
    y fueron agregadas en la versión de ECMA6.
    Busca hacer sintaxis más cortas.

    Identificamos a las funciones flechas como funciones
    anónimas de sintaxis simplificada.
*/

// FUNCION ANONIMA ECMA 5
const aprendiendo = function(){
    console.log('Aprendiendo JS')
}

console.log(aprendiendo())

const aprendiendo = () => {
    console.log('Aprendiendo JS')
}

// MAS SINTESIS
// let aprendiendo = () => console.log('Aprendiendo JS');
// let aprendiendo = () => 5;

console.log(aprendiendo())

console.log('======================================');


let numero = parseInt(prompt('Ingrese un numero',0))
let resultado = 0


const verificar = ( numero ) =>{

    if(numero > 0 ){
        resultado = 'Positivo'
    } else if( numero < 0 ){
        resultado = 'Negativo'
    }else if( numero == 0 ){
        resultado = 'Nulo'
    }else{
        resultado = 'No es un numero'
    }
    return resultado

}

console.log(verificar(numero))

const suma  = (a,b) => a + b
const resta = (a,b) => a - b
//Si una función es una sola línea con retorno y un parámetro puede evitar escribir los ()
const iva   = x => x * 0.21
let precioProducto  = 500
let descuento = 50 
//Calculo el precioProducto + IVA - descuento
let nuevoPrecio = resta(suma(precioProducto, iva(precioProducto)), descuento) 
console.log(nuevoPrecio)





