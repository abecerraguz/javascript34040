
// PASO UNO
const aplicarDescuentoComic = new Promise((resolve, reject) => {
    const descuento = true;
    if (descuento) {
        resolve('Descuento aplicado')
    }else{
        reject('No se puedo aplicar el descuento')
    }
})


// PASO CUATRO COMO ATRAPAMOS LA PORMESA
// Quiere utilizar la promesa para eso usamos el .then ( Y entonces )
// Siempre que falle el resolve podemos usar catch
// podemos ejecutar una funcion
aplicarDescuentoComic
    .then( resultado =>{
        // console.log(resultado)
        descuento(resultado)
    })
    .catch( error =>{
        console.log(error)
    })

//PASPO DOS ( VER LOS ESTADOS DE LAS PROMESAS )
console.log(aplicarDescuentoComic)
// Tres posibles estado de las pomesas
// Fullfilled - se ha cumplido
// Rejected - se ha recahzado o no se pudo cumplir
// pending - ( Es cuando no se define lso estado de la promesa ) No se ha cumplido y tampoco fue rechazado

    

function descuento(mensaje) {
    console.log(mensaje)
}