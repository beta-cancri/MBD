import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
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
    collagePhoto9: { top: 700, left: 500 },
    collagePhoto10: { top: 750, left: 400 },
    collagePhoto11: { top: 100, left: 950 },
    collagePhoto12: { top: 300, left: 1100 },
  });

  const navigate = useNavigate(); // Initialize navigate

  const handleDragEnd = (e, photoKey) => {
    const newPositions = {
      ...positions,
      [photoKey]: {
        top: e.clientY - 100,
        left: e.clientX - 100,
      },
    };
    setPositions(newPositions);
    console.log(`${photoKey} position: `, newPositions[photoKey]);
  };

  const handleClick = (photoKey) => {
    navigate(`/photo/${photoKey}`);
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
          onClick={() => handleClick(photoKey)} // Navigate when clicked
        >
          <img
            src={getPhotoSrc(photoKey)}
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
      return 'https://i.imgur.com/2dJolYw.jpg';
    case 'collagePhoto2':
      return 'https://i.imgur.com/MMjOFWJ.jpg';
    case 'collagePhoto3':
      return 'https://i.imgur.com/BubUxsR.jpg';
    case 'collagePhoto4':
      return 'https://i.imgur.com/R6v02On.jpg';
    case 'collagePhoto5':
      return 'https://i.imgur.com/sbndgqM.jpg';
    case 'collagePhoto6':
      return 'https://i.imgur.com/aKr1ASB.jpg';
    case 'collagePhoto7':
      return 'https://i.imgur.com/7q0Xthx.jpg';
    case 'collagePhoto8':
      return 'https://i.imgur.com/QUM4g1J.jpg';
    case 'collagePhoto9':
      return 'https://i.imgur.com/FXIej3p.jpg';
    case 'collagePhoto10':
      return 'https://i.imgur.com/T0PPdWx.jpg';
    case 'collagePhoto11':
      return 'https://i.imgur.com/S048lb3.jpg';
    case 'collagePhoto12':
      return 'https://i.imgur.com/DdY8tjW.jpg';
    default:
      return '';
  }
};

export default HomePage;
