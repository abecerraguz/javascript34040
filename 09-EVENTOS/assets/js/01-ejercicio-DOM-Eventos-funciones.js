/*
	0. Eventos
	1. Formulario Campos: Nombre, Apellidos y Edad
	2. Boton de enviar el formulario : evento submit
	3. Mostrar datos por Pantalla
	4. Validar Formulario
*/


// FORMAS DE EJECUTAR UN EVENTO
/*


*/

// let infoModal = new bootstrap.Modal(document.getElementById('infoModal'))


if( typeof window === 'object' ){

	// INICIO DEL DOMContentLoaded
	window.addEventListener('DOMContentLoaded', function(){

		console.log('EL DOM SE CARGO')

		console.log('==================INICIO OPCION 1=======================')

			let opcionUno = document.getElementById('opcionUno')
			let opcionDos = document.getElementById('opcionDos')

			opcionUno.addEventListener('click', respuestaClickOpcionUno )

			function respuestaClickOpcionUno(e){
				console.log('Se ejecuta la respuesta de opcion Uno')
			}

		console.log('==================/ INICIO OPCION 1=======================')


		console.log('==================INICIO OPCION 2=======================')

			opcionDos.onclick = (e) =>{
				console.log('Se ejecuta la respuesta de la opcion Dos')
			}

		console.log('==================INICIO OPCION 2=======================')


		console.log('==================INICIO OPCION 3=======================')

		function respuestaClickOpcionTres(e){
			console.log('Se ejecuta la respuesta de opcion tres')
		}

		console.log('==================/INICIO OPCION 3=======================')
	



		/*
		TIPOS DE EVENTOS

			mouse
			teclado
			change
			input
			submit
			otros

			mouse
				mousedown/mouseup
				mouseover/mouseout
				mousemove
				click
			teclado
				keydown
				keyup
			( input type select ) change
			( evento input ) input
			( evento submit ) submit

		*/

		let nav = document.querySelector('.navegacion');

		nav.addEventListener('mouseover', function(){
			console.log('Entrando en la navegacion')
			nav.style.background = 'red'
		})

		nav.addEventListener('mouseout', function(){
			console.log('Saliendo de la navegacion')
			nav.style.background = 'transparent'
		})

		let busqueda = document.querySelector('.busqueda')
		

		let leerInput = ( e ) =>{
			console.log('e obtiene toda la info de input',e)
			console.log('e.type muestra que elemento es',e.type)
			console.log('e.target muestra el objeto input',e.target)
			console.log('e.target.value trae el dato que yo escriba en el input',e.target.value)
		}

		busqueda.addEventListener( 'input' , leerInput)

		// Seleccionamos el formulario
		let formulario = document.querySelector('#formulario')
		// mensaje con los datos del formulario
		let mensajeDatos = document.querySelector('#alerta')
		// escondemos el mensaje 
		mensajeDatos.style.display = 'none'

		// Input de error
		let error_nombre = document.querySelector('#error_nombre')
		let error_apellidos = document.querySelector('#error_apellidos')
		let error_edad = document.querySelector('#error_edad')

		error_nombre.style.display='none'
		error_apellidos.style.display='none'
		error_edad.style.display='none'

		const checkNombreApellido = ( val )=>{
			console.log(/[a-zA-z]+$/.test(val))
			console.log( val.length >= 1 )
			if( /[a-zA-z]+$/.test(val) && val.length >= 1  ){
				return true;
			}
			return false;
		}

		const checkEdad = (val) =>{
			let number = parseInt( val )
			
			console.log('Salida del regex', /[0-9]/g.test(number))
			console.log('Salida del largo del regex', typeof number === 'number')
			if( /[^0-9]/g.test(number) && typeof number === 'number' ){
				console.log('es false')
				return false;
			}
			console.log('es true')
			return true;
		}

		// Validamos el campo nombre
		nombre.addEventListener('input', (e)=>{
			let validaNombre = checkNombreApellido( e.target.value )
			console.log(e.target.value)
			if( validaNombre ){
				error_nombre.style.display = "none";
				error_nombre.innerHTML = `` 
			}else{
				error_nombre.style.display = "block";
				error_nombre.innerHTML = `Debe ingresar sólo letras`   
			}
		})

		// Validamos el campo apellido
		apellido.addEventListener('input', (e)=>{
			let validaApellido = checkNombreApellido( e.target.value )
			if(validaApellido){
				error_nombre.style.display = "none";
				error_nombre.innerHTML = `` 
			}else{
				error_nombre.style.display = "block";
				error_nombre.innerHTML = `Debe ingresar sólo letras`   
			}
		})

		// Validamos el campo edad
		edad.addEventListener('input', (e)=>{
			let validaEdad = checkEdad( e.target.value )
			if(validaEdad){
				error_edad.style.display = "none";
				error_edad.innerHTML = `` 
			}else{
				error_edad.style.display = "block";
				error_edad.innerHTML = `Debe ingresar solo numeros`   
			}
		})

		// INICIO DEL ENVIO
		formulario.addEventListener('submit', function(e){

			e.preventDefault()
			// guardamos datos que ingresamos en los input
			let nombre = document.querySelector('#nombre').value
			let apellido = document.querySelector('#apellido').value
			let edad = document.querySelector('#edad').value

			if( nombre && apellido && edad ){

					let infoNombre = document.querySelector('#infoNombre'),
					infoApellido = document.querySelector('#infoApellido'),
					infoEdad = document.querySelector('#infoEdad')

					infoNombre.innerHTML = `${nombre}`
					infoApellido.innerHTML = `${apellido}`
					infoEdad.innerHTML = `${edad}`
					mensajeDatos.style.display = 'block'

			} else {
				alert('Debe llenar los campos')
			}
			
		})
		// CIERR DEL ENVIO DEL FORM

		document.addEventListener('keydown', (event) => {
			const keyName = event.key;
			// alert('keydown event\n\n' + 'key: ' + keyName);
			switch ( keyName ) {

				case 'ArrowRight':
					alert('Vamos a la derecha')
					break;
				case 'ArrowLeft':
					alert('Vamos a la izquierda')
				    break;
				default:
					break;
			}
	
		});

const productos = [{ id: 1,  producto: "Arroz", precio: 125 },
                  {  id: 2,  producto: "Fideo", precio: 70 },
                  {  id: 3,  producto: "Pan"  , precio: 50},
                  {  id: 4,  producto: "Flan" , precio: 100}];

const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) };

//Almacenar producto por producto
// for (const producto of productos) {
//     guardarLocal(producto.id, JSON.stringify(producto));
// }
// o almacenar array completo
guardarLocal("listaProductos", JSON.stringify(productos));

// const getArray = localStorage.getItem(JSON.parse(listaProductos)
// console.log(getArray)
let data = JSON.parse(localStorage.getItem("listaProductos"));
console.log('Salida de data', data )
	})
	// CIERRE DEL DOMContentLoaded

}