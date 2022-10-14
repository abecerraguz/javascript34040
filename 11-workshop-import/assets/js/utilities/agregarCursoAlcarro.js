import sincronizarConLocalStorage from './sincronizarConLocalStorage.js';
// Importamos nuestras variables
import * as UI from './interfaz.js';


export default function agregarCursoAlcarro( cursosSeleccionados ) {

    UI.listaCarrito.innerHTML = ``;

    cursosSeleccionados.forEach((element) => {
        UI.listaCarrito.innerHTML += `<tr>
            <td><img src="${element.picture}150x100.png" alt="${element.title}"></td>
            <td>${element.title}</td>
            <td class="text-center">${element.price}$</td>
            <td class="text-center">1</td>
            <td class="text-center"><a href="#" class="borrar-curso" data-id="1">X</a></td>
          </tr>`;
    });
    sincronizarConLocalStorage();
}

