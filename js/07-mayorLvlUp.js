// Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.

const numero1 = parseInt(prompt("Ingrese el primer numero: "))
const numero2 = parseInt(prompt("Ingrese el segundo numero: "))
const numero3 = parseInt(prompt("Ingrese el tercer numero: "))

if (numero1 > numero2 && numero1 > numero3){
  alert("El mayor es: " + numero1)
} 
if (numero2 > numero1 && numero2 >numero3){
  alert("El mayor es: " + numero2)
}
if (numero3 > numero1 && numero3 >numero2){
  alert("El mayor es: " + numero3)
}
// Otra alternativa es usar else if para simplificar el codigo, por el momento lo haremos de esta manera.