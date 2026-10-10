let numero1 = parseFloat(prompt("Ingrese el primer numero"))
let numero2 = parseFloat(prompt("Ingrese el segundo numero"))
/* if (isNaN(numero1) && isNaN(numero2)){
  console.log("debe ingresar numeros")
} */
if (!isNaN(numero1) && !isNaN(numero2)){
  let resultado = numero1 + numero2
  console.log(numero1, numero2, resultado)
  alert("Usted ingreso los siguientes numeros: " + numero1 + " " + numero2)
  alert("La suma de ambos numeros es: " + resultado)
}
else {console.log("debe ingresar numeros para poder sumarlos")
  alert("por favor solo numeros")
}
