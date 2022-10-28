// De calback hell a promesas
// UNO definimos nuetro array
const heroes = [];

// DOS creamos nuestra promesa
// Esta se centra en la funcion nuevoHero
// nuevoHero ...entonces
// nuevoHeroe ...entonces

const nuevoHero = hero => {
    return new Promise((resolve) => {
        setTimeout(() => {
           heroes.push( hero );
           resolve(`Agregado: ${hero}`)
        }, 3000);
    })
}

// TRES EJECUTAMOS NUESTRA FUNCION
nuevoHero('Aquaman')
    .then( resultado =>{
        console.log(resultado)
        console.log(heroes)
        // Si necesitamos ejecutar nuevamente
        return nuevoHero('Spiderman')
    })
    .then( resultado =>{
        console.log(resultado)
        console.log(heroes)
        return nuevoHero('Batman')
    })
    .then( resultado =>{
        console.log(resultado)
        console.log(heroes)
        return nuevoHero('Flash')
    })

/*
Las promesas hacen referencia a valores que vamn a 
estar en el futuro actualmente o nunca 
*/

