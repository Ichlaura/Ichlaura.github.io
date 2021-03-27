
//Función doPayment
function doPayment() {
    
    var principal = parseFloat(document.getElementById('principal').value);
    var annualRate = parseFloat(document.getElementById('annual').value);
    var years = parseFloat(document.getElementById('years').value);
    var periodsPerYear = parseFloat(document.getElementById('periods').value);
    var result = computePayment(principal, annualRate, years, periodsPerYear);
    result= result.toFixed(3);
    document.getElementById('outputPayment').innerHTML = "$" + result ;
}

//Función doBalance
function doBalance() {
   
    var principal = parseFloat(document.getElementById('principal').value);
    var annualRate = parseFloat(document.getElementById('annual').value);
    var years = parseFloat(document.getElementById('years').value);
    var periodsPerYear = parseFloat(document.getElementById('periods').value);
    var numberOfPaymentsPaidToDate = parseFloat(document.getElementById('number').value);
    var result = computeBalance(principal, annualRate, years, periodsPerYear, numberOfPaymentsPaidToDate);
    result= result.toFixed(3);
    document.getElementById('outputBalance').innerHTML = "$" + result ;
}

//Función computePayment
function computePayment(principal, annualRate, years, periodsPerYear) {

    var Numerador = principal * (annualRate / periodsPerYear);
    var denominador= 1 - Math.pow((1 + (annualRate / periodsPerYear)), -(years * periodsPerYear));
    var result = Numerador / denominador;
    return result;
}

//Función computeBalance
function computeBalance(principal, annualRate, years, periodsPerYear, numberOfPaymentsPaidToDate) {
    var result = principal * Math.pow((1 + (annualRate / periodsPerYear)), numberOfPaymentsPaidToDate) - (((principal * (annualRate / periodsPerYear)) / (1 - Math.pow((1 + (annualRate / periodsPerYear)), - (years * periodsPerYear))) * (Math.pow(1 + (annualRate / periodsPerYear), numberOfPaymentsPaidToDate) - 1)) / (annualRate / periodsPerYear));
    return result;
}
   