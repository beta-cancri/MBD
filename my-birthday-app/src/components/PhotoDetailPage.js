import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './PhotoDetailPage.css';

const PhotoDetailPage = () => {
  const { id } = useParams(); 
  const [isHorizontal, setIsHorizontal] = useState(false);

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

  // Function to map photoKey to video link
  const getVideoSrc = (photoKey) => {
    switch (photoKey) {
      case 'collagePhoto1':
        return '';
      case 'collagePhoto2':
        return 'https://www.youtube.com/embed/kr3aWWc51Q8'; // video here 2
      case 'collagePhoto3':
        return '';
      case 'collagePhoto4':
        return 'https://www.youtube.com/embed/3kR1AJNUxgQ'; // video here 4
      case 'collagePhoto5':
        return '';
      case 'collagePhoto6':
        return '';
      case 'collagePhoto7':
        return 'https://www.youtube.com/embed/sSLTsrQE5-4'; //video here 7
      case 'collagePhoto8':
        return '';
      case 'collagePhoto9':
        return '';
      case 'collagePhoto10':
        return '';
      case 'collagePhoto11':
        return 'https://www.youtube.com/embed/UnqE1DcLkgU'; //video here 11
      case 'collagePhoto12':
        return '';
      default:
        return ''; 
    }
  };

  // Function to map photoKey to title
  const getTitle = (photoKey) => {
    switch (photoKey) {
      case 'collagePhoto1':
        return 'A Beautiful Moment';
      case 'collagePhoto2':
        return 'Memories of a Journey';
      case 'collagePhoto3':
        return 'Sunset Reflections';
      case 'collagePhoto4':
        return 'A Quiet Evening';
      case 'collagePhoto5':
        return 'Love and Laughter';
      case 'collagePhoto6':
        return 'A Day at the Park';
      case 'collagePhoto7':
        return 'Celebration of Life';
      case 'collagePhoto8':
        return 'The City at Night';
      case 'collagePhoto9':
        return 'Exploring Nature';
      case 'collagePhoto10':
        return 'Golden Hour';
      case 'collagePhoto11':
        return 'A New Adventure';
      case 'collagePhoto12':
        return 'Reflections on the Water';
      default:
        return 'Beautiful Memories';
    }
  };

  // Function to map photoKey to description
  const getDescription = (photoKey) => {
    switch (photoKey) {
      case 'collagePhoto1':
        return 'This photo captures a beautiful and joyful moment in life.';
      case 'collagePhoto2':
        return 'A journey full of laughter and unforgettable memories.';
      case 'collagePhoto3':
        return 'A peaceful sunset with reflections on the water.';
      case 'collagePhoto4':
        return 'A serene and quiet evening with the ones you love.';
      case 'collagePhoto5':
        return 'Capturing the essence of love and laughter with friends and family.';
      case 'collagePhoto6':
        return 'A fun day spent in the park surrounded by nature.';
      case 'collagePhoto7':
        return 'Celebrating the most important moments in life with joy.';
      case 'collagePhoto8':
        return 'The city lights up at night as you reflect on the day.';
      case 'collagePhoto9':
        return 'Exploring the beauty of nature and feeling alive.';
      case 'collagePhoto10':
        return 'Golden hour captures the perfect moment in time.';
      case 'collagePhoto11':
        return 'A new adventure begins as you step into the unknown.';
      case 'collagePhoto12':
        return 'Calm reflections on the water, giving a sense of tranquility.';
      default:
        return 'An unforgettable moment captured in time.';
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
        <img src={getPhotoSrc(id)} alt={getTitle(id)} onLoad={handleImageLoad} />
      </div>
      <div className="photo-detail-text">
        <h1>{getTitle(id)}</h1>
        <p>{getDescription(id)}</p> 
        <div className="video-container">
          <iframe
            width="560"
            height="315"
            src={getVideoSrc(id)}
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
