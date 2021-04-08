
 function test() {
    let list1 = [ 17, 8, 9, 5, 20 ];
    let list2 = [ 12, 4, 8, 15, 17, 5, 20, 11 ];


    let sum1 = addEnds(list1);
    let sum2 = addEnds(list2);
    let mid1 = getMiddle(list1);
    let mid2 = getMiddle(list2);


    let output =
            sum1 + '<br>' +
           sum2 + '<br>' +
           mid1 + '<br>' +
            mid2;

    document.getElementById('output').innerHTML = output;
}

function addEnds(list) {
    return list[0] + list[list.length-1]
}
function getMiddle(list) {
    if(list.length % 2 == 0) {
        return (list[list.length / 2] + list[list.length / 2 - 1]) / 2;
    }
    else {
        return list[Math.floor(list.length / 2)];
    }
}