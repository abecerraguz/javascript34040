import * as UI from './interfaz.js';
const contadorCursos = ( numCursos )=>{

    // if( numCursos >= 1 ){
    //     UI.cantidad.style.display = 'flex'
    //     UI.cantidad.innerText = numCursos
    // }else{
    //     UI.cantidad.style.display = 'none'
    //     UI.cantidad.innerText = 0
    // }

    numCursos >= 1 ? ( UI.cantidad.style.display = 'flex',  UI.cantidad.innerText = numCursos ) : ( UI.cantidad.style.display = 'none',  UI.cantidad.innerText = 0 )

}
export default contadorCursos