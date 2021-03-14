
 function doInputOutput() {
    var temperature = parseFloat(document.getElementById('temperature').value);
    var wind = parseFloat(document.getElementById('windspeed').value);
    var result = f(temperature, wind);
    document.getElementById('output').innerHTML = "Wind Chill: " + result.toFixed(2);
}

function f(t, s) {
  
 var f = 35.74 + (0.6215*t) - 35.75 * (Math.pow(s, 0.16)) + ((0.4275 * t) * (Math.pow(s, 0.16)));

 return f;

}
