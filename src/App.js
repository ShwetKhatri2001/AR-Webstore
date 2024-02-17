import "./App.css";
import "@google/model-viewer/dist/model-viewer.min.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductList from "./components/ProductList/ProductList";
import About from "./components/About/About";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Feedback from "./components/Feedback/Feedback";
import Test from "./test";

const App = () => {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/about" element={<About />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/ar-demo" element={<Test />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
};

export default App;
