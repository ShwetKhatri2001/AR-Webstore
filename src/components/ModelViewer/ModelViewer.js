import React, { useRef, useState, useEffect } from "react";
import LazyLoad from "react-lazyload";
// import "../../Products/ProductList.css";
import QRCode from "qrcode.react";
import Help from "./Help";
const ModelViewer = ({ item, addToWishlist, removeFromWishlist, wishlist }) => {
  const [selectedVariant, setSelectedVariant] = useState('default');
  const [display, setDisplay] = useState(false);
  const [ARSupported, setARSupported] = useState(false);
  const [annotate, setAnnotate] = useState(false);
  const [isInWishlist, setIsInWishlist] = useState(false);
  
  
  let modelViewer1 = {
    backgroundColor: " #ecf0f3",
    overflowX: "hidden",
    posterColor: "#eee",
    width: "100%",
    height: ARSupported ? "85%" : "75%",
    borderRadius: 15,
  };
  
  // Accessing product for full screen start
  const model = useRef();

  // Accessing varient selections element
  const varient = useRef(null);

  console.log(item)

  function toggle() {
    if (!document.fullscreenElement) {
      model.current.requestFullscreen();
    } else if (document.exitFullscreen) document.exitFullscreen();
  }
  // Full screen code end


  const handleAnnotateClick = (annotation) => {
    const { orbit, target, position } = annotation;
    model.current.cameraTarget = position;
    model.current.orbit = target
  }

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

  useEffect(() => {
    // set up event listeners
    const modelViewer = model.current
    modelViewer &&
    modelViewer.addEventListener('load', () => {
      console.log('loaded')
      const availableVariants = modelViewer?.availableVariants;
      console.log(availableVariants)
      for (const variant of availableVariants) {
        const option = document.createElement('option');
        option.value = variant;
        option.textContent = variant;
        varient?.current?.appendChild(option);
      }

      // Adding a default option
      const defaultOption = document.createElement('option');
      defaultOption.value = 'Default';
      defaultOption.textContent = 'Default';
      varient?.current?.appendChild(defaultOption);
    });

    varient?.current?.addEventListener('input', (event) => {
      modelViewer.variantName = event.target.value === 'Default' ? null : event.target.value;
    });
  }, []);
   
  useEffect(() => {
    if(wishlist){
    const isInWishlist = wishlist.some((wishlistItem) => wishlistItem.id === item.id);
    setIsInWishlist(isInWishlist);
    }
  }, [item, wishlist]);
  const handleAddToWishlist = () => {
    if (isInWishlist) {
      removeFromWishlist(item.id);
    } 
    else 
    {
      addToWishlist(item);
    }
  };

  return (
    <div className="model-view">
      <model-viewer
        key={item.id}
        ref={model}
        style={modelViewer1}
        src={item.modelSrc}
        ios-src={item.iOSSrc}
        alt="A 3D model"
        ar
        ar-modes="webxr scene-viewer quick-look"
        camera-controls
        auto-rotate

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
          <>
            <button className="help-btn" onClick={() => setDisplay(true)}>
              ?<span>help</span>
            </button>
          </>
        )}
        
        <button className="annotate-btn" onClick={() => setAnnotate((prevState) => !prevState)}>
          i
        </button>

        {annotate && item.annotations.map((annotate, idx) => (
          <button
            key={idx}
            class="Hotspot"
            slot={annotate.slot}
            data-position={annotate.position}
            data-normal={annotate.normal}
            data-orbit={annotate.orbit}
            data-target={annotate.target}
            data-visibility-attribute="visible"
            onClick={() => handleAnnotateClick(annotate)}
          >
            <div class="HotspotAnnotation">{annotate.title}</div>
          </button>
        ))}
        
        <div class="controls variant_div">
          <select ref={varient} id="variant"></select>
        </div>

      </model-viewer>
        
      <LazyLoad>
        {/* Card content below the model-viewer */}
        <div className="qr-sec">
          {!ARSupported && (
            <QRCode
              id={item.name}
              value={window.location.href}
              size={110}
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
            <button className="add-icon" onClick={handleAddToWishlist}>
              {isInWishlist ? '-' : '+'}
            </button>
          </div>
        </div>
      </LazyLoad>
    </div>
  );
};

export default ModelViewer;
