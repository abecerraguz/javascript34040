import sincronizarConLocalStorage from './sincronizarConLocalStorage.js';
import contadorCursos from './contadorCursos.js';
import siEstanEnStorage from './siEstanEnStorage.js';
import priceAll from './priceAll.js';
// Importamos nuestras variables
import * as UI from './interfaz.js';
const chile = new Intl.NumberFormat("es-CL", { currency: "CLP", style: "currency" })

const agregarCursoAlcarro = ( cursosSeleccionados ) => {
    // console.log( 'Salida de agregarCursoAlcarro--->',cursosSeleccionados )
    let div = document.createElement('div')
    div.setAttribute('id','tableHeight')
    console.log('Salida de div',div)
    UI.listaCarrito.after(div)
    UI.listaCarrito.innerHTML = ``;

    cursosSeleccionados.forEach((element) => {
        
        const { _id, title, name, picture, price } = element

        UI.listaCarrito.innerHTML += `<tr>
        <td><img class="imgFitMiniatura" src="${element.picture}" alt="${element.title}"></td>
        <td>${element.title}</td>
        <td class="text-center">${chile.format(element.price)} CLP$</td>
        <td class="text-center">
        <div class="product-count">
        <button type="button" class="decrement">-</button>
        <input type="number" class="product-count-value" value="1">
        <button type="button" class="increment">+</button>
      </div>
        </td>
        <td class="text-center"><a href="#" title="${element.title}" class="borrar-curso" data-id="1">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
  <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
</svg>
        </a></td>
      </tr>`;
    });

    // Seleccionamos el boton eliminar 
    let buttonDelete = document.querySelectorAll('#listaCarrito tr td a');
    let buttonDeleteAll = document.querySelector('#vaciarCarrito');
  
    // Lo recorremos 
    buttonDelete.forEach(element => {
        element.addEventListener('click',(e)=>{
            e.preventDefault();
            let title = e.target.title
            let id = e.target.id

            // Eliminar del arreglo del carrito,Filter retorna un nuevo Array
            // Filter si es distinto lo excluye 
            cursosSeleccionados = cursosSeleccionados.filter( curso => curso.title !== title );
            
            let obtenerDesdeElStorage = JSON.parse(localStorage.getItem("cursos")) || [];

            // console.log('Mierdaa-->',obtenerDesdeElStorage)
            // console.log('Mierdaa 1-->',cursosSeleccionados)

            agregarCursoAlcarro( cursosSeleccionados )
            priceAll(cursosSeleccionados)
            //sincronizarConLocalStorage( cursosSeleccionados );
            
            siEstanEnStorage( id , obtenerDesdeElStorage, 'removeClass' )
            contadorCursos( obtenerDesdeElStorage.length - 1 )

        })
    })

    buttonDeleteAll.addEventListener('click', (e)=>{
            e.preventDefault();
            localStorage.clear();
            location.reload();
    })

    sincronizarConLocalStorage( cursosSeleccionados );
    
}

export default agregarCursoAlcarro

