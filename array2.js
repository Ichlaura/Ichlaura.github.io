
function test() {
    let list1 = [17, 8, 9, 5, 20];
    let list2 = [12, 4, 8, 15, 17, 5, 20, 11];


    let count1 = countEvens(list1);
    let count2 = countEvens(list2);
    let mult1 = multiply(list1, 3);
    let mult2 = multiply(list2, 4);


    let output =
        count1 + '<br>' +
        count2 + '<br>' +
        mult1 + '<br>' +
        mult2;
    document.getElementById('output').innerHTML = output;
}
function countEvens(list) {
    var result = 0;
    for (var i = 0; i < list.length; i++) {
        if (list[i] % 2 == 0) {
            result++;
        }
    }
    return result;
}

function multiply(list, mult) {
    for (var i = 0; i < list.length; i++) {
        list[i] *= mult;
    }
    return list;
}