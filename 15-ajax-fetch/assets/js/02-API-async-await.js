// https://api.giphy.com/v1/gifs/random?api_key=0WGS7rWOlSefc7EpGKAS3wuvmHHTGxEm
// https://developers.giphy.com/
// https://www.omdbapi.com/?apikey=

// https://www.omdbapi.com/?apikey=4994b03d&page=1&s=Queen
// https://www.omdbapi.com/


//const apiKey = '0WGS7rWOlSefc7EpGKAS3wuvmHHTGxEm'

// fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`)
//     .then( resp => resp.json() )
//     .then(({ data })=> {
//         const { url } = data.images.original

        
//         const img = document.createElement('img')
//         img.src = url

//         document.body.append( img )

// })

// Obtenemos nuestro APIKEY

const insertDOMcontent = document.querySelector('#insertDOMcontent')
const formulario = document.querySelector('#formulario')
const mensaje = document.querySelector('#mensaje')
const contentSpinnerLoading = document.querySelector('.contentSpinnerLoading')
contentSpinnerLoading.style.display = 'none';
const loadingMore = document.querySelector('#loadingMore')
const scrollTopButton = document.querySelector('#scrollTopButton')

const apiKey = '4994b03d'
let counter = 1;
let lastKnownScrollPosition = 0;
let ticking = false;

/*
    EXPLICACION CONTROL DE EXCEPCION

    try {
        
        console.log('INICIO CONTROL DE EXCEPCION.......')

        //console.log(!(typeof procesoUno === undefined))

        if( !(typeof procesoUno === undefined) ){
            throw new Error("Este es un error controlado con throw y new Error")
        }

    } catch (error) {
        alert(error)
    }

    console.log('CONTINUA EL PROCESO ......')
*/

const imprimirData = ( infoPicture ) => {

    console.log('Salida de infoPicture', infoPicture)

    if( infoPicture !== undefined ){
        infoPicture.forEach(( element ) => {
       
            const { Title, Year, Type, Poster } = element
            let placeHold = 'https://placehold.jp/300x400.png'
            insertDOMcontent.innerHTML += `<div class="col-12 col-md-6 my-3">
            <div class="card mb-4 h-100">
                <img class="imgFitFull" src="${ Poster ==='N/A' ? placeHold  : Poster  }" class="card-img-top" alt="${Title}">
                <div class="card-body">
                <div class="info-card">
                  <h5 class="card-title">${Title}</h5>
                  <small></small>
                  <img src="./assets/img/estrellas.png" class="d-block my-3" alt="Estrellas">
                  <p class="precio"><span class="u-pull-right">Año ${Year}</span></p>
                  <hr>
                  <p class="card-text"></p>
               
                </div>
                </div>
              </div>
        </div>`;
        });
    }else{
        mensajeModal(`<p>Lo sentimos debe escribir una palabra o título de pelicula</p>`)
        $('#mensajeModal').modal('toggle');
        setTimeout(() => {
            $('#mensajeModal').modal('toggle');
        }, 5000);
    }
   
}

const mensajeModal = ( info )=>{
    mensaje.innerHTML =`${info}`
}

const findPicture = async ( picture="Queen", num=1 )=>{

        try {
                contentSpinnerLoading.style.display = 'flex';
                const response = await fetch(`https://www.omdbapi.com/?apikey=${apiKey}&page=${num}&s=${picture}`)
                
                if (!response.ok) {
	 	            throw new Error(`HTTP error! status: ${response.status}`);
	            }

                const data = await response.json()
                const { Search }  = data 
                imprimirData( Search )
                contentSpinnerLoading.style.display = 'none';
        } catch (error) {
            //console.log(error)
            mensajeModal(`<p>${error}</p>`)
            $('#mensajeModal').modal('toggle');
            setTimeout(() => {
                $('#mensajeModal').modal('toggle');
            }, 3000);
        }
}

const incrementFind = ( picture ) => {
  counter += 1;
  console.log(counter)
  findPicture( picture , counter )
}

// LISTENER
loadingMore.addEventListener('click', function(e){
    e.preventDefault();
    const inputBuscador = document.querySelector('#findPicture').value
    let data =  inputBuscador || 'Queen'
    incrementFind(data)
})

// function doSomething( scrollPos ) {
//     // Do something with the scroll position
//     console.log('Salida de scrollPos',scrollPos)
//     console.log('Salida de window.innerHeight',self.innerHeight);
//     console.log(scrollPos === self.innerHeight)
//     if( scrollPos === self.innerHeight ){
//         const inputBuscador = document.querySelector('#findPicture').value
//         let data =  inputBuscador || 'Queen'
//         incrementFind(data)
//         // alert(self.innerHeight)
//     }
// }

// document.addEventListener('scroll', (e) => {
//     lastKnownScrollPosition = window.scrollY;
  
//     if (!ticking) {
//       window.requestAnimationFrame(() => {
//         doSomething(lastKnownScrollPosition);
//         ticking = false;
//       });
  
//       ticking = true;
//     }
// });

formulario.addEventListener('submit', function(e){
    e.preventDefault()
    const inputBuscador = document.querySelector('#findPicture').value
   
    if(inputBuscador.length > 0){
        findPicture(inputBuscador)
    }else{
        mensajeModal('<p>Lo sentimos debe escribir una palabra o título de pelicula!!<p>')
        $('#mensajeModal').modal('toggle');
        setTimeout(() => {
            $('#mensajeModal').modal('toggle');
        }, 3000);
    }
})

document.addEventListener("DOMContentLoaded", () => {
    findPicture()
});

