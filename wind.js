
/* Input: Temperature, wind speed
 * Processing: Determines the windchill formula 
 * Output: A message stating the result of the formula
 */


 /* Gets a temperature and wind speed from text field
  * calls the second function(windchill)
  * stores the value return by windchill in variable result
  * output the value returned to the div for user to see 
  * Extra: rounds to two decimals
  */
 function doInputOutput() {
    var temp = parseFloat(document.getElementById('temperature').value);
    var wind = parseFloat(document.getElementById('windspeed').value);
    var result = windChill(temp, wind);
    document.getElementById('output').innerHTML = "Wind Chill: " +
        result.toFixed(2);
}


/* takes tempF and speed as parameters
 * calculates the wind chill factor in fahrenheit
 * Formula: 35.74 + 0.6215 t - 35.75 s^0.16 + 0.4275 t s^0.16
 * returns the wind chill 
 */
function windChill(tempF, speed) {
  
 var windChill = 35.74 + (0.6215*tempF) - 35.75 * (Math.pow(speed, 0.16)) + ((0.4275 * tempF) * (Math.pow(speed, 0.16)));

 return windChill;

}
