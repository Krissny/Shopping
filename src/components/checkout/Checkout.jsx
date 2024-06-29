import { useOutletContext } from "react-router-dom";
import CheckoutCard from "./CheckoutCard";
import styles from "./checkout.module.css";
import totalAmount from "../../Utility/totalAmount";
import { useState } from "react";

export default function Checkout() {
  const { cart, setCart } = useOutletContext();

  let amount = totalAmount(cart);

  function placeOrder() {
    alert("Your Order is placed!!\nNo need to pay\nBahut paisa hai");
    setCart([]);
  }
  return (
    <div>
      <div className={styles.items}>
        {cart.map((prod) => {
          return (
            <CheckoutCard
              key={prod.title}
              title={prod.title}
              image={prod.image}
              price={prod.price}
            />
          );
        })}
      </div>
      {cart.length == 0 && (
        <p
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontWeight: "bold",
          }}
        >
          Your Cart is Empty
        </p>
      )}
      {cart.length != 0 && (
        <div className={styles.payment}>
          <p>Total Amount : $ {amount}</p>
          <button onClick={() => placeOrder()}>Place Order</button>
        </div>
      )}
    </div>
  );
}
