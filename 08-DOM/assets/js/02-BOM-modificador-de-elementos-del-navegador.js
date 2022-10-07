/*
=======BOM===================================================================================
	Browser Object Model, propiedades que nos permite manejar el Broser
==============================================================================================
*/

function getBom(){

	console.log(window.innerWidth)
	console.log(window.innerHeight)

	console.log(screen.width)
	console.log(screen.height)

	console.log(window.location)

}

console.log('Salidad de la funcion',getBom() )


function redirect(url){
	window.location = url
}

function abrirVentana(url){
	window.open(url,'','width=400,height=300')
}
redirect('https://www.infobae.com/america/')
abrirVentana('https://www.infobae.com/america/')





