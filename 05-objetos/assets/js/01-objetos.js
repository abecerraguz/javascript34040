// CREANDO OBJETOS
/**
    Programación Orientada a Objetos (POO)
    La Programación Orientada a Objetos (POO) es una forma distinta de pensar las soluciones que busca facilitar el reuso de código y reducir la complejidad, o sea la cantidad de código que interactúa con otro código distinto. Aprender a trabajar con objetos y crear los nuestros, nos da acceso a un mundo completo de oportunidades.
    Algunas de sus principales ventajas son:

    ●  Proporciona una estructura clara para los programas.
    ●  Ayuda a mantener el código bajo el concepto DRY "Don't repeat yourself - No se
       repita", y hace que el código sea más fácil de mantener, modificar y depurar.
    ●  Hace posible crear aplicaciones reutilizables con menos código y menor tiempo de
       desarrollo.

    Objetos y propiedades
    ● Un Objeto es una representación de algo en el mundo real.
        ○ Un auto, una casa, una bicicleta, un conjunto de números, una página web o incluso un carro de compras.
    ● Los objetos también tienen propiedades o datos, conocidos como Atributos.
        ○ Color, tamaño, nombre, edad, valores, entre otros.
    ● Métodos: Son las funcionalidades que modifican y/o utilizan los estados o atributos, ya que
        son una capacidad del objeto en sí, como caminar.
 
     
    
 */
console.log('===========DOS FORMAS DE CREAR OBJETOS===============')
// Crear un objeto a travéz del metodo new Object()

// Instanciar
let cuadrado = new Object()
cuadrado.ancho = 10
cuadrado.alto = 5
console.log( cuadrado )

// Objeto literal
let cuadradoDos = {
    ancho : 10, 
    largo : 25
}
console.log( cuadradoDos )

console.log('=========== OBTENIENDO VALORES DE UN OBJETO ===============')
console.log('=========== Notación de punto ===============')
console.log( cuadradoDos.ancho )
console.log( cuadradoDos.largo )

console.log('=========== Notación de corchete ===============')
// Notación de corchetes
console.log( cuadradoDos['ancho'] )
console.log( cuadradoDos['largo'] )
console.log()
console.log('=========== ASIGNAR VALORES A LAS PROPIEDADES ===============')
cuadradoDos.ancho = 150
cuadradoDos.largo = 150
console.log( cuadradoDos )
console.log()

console.log('=========== OBJETOS CONTRUCTORES ===============')

/* 

    CREANDO OBJETOS A PARTIR 
    DE UNA FUNCION CONTRUCTORA O TAMBIEN LLAMADO MOLDE
    
    Por convención una funcion contructora se escribe su nombre
    en mayuscula
    
    Ejemplo: Vamos a crea la funcion contructora Estudiante

*/

function Estudiante( nombre ){
    this.nombre = nombre
}

let x1 = new Estudiante('Carla')
console.log('Salida de x1--->', x1)

/*
    Una ves instanciada la funcion contructora 
    podemos crear tanto propiedades como metodos
    Ejemplo:
*/

x1.saludar = function(){
    console.log(`Hola Soy ${this.nombre}`)
}
console.log('======Salida de un metodo======')
x1.saludar();
console.log()
console.log('======IMPORTANTE PODEMOS TAMBIEN RECURRIR AL METODO NEW OBJECT()======')

let persona = new Object();
persona.nombre = "Camila";

persona.saludar = function(){
    console.log("Hola soy " + this.nombre);
}
console.log('Salida del objeto Persona', persona )
persona.saludar();

console.log('====== LO MISMO CON FUNCION CONSTRUCTORA ======')

function Persona(nombre){
    this.nombre = nombre
}

let persona1 = new Persona('Camila')
console.log('Persona 1--->', persona1)
persona1.saludar = function(){
    console.log(`Hola Soy ${this.nombre}`)
}
persona1.saludar();

console.log('====== METODOS EN FUNCION CONSTRUCTORA ======')
console.log()

function Estudiante( nombre, edad, direccion ){

    this.nombre = nombre
    this.edad = edad
    this.direccion = direccion

    // METODO
    this.saludar = function(){
        console.log(`Hola soy ${this.nombre} y tengo ${this.edad} años`)
    }
}

let estudiante1 = new Estudiante('Juan', 25, 'Avenida Ricardo Lyon 3177')
let estudiante2 = new Estudiante('Pedro', 30, 'Avenida Suecia 1500')

console.log(estudiante1)
console.log(estudiante2)
estudiante1.saludar()
estudiante2.saludar()

console.log('====== OBJETO LITERAL CON PROPIEDAD Y METODO ======')

const humano = {
    nombre : 'Juan',
    saludar: function(){
        console.log(`Hola soy ${this.nombre}`)
    }
}

console.log(humano)
humano.saludar()

console.log('====== OPERADOR IN ======')
// El operador IN retorna true o false dado que verifica si existe la clave
console.log( 'nombre' in estudiante1 ) // true
console.log( 'color' in estudiante1 ) // false
console.log();
console.log('====== FOR IN ======')
// FOR IN PARA RECORRER LAS PROPIEDADES DE UN OBJETO
for (const key in estudiante1) {
    console.log(estudiante1[key])
}
