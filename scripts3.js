function footwear(){

    let footwear
    let weather = document.getElementById("weather").value

    let footwear;
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
document.getElementById('output').innerHTML = 'Adequate footwear type is ' + footwear + '.';
}
