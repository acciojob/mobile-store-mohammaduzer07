
import React from "react";
import './../styles/App.css';
import { BrowserRouter as Router,Route, Routes } from "react-router-dom";
import Home from "./Home";
import Admin from "./Admin";
import ProductDetails from "./ProductDetails";

const App = () => {
  return (
    <div>
      {/* Do not remove the main div */}

      <Router>
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </Router>


    </div>
  )
}

export default App
