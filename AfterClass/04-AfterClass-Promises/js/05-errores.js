/*
    UNO
    Las cadenas de promesas son excelentes para el manejo de errores. 
    Cuando se rechaza una promesa, el control salta al controlador de rechazo 
    más cercano. Eso es muy conveniente en la práctica.

    Por ejemplo, en el código a continuación, 
    la URL fetches incorrecta (no existe tal sitio) y 
    .catchmaneja el error:

    fetch('https://no-such-server.blabla') // rejects
        .then( response => response.json() )
        .catch( err => console.log(err)) // TypeError: failed to fetch (the text may vary)

*/

/*
    DOS
    O, tal vez, todo está bien con el sitio, pero la respuesta 
    no es un JSON válido. 
    La forma más fácil de detectar todos los errores es agregar .catch 
    al final de la cadena:

    fetch('http://127.0.0.1:5501/AfterClass/04-AfterClass-Promises/js/user.json')
        .then( response => response.json() )
        .then( user => fetch(`https://api.github.com/users/${user[0].login}`)  )
        .then( response => response.json() )
        .then( githubUser => new Promise((resolve, reject) => {
                resolve(githubUser);
                let img = document.createElement('img');
                img.src = githubUser.avatar_url;
                img.className = "promise-avatar-example";
                document.body.append(img);
                
                setTimeout(() => {
                    img.remove();
                }, 3000);

        }))
        .catch(error => alert(error.message));
*/

/*
  TRES
  Intento implícito... captura
  El código de un ejecutor de promesas y de los manejadores de promesas 
  tiene un "invisible try..catch" a su alrededor. Si ocurre una excepción, se detecta y se trata como un rechazo.
  Por ejemplo, este código:

    new Promise((resolve, reject) => {
        throw new Error("Este es un error!");
    }).catch(alert); // Este es un error!!

    …Funciona exactamente igual que esto:

    new Promise((resolve, reject) => {
        reject(new Error("Whoops!"));
    }).catch(alert); // Error: Whoops!

    El "invisible try..catch" alrededor del ejecutor detecta automáticamente el error y lo convierte en una promesa rechazada.
    Esto sucede no solo en la función ejecutora, sino también en sus controladores. 
    Si estamos throw dentro de un .then controlador, 
    eso significa una promesa rechazada, por lo que el control salta al controlador de errores más cercano.

    Aquí hay un ejemplo:

    new Promise((resolve, reject) => {
    resolve("ok");
    }).then((result) => {
    throw new Error("Whoops!"); // rejects the promise
    }).catch(alert); // Error: Whoops!

    Esto sucede con todos los errores, no solo con los causados ​​por la throw declaración. 
    Por ejemplo, un error de programación:

    new Promise((resolve, reject) => {
        resolve("ok");
    }).then((result) => {
        blabla(); // no es una funcion
    }).catch(alert); // ReferenceError: blabla is not defined

    El final .catch no solo detecta rechazos explícitos, 
    sino también errores accidentales en los controladores anteriores.

*/

/*

  CUATRO
  volver a tirar
  Como ya notamos, .catch al final de la cadena es similar a try..catch. 
  Podemos tener tantos .then manejadores como queramos y luego usar uno solo .catch 
  al final para manejar los errores en todos ellos.

  De manera regular try..catch, podemos analizar el error y 
  tal vez volver a generarlo si no se puede manejar. 
  Lo mismo es posible para las promesas.

  Si estamos throw dentro .catch, 
  entonces el control va al siguiente controlador de errores más cercano. 
  Y si manejamos el error y terminamos normalmente, continúa con el siguiente .then
  controlador exitoso más cercano.

  En el siguiente ejemplo, el .catch maneja con éxito el error:

  new Promise((resolve, reject) => {

    throw new Error("Whoops!");
  
  }).catch(function(error) {
  
    alert("Se maneja el error, continúe normalmente");
  
  }).then(() => alert("Próximas ejecuciones exitosas del controlador"));

*/

/*
    CUATRO
    Rechazos no gestionados
    ¿Qué sucede cuando no se maneja un error? Por ejemplo,
    olvidamos agregar .catchal final de la cadena, como aquí:

    new Promise(function() {
        noSuchFunction(); // Error here (no such function)
    })
    .then(() => {
        // successful promise handlers, one or more
    }); // without .catch at the end!
*/

// window.addEventListener('unhandledrejection', function(event) {
//     // the event object has two special properties:
//     alert(event.promise); // [object Promise] - the promise that generated the error
//     alert(event.reason); // Error: Whoops! - the unhandled error object
// });
  
//   new Promise(function() {
//     throw new Error("Whoops!");
//   }); // no catch to handle the error

// fetch('/user.json')
// .then( response => response.json() )
// .then( user => fetch(`https://api.github.com/users/${user[0].login}`)  )
// .then( response => response.json() )
// .then( githubUser => new Promise((resolve, reject) => {
//         resolve(githubUser);
//         let img = document.createElement('img');
//         img.src = githubUser.avatar_url;
//         img.className = "promise-avatar-example";
//         document.body.append(img);
        
//         setTimeout(() => {
//             img.remove();
//         }, 3000);

// }))
// .catch(error => alert(error.message));

// const lista = document.querySelector('#lista')
const pedirPosts = async () => {

        const resp = await fetch('https://jsonplaceholder.typicode.com/ps')
        const data = await resp.json()
    
        data.forEach((post) => {
            const li = document.createElement('li')
            li.innerHTML = `
                <h4>${post.title}</h4>
                <p>${post.body}</p>
            `
            lista.append(li)
        })
        
}

pedirPosts()
  

 






