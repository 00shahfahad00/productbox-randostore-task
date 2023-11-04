import React from "react";
import Navbar from "../Components/Navbar";

const Cart = () => {
  return (
    <>
      <Navbar />
      <div className="cart-container">
        <div className="cartitem-format-main">
          <p>Products</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <hr />
        <div>
          <div className="cartitem-format">
            <img src="http://localhost:4000/img/slippers.jpg" />
            <p>Slippers</p>
            <p>$82</p>
            <button>2</button>
            <p>$184</p>
            <p>x</p>
          </div>
          <hr />
          <div className="cartitem-down">
            <div className="cartitem-total">
              <h1>Cart Total</h1>
              <div>
                <div className="cartitem-total-item">
                  <p>Subtotal</p>
                  <p>$184</p>
                </div>
                <hr />
                <div className="cartitem-total-item">
                  <p>Shipping Fee</p>
                  <p>Free</p>
                </div>
                <hr />
                <div className="cartitem-total-item">
                  <h3>Total</h3>
                  <h3>$184</h3>
                </div>
              </div>
              <button>PROCEED TO CHECKOUT</button>
            </div>
            <div className="cartitem-promocode">
              <p>if you have a promocode , Enter it here</p>
              <div className="promobox">
                <input type="text" placeholder="Promocode" />
                <button>Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
