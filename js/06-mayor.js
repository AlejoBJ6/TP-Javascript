//Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.

const numero1 = prompt("Ingrese el primer numero: ")
const numero2 = prompt("Ingrese el segundo numero: ")

if (numero1 > numero2){
  alert("El numero "+ numero1 + " es mayor que el numero " + numero2)
}else{
  alert("El numero "+ numero2 + " es mayor que el numero " + numero1)
}