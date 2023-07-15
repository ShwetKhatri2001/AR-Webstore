import React, { useRef, useState } from "react";

import sheenchair from "../../assets/models/sheenchair.glb";
import ioschair from "../../assets/models/sheenchair.usdz";
import QRCode from "qrcode.react";
import Help from "./Help";


const ModelViewer = () => {
  const [display, setDisplay] = useState(false);
  const model = useRef();

  function toggle() {
    if (!document.fullscreenElement) {
      model.current.requestFullscreen();
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }

  const modelViewerStyle = {
    backgroundColor: "#eee",
    overflowX: "hidden",
    posterColor: "#eee",
    width: 400,
    height: 300,
    borderRadius: 10,
  };

  return (
    <div className="model-viewer-container">
      <model-viewer
        ref={model}
        style={modelViewerStyle}
        src={sheenchair}
        ios-src={ioschair}
        alt="A 3D model of an astronaut"
        ar
        auto-rotate
        camera-controls
      >
        <button slot="ar-button" className="arbutton">
          View in your space
        </button>

        <button className="fullscreen-btn" onClick={() => toggle()}>
          &#x26F6;<span>full screen</span>
        </button>

        {display ? (
          <>
            <button
              className={document.fullscreenElement ? "close fz  " : "close"}
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

      <div style={{ display: "flex" }}>
        <QRCode
          id="1234"
          value={window.location.href}
          size={128}
          bgColor={"#ffffff"}
          fgColor={"#000000"}
          level={"H"}
          includeMargin={true}
        />
        <div>
          <h5 style={{ marginTop: 30 }}>
            Scan the QR code for AR View on mobile
          </h5>
          <h5>URL : {window.location.href}</h5>
        </div>
      </div>
    </div>
  );
};

export default ModelViewer;
