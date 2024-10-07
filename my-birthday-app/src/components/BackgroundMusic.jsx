import React, { useRef, useEffect, useState } from 'react';
import alldaylongAudio from '../audio/Alldaylong - Dreamcatcher.mp3'; // Adjust the path if the audio file is in a different folder
import './BackgroundMusic.css'; // Importing the CSS file for styling

const BackgroundMusic = ({ isYouTubePlaying, isMusicPlaying, setIsMusicPlaying }) => {
  const audioRef = useRef(null);
  const [audioLoaded, setAudioLoaded] = useState(false);
  const [volume, setVolume] = useState(1); // State for volume control (1 is the max volume)
  const [showLyrics, setShowLyrics] = useState(false); // State to toggle lyrics display

  // Monitor when the audio can start playing
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.02; // Set initial volume to 50%
      audioRef.current.addEventListener('canplay', () => {
        setAudioLoaded(true);
        console.log("Audio canplay event triggered - audio loaded.");
      });
    }
  }, []);

  // Handle YouTube playing state
  useEffect(() => {
    console.log("YouTube playing state:", isYouTubePlaying);
    console.log("Music playing state:", isMusicPlaying);
    console.log("Audio loaded state:", audioLoaded);

    if (audioRef.current) {
      if (isYouTubePlaying) {
        audioRef.current.pause();
        setIsMusicPlaying(false); // Update music playing state here
        console.log("YouTube video playing - music paused.");
      } else if (isMusicPlaying && audioLoaded) {
        audioRef.current.play().catch((error) => {
          console.error('Playback error during autoplay:', error);
        });
      }
    }
  }, [isYouTubePlaying, isMusicPlaying, audioLoaded, setIsMusicPlaying]);

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

  // Function to handle volume changes
  const handleVolumeChange = (e) => {
    const newVolume = e.target.value;
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume; // Adjust audio element volume
    }
  };

  // Function to toggle the lyrics display
  const toggleLyrics = () => {
    setShowLyrics((prev) => !prev);
  };

  return (
    <div className="background-music-container">
      <audio ref={audioRef} loop>
        <source src={alldaylongAudio} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      {/* Volume Control */}
      <div className="volume-control-container">
        <label htmlFor="volumeControl">Volume:</label>
        <input
          id="volumeControl"
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
        />
      </div>

      {/* Control Buttons */}
      <div className="control-buttons">
        {/* Play/Pause Button */}
        <button className="music-button" onClick={toggleMusic}>
          <img
            src={isMusicPlaying ? 'https://i.imgur.com/UKVAXiX.png' : 'https://i.imgur.com/5zebfxX.png'}
            alt={isMusicPlaying ? 'Pause' : 'Play'}
            className="play-pause-icon"
          />
        </button>

        {/* Lyrics Toggle Button */}
        <button className="lyrics-button" onClick={toggleLyrics}>
          <img
            src="https://i.imgur.com/ezHasCv.png"
            alt="Lyrics"
            className="lyrics-icon"
          />
        </button>
      </div>

      {/* Lyrics Display */}
      {showLyrics && (
        <div className="lyrics">
          <p>All day long - Dreamcatcher</p>
          <p>In your heart that fills the sea</p>
          <p>I think I can hear the sky blue sound</p>
          <p>If I close my eyes and you hug me tight</p>
          <p>I feel you might comfort my world (Oh-oh)</p>
          <br />
          <p>Like the moon shining in the blue sky</p>
          <p>Stay with me forever</p>
          <p>Stay with me</p>
          <p>A pleasant wind and our playlist</p>
          <p>Everything's good when we're together</p>
          <br />
          <p>Fall in love</p>
          <p>The feeling that came like fate</p>
          <p>I feel like I'm dreaming</p>
          <p>With a single bright ray of light, shine on me</p>
          <p>Hug my heart</p>
          <br />
          <p>All day long like this</p>
          <p>Day long, day long, day long</p>
          <p>Say you love me</p>
          <p>Hand in hand with you all day long</p>
          <p>Day long, day long, day long</p>
          <br />
          <p>Every day we've always dreamed of</p>
          <p>Now becomes our own diary</p>
          <p>Little habits that have been cut off</p>
          <p>Makes us smile, oh-ooh, whoa-ooh, ooh</p>
          <br />
          <p>Oh, even if the harsh wind blows towards me</p>
          <p>Stay by my side forever</p>
          <p>Stay by my side</p>
          <p>A pleasant wind and a feeling between the two</p>
          <p>Everything's good when we're together</p>
          <br />
          <p>Fall in love</p>
          <p>The feeling that came like fate</p>
          <p>I feel like I'm dreaming</p>
          <p>With a single bright ray of light, shine on me</p>
          <p>Hug my heart</p>
          <br />
          <p>Fall in love</p>
          <p>The feeling that came like fate</p>
          <p>I feel like I'm dreaming</p>
          <p>With a single bright ray of light, shine on me</p>
          <p>Hug my heart</p>
          <br />
          <p>All day long like this</p>
          <p>Day long, day long, day long</p>
          <p>Say you love me</p>
          <p>Hand in hand all day long</p>
          <p>Day long, day long, day long</p>
        </div>
      )}
    </div>
  );
};

export default BackgroundMusic;
