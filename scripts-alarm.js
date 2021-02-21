function alarm()
{
    var now = new Date();
    var month = now.getMonth();
    var dayOfMonth = now.getDate();
    var dayOfWeek = now.getDay();
    
    var message;

    if ( dayOfWeek != 0 || dayOfWeek != 6)
    {
        if( month == 0 && now == 1){
            message = "Sleep in";
        }

        else if ( month == 6 && now == 4)
        {
            message = "Sleep in";
        }

        else if ( month == 11 && now == 25)
        {
            message == "Sleep in";
        }

        else 
        {
            message = "Get up!";
        }
    }
        
    document.getElementById("output").innerHTML = message;
}