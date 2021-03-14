



 //.........................Primera función .....................
 function doInputOutput() {
     // Input: Pide la temperatura y el viento al usuario.
    var temperature = parseFloat(document.getElementById('temperature').value);
    var wind = parseFloat(document.getElementById('windspeed').value);
    // Input: las variables del resultado (result)  son iguales a temperatura y wind.
    var result = f(temperature, wind); // la función es llamada.

    //// Display the resulting for the user to see -  Muestra el resultado para que lo vea el usuario.
    document.getElementById('output').innerHTML = "Wind Chill: " + result.toFixed(2);
}


//..........................segunda función .......................
// Determina el valor con la ecuación.
function f(t, s) {
  // Ecuación 
 var f = 35.74 + (0.6215*t) - 35.75 * (Math.pow(s, 0.16)) + ((0.4275 * t) * (Math.pow(s, 0.16)));

 return f; // la función retorna al valor f de la ecuación.

}
