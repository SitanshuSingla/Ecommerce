import { useContext, useEffect, useState } from "react";
import CartItem from "../../Components/CartItem/CartItem";
import Header from "../../Components/Shared/Header/Header";
import AppContext from "../../Context";
import "./Cart.css";
export default function Cart() {
  // let [cart, setCart] = useState([]);
  // let [total, setTotal] = useState(0);

  let { cartItem } = useContext(AppContext);
  let total = 0;
  total = cartItem.reduce((pre, cur) => {
    return pre + cur.price * cur.qty;
  }, 0);
  // we can also do this
  // useEffect(() => {
  //   total = cartItem.reduce((pre, cur) => {
  //     return pre + cur.price * cur.qty;
  //   }, 0);
  //   setTotal(total);
  // }, [cartItem]);

  // useEffect(() => {

  //   // let cart = localStorage.getItem("cart");
  //   // let ite = JSON.parse(cart);
  //   // setCart(ite);
  //   //totalPrice(ite);

  //   // fetch("Product.json")
  //   //   .then((res) => res.json())
  //   //   .then((res) => {

  //   //     setCart(res);
  //   //   }),
  // }, []);

  // function handleQuantity(t, qty) {
  //   let item = cart;
  //   let ind = item.findIndex((i) => i.title == t.title);

  //   item[ind].qty = qty;

  //   setCart(item);
  //   //totalPrice(item);
  // }

  // // function totalPrice(res) {
  // //   let sum = 0;
  // //   console.log("a");
  // //   for (let i = 0; i < res.length; i++) {
  // //     sum += Number(res[i].price) * Number(res[i].qty);
  // //   }
  // //   setTotal(sum);
  // // }

  // function handleDelete(item) {
  //   let it = cart;
  //   let index = it.findIndex((i) => i.title == item.title);

  //   it.splice(index, 1);
  //   setCart(it);
  //   // setCart([...it]);
  //   totalPrice(it);
  //   localStorage.setItem("cart", JSON.stringify(it));
  // }

  return (
    <div>
      <Header />

      <div className="conta">
        <h4 className="hea">Total - {total}</h4>
        {cartItem.map((cart) => (
          <CartItem
            item={cart}
            // quantity={handleQuantity}
            // delete2={handleDelete}
          />
        ))}
      </div>
    </div>
  );
}
