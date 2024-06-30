import { useState } from "react";
import styles from "./Card.module.css";
import add from "../../Utility/add";
import { Link } from "react-router-dom";

export default function Card({ title, image, price, cart, setCart }) {
  return (
    <div className={styles.card}>
      <img className={styles.CardImg} src={image} alt="" />
      <p
        style={{
          fontWeight: "bold",
        }}
      >
        {title}
      </p>
      <p
        style={{
          fontSize: "1.5rem",
          marginTop: "0",
        }}
      >{`$ ${price}`}</p>
      <div className={styles.btnCont}>
        <Link
          onClick={() => add(cart, setCart, title, image, price, true)}
          className={styles.buy}
          to="/checkout"
        >
          Buy
        </Link>
        <button
          className={styles.add}
          onClick={() => add(cart, setCart, title, image, price)}
        >
          {!cart.find((obj) => obj.title == title)
            ? "Add to the Cart"
            : "Remove from the Cart"}
        </button>
      </div>
    </div>
  );
}
