document.write(typeof 3);

document.write("5" + 5);

function my() {
    var div = 0/0;
    document.getElementById("Test").innerHTML = "0/0" + div;
}

function myfunc() {

document.getElementById("Test1").innerHTML = isNaN('This is a string');

}

function myfunc2() {

document.getElementById("Test2").innerHTML = isNaN('007');

}

document.write(3E310);
document.write(-3E310);
document.write(10 > 2);
document.write(10 < 2);
console.log(2+2);
console.log(isNaN(5>10));
document.write(10==10);
document.write(3==10);

X=5;
Y=5;
document.write(X===Y);

X=5;
Y="10";
document.write(X===Y);

X=5;
Y="5";
document.write(X===Y);

X=5;
Y=10;
document.write(X===Y);

X=10
Y=5
Z=2
document.write(X > Y && Y > Z);
document.write(X > Y && Y < Z);

X=10
Y=5
Z=2
document.write(X > Y || Y > Z);
document.write(X < Y || Y < Z);

function notfunc() {
    document.getElementById("Not").innerHTML= !(20 > 10);
}

function notfunct() {
    document.getElementById("Nots").innerHTML= !(20 < 10);
}

