import { WiDayCloudy } from "react-icons/wi";
import styles from "./CheckoutCard.module.css";

export default function CheckoutCard({ title, image, price }) {
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
          <p className={styles.quant}>1</p>
          <button className={styles.quantBtn}>+</button>
        </div>
        <button className={styles.remove}>Remove</button>
      </div>
    </div>
  );
}
