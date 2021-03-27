
//Función doPayment
function doPayment() {
    
    var principal = parseFloat(document.getElementById('principalInputBox').value);
    var annualRate = parseFloat(document.getElementById('annualRateInputBox').value);
    var years = parseFloat(document.getElementById('yearsInputBox').value);
    var periodsPerYear = parseFloat(document.getElementById('periodsPerYearInputBox').value);
    var result = computePayment(principal, annualRate, years, periodsPerYear);
    result= result.toFixed(3);
    document.getElementById('outputPayment').innerHTML = result ;
}

//Función doBalance
function doBalance() {
   
    var principal = parseFloat(document.getElementById('principalInputBox').value);
    var annualRate = parseFloat(document.getElementById('annualRateInputBox').value);
    var years = parseFloat(document.getElementById('yearsInputBox').value);
    var periodsPerYear = parseFloat(document.getElementById('periodsPerYearInputBox').value);
    var numberOfPaymentsPaidToDate = parseFloat(document.getElementById('numberOfPaymentsPaidToDateInputBox').value);
    var result = computeBalance(principal, annualRate, years, periodsPerYear, numberOfPaymentsPaidToDate);
    result= result.toFixed(3);
    document.getElementById('outputBalance').innerHTML = result ;
}

//Función computePayment
function computePayment(principal, annualRate, years, periodsPerYear) {

    var interestRatePerPeriod = annualRate / periodsPerYear;
    var periods = years * periodsPerYear;
    var numerator = principal * interestRatePerPeriod;
    var denomenatorParenthesis = 1 + interestRatePerPeriod;
    var denomenator = 1 - Math.pow(denomenatorParenthesis, -periods);
    var p = numerator / denomenator;
    return "$" + p;
}

//Función computeBalance
function computeBalance(principal, annualRate, years, periodsPerYear, numberOfPaymentsPaidToDate) {

    var b = principal * Math.pow((1 + (annualRate / periodsPerYear)), numberOfPaymentPaidToDate) - (((principal * (annualRate / periodsPerYear)) / (1 - Math.pow((1 + (annualRate / periodsPerYear)), - (years * periodsPerYear))) * (Math.pow(1 + (annualRate / periodsPerYear), numberOfPaymentPaidToDate) - 1)) / (annualRate / periodsPerYear))
    return "$" + b;
}
