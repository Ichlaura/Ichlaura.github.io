
function tabla5()
{
  
    let message= "";
    
     for (let i = 1; i<13;){
         message +=   `5x${1*i} =  ` + `${5*i}<br>`  ;
         i++;
     }

  
    document.getElementById("output2").innerHTML = message;
} 