import React, { useRef, useEffect, useState } from 'react';
import alldaylongAudio from '../audio/Alldaylong - Dreamcatcher.mp3'; // Adjust the path if the audio file is in a different folder
import './BackgroundMusic.css'; // Importing the CSS file for styling

const BackgroundMusic = ({ isYouTubePlaying, isMusicPlaying, setIsMusicPlaying }) => {
  const audioRef = useRef(null);
  const [audioLoaded, setAudioLoaded] = useState(false);
  const [volume, setVolume] = useState(0.3); // Set initial volume to 50%
  const [showLyrics, setShowLyrics] = useState(false); // State to toggle lyrics display
  const [isPlayerOpen, setIsPlayerOpen] = useState(false); // State to control the music player panel visibility
  const playerRef = useRef(null); // Reference to the music player container

  // Monitor when the audio can start playing
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume; // Ensure the volume is set to the initial state
      audioRef.current.addEventListener('canplay', () => {
        setAudioLoaded(true);
      });
    }
  }, [volume]);

  // Close the player if a click is detected outside its area
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (playerRef.current && !playerRef.current.contains(event.target)) {
        setIsPlayerOpen(false); // Close the player when clicking outside
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Handle YouTube playing state
  useEffect(() => {
    if (audioRef.current) {
      if (isYouTubePlaying) {
        audioRef.current.pause();
        setIsMusicPlaying(false); // Update music playing state here
      } else if (isMusicPlaying && audioLoaded) {
        audioRef.current.play().catch((error) => {
          console.error('Playback error during autoplay:', error);
        });
      }
    }
  }, [isYouTubePlaying, isMusicPlaying, audioLoaded, setIsMusicPlaying]);

  // Button click handler to toggle music
  const toggleMusic = () => {
    if (audioRef.current) {
      if (isMusicPlaying) {
        audioRef.current.pause();
        setIsMusicPlaying(false);
      } else {
        audioRef.current
          .play()
          .then(() => {
            setIsMusicPlaying(true);
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

  // Function to toggle the visibility of the music player panel
  const togglePlayer = () => {
    setIsPlayerOpen((prev) => !prev);
  };

  return (
    <div>
      {/* Button to open/close the music player */}
      {!isPlayerOpen && ( // Hide the open player button when the player is open
        <button className="open-player-button" onClick={togglePlayer}>
          <img src="https://i.imgur.com/FFBLA2C.png" alt="Open Music Player" className="open-player-icon" />
        </button>
      )}

      {/* Music Player Container */}
      <div className={`background-music-container ${isPlayerOpen ? 'open' : 'closed'}`} ref={playerRef}>
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
          <button className="music-button" onClick={toggleMusic}>
            <img
              src={isMusicPlaying ? 'https://i.imgur.com/UKVAXiX.png' : 'https://i.imgur.com/5zebfxX.png'}
              alt={isMusicPlaying ? 'Pause' : 'Play'}
              className="play-pause-icon"
            />
          </button>

          {/* Lyrics Toggle Button */}
          <button className="lyrics-button" onClick={toggleLyrics}>
            <img src="https://i.imgur.com/ezHasCv.png" alt="Lyrics" className="lyrics-icon" />
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
    </div>
  );
};

export default BackgroundMusic;
