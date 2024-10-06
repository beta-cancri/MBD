import React, { useState, useRef, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './PhotoDetailPage.css';

const PhotoDetailPage = ({ onVideoPlay, onVideoPause }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isHorizontal, setIsHorizontal] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const popupRef = useRef(null);
  const iframeRef = useRef(null);

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

  const getVideoSrc = (photoKey) => {
    switch (photoKey) {
      case 'collagePhoto2':
        return 'https://www.youtube.com/embed/kr3aWWc51Q8?enablejsapi=1';
      case 'collagePhoto4':
        return 'https://www.youtube.com/embed/3kR1AJNUxgQ?enablejsapi=1';
      case 'collagePhoto7':
        return 'https://www.youtube.com/embed/QmcMb7Afx5Y?enablejsapi=1';
      case 'collagePhoto11':
        return 'https://www.youtube.com/embed/UnqE1DcLkgU?enablejsapi=1';
      default:
        return '';
    }
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
    console.log('Toggle popup button clicked');
    setShowPopup((prev) => !prev);
  };

  const goHome = () => {
    console.log('Go home button clicked');
    navigate('/home');
  };

  const navigateToPhoto = (photoKey) => {
    console.log(`Navigate to photo: ${photoKey}`);
    document.querySelector('.popup-content').classList.add('animate-popup-out'); // Trigger fade-out
    setTimeout(() => {
      setShowPopup(false);
      navigate(`/photo/${photoKey}`);
    }, 300); // Wait for the animation to complete
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        console.log('Clicked outside of popup');
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
      console.log('YouTube event received:', event);
      const videoUrl = getVideoSrc(id);
      if (event.origin === 'https://www.youtube.com' && iframeRef.current) {
        const data = JSON.parse(event.data);
        if (data?.event === 'infoDelivery' && videoUrl.includes(data.id)) {
          if (data.info.playerState === 1) {
            console.log('YouTube video is playing');
            onVideoPlay();
          } else if (data.info.playerState === 2) {
            console.log('YouTube video is paused');
            onVideoPause();
          }
        }
      }
    };
    window.addEventListener('message', handleYouTubeEvent);
    return () => {
      window.removeEventListener('message', handleYouTubeEvent);
    };
  }, [id, onVideoPlay, onVideoPause]);

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