function footwear()
		{


//Input: get user inputs and assign them to the variables
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
}
//Output: Display the message to the user
document.getElementById('output').innerHTML = 'Adequate footwear type is ' + shoes + '.';




        }
            

            
            
            
