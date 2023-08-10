import "./App.css";
import "@google/model-viewer/dist/model-viewer.min.js";
import ModelViewer from "./components/ModelViewer/ModelViewer";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Feedback from "./components/Feedback/Feedback";

const App = () => {
  return(      
  <BrowserRouter>
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
            Feedback
          <Route path="/feedback" element={<Feedback/>} />
          </Routes>
  </BrowserRouter>
  )
};

export default App;
