import React from "react";
import "./App.css";
import "@google/model-viewer/dist/model-viewer.min.js";
import ModelViewer from "./components/ModelViewer/ModelViewer";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div id="root">
      <div className="main">
        <div className="model_container">
          <ModelViewer />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
