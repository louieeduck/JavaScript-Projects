function CallLoop() {
    var Digit = "";
    var a = 1;
    while (a < 15) {
        Digit += "<br>" + a;
        a ++;
    }
    document.getElementById("loop").innerHTML = Digit; //create loop to list 1-14
}

var Instruments = ["guitar", "drums", "piano", "flute"];
var Content = "";
var Y;
function forLoop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("ListofInstruments").innerHTML = Content;  // create loop until array is listed
}

function arrayfunc() {
    var arrayword = [];
    arrayword[0] = "hello";
    arrayword[1] = "hi";
    arrayword[2] = "good morning";
    arrayword[3] = "hey";
    document.getElementById("array").innerHTML = arrayword[2] + " everyone.";  // craete array and display certain phrase
}

function constantfunc() {
    const e = 5;
    document.getElementById("constant").innerHTML = e;    // make e variable constant
}


function pifunc() {  // display pi
    return Math.PI;
}

window.onload = function() {
let evan = {
    Age: "19",
    Gender: "Male",
    HairColor: "Brown",
    Height: "6 feet tall",
    description : function() {
    return "Evan is " + this.Age + " years old and " + this.Height;  // return the selected 
    }
};
document.getElementById("EvanObject").innerHTML = evan.description();
}

let text = "";
for (let i = 0; i < 5; i++) {
  if (i === 3) { break; }
  text += "The number is " + i + "<br>";  //stops loop at 3
}
document.getElementById("demo").innerHTML = text;


let text2 = "";
for (let i = 0; i < 15; i++) {
  if (i === 5) { continue; }
  text2 += "The number is " + i + "<br>";    // skip step 5 in loop
}
document.getElementById("demo2").innerHTML = text2;
