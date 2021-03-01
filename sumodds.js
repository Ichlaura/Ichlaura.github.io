function sum() {


    //Valores iniciales
    var number = parseInt(document.getElementById("number").value);
    var sum = 0;
    var total= "";

//declaración  For
    for (var i = 0; i <= number; i++){
        
        if ((i % 2)!== 0){
            document.getElementById('output').value = i + "<br>";
            total = total + "Number: " + i + "<br>";
            sum +=  i;
        }

    }
    	

//salida

    document.getElementById("output").innerHTML = total + sum; 

}




//function oddNumbers() {
   
    //const number = document.querySelector('#number').value;
    //let sum = 0;
   // let outcome = '';
  
   // for (let i = 1; i <= number; i++) {
      //  if(i%2 !== 0) {
            //document.getElementById('output').value = i + "<br>";
          //  outcome = outcome + "Number: " + i + '<br>';
           // sum = sum + i;
       // }
  //  }

// Output - city, country
//document.getElementById('output').innerHTML = outcome + 'Total odd numbers:' + sum;
    
//}
    

