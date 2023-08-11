import "./App.css";
import "@google/model-viewer/dist/model-viewer.min.js";
import ModelViewer from "./components/ModelViewer/ModelViewer";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer.js";
import Header from "./components/Header/Header"
import Feedback from "./components/Feedback/Feedback"

const App = () => {
  return(      
  <BrowserRouter>
  <div className="app-container">
    <Header/>
  </div>
  <Routes>
          <Route
            path="/"
            element={
                <ModelViewer />
            }
          />
          <Route
            path="*"
            element={<ErrorPage/>}
          />
          <Route path="/feedback" element={<Feedback/>} />
          </Routes>
          <Footer/>
  </BrowserRouter>
  )
};

export default App;
