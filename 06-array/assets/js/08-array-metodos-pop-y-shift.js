const carritos = [
    { nombre: 'Monitor 20 Pulgadas', precio: 500},
    { nombre: 'Televisión 50 Pulgadas', precio: 700},
    { nombre: 'Tablet', precio: 300},
    { nombre: 'Audifonos', precio: 200},
    { nombre: 'Teclado', precio: 50},
    { nombre: 'Celular', precio: 500},
    { nombre: 'Bocinas', precio: 300},
    { nombre: 'Bocinas', precio: 1500},
    { nombre: 'Laptop', precio: 800},
];


// Elimina el primer indice
carritos.pop()

// Elimina el ultimo indice
carritos.shift()



let producto = { nombre: 'Trotadora L600', precio: 3000}
// Agrega un elemento al array al principio
carritos.unshift( producto )
console.log(carritos)
