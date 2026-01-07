

const students = [];

// Add Student
function addStudent(name, email, city, contact) {
    const student = { name, email, city, contact };
    students.push(student);
    console.log("Student added successfully");
}

// View Students
function viewStudents() {
    if (students.length === 0) {
        console.log("No students found");
    } else {
        console.log("Student List:");
        console.log(students);
    }
}

module.exports = {
    addStudent,
    viewStudents
};
