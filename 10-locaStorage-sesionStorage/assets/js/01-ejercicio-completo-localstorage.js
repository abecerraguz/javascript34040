/*
=======EJERCICIO LOCALSTORAGE===================================================================================================
======================================================================================================================
*/


if( typeof window === 'object' ){ 

	// INICIO DEL DOMContentLoaded
	window.addEventListener('DOMContentLoaded', () => {

		let formulario = document.querySelector('#formPeliculas');

		formulario.addEventListener('submit', ( event ) => {
			
			// Prevenir que el formulario se refresque
			event.preventDefault();

			// Seleccionamos el ID del input peliculas
			let tituloPelicula = document.querySelector('#addPelicula').value;
	
			// Validamos si el input biene vacio
			if ( tituloPelicula.length >= 1 ) {
				// Ingresamos el Titulo de la pelicula al LocalStorage
				localStorage.setItem( tituloPelicula, tituloPelicula);
				location.reload();
			}else{
				alert('Debe ingresa una película')
			}
	
		});
	
	
		let ul = document.querySelector('#listaPeliculas');

		ul.classList.add('list-group', 'list-group-flush');

		// Recorremos el LocalStorage con un for in
		for( let i in localStorage ){
			// console.log('Salida de localStorage--->', i)
			if( typeof localStorage[i] == 'string'){
				let li = document.createElement('li');
				li.classList.add('list-group-item');
				li.append( localStorage[i] );
				ul.append(li);
			}
	
		}

		
	
	
		let removeFormulario = document.querySelector('#formBorrarPeliculas');
	
		removeFormulario.addEventListener('submit', ( event ) => {
			

			// Seleccionamos el ID del input peliculas
			let tituloPelicula = document.querySelector('#removePelicula').value;
	
			// Validamos si el input biene vacio
			if ( tituloPelicula.length >= 1 ) {
				// Ingresamos el Titulo de la pelicula al LocalStorage
				localStorage.removeItem(tituloPelicula);
				location.reload();
			}
	
	
		});

		// OBJETOS CON LOCAL STORAGE
		let usuario = {
			nombre: 'Alejandro Becerra',
			email: 'abcerraguz@gmail.com',
			web: 'http:www.abecerrafrontend.cl'
		}

		/* 
			Para guardar objetos en el local Storage, importante para guardar datos estos
			deben ser convertidos a un string si no el objeto quedaria como
			Indefinido. Para esto se utiliza la propiedad JSON.stringfy().
		*/

		localStorage.setItem('usuario',  usuario );

	})
}

