export default function totalAmount(list) {
  let amount = 0;
  list.forEach((element) => {
    amount += element.quantity * element.price;
  });
  return amount;
}
