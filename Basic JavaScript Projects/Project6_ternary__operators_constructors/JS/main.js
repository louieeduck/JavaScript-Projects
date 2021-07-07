function RideFunc() {  // create function
    var Height, Can_ride;  // create 2 variables
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "you are too short":"You are tall enough";  // if above or below 52 display text
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";  
}

function Votefunc() { // create function
    var Age, Can_vote;  // create variables
    Age = document.getElementById("Age").value;
    Can_vote = (Age < 18) ? "You are too young":"You are old enough to vote";  //if above or below 18 display text
    document.getElementById("Vote").innerHTML = Can_vote + " to vote.";
}

function Vehicle(Make, Model, Year, Color) { // create function
    this.Vehicle_Make = Make;  //create variables for certain items
    this.Vehicle_Model = Model; //create variables for certain items
    this.Vehicle_Year = Year; //create variables for certain items
    this.Vehicle_Color = Color; //create variables for certain items
}

var Jack = new Vehicle ("Dodge", "Viper", 2020, "Red"); //create variables
var Emily = new Vehicle ("Jeep", "Trail Hawk", 2019, "White and Black"); //create variables 
var Erik = new Vehicle ("Ford", "Pinto", 1971, "Mustard");//create variables
function myFunction() {
    document.getElementById("New_and_This").innerHTML = "Erik drives a " + Erik.Vehicle_Color + "-colored" + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
}

function Person(first, last, age, eye) { // create function
    this.firstName = first; //create variables for certain items
    this.lastName = last; //create variables for certain items
    this.age = age; //create variables for certain items
    this.eyeColor = eye; //create variables for certain items
  }

var Evan = new Person ("Evan", "Fretheim", 19, "Hazel") //create variables
var Bob = new Person ("Bob", "Builder", 24, "Blue") //create variables
var John = new Person ("John", "Doe", 56, "Brown") //create variables
function myfunc() {
    document.getElementById("Yes").innerHTML = "Evan  " + Evan.lastName + " has " + Evan.eyeColor + "-colored eyes and is " + Evan.age;
}

function add() { // create function
    document.getElementById("Nested_Function").innerHTML = Count();
    function Count() {
        var Starting_point = 9 // starting point variable
        function Plus_One() {Starting_point +=1}  // create function to add one 
        Plus_One();
        return Starting_point; // return the starting point function
    }
}