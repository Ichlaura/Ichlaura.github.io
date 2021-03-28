function output5()
{

//For this problem, just write a comment in your submission of why this syntax is incorrect 

//ANSWER Example para que funcione 

 let n = " ";
let i = 0;

while (i < 3) { // había un ; acá, Here was the problem 
   
   n += i; // valid statements (this is not the problem)
   i++;
}

//Answer
document.getElementById("output5").innerHTML = n;
document.write("<br>En el siguiente ejemplo se puede observar la declaración while verdadera, este programa funciona porque el error se encontraba en la linea while (i<3);{<br><br>")
document.write("let i = 0;<br>while (i < 3) {  // había un ; acá, Here was the problem <br>  // valid statements (this is not the problem)<br>i++;<br>}<br><br>")
document.write("<br>The next loop we can look the statement while is true, this program works because the mistake was in line:  while (i<3);{<br><br>")
document.write("let i = 0;<br>while (i < 3) {  // había un ; acá, Here was the problem because ; <br>  // valid statements (this is not the problem)<br>i++;<br>}")
}


