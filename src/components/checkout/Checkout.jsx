import CheckoutCard from "./CheckoutCard";

export default function Checkout() {
  return (
    <div>
      <div className="items">
        <div>
          <CheckoutCard />
        </div>
        <div className="payment">
          <p>Total Amount : $ 567</p>
          <button>Place Order</button>
        </div>
      </div>
    </div>
  );
}
