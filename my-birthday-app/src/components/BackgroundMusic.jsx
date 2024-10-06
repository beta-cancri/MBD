import React, { useRef, useEffect, useState } from 'react';
import alldaylongAudio from '../audio/Alldaylong - Dreamcatcher.mp3'; // Adjust the path if the audio file is in a different folder

const BackgroundMusic = ({ isYouTubePlaying, isMusicPlaying, setIsMusicPlaying }) => {
  const audioRef = useRef(null);
  const [audioLoaded, setAudioLoaded] = useState(false);

  // Monitor when the audio can start playing
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.addEventListener('canplay', () => {
        setAudioLoaded(true);
        console.log("Audio canplay event triggered - audio loaded.");
      });
    }
  }, []);

  // Handle YouTube playing state
  useEffect(() => {
    if (audioRef.current) {
      if (isYouTubePlaying) {
        audioRef.current.pause();
        console.log("YouTube video playing - music paused.");
      } else if (isMusicPlaying && audioLoaded) {
        audioRef.current.play().catch((error) => {
          console.error('Playback error during autoplay:', error);
        });
      }
    }
  }, [isYouTubePlaying, isMusicPlaying, audioLoaded]);

  // Button click handler to toggle music
  const toggleMusic = () => {
    console.log("Music toggle button clicked.");
    if (audioRef.current) {
      if (isMusicPlaying) {
        audioRef.current.pause();
        setIsMusicPlaying(false);
        console.log("Music paused.");
      } else {
        audioRef.current
          .play()
          .then(() => {
            setIsMusicPlaying(true);
            console.log("Music playing.");
          })
          .catch((error) => {
            console.error('Playback error during button click:', error);
          });
      }
    }
  };

  return (
    <div>
      <audio ref={audioRef} loop>
        <source src={alldaylongAudio} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <button onClick={toggleMusic}>
        {isMusicPlaying ? 'Pause Music' : 'Play Music'}
      </button>
    </div>
  );
};

export default BackgroundMusic;
