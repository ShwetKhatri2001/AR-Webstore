import QRCode from "qrcode.react";
import {React} from 'react';
import '../../Products/ProductList.css'
import items from '../../Products/ProductList'
import {useState} from 'react';

const ModelViewer = () => {
  

  const modelViewer = {
    backgroundColor: "#eee",
    overflowX: "hidden",
    posterColor: "#eee",
    width: 300,
    height: 300,
    borderRadius: 10,
    margin: 70,
  };
  
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedColor, setselectedColor] = useState("");
  //const [ItemList, setItemList] = useState();
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleColorChange = (event)=>{
    setselectedColor(event.target.value);
  }

  const clearFilter = () => {
    setSelectedCategory("All");
    setselectedColor("");
  };
  const filteredModels = items.filter(item => (selectedCategory === "All" || item.category === selectedCategory) &&
  (selectedColor === "" || item.color === selectedColor));

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
        <section className="SectionStyle">
        
        <div>
          <label htmlFor="category">Category:</label>
          <select 
            name="category" 
            id="category"
            value={selectedCategory}
            onChange={handleCategoryChange}
          >
            <option value="">All</option>
            <option value="Furniture">Furniture</option>
            <option value="Art">Art</option>
            <option value="Vehicle">Vehicle</option>
          </select>
        </div>
        <div>
          <label htmlFor="color">Color:</label>
              <select
                name="color"
                id="color"
                value={selectedColor}
                onChange={handleColorChange}
              >
                <option value="">All</option>
                <option value="Blue">Blue</option>
                <option value="Red">Red</option>
                <option value="Orange">Orange</option>
                <option value="Brown">Brown</option>
                <option value="Multicolor">Multicolor</option>
                
              </select>    
        </div>
        <div><button onClick={clearFilter}>Clear Filter</button></div>
        </section>
        <section className="Mobile1">
        {filteredModels.map((item)=>(
          <div key={item.id} className="Mobile">
            <model-viewer
              style={modelViewer}
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
        <nav className="navbarStyle">
          <h1>AR-Webstore</h1>
          <div>
            <span><button>Sign In</button></span>
            <span><button>Cart</button></span>
          </div>
        </nav>
        <div style={{display:"flex"}}>
        <section className="filterSectionStyle">
        <h3>Filter Options</h3>
        <div>
          <label htmlFor="category">Category:</label>
          <select 
            name="category" 
            id="category"
            value={selectedCategory}
            onChange={handleCategoryChange}
          >
            <option value="">All</option>
            <option value="Furniture">Furniture</option>
            <option value="Art">Art</option>
            <option value="Vehicle">Vehicle</option>
          </select>
        </div>
        <div>
          <label htmlFor="color">Color:</label>
              <select
                name="color"
                id="color"
                value={selectedColor}
                onChange={handleColorChange}
              >
                <option value="">All</option>
                <option value="Blue">Blue</option>
                <option value="Red">Red</option>
                <option value="Orange">Orange</option>
                <option value="Brown">Brown</option>
                <option value="Multicolor">Multicolor</option>
                
              </select>    
        </div>
        <div><button onClick={clearFilter}>Clear Filter</button></div>
        </section>
        <section className="filterSection1Style">
        <div className="container" >
        {filteredModels.map((item) => (
        <div key={item.id} className="ContainerModel">
          <h1>{item.name}</h1>
          <model-viewer
            style={modelViewer}
            src={item.src}
            ios-src={item.iosSrc}
            alt={`A 3D model of ${item.name}`}
            ar
            auto-rotate
            camera-controls
          ></model-viewer>
          <div style={{ display: "flex" }}>
            <QRCode
              id={item.id}
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
              <h5>URL: {window.location.href}</h5>
            </div>
          </div>
        </div>
      ))}
        </div> 
         
        </section>
        </div>        
      </>
      
    );
  }
};

export default ModelViewer;
