console.log('=================== ARRAY BASICOS =======================')
/*
======= ARRAY BASICOS ====================================
1. Creación de array básicos
=========================================================================
*/
let nombre = 'Juan Perez';
let nombres = ['Jorge Rojas','Pedro Fernandez','Pedro Torres', 46, true];
let lenguajes = new Array('PHP', 'JS','Vue', 'Java');


console.log(nombre);
console.log(lenguajes);
console.log(nombres);
// Sacar un dato de un array
console.log(nombres[1]) //Pedro Fernandez
// Largo de un array
console.log(lenguajes.length); // Largo 4


console.log('=================== ARRAY AVANZADOS =======================')
/*
=======ARRAY AVANZADOS====================================
1. Creación de array Avanzados
=========================================================================
*/

document.write('<h2 class="container">Lista de lenguajes de programación 2021</h2>')
document.write('<div class="container">')
document.write('<ul class="container list-group">')
        for(let i = 0; i < lenguajes.length; i++){
            console.log('El dato de i', i)
            document.write(`<li>${lenguajes[i]}</li>`)
        }
document.write('</ul>')
document.write('</div>')

console.log('=================== ITERAR ARRAY FOREACH =======================')
document.write('<ul class="container list-group">')
lenguajes.forEach(( elemento, indice, arr )=>{
    console.log('Dato del elemento--->',elemento);
    // console.log('Dato del indice--->',indice);
    // console.log('Arreglo--->',arr)
})

document.write('</ul>')