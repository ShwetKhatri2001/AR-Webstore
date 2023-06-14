import "./App.css";
import "@google/model-viewer/dist/model-viewer.min.js";
import ModelViewer from "./components/ModelViewer/ModelViewer";
import Error404 from "./components/Error404";

const App = () => {
  if(window.location.pathname === "/")
  return <ModelViewer />;
  else return <Error404/>;
};

export default App;
