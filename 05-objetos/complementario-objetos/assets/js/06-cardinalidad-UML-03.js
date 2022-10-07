/**
 
    EJERCICIO 03
    Dado el siguiente diagrama UML ( Carpeta de imagenes img /06-cardinalidad-UML.png ), 
    crea las funciones constructoras para cada una de las entidades.

 */

    function Proyecto( nombre,persona ){
        this.nombre = nombre;
        this.persona = persona || [];
    }
    
    function Persona( nombre ){
        this.nombre = nombre
    }
    
    Proyecto.prototype.setAgregarPersona = function(persona_nueva){
        this.persona.push( persona_nueva );
    }
    
    var persona1 = new Persona('Juan');
    var persona2 = new Persona('Jocelyn');
    var proyecto1 = new Proyecto('JS',[ persona1, persona2 ]);

    console.log(proyecto1);
    
    var persona3 = new Persona('Yecenia');
    proyecto1.setAgregarPersona(persona3);
    console.log(proyecto1);
    console.log(proyecto1.nombre);


