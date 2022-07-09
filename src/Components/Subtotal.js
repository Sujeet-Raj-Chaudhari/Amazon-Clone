import React from "react";
import CurrencyFormat from "react-currency-format";
import "../CSS/Subtotal.css";
import { useStateValue } from "../ContextAPI/StateProvider";
import { getBasketTotal } from "../ContextAPI/reducer";

function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              {/*Part of the Homework */}
              SubTotal({basket.length} items):
              <strong>{value}</strong>
            </p>
            <small className="subtotal_gift">
              <input type="checkbox" />
              This Order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)} //part of the homework
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <button>Proceed To Checkout</button>
    </div>
  );
}

export default Subtotal;
