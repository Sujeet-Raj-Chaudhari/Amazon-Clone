import React, { useEffect } from "react";
import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./Components/Checkout";
import Login from "./Components/Login";
import { auth } from "./firebase";
import { useStateValue } from "./ContextAPI/StateProvider";
import Payment from "./Components/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Components/Orders";

const promise = loadStripe(
  "pk_test_51LKzQYSFsiX9j4tcDH3EhzTeItzctR7eGXeVfk1bSkXJbaGh6MwdnOYBEA7uINnpgQGAoJIGlQjiUgH5EZB34K3z0032qtvKNQ"
);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    //will only run once when thge component loads...

    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //the user just logged uin / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //the user is logged out

        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    //BEM

    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/login"
            element={
              <>
                <Login />
              </>
            }
          ></Route>
          <Route
            path="/orders"
            element={
              <>
                <Header />
                <Orders />
              </>
            }
          ></Route>
          <Route
            path="/checkout"
            element={
              <div>
                <Header />
                <Checkout />
              </div>
            }
          ></Route>
          <Route
            path="/payment"
            element={
              <>
                <Header />
                <Elements stripe={promise}>
                  <Payment />
                </Elements>
              </>
            }
          ></Route>
          <Route
            path="/"
            element={
              <div>
                <Header />
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
