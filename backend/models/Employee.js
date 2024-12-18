const db = require('../config/db');

const addEmployee = (employee, callback) => {
    const { name, employeeID, email, phone, department, dateOfJoining, role } = employee;

    const query = `INSERT INTO employees (name, employeeID, email, phone, department, dateOfJoining, role) ` +
                  `VALUES (?, ?, ?, ?, ?, ?, ?)`;
    db.query(query, [name, employeeID, email, phone, department, dateOfJoining, role], callback);
};


const checkDuplicate = (employeeID, email, callback) => {
    const query = `SELECT * FROM employees WHERE employeeID = ? OR email = ?`;
    db.query(query, [employeeID, email], callback);
};
module.exports = { addEmployee, checkDuplicate };