/**
==============FUNCIONES=============
    Una función es una agrupación reutilizable
    de un conjunto de instrucciones.
*/
//ECMA5
function caculadora(){
   console.log('Hola soy una calculador');
   console.log('Hola si soy yo');
   return 'Hola soy realmente una calculadora';
}

// console.log(caculadora());

function retornaNum(){
    return 3
}

// Se puede asignar una funcion a una variable
// var salidaNumber = retornaNum()
// console.log(salidaNumber)

//ECMA 6
let retornaNum = () => 3

console.log(retornaNum());