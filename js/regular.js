function display() {
    var msg = "JS display() function is called onclick()";
    var myDiv = document.getElementById("displayDiv");
    if (myDiv.style.display === "none") {
        myDiv.style.display = "block";
        myDiv.innerHTML = msg;
    } else {
        myDiv.innerHTML = "";
        myDiv.style.display = "none";
    }
}