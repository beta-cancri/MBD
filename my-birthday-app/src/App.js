import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import HomePage from './components/HomePage';
import PhotoDetailPage from './components/PhotoDetailPage'; // Import PhotoDetailPage

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/photo/:id" element={<PhotoDetailPage />} /> {/* New route for photo details */}
      </Routes>
    </Router>
  );
}

export default App;
