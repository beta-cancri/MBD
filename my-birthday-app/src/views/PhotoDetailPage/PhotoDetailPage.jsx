import React, { useRef, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './PhotoDetailPage.css';

const PhotoDetailPage = ({ onVideoPlay, onVideoPause, setIsYouTubePlaying }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isHorizontal, setIsHorizontal] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const popupRef = useRef(null);
  const iframeRef = useRef(null);

  const getPhotoSrc = (photoKey) => {
    switch (photoKey) {
      case 'collagePhoto1':
        return process.env.REACT_APP_PHOTO_URL_COLLAGE_PHOTO1;
      case 'collagePhoto2':
        return process.env.REACT_APP_PHOTO_URL_COLLAGE_PHOTO2;
      case 'collagePhoto3':
        return process.env.REACT_APP_PHOTO_URL_COLLAGE_PHOTO3;
      case 'collagePhoto4':
        return process.env.REACT_APP_PHOTO_URL_COLLAGE_PHOTO4;
      case 'collagePhoto5':
        return process.env.REACT_APP_PHOTO_URL_COLLAGE_PHOTO5;
      case 'collagePhoto6':
        return process.env.REACT_APP_PHOTO_URL_COLLAGE_PHOTO6;
      case 'collagePhoto7':
        return process.env.REACT_APP_PHOTO_URL_COLLAGE_PHOTO7;
      case 'collagePhoto8':
        return process.env.REACT_APP_PHOTO_URL_COLLAGE_PHOTO8;
      case 'collagePhoto9':
        return process.env.REACT_APP_PHOTO_URL_COLLAGE_PHOTO9;
      case 'collagePhoto10':
        return process.env.REACT_APP_PHOTO_URL_COLLAGE_PHOTO10;
      case 'collagePhoto11':
        return process.env.REACT_APP_PHOTO_URL_COLLAGE_PHOTO11;
      case 'collagePhoto12':
        return process.env.REACT_APP_PHOTO_URL_COLLAGE_PHOTO12;
      default:
        return '';
    }
  };

  const getVideoSrc = (photoKey) => {
    const base = 'https://www.youtube.com/embed/';
    const videoIds = {
      collagePhoto2: process.env.REACT_APP_VIDEO_ID_COLLAGE_PHOTO2,
      collagePhoto4: process.env.REACT_APP_VIDEO_ID_COLLAGE_PHOTO4,
      collagePhoto7: process.env.REACT_APP_VIDEO_ID_COLLAGE_PHOTO7,
      collagePhoto11: process.env.REACT_APP_VIDEO_ID_COLLAGE_PHOTO11,
    };

    // Return the full URL only if the photoKey has a valid video ID
    if (videoIds[photoKey]) {
      return `${base}${videoIds[photoKey]}?enablejsapi=1&origin=${window.location.origin}`;
    }

    return null; // Return null if there is no video ID for the photoKey
  };

  const getTitle = (photoKey) => {
    switch (photoKey) {
      case 'collagePhoto1':
        return 'Primeros año';
      case 'collagePhoto2':
        return 'Memorias de un viaje';
      case 'collagePhoto3':
        return '¡Una nueva aventura!';
      case 'collagePhoto4':
        return 'Mi mammá Mishelle';
      case 'collagePhoto5':
        return 'Primer año de vida';
      case 'collagePhoto6':
        return 'Mi pequeña';
      case 'collagePhoto7':
        return 'Ultimo recuerdo del cual tengo mucha añoranza';
      case 'collagePhoto8':
        return 'Paseo enboladas';
      case 'collagePhoto9':
        return '¡La tía Gato es la mejor!';
      case 'collagePhoto10':
        return 'Viaje a Cuzco';
      case 'collagePhoto11':
        return 'De compras con la Omoni';
      case 'collagePhoto12':
        return 'Fotos inesperadas';
      default:
        return 'Beautiful Memories';
    }
  };

  const getDescription = (photoKey) => {
    switch (photoKey) {
      case 'collagePhoto1':
        return 'Recordando en el momento en que todo comenzo, me llena de felicidad haberte encontrado.';
      case 'collagePhoto2':
        return 'Un recuerdo de una gran amiga que a pesar de la distancia aun seguimos en contacto.';
      case 'collagePhoto3':
        return 'Una de las experiencias mas grandes que has tenido hasta la actualidad, pero no serán las últimas.';
      case 'collagePhoto4':
        return 'Un recuerdo muy querido de uno de los amores de mi vida.';
      case 'collagePhoto5':
        return 'Con la ayuda de tu hermana y varios familiares hicimos tu primera fiesta de cumpleaños y fue muy emocionante por tu primer año de vida. En la foto cuando se te menciono para la foto tu levantaste tu mano como diciendo ¡Yo misma soy!';
      case 'collagePhoto6':
        return 'Colada y haciendo lo imposible para poder ir contigo, logre ir a tu primer paseo al parque de las leyendas, modelito desde pequeña.';
      case 'collagePhoto7':
        return '¡Por último, recuerda que siempre que eres la persona más importante de mi vida, que usted es única y maravillosa!.';
      case 'collagePhoto8':
        return 'Un paseo en una de las actividades de Renzo, muy divertido pasarlo en familia.';
      case 'collagePhoto9':
        return 'Recuerdo de Renzo con la tía Gato en su pequeño pero hermoso trayecto de vida.';
      case 'collagePhoto10':
        return 'Un bello recuerdo de un viaje inolvidable que la pasamos contigo despues de tanto tiempo sin verte.';
      case 'collagePhoto11':
        return 'Haciendo compras y gastando la quincena.';
      case 'collagePhoto12':
        return 'Esos momentos en los cuales a pesar de todo nos mantuvimos juntos.';
      default:
        return 'An unforgettable moment captured in time.';
    }
  };

  const handleImageLoad = (e) => {
    const image = e.target;
    const aspectRatio = image.naturalWidth / image.naturalHeight;
    setIsHorizontal(aspectRatio > 1);
  };

  const togglePopup = () => {
    setShowPopup((prev) => !prev);
  };

  const goHome = () => {
    navigate('/home');
  };

  const navigateToPhoto = (photoKey) => {
    document.querySelector('.popup-content').classList.add('animate-popup-out'); // Trigger fade-out
    setTimeout(() => {
      setShowPopup(false);
      navigate(`/photo/${photoKey}`);
    }, 300); // Wait for the animation to complete
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        document.querySelector('.popup-content').classList.add('animate-popup-out');
        setTimeout(() => setShowPopup(false), 300); // Fade-out before closing
      }
    };
    if (showPopup) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showPopup]);

  useEffect(() => {
    const handleYouTubeEvent = (event) => {
      const iframe = iframeRef.current;
      if (iframe && event.origin === 'https://www.youtube.com') {
        const data = JSON.parse(event.data);
        if (data?.event === 'infoDelivery') {
          const playerState = data.info?.playerState;
          if (playerState === 1) {
            setIsYouTubePlaying(true);  // Update YouTube playing state
            onVideoPlay();
          } else if (playerState === 2) {
            setIsYouTubePlaying(false);  // Update YouTube playing state
            onVideoPause();
          }
        }
      }
    };

    window.addEventListener('message', handleYouTubeEvent);
    return () => {
      window.removeEventListener('message', handleYouTubeEvent);
    };
  }, [id, setIsYouTubePlaying, onVideoPlay, onVideoPause]);

  const photoList = [
    'collagePhoto1',
    'collagePhoto2',
    'collagePhoto3',
    'collagePhoto4',
    'collagePhoto5',
    'collagePhoto6',
    'collagePhoto7',
    'collagePhoto8',
    'collagePhoto9',
    'collagePhoto10',
    'collagePhoto11',
    'collagePhoto12',
  ];

  return (
    <div className="photo-detail-container">
      <div className={`photo-detail-image ${isHorizontal ? 'horizontal' : 'vertical'}`}>
        <img src={getPhotoSrc(id)} alt={getTitle(id)} onLoad={handleImageLoad} />
      </div>
      <div className="photo-detail-text">
        <h1>{getTitle(id)}</h1>
        <p>{getDescription(id)}</p>
        {getVideoSrc(id) && (
          <div className="video-container">
            <iframe
              ref={iframeRef}
              width="560"
              height="315"
              src={getVideoSrc(id)}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        )}


        <div className="button-container">
          <img
            src="https://i.imgur.com/pRhHFEN.png"
            alt="View Gallery"
            className="button-icon open-gallery"
            onClick={togglePopup}
          />
          <img
            src="https://i.imgur.com/x0irdQ3.png"
            alt="Go Back"
            className="button-icon go-back"
            onClick={goHome}
          />
        </div>
      </div>

      {showPopup && (
        <div className="popup">
          <div className="popup-content animate-popup" ref={popupRef}>
            <img
              src="https://i.imgur.com/x0irdQ3.png"
              alt="Close"
              className="close-popup button-icon"
              onClick={togglePopup}
            />
            <ul>
              {photoList.map((photo, index) => (
                <li key={index}>
                  <button onClick={() => navigateToPhoto(photo)}>
                    <img
                      src={getPhotoSrc(photo)}
                      alt={`Thumbnail for ${photo}`}
                      className="thumbnail"
                    />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default PhotoDetailPage;
