import { useOutletContext } from "react-router-dom";
import styles from "./CheckoutCard.module.css";
import add from "../../Utility/add";
import { useState } from "react";

export default function CheckoutCard({ title, image, price }) {
  const { cart, setCart } = useOutletContext();
  const [quantity, setquantity] = useState(1);
  return (
    <div className={styles.cont}>
      <div className={styles.product}>
        <img
          src={image}
          alt=""
          style={{
            maxWidth: "250px",
          }}
        />
        <div className={styles.details}>
          <p
            style={{
              fontWeight: "bold",
              fontSize: "1.2rem",
            }}
          >
            {title}
          </p>
          <p
            style={{
              fontSize: "1.5rem",
              marginTop: "0",
            }}
          >
            {`$ ${price}`}
          </p>
        </div>
      </div>
      <div className={styles.buttons}>
        <div className={styles.quantity}>
          <button className={styles.quantBtn}>-</button>
          <p className={styles.quant}>{quantity}</p>
          <button className={styles.quantBtn}>+</button>
        </div>
        <button
          className={styles.remove}
          onClick={() => add(cart, setCart, title, image, price)}
        >
          Remove
        </button>
      </div>
    </div>
  );
}
