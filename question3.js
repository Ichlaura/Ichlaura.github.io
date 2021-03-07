function table()
		{
            let start = document.getElementById("one").value;
            let end = document.getElementById("two").value;
            let divisor = document.getElementById("two").value;
			let message= "";
            
        while (start < 0 && end <0){
            start++;
            message = start/divisor;
            if (message = 0) {
                show = message;
            } else {

            }
        }
			document.getElementById("output").innerHTML = message;
        }