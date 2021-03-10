
function tabladel5()
{
    let answer = document.getElementById("tables").value;
    let message= "";
    
     for (let i = 1; i<12;){
         message +=   `5x${1*i} =  ` + `${5*i}<br>`  ;
         i++;
     }

  
    document.getElementById("output2").innerHTML = message;
} 