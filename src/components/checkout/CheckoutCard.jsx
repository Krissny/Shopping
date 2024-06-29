import { WiDayCloudy } from "react-icons/wi";
import styles from "./CheckoutCard.module.css";

export default function CheckoutCard() {
  return (
    <div className={styles.cont}>
      <div className={styles.product}>
        <img
          src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone15prohero-202309_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=1693086369818"
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
            Product
          </p>
          <p
            style={{
              fontSize: "1.5rem",
              marginTop: "0",
            }}
          >
            Price
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
