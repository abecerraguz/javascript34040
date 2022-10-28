import * as UI from './interfaz.js';

const priceAll = ( dataStorage ) => {
    console.log('data llega ProceAll dataStorage-->', dataStorage)
    let price = [] 
    dataStorage.forEach(element => {
        price.push(parseInt(element.price))
    });
 
    let resultado 
    const chile = new Intl.NumberFormat("es-CL", { currency: "CLP", style: "currency" })
    price.length >= 1 ? resultado = price.reduce( ( valorAnterior, valorActual ) => valorAnterior+valorActual,0) : resultado = 0
    UI.outPriceAll.innerText = `${chile.format(resultado)} CLP`
    console.log('data llega ProceAll resultado-->', resultado)
}
export default priceAll