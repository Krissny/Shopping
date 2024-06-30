import { useEffect, useState } from "react";
import Card from "../Cards/Card";
import "./home.css";
import { useOutletContext } from "react-router-dom";
export default function Home() {
  const context = useOutletContext();
  if (context.loading) return <p>Loading...</p>;
  if (context.error) return <p>Uh Oh! Something went wrong</p>;
  return (
    <div className="cont">
      {context.products.map((product) => {
        return (
          <Card
            key={product.id}
            title={product.title}
            image={product.image}
            price={product.price}
            cart={context.cart}
            setCart={context.setCart}
          ></Card>
        );
      })}
    </div>
  );
}
