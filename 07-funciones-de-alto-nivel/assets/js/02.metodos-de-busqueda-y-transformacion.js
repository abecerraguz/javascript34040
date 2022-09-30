
const carrito = [

    { nombre:'Monito de 20 pulgadas',precio:500 },
    { nombre:'Television de 50 pulgadas', precio:700 },
    { nombre:'Tablet', precio:300 },
    { nombre:'Audifonos',precio:200 },
    { nombre:'Teclado',precio:50 },
    { nombre:'Celular',precio:600 },
    { nombre:'Reloj',precio:120 },
    { nombre:'Computador',precio:1000 }

]

console.log('==========================FOREACH============================')
/*
    forEach
    Itera sobre el array y por cada elemento ejecuta la función que enviemos por parámetro, 
    la cual recibe a su vez el elemento del array que se está recorriendo
*/

carrito.forEach( function( element ){
    console.log( element.nombre )
});

console.log('==========================FIND============================')
/*
    FIND
    El método find() recibe una función de comparación por parámetro. 
    Captura el elemento que se está recorriendo y retorna true o false 
    según la comparación ejecutada.
    El método retorna el primer elemento que cumpla con esa condición:

    Nótese que el find() retorna el primer elemento del array que
    cumpla con la condición enviada, de ahí que podemos almacenarlo
    en una variable o usarlo de referencia para otro proceso. 
    Si no hay ninguna coincidencia en el array, el método find retorna undefined.
*/

const resultado = carrito.find( function( producto ){
    return producto.nombre === 'Tablet'
});

// Retorna un objeto
console.log( resultado ); // {nombre: 'Tablet', precio: 300}
console.log('==========================FILTER============================')
/*
    FILTER
    El método filter() recibe, al igual que find(), 
    una función comparadora por parámetro, y retorna un nuevo array 
    con todos los elementos que cumplan esa condición. 
    Si no hay coincidencias, retornará un array vacío.

*/
//producto => producto.precio > 400
let resultadoFilterUno = carrito.filter( function( producto ){
    return producto.precio > 400
});


// producto => producto.nombre === 'Celular'
// let resultadoFilterDos = carrito.filter( producto => producto.nombre === 'Celular' );

let resultadoFilterDos = carrito.filter( function( producto ){
    return producto.nombre === 'Celular'
});
console.log('resultado--->', resultadoFilterUno)
console.log('resultado--->', resultadoFilterDos)

console.log('==========================SOME============================')
/*
    SOME
    El método some() funciona igual que el find() 
    recibiendo una función de búsqueda. 
    En vez de retornar el elemento encontrado, some() 
    retorna true o false según el resultado de la iteración de búsqueda.

*/
// const existe = carrito.some( producto => producto.nombre === 'Celular' )
const existe = carrito.some( function( producto ){
    return producto.nombre === 'Celular'
})
console.log('Respuesta de si existe un Celular en el carrito', existe)

console.log('==========================MAP============================')
/*

    El método map() crea un nuevo array con todos los elementos del original transformados
    según las operaciones de la función enviada por parámetro. 
    Tiene la misma cantidad de elementos pero los almacenados 
    son el return de la función:

    Map() se utiliza mucho para transformación de arrays.

    Si quisiera aumentar el precio de todos los cursos en este ejemplo, 
    puedo mapear y retornar una copia de los elementos con el precio modificado:

*/

// carritos.map((element)=>{
//     arr.push(element.nombre)
// })

let largoDeCadaNombre = carrito.map( function( nombres ){
    return nombres.nombre.length
})
console.log( largoDeCadaNombre )



console.log('==========================REDUCE============================')
/*

   El método reduce() nos permite obtener un único valor tras iterar sobre el array. 
   Funciona como un método que resume el array a un único valor de retorno.  

   Ejemplos de aplicación:
   Cuando queremos acumular la suma de alguna propiedad de los elementos,
   O cuando deseamos obtener algún resultado general sobre todo el array.

   El primero es la función que ordena qué queremos resumir del array. 
   Recibe un parámetro que funciona como acumulador, y el elemento del array que iteramos.

   El segundo es el valor inicial del acumulador. 

*/


let total = carrito.reduce(( valorAnterior, valorActual) => valorAnterior+valorActual.precio,0 )
console.log('Salida valor totalDos-->', total )



console.log('========================== SORT ============================')
/*

    El método sort() nos permite reordenar un array según un criterio que definamos.
    Recibe una función de comparación por parámetro que, a la vez, recibe dos elementos del array.
    La función retorna un valor numérico (1, -1, 0) que indica qué elemento se posiciona antes o después.

    CUIDADO ⚠
    Este método es destructivo, es decir, modifica el array sobre el cual se llama. 

    ORDEN DE NUMERO
    Para ordenar números, basta con restar uno al otro, 
    y el orden indica si será ordenado de forma ascendente o descendente:

    ORDEN DE STRING
    Para ordenar un array por algún string, debemos definir una función comparadora que retorne un valor numérico de referencia, 
    según queramos el orden ascendente o descendente:

*/

// POR NUMERO
// const datosFiltrados = carrito.sort( ( a, b ) => b.confirmed-a.confirmed )
// DE MAYOR A MENOR


carrito.sort( function( a, b ){
    return  b.precio - a.precio
})

// POR STRING
carrito.sort((a, b) => {
    if (  a.nombre.toLowerCase() > b.nombre.toLowerCase() ){
            return 1;
    }

    if ( a.nombre.toLowerCase() < b.nombre.toLowerCase() ){
            return -1;
    }
    
    // a es igual a b
        return 0;
})

console.log(carrito)

