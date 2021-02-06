
function poundsToKilograms() {
    // Input
    let pounds = parseFloat(document.getElementById('pounds').value);
    
    // Convert the pounds to kilograms.
    let kilograms = pounds * 0.453592;
    
    //Round 
    let digits = 1;
    let multiplier = Math.pow(10, digits);
    kilograms = Math.round(kilograms * multiplier) / multiplier;
    
    // Display 
    document.getElementById('output').innerHTML = kilograms.toFixed(1) + ' Kilograms';
    }