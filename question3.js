function table()
		{
            let start = document.getElementById("start").value;
            let end = document.getElementById("end").value;
            let divisor = document.getElementById("divisor").value;
			let message= "";
            let a = 0;
            let b = 0;
            
while ( (a =0 )&& (b = 0))
           a = start /divisor;
           b = end /divisor;
start++;
end++;
        
        document.getElementById("output").innerHTML = a + b;
        }