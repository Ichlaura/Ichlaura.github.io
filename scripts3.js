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


let message;
if (a == a) {
message = footwear
}
else {
message = 'try again'
}


document.getElementById('output').innerHTML = message;

}
