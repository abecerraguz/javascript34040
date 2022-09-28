// FIND crea un arreglo nuevo en base al primer resultado que sea true...

const carritos = [
    { nombre: 'Monitor 20 Pulgadas', precio: 500},
    { nombre: 'Televisión 50 Pulgadas', precio: 700},
    { nombre: 'Tablet', precio: 300},
    { nombre: 'Audifonos', precio: 200},
    { nombre: 'Teclado', precio: 50},
    { nombre: 'Celular', precio: 500},
    { nombre: 'Bocinas', precio: 300},
    { nombre: 'Parlante', precio: 1500},
    { nombre: 'Laptop', precio: 800},
];



carritos.forEach( ( element, index ) => {
    // console.log(element)
    if(element.nombre === 'Bocinas'){
        console.log(element)
    }
})

const resultado = carritos.find( producto => producto.nombre === 'Bocinas');
// Retorna un objeto
console.log(resultado); // { nombre: 'cerezas', cantidad: 5 }
