function arithmetic()
		{
			var one = parseFloat(document.getElementById('one').value);
			var two = parseFloat(document.getElementById('two').value);
			var a = document.getElementById('arithmetic').value;
			var solution = parseFloat(document.getElementById('solution').value);

			var arithmetic;
			var message;
			if(a == "+"){
				arithmetic = one + two;
				if (solution == arithmetic){
					message = "Correct! Great!";
				} else {
					message = "Incorrect. Try again!";
				}
			}
			else if (a == "-"){
				arithmetic= one - two;
				if ( solution == arithmetic){
					message = "Correct! Great!";
				} else {
					message = "Incorrect. Try again!";
				}
			}
			else if (a == "*"){
				arithmetic = one * two;
				if ( solution== arithmetic){
					message = "Correct! Great!";
				} else {
					message = "Incorrect. Try again!";
				}
			}
			else if (a == "/"){
				arithmetic = one / two;
				if ( solution == arithmetic){
					message = "Correct! Great!";
				} else {
					message = "Incorrect. Try again!";
				}
			}
			else {
				message = "Error";
			}
			document.getElementById("final").innerHTML = message;
		}
		