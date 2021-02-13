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
    
            let hot = document.getElementById('hot').value;
            let rain = document.getElementById('rain').value;
            let snow = document.getElementById('snow').value;
            let unknown = document.getElementById('unknown').value;

    
            let shoes;
            switch (weather) {
            case hot:
            shoes = 'sandals';
            break;
            case rain:
            shoes = 'galoshes';
            break;
            case snow:
            shoes = 'boots';
            break;
            case unknown:
            shoes = 'shoes';
            break;

            document.getElementById('output').innerHTML = shoes; 
        }
            

            
            
        