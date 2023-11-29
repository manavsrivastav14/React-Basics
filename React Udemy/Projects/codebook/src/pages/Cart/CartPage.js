import { CartEmpty } from "./componets/CartEmpty";
import { CartList } from "./componets/CartList";
import { useCart } from "../../context";

export const CartPage = () => {
  const { cartList } = useCart();
  return <main>{cartList.length ? <CartList /> : <CartEmpty />}</main>;
};
