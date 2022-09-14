/*
Condicional más operadores logicos
Con los operadores logicos podemos evaluar dentro del if dos condiciones. Por ejemplo
Desamos evaluar si es mayor de edad y además que este fuera 
del rango de la edad.
EJMPLO DE OPERADORES LOGICOS

AND(Y):&&
OR(O):||
NEGACIÓN:!
*/

//OTRO EJEMPLO
var edad =45;
var nombre = "David Suarez";

/*
OPERADORES RELACIONALES
	Mayor: >
	Menor: <
	Mayor o Igual : >=
	Menor o Igual : <=
	Igual: ==
	Distinto :!=
*/
//Ejemplo con Negación
var year = 2019;

if( year != 2016 ){
   console.log("El año no es 2016 realmente es : "+year);
}

//Ejemplo con AND
if(year >= 2000 && year <=2020){

	console.log("Estamos en la era actual");
	
}else{
	console.log("Estamos en la era Post moderna")
}


//Ejmplo con OR
if(year == 2008 || (year >= 2018 && year == 2028)){
	console.log("El año termina en 8");
}else{
	console.log("Año no registrado")
}


// EJEMPLO NEGACION
let nombre = prompt('Ingrese un mombre')

if (nombre === ""){
	alert("Todos los campos son obligatorios");
	// return false;
}else if ( nombre.length > 5 ){
	alert("El nombre es muy largo nombre");
	// return false;
}else if ( !( /^[a-zA-Z]+$/.test(nombre) ) ){
	alert("Sólo deben ser letras");
	// return false;
}







