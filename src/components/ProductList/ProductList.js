import React from "react";
import productItems from "../../data/ProductItems";
import ModelViewer from "../ModelViewer/ModelViewer";
import "./ProductList.css";
import LazyLoad from "react-lazyload";
const ProductList = () => {
  return (

    <section className="list-view">

      {productItems.map((item, idx) => (
        <LazyLoad key={idx}>
          <ModelViewer item={item} />
        </LazyLoad>
      ))}
    </section>
  );
};

export default ProductList;
