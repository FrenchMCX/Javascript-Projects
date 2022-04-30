//This function will perform addition
function addition_Function(p1, p2) {
    return p1 + p2;
}
document.getElementById("Math").innerHTML = "84 + 6 = " + addition_Function(84, 6);

//This function will perform subtraction
function subtractionFunction() {
    var subtraction = 5 - 2;
    document.getElementById("Math").innerHTML = "5 - 2 = " + subtraction;
}

function subtraction_Function1(p1, p2) {
    return p1 - p2;
}
document.getElementById("Math2").innerHTML =  "10 - 5 = " + subtraction_Function1(10, 5);

//This function will perform multiplication
function multiplication() {
    var simple_Math = 6 * 8;
    document.getElementById("Math").innerHTML = "6 x 8 = " + simple_Math;
}

function multiplication_function(p1, p2) {
    return p1 * p2
}
document.getElementById("Math3").innerHTML = "10 * 5 = " + multiplication_function(10, 5);

//This function will perform division
function division() {
    var simple_Math = 48 / 6;
    document.getElementById("Math").innerHTML = "48 / 6 = " + simple_Math;
}

function division_function(p1, p2) {
    return p1 / p2;
}
document.getElementById("Math4").innerHTML = "10 / 5 = " + division_function(10, 5);

//This function will perform a multi-number equation
function more_Math() {
    var simple_Math = (1 + 2) * 10 / 2 - 5;
    document.getElementById("Math").innerHTML = "1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals " + simple_Math;
}

function moreMath(p1, p2, p3, p4, p5) {
return (p1 + p2) * p3 / p4 - p5;
}
document.getElementById("Math5").innerHTML = "1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals " + moreMath(1, 2, 10, 2, 5);

//This function will return the remainder of the division
function modulusOperator() {
    var simple_Math = 25 % 6;
    document.getElementById("Math").innerHTML = "When you divide 25 by 6 you have a remainder of: " + simple_Math;
}

function modulus(p1, p2) {
    return p1 % p2;
}
document.getElementById("Math6").innerHTML = "When you divide 25 by 6 you have a remainder of: " + modulus(25, 6);

//This function will use a unary operator
function negation() {
    var x = 10;
    document.getElementById("Math7").innerHTML = -x;
}

var z = 5;
z++;
document.write(z)
z--;
z--;
document.write(z)

window.alert(Math.random() * 100)

document.getElementById("demo").innerHTML = Math.PI;