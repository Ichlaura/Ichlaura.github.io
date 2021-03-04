function output1()
{

let   output1  = parseInt(document.getElementById("output1").value);  
let output1;
let i = 0;

while (i < 2) {
    output1 += "Part 1:" + i + "<br>"; //this was the wrong part 
   // output1 += `Part 1:${i}<br>`; not make sense with all "" and did not have plus +
}
document.getElementById('output1').innerHTML = output1;

}
