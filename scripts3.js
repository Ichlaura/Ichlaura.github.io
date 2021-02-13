function footwear()
		{
			let a = parseFloat(document.getElementById('a').value);
			
			
            let b;
            switch (weather) {
            case (a==hot):
            b = 'sandals';
            break;
            case (a== rain):
            b = 'galoshes';
            break;
            case (a==snow):
            b = 'boots';
            break;
            case (a==unknown):
           b = 'shoes';
            break;
            }
            

            
            document.getElementById('output').innerHTML = b;
            
            }
          
