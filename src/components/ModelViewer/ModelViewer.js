
import {React} from 'react';
import '../../Products/ProductList.css'
import items from '../../Products/ProductList'
import QRCode from "qrcode.react";
import Help from "./Help";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";

const ModelViewer = () => {
  const [display, setDisplay] = useState(false);

  // Accessing product for full screen start
  const model = useRef();

  function toggle() {
    if (!document.fullscreenElement) {
      model.current.requestFullscreen();
    } else if (document.exitFullscreen) document.exitFullscreen();
  }
  // Full screen code end

  const modelViewer1 = {
    backgroundColor: '#eee',
    overflowX: 'hidden',
    posterColor: '#eee',
    width: '100%',
    maxWidth: 250,
    height: 200,
    borderRadius: 15,
    marginRight: 20,
  };


  return (
    <>
    <section className="Card">
      {items.map((item) => (
        <div className="model-view" key={item.id}>
          <model-viewer
            ref={model}
            style={modelViewer1}
            src={item.src}
            ios-src={item.iosSrc}
            alt="A 3D model"
            ar
            auto-rotate
            camera-controls
          >
            <button className="fullscreen-btn" onClick={toggle}>
              &#x26F6;<span>full screen</span>
            </button>

            {display ? (
              <>
                <button
                  className={
                    document.fullscreenElement ? 'close fz' : 'close'
                  }
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
            <QRCode
              id="1234"
              value={window.location.href}
              size={120}
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
              <h5 style={{ marginTop: 30 }}>
                Scan the QR code for AR View on mobile
              </h5>
            </div>

            <div class="add-icon add-icon-mob">
              +
            </div>
            </div>
          </>
        ))}
        <button style={{marginTop:"20px", outline:"none"}}>
        <Link to="/feedback">Feedback</Link>
      </button>
      </>

    );
  } else {
    return (
      <>

        <section className="Card">
          {items.map((item)=>(
            <div class="model-view" >
              <model-viewer 
                ref={item}
                style={modelViewer}
                src={item.src}
                ios-src={item.iosSrc}
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
                  <div class="pname">{item.name}</div>
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
          ))}
              <button style={{marginTop:"20px", outline:"none"}}>
            <Link to="/feedback">Feedback</Link>
          </button>
        </section>
      </>    

    );
  }
};

export default ModelViewer;
