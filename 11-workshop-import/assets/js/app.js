
import printData from './utilities/printData.js';
import agregarCursoAlcarro from './utilities/agregarCursoAlcarro.js'
import sincronizarConLocalStorage from './utilities/sincronizarConLocalStorage.js';
import myJson from './db/cursos.json' assert {type: 'json'};
import * as UI from './utilities/interfaz.js';
import contadorCursos from './utilities/contadorCursos.js';
import siEstanEnStorage from './utilities/siEstanEnStorage.js';
import priceAll from './utilities/priceAll.js';

UI.cantidad.style.display = 'none';

let imgCarrito = document.querySelector('#img-carrito');


imgCarrito.addEventListener('click', (e)=>{
    e.preventDefault()
    console.log('Salida')
    let carrito = document.querySelector('#carrito')
    let table = document.querySelector('#carrito table.table')
    let botonCarrito = document.querySelector('#vaciarCarrito')
    console.log('Salidaaaa',  typeof carrito.classList[1])

    if(carrito.classList[1] === 'hidde'){

        carrito.classList.remove('hidde')
        carrito.classList.add('show')

        table.classList.remove('hidde')
        table.classList.add('show')

        botonCarrito.classList.remove('hidde')
        botonCarrito.classList.add('show')
        
    }else{
        carrito.classList.remove('show')
        carrito.classList.add('hidde')

        table.classList.remove('show')
        table.classList.add('hidde')

        botonCarrito.classList.remove('show')
        botonCarrito.classList.add('hidde')
    }
   
})

// Cargar desde el localStorage
document.addEventListener("DOMContentLoaded", () => {


    let obtenerDesdeElStorage = JSON.parse(localStorage.getItem("cursos")) || [];
    let id = []

    obtenerDesdeElStorage.forEach(element => {
        id.push(element._id)
    });

    // 
    // console.log('El storage de APP-->',obtenerDesdeElStorage)
    //console.log('SALIDA DE GETITEM', JSON.parse(localStorage.getItem("cursos")))
    priceAll(obtenerDesdeElStorage)
    agregarCursoAlcarro( obtenerDesdeElStorage );
    sincronizarConLocalStorage( obtenerDesdeElStorage )
    contadorCursos( obtenerDesdeElStorage.length )
    printData( myJson );
    siEstanEnStorage(id, obtenerDesdeElStorage, 'DOMContentLoaded')
});





