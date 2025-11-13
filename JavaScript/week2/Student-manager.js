const class07Students = [];

function addStudentToClass(studentName) {
  if (!studentName) {
    console.log("Cannot add empty name to the class");
    return;
  }

  if (class07Students.includes(studentName)) {
    console.log(`Student ${studentName} is already in the class`);
    return;
  }

  if (class07Students.length >= 6 && studentName !== "Queen") {
    console.log("Cannot add more students to class 07");
    return;
  }

  class07Students.push(studentName);
  console.log(`${studentName} has been added to the class.`);
}

function getNumberOfStudents() {
  return class07Students.length;
}

addStudentToClass("Benjamin");
addStudentToClass("Alice");
addStudentToClass("Jasmin");
addStudentToClass("Abir");
addStudentToClass("Damon");
addStudentToClass("Mira");

addStudentToClass("Jonas");
addStudentToClass("Raz");
addStudentToClass("Queen");
addStudentToClass("");

console.log("Number of students:", getNumberOfStudents());
console.log("Current class list:", class07Students);
