
function alarm() {
    var now = new Date();
    var month = now.getMonth();
    var dayOfMonth = now.getDate();
    var dayOfWeek = now.getDay();
    }

    function total()
		{
			var dayOfWeek = new Date().getDay();
			var subtotal = parseFloat(document.getElementById("subtotal").value);
			var message;
			var discout, tax;
			
			
			if (subtotal >= 50 && (dayOfWeek == 2 || dayOfWeek == 3)){
				
				discout = subtotal * 0.1;
				tax = discout * 0.06;
				total = (subtotal - discout + tax).toFixed(2);
				message = total;

			}
			else {
			 
			 	tax = subtotal * 0.06;
			 	total = (subtotal + tax).toFixed(2);
			 	message = total;

			}
			document.getElementById("solution").innerHTML = message;
		}