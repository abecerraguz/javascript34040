export async function bodyParser( request ){
    /**
     * La request tiene un sistema de eventos 
     * Este evento que vamos a usar es el evento
     * "ON".
     * | gsgfsgregergr | reerherhethet | rhthtejrtj | rtjrtjrjryr | yjryjrjryjrjrty
     */
     return new Promise((resolve, reject) =>{
        
        let datosTotales = '';
        let chunkIndex = 0;

        request
        .on('data', chunk =>{
            datosTotales += chunk
            chunkIndex++
            console.log('salida de chunkIndex',chunkIndex)
        })
        .on('end',()=>{
            request.body = JSON.parse(datosTotales)
            console.log('Data recibida')
            // Cuando termina la promesa debe terminar
            resolve()
        })
        .on('error',(err) =>{
            console.log(err)
            // Si hay un error es un reject
            reject()
        })
    })
     

}

// request.body