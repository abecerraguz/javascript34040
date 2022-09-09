/*  
    VARIABLES
    Una variable es un contenedor de información en la memoria de la maquina.
    La palabra "reservada: var define a una variable en ECMA5
    Cadenas de texto ( String ) van entre comillas, pueden ser 
    inicializadas o reasignadas o pueden mutar y están sujetas al Hoisting
*/

let pais       = "Argentina";
let continente = "Latino America";
let antiguedad = 2019;
let pais_y_continente = pais+' '+continente;

pais = "España";
continente = "Europa";
console.log ( pais, continente, antiguedad, 'Pais y continente-->', pais_y_continente );
alert( pais_y_continente );
