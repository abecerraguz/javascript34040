/*

Cuando desarrollamos aplicaciones web, normalmente realizamos tareas de forma
síncrona, llevando a cabo tareas secuenciales que se ejecutan una detrás de otra, de modo
que el orden o flujo del programa es sencillo. Pero a partir de este capítulo, el trabajo se
concentrará en lograr que nuestro programa ejecute algunas tareas de manera asíncrona, ya
que la programación actual a partir de ES6 no es solamente secuencial, sino que se puede
trabajar de forma asíncrona. Por consiguiente, la asincronía es uno de los pilares
fundamentales de JavaScript en la actualidad, por esta razón, será uno de los principales
objetivos que aprenderás a lo largo de este capítulo y te ayudarán a realizar un código más
ordenado y potente como todo un profesional con este lenguaje de programación.


    Memory Heap
    El Memory Heap concentra todas los objetos y datos dinámicos, como las variables y
    constantes que debe sostener en la memoria durante la ejecución de las aplicaciones.

    Call stack
    Es una pila de procesos, parecida a una lista ordenada de tareas al que se van agregando
    sentencias para ser ejecutadas, donde cada proceso que agregamos va al final mientras
    espera a que se ejecute el resto de operaciones que le anteceden.
    El event loop no solo implica poner procesos al Call Stack, sino que necesita de otros
    componentes en los que se determina cuál proceso se encola para llamarse, entre ellos
    WEB API y Callback Queue forman parte de éste.

    WEB APIs
    Las WEB APIs son funciones disponibilizadas por el navegador y que se pueden usar en
    JavaScript para comunicarnos e interactuar con el Frontend. Entre ellas están las de
    manipulación del DOM, geolocalización, notificaciones y muchas más. Puedes ver la lista
    completa de WEB APIs en el siguiente enlace.
    https://developer.mozilla.org/en-US/docs/Web/API

    Callback Queue
    La cola de devolución de llamada (Callback Queue), es una lista de funciones que le envía la
    WEB API y que quedan en espera a ser insertadas al Call Stack para ejecutarse. Asimismo,
    está basada en una estructura de datos del tipo FIFO, es decir, el primer dato en entrar es el
    primero en salir.

*/



function C(){
    console.log('C');
}

function B(){
    C();
}

function A(){
    B();
}

A();

// =======================================
// Call sTack ----> pila de llamadas
// WEB API -----> fetch, setTimeOut, setInterval .....etc 
// Callback Queue ----> Cola de devolución de llamada

console.log('INICIO')
    setTimeout(function onTimeout(){
        console.log('Estoy en otra pila de proceso');
    },5000);
console.log('FIN')


// INCIIO EJEMPLO DOS
console.log('INICIO');

$.on('button','click',function onClick(){
    console.log('CLICK')
})

setTimeout(function onTimeout(){
    console.log('El tiempo termino');
},0);


