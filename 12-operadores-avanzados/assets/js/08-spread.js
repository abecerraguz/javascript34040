// SPREAD de ARRAYS
console.log('=============================SPREAD de ARRAYS=============================')
const nombresDos = ["Juan", "Julieta", "Carlos", "Mariela"]

// spread ... del array
console.log(...nombresDos) // Juan Julieta Carlos Mariela

// equivalente a:
console.log("Juan", "Julieta", "Carlo", "Mariela")

const numeros = [4, 77, 92, 10, 3, -32, 54, 11]

console.log( Math.max(...numeros) ) // 92

const nombres1 = ["Juan", "Julieta"]
const nombres2 = ["Carlos", "Mariela"]

// spread de los dos arrays dentro de otro
const nombresTres = [...nombres1, ...nombres2]

console.log(nombresTres) // ["Juan", "Julieta", "Carlos", "Mariela"]

// spread del array en un objeto
const nombresObj = {
    ...nombresTres
}

console.log(nombresObj)
// { '0': 'Juan', '1': 'Julieta', '2': 'Carlos', '3': 'Mariela' }

// ======================================Spread de objetos
console.log('=============================SPREAD OBJETOS=============================')
const usuario1 = {
    nombre: "Juan",
    edad: 24,
    curso: "Javascript"
}

// lista todas las propiedades y valores de usuario1 dentro de otro objeto
const usuario2 = {
    ...usuario1
}

console.log(usuario2) // { nombre: 'Juan', edad: 24, curso: 'Javascript' }

const usuario3 = {
    ...usuario1,
    curso: "ReactJS",
    email: "juan@doe.com"
}

console.log(usuario3)
// { nombre: 'Juan', edad: 24, curso: 'ReactJS', email: 'juan@doe.com' }

// Rest parameters
console.log('=============================REST PARAMETERS=============================')


function sumar(...numeros) {
    return numeros.reduce((acc, n) => acc + n, 0)
}

console.log( sumar(4, 2) ) // 6
console.log( sumar(10, 15, 30, 5) ) // 60
console.log( sumar(100, 300, 50) ) // 450

