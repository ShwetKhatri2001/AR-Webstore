import React from "react";
import sheenchair from "../../assets/models/sheenchair.glb";
import ioschair from "../../assets/models/sheenchair.usdz";
import QRCode from "qrcode.react";
import "./ModelViewer.css";

const ModelViewer = () => {
  return (
    <div className="product-card">
      <model-viewer
        className="model-viewer"
        src={sheenchair}
        ios-src={ioschair}
        alt="A 3D model of a chair"
        ar
        auto-rotate
        camera-controls
      >
        <button slot="ar-button" className="ar-button">
          View in your space
        </button>
      </model-viewer>
      <div className="qr-code-container">
        <div className="qr-code">
          <QRCode
            id="1234"
            value={window.location.href}
            size={128}
            bgColor={"#ffffff"}
            fgColor={"#000000"}
            level={"H"}
            includeMargin={true}
          />
        </div>
        <div>
          <h5 className="qr-code-info">Scan the QR code for AR View on mobile</h5>
          <h5 className="url-info">URL: {window.location.href}</h5>
        </div>
      </div>
    </div>
  );
};

export default ModelViewer;
