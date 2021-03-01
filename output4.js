function output4()
{

let   balance  = parseInt(document.getElementById("output4").value);  
let balance = 1000;
const rate = .10;
let n = 30;
for (let s = 0; s < n; s++)
    interest = balance * rate;
    balance += interest;
document.getElementById('display4').textContent = balance;

}