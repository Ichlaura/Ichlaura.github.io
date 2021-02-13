function quiz()
		{
			var first = parseFloat(document.getElementById('first').value);
			var second = parseFloat(document.getElementById('second').value);
			var op = document.getElementById('arithmetic').value;
			var answer = parseFloat(document.getElementById('answer').value);

			var compute;
			var message;
			if(op == "+"){
				compute = first + second;
				if ( answer == compute){
					message = "Correct! Good job!";
				} else {
					message = "Incorrect. Try again!";
				}
			}
			else if (op == "-"){
				compute = first - second;
				if ( answer == compute){
					message = "Correct! Good job!";
				} else {
					message = "Incorrect. Try again!";
				}
			}
			else if (op == "*"){
				compute = first * second;
				if ( answer == compute){
					message = "Correct! Good job!";
				} else {
					message = "Incorrect. Try again!";
				}
			}
			else if (op == "/"){
				compute = first / second;
				if ( answer == compute){
					message = "Correct! Good job!";
				} else {
					message = "Incorrect. Try again!";
				}
			}
			else {
				message = "wrong operator";
			}
			document.getElementById("solution").innerHTML = message;
		}
