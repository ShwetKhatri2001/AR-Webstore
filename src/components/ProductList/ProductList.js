import React from "react";
import productItems from "../../data/ProductItems";
import ModelViewer from "../ModelViewer/ModelViewer";
import "./ProductList.css";
import LazyLoad from "react-lazyload";

const ProductList = ({ addToWishlist,wishlist,removeFromWishlist }) => {
  return (
    <section className="list-view">
      {productItems.map((item) => (
        <LazyLoad key={item.id}>
          <ModelViewer item={item} addToWishlist={addToWishlist} wishlist={wishlist} removeFromWishlist={removeFromWishlist} />
        </LazyLoad>
      ))}
    </section>
  );
};

export default ProductList;
