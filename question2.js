function table()
		{
            let one = document.getElementById("one").value;
            let two = document.getElementById("two").value;
			let message= "";
            let sum = one + two;
  
			if((one > 5  && two > 5) || sum > 20)
			{
                    message = true;
                }
            
			else  if ((one < 5  && two < 5) || sum != 20) {
                message = false;
            } else {}

			document.getElementById("output").innerHTML = message;
		}