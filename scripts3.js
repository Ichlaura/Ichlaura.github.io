function footWear()
		{
			var answer = document.getElementById("weather").value;
			var message;
			
			if (answer == 'hot' )
			{
				message = "sandals";
			}
			else if (answer == 'rain' )
			{
				message = "galoshes";
			}
			else if ( answer == 'snow')
			{
				message = "boots";
			}		
			else 
			{
				message = "shoes";
			}

			document.getElementById("output").innerHTML = message;
		} 

            
            
            
