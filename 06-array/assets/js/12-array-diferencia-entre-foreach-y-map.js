/*

    Si planeas alterar los elementos de la matriz aplicando alguna función, deberías usar el método map, ya que no modifica la matriz original y devuelve una matriz nueva. De esta forma, la matriz original se mantiene intacta. 

    Por otro lado, si quieres recorrer todos los elementos de una matriz, y no necesitas que una matriz sea devuelta, usa el método forEach.

*/
console.log('===============================METODO FOREACH()===============================')

let number1Array = [1, 2, 3, 4, 5];


let return1Value = number1Array.forEach(num => 
  console.log(`${num} x ${num} = ${num * num}`)
);

console.log(number1Array);
console.log(return1Value);

console.log('===============================METODO MAP()===============================')

let number2Array = [1, 2, 3, 4, 5];

let return2Value = number2Array.map( (num) => num * num )

console.log(number2Array);
console.log(return2Value);