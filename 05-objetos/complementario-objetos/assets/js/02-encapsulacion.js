/*

Por consiguiente, para lograr la protección 
de las propiedades de un objeto, existen diversas
formas de aplicar el Encapsulamiento, 
como lo son: Object.defineProperty(),
Object.freeze(), WeakMap, Closures y/o IIFE.

*/

console.log('================ FUNCION CONSTRUCTORA ESTUDIANTE ===================')

function Estudiante(nombre){
    this.nombre = nombre;
}

let estudiante1 = new Estudiante('Juan');
console.log(estudiante1.nombre); // Juan

estudiante1.nombre = "Javier";
console.log(estudiante1.nombre); // Javier



console.log('================ FUNCION CONSTRUCTORA ALUMNO ENCAPSULAMIENTO ===================')

/*
    =====ENCAPSULAMIENTO==========
    Todo funciona bien hasta el momento, pero, el código realizado
    anteriormente está sobreescribiendo la propiedad, lo cual, es una mala práctica y 
    no se debe hacer, para ello se
    deben implementar getters y setters, 
    tema que trataremos después de este inciso.

*/

function Alumno( nombre ){
    let getNombre = nombre;
    Object.defineProperty( this, "getNombre", { value: getNombre, writable: true});
}

var alumno1 = new Alumno('Juan');
alumno1.getNombre = "Jocelyn";
console.log( 'alumno1 60--->', alumno1.getNombre );


/*
    Crear una función constructora denominada “Usuario”, la cual reciba como parámetro el tipo
    de usuario que ingresa a un sistema, es decir, si es Administrador, Invitado o Cliente; esta
    propiedad debe llevar el nombre de “tipo”. Luego protege la propiedad mediante la creación
    de una nueva variable local e implementando el método Object.defineProperty para
    evitar cambios externos en las propiedades existentes en la función constructora.
*/

function Usuario(tipo){
    let getTipo = tipo;
    Object.defineProperty(this, "getTipo", { value:getTipo, writable: false });
}

var usuario1 = new Usuario('Administrador')
usuario1.getTipo = "Otro";
console.log( 'usuario1 78--->', usuario1.getTipo );


/*
    Object.defineProperty( obj, prop, descriptor )

    Parámetros

    obj
    El objeto sobre el cual se define la propiedad.

    prop
    El nombre de la propiedad a ser definida o modificada.

    descriptor
    El descriptor de la propiedad que está siendo definida o modificada.

    ==========================================
    value
    El valor asociado a la propiedad. Puede ser cualquier tipo valido de JavaScript  (number, object, function, etc).
    Por defecto es undefined.

    writable
    true Indica si el valor de la propiedad puede modificarse con el  operador de asignación (en-US).
    Defaults to false.

    Un descriptor de acceso además tiene las siguientes claves opcionales:

    get
    Una función cuyo valor retornado será el que se use como valor de la propiedad.
    Defaults to undefined.

    set
    Una función que recibe como único argumento el nuevo valor que se desea asignar a la propiedad y que devuelve el valor que se almacenará finalmente en el objeto.
    Defaults to undefined.

*/


let persona = {   }

Object.defineProperty( persona, 'id', { value:1, writable:false, enumerable:true }) 

console.log('Salida de persona.id',persona.id)
persona.id = 2
console.log('Salida de persona.id',persona.id)

console.log('Salida de persona---->x', persona)

Object.defineProperty( persona, 'nombre', { value:'Daniela', writable:true, enumerable:true  } )
console.log(persona.nombre)
persona.nombre = "Danila Fernanda"
console.log(persona.nombre)

for (const key in persona) {
    console.log('Salida del Key persona--->',key)
}




