import styles from "./navbar.module.css";
import Cart from "../../assets/cart-outline.svg";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";

export default function Navbar() {
  return (
    <div className={styles.cont}>
      <div className="logo">
        <Link to="/">
          <img
            style={{
              width: "130px",
            }}
            src={Logo}
            alt=""
          />
        </Link>
      </div>
      <div className={styles.cart}>
        <Link
          to="checkout"
          style={{
            textDecoration: "none",
          }}
        >
          <img
            style={{
              width: "35px",
            }}
            src={Cart}
            alt=""
          />
          <span className={styles.count}>0</span>
        </Link>
      </div>
    </div>
  );
}
