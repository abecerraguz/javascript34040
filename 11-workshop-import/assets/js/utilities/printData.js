import * as UI from './interfaz.js';

export default function printData(object) {
    object.forEach((element) => {
        UI.insertDOMcontent.innerHTML += `<div class="col-md-4">
                <div class="card mb-4">
                    <img src="${element.picture}300x150.png" class="card-img-top" alt="...">
                    <div class="card-body">
                    <div class="info-card">
                      <h5 class="card-title">${element.title}</h5>
                      <small>${element.name}</small>
                      <img src="./assets/img/estrellas.png" class="d-block my-3" alt="Estrellas">
                      <p class="precio">$200  <span class="u-pull-right">$${element.price}</span></p>
                      <hr>
                      <p class="card-text"></p>
                      <div class="d-grid gap-2">
                      <a href="#" class="btn btn-info agregar-carrito" id="${element._id}">Agregar al carrito</a>
                      </div>
                    </div>
                    </div>
                  </div>
            </div>`;
    });
}