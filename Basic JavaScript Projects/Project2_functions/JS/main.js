//This function returns the value of two multiplied numbers!
function myFunction1(p1, p2) {
    return p1 * p2;
}
document.getElementById("id").innerHTML = myFunction1(8, 8);
//This function reacts to being clicked!
function myFunction2() {
    var sentence = "I am learning";
    sentence += " a lot from this bootcamp!";
    document.getElementById("Concatenate").innerHTML = sentence;
}