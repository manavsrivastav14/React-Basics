import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import {
  Home,
  Admin,
  PageNotFound,
  ProductDetail,
  ProductList,
  Contact,
  ContactIn,
  ContactEU,
  ContactUS,
  ContactOther,
} from "../pages/index";

export const AllRoutes = () => {
  const user = true;
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products" element={<ProductList />} />
        <Route path="products/:id" element={<ProductDetail />} />
        <Route path="contact" element={<Contact />}>
          <Route path="in" element={<ContactIn />} />
          <Route path="eu" element={<ContactEU />} />
          <Route path="us" element={<ContactUS />} />
          <Route path="*" element={<ContactOther />} />
        </Route>
        <Route path="admin" element={user ? <Admin /> : <Navigate to="/" />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};
