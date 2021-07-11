function CallLoop() {
    var Digit = "";
    var a = 1;
    while (a < 15) {
        Digit += "<br>" + a;
        a ++;
    }
    document.getElementById("loop").innerHTML = Digit;
}

var Instruments = ["guitar", "drums", "piano", "flute"];
var Content = "";
var Y;
function forLoop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("ListofInstruments").innerHTML = Content;
}

function arrayfunc() {
    var arrayword = [];
    arrayword[0] = "hello";
    arrayword[1] = "hi";
    arrayword[2] = "good morning";
    arrayword[3] = "hey";
    document.getElementById("array").innerHTML = arrayword[2] + " everyone.";
}
