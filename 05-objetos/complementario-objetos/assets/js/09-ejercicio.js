
let nombreConsultorio = prompt('Ingrese el nombre del consultorio')
let numero_de_pacientes = prompt('Ingrese mediante un numero entero el numero de pacientes a ingresar');


let contador = 0;
let listaPacientes = []

class Consultorio {
    constructor(nombre, paciente) {

        this._nombre = function () {
            return nombre;
        };

        this._paciente = function () {
            return paciente || [];
        };

    }
    getName() {
        return this._nombre();
    }
    setName(nuevo_nombre) {
        this._nombre = function () {
            return nuevo_nombre;
        };
    }
    agregarPaciente(paciente) {
        this.paciente.push(paciente);
    }

    getPacientes() {

        this._paciente().forEach(function (elemento, index) {
            console.log(`Numero de Paciente: ${index}`);
            console.log(`Nombre: ${elemento._nombre()}`);
            console.log(`Edad: ${elemento._edad()}`);
            console.log(`RUT: ${elemento._rut()}`);
            console.log(`Diagnostico: ${elemento._diagnostico()}`);
            console.log(`Valor de la atención: ${elemento._valorAtencion()}`);
        });

    }

    getValorTotalPacientes(){
        let valorAtenciones = []
        this._paciente().forEach(function (elemento, index) {
            valorAtenciones.push(elemento._valorAtencion());
        });
        console.log('Valor total de atenciones', valorAtenciones.reduce( ( valorAnterior, valorActual ) => valorAnterior+valorActual, 0 ))
    }

    getPacienteNombre( busquedaDeNombre ) {

        this._paciente().forEach(function (elemento, index) {

            if (elemento._nombre() == busquedaDeNombre) {

                console.log(`Numero de Paciente: ${index}`);
                console.log(`Nombre: ${elemento._nombre()}`);
                console.log(`Edad: ${elemento._edad()}`);
                console.log(`RUT: ${elemento._rut()}`);
                console.log(`Diagnostico: ${elemento._diagnostico()}`);
                console.log(`Valor de la atención: ${elemento._valorAtencion()}`);

            }

        });

    }
}
 
class Paciente {

    constructor( nombre, edad, rut, diagnostico, valorAtencion ) {

        this._nombre = function () {
            return nombre;
        };

        this._edad = function () {
            return edad;
        };

        this._rut = function () {
            return rut;
        };

        this._diagnostico = function () {
            return diagnostico;
        };

        this._valorAtencion = function () {
            return valorAtencion;
        };

    }
    getName() {
        return this._nombre();
    }
    getEdad() {
        return this._edad();
    }
    getRut() {
        return this._rut();
    }
    getDiagnostico() {
        return this._diagnostico();
    }

    getValortencion() {
        return this._valorAtencion();
    }

    setName(nuevo_nombre) {
        this._nombre = function () {
            return nuevo_nombre;
        };
    }
    setEdad(nueva_edad) {
        this._edad = function () {
            return nueva_edad;
        };
    }
    setRut(nuevo_rut) {
        this._rut = function () {
            return nuevo_rut;
        };
    }
    setDiagnostico(nuevo_diagnostico) {
        this._diagnostico = function () {
            return nuevo_diagnostico;
        };
    }
}


while( contador < numero_de_pacientes ){

      
      let nombre = prompt('Ingrese el nombre del paciente')
      let edad = parseInt(prompt('Ingrese la edad'))
      let rut = prompt('Ingrese el rut')
      let diagnostico = prompt('Ingrese diagnostico')
      let valorAtencion = parseInt(prompt('Ingrese Valor atencion'))
      let paciente = new Paciente( nombre, edad, rut, diagnostico,valorAtencion )
      
      listaPacientes.push( paciente )
      
   
      contador++

}

let buscar = prompt('Ingrese el nombre del paciente que desea buscar')

const imprimirConsultorio = ( consultorio, pacientes, buscar )=>{
    
    console.log( 'Nombre del consultorio:', consultorio.getName() )
    console.log('=================NOMBRE DE PACIENTES OBJETO PACIENTE====================')
    
    // console.log( 'Salida de ARRAY OBJETOS PACIENTES',pacientes )
    for(let paciente of pacientes){
        console.log('Salida de paciente', paciente._nombre())
    }
    console.log('=================SALIDA DE PACIENTES POR CONSULTORIO====================')
    consultorio.getPacientes() 
    console.log('=================SALIDA DE PACIENTE BUSCADO POR NOMBRE====================')
    consultorio.getPacienteNombre(buscar);
    console.log('=================VALOR TOTAL DE ATENCIONES DE LA CLINICA====================')
    consultorio.getValorTotalPacientes();
}

let consultorio = new Consultorio( nombreConsultorio, listaPacientes )

imprimirConsultorio( consultorio,listaPacientes, buscar )