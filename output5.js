function output5()
{

    //document.write("En el siguiente ejemplo se puede observar la declaración while verdadera")
 //For this problem, just write a comment in your
 // submission of why this syntax is incorrect   
 let n = " ";
let i = 0;
while (i < 3); {
   
   n += i; // valid statements (this is not the problem)
   i++;
}
document.getElementById('output5').innerHTML = n;

}


