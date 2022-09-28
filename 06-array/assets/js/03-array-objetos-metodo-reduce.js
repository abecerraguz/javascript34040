/*
    Otro Array Method es .reduce

    Si buscas la definición de que es una función reduce te dirá 
    que es una función reductora...
    
    Pero basicamente es tomar una gran cantidad de datos y entregar un resultado..

    Supongamos que tenemos nuestro carrito de compras y queremos
    decirle al usuario cuanto es el total a pagar...

*/

const meses =['Enero','Febrero','Marzo','Abril','Mayo','Junio']

const carrito =[

    {nombre:'Monito de 20 pulgadas',precio:500},
    {nombre:'Television de 50 pulgadas', precio:700},
    {nombre:'Tablet', precio:300},
    {nombre:'Audifonos',precio:200},
    {nombre:'Teclado',precio:50},
    {nombre:'Celular',precio:600},
    {nombre:'Reloj',precio:120},
    {nombre:'Computador',precio:1000}

]

let total = 0;
carrito.forEach( (producto) => {
    total += producto.precio
})
console.log(total)

// El método reduce() ejecuta una función 
// reductora sobre cada elemento de un array, 
// devolviendo como resultado un único valor.

let resultado = carrito.reduce( ( valorAnterior, valorActual, indice, vector ) => valorAnterior+valorActual.precio, 0)
console.log('Resultado con reduce', resultado )

let numeros = [0,1,2,3,4] 

numeros.reduce(function( valorAnterior, valorActual, indice, vector ){
    //console.log(valorAnterior)
    // console.log(valorActual)
    // console.log(indice)
    //console.log(vector)
    console.log( `${valorAnterior} + ${valorActual} = ${valorAnterior + valorActual}` )
    return valorAnterior + valorActual;
});