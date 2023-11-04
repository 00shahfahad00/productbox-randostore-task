import React from "react";

const Navbar = () => {
  return (
    <nav>
      <h2 className="nav-left">RandoStore</h2>
      <div className="nav-menu">
        <ul>
          <li>
            <a href="">Shop</a>
          </li>
          <li>
            <a href="">Mens</a>
          </li>
          <li>
            <a href="">Wommens</a>
          </li>
          <li>
            <a href="">Kids</a>
          </li>
        </ul>
      </div>
      <div className="nav-right">
        <button className="btn-2">Login</button>
        <a href="/Cart">
          <img className="cart" src="/data/images/cart_icon.png" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
