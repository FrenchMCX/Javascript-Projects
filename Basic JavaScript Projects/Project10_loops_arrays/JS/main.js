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