/*
=======EJERCICIO IF==============================
Programa que pida dos numero y que nos diga cual 
es el mayor, el menor y si  son iguales.
=================================================
INICIO
	INGRESO NUMERO 1
	INGRESO NUMERO 2

	EVALUAR SI SON IGUALES
	EVALUAR SI NUMERO 1 es Mayor que NUMERO 2
	EVALUAR SI NUMERO 2 es Mayor que NUMERO 1
	EVALUAR SI NO SON NUMEROS
FIN
*/

var numero1 = parseInt(prompt('Ingrese el numero 1',0));
var numero2 = parseInt(prompt('Ingrese el numero 2',0));

if(numero1 === numero2){
	alert('LOS NUMEROS SON IGUALES')
}else if(numero1 > numero2){

	alert('EL NUMERO MAYOR ES:'+ numero1);
	alert('EL NUMERO MENOR ES:'+ numero2)

}else if(numero2 > numero1){

	alert('EL NUMERO MAYOR ES:'+ numero2);
	alert('EL NUMERO MENOR ES:'+ numero1);

}else{
	alert('INTRODUCE NUMERO CORRECTOS')
}





