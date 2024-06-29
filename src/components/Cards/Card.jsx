import { useState } from "react";
import styles from "./Card.module.css";
import add from "../../Utility/add";

export default function Card({ title, image, price, cart, setCart }) {
  // const [added, setAdded] = useState(cart.find((obj) => obj.title == title));
  // console.log(added);
  // function add() {
  //   if (added) {
  //     let list = [...cart];
  //     list = list.filter((obj) => obj.title != title);
  //     setCart(list);
  //     setAdded(false);
  //   } else {
  //     // list.push({ title, image, price }); //just for test
  //     setCart([...cart, { title, image, price }]);
  //     setAdded(true);
  //   }
  //   // console.log(list);
  // }
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
