function table()
		{

			var message = "";
			var i = 5;


			for(j = 1; j <= 12; j++ )
			{

				message += i + " x " + j + " = " + i*j + "</br>";
					
			}

			document.getElementById("output").innerHTML = message;
		}