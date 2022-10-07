/*
=======MANIPLANDO ELEMENTOS DE LA PÁGINA ======================================================================
	1.Query Selector
	2.getElementsById
	3.getElementsByClassName
	4.createElement
==============================================================================================
*/

let todosLosDiv = document.getElementsByTagName('div')
let section = document.querySelector('#miseccion')
let sectionId = document.getElementById('miseccion')
let hr = document.createElement('hr')

console.log('todosLosDiv----->', todosLosDiv)
console.log('section----->', section)
console.log('sectionId----->', sectionId)
console.log('hr----->', hr)

for(let i= 0; i < todosLosDiv.length; i++){

	todosLosDiv[i].classList.add('container')
	console.log('textContent---->', typeof todosLosDiv[i].textContent)

	if(typeof todosLosDiv[i].textContent == 'string'){
		
		let parrafo = document.createElement('p')
		let texto = document.createTextNode(todosLosDiv[i].textContent)

		parrafo.append(texto)
		section.append(parrafo)

		section.classList.add('container')

		document.querySelector('.font-weight-bold').classList.add('container')

	}

}

section.before(hr)

let divRojos = document.getElementsByClassName('rojo')
console.log('divRojos--->',divRojos)

// divRojos[0].style.background = 'red'
divRojos[0].style.background = 'yellow'

for(let index = 0; index < divRojos.length;index++){
	divRojos[index].style.background = 'red'
}



