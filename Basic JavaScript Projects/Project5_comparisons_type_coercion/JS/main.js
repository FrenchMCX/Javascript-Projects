//example of typeof 
document.write(typeof 42);
//example of type coercion
document.write("10" + 5);
//display infinity
document.write(2E310);
//display -infinity
document.write(-3E310);
//display true
document.write(10 > 2);
//display false
document.write(10 < 2);
//display 4 in console
console.log(2 + 2);
//display false in console
console.log(2 > 45);
//display true
document.write(10 == 10);
//display false
document.write(1 == 10);
//declare x, y, z, c, and a
x=10
y=10
z="10"
c=89
a="11"
//display true
document.write(x === y);
//display false
document.write(x === z);
//display false
document.write(x === c);
//display false
document.write(c === a);
//display true
document.write(5 > 2 && 10 > 4);
//display false
document.write(2 > 2 && 4 > 4);
//display true
document.write(5 > 10 || 10 > 4);
//display false
document.write(5 > 10 || 10 > 20);
//display true
function not_Function() {
    document.getElementById("Not").innerHTML = !(20 > 10);
}
//display false
function not_Function2() {
    document.getElementById("Not2").innerHTML = !(5 > 10);
}
//display NaN
function my_Function() {
    document.getElementById("Test").innerHTML = 0/0;
}
//display true
document.getElementById("Test2").innerHTML = isNaN('This is a string');
//display false
document.getElementById("Test3").innerHTML = isNaN('007');