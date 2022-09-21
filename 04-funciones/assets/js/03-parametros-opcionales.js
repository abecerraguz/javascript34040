/*
========PARAMETROS=============
Los parametros son variables que van a alterar 
la lógica o el resultado de una fucion.
mostrar = false, es un parametro opcional
*/




function calculadora(numero1,numero2,mostrar=false){

    if (mostrar == false) {
        console.log('Suma;'+(numero1+numero2))
        console.log('Resta;'+(numero1-numero2))
        console.log('Multipliacacion;'+(numero1*numero2))
        console.log('Division;'+(numero1/numero2))
        console.log('****************************************')
    }else{
        console.log('SALIDA EN EL ELSE')
        console.log('Sumaaaaaaa;'+(numero1+numero2))
        console.log('Resta;'+(numero1-numero2))
        console.log('Multipliacacion;'+(numero1*numero2))
        console.log('Division;'+(numero1/numero2))
        console.log('****************************************')
    }
    
}

var salida = calculadora(2,5,true)
console.log(salida)