import { useEffect, useState } from "react";
import Card from "../Cards/Card";
import "./home.css";
export default function Home() {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch("https://fakestoreapi.com/products", {
          mode: "cors",
        });
        // if (response.status >= 400) {
        //   throw new Error("server Error");
        // }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    getData();
  }, []);
  console.log(products);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Uh Oh! Something went wrong</p>;
  return (
    <div className="cont">
      {products.map((product) => {
        return (
          <Card
            key={product.id}
            title={product.title}
            image={product.image}
            price={product.price}
          ></Card>
        );
      })}
    </div>
  );
}
