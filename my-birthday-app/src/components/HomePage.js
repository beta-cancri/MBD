import React, { useState, useRef } from 'react';
import './HomePage.css';

const HomePage = () => {
  const [positions, setPositions] = useState({
    collagePhoto1: { top: 50, left: 80, width: 200 },
    collagePhoto2: { top: 180, left: 300, width: 200 },
    collagePhoto3: { top: 320, left: 180, width: 200 },
    collagePhoto4: { top: 80, left: 600, width: 200 },
    collagePhoto5: { top: 260, left: 800, width: 200 },
    collagePhoto6: { top: 400, left: 500, width: 200 },
    collagePhoto7: { top: 550, left: 200, width: 200 },
    collagePhoto8: { top: 600, left: 700, width: 200 },
  });
  const resizingRef = useRef(null); // To store the currently resizing image
  const initialMousePos = useRef({ x: 0, y: 0 }); // To track mouse position when resizing starts

  // Handle dragging end (for moving images)
  const handleDragEnd = (e, photoKey) => {
    const newPositions = {
      ...positions,
      [photoKey]: {
        ...positions[photoKey],
        top: e.clientY - positions[photoKey].width / 2,
        left: e.clientX - positions[photoKey].width / 2,
      },
    };
    setPositions(newPositions);
  };

  // Handle mouse down on the resize handle
  const handleMouseDown = (e, photoKey) => {
    resizingRef.current = photoKey;
    initialMousePos.current = { x: e.clientX, y: e.clientY };
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  // Handle mouse movement while resizing
  const handleMouseMove = (e) => {
    if (resizingRef.current) {
      const photoKey = resizingRef.current;
      const dx = e.clientX - initialMousePos.current.x; // Calculate distance moved horizontally
      const newWidth = Math.max(100, positions[photoKey].width + dx); // Minimum width is 100px

      const newPositions = {
        ...positions,
        [photoKey]: {
          ...positions[photoKey],
          width: newWidth,
        },
      };
      setPositions(newPositions);
      initialMousePos.current = { x: e.clientX, y: e.clientY }; // Update mouse position
    }
  };

  // Handle mouse up (end resizing)
  const handleMouseUp = () => {
    resizingRef.current = null;
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
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
            width: `${positions[photoKey].width}px`,
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
          <div
            className="resize-handle"
            onMouseDown={(e) => handleMouseDown(e, photoKey)} // Resize when clicking and dragging
          />
        </div>
      ))}
    </div>
  );
};

// Helper to get the correct image src
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
