import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./Components/Checkout";

function App() {
  return (
    //BEM

    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route
            path="/login"
            element={
              <div>
                <h1>login</h1>
              </div>
            }
          ></Route>
          <Route
            path="/checkout"
            element={
              <div>
                <Checkout />
              </div>
            }
          ></Route>
          <Route
            path="/"
            element={
              <div>
                <Home />
              </div>
            }
          ></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
