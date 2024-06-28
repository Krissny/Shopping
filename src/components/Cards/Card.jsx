import styles from "./Card.module.css";

export default function Card({ title, image, price }) {
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
        <button className={styles.buy}>Buy</button>
        <button className={styles.add}>Add to the Cart</button>
      </div>
    </div>
  );
}
