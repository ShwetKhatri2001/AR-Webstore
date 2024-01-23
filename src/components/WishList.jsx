import { useWishlistState } from "../state";
import React, { useState } from "react";
import "../assets/css/wishlistbar.css"; // Make sure to create a CSS file for styling
import productItems from "../data/ProductItems";
import ModelViewer from "./ModelViewer/ModelViewer";
import LazyLoad from "react-lazyload";

const WishList = () => {
  const { wishProducts, addWishProduct } = useWishlistState();

  const [isWishlistOpen, setWishlistOpen] = useState(false);

  const toggleWishlist = () => {
    setWishlistOpen(!isWishlistOpen);
  };

  return (
    <div>
      <button className="wishlist-toggle" onClick={toggleWishlist}>
        Wishlist{" "}
        <img
          src={`/icons/${wishProducts.length > 0 ? "wished.png" : "wish.png"}`}
        />
      </button>
      <div className={`wishlist-bar ${isWishlistOpen ? "open" : ""}`}>
        <button className="wishlist-toggle-close" onClick={toggleWishlist}>
          Close X
        </button>
        <div className="wishlist-content">
          {wishProducts.map((item) => (
            <LazyLoad>
              <ModelViewer item={productItems.find((obj) => obj.id == item)} />
            </LazyLoad>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WishList;
