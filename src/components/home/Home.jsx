import { useEffect, useState } from "react";
import Card from "../Cards/Card";
import styles from "./home.module.css";
import { useOutletContext } from "react-router-dom";
import github from "../../assets/github.svg";
export default function Home() {
  const context = useOutletContext();
  if (context.loading) return <p className={styles.loading}>Loading...</p>;
  if (context.error)
    return <p className={styles.loading}>Uh Oh! Something went wrong</p>;
  return (
    <>
      <div className={styles.cont}>
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
      <footer className={styles.footer}>
        <p>&copy; SmartShopping.com 2024 | Kriss ny</p>
        <a href="https://github.com/Krissny" target="_blank">
          <img src={github} alt="github" />
        </a>
      </footer>
    </>
  );
}
