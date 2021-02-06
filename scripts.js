function poundsToKilograms() {
    //INPUT - user enters pounds into text field
    let pounds = parseFloat(document.getElementById('pounds').value)
    //PROCESSING - k = p * 0.45359237
    let kilograms = pounds * 0.45359237;
    let digits = 1;
    let multiplier = Math.pow(10, digits);
    kilograms = Math.round(kilograms * multiplier) / multiplier;
    //OUTPUT - kilograms appears below the text field
    document.getElementById('output').innerHTML = `${kilograms} kg`;
}