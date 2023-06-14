import "./App.css";
import "@google/model-viewer/dist/model-viewer.min.js";
import { Route,Routes,BrowserRouter } from "react-router-dom";
import ModelViewer from "./components/ModelViewer/ModelViewer";
import Error404 from "./components/ModelViewer/Error404";

const App = () => {

  return(
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<ModelViewer/>} />
    <Route path="*" element={<Error404/>} />
   {/* <ModelViewer /> */}
   </Routes>
</BrowserRouter>
   );
};

export default App;
