function footwear()
		{
			let a = parseFloat(document.getElementById('a').value);
			
			
            if (a == "hot") {
                footwear = "sandals";
            } else if (a == "rain") {
                footwear = "galoshes";
            } else if (a == "snow") { 
                footwear = "Boots";
            } else {
                footwear = "Shoes";
            }
    
            document.getElementById('output').innerHTML = footwear;
        }
            

            
            
            
