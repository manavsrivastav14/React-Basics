import { useEffect, useState, useCallback } from "react";
import { useFetch } from "../hooks/useFetch";

export default function ProductList() {
  // const [products, setProducts] = useState([]);
  const [url, setURL] = useState("http://localhost:8000/products");
  const { data: products, loading, error } = useFetch(url);
  console.log("Products: ", products);

  //  ----------------------------------------------------------------------------------------
  // //NOTE:--- useCallback is only used when function is used in useEffect.
  // const fetchProducts = useCallback(async () => {
  //   const response = await fetch(url);
  //   const data = await response.json();
  //   setProducts(data);
  // }, [url]);

  // //NOTE: -----We can have multiple useEffects as well.
  // useEffect(() => {
  //   fetchProducts();
  //   // fetch(url)
  //   //   .then((response) => response.json())
  //   //   .then((data) => setProducts(data));
  // }, [fetchProducts]);
  // ----------------------------------------------------------------------------------------

  return (
    <>
      <section>
        <div className="filter">
          <button
            onClick={() => {
              setURL("http://localhost:8000/products");
            }}
          >
            All
          </button>
          <button
            onClick={() => {
              setURL("http://localhost:8000/products?in_stock=true");
            }}
          >
            In stock
          </button>
        </div>
        {loading && <p>Loading Products...</p>}
        {error && <p>{error}</p>}
        {products &&
          products.map((product) => {
            return (
              <div className="card" key={product.id}>
                <p className="id">{product.id}</p>
                <p className="name">{product.name}</p>
                <p className="info">
                  <span>{product.price}</span>
                  <span
                    className={product.in_stock ? "instock" : "unavailable"}
                  >
                    {product.in_stock ? "In Stock" : "Unavailable"}
                  </span>
                </p>
              </div>
            );
          })}
      </section>
    </>
  );
}
