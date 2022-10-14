let cursosSeleccionados = []
// Objeto JSON Base de dato
import cursos from './utilities/cursos.js';

// Imprimimos la data
import printData from './utilities/printData.js';

// Agregamos el curso al carro
import agregarCursoAlcarro from './utilities/agregarCursoAlcarro.js'

// NUEVO: Contenido cargado
document.addEventListener("DOMContentLoaded", () => {
    cursosSeleccionados = JSON.parse(localStorage.getItem("cursos")) || [];
    agregarCursoAlcarro( cursosSeleccionados );
});

sincronizarConLocalStorage()

// Imprimimos la data en el DOM
printData(cursos);

function sincronizarConLocalStorage(){
    localStorage.setItem("cursos", JSON.stringify( cursosSeleccionados ));
};

function buscarCurso ( idCurso, buscarCursos ){

    console.log('Mierdaaaaaa', idCurso, buscarCursos, cursosSeleccionados )
    // Usuamos find metodo que me retorna la primera coincidencia
    let cursoSeleccionado = buscarCursos.find((element) => idCurso === element._id);
    
    //  Metemos el curso seleccionado en un array porque viene como un objeto
    let curso = [];
   
    curso.push(cursoSeleccionado);
    
    // Usuamos un spread operator para ir guardano los ya seleccionado y el ultimo seleccionado
    cursosSeleccionados = [...cursosSeleccionados, ...curso];

    agregarCursoAlcarro(cursosSeleccionados);
};

// Seleccionamos los botones del card en un HTML Colection
let buttonCard = document.querySelectorAll("#insertDOMcontent .card a");

// Recorremos los botones asocimaos a un escuchador de eventos
buttonCard.forEach((element) => {
    element.addEventListener("click", (e) => {
        e.preventDefault();
        let id = e.target.id;
        buscarCurso( id, cursos, cursosSeleccionados );
    });
});
