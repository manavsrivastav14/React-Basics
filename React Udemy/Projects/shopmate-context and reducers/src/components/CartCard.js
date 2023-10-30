import "./CartCard.css";
import { useReducer } from "react";
export const CartCard = ({ product }) => {
  const { name, price, image } = product;
  const { removeFromCart } = useReducer();
  return (
    <div className="cartCard">
      <img src={image} alt={name} />
      <p className="productName">{name}</p>
      <p className="productPrice">${price}</p>
      <button
        onClick={() => {
          console.log(removeFromCart);
          removeFromCart(product);
        }}
      >
        Remove
      </button>
    </div>
  );
};
