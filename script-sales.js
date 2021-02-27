function discount()
		{
			var dayOfWeek = new Date().getDay();
			var a = parseFloat(document.getElementById("a").value); //subtotal
			var message;
			var b, salestax;
			
			
			if (a >= 50 && (dayOfWeek == 2 || dayOfWeek == 3)){
				
				b = a * 0.1;
				salestax = b * 0.06;
				total = (a - b + salestax).toFixed(2);
				message = total;

			}
			else {
			 
			 	tax = a *  0.06;
			 	total = (a + salestax).toFixed(2);
			 	message = total;

			}
			document.getElementById("output").innerHTML = "$" + message;
		}