



 //.........................Primera función .....................
 function doInputOutput() {
     // Input: Pide la temperatura y el viento al usuario.
    var t = parseFloat(document.getElementById('temperature').value);
    var s= parseFloat(document.getElementById('windspeed').value);
    // Input: las variables del resultado (result)  son iguales a temperatura y wind.
    //// Output: Display the resulting for the user to see -  Muestra el resultado para que lo vea el usuario.
    if (t < 50 && s >= 3) {
      let result = windChill(t, s); // la función f es llamada.
      document.getElementById('output').innerHTML = `${result.toFixed(0)}`;
  }
}


//..........................Segunda función .......................
// Determina el valor con la ecuación.
function windChill(t, s) {
  // Ecuación 
    var f = 35.74 + (0.6215*t) - 35.75 * (Math.pow(s, 0.16)) + ((0.4275 * t) * (Math.pow(s, 0.16)));
 return f; // la función retorna al valor f de la ecuación.

}



