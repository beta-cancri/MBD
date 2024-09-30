import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './PhotoDetailPage.css';

const PhotoDetailPage = () => {
  const { id } = useParams(); // Get the photo ID from the URL
  const [isHorizontal, setIsHorizontal] = useState(false);

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

  // Function to map photoKey to video link
  const getVideoSrc = (photoKey) => {
    switch (photoKey) {
      case 'collagePhoto1':
        return 'https://www.youtube.com/embed/tXllq4abt58';
      case 'collagePhoto2':
        return 'https://www.youtube.com/embed/-G_lyv5FyTY';
      case 'collagePhoto3':
        return 'https://www.youtube.com/embed/uMRGLYjrBxM';
      case 'collagePhoto4':
        return 'https://www.youtube.com/embed/gAodEmAAhLY';
      case 'collagePhoto5':
        return 'https://www.youtube.com/embed/ysgaPTKQQwU';
      case 'collagePhoto6':
        return 'https://www.youtube.com/embed/aN_TFFTCLH8';
      case 'collagePhoto7':
        return 'https://www.youtube.com/embed/sSLTsrQE5-4';
      case 'collagePhoto8':
        return 'https://www.youtube.com/embed/HslTkiJsqzI';
      case 'collagePhoto9':
        return 'https://www.youtube.com/embed/UHcbJz7Xv8M';
      case 'collagePhoto10':
        return 'https://www.youtube.com/embed/5fIMCIXnpGo';
      case 'collagePhoto11':
        return 'https://www.youtube.com/embed/rsg25uv4Og0';
      case 'collagePhoto12':
        return 'https://www.youtube.com/embed/oLkIa8edrF4';
      default:
        return 'https://www.youtube.com/embed/dQw4w9WgXcQ'; // Fallback video
    }
  };

  const handleImageLoad = (e) => {
    const image = e.target;
    const aspectRatio = image.naturalWidth / image.naturalHeight;
    setIsHorizontal(aspectRatio > 1); // Set if image is horizontal based on aspect ratio
  };

  return (
    <div className="photo-detail-container">
      <div className={`photo-detail-image ${isHorizontal ? 'horizontal' : 'vertical'}`}>
        <img src={getPhotoSrc(id)} alt="Detailed view" onLoad={handleImageLoad} />
      </div>
      <div className="photo-detail-text">
        <h1>Placeholder Text for {id}</h1>
        <p>Here is some placeholder text for the selected photo.</p>
        <div className="video-container">
          <iframe
            width="560"
            height="315"
            src={getVideoSrc(id)} // Dynamic video based on photo ID
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default PhotoDetailPage;
