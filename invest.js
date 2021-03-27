
function doFV() {
   var principal = parseFloat(document.getElementById('principal').value);
   var annualRate = parseFloat(document.getElementById('annualRate').value);
   var years = parseFloat(document.getElementById('years').value);
   var periodsPerYear = parseFloat(document.getElementById('periods').value);
   var result = computeFutureValue(principal, annualRate, years, periodsPerYear);
  result= result.toFixed(3);
   document.getElementById('output').innerHTML = result;
}
function computeFutureValue(principal, annualRate, years, periodsPerYear) {
   var growthRatePerPeriod = annualRate / periodsPerYear;
   var periods = years * periodsPerYear;
   var result = (principal * Math.pow(1 + growthRatePerPeriod, periods));
   return result;
}
function reset() {
   principal.innerHTML = "";
//¿cómo lograr que mi programa borre las celdas con este botón? 
}