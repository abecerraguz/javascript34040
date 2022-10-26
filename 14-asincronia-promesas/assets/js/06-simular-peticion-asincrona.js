/*

    Ejercicio guiado: Obteniendo usuarios por ID

    Simular una petición asíncrona como si se tratara de una API, retornando la información de un usuario pero en formato JSON. La información para el primer usuario será la siguiente: data = {id: 1,name: 'John',lastName: 'Doe',age: 24}. Mientras que la información para el segundo usuario será: data = {id: 2,name: 'Jane',lastName: 'Smith',age: 19}.
    Por lo tanto, se debe enviar el parámetro “id” a la función para simular que se requieren los datos de un usuario en especíﬁco y que el tiempo de respuesta será de 1000 milisegundos.

*/

/*

    Paso 1: Crear una carpeta en tu lugar de trabajo favorito y dentro de ella crea un script.js. Luego, en el archivo script.js se creará primeramente la función denominada getUserDara, la cual recibirá dos parámetros, el número de “id” y la función “callback”. Dentro de esta función, se utilizará el método setTimeout() con un tiempo de 1000 milisegundos

*/
function getUserData(id, callback ){
    setInterval(()=>{
        let data = {}

        if(id === 1){
            data = {
                id:1,
                name:'Jhon',
                lastName:'Doe',
                age:24
            }
        }

        if(id === 2){
            data = {
                id:2,
                name:'Jane',
                lastName:'Smith',
                age:19
            }
        }

        callback(data)
    },1000)
}

getUserData(1, (user) => {
    console.log(user)
}); 

getUserData(2, (user) => {
    console.log(user)
}); 

/*
    Paso 2: Ahora dentro del setTimeOut, creamos la variable que contendrá los datos solicitados dependiendo del número del “id”. Igualmente, con la función callback se retornará los datos del usuario.
*/

