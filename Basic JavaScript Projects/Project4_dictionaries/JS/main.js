function Dictionary() {  // create dictionary function
    var me = {  // create dictionary variable
        Age: "19",  // Age key
        Gender: "Male",  // Gender key
        Height: "6'",  // height key
        Hair: "Brown", // hair key
    };
    delete me.Age;  // Deleting the age key
    document.getElementById("Dictionary").innerHTML = me.Age;
}