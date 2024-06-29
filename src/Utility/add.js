export default function add(cart, setCart, title, image, price, buy = false) {
  if (buy) {
    if (!cart.find((obj) => obj.title == title)) {
      setCart([...cart, { title, image, price, quantity: 1 }]);
    } else {
      return;
    }
  } else if (cart.find((obj) => obj.title == title)) {
    let list = [...cart];
    list = list.filter((obj) => obj.title != title);
    setCart(list);
  } else {
    setCart([...cart, { title, image, price, quantity: 1 }]);
  }
}
