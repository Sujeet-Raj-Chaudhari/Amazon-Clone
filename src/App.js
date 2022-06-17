import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    //BEM

    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Header />
                <Home />
              </div>
            }
          ></Route>
          <Route
            path="/checkout"
            element={
              <div>
                <Header />
                <h1>This is Checkout page</h1>
              </div>
            }
          ></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
