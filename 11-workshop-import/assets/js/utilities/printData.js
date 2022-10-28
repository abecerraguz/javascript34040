
import * as UI from './interfaz.js';
import buscarCurso from './buscarCurso.js';
import myJson from '../db/cursos.json' assert {type: 'json'};
import siEstanEnStorage from './siEstanEnStorage.js';


let obtenerDesdeElStorage = JSON.parse(localStorage.getItem("cursos")) || [];
const chile = new Intl.NumberFormat("es-CL", { currency: "CLP", style: "currency" })
const printData = ( object ) => {
    // console.log('El storage de PRINTDATA-->',obtenerDesdeElStorage)
    object.forEach(( element ) => {
        // DESESTRUCTURACION
        // console.log('Salida de element', element )
        const { _id, title, name, picture, price } = element
        UI.insertDOMcontent.innerHTML += `<div class="col-12 col-md-4">
        <div class="card mb-4">
            <img class="imgFitFull" src="${picture}" class="card-img-top" alt="...">
            <div class="card-body">
            <div class="info-card">
              <h5 class="card-title">${element.title}</h5>
              <small>${element.name}</small>
              <img src="./assets/img/estrellas.png" class="d-block my-3" alt="Estrellas">
              <p class="precio"><span class="descuento">$200</span>  <span class="u-pull-right">$${chile.format(element.price)}</span></p>
              <hr>
              <p class="card-text"></p>
              <div class="d-grid gap-2">
              <a href="#" class="btn btn-info agregarCarrito" id="${element._id}" title="${element.title}">Agregar al carrito</a>
              </div>
            </div>
            </div>
          </div>
    </div>`;
    });

    let buttonCard = document.querySelectorAll("#insertDOMcontent .card a")
   
    
    buttonCard.forEach((element) => {
      element.addEventListener("click", (e) => {
          e.preventDefault();
          let id = e.target.id;
          siEstanEnStorage( id, obtenerDesdeElStorage,'addClass')
          buscarCurso( id, myJson );
          
      });
    });

}

export default printData

