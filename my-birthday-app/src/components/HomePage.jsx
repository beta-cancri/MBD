import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
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
    { key: 'collagePhoto1', top: '12%', left: '33.2%', width: '3.5%' },
    { key: 'collagePhoto2', top: '30%', left: '15%', width: '15%' },
    { key: 'collagePhoto3', top: '5%', left: '86%', width: '12%' },
    { key: 'collagePhoto4', top: '60%', left: '5%', width: '20%' },
    { key: 'collagePhoto5', top: '58.2%', left: '63%', width: '13%' },
    { key: 'collagePhoto6', top: '32%', left: '30%', width: '20%' },
    { key: 'collagePhoto7', top: '12%', left: '25.3%', width: '6.5%' },
    { key: 'collagePhoto8', top: '70%', left: '40%', width: '25%' },
    { key: 'collagePhoto9', top: '65%', left: '25%', width: '22%' },
    { key: 'collagePhoto10', top: '28.2%', left: '44.2%', width: '12%' },
    { key: 'collagePhoto11', top: '10%', left: '67.2%', width: '20%' },
    { key: 'collagePhoto12', top: '39%', left: '77.2%', width: '18%' },
  ];

  return (
    <motion.div
      className="photo-collage"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
    >
      {positions.map((position, index) => (
        <div
          key={index}
          className={`collage-container collage-${index + 1} ${isLoaded ? 'in-place' : 'off-screen'}`}
          style={{
            top: position.top,
            left: position.left,
            width: position.width,
            position: 'absolute'  // Ensure this stays positioned properly
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
    </motion.div>
  );
};

// Helper function to get the correct image src
const getPhotoSrc = (photoKey) => {
  switch (photoKey) {
    case 'collagePhoto1':
      return 'https://i.imgur.com/2dJolYw.jpg';
    case 'collagePhoto2':
      return 'https://i.imgur.com/wNH1WRC.jpg';
    case 'collagePhoto3':
      return 'https://i.imgur.com/BubUxsR.jpg';
    case 'collagePhoto4':
      return 'https://i.imgur.com/YYa7kvG.jpg';
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
