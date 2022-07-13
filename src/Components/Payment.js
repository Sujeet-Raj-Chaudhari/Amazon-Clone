import React from "react";
import { useStateValue } from "../ContextAPI/StateProvider";
import "../CSS/Payment.css";
import CheckoutProduct from "./CheckoutProduct.js";
import { Link } from "react-router-dom";
function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="payment">
      <div className="payment_container">
        <h1>Checkout {<Link to="/checkout">{basket?.length} items</Link>}</h1>
        {/* Payment section -delivery address */}
        <div className="payment_section">
          <div className="payment_title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment_address">
            <p>{user?.email}</p>
            <p></p>
            <p></p>
          </div>
        </div>

        {/* Payment Section-Review Items */}
        <div className="payment_section">
          <div className="payment_title">
            <h3>Review Items And Delivery</h3>
          </div>
          <div className="payment_items">
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>

        {/*Payment section - Payment Method */}
        <div className="payment_section">
          <div className="payment_title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment_detail">{/* Stripe magic will go */}</div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
