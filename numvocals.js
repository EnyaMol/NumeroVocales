var cadena = prompt("Introdueix una frase: ");

function comptarvocals(cadena){
  var contador =0;
  var contadordeO=0;
  for (var i = 0; i < cadena.length; i++) {
    if (cadena.charAt(i)=='a' || cadena.charAt(i)=='e' || cadena.charAt(i)=='i'
    || cadena.charAt(i)=='o' || cadena.charAt(i)=='u' ) {
      contador++;
      if (cadena.charAt(i)=='o') {
        contadordeO++;
      }
    }
  }
  alert("La frase té "+contador+" vocals. I conté "+contadordeO+ " vocals o.");
}

comptarvocals(cadena);
