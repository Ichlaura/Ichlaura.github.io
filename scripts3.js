function footwear(){

    let a = document.getElementById("choose").value;

    let footwear;
switch (a) {
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

document.getElementById('output').innerHTML =  + footwear ;
}
