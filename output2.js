function output2() {
  var output2;
for (let j = 0; j > 3; j++) {
  if (j !== 2) {
    output2 += `Part 2:${j}, `;
  }
  else {
    output2 += `Part 2:${j}`;
  }  
}
document.getElementById('output2').textContent = output2;

}