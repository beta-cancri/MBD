import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Player } from '@lottiefiles/react-lottie-player';
import giftBoxAnimation from '../../animations/gift-box-animation.json';
import './LandingPage.css';

const LandingPage = ({ onMusicStart }) => { // Added the onMusicStart prop
  const [isVisible, setIsVisible] = useState(false); // For scaling animation
  const [isPaused, setIsPaused] = useState(false); // For pausing the animation
  const [isClicked, setIsClicked] = useState(false); // For click/open animation
  const playerRef = useRef(null); // To control the Lottie Player instance
  const navigate = useNavigate();

  useEffect(() => {
    // Start scaling animation after a short delay
    setTimeout(() => {
      setIsVisible(true);
    }, 1500);

    // Automatically pause the animation after 2.2 seconds
    setTimeout(() => {
      if (playerRef.current) {
        playerRef.current.pause();
        setIsPaused(true); // Show the "Click Me!" image
      }
    }, 2200);
  }, []);

  const handleBoxClick = () => {
    setIsPaused(false); // Hide the "Click Me!" image
    setIsClicked(true); // Trigger opening animation
    playerRef.current.play(); // Resume the animation
    onMusicStart(); // Start the music when the box is clicked
  };

  const handleAnimationComplete = () => {
    setTimeout(() => {
      navigate('/home'); // Redirect after animation completes
    }, 10);
  };

  return (
    <div className="landing-page">
      <div className={`gift-box-container ${isVisible ? 'visible' : ''} ${isClicked ? 'clicked' : ''}`}>
        <Player
          ref={playerRef}
          autoplay
          loop={false}
          src={giftBoxAnimation}
          style={{ height: '300px', width: '300px', position: 'relative' }}
          onClick={handleBoxClick} // Resume animation on box click
          onEvent={(event) => {
            if (event === 'complete') {
              handleAnimationComplete();
            }
          }}
        />
        {isPaused && (
          <div className="click-message">
            <img
              src="https://i.imgur.com/MR1pOsi.png"
              alt="Click Me!"
              className="click-image"
            />
          </div>
        )}
        {/* Invisible but clickable button over the animation */}
        <button className="click-button" onClick={handleBoxClick}></button>
      </div>
    </div>
  );
};

export default LandingPage;
