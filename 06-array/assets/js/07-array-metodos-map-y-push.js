
let arr = []

const carritos = [
    { nombre: 'Monitor 20 Pulgadassss', precio: 500},
    { nombre: 'Televisión 50 Pulgadas', precio: 700},
    { nombre: 'Tablet', precio: 300},
    { nombre: 'Audifonos', precio: 200},
    { nombre: 'Teclado', precio: 50},
    { nombre: 'Celular', precio: 500},
    { nombre: 'Bocinas', precio: 300},
    { nombre: 'Bocinas', precio: 1500},
    { nombre: 'Laptop', precio: 800},
];

carritos.map((element)=>{
    arr.push(element.nombre)
})

console.log('Salida de arr',arr)