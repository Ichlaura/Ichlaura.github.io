function check()
		{
			var one = parseFloat(document.getElementById('one').value);
			var two = parseFloat(document.getElementById('two').value);
			var op = document.getElementById('arithmetic').value;
			var solution = parseFloat(document.getElementById('solution').value);

			var arithmetic;
			var message;
			if(op == "+"){
				arithmetic = one + two;
				if (solution == arithmetic){
					message = "Correct! Great!";
				} else {
					message = "Incorrect. Try again!";
				}
			}
			else if (op == "-"){
				arithmetic= one- two;
				if ( solution == arithmetic){
					message = "Correct! Great!";
				} else {
					message = "Incorrect. Try again!";
				}
			}
			else if (op == "*"){
				arithmetic = one* two;
				if ( solution== arithmetic){
					message = "Correct! Great!";
				} else {
					message = "Incorrect. Try again!";
				}
			}
			else if (op == "/"){
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
			document.getElementById("solution").innerHTML = message;
		}
		