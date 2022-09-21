function mostrarEnConsola(numero1,numero2){
    console.log('Suma;'+(numero1+numero2))
    console.log('Resta;'+(numero1-numero2))
    console.log('Multipliacacion;'+(numero1*numero2))
    console.log('Division;'+(numero1/numero2))
    console.log('****************************************')
}


function mostrarEnPantalla(numero1,numero2){
    document.write('Suma;'+(numero1+numero2)+'<br>')
    document.write('Resta;'+(numero1-numero2)+'<br>')
    document.write('Multipliacacion;'+(numero1*numero2)+'<br>')
    document.write('Division;'+(numero1/numero2)+'<br>')
    document.write('****************************************') 
}


function calculadora(numero1,numero2,mostra=false){
    if(mostra == false){
        mostrarEnConsola(numero1,numero2)
    }else{
        mostrarEnPantalla(numero1,numero2)
    }
}


calculadora(2,5,true)