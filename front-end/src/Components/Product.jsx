import React, { useEffect } from "react";
import "../css/product.css";
import uuid from 'react-uuid';
import { useStateValue } from "./StateProvider";
export   const deleteData = JSON.parse(localStorage.getItem("basket-items"+uuid()));
function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating
      },
    }
    );
   
  };


  return (
    <div className="product">
      <div className="info">
        <p>{title}</p>
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
      </div>

      <img src={image} alt="" />

      <button onClick={addToBasket} className="btn btn-primary">
        Add to Basket
      </button>
    </div>
  );
}

export default Product;
