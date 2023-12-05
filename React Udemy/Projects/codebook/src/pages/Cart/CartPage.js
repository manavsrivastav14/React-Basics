import { CartEmpty } from "./componets/CartEmpty";
import { CartList } from "./componets/CartList";
import { useCart } from "../../context";
import { useTitle } from "../../hooks/useTitle";

export const CartPage = () => {
  const { cartList } = useCart();
  useTitle(`Cart (${cartList.length})`);
  return <main>{cartList.length ? <CartList /> : <CartEmpty />}</main>;
};
