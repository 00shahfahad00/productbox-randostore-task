import React from "react";
import "./style.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./Pages/Home";
import CartPage from "./Pages/Cart";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/cart" element={<CartPage />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
