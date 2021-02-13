function quiz()
		{
			var a = parseFloat(document.getElementById('one').value);
			var b = parseFloat(document.getElementById('two').value);
			var c = document.getElementById('arithmetic').value;
			var answer = parseFloat(document.getElementById('answer').value);

			var arithmetic;
			var message;
			if(c == "+"){
				arithmetic= a + b;
				if ( answer == arithmetic){
					message = "Correct! ";
				} else {
					message = "Incorrect. Try again!";
				}
			}
			else if (c == "-"){
				arithmetic= a - b;
				if ( answer == arithmetic){
					message = "Correct! ";
				} else {
					message = "Incorrect. Try again!";
				}
			}
			else if (c == "*"){
				arithmetic = a * b;
				if ( answer == arithmetic){
					message = "Correct! ";
				} else {
					message = "Incorrect. Try again!";
				}
			}
			else if (c == "/"){
				arithmetic = a / b;
				if ( answer == arithmetic){
					message = "Correct! ";
				} else {
					message = "Incorrect. Try again!";
				}
			}
			else {
				message = "ERROR";
			}
			document.getElementById("final").innerHTML = message;
		}
