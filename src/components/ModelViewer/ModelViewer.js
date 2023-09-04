import React, { useRef, useState, useEffect } from "react";
// import "../../Products/ProductList.css";
import QRCode from "qrcode.react";
import Help from "./Help";

const ModelViewer = ({ item }) => {
  const [display, setDisplay] = useState(false);
  const [ARSupported, setARSupported] = useState(false);

  // Accessing product for full screen start
  const model = useRef();

  function toggle() {
    if (!document.fullscreenElement) {
      model.current.requestFullscreen();
    } else if (document.exitFullscreen) document.exitFullscreen();
  }
  // Full screen code end

  useEffect(() => {
    if (
      navigator.userAgent.match(/iPhone/i) ||
      navigator.userAgent.match(/webOS/i) ||
      navigator.userAgent.match(/Android/i) ||
      navigator.userAgent.match(/iPad/i) ||
      navigator.userAgent.match(/iPod/i) ||
      navigator.userAgent.match(/BlackBerry/i) ||
      navigator.userAgent.match(/Windows Phone/i)
    ) {
      setARSupported(true);
    }
  }, []);

  const modelViewer1 = {
    backgroundColor: "#eee",
    overflowX: "hidden",
    posterColor: "#eee",
    width: "100%",
    height: ARSupported ? "85%" : "75%",
    borderRadius: 15,
  };

  return (
    <div className="model-view">
      <model-viewer
        ref={model}
        style={modelViewer1}
        src={item.modelSrc}
        ios-src={item.iOSSrc}
        alt="A 3D model"
        ar
        auto-rotate
        camera-controls
      >
        {ARSupported && (
          <button slot="ar-button" className="arbutton">
            View in your space
          </button>
        )}
        <button className="fullscreen-btn" onClick={toggle}>
          &#x26F6;<span>full screen</span>
        </button>

        {display ? (
          <>
            <button
              className={document.fullscreenElement ? "close fz" : "close"}
              onClick={() => setDisplay(false)}
            >
              &#10006;
            </button>
            <Help />
          </>
        ) : (
          <button className="help-btn" onClick={() => setDisplay(true)}>
            ?<span>help</span>
          </button>
        )}
      </model-viewer>

      {/* Card content below the model-viewer */}
      <div className="qr-sec">
        {!ARSupported && (
          <QRCode
            id={item.name}
            value={window.location.href}
            size={130}
            bgColor="#ffffff"
            fgColor="#000000"
            level="H"
            includeMargin
          />
        )}

        <div className="product-details">
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
            {!ARSupported && <h5>Scan the QR code for AR View on mobile</h5>}
          </div>
          <div className="add-icon">+</div>
        </div>
      </div>
    </div>
  );
};

export default ModelViewer;
