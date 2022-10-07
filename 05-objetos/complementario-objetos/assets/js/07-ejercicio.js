/**
    EJERCICIO 04 ( Integración ) 

    Un consultorio médico requiere un programa realizado en JavaScript, que permita
    almacenar y/o modificar los datos de sus pacientes. Así como filtrar y mostrar los pacientes
    por nombre para poder hacer una búsqueda más rápida y ubicar la historia médica de cada
    persona. En el siguiente diagrama UML se puede observar cual es la cardinalidad de los
    objetos y las propiedades que tiene cada uno.

    Primeramente se deben mostrar todos los pacientes con sus datos personales, luego
    mediante un método de búsqueda, mostrar los datos del paciente que concuerden con el
    nombre que se envíe al método como argumento. Igualmente se deben proteger los datos y 
    evitar modificaciones directas, por lo que se debe implementar getters y setters.

    Todo esto se puede mostrar en la consola del navegador web de tu preferencia.

    REQUERIMIENTOS:
    
    1. Crear todo el código usando ES5.
    2. Crear una función constructora para cada objeto.
    3. Implementar métodos getters y setters para poder acceder y modificar los datos de
       los pacientes.
    4. Crear un método mediante la propiedad prototype que permita buscar los datos de
       los usuarios por nombre y otro método que permita mostrar todos los datos de los
       usuarios registrados.
    5. Instanciar cada objeto utilizando la instrucción new.

 */

function Consultorio( nombre, paciente ){
    
    this._nombre = function(){
        return nombre;
    }

    this._paciente = function(){
        return paciente || []
    }
}

Consultorio.prototype.getName = function(){
    return this._nombre()
}

Consultorio.prototype.setName = function( nuevo_nombre ){
    this._nombre = function(){
        return nuevo_nombre;
    }
}

Consultorio.prototype.agregarPaciente = function( paciente ){
    this.paciente.push(paciente)
}

Consultorio.prototype.getPacientes = function () {
    this._paciente().forEach( function( elemento,index ){
        console.log( '--------------------------------------' );
        console.log( "Paciente " +index);
        console.log( "Nombre: " + elemento._nombre());
        console.log( "Edad: " + elemento._edad());
        console.log( "Rut: " + elemento._rut());
        console.log( "Diagnostico: " + elemento._diagnostico());
    })
}

Consultorio.prototype.getPacientePorNombre = function( busquedaNombre ){
    this._paciente().forEach(function(elemento,index){

        if(elemento._nombre() == busquedaNombre ){
            console.log( '--------------------------------------' );
            console.log( "Paciente Encontrado N°" +(index+ 1 ));
            console.log( "Nombre: " + elemento._nombre());
            console.log( "Edad: " + elemento._edad());
            console.log( "Rut: " + elemento._rut());
            console.log( "Diagnostico: " + elemento._diagnostico()); 
            console.log( '--------------------------------------' );
            
        }

    })
}

function Paciente( nombre, edad, rut, diagnostico ){

    this._nombre = function(){
        return nombre;
    }

    this._edad = function(){
        return edad;
    }

    this._rut = function(){
        return rut;
    }

    this._diagnostico = function(){
        return diagnostico;
    }
}

Paciente.prototype.getName = function(){
    return this._nombre();
}
Paciente.prototype.getEdad = function(){
    return this._edad();
}
Paciente.prototype.getRut = function(){
    return this._rut();
}
Paciente.prototype.getRut = function(){
    return this._rut();
}
Paciente.prototype.getDiagnostico = function(){
    return this._diagnostico();
}

Paciente.prototype.setName = function( nuevo_nombre ) {  
    this._nombre = function () {
        return nuevo_nombre;
    }
}
Paciente.prototype.setEdad = function( nueva_edad ) {  
    this._edad = function(){
        return nueva_edad;
    }
}
Paciente.prototype.setRut = function(nuevo_rut) {  
    this._rut = function(){
        return nuevo_rut;
    }
}
Paciente.prototype.setDiagnostico = function(nuevo_diagnostico) {  
    this._diagnostico = function() {
        return nuevo_diagnostico;
    }
}



var p1 = new Paciente( 'Juan' , 35 , '1234567-8' , 'Problemas respiratorios' );
var p2 = new Paciente( 'Jocelyn' , 30 , '8765432-1' , 'Problemas en la columna' );

var consultario_xyz = new Consultorio( 'xyz' ,[ p1,p2 ]);
console.log('Salida de consultario_xyz--->', consultario_xyz )
console.log( p1.getName() );
console.log( p2.getEdad());
p2.setDiagnostico( "Gripe general" );
console.log(p2.getDiagnostico());
console.log(consultario_xyz.getName());
// consultario_xyz.getPacientes();
consultario_xyz.getPacientePorNombre( 'Jocelyn' );
consultario_xyz.getPacientePorNombre( 'Maria' );

