/*


Crear un programa que le permita a una persona jugar a Piedra, papel o tijera contra el computador,
indicando cuántas veces desea jugar o repetir el juego.  Piedra, papel o tijera (cachipún) es un juego entre dos
personas (en este caso, tú y el computador) donde cada una de ellas de manera
independiente y secreta debe elegir una de las opciones ( piedra, papel y tijera ) y compararla
con la opción de la otra persona. Para determinar quien gana, se deben seguir las siguientes
reglas:

● Tijera le gana a papel
● Papel le gana a piedra
● Piedra le gana a tijera
● Si ambos jugadores eligen la misma opción es un empate

1.Solicitar al usuario las veces que desea que se repita el juego consecutivamente, es
decir, cuántas veces deberá jugar contra la computadora. Por cada juego, se debe
mostrar el resultado inmediatamente y luego pedir nuevamente una respuesta
dependiendo de las veces que haya indicado el usuario que desea jugar.

2. Solicitar al usuario que indique su jugada.
Las opciones son las siguientes:
    ● Piedra
    ● Papel
    ● Tijera

3. Generar una jugada automática para la máquina usando la función Math.random() de Javascript.

4. Definir a un ganador considerando la jugada del usuario y la generada automáticamente para la máquina.

5. Indicar el resultado de la partida dependiendo del caso:
    ● Felicitar al ganador en caso de ser el usuario.
    ● Indicarle al usuario que ha perdido contra la máquina en caso de que ésta sea la que gane.
    ● Declarar un empate.

En Javascript, se pueden crear números aleatorios usando la función Math.random(). Con
el siguiente código, se pueden obtener números aleatorios entre 0 y 2.

Math.floor(Math.random()*3)

Usando esta función podemos determinar la jugada de la máquina, dado que los resultados de esta
función pueden ser 0, 1 ó 2, puedes asumir que cada uno de estos números corresponde a
una jugada ( piedra, papel o tijeras ) y así definir la jugada de la máquina.


*/





let numero_juego = prompt('Ingrese mediante un número entero, la cantidad de veces que desea jugar: ');
let contador = 0;

 while( contador < numero_juego){

    let jugada_humano = prompt('Ingrese su jugada. Debe ser piedra, papel ó tijera.', 'piedra');
    let ganador = defineGanador(jugada_humano, jugadaMaquina());
    
    contador++;

        switch (ganador){
          case 'humano':
            document.write(`<div class="alert alert-info container" role="alert">¡Felicidades humano, haz ganado!</div>`)
            break;
          case 'máquina':
            document.write(`<div class="alert alert-warning container" role="alert">Humano, haz perdido contra la máquina</div>`)
            break;
          default:
            document.write('<div class="alert alert-success container" role="alert">El resultado es un empate</div>')
        }
       

        function jugadaMaquina(){

          switch ( Math.floor(Math.random() * 3) ) {
            case 0:
              return 'piedra';
              break;
            case 1:
              return 'papel';
              break;
            case 2:
              return 'tijera';
              break;
          }

        }

        function defineGanador( humano, maquina ){
            
            let resultado = '';
            if (humano == maquina) {
                resultado = 'empate';
            }else if ( (humano == 'tijera' && maquina == 'papel') || ( humano == 'papel' && maquina == 'piedra' ) || ( humano == 'piedra' && maquina == 'tijera' ) ) {
                resultado = 'humano';
            }else {
                resultado = 'máquina';
            }
            return resultado;
        }

        

}