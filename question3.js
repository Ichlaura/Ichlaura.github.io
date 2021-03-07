function table()
		{
            let start = document.getElementById("start").value =true;
            let end = document.getElementById("end").value=true;
            let divisor = document.getElementById("divisor").value=true;
			let message= "";
            let a = 0;
            let b = 0;
            
while ( (a =0 )&& (b = 0))
           a += start /divisor;
           b += end /divisor;

        
        document.getElementById("output").innerHTML = a + b;
        }