
/* Input: Amount Borrowed, Annual Interest rate, Mumber of years, Payments per year, number of payments paid
 * Processing: 
 * Output: 
 */
function doPayment() {
    //get input from user and define variables.
    var principal = parseFloat(document.getElementById('principalInputBox').value);
    var annualRate = parseFloat(document.getElementById('annualRateInputBox').value);
    var years = parseFloat(document.getElementById('yearsInputBox').value);
    var periodsPerYear = parseFloat(document.getElementById('periodsPerYearInputBox').value);

    // Determine the output and show it to the user.
    var result = computePayment(principal, annualRate, years, periodsPerYear);
    document.getElementById('outputPayment').innerHTML = result ;
}

function doBalance() {
    //get input from user and define variables.
    var principal = parseFloat(document.getElementById('principalInputBox').value);
    var annualRate = parseFloat(document.getElementById('annualRateInputBox').value);
    var years = parseFloat(document.getElementById('yearsInputBox').value);
    var periodsPerYear = parseFloat(document.getElementById('periodsPerYearInputBox').value);
    var numberOfPaymentsPaidToDate = parseFloat(document.getElementById('numberOfPaymentsPaidToDateInputBox').value);

    var result = computeBalance(principal, annualRate, years, periodsPerYear, numberOfPaymentsPaidToDate);
    document.getElementById('outputBalance').innerHTML = result ;
}

function computePayment(principal, annualRate, years, periodsPerYear) {
    var interestRatePerPeriod = annualRate / periodsPerYear;
    var periods = years * periodsPerYear;
    var numerator = principal * interestRatePerPeriod;
    var denomenatorParenthesis = 1 + interestRatePerPeriod;
    var denomenator = 1 - Math.pow(denomenatorParenthesis, -periods);
    var p = numerator / denomenator;
//    var p = (principal * interestRatePerPeriod) / (1 - Math.pow(1 + interestRatePerPeriod, periods));
    return p;
}

function computeBalance(principal, annualRate, years, periodsPerYear, numberOfPaymentsPaidToDate) {
    var paymentPerPeriod = computePayment(principal, annualRate, years, periodsPerYear);
    var interestRatePerPeriod = annualRate / periodsPerYear;
    var b = principal * Math.pow(1 + interestRatePerPeriod, numberOfPaymentsPaidToDate) - ((Math.pow(1 + interestRatePerPeriod, numberOfPaymentsPaidToDate) - 1) / interestRatePerPeriod);
    return b;

}
