import sheenchair from "../../assets/models/sheenchair.glb";
import ioschair from "../../assets/models/sheenchair.usdz";
import QRCode from "qrcode.react";
import Help from "./Help";
import { useRef, useState } from "react";
const ModelViewer = () => {
  const [display,setDisplay]=useState(false);

    //accessing product for full screen start 
  const model= useRef()
  function toggle() {
    
    if(!document.fullscreenElement){
        model.current.requestFullscreen();
    }
    else if(document.exitFullscreen)document.exitFullscreen();
  }
        //  full screen code end

  const modelViewer = {
    backgroundColor: "#eee",
    overflowX: "hidden",
    posterColor: "#eee",
    width: "100%",
    maxWidth: 400,
    height: 300,
    borderRadius: 15,
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
      ref={model}
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
        
        <button className="fullscreen-btn" onClick={()=>toggle()}>&#x26F6;<span>full screen</span></button>
          
        {
          display?<><button className= {document.fullscreenElement?'close fz  ':'close'} onClick={()=>setDisplay(false)} >&#10006;</button>
          <Help /></>:<button className= "help-btn"  onClick={()=>setDisplay(true)} >?<span>help</span></button>
        }
      </model-viewer>
    );
  } else {
    return (
      <div class="model-view" style={{ margin: 0 }} >
        <model-viewer 
        ref={model}
          style={modelViewer}
          src={sheenchair}
          ios-src={ioschair}
          alt="A 3D model of an astronaut"
          ar
          auto-rotate
          camera-controls
        >
          <button className= "fullscreen-btn" onClick={()=>toggle()}>&#x26F6;<span>full screen</span></button>
        
        {
          display?<><button className={document.fullscreenElement?'close fz  ':'close'} onClick={()=>setDisplay(false)} >&#10006;</button>
          <Help /></>:<button className="help-btn" onClick={()=>setDisplay(true)} >?<span>help</span></button>
        }
        </model-viewer>
        <div className="qr-sec">
          <QRCode
            id="1234"
            value={window.location.href}
            size={120}
            bgColor={"#ffffff"}z
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
        <div class="add-icon">
          +
        </div>  
      </div>
    );
  }
};

export default ModelViewer;
