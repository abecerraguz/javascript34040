// class Suma {
//     constructor (n) {
//         this.values = [ 1,1 ];
//         return this.values.map(i => i+n)
//     }
// };



// class Suma {
//     constructor (n) {
//         this._values = [ 1 , 1 ];
//         return this._values.map( i => i+n )
//     }
// };

class Suma {
    constructor () {
        const values = [ 1 , 1 ];
        Object.defineProperty( this , 'values' , { value: values });
        Object.freeze( this .values);
    }
};

const numero = new Suma(10)
console.log(numero);
numero.values = [ 20 , 10 ];

class Gato {
    constructor() {
    const _maullar = "si" ;
        Object.defineProperty( this , "_maullar" , { value: _maullar });
        Object.freeze( this._maullar);
    }
}

const gato = new Gato()
gato._maullar = "no"
console .log(gato._maullar);

/*
Ejercicio propuesto
Crear una clase denominada Persona, con un constructor que posea una propiedad llamada
“edad” y cuyo valor sea 35, para luego proteger de posibles cambios la propiedad creada en
el constructor. Luego, instancia la clase en un objeto llamado “persona1” y después
modifica el valor de la variable o propiedad por 20 y verifica que no hubo cambio alguno.

*/

class Persona {
    constructor () {
        let edad = 35 ;
        Object.defineProperty( this , "edad" ,{ value: edad, writable:true });
        // Object .freeze(this.edad);
    }
};

const persona1 = new Persona();
persona1.edad = 20 ;
console .log(persona1.edad)


class Person {
    constructor(name) {
        this.name = name;
    }

    get name() {
        return this._name;
    }

    set name( newName ) {
        newName = newName.trim();
        if (newName === '') {
            throw 'The name cannot be empty';
        }
        this._name = newName;
    }
}

let person = new Person("Jane Doe");
console.log( person.name );


class Animal{
    constructor(nombre){
        this.nombre = nombre
        Object.defineProperty( this , "nombre" ,{ value: nombre, writable: true });
    }
    get nombre(){
        return this._nombre
    }

    set nombre(nuevo_nombre){
        this._nombre = nuevo_nombre;
    }
}

class Herbivoro extends Animal{
    constructor(nombre,tipoComida){
        super(nombre);
        this.tipoComida = tipoComida
    }

    get tipoComida() {
        return this._tipoComida;
    }

    set tipoComida(comidaNueva) {
        this._tipoComida = comidaNueva;
    }
}

class Fitofago extends Herbivoro{

    constructor(nombre, tipoComida, distancia){
        super(nombre,tipoComida)
        this.distancia = distancia
    }

    get distancia(){
        return this._distancia
    }

    set distancia(nueva_distancia){
        this._distancia = nueva_distancia
    }

    infoFitofago() {
        return `${this.nombre} come ${this.tipoComida}, además se mueve ${this._distancia} km diarios`;
    }

}

const conejo = new Fitofago('Pepito','Zanahorias 🥕', '2 metros');

console.log(conejo.nombre="Juanito"); // Pepito
console.log(conejo.nombre);
console.log(conejo.tipoComida); // Zanahorias 🥕
console.log(conejo.distancia); // 2 metros
console.log(conejo.infoFitofago()); // Pepito come Zanahorias 🥕 además salta 2 metros

console.log('==================================================')
const conejo2 = new Herbivoro('Roger', 'Lechuga 🥬');
console.log(conejo2.nombre);
console.log(conejo2.tipoComida);
console.log(conejo2.distancia);
conejo2.nombre = "PomPom";
console.log(conejo2.nombre);
conejo2.tipoComida = "Maní 🥜"
console.log(conejo2.tipoComida);

console.log('====================CLASE DADO=====================')

class Dado {
    constructor() {
        // En el constructor definimos un atributo llamado _valor que almacena el valor 1:
        this._valor = 1;
    }
    // Definimos la propiedad 'valor' con sus respectivos 'set' y 'get':
    /* El método get retorna el valor almacenado en el atributo '_valor'
       y el método set actualiza el valor almacenado en el atributo '_valor'.
    */
    get valor() {
        return this._valor;
    }

    /*
       Mejorar el set

        set valor(v) {
          if (v>=1 && v<=6 && v%1===0)
              this._valor=v;
          else
              throw "Error en asignación de valor del dado"; 
        }

        Con ésta nueva implementación del método set solo almacenaremos
        valores válidos en el atributo _valor si llega un número entero comprendido
        entre 1 y 6. En el caso que llegue un valor con coma 1.4 que
        no está comprendido entre 1 y 6 luego no cumple la tercer condición
        que el resto de dividirlo sea cero.

        Cualquiera de estas asignaciones detiene el programa con un error:

        Vimos que llamamos al método set mediante una asignación, 
        al método get lo llamamos directamente por su nombre:
    
    */
    // set valor(v) {
    //     this._valor = v;
    // }

    set valor(v) {
        if (v>=1 && v<=6 && v%1===0)
            this._valor=v;
        else
         document.write('Error en asignación de valor del dado<br>'); 
    }

    imprimir() {
        document.write(this.valor + '<br>');
    }
}

const dado1 = new Dado();
// Metodo SET
dado1.valor=7;
dado1.valor=0;
dado1.valor=3.4;
dado1.valor='Hola';
dado1.valor=6;
dado1.imprimir();
/*
    Donde definimos un objeto de la clase Dado accedemos a
    la propiedad dado para cambiar su valor por medio de una asignación:
    Es decir que en dicha asignación se está ejecutando el método:
        set valor(v) {
                this._valor = v;
        }
    
    En principio podría pensarse que lo más fácil es acceder
    directamente al atributo _valor y olvidarnos del método set:

    dado1._valor=6;
*/
// dado1.valor = 6;
// dado1.imprimir();

const dado1 = new Dado();
// Metodo set
dado1.valor=5;
// Metodo get
document.write(dado1.valor);