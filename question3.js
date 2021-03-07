function table()
		{
            let start = document.getElementById("start").value;
            let end = document.getElementById("end").value;
            let divisor = document.getElementById("divisor").value;
		  
for (start > 0; start < end; start++) {
           start += start /divisor;

} 


 
        
        document.getElementById("output").innerHTML = start;
        }