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

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    //will only run once when thge component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE user is >>> ", authUser);

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
                <Payment />
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
