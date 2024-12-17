require('dotenv').config(); // Load environment variables
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql2'); // Import mysql2 package
const employeeRoutes = require('./routes/employeeRoutes');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Database connection
const db = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',           // MySQL host (Docker will set this value)
  user: process.env.DB_USER || 'root',               // MySQL username
  password: process.env.DB_PASSWORD || 'password',   // MySQL password
  database: process.env.DB_NAME || 'mydatabase'      // MySQL database name
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err.message);
    return;
  }
  console.log('Connected to MySQL database');
});

// API Routes
app.use('/api/employees', employeeRoutes);

// Start the server
const PORT = process.env.PORT || 5656;
app.listen(PORT, () => {
  console.log(`Server running on port : ${PORT}`);
});
