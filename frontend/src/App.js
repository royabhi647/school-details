import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddSchool from './components/AddSchool';
import ShowSchools from './components/ShowSchools';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<AddSchool />} />
          <Route path="/show-schools" element={<ShowSchools />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;