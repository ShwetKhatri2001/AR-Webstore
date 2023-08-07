import React, { useRef, useState } from 'react';
import '../../Products/ProductList.css';
import items from '../../Products/ProductList';
import QRCode from 'qrcode.react';
import Help from './Help';

const ModelViewer = () => {
  const [display, setDisplay] = useState(false);

  const modelViewerStyle = {
    backgroundColor: '#eee',
    overflowX: 'hidden',
    posterColor: '#eee',
    width: '100%',
    maxWidth: 350,
    height: 250,
    borderRadius: 15,
  };

  const modelViewerStyleMobile = {
    ...modelViewerStyle,
    maxWidth: 250,
    height: 200,
    marginRight: 20,
  };

  const model = useRef();

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      model.current.requestFullscreen();
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  };

  const handleHelpClick = () => {
    setDisplay(!display);
  };

  const renderModelView = (item, isMobile) => (
    <div className="model-view">
      <model-viewer
        ref={model}
        style={isMobile ? modelViewerStyleMobile : modelViewerStyle}
        src={item.src}
        ios-src={item.iosSrc}
        alt="A 3D model of an astronaut"
        ar
        auto-rotate
        camera-controls
      >
        <button className="fullscreen-btn" onClick={toggleFullScreen}>
          &#x26F6;<span>full screen</span>
        </button>

        {display ? (
          <>
            <button className={document.fullscreenElement ? 'close fz' : 'close'} onClick={handleHelpClick}>
              &#10006;
            </button>
            <Help />
          </>
        ) : (
          <button className="help-btn" onClick={handleHelpClick}>
            ?<span>help</span>
          </button>
        )}
      </model-viewer>
      <div className="qr-sec">
        <QRCode
          id="1234"
          value={window.location.href}
          size={isMobile ? 80 : 120}
          bgColor="#ffffff"
          fgColor="#000000"
          level="H"
          includeMargin
        />
        <div>
          <div className="pname">{item.name}</div>
          <div className="rating-sec">
            <div>Rating</div>
            <div>
              <span className="star">&#9733;</span>
              <span className="star">&#9733;</span>
              <span className="star">&#9733;</span>
              <span>&#9733;</span>
              <span>&#9733;</span>
            </div>
          </div>
          <div>Rs. 1000</div>
          <h5 style={{ marginTop: 30 }}>Scan the QR code for AR View on mobile</h5>
        </div>
      </div>
      <div className="add-icon">{isMobile ? '+' : ''}</div>
    </div>
  );

  return (
    <section className="Card">
      {items.map((item) => (
        <React.Fragment key={item.id}>
          {navigator.userAgent.match(/iPhone|webOS|Android|iPad|iPod|BlackBerry|Windows Phone/i) ? (
            renderModelView(item, true)
          ) : (
            renderModelView(item, false)
          )}
        </React.Fragment>
      ))}
    </section>
  );
};

export default ModelViewer;
