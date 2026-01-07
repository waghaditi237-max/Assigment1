// employee.js

const employees = [];

// Registration
function register(name, email, password, contact) {
    const employee = { name, email, password, contact };
    employees.push(employee);
    console.log("Registration successful");
}

// Login
function login(email, password) {
    const user = employees.find(
        emp => emp.email === email && emp.password === password
    );

    if (user) {
        console.log("Login successful");
    } else {
        console.log("Invalid email or password");
    }
}

module.exports = {
    register,
    login
};
