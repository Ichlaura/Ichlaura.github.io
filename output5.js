function output5()
{

    //document.write("En el siguiente ejemplo se puede observar la declaración while verdadera")
 //For this problem, just write a comment in your
 // submission of why this syntax is incorrect   
let i = 0;
let n = 0;
while (i < 3); {
    i++;
   n += n; // valid statements (this is not the problem)
}
    document.getElementById('output5').textContent = n;

}

