import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Dashboard from './Dashboard';
import Login from './Login';
import Register from './Register'; // Import Register component
import './App.css'; // Global styles

function App() {
  return (
    <Router>
      <div className="App">
    
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} /> {/* Route for Register component */}
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;


