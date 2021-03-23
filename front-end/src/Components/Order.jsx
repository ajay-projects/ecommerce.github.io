import React from "react";
import "../css/order.css"
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import { useHistory } from "react-router-dom";
function Order() {
  const history=useHistory();
  const [{ basket }, dispatch] = useStateValue();
  return (
    <>
    <div className="order">
      <div className="address">
        <h3>Delivery Address:</h3>
        <p>Contentstack pvt ltd.</p>
        <p>Chandansar Road, Virar</p>
        <p>Pin:401305</p>
      </div>
      <div className="itemDelivery">
          <h3>Review items and delivery:</h3>
        <div className="items">
          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
              hideButton
            />
          ))}
        </div>
      </div>
    </div>
    <h1 className="text-center">Thank you for shopping with us</h1>
  </>);
}

export default Order;
