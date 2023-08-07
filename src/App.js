import "./App.css";
import "@google/model-viewer/dist/model-viewer.min.js";
import ModelViewer from "./components/ModelViewer/ModelViewer";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
    <div className="app-container">
      <Header/>
    </div>
      <Routes>
        <Route path="/" element={<ModelViewer/>} />
        <Route path="*" element={<ErrorPage/>} />
      </Routes>
    </BrowserRouter>
  )
};

export default App;