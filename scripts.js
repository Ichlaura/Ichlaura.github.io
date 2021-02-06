/* Input: an amount in Pounds
 * Processing: convert the amount from Pounds to Kilograms by using kg = lb * 0.453592
 * Output: the amount converted to Kilograms
*/
function poundsToKilograms() {
    // Input
    let pounds = parseFloat(document.getElementById('pounds').value);
    
    // Convert the pounds to kilograms.
    let kilograms = pounds * 0.453592;
    
    //Round to the kilograms to one digits after the decimal.
    let digits = 1;
    let multiplier = Math.pow(10, digits);
    kilograms = Math.round(kilograms * multiplier) / multiplier;
    
    // Display the kilograms amount to the user.
    document.getElementById('output').innerHTML = kilograms.toFixed(1) + ' Kilograms';
    }