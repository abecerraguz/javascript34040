//Condicional IF

var edad1 = 25;
var edad2 = 12;
//Si se cumple el If
if( edad1 > edad2 ){
  //Ejecuta esto
  console.log(edad1+" es  mayor que "+edad2)
   
}else{
  console.log('La edad uno es inferior')	
}


//OTRO EJEMPLO
// var edad = 45;
// var nombre = "David Suarez";

/*
OPERADORES RELACIONALES
	Mayor: >
	Menor: <
	Mayor o Igual : >=
	Menor o Igual : <=
	Igual: ==
	Distinto :!=
*/

if(edad >= 18){
//Es mayor de edad
   console.log(nombre+" tiene "+edad+" y es mayor de Edad");
	
	// Se pueden hacer if anidados
	if(edad <= 33){
	   console.log("Todavia eres Millenial")
	}else if(edad >= 70){
		console.log("Eres Anciano")	 
	}else{
	   console.log("Ya no eres Millenial");
	}

}else{
//Es menor de edad	
console.log(nombre+" tiene "+edad+" es menor de edad");	
}











