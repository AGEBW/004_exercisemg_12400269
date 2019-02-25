var cad=require("./cadena");

var palindromo=cad.Palindromo("oso");
var tamaño=cad.Conteo("oso");
var palabras=cad.Contar_palabras("el oso quiere papas");
var vocales=cad.Vocales("oso");
var consonantes=cad.Consonantes("osos");

console.log("la palabra es:"+palindromo);
console.log("la cantidad de caracteres es:"+tamaño);
console.log("la cantidad de palabras es:"+palabras);
console.log("tiene "+vocales+" vocales");
console.log("tiene "+consonantes+" consonantes");