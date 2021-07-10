function full() {
    var p1 = "This is ";
    var p2 = "a full ";
    var p3 = "sentence."
    var wholesent = p1.concat(p2, p3);
    document.getElementById("Concatenate").innerHTML = wholesent;  // combine all of the parts 
}

function slicemethod() {
let str ="Hello there this is a string"
document.getElementById("slice").innerHTML = str.slice(12);  // take out the first 12 spaces
}

function upper() {
    let str ="Hello there this is a string"
    document.getElementById("up").innerHTML = str.toUpperCase();  // turn everything uppercase
    }

function searching() {
    let str ="Hello there this is a string"
    document.getElementById("search").innerHTML = str.search("there");  // Search where the word "there" is in the string and display the number( its position )
    }

function stringmethod() {
    let X = 12312312321312
    document.getElementById("str").innerHTML = X.toString();  // turns x into a string
    }

function precise() {
    let X = 12312.148912894
    document.getElementById("pre").innerHTML = X.toPrecision(8);  // Have string include 8 numbers
    }

function fix() {
  var X = 2.58385894398543;
  document.getElementById("fixed").innerHTML = X.toFixed(3); // Round the decimal to the 3rd
}

function valuemethod() {
    var X = "Hello, World its me!";
    document.getElementById("value").innerHTML = X.valueOf();  // create function and display inital value of the string
}