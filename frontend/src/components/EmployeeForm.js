import React, { useState } from 'react';
import { addEmployee } from '../services/api';
import '../styles/EmployeeForm.css';

function EmployeeForm() {
    const [form, setForm] = useState({
        name: '',
        employeeID: '',
        email: '',
        phone: '',
        department: '',
        dateOfJoining: '',
        role: ''
    });

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleChange = e => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async e => {
        e.preventDefault();
        setError('');
        setSuccess('');
    
        try {
            await addEmployee(form);
            setSuccess('Employee added successfully!');
            setForm({ name: '', employeeID: '', email: '', phone: '', department: '', dateOfJoining: '', role: '' });
        } catch (err) {
            console.error("Error Response:", err.response?.data);
            const errorMessage = err.response?.data?.message || 
                                 (typeof err.response?.data === 'string' ? err.response.data : 'Something went wrong. Please try again.');
            setError(errorMessage);
        }
    };
    
    
    return (
        <form onSubmit={handleSubmit}>
            <h2>Add Employee</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {success && <p style={{ color: 'green' }}>{success}</p>}

            <input
                placeholder='Name'
                name='name'
                value={form.name}
                onChange={handleChange}
                required
            />

            <input
                placeholder='Employee ID'
                name='employeeID'
                value={form.employeeID}
                onChange={handleChange}
                required
                pattern='[A-Za-z0-9]{1,10}'
                title='Employee ID should be alphanumeric and up to 10 characters.'
            />

            <input
                placeholder='Email'
                type='email'
                name='email'
                value={form.email}
                onChange={handleChange}
                required
                title='Please enter a valid email address.'
            />

            <input
                placeholder='Phone'
                name='phone'
                value={form.phone}
                onChange={handleChange}
                required
                pattern='\d{10}'
                title='Phone number should be exactly 10 digits.'
            />

            <select
                name='department'
                value={form.department}
                onChange={handleChange}
                required
            >
                <option value='' disabled>Select Department</option>
                <option value='HR'>HR</option>
                <option value='Engineering'>Engineering</option>
                <option value='Marketing'>Marketing</option>
            </select>

            <input
                type='date'
                name='dateOfJoining'
                value={form.dateOfJoining}
                onChange={handleChange}
                required
                max={new Date().toISOString().split('T')[0]}
                title='Date of joining should be a valid date in the past.'
            />

            <input
                placeholder='Role'
                name='role'
                value={form.role}
                onChange={handleChange}
                required
            />

            <button type='submit'>Submit</button>
            <button type='reset' onClick={() => setForm({})}>Reset</button>
        </form>
    );
}

export default EmployeeForm;
