/**
 * OPERADOR LOGICO AND
 * Es una reducción de un condicional, pero trata de ejecutar (o retornar) 
 * algo sólo si la condición es verdadera, 
 * reduce un if sencillo con un solo bloque de ejecución:
 * 
 */

 const carrito = []

//  if (carrito.length === 0) {
//    console.log("El carrito está vacío!")
//  }
 
 // con operador AND
 carrito.length === 0 && console.log("El carrito está vacío!")

 const usuario = {
    nombre: "John Doe",
    edad: 14
  }
  
  const registroIngreso = usuario.edad >= 18 && new Date()
  
  console.log(registroIngreso) // FALSE
