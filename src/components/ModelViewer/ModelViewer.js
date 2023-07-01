import sheenchair from "../../assets/models/sheenchair.glb";
import ioschair from "../../assets/models/sheenchair.usdz";
import QRCode from "qrcode.react";
import Help from "./Help";
import { useState } from "react";
const ModelViewer = () => {
  const [display,setDisplay]=useState(false);
  const modelViewer = {
    backgroundColor: "#eee",
    overflowX: "hidden",
    posterColor: "#eee",
    width: 400,
    height: 300,
    borderRadius: 10,
  };

  if (
    navigator.userAgent.match(/iPhone/i) ||
    navigator.userAgent.match(/webOS/i) ||
    navigator.userAgent.match(/Android/i) ||
    navigator.userAgent.match(/iPad/i) ||
    navigator.userAgent.match(/iPod/i) ||
    navigator.userAgent.match(/BlackBerry/i) ||
    navigator.userAgent.match(/Windows Phone/i)
  ) {
    return (
      <model-viewer
        style={modelViewer}
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
        
        {
          display?<><button className='close' onClick={()=>setDisplay(false)} >&#10006;</button>
          <Help /></>:<button className="help-btn" onClick={()=>setDisplay(true)} >?<span>help</span></button>
        }
      </model-viewer>
    );
  } else {
    return (
      <div style={{ margin: 0 }}>
        <model-viewer
          style={modelViewer}
          src={sheenchair}
          ios-src={ioschair}
          alt="A 3D model of an astronaut"
          ar
          auto-rotate
          camera-controls
        >

        
        {
          display?<><button className='close' onClick={()=>setDisplay(false)} >&#10006;</button>
          <Help /></>:<button className="help-btn" onClick={()=>setDisplay(true)} >?<span>help</span></button>
        }
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
  }
};

export default ModelViewer;
