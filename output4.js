function output4()
{
    let balance = 1000;
	const rate = 0.1;
	let n = 30;
	for (let s = 1; s < n; s++) {
		interest = balance * rate;
		balance += interest;
	}
    balance= balance.toFixed(2);
document.getElementById('output4').textContent = balance;
}