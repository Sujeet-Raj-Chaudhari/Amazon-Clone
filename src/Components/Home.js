import React from "react";
import "../CSS/Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home_row">
          <Product
            id="12321341"
            title="The lean_startup"
            price={521}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            rating={5}
          />
          <Product
            id="49538094"
            title="Kenwood KMX750RD/ KMix Stand Mixer 1000W (Red)"
            price={39149}
            rating={4}
            image="https://m.media-amazon.com/images/I/716kTJI4jtL._SX355_.jpg"
          />
        </div>

        <div className="home_row">
          <Product
            id="80276289"
            title="boAt Airdopes 141 42H Playtime"
            price={1399}
            rating={4}
            image="https://images-eu.ssl-images-amazon.com/images/I/31GUbeFG3FL._AC_SR400,600_.jpg"
          />
          <Product
            id="8327141"
            title="Apple iPhone 13(128GB)"
            price={72990}
            rating={5}
            image="https://images-eu.ssl-images-amazon.com/images/I/31tyUh1todL._AC_SR400,600_.jpg"
          />
          <Product
            id="2575171"
            title="Sparx Men's Sx0241g Running Shoes"
            price={1444}
            rating={5}
            image="https://m.media-amazon.com/images/I/81paxG9XinL._UX695_.jpg"
          />
        </div>

        <div className="home_row">
          <Product
            id="7671716"
            title="Curved TV"
            price={118000}
            rating={4}
            image="https://m.media-amazon.com/images/I/51+iB9+5HKL._SL1000_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
