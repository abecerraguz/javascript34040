
/*

Quiere decir que estamos creando dos variables, prop1 y prop2, 
donde se almacenan las propiedades con el mismo 
nombre del objeto que referenciamos a la derecha.

let { prop1, prop2 } = objeto

*/

console.clear();
const usuario = {
    nombre: "John Doe",
    edad: 32,
    telefono: {
        cel: 113334444,
        casa: null,
        trabajo: 113325555
    }

}

// let nombre = usuario.nombre
// let edad = usuario.edad

let { nombre, edad, telefono:{ cel,casa,trabajo } } = usuario
console.log(nombre)
console.log(edad)
console.log(casa)
console.log(trabajo)

// ALIAS
console.log('================ALIAS=====================')
const item = {
    item_id: 432,
    product_name: "Some product",
    price_per_unit: 5600
}
const {
    item_id: id,
    product_name: name,
    price_per_unit: price
} = item
console.log(id)
console.log(name)
console.log(price)

console.log('================DESESTRUCTURAR PARAMETROS=====================')
const producto = {
    id: 10,
    nombre: "Curso Javascript",
    precio: 12500
}

// const desestructurar = (item) => {
//     // desestructurando dentro del bloque
//     const {id, nombre} = item
//     console.log(id, nombre)
// }

const desestructurar = ({id,nombre,precio}) => {
    console.log(id, nombre,precio)
}


desestructurar(producto) // 10 Curso Javascript

/*  // Se desestructura
    window.addEventListener('click', ( {x, y} ) => {
        console.log(x, y)
    })
*/

// DESESTRUCTURACION DE ARRAY
console.log('=============================DESESTRUCTURACION DE ARRAY=============================')
const nombres = ["Juan", "Julieta", "Carlos", "Mariela"]
const [a, b] = nombres
// const [,, a, b] = nombres

console.log(a) // "Juan"
console.log(b) // "Julieta"

