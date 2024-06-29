export default function add(cart, setCart, title, image, price) {
  if (cart.find((obj) => obj.title == title)) {
    let list = [...cart];
    list = list.filter((obj) => obj.title != title);
    setCart(list);
  } else {
    setCart([...cart, { title, image, price }]);
  }
}
