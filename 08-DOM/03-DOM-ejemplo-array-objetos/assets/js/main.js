
//     var autos = [
//         {marca:'Chevrolet',color:'Rojo',año:2021},//indice 0
//         {marca:'Nissan',color:'Azul',año:2019},
//         {marca:'Honda',color:'Plateada',año:2025},
//         {marca:'Dodge',color:'Verde',año:2022},
//         {marca:'Fiat',color:'Rojo',año:2019},
//         {marca:'Mini',color:'Coral',año:2019}
//     ]

//     var bicicletas = [
//         {marca:'Oxford',color:'Rojo',año:2021},//indice 0
//         {marca:'Kona',color:'Azul',año:2019},
//         {marca:'Eastern',color:'Plateada',año:2025},
//         {marca:'GT',color:'Verde',año:2022},
//         {marca:'Cannondale',color:'Rojo',año:2019},
//         {marca:'Mongoose',color:'Coral',año:2019}
//     ]


// const createTable = ( clase , arr ) => {
    
//     // Tomamos donde vamos a insertar la info en el DOM
//     let insertTableInDom = document.getElementById('dataInfoTable');
    
//     // Creamos una etiqueta del titulo de la tabla
//     let tableTitleCreateH3 = document.createElement('h3')
    
//     // Le pasamos el ID
//     tableTitleCreateH3.setAttribute('id', clase );
    

//     // Creamos la tabla
//     let createTable      = document.createElement('table')
//     let createTableHead  = document.createElement('thead')
//     let createTableBody  = document.createElement('tbody')

//     // Pasamos los atributos a la tabla
//     createTable.setAttribute('class', `table ${clase} mb-5`)
//     createTableHead.setAttribute('class', `${clase}`)
//     createTableBody.setAttribute('class', `${clase}`)

//     // Insertamos la tabla en el DOM
//     insertTableInDom.append(createTable)

//     // Tomamos la clase padre de la tabla e insertamos el titulo de la tabla antes
//     let nodeParentTable = document.querySelector(`.${clase}`)
//         nodeParentTable.before(tableTitleCreateH3)
//     let infoTextTableTitleCreateH3 = document.getElementById(clase);

//     // Insertamos la informacion dentro de cada titulo
//     infoTextTableTitleCreateH3.innerText = `Información de ${clase}`   

//     // Creamos la etiqueta p
//     let infoTable = document.createElement('p')
//     // Insertamos la informacion dentro de p
//     infoTable.innerText = `Primer producto ${arr[0].marca} | Último producto ${arr[autos.length - 1].marca}`
//     // Insertamos la informacion de bajada despues del titulo
//     infoTextTableTitleCreateH3.after(infoTable);

//     // Juntamos las variables del encabezado de la tabla y el cuerpo de la tabla en un array
//     let groupTable = [ createTableHead, createTableBody ]
//     groupTable.forEach((element,index)=>{
//         element.setAttribute('class', `${clase}-${index}`);
//         // insertamos los elementos en el DOM con append
//         nodeParentTable.append( element );
//     })

//     // seleccionamos el encabezado y el cuerpo de la tabla
//     let infoThead = document.querySelector(`.${clase}-0`)
//     let infoTbody = document.querySelector(`.${clase}-1`)

//     // Insertamos los nombres de las columnas
//     infoThead.innerHTML = `<tr>
//                 <th scope="col">#</th>
//                 <th scope="col">Marca</th>
//                 <th scope="col">Color</th>
//                 <th scope="col">Año</th>
//     </tr>`

//     // Insertamos los datos del arreglo a la tabla
//     arr.forEach(( element, index ) =>{
//         infoTbody.innerHTML+=`<tr>
//             <th scope="row">${index}</th>
//             <td>${element.marca}</td>
//             <td>${element.color}</td>
//             <td>${element.año}</td>
//         </tr>`
//     })

// }



// createTable( 'autos',autos )
// createTable('bicicletas',bicicletas)

let servicios = [

    { servicio: 'matrimonio', precio: 500.000, temporada: 'diciembre' },
    
    { servicio: 'graduacion', precio: 350.000, temporada: 'junio' },
    
    { servicio: 'cumpleaños', precio: 300.000, temporada: 'enero' },
    
    { servicio: 'compromiso', precio: 400.000, temporada: 'julio' }
    
    ]
    
    const createTable = (clase, arr) => {
    
    console.log('Holaaaa')

    let insertTableDom = document.getElementById('dataInfoTable');
    
    let tableTitleCreateH3 = document.createElement('h3')
    
    tableTitleCreateH3.setAttribute('id', clase)
    
    console.log(tableTitleCreateH3)
    
    //// creamos table
    
    let createTable = document.createElement('table');
    
    let createTableHead = document.createElement('thead');
    
    let createTableBody = document.createElement('tbody');
    
    //// pasar atributos
    
    createTable.setAttribute('class', 'table ' + clase + ' mb-5')
    
    createTableHead.setAttribute('class', clase)
    
    createTableBody.setAttribute('class', clase)
    
    //// insertamos la tabla
    
    insertTableDom.append(createTable);
    
    //// tomar la clase padre
    
    let nodeParentTable = document.querySelector(`.${clase}`)
 
    nodeParentTable.after(tableTitleCreateH3);
    console.log('salidaaaaa-->',clase)
    let infoTextTableTitleCreateH3 = document.getElementById(clase)

    
    infoTextTableTitleCreateH3.innerText = `Informacion de ${clase}`
    
   // Creamos la etiqueta p
    let infoTable = document.createElement('p')
    // Insertamos la informacion dentro de p
    infoTable.innerText = `Primer producto ${arr[0].servicio} | Último producto ${arr[servicios.length - 1].servicio}`
    // Insertamos la informacion de bajada despues del titulo
    createTable.before(infoTable);

    // Juntamos las variables del encabezado de la tabla y el cuerpo de la tabla en un array
    let groupTable = [ createTableHead, createTableBody ]
    groupTable.forEach((element,index)=>{
        element.setAttribute('class', `${clase}-${index}`);
        // insertamos los elementos en el DOM con append
        nodeParentTable.append( element );
    })

    // seleccionamos el encabezado y el cuerpo de la tabla
    let infoThead = document.querySelector(`.${clase}-0`)
    let infoTbody = document.querySelector(`.${clase}-1`)

    // Insertamos los nombres de las columnas
    infoThead.innerHTML = `<tr>
                <th scope="col">#</th>
                <th scope="col">Servicio</th>
                <th scope="col">Precio</th>
                <th scope="col">Temporada</th>
    </tr>`

    // Insertamos los datos del arreglo a la tabla
    arr.forEach(( element, index ) =>{
        infoTbody.innerHTML+=`<tr>
            <th scope="row">${index}</th>
            <td>${element.servicio}</td>
            <td>${element.precio}</td>
            <td>${element.temporada}</td>
        </tr>`
    })
    
    }
    
    createTable('servicios', servicios )