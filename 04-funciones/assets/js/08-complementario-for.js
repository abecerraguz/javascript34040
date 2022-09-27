console.log()
console.log('==================== FOR CON INCREMENTADOR ========================')
console.log()

for( let inicio = 1; inicio <= 10; inicio++){
    console.log(`Salida de inicio inicio++ incrementador, let inicio = ${inicio}; ${inicio} <= inicio++ (${inicio})`)
}

console.log()
console.log('==================== FOR CON ACUMULADOR EN MULTIPLICACION ========================')
console.log()

for( let inicio = 1; inicio <= 10; inicio++){
    let acumulador = inicio
    console.log(`Salida de acumulador en multiplicación ${acumulador}`, acumulador*=acumulador);
}

console.log()
console.log('==================== FOR CON ACUMULADOR EN SUMA ========================')
console.log()

for( let inicio = 1; inicio <= 10; inicio++){
    let acumulador = inicio
    console.log(`Salida de acumulador en suma ${acumulador}`, acumulador+=acumulador);
}

console.log()
console.log('==================== FOR CON ACUMULADOR EN RESTA ========================')
console.log()

for( let inicio = 1; inicio <= 10; inicio++){
    let acumulador = inicio
    console.log(`Salida de acumulador en resta ${acumulador}`, acumulador-=acumulador);
}

console.log()
console.log('==================== EJEMPLO CON WHILE ES INIFINITO ========================')
console.log()

let inicio = 1;
while(inicio <= 10){
    console.log(`Salida inicio inici++ incrementa en ${inicio}`, inicio)
    inicio++
}

console.log()
console.log('==================== FUNCION MULTIPLICACION ========================')
console.log()

const multiplicacion = numero => {
    for(let inicio = 1; inicio <= numero; inicio++){
        console.log(`Salida inicio ${inicio}, en multiplicación ${inicio}x${numero}`, inicio*numero)
    }
}

multiplicacion( 3 );

console.log()
console.log('==================== FUNCION SUMA ========================')
console.log()

const suma = numero =>{
    for(let inicio = 1; inicio <= numero; inicio++){
        console.log(`Salida inicio ${inicio}, en multiplicación ${inicio}+${numero}`, inicio+numero)
    }
}

suma(3);

console.log()
console.log('==================== FUNCION FACTORIAL ========================')
console.log()

const factorial = numero =>{
    let total = 1;
    for(i=1; i<= numero; i++){
        total = total*i
        /*
            1
            2
            3
            4
            5
        
        */
        console.log(`Total ${total} = (Total)${total} x ${i}`)
    }
    return total
}
factorial(5)


console.log()
console.log('==================== FOR IN y FOR OF ========================')
console.log()

/*
 PARA VER FOR IN Y FOR OF 
 Vamos a ver los Array y su caracteristcia
 son :
 Tinene un INDICE para identificat el dato
 autos[0] -----> Toyota
 autos[1] -----> Ford
 autos[2] -----> Nissan
 autos[3] -----> Rojo
 autos[4] -----> 2022
 autos[5] -----> false

 CONCEPTO DE LARGO DEL ARRAY (Length)
 Simplemente es el numero de elementos que contiene el array
*/
let autos = ['Toyota','Ford','Nissan','Rojo',2022,false]
    console.log('Ejemplo de rescatar info con el indice autos[3] --->', autos[3])
    console.log('Ejemplo para sacar el largo del Array autos.length', autos.length);

for(let inicio = 0; inicio < autos.length; inicio++){
        console.log('Salida de inicio--->', autos[inicio])
}

console.log()
console.log('==================== FOR IN ========================')
console.log()

for(index in autos){
    console.log('Salida de for in', autos[index])
}

console.log()
console.log('==================== FOR OF ========================')
console.log()

for( index of autos ){
    console.log('Salida de index en for of', index)
}


console.log()
console.log('==================== FOR IN y FOR OF ========================')
console.log()

// EJEMPLO 
let marcas = [

    { 
        marca:'Toyota',
        imagen:'toyota',
        descripcion:'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    },

    { 
        marca:'Nissan',
        imagen:'nissan',
        descripcion:'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    },

    { 
        marca:'Chevrolet',
        imagen:'chevrolet',
        descripcion:'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    },

    { 
        marca:'Honda',
        imagen:'honda',
        descripcion:'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    }

]
console.log('Salida de marcas--->',marcas)

document.write('<div class="container mb-5">')
document.write('<div class="row">')
document.write('<h2>Esta son las ultimas marcas</h2>')
document.write('<hr>')
for(let i = 0; i<marcas.length; i++ ){
    console.log('Salida-->', marcas[i])
    document.write(`<div class="col-md-3">
    <div class="card h-100">
        <img src="./assets/img/${marcas[i].imagen}.png" class="card-img-top" alt="${marcas[i].marca}">
        <div class="card-body">
            <h5 class="card-title">${marcas[i].marca}</h5>
            <p class="card-text">${marcas[i].descripcion}</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>
    </div>`)
}
document.write('</div>')
document.write('</div>')
