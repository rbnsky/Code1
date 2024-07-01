interface Adress{
    street: string,
    houseNumber: number,
}

interface StudentData {
    name: string,
    adress: Adress,
    matrikel: number,
    exmatriculated: boolean,
}

let student1: StudentData = {
    name: "Yurrgurrt",
    adress: {
        houseNumber: 5,
        street: "Womp Womp"
    },
    matrikel: 33473,
    exmatriculated: false,
}

let student2: StudentData = { name: "martina musterfrau", adress: {houseNumber: 5, street: "black hole"}, matrikel: 35834, exmatriculated: true }

student1.name = "weeewooo";

let students: StudentData[] = [student1, student2];

function studentInfo(student: StudentData): void {
    console.log(student.name, " lives at ", student.adress, " martrikel: ", student.matrikel, " exmatriculated ", student.exmatriculated);
}

for (let i: number = 0; i < students.length; i++) {
    studentInfo(students[i]);
}