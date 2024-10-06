import React, { useState, useCallback } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import LandingPage from './components/LandingPage';
import HomePage from './components/HomePage';
import PhotoDetailPage from './components/PhotoDetailPage';
import BackgroundMusic from './components/BackgroundMusic';
import './App.css';

function AnimatedRoutes({ setIsYouTubePlaying }) {
  const location = useLocation();

  return (
    <AnimatePresence wait>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route
          path="/photo/:id"
          element={<PhotoDetailPage setIsYouTubePlaying={setIsYouTubePlaying} />}
        />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  const [isYouTubePlaying, setIsYouTubePlaying] = useState(false);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);

  // Wrapping setIsMusicPlaying with useCallback to prevent unnecessary re-renders
  const handleSetIsMusicPlaying = useCallback((value) => {
    setIsMusicPlaying(value);
  }, []);

  return (
    <Router>
      {/* Background music component */}
      <BackgroundMusic
        isYouTubePlaying={isYouTubePlaying}
        isMusicPlaying={isMusicPlaying}
        setIsMusicPlaying={handleSetIsMusicPlaying} // Use the memoized function
      />

      {/* Routes */}
      <AnimatedRoutes setIsYouTubePlaying={setIsYouTubePlaying} />
    </Router>
  );
}

export default App;
