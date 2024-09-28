import React, { useState } from 'react';
import './HomePage.css';

const HomePage = () => {
  const [positions, setPositions] = useState({
    collagePhoto1: { top: 50, left: 80 },
    collagePhoto2: { top: 180, left: 300 },
    collagePhoto3: { top: 320, left: 180 },
    collagePhoto4: { top: 80, left: 600 },
    collagePhoto5: { top: 260, left: 800 },
    collagePhoto6: { top: 400, left: 500 },
    collagePhoto7: { top: 550, left: 200 },
    collagePhoto8: { top: 600, left: 700 },
  });

  const handleDragEnd = (e, photoKey) => {
    // Update the position of the image after dragging
    const newPositions = {
      ...positions,
      [photoKey]: {
        top: e.clientY - 100, // Adjust to center the image during drag
        left: e.clientX - 100, // Adjust to center the image during drag
      },
    };
    setPositions(newPositions);

    // Log the new coordinates to the console
    console.log(`${photoKey} position: `, newPositions[photoKey]);
  };

  return (
    <div className="photo-collage">
      {Object.keys(positions).map((photoKey, index) => (
        <div
          key={index}
          className="collage-container"
          style={{
            top: `${positions[photoKey].top}px`,
            left: `${positions[photoKey].left}px`,
            width: '200px',
          }}
          draggable="true"
          onDragEnd={(e) => handleDragEnd(e, photoKey)}
        >
          <img
            src={`https://i.imgur.com/${getPhotoSrc(photoKey)}.png`}
            alt=""
            className="collage-photo"
            style={{ width: '100%' }}
          />
        </div>
      ))}
    </div>
  );
};

// Helper function to get the correct image src
const getPhotoSrc = (photoKey) => {
  switch (photoKey) {
    case 'collagePhoto1':
      return 'SGJkGe6';
    case 'collagePhoto2':
      return 'zI1pl8w';
    case 'collagePhoto3':
      return 'MrqgIhE';
    case 'collagePhoto4':
      return 'CGoIHOO';
    case 'collagePhoto5':
      return 'JBn7UEx';
    case 'collagePhoto6':
      return 'l9Bqnsj';
    case 'collagePhoto7':
      return 'lRBpKg1';
    case 'collagePhoto8':
      return 'ghMhL8y';
    default:
      return '';
  }
};

export default HomePage;
