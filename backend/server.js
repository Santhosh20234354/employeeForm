require('dotenv').config(); 
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql2'); 
const employeeRoutes = require('./routes/employeeRoutes');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,               
  password: process.env.DB_PASSWORD,   
  database: process.env.DB_NAME       
});
db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err.message);
    return;
  }
  console.log('Connected to MySQL database');
});


app.use('/api/employees', employeeRoutes);

const PORT = process.env.PORT || 5656;
app.listen(PORT, () => {
  console.log(`Server running on port : ${PORT}`);
});
