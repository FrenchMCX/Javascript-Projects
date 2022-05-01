//This function evaluates whether or not someone is tall enough to ride a ride.
function Ride_Function() {
    var Height, Can_Ride;
    Height= document.getElementById("Height").value;
    Can_Ride = (Height < 52) ? "You are too short" : "You are tall enough";
    document.getElementById("Ride").innerHTML = Can_Ride + " to ride."
}
//This function creates vehicles
function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
//declare each owner's vehicle
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
//display erik's vehicle on a button press
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
}
//display emily's vehicle on a button press
function myFunction1() {
    document.getElementById("New_and_This").innerHTML = "Emily drives a " + Emily.Vehicle_Color + "-colored " + Emily.Vehicle_Model + " manufactured in " + Emily.Vehicle_Year;
}
//example of using a reserved word 
var x = null;
document.write(x);
//this function creates people
function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}
//this describes my father
const myFather = new Person("John", "French", 46, "hazel");
//this is a nested function
function nestedfunction() {
    document.getElementById("Nested_Function").innerHTML = Count();
    function Count() {
        var Starting_point = 9;
        function Plus_one() {Starting_point += 1;}
        Plus_one();
        return Starting_point
    }
}