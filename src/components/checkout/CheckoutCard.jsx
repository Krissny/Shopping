import { useOutletContext } from "react-router-dom";
import styles from "./CheckoutCard.module.css";
import add from "../../Utility/add";
import { useState } from "react";

export default function CheckoutCard({ title, image, price }) {
  const { cart, setCart } = useOutletContext();

  let index = cart.findIndex((prod) => prod.title == title);
  function increase() {
    let list = [...cart];
    // console.log(list);
    // console.log(index);
    list[index].quantity += 1;
    setCart(list);
  }
  function decrease() {
    if (cart[index].quantity == 1) {
      warning();
      return;
    }
    let list = [...cart];
    list[index].quantity -= 1;
    setCart(list);
  }
  function handleChange(e) {
    let val = e.target.value;
    if (val <= 0 && val != "") {
      warning();
      return;
    }
    let list = [...cart];
    list[index].quantity = val;
    setCart(list);
  }
  function warning() {
    alert("Quantity cannot be less than 1");
    let list = [...cart];
    list[index].quantity = 1;
    setCart(list);
    return;
  }
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
          <button className={styles.quantBtn} onClick={() => decrease()}>
            -
          </button>
          <input
            type="text"
            value={cart[index].quantity}
            className={styles.quant}
            onChange={(e) => handleChange(e)}
          />
          <button className={styles.quantBtn} onClick={() => increase()}>
            +
          </button>
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
