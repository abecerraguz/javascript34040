console.clear();
console.log('========================== OBJETO DATE ============================')

console.log( new Date() )

console.log('========================== CONTRUCTOR ============================')
/**
 
    El constructor de la clase Date nos permite crear objetos
    date con fechas diferentes. Puede recibir parámetros en el orden año,
    mes, día, hora, minutos, segundos, milisegundos (todos tipo number).

    La convención con la que trabaja Javascript para construir
    fechas cuenta los meses a partir del 0 (0 = enero, 11 = diciembre)
    y los días a partir del 1:


 */
    console.log( new Date(2020, 1, 15) )
    // Sat Feb 15 2020 00:00:00 GMT-0300 (hora de verano de Chile)
    
    // new Date( AÑO, MES, DIA, HORA, MINUTOS, SEGUNDOS )
    const casiNavidad = new Date(2021, 11, 25, 23, 59, 59)
    console.log(casiNavidad)
    // Sat Dec 25 2021 23:59:59 GMT-0300 (hora de verano de Chile)

    
/*
    El constructor de la clase Date nos permite
    crear objetos date con fechas diferentes. 
    Puede recibir parámetros en el orden 
    año, mes, día, hora, minutos, segundos, milisegundos (todos tipo number).
*/

console.log('========================== VALOR SINGULAR ============================')
/*
    getMonth()
    getFullYear()
    getDay()
*/

const hoy = new Date("December 17, 2021")

console.log( hoy.toDateString())        // Fri Dec 17 2021
console.log( hoy.toLocaleString())      // 17/12/2021 00:00:00
console.log( hoy.toLocaleDateString())  // 17/12/2021
console.log( hoy.toTimeString())        // 00:00:00 GMT-0300 ( hora de verano de Chile )



console.log(hoy.getFullYear()) // 2021
console.log(hoy.getMonth()) // 11  (diciembre)
console.log(hoy.getDay()) // 5  (viernes)


let date = new Date(2022, 9, 4, 23, 30, 59);
console.log(date); 
// Output: Tue Jul 21 2020 10:01:14 GMT+0100 (UK Daylight Time)
console.log( date.toLocaleString('es-cl') );
// Output: 7/21/2020, 10:01:14 AM

    



