/*
    Operador ternario
    Es una simplificación de la estructura condicional if…else. 
    Es un condicional que consta sí o sí de tres partes: 

        - la condición,
        - el caso de ejecución en caso que se cumpla,
        - y el caso else si no se cumple


*/
let diaDeHoy = 'Martes'
// if(diaDeHoy == 'Martes'){
//     alert(`Hoy es ${diaDeHoy}`)
// }else{
//     alert('Hoy no es martes')
// }

diaDeHoy == 'Martes' ? alert(`Hoy es ${diaDeHoy}`) : alert('Hoy no es martes') 

// SINTESIS
const usuario = {
    nombre: "John Doe",
    edad: 22
}
// ECMA5
/*
let permiso

if (usuario.edad >= 18) {
  permiso = true
} else {
  permiso = false
}

if (permiso) {
  alert("Puede comprar cerveza")
} else {
  alert("No puede comprar")
}
*/

// ECMA6
const permiso = (usuario.edad >= 18) ? true : false
permiso ?  alert("Puede comprar cerveza") : alert('Es menos de edad')



  


