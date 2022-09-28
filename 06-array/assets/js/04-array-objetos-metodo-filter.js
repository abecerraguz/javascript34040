// Otro Array Method es filter...

// Filter va a crearte un arreglo basado en un parametro que es evaluado..

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

// Filter retorna un nuevo Array
// Filter retorna un nuevo array
let resultado = carrito.filter( producto => producto.precio > 400 );
let resultado2 = carrito.filter( producto => producto.nombre === 'Celular' );

console.log('resultado--->', resultado)
console.log('resultado--->', resultado2)

