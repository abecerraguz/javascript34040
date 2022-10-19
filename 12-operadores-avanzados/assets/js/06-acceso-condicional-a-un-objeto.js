const usuario = {
    nombre: "John Doe",
    edad: 22,
    cursos: {
      javascript: "aprobado"
    }
  }
  
console.log( usuario?.cursos?.javascript || "La propiedad no existe")
// "aprobado"

console.log( usuario?.trabajos?.coderhouse || "La propiedad no existe")
// "La propiedad no existe"
  