function quiz()
		{
			let a = parseFloat(document.getElementById('one').value);
			let b = parseFloat(document.getElementById('two').value);
			let c = document.getElementById('arithmetic').value;
			let answer = parseFloat(document.getElementById('answer').value);

			
            let solution;
            switch (c) {
            case '+':
            solution = a+ b;
            break;
            case '-':
            solution = a - b;
            break;
            case '*':
            solution= a * b;
            break;
            case '/':
            solution = a / b;
            break;
            }
            
            
            let message;
            if (answer == solution) {
            message = 'Correct! Good job'
            }
            else {
            message = 'Incorrect! Try again '
            }
            
            document.getElementById('output').innerHTML = message;
            
            }
          
