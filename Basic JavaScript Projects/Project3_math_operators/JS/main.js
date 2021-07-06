function mathfunc () {
    var addition = 5 + 5;
    document.getElementById("Math").innerHTML = "5 + 5 = " + addition;
}

function subfunc () {
    var Subtraction = 5 - 2;
    document.getElementById("Math2").innerHTML = "5 - 2  = " + Subtraction;
}

function multfunc () {
    var mult = 5 * 5;
    document.getElementById("Math3").innerHTML = "5 * 5 = " + mult;
}

function moremath () {
    var math = (5+5) * 10 / 2 - 5;
    document.getElementById("Math4").innerHTML = "5 plus 5, multiplied by 10, divided by 2 and subtracted by 5 = " + math;
}

function modulus () {
    var modmath = 25 % 6;
    document.getElementById("Math5").innerHTML = "Divide 25 by 6, the remainer is = " + modmath;
}

function negation () {
    var x = 25;
    document.getElementById("Math6").innerHTML = -x;
}

function increment () {
    var x = 5;
    x++;
    document.write(x);
}

function decrement () {
    var y = 5;
    y--;
    document.write(y);
}

window.alert(Math.random());

document.write(Math.E);


document.write(Math.PI);