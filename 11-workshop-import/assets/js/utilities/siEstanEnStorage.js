const siEstanEnStorage = ( id, obtenerDesdeElStorage, type ) => {

    if( type === 'DOMContentLoaded'){
        id.forEach( (element) => {
            document.getElementById(element).innerText = 'Curso agregado'
            document.getElementById(element).classList.add('cursoSeleccionado')
        });  
    }

    if( type === 'addClass' ){
      
        let buttonCard = document.querySelectorAll('#insertDOMcontent .card a')
        let arr = []
     
        if(localStorage.length !== 1){

            obtenerDesdeElStorage.forEach( (element) => {
                arr.push(element._id)
            })
          
        }else{
            document.getElementById(id).innerText = 'Curso agregado'
            document.getElementById(id).classList.add('cursoSeleccionado')
            let cardPadre = document.getElementById(id).parentElement.parentElement.parentElement.parentElement
            cardPadre.classList.add('activo')
        }
       
        

        buttonCard.forEach( ( element, index ) => {

            // USO DE TERNARIO
            // let cardAdd = document.getElementById(arr[index])
            // element.getAttribute('id') ===  arr[index] ?  ( cardAdd.classList.add('cursoSeleccionado'), cardAdd.innerText='Curso agregado' )  : false
            
            if( element.getAttribute('id') ===  arr[index] ){
                console.log('Entroooooo')
                let cardAdd = document.getElementById(arr[index])
                cardAdd.classList.add('cursoSeleccionado')
                cardAdd.innerText =  "Curso agregado"    
            }
        }) 
    }

    if( type === 'removeClass' ){
    
        let buttonCard = document.querySelectorAll('#insertDOMcontent .card a')
        let arr = []

       

        obtenerDesdeElStorage.forEach( (element) => {
            arr.push(element.title)
        })

        buttonCard.forEach( ( element, index ) => {
            console.log('==================Inicio nuevamnete=================')
            console.log('XXXXX 2 Button --->',element.getAttribute('title'))
            console.log('XXXXX 3 ARRAY  --->', arr[index])
            console.log('XXXXX 3 ARRAY ALL  --->', arr)
            console.log('XXXXX 4 MATCH  --->',element.getAttribute('title') ===  arr[index])
            console.log('==================Inicio nuevamnete=================')
            if( element.getAttribute('title') ===  arr[index]){
                document.querySelector(`[title='${arr[index]}']`).classList.remove('cursoSeleccionado')
            }else{
                let removeClass = document.querySelector(`[title='${arr[arr.length-1]}']`)
                let removeClassParent = document.querySelector(`[title='${arr[arr.length-1]}']`).parentElement.parentElement.parentElement.parentElement
                removeClass.classList.remove('cursoSeleccionado')
                removeClassParent.classList.remove('activo')
                // console.log('removeClassParent--->', removeClassParent)
            }
        }) 
    }

}

export default siEstanEnStorage