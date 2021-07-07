document.write(typeof 3);  //Displays type of variable 3

document.write("5" + 5);  // Displays 55

function my() {  // create function my
    var div = 0/0;  // create variable 
    document.getElementById("Test").innerHTML = "0/0" + div; 
}

function myfunc() {  // create function

document.getElementById("Test1").innerHTML = isNaN('This is a string');  // shows that the string isn't a number

}

function myfunc2() {  // create function

document.getElementById("Test2").innerHTML = isNaN('007');  // shows that 007 is a number

}

document.write(3E310); // displays infinity
document.write(-3E310);  //displays -infinity
document.write(10 > 2);  // displays 10 is greater than 2
document.write(10 < 2);  // displays that 10 is not greater than 2
console.log(2+2);         // display in console that 2 + 2 is 4
console.log(isNaN(5>10));  // display in console that 5 is not greater than 10 
document.write(10==10);  // displays in console that 10 is equal to 10
document.write(3==10);  // displays 3 is not equal to 10

X=5;
Y=5;
document.write(X===Y);  // displays X equal Y

X=5;
Y="10";
document.write(X===Y); // displays x not equal to y

X=5;
Y="5";
document.write(X===Y); // displays x is not equal to y

X=5;
Y=10;
document.write(X===Y);  // displays x is not equal to y

X=10
Y=5
Z=2
document.write(X > Y && Y > Z); //displays that x is greater than y and y is greater than Z
document.write(X > Y && Y < Z);  // displays that x is greater than why but y is not greater than z, so false

X=10
Y=5
Z=2
document.write(X > Y || Y > Z); // displays that x is greater than y or is greater than z, true
document.write(X < Y || Y < Z); // displays that x is greater than y or is not greater than z, false

function notfunc() {
    document.getElementById("Not").innerHTML= !(20 > 10);
}

function notfunct() {
    document.getElementById("Nots").innerHTML= !(20 < 10);
}

