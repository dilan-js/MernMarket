import React from "react";
import Product from "./components/Product";
import data from "./data";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

import ProductScreen from "./screens/ProductScreen";
import HomeScreen from "./screens/HomeScreen";
import CartScreen from "./screens/CartScreen";

function App() {
  return (
    <Router>
      <div className="grid-container">
        <header className="row">
          <div>
            <a className="brand" href="/">
              MernMarket
            </a>
          </div>
          <div>
            <a href="/cart">Cart</a>
            <a href="/signin">Sign In</a>
          </div>
        </header>
        <main>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/cart/:id?" component={CartScreen} />
          <Route path="/product/:id" component={ProductScreen} />
        </main>
        <footer className="row center">All rights reserved</footer>
      </div>
    </Router>
  );
}

export default App;
