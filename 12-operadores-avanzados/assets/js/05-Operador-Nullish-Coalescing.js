/*

    Este Operador (??) funciona igual que el Operador OR ( || ), 
    con la diferencia que admite más valores como ‘verdaderos’. 
    En este caso, sólo obtenemos nullish en dos casos:

    ?? devuelve el primer argumento cuando este no es null ni undefined. 
    En caso contrario, devuelve el segundo.

*/
let firstName = null;
let lastName = null;
let nickName = "Supercoder";

// Muestra el primer valor definido:
alert(firstName ?? lastName ?? nickName ?? "Anonymous"); // Supercoder

/*

    let firstName = null;
    let lastName = null;
    let nickName = "Supercoder";

    // muestra el primer valor "verdadero":
    alert(firstName || lastName || nickName || "Anonymous"); // Supercoder

*/


