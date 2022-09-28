/**
 El reverse()método invierte una matriz en su lugar y devuelve la
 referencia a la misma matriz, el primer elemento de la matriz
 ahora se convierte en el último y el último elemento de la matriz se convierte en el primero. En otras palabras, el orden de los elementos en el arreglo estará girado hacia la dirección opuesta a la establecida anteriormente.
 */

const numbers = [3, 2, 4, 1, 5];
const reversed = numbers.reverse();
// numbers and reversed are both in reversed order [5, 1, 4, 2, 3]
reversed[0] = 5;
console.log(numbers[0]); // 5

