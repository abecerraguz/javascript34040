import { getHeroById, getHeroesByOwner } from './04-filtrarHeroes.js'

const getHeroByIdAsync = ( id ) => {

    return new Promise( ( resolve, reject )=> {

        setTimeout(() => {
           
            const hero = getHeroById( id )
            hero ? resolve( hero ) : reject('Heroe no existeeeeee')
      
        }, 1000);

    });
}

getHeroByIdAsync(100)
    .then( reultado =>{
        console.log(`El héroe es: ${ reultado.name }`)
    })
    .catch( err => console.log('Hola el',err) )


const BD = [
    {id: 1, nombre: 'Producto 1', precio: 1500},
    {id: 2, nombre: 'Producto 2', precio: 2500},
    {id: 3, nombre: 'Producto 3', precio: 3500},
    {id: 4, nombre: 'Producto 4', precio: 3500},
]
    
const pedirProductos = () => {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            resolve(BD)
        }, 3000)
    })
}

// inicializamos con un array vacío
let productos = []

const renderProductos = (arr) => {
    console.log( 'Salida de renderProductos --->', arr )
    // función que genere la vista de los productos
}

// asincrónicamente pedimos los datos y generamos la vista
pedirProductos()
    .then((res) => {
        productos = res
        renderProductos(productos)
    })

    