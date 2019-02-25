function Palindromo(cadena){

  var palabra=cadena.split("").reverse().join("");

  if(cadena==palabra){
      return "es palindromo";
  }else{
      return "no es palindromo";
  }
}
//////////////////////////////

function Conteo(cadena){
    return cadena.length;
}
/////////////////////////////

function Contar_palabras(cadena){
    var numeroPalabras = cadena.trim().replace(/\s+/gi, ' ').split(' ').length;
	return numeroPalabras;
}
////////////////////////////

function Vocales(cadena){
    return  cadena.match(/[aeiou]/gi).length;
}

///////////////////////////

function Consonantes(cadena){
return cadena.match(/[bcdhjklmnñpqrstvwxyz]/gi).length;
}


//////////////////////////////
module.exports.Palindromo=Palindromo;
module.exports.Conteo=Conteo;
module.exports.Contar_palabras=Contar_palabras;
module.exports.Vocales=Vocales;
module.exports.Consonantes=Consonantes;