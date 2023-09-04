import React from "react";
import productItems from "../../data/ProductItems";
import ModelViewer from "../ModelViewer/ModelViewer";
import "./ProductList.css";

const ProductList = () => {
  return (
    <section className="list-view">
      {productItems.map((item) => (
        <ModelViewer item={item} />
      ))}
    </section>
  );
};

export default ProductList;
