import styles from "./navbar.module.css";
import Cart from "../../assets/cart-outline.svg";

import Logo from "../../assets/logo.png";
export default function Navbar() {
  return (
    <div className={styles.cont}>
      <div className="logo">
        <a href="#">
          <img
            style={{
              width: "130px",
            }}
            src={Logo}
            alt=""
          />
        </a>
      </div>
      <div className={styles.cart}>
        <a
          style={{
            textDecoration: "none",
          }}
          href="#"
        >
          <img
            style={{
              width: "35px",
            }}
            src={Cart}
            alt=""
          />
          <span className={styles.count}>0</span>
        </a>
      </div>
    </div>
  );
}
