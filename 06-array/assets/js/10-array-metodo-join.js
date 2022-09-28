// Pasa un array a un string

const a = ['Viento', 'Lluvia', 'Fuego'];
let miVar1 = a.join();      // asigna 'Viento,Lluvia,Fuego' a miVar1
let miVar2 = a.join(', ');  // asigna 'Viento, Lluvia, Fuego' a miVar2
let miVar3 = a.join(' + '); // asigna 'Viento + Lluvia + Fuego' a miVar3
let miVar4 = a.join('');    // asigna 'VientoLluviaFuego' a miVar4

console.log(miVar1)
console.log(miVar2)
console.log(miVar3)
console.log(miVar4)
