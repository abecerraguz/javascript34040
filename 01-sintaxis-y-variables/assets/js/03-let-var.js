/*

    Diferencia entre var y let ( El alcance de bloque o conocido como scope )
    Y let no permite la duciplidad de nombre de la variable
    Bloque: Una sentencia block se utiliza para agrupar una o mas sentencias.
    
    La creacion de variables ( var ECMA5 y let ECMA6 ), de forma global,
    permite que esta sea re asignada dentro de un bloque.

    El valor de  ( var ECMA5 y let ECMA6 ) dentro de un bloque o sea local,
    el acceso a la inicializacion sólo se debe acceder al ambito local,
    Pero veamos que sucede ?

*/

console.log('=============EJMEPLO VAR ==========')
var texto1 = "Curso de Javascript";
console.log( texto1 );
{
    var texto1 = "Curso de Laravel 5";
    console.log( texto1 )
}
console.log( texto1 )


console.log('=============EJMEPLO LET ==========')
let texto2 = "Curso de Javascript";
console.log( texto2 ); 
{
    let texto2 = "Curso de Laravel 5";
    console.log( texto2 )
}
console.log( texto2)






