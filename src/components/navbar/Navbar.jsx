import styles from "./navbar.module.css";
import Cart from "../../assets/cart-outline.svg";
import { Link, Outlet } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";

export default function Navbar() {
  const [products, setProducts] = useState(null);
  const [cart, setCart] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch("https://fakestoreapi.com/products", {
          mode: "cors",
        });
        // if (response.status >= 400) {
        //   throw new Error("server Error");
        // }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    getData();
  }, []);
  // console.log(products);
  return (
    <div>
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
            <span className={styles.count}>{cart.length}</span>
          </Link>
        </div>
      </div>

      <Outlet
        context={{ products, setProducts, cart, setCart, loading, error }}
      />
    </div>
  );
}
