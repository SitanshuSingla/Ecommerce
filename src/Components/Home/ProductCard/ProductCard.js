import { startTransition, useContext } from "react";
import Appcontext from "../../../Context";
import { useState } from "react";
import "./ProductCard.css";

export default function ProductCard(props) {
  let { dispatcher } = useContext(Appcontext);
  let [read, setRead] = useState(false);
  function handleaddToCart() {
    dispatcher("Add_item", props.item);

    // let cart = localStorage.getItem("cart");

    // if (!cart) {
    //   let item = [];
    //   item.push(props.item);
    //   localStorage.setItem("cart", JSON.stringify(item));
    // } else {
    //   let item = JSON.parse(cart);
    //   item.push(props.item);
    //   localStorage.setItem("cart", JSON.stringify(item));
    // }
    // props.notify();
  }
  function handleRead() {
    setRead(true);
  }
  function handleLess() {
    setRead(false);
  }

  let star = [];
  let a = Math.floor(props.item.rating.rate);

  for (let i = 0; i < a; i++) {
    star[i] = 1;
  }

  return (
    <div className="card">
      <h5 className="card-title">{props.item.title}</h5>
      <img
        src={props.item.image}
        className="card-img-top card1"
        alt="..."
      ></img>
      <div className="card-body">
        <p className="card-text">{props.item.cartegory}</p>
        <p className="card-text">
          {!read
            ? props.item.description.substring(0, 200)
            : props.item.description}
          {!read && (
            <button className="read" onClick={handleRead}>
              ...Read More
            </button>
          )}
        </p>
        {read && (
          <button className="read" onClick={handleLess}>
            ...Read Less
          </button>
        )}

        <p className="star">
          {star.map(() => (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-star-fill"
              viewBox="0 0 16 16"
            >
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
            </svg>
          ))}{" "}
          &nbsp;&nbsp;
          <span>{props.item.rating.count}</span>
        </p>

        <p className="card-text">{props.item.price}</p>
        <button onClick={handleaddToCart} className="btn btn-success">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
