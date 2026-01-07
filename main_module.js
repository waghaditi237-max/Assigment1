// main_module.js

const student = require("./student");
const employee = require("./employee");

// ---- Student Operations ----
student.addStudent("Aditi", "aditi@gmail.com", "Pune", "9876543210");
student.addStudent("Riya", "riya@gmail.com", "Mumbai", "9123456780");
student.viewStudents();

// ---- Employee Operations ----
employee.register("Admin", "admin@gmail.com", "12345", "9999999999");
employee.login("admin@gmail.com", "12345");   // success
employee.login("admin@gmail.com", "wrong");   // fail
