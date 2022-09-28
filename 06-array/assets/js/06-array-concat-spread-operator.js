/*
    Veremos como unir 2 arreglos, para ello existe un arreay method llamado .concat
*/

const meses =['Enero','Febrero','Marzo','Abril','Mayo','Junio']
const meses2 =['Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre']
const meses4 =['Hola','Gato']


const meses3 = meses.concat(meses2,meses4)
console.log('Uso de concat-->',meses3)

//spread operator
const meses5 = [...meses,...meses2]
console.log('Uso de spread operator-->', meses5)
