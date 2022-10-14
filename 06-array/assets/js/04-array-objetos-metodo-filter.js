// Otro Array Method es filter...

// Filter va a crearte un arreglo basado en un parametro que es evaluado..

const meses =['Enero','Febrero','Marzo','Abril','Mayo','Junio']

const carrito =[

    {id:1,nombre:'Monito de 20 pulgadas',precio:500},
    {id:2,nombre:'Television de 50 pulgadas', precio:700},
    {id:3,nombre:'Tablet', precio:300},
    {id:4,nombre:'Audifonos',precio:200},
    {id:5,nombre:'Teclado',precio:50},
    {id:6,nombre:'Celular',precio:600},
    {id:7,nombre:'Reloj',precio:120},
    {id:8,nombre:'Computador',precio:1000}

]

// Filter retorna un nuevo Array
// Filter retorna un nuevo array
let resultado = carrito.filter( producto => producto.id !== 1 );
let resultado2 = carrito.filter( producto => producto.nombre === 'Celular' );

console.log('resultado--->', resultado)
console.log('resultado--->', resultado2)

