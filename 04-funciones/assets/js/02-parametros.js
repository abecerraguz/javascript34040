/*
========PARAMETROS=============
Los parametros son variables que van a alterar 
la lógica o el resultado de una fucion
*/

function calculadora(numero1,numero2){
    console.log('Suma;'+(numero1+numero2))
    console.log('Resta;'+(numero1-numero2))
    console.log('Multipliacacion;'+(numero1*numero2))
    console.log('Division;'+(numero1/numero2))
    console.log('****************************************')
}

var salida = calculadora(10,20)
console.log(salida)