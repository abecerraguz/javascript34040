/*
    Si no es falsy (si es distinto de 0, null, 
    undefined, NaN, false, o string vacío), el operador OR ( || ) retorna operador1. 
    De lo contrario, retorna operador2.

    Los valores truthy y falsy son valores verdaderos y falsos 
    cuando se realiza una coerción de cualquier tipo a booleano, 
    respectivamente. Esto es importante para manejar condicionales, 
    ya que una estructura condicional evalúa si un valor es verdadero o 
    falso en un contexto booleano.

    Qué son los valores falsy
    Un valor falsy es aquel que es falso en un contexto 
    booleano, estos son: 
    0, 
    "" (string vacío), 
    false, 
    NaN, 
    undefined
    null
*/

// Coersión explícita

console.log('=================Coersión explícita falsy================')
console.log(Boolean(0)) // false
console.log(Boolean(""))  // false
console.log(Boolean(null))  // false
console.log(Boolean(undefined))  // false
console.log(Boolean(NaN))  // false
console.log(Boolean(false))  // false

/*
Qué son los valores truthy
Un valor truthy es aquel que es verdadero en un contexto booleano, 
son todos los valores que no sean falsy, que especificamos en la anterior sección.
*/
console.log('=================Coersión explícita truthy================')
console.log(Boolean(12)) // true
console.log(Boolean("hola")) // true
console.log(Boolean(true)) // true
console.log(Boolean([1, 2, 3])) // true
console.log(Boolean(function hola() {})) // true
console.log(Boolean({ a: 1, b: 2 })) // true

console.log('=================OPERADOR OR================')

console.log( 0 || "Falsy")  // Falsy
console.log( 40 || "Falsy")  // 40
console.log( null || "Falsy")  // Falsy
console.log( undefined || "Falsy")  // Falsy
console.log( "Hola Mundo" || "Falsy")  // Hola Mundo
console.log( "" || "Falsy")  // Falsy
console.log( NaN || "Falsy")  // Falsy
console.log( true || "Falsy")  // true
console.log( false || "Falsy")  // Falsy
console.log( [] || "Falsy")  // Falsy