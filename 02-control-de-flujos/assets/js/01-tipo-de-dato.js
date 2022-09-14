
//--------------OPERADORES
let numero1 = 7;
let numero2 =12;
let operacion = numero1+numero2;
// let operacion = numero1*numero2; Multiplicacion
// let operacion = numero1-numero2; Resta
// let operacion = numero1/numero2; División
alert('El resultado de la operación es:'+operacion);


//---------------TIPOS DE DATOS BASICOS
let numero_entero   	= 44;
let cadena_de_texto 	= "Hola que tal";
let verdadero_o_falso 	= true; //Valor booleano puede ser true o false
let numero_falso        = "33";
// Otros tipos de datos son los array y los objetos que los vermeos más adelante


//--------------TYPEOF FUNCIONES QUE RETORNA EL TIPO DE DATO
console.log( typeof numero_entero );
console.log( typeof cadena_de_texto );
console.log( typeof verdadero_o_falso );
console.log( typeof numero_falso );

//--------------FUNCIONES PARA CONVERTIR UN DATO A OTRO
let numero_falso_string = "33.4";
let numero = 50;

console.log( numero_falso_string+7 ) // No se suma el valor dado que es un string 

console.log("Number "+( Number( numero_falso_string )+7 )); 
console.log("parseInt "+( parseInt( numero_falso_string )+7 ));
console.log(("parseFloat "+parseFloat( numero_falso_string )+7 ));

//Pasar una variable a String
console.log("Lo pasa a string "+String( numero )+4);






