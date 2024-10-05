import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

const BackgroundMusic = ({ audioSrc }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const audioRef = useRef(null);
  const location = useLocation();
  const [isYouTubePlaying, setIsYouTubePlaying] = useState(false);

  // Play/Pause the audio based on route or YouTube play state
  useEffect(() => {
    if (isYouTubePlaying) {
      audioRef.current.pause();
    } else if (isPlaying) {
      audioRef.current.play();
    }
  }, [location.pathname, isPlaying, isYouTubePlaying]);

  // Toggle play/pause for background music
  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div>
      {/* Hidden audio element */}
      <audio ref={audioRef} src={audioSrc} loop autoPlay />

      {/* Toggle play/pause button */}
      <button onClick={togglePlayPause}>
        {isPlaying ? 'Pause Music' : 'Play Music'}
      </button>
    </div>
  );
};

export default BackgroundMusic;
