function Dictionary() {
    var me = {
        Age: "19",
        Gender: "Male",
        Height: "6'",
        Hair: "Brown",
    };
    delete me.Age;
    document.getElementById("Dictionary").innerHTML = me.Age;
}