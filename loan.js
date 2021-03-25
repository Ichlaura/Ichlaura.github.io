function computePayment(principal, annualRate, periodsPerYear){  
    var pay;
    pay = (principal * annualRate)/(1-(1+annualRate)-periodsPerYear);
    return pay;
 }
 function computeBalance(principal, annualRate, periodsPerYear, numberOfPaymentsPaidToDate){
    var balance ;
    let num = (principal*(1+annualRate)*periodsPerYear);
    let denum = numberOfPaymentsPaidToDate *((1+annualRate) * periodsPerYear-1)*annualRate;
    balance = num-denum;
    return balance;
 }
 function doPayment(){
    let loanAmount = document.getElementById("principal").value;
    let rate = document.getElementById("rate").value;
    let duration = document.getElementsById("time").value;
    let result = computePayment(loanAmount, rate, duration);
    document.getElementsById("periodPay").value = result;
 }
 function doBalance(){
    let loanAmount = document.getElementById("principal").value;
    let rate = document.getElementById("rate").value;
    let duration = document.getElementById("time").value;
    let currentPaid = document.getElementById("paidMonths").value;
    let result = computeBalance(loanAmount, rate, duration, currentPaid);
    document.getElementById("displayBalance").value = result;
 } 

 