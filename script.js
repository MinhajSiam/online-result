function resultshow() {
    var students = {
        SARFARAZ: {
            Bio: "98",
            Physics: "89",
            Chemistry: "64"
        },
        RIZWAN: {
            Bio: "70",
            Physics: "89",
            Chemistry: "64"
        },
        HAIDER: {
            Bio: "100",
            Physics: "68",
            Chemistry: "78"
        }
    };
    var sname = document.getElementById("sname").value;
    var input = sname.toUpperCase();
    var show = students[input];
    var showresult = document.getElementById("resultcontainer");

    if (show == undefined) {
        showresult.innerHTML = "No Record Found!";
    } else {
        showresult.innerHTML = "Your Marks in Bio is " + show.Bio + "<br>";
        showresult.innerHTML += "Your Marks in Physics is " + show.Physics + "<br>";
        showresult.innerHTML += "Your Marks in Chemistry is " + show.Chemistry + "<br>";
    }
}