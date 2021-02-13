function footwear()
		{
			let b = parseFloat(document.getElementById("a").value);
			
			
            if (b == "hot") {
                footwear = "sandals";
            } else if (b == "rain") {
                footwear = "galoshes";
            } else if (b == "snow") { 
                footwear = "Boots";
            } else {
                footwear = "try again";
            }
    
            document.getElementById('output').innerHTML = footwear;
        }
            

            
            
            
