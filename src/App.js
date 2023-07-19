import "./App.css";
import "@google/model-viewer/dist/model-viewer.min.js";
import ModelViewer from "./components/ModelViewer/ModelViewer";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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
          </Routes>
  </BrowserRouter>
  )
};

export default App;
