/* 
Veremos una serie de métodos muy útiles 
cuando se trabaja con arrays y algunos casos de uso
*/

const meses =['Enero','Febrero','Marzo','Abril','Mayo','Junio']

const carrito = [

    {nombre:'Monito de 20 pulgadas',precio:500},
    {nombre:'Television de 50 pulgadas', precio:700},
    {nombre:'Tablet', precio:300},
    {nombre:'Audifonos',precio:200},
    {nombre:'Teclado',precio:50},
    {nombre:'Celular',precio:600},
    {nombre:'Reloj',precio:120},
    {nombre:'Computador',precio:1000}

]

meses.forEach( mes =>{
    if( mes === 'Febrero'){
        console.log('Febrero si existe....')
    }
})

// Retorna true o false
// include para array verifica si existe 
const resultado = meses.includes('Febrero')
console.log('Respuesta de resultado-->', resultado)

// Some retorna
const existe = carrito.some( producto => producto.nombre === 'Celular' )
console.log('Respuesta de si existe', existe)

const existe2 = meses.some( mes => mes === 'Lunes' )
console.log( 'Respuesta de si existe2', existe2 )
