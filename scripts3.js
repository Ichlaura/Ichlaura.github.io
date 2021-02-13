function footWear()
		{
			var answer = document.getElementById("weather").value;
			var message;
			
			if (answer == 'hot' || answer =='Hot')
			{
				message = "sandals";
			}
			else if (answer == 'rain' || answer == 'Rain')
			{
				message = "galoshes";
			}
			else if ( answer == 'snow'|| answer == 'Snow')
			{
				message = "boots";
			}		
			else 
			{
				message = "shoes";
			}

			document.getElementById("solution").innerHTML = message;
		}