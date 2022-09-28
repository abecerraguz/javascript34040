/**
    Un prestigioso centro médico le ha encargado la tarea de obtener
    información estadística acerca de las consultas que realizó durante el día de ayer.

    Para esto, se le entregará un listado de las consultas realizadas. El listado, contiene una
    tabla con las siguientes columnas: hora de atención, médico especialista, nombre del
    paciente, Rut del paciente y previsión ( Estado o Privada ).

    PUEDE SERCARGAR EL ARCHIVO DESDE:
    https://docs.google.com/spreadsheets/d/1f10FLN81zRBrIXc30ZfPryTC1pUP5K3w/edit?usp=sharing&ouid=111364373409188823844&rtpof=true&sd=true

    Las información debe ser desplegada en una página HTML que usted debe crear. Puede
    utilizar la función document.write() y desplegar la información solicitada entre párrafos, o
    como usted estime conveniente, lo importante es que la información que se le solicite se
    muestre en dicha página que creará.

    1. Crear la estructura de datos mediante arreglos y objetos. Debe crear 1 arreglo por
       cada listado (Radiología, Traumatología y Dental) y 1 objeto por cada fila de
       información que contengan los listados, considerando las propiedades establecidas
       en la descripción.
    2. Mostrar por pantalla la primera y última atención de cada listado, desplegando el
       nombre del paciente junto con la previsión, separados por un guión (utilizar índices
       de arreglos para esto).

       Ej: Primera atención: Juan Pérez - ESTATAL | Última atención: Ana Gálvez - PROVADA.

    3. Recorrer el arreglo de Traumatologia y mostrar su contenido en una tabla.

    4. Agregar las siguientes horas al arreglo de Traumatología:

        HORA  ESPECIALISTA     PACIENTE         RUT         PREVISIÓN
        09:00 RENÉ POBLETE     ANA GELLONA      13123329-7  PRIVADA
        09:30 MARIA SOLAR      RAMIRO ANDRADE   12221451-K  ESTATAL
        10:00 RAUL LOYOLA      CARMEN ISLA      10112348-3  PRIVADA
        10:30 ANTONIO LARENAS  PABLO LOAYZA     13453234-1  PRIVADA
        12:00 MATIAS ARAVENA   SUSANA POBLETE   14345656-6  ESTATAL

    5. Eliminar el primer y último elemento del arreglo de Radiología.

    6. Imprimir en la página HTML, mediante document.write y/o la funciones que estime
       conveniente, la lista de consultas médicas de Dental. Sin embargo, debe hacerlo
       separando por un guión cada dato desplegado y cada fila de información debe estar
       separada por un párrafo.
       Ejemplo:
        8:30 - ANDREA ZUÑIGA - MARCELA RETAMAL - 11123425-6 - PRIVADA
        11:00 - MARIA PIA ZAÑARTU - ANGEL MUÑOZ - 9878789-2 - PRIVADA...

    7. Imprimir un listado total de todos los pacientes que se atendieron en el centro
       médico. Para esto, deberá unir todos los nombres de pacientes e imprimir uno por
       cada párrafo.

       Ejemplo:
       FRANCISCA ROJAS
       PAMELA ESTRADA
       ARMANDO LUNA…
    
    8. Filtrar aquellos pacientes que indican ser de Sistema de Salud PRIVADO en la lista de consultas médicas
       de Dental. 

       Ejemplo:
       MARCELA RETAMAL - PRIVADO
       ANGEL MUÑOZ - PRIVADO
       ANA SEPULVEDA - PRIVADO

    9. Filtrar aquellos pacientes que indican ser de ESTATAL en la lista de consultas
       médicas de Traumatología.

        Ejemplo:
        PAULA SÁNCHEZ – ESTATAL


 */
