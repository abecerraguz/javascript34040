// CLASES ECMA 6
// CLASES Y METODOS
class Rectangulo { 

    constructor(x, y) {
        this.x = x;
        this.y = y; 
    }

    calcularArea(){
        return this.x * this.y;
    }
    calcularPerimetro(){
        return (this.x + this.y) * 2; 
    }
    
}

let rectangulo1 = new Rectangulo(3,4);
console.log(rectangulo1.calcularArea());
console.log(rectangulo1.calcularPerimetro());

console.log('============EJERCICIO================')

/**
    La empresa XYZ Consultores, necesita un sistema donde pueda registrar la información de sus clientes, para poder calcular el impuesto anual que debe pagar cada cliente según el monto total de ventas y deducciones anuales entregado, el cálculo se realizará mediante la siguiente fórmula:

    Fórmula:(( 𝑚𝑜𝑛𝑡𝑜𝐵𝑟𝑢𝑡𝑜𝐴𝑛𝑢𝑎𝑙 − 𝑑𝑒𝑑𝑢𝑐𝑐𝑖𝑜𝑛𝑒𝑠 ) * 21%)

    La empresa solicita desarrollar un programa con JavaScript utilizando las nuevas tecnologías de ES6, considerando clases y que las modificaciones y consultas sean mediante método específico.

 */


class Cliente {

    constructor( cliente, impuestos ) {
        this.cliente = cliente
        this.impuestos = impuestos
    }

    calcularImpuesto(){
        return (`El impuesto total a pagar es: ${ (this.impuestos.monto_bruto_anual - this.impuestos.deducciones)*0.21 }`);
    }
}

class Impuesto {
    constructor( monto_bruto_anual, deducciones ){
        this.monto_bruto_anual = monto_bruto_anual;
        this.deducciones = deducciones;
    }
}

let impuesto1 = new Impuesto( 100000, 2000 );
let cliente1 = new Cliente('Juan', impuesto1);
console.log( cliente1.calcularImpuesto() );
