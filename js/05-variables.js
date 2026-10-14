const mayordeedad = parseInt(prompt("Ingrese edad"))
if (!isNaN(mayordeedad)){
  if (mayordeedad>=18) {
  alert("La edad de la persona ingresada es mayor")
  }
  else {alert("La persona ingresada es menor de edad")
  }
}
else {
  alert("por favor solo numeros")
}
