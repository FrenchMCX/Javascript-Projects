
//example of toFixed() method
let num = 5.56789;
let n = num.toFixed(2);

document.getElementById("fixed").innerHTML = n;

//example of valueOf() method
let tex = "Hello World!";
let resul = tex;

document.getElementById("value").innerHTML = resul;

//example of concat method
function full_Sentence() {
    var part_1 = "I have ";
    var part_2 = "made this ";
    var part_3 = "into a complete ";
    var part_4 = "sentence.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

//slice method example
function slice_Method() {
    var Sentence = "All work and no play makes Johnny a dull boy.";
    var Section = Sentence.slice(23,33);
    document.getElementById("Slice").innerHTML = Section;
}

//example of toUpperCase() method
console.log('alphabet'.toUpperCase());

//example of search() method
let text = "Mr. Blue has a blue house"
let position = text.search("Blue");

document.getElementById("demo").innerHTML = position;

//example of toString() method
function string_Method() {
    var X =182;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}

//example of toPrecision() method
function precision_Method() {
    var X = 12938.3012987376112;
    document.getElementById("Precision").innerHTML = X.toPrecision(10);
}
