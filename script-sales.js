function discount()
		{
			var dayOfWeek = new Date().getDay();
			var a = parseFloat(document.getElementById("a").value);
			var message;
			var discout, tax;
			
			
			if (a >= 50 && (dayOfWeek == 2 || dayOfWeek == 3)){
				
				discout = a * 0.1;
				tax = discout * 0.06;
				total = (a - discout + tax).toFixed(2);
				message = total;

			}
			else {
			 
			 	tax = a *  0.06;
			 	total = (a + tax).toFixed(2);
			 	message = total;

			}
			document.getElementById("output").innerHTML = "$" + message;
		}