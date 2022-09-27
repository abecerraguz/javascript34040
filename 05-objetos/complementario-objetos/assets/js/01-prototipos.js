console.log('================FUNCION CONSTRUCTORA USUARIO PROTOTIPO ===================')
/*

    Función constructora y prototipos

    Los prototipos o prototype nos permiten 
    agregar una propiedad o diversas funcionalidades a

    "múltiples objetos".

    Por consiguiente, los prototipos son un mecanismo mediante 
    el cual los objetos en JavaScript heredan 
    características entre sí, es decir, 
    un objeto puede tener diversas características
    pertenecientes a otro objeto,

*/

// Creamos la funcion construtora
function Usuario(nombre) {
    this.nombre = nombre;
}

// Creamos el metodo saludar a traves del prototype
Usuario.prototype.saludar = function(){
    console.log("Hola soy el usuario " + this.nombre);
}

// Instanciamos dos objetos
let usuario1 = new Usuario('Juan');
let usuario2 = new Usuario('Jocelyn');


// Una vez creados los usuarios podemos usar el metodo
usuario1.saludar()
usuario2.saludar()

console.log(usuario1)
console.log(usuario2)

/*

    También podemos hacer lo mismo con las propiedades o atributos,
    es decir, crear y asignar atributos globales 
    para "todos" los objetos directamente a la función constructora, 
    mediante el uso de la propiedad “prototype”.

    Ejemplo:

*/ 

Usuario.prototype.edad = 30;

/*

    Al igual que si crearamos la propiedad directamente 
    sobre la función constructora, cuando
    asignamos un nuevo atributo con la propiedad “prototype”,
    este atributo quedará disponible
    para todos los objetos instanciados en base a la 
    función constructora.

*/

console.log('La edad del usuario 1 es-->', usuario1.edad)
console.log('La edad del usuario 2 es-->', usuario2.edad)

/*

Nota: Tenemos que tener mucho cuidado de modificar masivamente las propiedades de
todos los objetos, porque es muy probable que terminamos modificando un objeto que no
queremos modificar. Por ejemplo, si estuviéramos creando un juego de mesa y queremos
darle puntos a un jugador utilizando prototype le daríamos puntajes a todos.



*/

console.log('================ FUNCION CONSTRUCTORA JUGADOR ===================')

function Jugador(nombre){

    this.nombre = nombre;
    this.puntos = 0;

}

let jugador1 = new Jugador('Francisca');
// jugador1.agregarPuntos = function(){
// this.puntos = this.puntos + 100;
// }

let jugador2 = new Jugador('Camilo');
// jugador2.agregarPuntos = function(){
//     this.puntos = this.puntos + 100;
// }

Jugador.prototype.agregarPuntos = function(){
    this.puntos = this.puntos + 100;
}

jugador1.agregarPuntos();
jugador2.agregarPuntos();
    
console.log(jugador1);
console.log(jugador2);


console.log('================ FUNCION CONSTRUCTORA CUADRADO ===================')

function Cuadrado(lado){
    this.lado = lado
}

let casa = new Cuadrado(100);

Cuadrado.prototype.calcularArea = function(){
    return this.lado * this.lado
}

Cuadrado.prototype.calcularPerimetro = function(){
    return this.lado*4 
}

console.log(casa.calcularArea())
console.log(casa.calcularPerimetro())


console.log('================ FUNCION CONSTRUCTORA RECTANGULO ===================')

/*  REALIZAR EJERCICIO 01
    Modifica el siguiente código utilizando prototipos para evitar tener que definir múltiples
    veces la misma función.


    r1.calcularArea = function() { // Agregamos el método
        return this.ancho * this.alto;
    }

    r2.calcularArea = function() {
        return this.ancho * this.alto;
    }

*/

