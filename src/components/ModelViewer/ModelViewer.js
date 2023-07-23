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
    maxWidth: 350,
    height: 250,
    borderRadius: 15,
  };
  const modelViewer1 = {
    backgroundColor: "#eee",
    overflowX: "hidden",
    posterColor: "#eee",
    maxWidth: 250,
    height: 200,
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
      <div class="model-view">
      <model-viewer
      ref={model}
        style={modelViewer1}
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
        
        <button className="fullscreen-btn fullscreen-mob" onClick={()=>toggle()}>&#x26F6;<span>full screen</span></button>
          
        {
          display?<><button className= {document.fullscreenElement?'close fz  ':'close'} onClick={()=>setDisplay(false)} >&#10006;</button>
          <Help /></>:<button className= "help-btn help-mob"  onClick={()=>setDisplay(true)} >?<span>help</span></button>
        }
      </model-viewer>
      <div className="qr-sec">
          <QRCode
            id="1234"
            value={window.location.href}
            size={80}
            bgColor={"#ffffff"}z
            fgColor={"#000000"}
            level={"H"}
            includeMargin={true}
          />
          <div>
            <div class="pname">Product_Name</div>
            <div class="rating-sec">
            <div>Rating</div>
              <div>
              <span class="star">&#9733;</span>
              <span class="star">&#9733;</span>
              <span class="star">&#9733;</span>
              <span>&#9733;</span>
              <span>&#9733;</span>
              </div>
            </div>
            <div>Rs. 1000</div>
            <div style={{ marginTop: 20 , fontWeight:"bold" }}>
              Scan the QR code for AR View on mobile
            </div>
          </div>
        </div>
        <div class="add-icon add-icon-mob">
          +
        </div>
      </div>
      
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
            <div class="pname">Product_Name</div>
            <div class="rating-sec">
            <div>Rating</div>
              <div>
              <span class="star">&#9733;</span>
              <span class="star">&#9733;</span>
              <span class="star">&#9733;</span>
              <span>&#9733;</span>
              <span>&#9733;</span>
              </div>
            </div>
            <div>Rs. 1000</div>
            <h5 style={{ marginTop: 30 }}>
              Scan the QR code for AR View on mobile
            </h5>
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
