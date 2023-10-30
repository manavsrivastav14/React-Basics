import { useDispatch } from "react-redux";
import { add, remove } from "../store/cartSlice";
import { useSelector } from "react-redux";
import "./ProductCard.css";
import { useEffect, useState } from "react";

export const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const [isInCart, setIsInCart] = useState(false);
  const cartItemProducts = useSelector((state) => state.cartState.cartList);
  useEffect(() => {
    const isItemInCart = cartItemProducts.find(
      (element) => element.id === product.id
    );
    setIsInCart(isItemInCart);
  }, [cartItemProducts, product]);
  const { name, price, image } = product;

  return (
    <div className="productCard">
      <img src={image} alt={name} />
      <p className="name">{name}</p>
      <div className="action">
        <p>${price}</p>
        {isInCart ? (
          <button className="remove" onClick={() => dispatch(remove(product))}>
            Remove
          </button>
        ) : (
          <button className="addToCart" onClick={() => dispatch(add(product))}>
            Add To Cart
          </button>
        )}
      </div>
    </div>
  );
};
