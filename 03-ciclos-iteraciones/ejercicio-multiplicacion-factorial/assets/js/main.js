/*

    Programa que le permitan realizar la multiplicacion de un  numero y su factorial.

    Para ello, en una primera etapa, te han pedido un programa que al ingresar un número,
    obtenga las tablas de multiplicar desde el 1 hasta el número ingresado. Además, debe
    mostrar el factorial para los mismos números. El resultado debe ser mostrado por la
    consola del navegador, por ejemplo, si ingresan el número 3 en la consola deberían obtener
    el siguiente resultado:

    1 x 3 = 3
    2 x 3 = 6
    3 x 3 = 9
    Factorial de 1 es: 1
    Factorial de 2 es: 2
    Factorial de 3 es: 6

    Se debe validar que el numero este entre 1 y 20
    Valor de retorno isNaN
    true si es valor dado es NaN, de otro modo, false.

*/



let num = parseInt( prompt("Ingrese un numero entero entre 1 y 20") );
let mensaje


function verificar( numero ){
    
    num = numero
    // console.log( 'Salida de num', isNaN(num) )
    if( !isNaN(num) ){
      
        if( num >= 1 && num <= 20 ){
                mensaje = alert(`El numero esta dentro del rango`)
                operatoria( num )
        }else{

            while( num < 1 || num > 20 ){
                mensaje = alert(`El numero esta fuera del rango`)
                num = parseInt( prompt("Ingrese un numero entero entre 1 y 20") );
                operatoria( num )
            }
        }
    }else{
        mensaje = alert(`Debes ingresar sólo numeros`)
        num = parseInt( prompt("Ingrese un numero entero entre 1 y 20") );
        verificar(num)
    }
}




function operatoria( num ){
    
    // Multiplicación
    for (let i = 1; i <= num; i++) {
        let multiplicacion = i*num
        console.log( `${i} x ${num} = ${multiplicacion}` );
    }

    // FACTORIAL

}

verificar( num )




