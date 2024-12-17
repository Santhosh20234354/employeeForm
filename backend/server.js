require('dotenv').config(); // Load environment variables
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const employeeRoutes = require('./routes/employeeRoutes');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// API Routes
app.use('/api/employees', employeeRoutes);

// Start the server
const PORT = process.env.PORT || 5656;
app.listen(PORT, () => console.log(`Server running on port : ${PORT}`));