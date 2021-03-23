import React, { useEffect } from "react";
import "../css/checkoutProduct.css";
import { useStateValue } from "./StateProvider";
import {deleteData} from "../Components/Product";
function CheckoutProduct({ id, image, title, price, rating, hideButton }) {
  const [{ basket }, dispatch] = useStateValue();
  
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  useEffect(() => {
    localStorage.removeItem(deleteData);
  }, [removeFromBasket]);
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct_image" src={image} />

      <div className="info">
        <p className="title">{title}</p>
        <p className="price">
          <small>Rs.</small>
          <strong>{price}</strong>
        </p>
        <div className="rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
        {!hideButton && (
          <button onClick={removeFromBasket} className="btn btn-primary">
            Remove from Basket
          </button>
        )}
      </div>
    </div>
  );
}

export default CheckoutProduct;
