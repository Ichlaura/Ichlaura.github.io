function countDown() {
    var output = "";
    var skip = parseInt(document.getElementById('integer').value);
    var i = 100;
    while (i >= 0) {
        output += i + "<br>";
        i -= skip;
    }
    document.getElementById('output2').innerHTML = output;
  }