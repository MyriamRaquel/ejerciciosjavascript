const nombre = prompt("Ingrese el Nombre")
const apellido = prompt("Ingrese el Apellido")
const edad = prompt("Ingrese la Edad")
if (isNaN(nombre) && isNaN(apellido) && !isNaN(edad)){
  console.log("Usted ingresó los siguientes datos: " + nombre + " " + apellido + " " + edad)
  alert("Usted ingresó los siguientes datos: " + nombre + " " + apellido + " " + edad)
}
else {
  console.log("Debe ingresar letras para Nombre y Apellido y números para edad")
  alert("Debe ingresar letras para Nombre y Apellido y números para edad")
}
