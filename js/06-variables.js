const dolares = parseInt(prompt("Ingrese los dolares que tiene en su poder"))
const cotizaciondolar = parseFloat(prompt("Ingrese cotización del dolar a la fecha"))
if (!isNaN(dolares) && !isNaN(cotizaciondolar)){
  const pesosargentinos = dolares * cotizaciondolar
  alert ("usted tiene $ argentinos " + pesosargentinos)
}
else {
  alert("por favor solo numeros")
}