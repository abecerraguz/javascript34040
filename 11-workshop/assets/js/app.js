
// Variables globales
let insertDOMcontent = document.querySelector("#insertDOMcontent");
let listaCarrito = document.querySelector("#listaCarrito");
let cursosSeleccionados = [];

// Objeto JSON Base de dato
let cursos = [
    {
        _id: "63470b20ce26d340aaae02d8",
        title: "HTML5, CSS3, JavaScript",
        name: "Marsh Garner",
        picture: "https://loremflickr.com/320/240?lock=",
        price: 22,
    },
    {
        _id: "63470b20308a08838a6511f7",
        title: "Curso de Comida Vegetariana.",
        name: "Albert Lowery",
        picture: "https://loremflickr.com/320/240?lock=",
        price: 24,
    },
    {
        _id: "63470b204fc5779e83b74431",
        title: "Guitarra para Principiantes.",
        name: "Wood Chambers",
        picture: "https://loremflickr.com/320/240?lock=",
        price: 39,
    },
    {
        _id: "63470b20de77317d5ab48292",
        title: "Huerto en tu casa",
        name: "Monique Mcdaniel",
        picture: "https://loremflickr.com/320/240?lock=",
        price: 29,
    },
    {
        _id: "63470b20d96b74bb29945e2e",
        title: "Color y Decoración",
        name: "Julia Patrick",
        picture: "https://loremflickr.com/320/240?lock=",
        price: 31,
    },
    {
        _id: "63470b20cb383a6fc94d3c24",
        title: "Diseño Web para Principiantes",
        name: "Carey Gardner",
        picture: "https://loremflickr.com/320/240?lock=",
        price: 20,
    },
    {
        _id: "63470b2042d9e35eff26ea6b",
        title: "Comida Mexicana",
        name: "Travis Vega",
        picture: "https://loremflickr.com/320/240?lock=",
        price: 33,
    },
    {
        _id: "63470b20bef187c539846c30",
        title: "Estudio Musical en tu casa",
        name: "Perkins Macias",
        picture: "https://loremflickr.com/320/240?lock=",
        price: 38,
    },
    {
        _id: "63470b2093a0abba7688bf6d",
        title: "Cosecha tus propias frutas",
        name: "Hicks Bradshaw",
        picture: "https://loremflickr.com/320/240?lock=",
        price: 32,
    },
    {
        _id: "63470b206be5321ee51fcef3",
        title: "Prepara galletas caseras",
        name: "Jewell Summers",
        picture: "https://loremflickr.com/320/240?lock=",
        price: 40,
    },
    {
        _id: "63470b20bd4df640e2b26fd3",
        title: "100 Recetas de Comida Natural",
        name: "Cortez Melendez",
        picture: "https://loremflickr.com/320/240?lock=",
        price: 20,
    },
    {
        _id: "63470b2022f6d565a7806fc0",
        title: "Introducción Javascript",
        name: "Le Alvarez",
        picture: "https://loremflickr.com/320/240?lock=",
        price: 37,
    },
];

// NUEVO: Contenido cargado
document.addEventListener("DOMContentLoaded", () => {
    cursosSeleccionados = JSON.parse(localStorage.getItem("cursos")) || [];
    agregarCursoAlcarro();
});

function sincronizarConLocalStorage(){
    localStorage.setItem("cursos", JSON.stringify(cursosSeleccionados));
};

function printData( object) {
    object.forEach(( element, index ) => {
        insertDOMcontent.innerHTML += `<div class="col-md-4">
                <div class="card mb-4">
                    <img class="imgFitFull" src="${element.picture}${index}" class="card-img-top" alt="...">
                    <div class="card-body">
                    <div class="info-card">
                      <h5 class="card-title">${element.title}</h5>
                      <small>${element.name}</small>
                      <img src="./assets/img/estrellas.png" class="d-block my-3" alt="Estrellas">
                      <p class="precio"><span class="descuento">$200</span>  <span class="u-pull-right">$${element.price}</span></p>
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

function agregarCursoAlcarro() {

    listaCarrito.innerHTML = ``;
    
    cursosSeleccionados.forEach((element,index) => {
      

        listaCarrito.innerHTML += `<tr>
            <td><img class="imgFitMiniatura" src="${element.picture}${index}" alt="${element.title}"></td>
            <td>${element.title}</td>
            <td class="text-center">${element.price}$</td>
            <td class="text-center">1</td>
            <td class="text-center"><a href="#" id="${element._id}" class="borrar-curso" data-id="1">X</a></td>
          </tr>`;
    });

    // Seleccionamos el boton eliminar 
    let buttonDelete = document.querySelectorAll('#listaCarrito tr td a');
    
    // Lo recorremos 
    buttonDelete.forEach(element => {
        element.addEventListener('click',(e)=>{
            e.preventDefault();
            let id = e.target.id
            // Eliminar del arreglo del carrito,Filter retorna un nuevo Array
            // Filter si es distinto lo excluye 
            cursosSeleccionados = cursosSeleccionados.filter( curso => curso._id !== id );
            console.log('Salida de cursosSeleccionados', cursosSeleccionados)
            agregarCursoAlcarro()
        })
    })

    sincronizarConLocalStorage();
}

// Buscamos el curso dentro de nuestro JSON
function buscarCurso ( idCurso, buscarCursos ){

    // Usuamos find metodo que me retorna la primera coincidencia
    let cursoSeleccionado = buscarCursos.find((element) => idCurso == element._id);
    
    // Metemos el curso seleccionado en un array porque viene como un objeto
    let curso = [];
   
    curso.push(cursoSeleccionado);
    
    // Usuamos un spread operator para ir guardano los ya seleccionado y el ultimo seleccionado
    cursosSeleccionados = [...cursosSeleccionados, ...curso];

    agregarCursoAlcarro();
};


// Imprimimos la data en el DOM
printData(cursos);

// Seleccionamos los botones del card en un HTML Colection
let buttonCard = document.querySelectorAll("#insertDOMcontent .card a");

// Recorremos los botones asocimaos a un escuchador de eventos
buttonCard.forEach((element) => {
    element.addEventListener("click", (e) => {
        e.preventDefault();
        let id = e.target.id;
        buscarCurso(id, cursos);
    });
});
