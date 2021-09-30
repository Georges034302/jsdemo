let arrow = (num, center) => {
    return Math.pow(num - center, 2);
}

let print = () => {
    var nums = [];
    var num = document.getElementById("num").value;
    for (let i = 1; i <= num; i++) {
        var center = i / 2;
        nums.push(arrow(i, center));
    }
    console.log(nums);
    document.getElementById("displayDiv").innerHTML = "[" + nums.toString() + "]";
}