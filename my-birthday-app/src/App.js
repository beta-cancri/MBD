import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import LandingPage from './components/LandingPage';
import HomePage from './components/HomePage';
import PhotoDetailPage from './components/PhotoDetailPage'; // Import PhotoDetailPage

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence wait>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/photo/:id" element={<PhotoDetailPage />} /> {/* New route for photo details */}
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
}

export default App;
