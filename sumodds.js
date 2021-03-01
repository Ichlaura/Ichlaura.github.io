function sum() {


    //Valores iniciales
    var number = parseInt(document.getElementById("number").value);
    var sum = 0;
    var total= "";

//declaración  For
    for (var i = 0; i <= number; i++){
        
        if ((i % 2)!== 0){
           // document.getElementById('output').value = i + "<br>";
            total = total + "Number: " + i + "<br>";
            sum +=  i;
        }

    }
    	

//salida

    document.getElementById("output").innerHTML = total + sum; 

}



    

