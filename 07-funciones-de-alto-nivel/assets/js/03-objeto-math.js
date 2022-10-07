/*
    Javascript provee el objeto Math que funciona
    como un contenedor de herramientas y métodos 
    para realizar operaciones matemáticas.
*/
console.log( Math.E ) // 2.718281828459045
console.log( Math.PI ) // 3.141592653589793

console.log('========================== MIN MAX ============================')

console.log( Math.min(55, 13, 0, -25, 93, 4) ) // -25
console.log( Math.max(55, 13, 0, -25, 93, 4) ) // 93

console.log( Math.max(55, Infinity, 0, -25, 93, 4) ) // Infinity
console.log( Math.min(55, 13, 0, -Infinity, 93, 4) ) // -Infinity


console.log('========================== Ceil, Floor & Round ============================')
/*
    Ceil, Floor & Round
    Sirven para redondear un valor numérico a un número entero cercano:
*/

const pi = Math.PI // 3.141592653589793

// CEIL: devuelve el entero mayor o igual más próximo
console.log( Math.ceil(pi) ) // 4

// FLOOR: devuelve el entero más cercano redondeado hacia abajo
console.log( Math.floor(pi) ) // 3

// ROUND: retorna el valor de un número redondeado al entero más cercano
console.log( Math.round(pi) ) // 3

console.log('========================== Square Root ============================')
/*
    El método Math.sqrt() retorna la raíz 
    cuadrada de un número. Si se le envía un número negativo, 
    el método retorna NaN.
*/
Math.sqrt(9) // 3
Math.sqrt(2) // 1.414213562373095
Math.sqrt(1)  // 1
Math.sqrt(-1) // NaN

console.log('========================== Random ============================')

/*
    El método Math.random() genera un número pseudo-aleatorio entre 0 y 1, 
    siendo el 0 límite inclusivo y el 1 exclusivo.
*/

console.log( Math.random() ) // 0.6609867980868442
console.log( Math.random() ) // 0.09291446900104305
console.log( Math.random() ) // 0.6597817047013095

/*
    Para generar números aleatorios dentro de un rango deseado, 
    distinto de 0-1, podemos multiplicar su resultado por el rango esperado. 
    A la vez podemos sumar el límite inferior si lo necesitamos:
*/

// números entre 0 y 10
console.log( Math.round( Math.random() * 10 ) )
// números entre 0 y 50
console.log( Math.round( Math.random() * 50) )
// números entre 20 y 50
console.log(  Math.round( Math.random() * 30 + 20 ) )

console.log('========================== FUNCION REDONDEO ============================')
/*
    Al usar Math.round, esta función retornará números
    aleatorios en el rango de 0-100 inclusive. 
    Si usara Math.ceil los números irían de 1 a 100, ya que siempre redondeará hacia arriba; 
    y si usa Math.floor el rango sería de 0 a 99.

    Math.ceil // 1 a 100  ya que siempre redondeará hacia arriba
    Math.floor // rango sería de 0 a 99.
*/

const generadorNumero = ( num ) => {
    return Math.round( Math.random() * num )
}

console.log( generadorNumero( 100 ) )






