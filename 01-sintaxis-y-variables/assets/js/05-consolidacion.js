/*
    Uso de variables y operadores aritméticos
    Realizar operaciones con dos números.
    Pedir al usuario que ingrese dos números diferentes y mayores a cero. Para ambos
    números, calcular lo siguiente:
 */

       alert('Ingrese dos números diferentes y mayores a cero')
       var numUno = parseInt(prompt('ingrese primer numero'))
       var numDos = parseInt(prompt('ingrese segundo numero'))
       var suma = numUno+numDos
       var resta = numUno-numDos
       var division = numUno/numDos
       var multiplicacion = numUno+numDos
       var modulo = numUno%numDos
       
       document.write(`<h3>El resultado de la suma es ${suma}</h3>`)
       document.write(`<h3>El resultado de la resta es ${resta}</h3>`)
       document.write(`<h3>El resultado de la division es ${division}</h3>`)
       document.write(`<h3>El resultado de la multiplicacion es ${multiplicacion}</h3>`)
       document.write(`<h3>El resultado del modulo es ${modulo}</h3>`)