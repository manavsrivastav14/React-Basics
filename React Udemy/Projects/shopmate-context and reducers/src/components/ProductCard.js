import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import "./ProductCard.css";

export const ProductCard = ({ product }) => {
  const { name, price, image } = product;
  const [isInCart, setIsInCart] = useState(false);
  const { addToCart, cartList, removeFromCart } = useCart();

  useEffect(() => {
    const productIsInCart = cartList.find((item) => item.id === product.id);
    if (productIsInCart) {
      setIsInCart(true);
    } else {
      setIsInCart(false);
    }
  }, [product, cartList]);

  return (
    <div className="productCard">
      <img src={image} alt={name} />
      <p className="name">{name}</p>
      <div className="action">
        <p>${price}</p>
        {isInCart ? (
          <button
            className="remove"
            onClick={() => {
              console.log(removeFromCart);
              removeFromCart(product);
            }}
          >
            Remove
          </button>
        ) : (
          <button
            className="addToCart"
            onClick={() => {
              addToCart(product);
            }}
          >
            Add To Cart
          </button>
        )}
      </div>
    </div>
  );
};
