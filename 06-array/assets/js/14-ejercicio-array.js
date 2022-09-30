/**
    Un prestigioso centro médico le ha encargado la tarea de obtener
    información estadística acerca de las consultas que realizó durante el día de ayer.

    Para esto, se le entregará un listado de las consultas realizadas. El listado, contiene una
    tabla con las siguientes columnas: hora de atención, médico especialista, nombre del
    paciente, Rut del paciente y previsión ( Estado o Privada ).

    PUEDE SERCARGAR EL ARCHIVO DESDE:
    https://docs.google.com/spreadsheets/d/1f10FLN81zRBrIXc30ZfPryTC1pUP5K3w/edit?usp=sharing&ouid=111364373409188823844&rtpof=true&sd=true

    Las información debe ser desplegada en una página HTML que usted debe crear. Puede
    utilizar la función document.write() y desplegar la información solicitada entre párrafos, o
    como usted estime conveniente, lo importante es que la información que se le solicite se
    muestre en dicha página que creará.

    1. Crear la estructura de datos mediante arreglos y objetos. Debe crear 1 arreglo por
       cada listado (Radiología, Traumatología y Dental) y 1 objeto por cada fila de
       información que contengan los listados, considerando las propiedades establecidas
       en la descripción.
    2. Mostrar por pantalla la primera y última atención de cada listado, desplegando el
       nombre del paciente junto con la previsión, separados por un guión (utilizar índices
       de arreglos para esto).

       Ej: Primera atención: Juan Pérez - ESTATAL | Última atención: Ana Gálvez - PROVADA.

    3. Recorrer el arreglo de Traumatologia y mostrar su contenido en una tabla.

    4. Agregar las siguientes horas al arreglo de Traumatología:

        HORA  ESPECIALISTA     PACIENTE         RUT         PREVISIÓN
        09:00 RENÉ POBLETE     ANA GELLONA      13123329-7  PRIVADA
        09:30 MARIA SOLAR      RAMIRO ANDRADE   12221451-K  ESTATAL
        10:00 RAUL LOYOLA      CARMEN ISLA      10112348-3  PRIVADA
        10:30 ANTONIO LARENAS  PABLO LOAYZA     13453234-1  PRIVADA
        12:00 MATIAS ARAVENA   SUSANA POBLETE   14345656-6  ESTATAL

    5. Eliminar el primer y último elemento del arreglo de Radiología.

    6. Imprimir en la página HTML, mediante document.write y/o la funciones que estime
       conveniente, la lista de consultas médicas de Dental. Sin embargo, debe hacerlo
       separando por un guión cada dato desplegado y cada fila de información debe estar
       separada por un párrafo.
       Ejemplo:
        8:30 - ANDREA ZUÑIGA - MARCELA RETAMAL - 11123425-6 - PRIVADA
        11:00 - MARIA PIA ZAÑARTU - ANGEL MUÑOZ - 9878789-2 - PRIVADA...

    7. Imprimir un listado total de todos los pacientes que se atendieron en el centro
       médico. Para esto, deberá unir todos los nombres de pacientes e imprimir uno por
       cada párrafo.

       Ejemplo:
       FRANCISCA ROJAS
       PAMELA ESTRADA
       ARMANDO LUNA…
    
    8. Filtrar aquellos pacientes que indican ser de Sistema de Salud PRIVADO en la lista de consultas médicas
       de Dental. 

       Ejemplo:
       MARCELA RETAMAL - PRIVADO
       ANGEL MUÑOZ - PRIVADO
       ANA SEPULVEDA - PRIVADO

    9. Filtrar aquellos pacientes que indican ser de ESTATAL en la lista de consultas
       médicas de Traumatología.

        Ejemplo:
        PAULA SÁNCHEZ – ESTATAL


 */

// console.clear()
// function saludo( n ){
//    // console.log(n)
//          return ( n ) => n+'????'
// }
       
// const saludoUno = saludo()
// console.log( 'Salida-->', saludoUno('Hola'))


// function mayorQue(n) {
//    return (m) => m > n
// }

// console.log('mayorQue',mayorQue(3))
// let mayorQueDiez = mayorQue( 10 )

// console.log( mayorQueDiez(12) )  //  true
// console.log( mayorQueDiez(8) )  //  false
console.log('====================FUNCIONES SIN ORDEN SUPERIOR====================')
/*
   Supongamos que tenemos una matriz y queremos crear una nueva matriz que
   contenga el doble del valor de cada una de las primeras. 
   Veamos cómo resolver el problema con y sin funciones de orden superior.
*/
const arr1 = [1,2,3]; 
const arr2 = [ ];
for(let i = 0; i <arr1.length; i ++){ 
  arr2.push(arr1 [i] * 2); 
}

console.log(arr2);// imprimir [2,4,6] 

console.log('====================SOLUCION CON FUNCION CON ORDEN SUPERIOR====================')
const arr3 = [1,2,3];
const arr4 = arr3.map( function ( item ) { 
  return item * 2; 
})
console.log(arr4)

console.log('====================LO MISMO CON FUNCION DE FLECHA====================')
const salida = arr3.map( item => item*2 )
console.log(salida)


console.log('====================FUNCIONES DE ORDEN SUPERIOR====================')
/**
 * 
   FUNCIONES DE ORDEN SUPERIOR
   
   Las funciones de orden superior son funciones que operan en otras 
   funciones y pueden tomarlas como argumentos o devolverlas. 
   En pocas palabras, Una función de orden superior es una función que toma una función
   como parámetro o devuelve una función como salida.

   CONTEXTO

   Suponemos que JavaScript no es nativomapMétodo Podemos construirlo nosotros mismos
   para crear nuestras propias funciones de orden superior.

   Supongamos que tenemos una matriz de cadenas y queremos convertir
   esta matriz en una matriz de enteros, donde cada elemento representa
   la longitud de la cadena en la matriz original.

*/

const strArray = ['JavaScript', 'Python', 'PHP', 'Java', 'C'];

function mapForEach( arr, fn) {
  console.log(fn)
  const newArray = [];
  for( let i = 0; i < arr.length; i++ )  {
    newArray.push(
      fn(arr[i])
    );
  }
  return newArray;

}
const lenArray = mapForEach( strArray, function( item ) {
  return item.length;
});

// prints [ 10, 6, 3, 4, 1 ]
console.log( lenArray );

       