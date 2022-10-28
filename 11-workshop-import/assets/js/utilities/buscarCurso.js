import agregarCursoAlcarro from './agregarCursoAlcarro.js';
import contadorCursos from './contadorCursos.js';
import siSeRepite from './siSeRepite.js';
import priceAll from './priceAll.js'


let cursosAcumulados = []

const buscarCurso =  ( idCurso, buscarCursos ) => {
    
    let cursoSeleccionado = buscarCursos.find(( element ) => idCurso === element._id);
   
    let ultimoSeleccionado = [];
    ultimoSeleccionado.push( cursoSeleccionado );
    
    if( siSeRepite( idCurso, cursosAcumulados )){

        agregarCursoAlcarro( cursosAcumulados );
        contadorCursos(cursosAcumulados.length);
        priceAll( cursoSeleccionado ) 

    }else{
 
        let cursosDelStorage = JSON.parse(localStorage.getItem("cursos")) || [];
 
        cursosAcumulados = [...cursosDelStorage, ...ultimoSeleccionado];
        agregarCursoAlcarro( cursosAcumulados );
        contadorCursos(cursosAcumulados.length); 
        priceAll(cursosAcumulados)
        
    }
};
export default buscarCurso;