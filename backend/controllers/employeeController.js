const Employee = require('../models/Employee');

// Add Employee
const addEmployee = (req, res) => {
    const { name, employeeID, email, phone, department, dateOfJoining, role } = req.body;

    // Validation - Check required fields
    if (!name || !employeeID || !email || !phone || !department || !dateOfJoining || !role) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    // Check for duplicate EmployeeID or Email
    Employee.checkDuplicate(employeeID, email, (err, results) => {
        if (err) return res.status(500).json({ message: 'Server error' });
        if (results.length > 0) {
            return res.status(400).json({ message: 'Employee ID or Email already exists' });
        }

        // Add new employee
        Employee.addEmployee(req.body, err => {
            if (err) return res.status(500).json({ message: 'Failed to add employee' });
            res.status(201).json({ message: 'Employee added successfully' });
        });
    });
};
module.exports = { addEmployee };