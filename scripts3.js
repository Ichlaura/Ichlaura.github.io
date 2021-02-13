function footwear(){

    let weather = document.getElementById("weather").value

    let footwear;
switch (weather) {
case hot:
footwear= 'sandals';
break;
case rain:
footwear = 'galoshes';
break;
case snow:
footwear = 'boots';
break;
case unknown:
footwear = 'shoes';
break;
}

document.getElementById('output').innerHTML = 'Adequate footwear type is ' + footwear + '.';
}
