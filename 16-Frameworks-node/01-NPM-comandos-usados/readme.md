# Inicio de un proyecto con NPM

### Iniciar un proyecto con NPM
1. npm init (No te pregunta la configuración)
1. npm init -Y (Te pregunta la configuración)

### Iniciar un proyecto con NPM
1. npm install `nombre_del_paquete` ( Se instala en el proyecto )
1. npm install -g `nombre_del_paquete` ( Se instala en la maquina )

### Desintalar una dependencia
1. npm uninstall `nombre_del_paquete`

### Versionamiento y actualización
1. npm install `nombre_del_paquete>`@`numero_version`

### Update 
1. npm update `nombre_del_paquete`
1. npm update ( Actualiza todos los paquetes )
1. npm update -g ( Actualiza todos los paquetes a nivel global )

Ahora, ¿Qué sucede si deseo actualizar una dependencia para solo aplicar parches o quizá solo actualizar a una versión menor? Para esto, podemos modificar el registro de la dependencia en el archivo package.json, anteponiendo un carácter especial que NPM lo interpretará para saber a qué nivel deseamos actualizar. Por ejemplo:

1. ~3.5.1: El carácter “tilde” nos asegurará que solo se corregirán errores, es decir, se aplicará el parche más reciente disponible.

1. ^3.5.1: El carácter intercalación nos garantizará que se corregirán errores y se agregarán funcionalidades nuevas, es decir, se cambiará a la versión menor más reciente disponible.

1. *3.5.1: El carácter asterisco nos asegurará que se actualizará a la versión mayor más reciente disponible. Aplicar este tipo de configuración suele ser de alto impacto, por lo que se requiere cuidado al proceder.

### Lista las dependencias
1. npm list

### Inatalación de React
1. npm init react-app my-app-uno
1. npx create-react-app my-app-dos






