const formulario = document.querySelector('#formulario');
const resultado = document.querySelector('#resultado');
const contentSpinnerLoading = document.querySelector('.contentSpinnerLoading')
contentSpinnerLoading.style.display = 'none'

const KelvinACentigrados = ( grados ) => {
    return parseInt( grados - 273.15);
}

const limpiarHTML = () =>{
    while(resultado.firstChild) {
        resultado.removeChild(resultado.firstChild);
    }
}

const mostrarClima = ( datos ) => {

    // Desestructuramos el clima
  
    const { name, main: { temp, temp_max, temp_min } } = datos;
  
  
    const grados = KelvinACentigrados(temp);
    const min = KelvinACentigrados(temp_min);
    const max = KelvinACentigrados(temp_max);
  
    const nombreCiudad = document.createElement('li');
    nombreCiudad.innerHTML = `Clima en: ${name}`;
    nombreCiudad.classList.add('list-group-item','active')
  
    const actual = document.createElement('li');
    actual.innerHTML = `${grados} &#8451;`;
    actual.classList.add('list-group-item')
  
    const tempMaxima = document.createElement('li');
    tempMaxima.innerHTML = `Max: ${max} &#8451;`;
    tempMaxima.classList.add('list-group-item')
  
  
    const tempMinima = document.createElement('li');
    tempMinima.innerHTML = `Min: ${min} &#8451;`;
    tempMinima.classList.add('list-group-item')
  
  
    const resultadoDiv = document.createElement('ul');
    resultadoDiv.classList.add('list-group','list-group-flush')
    resultadoDiv.appendChild(nombreCiudad);
    resultadoDiv.appendChild(actual);
    resultadoDiv.appendChild(tempMaxima);
    resultadoDiv.appendChild(tempMinima);
  
    resultado.appendChild(resultadoDiv)
}

const consultarAPI = async ( ciudad, pais ) => {

    const appId = 'e0c15b8e93223e5c828fbf46a5d20e5f';
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;

    contentSpinnerLoading.style.display = 'flex'

    // INICIO CON FETCH API
    // fetch( url )
    //   .then(respuesta => {
    //     return respuesta.json();
    //   })
    //   .then( datos => {
    //     console.log(datos);
    //     limpiarHTML();
    //       if( datos.cod === "404") {
    //             Swal.fire({
    //                 icon: 'error',
    //                 title: 'Ciudad no encontrada!!',
    //                 text: 'Debes ingresar una ciudad que exista!',
    //             })
    //             contentSpinnerLoading.style.display = 'none'
    //       } else {
    //         mostrarClima(datos)
    //         contentSpinnerLoading.style.display = 'none'
    //       }
    //   })
    //   .catch(error => {
    //     console.log(error)
    //   });
    // CIERRE CON FETCH API

    // CON AXIOS
    try {
        const response = await axios.get(url);
        console.log('Salida de response--->', response);
        limpiarHTML();
        if( response.cod === "404") {
            Swal.fire({
                icon: 'error',
                title: 'Ciudad no encontrada!!',
                text: 'Debes ingresar una ciudad que exista!',
            })
            contentSpinnerLoading.style.display = 'none'
        }else{
            mostrarClima(response.data)
            contentSpinnerLoading.style.display = 'none'
        }

      }catch (error) {
        console.error(error);
    }
    // CIERRE CON AXIOS
}

const buscarClima = (e) => {

    e.preventDefault();

    const ciudad = document.querySelector('#ciudad').value
    const pais = document.querySelector('#pais').value

    console.log(ciudad);
    console.log(pais);

    if( ciudad === '' || pais === '' ) {
     
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Debes ingresar los campos ciudad y país!',
          })

    }else{
        consultarAPI( ciudad, pais );
    }

}

window.addEventListener('DOMContentLoaded', () => {
    formulario.addEventListener('submit', buscarClima );
})