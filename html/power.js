function powTable()
{

    var message = "";
    var i = 2;


    for(j = 0; j <= 31; j++ )
    {

        if ( j < 31)
        {
            message += Math.pow(i, j) + " <br>";
        }

        else 
        {
            message += Math.pow(i, j);
        }
            
    }

    document.getElementById("output").innerHTML = message;
}
