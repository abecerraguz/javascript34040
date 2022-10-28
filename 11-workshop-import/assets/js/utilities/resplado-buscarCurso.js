import agregarCursoAlcarro from './agregarCursoAlcarro.js';
import contadorCursos from './contadorCursos.js';
import siSeRepite from './siSeRepite.js';

let cursosAcumulados = JSON.parse(localStorage.getItem("cursos")) || [];


const buscarCurso =  ( idCurso, buscarCursos ) => {
    


    let cursoSeleccionado = buscarCursos.find(( element ) => idCurso === element._id);
 
  
    let ultimoSeleccionado = [];
    ultimoSeleccionado.push( cursoSeleccionado );


  
    if(!siSeRepite( idCurso, cursosAcumulados )){
        cursosAcumulados = [...cursosAcumulados, ...ultimoSeleccionado];
        agregarCursoAlcarro( cursosAcumulados );
        contadorCursos(cursosAcumulados.length); 
    }else{
        cursosAcumulados = [...cursosAcumulados];
        agregarCursoAlcarro( cursosAcumulados );
        contadorCursos(cursosAcumulados.length); 
    }
};
export default buscarCurso;