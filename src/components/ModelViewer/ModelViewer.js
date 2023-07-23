import QRCode from "qrcode.react";
import {React} from 'react';
import '../../Products/ProductList.css'
import items from '../../Products/ProductList'
//import {useState} from 'react';

const ModelViewer = () => {

  //const filteredModels = selectedCategory === "All" && selectedColor
  //console.log(filteredModels);

  if (
    navigator.userAgent.match(/iPhone/i ) ||
    navigator.userAgent.match(/webOS/i) ||
    navigator.userAgent.match(/Android/i) ||
    navigator.userAgent.match(/iPad/i) ||
    navigator.userAgent.match(/iPod/i) ||
    navigator.userAgent.match(/BlackBerry/i) ||
    navigator.userAgent.match(/Windows Phone/i)
  ) {
    return (
      <>
        <section className="Mobile1">
        {items.map((item)=>(
          <div key={item.id} className="Mobile">
            <model-viewer
              className= "model_Viewer"
              src={item.src}
              ios-src={item.iosSrc}
              alt="A 3D model of an astronaut"
              ar
              auto-rotate
              camera-controls
              
            >
              <button slot="ar-button" className="arbutton">
                View in your space
              </button>
            </model-viewer>

          </div>
        ))}
        </section>
        

      </>  
      
    );
  } else {
    return (
      <>
        <section className="filterSection1Style">
        <div className="container" >
        {items.map((item) => (
        <div key={item.id} className="ContainerModel">
          <h1>{item.name}</h1>
          <model-viewer
            className="model_Viewer"
            src={item.src}
            ios-src={item.iosSrc}
            alt={`A 3D model of ${item.name}`}
            ar
            auto-rotate
            camera-controls
          ></model-viewer>
          <div className="box1">
            <QRCode
              className="qrCode"
              id={item.id}
              value={window.location.href}
              size={128}
              bgColor={"#ffffff"}
              fgColor={"#000000"}
              level={"H"}
              includeMargin={true}
            />
            <div className="Text">
              <h5 style={{ marginTop: 30 }}>
                Scan the QR code for AR View on mobile
              </h5>
              <h5>URL: {window.location.href}</h5>
            </div>
          </div>
        </div>
      ))}
        </div> 
         
        </section>      
      </>
      
    );
  }
};

export default ModelViewer;
