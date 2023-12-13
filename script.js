function resultshow() {
    var students = {
        "001": {
            rollNumber: "001",
            studentName: "A",
            fatherName: "****************",
            motherName: "aa",
            courseName: "WDD",
            session: "Jan 2023 - Jun 2023",
            passingYear: "2023",
            result: "A+",
        },
        "002": {
            rollNumber: "002",
            studentName: "B",
            fatherName: "****************",
            motherName: "****************",
            courseName: "****************",
            session: "****************",
            passingYear: "****************",
            result: "A+",
        },
        "003": {
            rollNumber: "003",
            studentName: "C",
            fatherName: "****************",
            motherName: "****************",
            courseName: "W****************",
            session: "****************",
            passingYear: "****************",
            result: "A+",
        },

    };

    var sname = document.getElementById("sname").value;
    var input = sname.toUpperCase();
    var show = students[input];
    var showresult = document.getElementById("resultcontainer");

    if (show == undefined) {
        showresult.innerHTML = "No Record Found!";
    } else {
        showresult.innerHTML = "Roll Number: " + show.rollNumber + "<br>";
        showresult.innerHTML += "Student Name: " + show.studentName + "<br>";
        showresult.innerHTML += "Father's Name: " + show.fatherName + "<br>";
        showresult.innerHTML += "Mother's Name: " + show.motherName + "<br>";
        showresult.innerHTML += "Course Name: " + show.courseName + "<br>";
        showresult.innerHTML += "Session: " + show.session + "<br>";
        showresult.innerHTML += "Passing Year: " + show.passingYear + "<br>";
        showresult.innerHTML += "Result: " + show.result;
    }
}