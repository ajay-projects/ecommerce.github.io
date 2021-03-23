import React from "react";
import "../css/checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="left">
        <div>
          <h2>Your shopping Basket</h2>
          {basket.length === 0 ? (
            <h3>No product</h3>
          ) : (
            basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))
          )
          }
        </div>
      </div>
      <div className="right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
