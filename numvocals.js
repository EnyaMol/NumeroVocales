var cadena = prompt("Introdueix una frase: ");

function comptarvocals(cadena){
  var contador =0;
  for (var i = 0; i < cadena.length; i++) {
    if (cadena.charAt(i)=='a' || cadena.charAt(i)=='e' || cadena.charAt(i)=='i'
    || cadena.charAt(i)=='o' || cadena.charAt(i)=='u' ) {
      contador++;
    }
  }
  alert("La frase té "+contador+" vocals.");
}

comptarvocals(cadena);
