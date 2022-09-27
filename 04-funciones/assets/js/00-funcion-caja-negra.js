/**
Función caja negra

Ambas funciones son válidas y producen el mismo resultado con más o menos
líneas/instrucciones, es a esto a lo que se refiere el concepto de “caja negra”,
podemos incluso pedirle a uno de sus compañeros que escriba el código 
de esta función y mientras que respete el mismo nombre de la función, recibe 2 parámetros y retorne su suma, se
producirá el mismo resultado.

Otra nota importante que es necesario realizar sobre los parámetros de la función, es que
estos existen solo dentro del bloque de código de la función, es decir, para el ejemplo
siguientes a y b solo existen dentro de la función suma , fuera de estos bloques de código si
son referenciados puede producir errores de que no existe dicha variable o puede resultar en
un valor diferente si existe una variable con el mismo nombre. De igual forma, si existe una
variable a o b fuera de la función, dentro de esta a y b hacen referencia a los parámetros de
entrada y no a esas variables fuera de la función.


 */

function suma (a, b) {
    return a + b;
}

function suma (a, b) {
    let c = a + b;
    return c;
}

/*
    EJERCICIO
    Calcular el área de un triángulo rectángulo mediante una función que reciba las variables de
    la fórmula (base y altura) como parámetros, para que retorne el resultado del área del
    triángulo, por consiguiente:
*/

// VARIABLES GLOBALES
let base = prompt( "Ingrese el valor de la base del triángulo rectángulo" );
let altura = prompt( "Ingrese el valor de la altura del triángulo rectángulo" );

function calculo_area (base,altura) {
    // VARIABLE LOCAL
    let area = ( parseInt (base) * parseInt (altura))/ 2 ;
    return area;
};

document.write( `<h1 class="text-center">El resultado del área es:${calculo_area( base, altura )}</h2><hr>` );
// LA VARIABLE GLOBAL SU ALCANCE SOLO ES DENTRO DE LA FUNCION
console.log('Salida de area',area)

