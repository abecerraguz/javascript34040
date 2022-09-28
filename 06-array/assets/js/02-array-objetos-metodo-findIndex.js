// El Segundo Array Method es findIndex...

const meses =['Enero','Febrero','Marzo','Abril','Mayo','Junio']
            //   0        1        2       3      4      5

const carrito =[

    {nombre:'Monito de 20 pulgadas',precio:500},
    {nombre:'Television de 50 pulgadas', precio:700},
    {nombre:'Tablet', precio:300},
    {nombre:'Audifonos',precio:200},
    {nombre:'Teclado',precio:50},
    {nombre:'Celular',precio:600},
    {nombre:'Reloj',precio:120},
    {nombre:'Computador',precio:1000}

]

meses.forEach( ( mes, index ) => {
    if(mes === 'Abril'){
        console.log(`${mes} es el indice ${ index }`)
    }
})

const indice = meses.findIndex( mes => mes === 'Abril' );
console.log('Indice de Abril es ', indice)