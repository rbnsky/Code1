"use strict";
let student1 = {
    name: "Yurrgurrt",
    adress: {
        houseNumber: 5,
        street: "Womp Womp"
    },
    matrikel: 33473,
    exmatriculated: false,
};
let student2 = { name: "martina musterfrau", adress: { houseNumber: 5, street: "black hole" }, matrikel: 35834, exmatriculated: true };
student1.name = "weeewooo";
let students = [student1, student2];
function studentInfo(student) {
    console.log(student.name, " lives at ", student.adress, " martrikel: ", student.matrikel, " exmatriculated ", student.exmatriculated);
}
for (let i = 0; i < students.length; i++) {
    studentInfo(students[i]);
}
//# sourceMappingURL=main.js.map