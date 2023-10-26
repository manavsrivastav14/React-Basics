import { ProductCard } from "../components/ProductCard";
import { useTitle } from "../hooks/useTitle";
export const Home = () => {
  useTitle("Home");
  const products = [
    {
      id: 1,
      name: "Sony Wh-Ch150 Bluetooth Wireless",
      price: 149,
      image: "/assets/images/1001.png",
    },
    {
      id: 2,
      name: "boAt Rockerz 450",
      price: 49,
      image: "/assets/images/1002.png",
    },
    {
      id: 3,
      name: "JBL Tune 760c",
      price: 179,
      image: "/assets/images/1003.png",
    },
    {
      id: 4,
      name: "Apple Airpods",
      price: 59,
      image: "/assets/images/1004.png",
    },
    {
      id: 5,
      name: "One plus buds Z",
      price: 129,
      image: "/assets/images/1005.png",
    },
    {
      id: 6,
      name: "Zebronics bluetooth earphone",
      price: 29,
      image: "/assets/images/1006.png",
    },
  ];
  return (
    <main>
      <section className="products">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </main>
  );
};
