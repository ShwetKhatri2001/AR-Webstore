import React from "react";
import "./WishList.css";
import {Link} from 'react-router-dom';
const WishList = ({wishlist,onRemoveItem}) => {
  const isEmpty =wishlist.length===0;

  const EmptyCart = () => {
    return (
      <>
        <div className="alert">
          You have no items in your WishList, start adding some!
        </div>
        <Link to="/" className="button go-back">
          Go Back
        </Link>
      </>
    );
  };
  const handleRemoveItem = (id) => {
    onRemoveItem(id);
  };
  const FilledWishList = () => {
    return (
      <div className="wishlist-items">
        {wishlist.map((item) => (
          <div key={item.id} className="wishlist-item">
            <div className="wishlist-details">
              <div className="wishlist-name">{item.name}</div>
              <div className="wishlist-category">Category: {item.category}</div>
              <div className="wishlist-color">Color: {item.color}</div>
            </div>
            <button onClick={() => handleRemoveItem(item.id)} className="remove-btn">
              Remove
            </button>
          </div>
        ))}
      </div>
    );
  };
  return (
    <div className="container">
      <h3 className="cart-title">Your WishList</h3>
      <div className="cart-grid">
        <div className="cart-items-container">
          <div className="cart-paper">
            <h5 className="cart-heading">Added Items</h5>
            <hr className="divider" />
            {isEmpty ? <EmptyCart /> : <FilledWishList />}
          </div>
        </div>
        </div>
      </div>
  );
};

export default WishList;