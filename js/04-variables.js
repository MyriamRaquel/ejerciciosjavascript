const precioproducto = parseInt(prompt("Ingrese el precio del producto"))
if (!isNaN(precioproducto)){
  if (precioproducto>1000) {
  const preciofinal = precioproducto * 0.85
  alert("El precio con descuento es $" + preciofinal)
  }
  else {alert("El precio es $" + precioproducto)
  }
}
else {console.log("debe ingresar un numero")
  alert("por favor solo numeros")
}
