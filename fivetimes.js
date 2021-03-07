
function fivetimes()
		{
			let answer = document.getElementById("tables").value;
			let message= "";

			if(answer == "1")
			
             for (let i = 0; i<11;){
                 message +=   `1x${1*i} =  ` + `${1*i}<br>`  ;
                 i++;
             }

			else if (answer == '2' )
			{
                for (let i = 0; i<11; i++){
                    message +=   `2x${1*i} =  ` + `${2*i}<br>`  ;
                }
			}
			else if ( answer == '3')
			{
				for (let i = 0; i<11; i++){
                    message +=   `3x${1*i} =  ` + `${3*i}<br>`  ;
                }
			}	
            else if ( answer == '4')
			{
				for (let i = 0; i<11; i++){
                    message +=   `4x${1*i} =  ` + `${4*i}<br>`  ;
                }
			}	
            else if ( answer == '5')
			{
				for (let i = 0; i<11; i++){
                    message +=   `5x${1*i} =  ` + `${5*i}<br>`  ;
                }
			}	
            else if ( answer == '6')
			{
				for (let i = 0; i<11; i++){
                    message +=   `6x${1*i} =  ` + `${6*i}<br>`  ;
                }
			}		
            else if ( answer == '7')
			{
				for (let i = 0; i<11; i++){
                    message +=   `7x${1*i} =  ` + `${7*i}<br>`  ;
                }
			}	
            else if ( answer == '8')
			{
				for (let i = 0; i<11; i++){
                    message +=   `8x${1*i} =  ` + `${8*i}<br>`  ;
                }
			}	
            else if ( answer == '9')
			{
				for (let i = 0; i<11; i++){
                    message +=   `9x${1*i} =  ` + `${9*i}<br>`  ;
                }
			}	
            else if ( answer == '10')
			{
				for (let i = 0; i<11; i++){
                    message +=   `10x${1*i} =  ` + `${10*i}<br>`  ;
                }
			}	
            else if ( answer == '11')
			{
				for (let i = 0; i<11; i++){
                    message +=   `11x${1*i} =  ` + `${11*i}<br>`  ;
                }
			}	
            else if ( answer == '12')
			{
				for (let i = 0; i<11; i++){
                    message +=   `12x${1*i} =  ` + `${12*i}<br>`  ;
                }
			}	
			else 
			{
				message = "Try again";
			}

			document.getElementById("output").innerHTML = message;
		} 