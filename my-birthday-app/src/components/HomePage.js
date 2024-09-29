import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 300);
  }, []);

  const handleClick = (photoKey) => {
    navigate(`/photo/${photoKey}`);
  };

  const positions = [
    { key: 'collagePhoto1', top: 116, left: 620, width: '85px' },
    { key: 'collagePhoto2', top: 300, left: 210, width: '300px' },    
    { key: 'collagePhoto3', top: 148, left: 1630, width: '165px' },
    { key: 'collagePhoto4', top: 750, left: 250, width: '250px' },
    { key: 'collagePhoto5', top: 560, left: 1200, width: '245px' },
    { key: 'collagePhoto6', top: 350, left: 500, width: '420px' },
    { key: 'collagePhoto7', top: 116, left: 470, width: '122px' },
    { key: 'collagePhoto8', top: 680, left: 800, width: '440px' },
    { key: 'collagePhoto9', top: 610, left: 450, width: '350px' },
    { key: 'collagePhoto10', top: 340, left: 850, width: '210px' },
    { key: 'collagePhoto11', top: 110, left: 1254, width: '385px' },
    { key: 'collagePhoto12', top: 350, left: 1436, width: '300px' },
  ];

  return (
    <div className="photo-collage">
      {positions.map((position, index) => (
        <div
          key={index}
          className={`collage-container collage-${index + 1} ${isLoaded ? 'in-place' : 'off-screen'}`} 
          style={{
            top: `${position.top}px`,
            left: `${position.left}px`,
            width: position.width, // Different sizes for each photo container
          }}
          onClick={() => handleClick(position.key)}
        >
          <img
            src={getPhotoSrc(position.key)}
            alt=""
            className="collage-photo"
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
