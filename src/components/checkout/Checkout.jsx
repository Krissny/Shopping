import { useOutletContext } from "react-router-dom";
import CheckoutCard from "./CheckoutCard";
import styles from "./checkout.module.css";
export default function Checkout() {
  const { cart } = useOutletContext();
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
          <p>Total Amount : $ 567</p>
          <button>Place Order</button>
        </div>
      )}
    </div>
  );
}
