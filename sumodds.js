function sum() {

    var number = parseInt(document.getElementById("number").value);
    var sum = 0;
    var total;

    for (var i = 0; i <= number; i++){
        
        if ((i % 2)!== 0){
            sum += i;
        }

    }
    
    total = sum;	

    document.getElementById("output").innerHTML = total

}

