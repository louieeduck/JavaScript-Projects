var x = 5;  // create variable x 
function add() { // create add function with x 
    document.write(20 + x + "<br>");
}
function add2() { // create add function 
    document.write(x + 100);
}
add();
add2();

function add3() { // create add function 
    var x = 5; // create variable  x
    document.write(20 + x + "<br>");
}
function add4() {// create add function 
    document.write(x + 100);
    }
add3();
add4();

function add5() {  // create add function 
    var x = 5;
    console.log(15 + x);
}
function add6() {  // create add function 
    console.log(x + 100);
}
add5();
add6();

function getDate() {
    if (new Date().getHours() < 18) {
        document.getElementById("ifstat").innerHTML = "How are you today?";
    }
}

function Votefunc() { 
    var Age;  
    Age = document.getElementById("Age").value;
    if (Age > 17) document.write("You are old enough to vote");  // if age greater than 17 display text
}

function Times() {
    Time = document.getElementById("Time").value;
    if (Time <=1159) {
        Clock = "Good Morning :)";  //reply if time is less than or equal to 1159
    } else {
        Clock = "Good Night :)";  // reply if time is past 12
    }
    document.getElementById("WhatTime").innerHTML = Clock;
}

function Time_Function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";  // reply if the time is before 12 but greater than 0
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon";  // reply if the time is past 12 and before 18 
    }
    else {
        Reply = "It is evening time";  // reply if the if and else if statements dont
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}
    