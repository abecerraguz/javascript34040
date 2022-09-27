/*
    Getters y Setters
    Generar un programa que permita crear un objeto para un vehículo con la propiedad de
    marca, luego se debe mostrar la marca y, posteriormente, modificarla mediante el uso de los
    getters y setters.
*/



function Vehiculo( marca ){

    var _marca = marca;

    Object.defineProperty( this, "_getMarca", {
        get: function () {
            return _marca
        }
    });

    Object.defineProperty( this, "_setMarca", {
        set: function ( marca ) {
            _marca = marca
        }
    });

}

Vehiculo.prototype.getMarca = function(){
    return this._getMarca;
};

Vehiculo.prototype.setMarca = function( marca ){
    this._setMarca = marca;
};

var v1 = new Vehiculo("Ford");
v1.setMarca('Honda')
console.log(v1.getMarca()); // "Ford"

v1.setMarca("Kia");
console.log(v1.getMarca()); // "Kia"


/*
    EJERCICIO 02
    Crear una funcion constructora de carta que modifique el numero y la pinta, crea un método getter y uno setter para las propiedades de
    número y pinta, que permitan visualizar y modificar cada uno de ellos.

*/

