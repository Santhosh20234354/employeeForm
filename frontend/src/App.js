import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import AddEmployee from './components/EmployeeForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AddEmployee />} /> {/* Add Employee Form */}
      </Routes>
    </Router>
  );
}

export default App;