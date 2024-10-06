import React, { useState } from 'react';
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

  return (
    <Router>
      {/* Background music component */}
      <BackgroundMusic
        audioSrc="https://shchsac-my.sharepoint.com/:u:/g/personal/diegochinchay_shchsac_onmicrosoft_com/EQnp7d_CGvpJqUX_jO5hoisB5lL4v_TuXCEVGRN7tuUwvw?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=uX3JwJ"
        isYouTubePlaying={isYouTubePlaying}
        isMusicPlaying={isMusicPlaying}
        setIsMusicPlaying={setIsMusicPlaying}
      />

      {/* Routes */}
      <AnimatedRoutes setIsYouTubePlaying={setIsYouTubePlaying} />
    </Router>
  );
}

export default App;
