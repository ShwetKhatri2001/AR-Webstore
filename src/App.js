import "./App.css";
import "@google/model-viewer/dist/model-viewer.min.js";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ProductList from "./components/ProductList/ProductList";
import About from "./components/About/About";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Feedback from "./components/Feedback/Feedback";
import SignUp from "./components/SignUp/SignUp";
import SignIn from './components/SignIn/Signin'
import WishList from "./components/Wishlist/WishList";
import { useState } from "react";

const App = () => {
  const [wishlist, setWishlist] = useState([]);

  const addToWishlist = (item) => {
    setWishlist([...wishlist, item]);
  };
  const handleRemoveItem = (id) => {
    const updatedWishlist = wishlist.filter((item) => item.id !== id);
    setWishlist(updatedWishlist);
  };
  return (
    <>
    <BrowserRouter>

    <Header />
      <Routes>
        <Route path="/" element={<ProductList addToWishlist={addToWishlist} wishlist={wishlist} removeFromWishlist={handleRemoveItem}/>} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/wishlist" element={<WishList wishlist={wishlist} onRemoveItem={handleRemoveItem}/>}/>
        <Route path="/about" element={<About />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
  </BrowserRouter>

      </>
  );
};

export default App;
