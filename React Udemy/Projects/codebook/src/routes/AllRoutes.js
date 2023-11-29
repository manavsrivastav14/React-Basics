import { Routes, Route } from "react-router-dom";
import {
  HomePage,
  ProductsList,
  ProductDetail,
  Login,
  Register,
  CartPage,
} from "../pages";
export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="products" element={<ProductsList />}></Route>
        <Route path="products/:id" element={<ProductDetail />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="register" element={<Register />}></Route>
        <Route path="cart" element={<CartPage />}></Route>
      </Routes>
    </>
  );
};
