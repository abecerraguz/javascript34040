/**
    El método splice() permite eliminar uno o varios elementos 
    de un array en cualquier posición. Funciona con 2 parámetros: 
    el primero es el índice donde se ubica el método para trabajar, 
    y el segundo es la cantidad de elementos a eliminar desde esa posición.
 */

const nombres = [ 'Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa' ];
nombres.splice(1, 2)

console.log(nombres)
// ['Rita', 'Ana', 'Vanesa']


