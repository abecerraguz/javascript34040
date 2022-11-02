import http from 'http';
import { bodyParser } from './middleware/bodyParser.js';
import fs from 'fs';



const database = []

function getTareasHandler(req,res){
    res.writeHead( 200 , {'Content-type':'application/json'})
    res.write( JSON.stringify( database) )
    res.end()
}

async function postTareasHandler(req, res){
    try {

        // Aqui vamos responder cosas, pero antes de responder debor 
        // recibir los datos que el cliente envia.
       
        await bodyParser(req)
      
        database.push(req.body)
        res.writeHead(200, { "Content-Type": "application/json" });
        res.write(JSON.stringify(database))
        res.end();
       
    } catch (error) {
        res.writeHead( 400 , {'Content-type':'text/plain'})
        res.write('Data invalida');
        res.end();
    }
}

async function updateTareasHandler(req,res){
    let { url } = req
    // console.log('Salida de la URL-->',url)
    // Vamos a usar un SPLIT
    let idQuery = url.split("?")[1] // id=2    /tareas?id=3 ['/tareas','id=3']
    let idKey = idQuery.split("=")[0]  // id
    let idValue = idQuery.split("=")[1]  // 2

    /*
            =========SPLIT=============================
            let miCadena = "Hola Mundo. Cómo estás hoy?";
            let divisiones = miCadena.split("Como");
            console.log(divisiones);
            ['Hola', 'Mundo.', 'Cómo']
     */

    if( idKey === 'id' ){
        // 
        await bodyParser(req);
        // database[ {},{},{},{} ]
        // database[0]
        // database[1]
        // database[2]
        database[ idValue -1 ] = req.body;
        res.writeHead(200, { "Content-Type": "application/json" });
        res.write(JSON.stringify(database))
        res.end();

    }else{
        res.writeHead( 400 , {'Content-type':'text/plain'})
        res.write('Consulta Invalida');
        res.end();
    }

    res.end()
}

async function deleteTareasHandler(req,res){
    
    let { url } = req
    let idQuery = url.split("?")[1] // id=2    /tareas?id=3 ['/tareas','id=3']
    let idKey = idQuery.split("=")[0]  // id
    let idValue = idQuery.split("=")[1]  // 2

    if(idKey === 'id'){

        /**
            let myFish = ['angel', 'clown', 'drum', 'mandarin', 'sturgeon'];
            let removed = myFish.splice(3, 1);
            removed is ["mandarin"]
            myFish is ["angel", "clown", "drum", "sturgeon"]
        */

        database.splice( idValue-1, 1)
        res.writeHead( 200 , {'Content-type':'text/html'})
        res.write('Tarea Eliminada');
        res.end();
    }else{
        res.writeHead( 400 , {'Content-type':'text/html'})
        res.write('Datos invalidos fueron provistos');
        res.end(); 
    }

}





/**
     * Cuando creamos un servidor lo que tenemos dentro 
     * es un CALLBACK este callback es definido como un manejador
     * de peticiones ( request Handler ).
*/


const server = http.createServer( (req, res) =>{

    const { url, method } = req
    
    // VISUALIZADOR DEL LOGER 
    console.log(`URL:${url} - Method:${method}`);
   

    // En la respuesta tenemos los ecabezados o cabeceras
    // Que me van a permitir darle un formato o interpretacion 
    // a la respuesta 
    //res.writeHead( 200 , {'Content-type':'text/html'})
    // Escribir una respuesta
    //res.write('Recibido')
    // FIN DE LA RESPUESTA
    // res.end()

    switch (method) {

        case 'GET':

            if( url === '/' ){
                res.writeHead( 200 , {'Content-type':'text/html'} )
                res.end( fs.readFileSync('./../public/admin-tareas/index.html','utf-8') )
            }

            if(url === '/public/admin-tareas/assets/css/main.css' ){
                res.writeHead(200, {'Content-Type':'text/css'});
                res.end( fs.readFileSync('./../public/admin-tareas/assets/css/main.css') )
            }

            if(url === '/public/admin-tareas/assets/js/main.js' ){
                res.writeHead(200, {'Content-Type':'text/javascript'});
                res.end( fs.readFileSync('./../public/admin-tareas/assets/js/main.js') )
            }

            /**
             * Ahora bien como deseamos crear datos,
             * editar datos, actualizar  y eliminar ,
             * Vamos a simular una base de datos con array vacio
             * Y crearemos nuestro pimer END POINT 
             */

            if(url === '/tareas'){
                getTareasHandler(req,res)
            }

            if(url === '/tareas/asignadas'){
                
                // Metodo con file sistem para crear un archivo JSON
        
                fs.writeFileSync('./db/tareas.json',JSON.stringify(database))
                // res.write('Archivo creado')
                fs.readFile("./db/tareas.json", (err, json) => {
                    res.writeHead( 200 , {'Content-type':'application/json'})
                    res.end(json);
                });
           

            }

            break;
        case 'POST':
            if(url === '/tareas'){
                postTareasHandler(req,res)
            }
            break;
        case 'PUT':
                updateTareasHandler(req,res)
            break;
        case 'DELETE':
                deleteTareasHandler(req,res)
            break;
        // default:
        //     break;
    }

})

server.listen(3000, ()=>{console.log('Server en el puerto 3000')})
