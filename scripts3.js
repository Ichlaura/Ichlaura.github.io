function footwear()
		{
            if (weather == "hot") {
                footwear = "sandals";
            } else if (weather == "rain") {
                footwear = "galoshes";
            } else if (weather == "snow") { 
                footwear = "Boots";
            } else {
                footwear = "Shoes";
            }
    
            document.getElementById('output').innerHTML = footwear
        }
            

            
            
            
