let print = () => {
    var numbers = [];
    var num = document.getElementById("num").value;
    for (let i = 1; i <= num; i++) {
        numbers.push(i);
    }
    var mapArray = numbers.map(x => x + 1);
    console.log(mapArray);
    document.getElementById("displayDiv").innerHTML = "[" + numbers.toString() + "] ---mapped---> [" + mapArray.toString() + "]";
}