//continue statement
let te = "";
for (let i = 0; i < 10; i++) {
    if (i === 3) { continue; }
    te += "The number is " + i + "<br>";
}
document.getElementById("continue").innerHTML = te;

//break statement
let tex = "";
for (let i = 0; i < 10; i++) {
    if (i === 3) { break; }
    tex += "The number is " + i + "<br>";
}

document.getElementById("break").innerHTML = tex;

//example of let keyword and object
let drink = {
    brand: "Vitamin Water ",
    flavor:"Acai-blueberry-pomegranate",
    main_ingredient:"antioxidants",
    description : function() {
        return "This drink is a " + this.brand + " flavored " + this.flavor + " with " + this.main_ingredient + ".";
    }
};

document.getElementById("Drink_Object").innerHTML = drink.description();

//Example of let keyword
var X = 29;
document.write(X);
{
    let X = 33;
    document.write("<br>" + X);
}
document.write("<br>" + X);

//Constant function
function constant_Function() {
    const Musical_Instrument = {type:"bass", brand:"Sterling", color:"black"};
    Musical_Instrument.color = "red";
    Musical_Instrument.price = "$350";
    Musical_Instrument.type = "guitar";
    document.getElementById("Constant").innerHTML = "The cost of the " + Musical_Instrument.type + " was " + Musical_Instrument.price;
}


//Array function
function array_Function() {
    var Array = [];
    Array[0] = "Zero";
    Array[1] = "One";
    Array[2] = "Two";
    Array[3] = "Three";
    document.getElementById("Array").innerHTML = "This value of the Array is numbered " + Array[3] + ".";
}

//Count to 10
function Call_Loop() {
    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}

//example of string length property
let text = "Hello World";
let length = text.length;

document.getElementById("length").innerHTML = length + "<br>";

//list of instruments with a for loop
var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Cello", "Trombone", "Lute"];
var Content = ""
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>"
    }
    document.getElementById("List").innerHTML = Content;
}

//Example of JS Return 
function return_Function() {
    return Math.PI;
}

document.getElementById("return").innerHTML = return_Function();