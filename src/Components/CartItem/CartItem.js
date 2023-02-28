import { useContext, useEffect, useState } from "react";
import AppContext from "../../Context";
import "./CartItem.css";
export default function CartItem(props) {
  let [quantity, setQuantity] = useState(props.item.qty);
  // let [price, setPrice] = useState(props.item.price);

  let { dispatcher } = useContext(AppContext);

  //on delete price is not updating as we havent set price agai after delete

  // useEffect(() => setPrice(props.item.price * quantity), [props]);

  let price = props.item.price * props.item.qty;

  function handleChange(value) {
    props.item.qty = value;
    setQuantity(value);
    dispatcher("Update_item", props.item);
    //   if (value > 0) {
    //     price = Number(props.item.price) * value;
    //     setQuantity(value);
    //     setPrice(price);
    //   } else {
    //     price = props.item.price;
    //     setQuantity(0);
    //     setPrice(price);
    //   }

    // props.quantity(props.item, value);
  }

  function delete1() {
    dispatcher("Delete_Item", props.item);
  }

  return (
    <div className="con">
      <img
        src={props.item.image}
        className="card-img-top card1 im"
        alt="..."
      ></img>

      {props.item.title}

      <div className="q">
        {price}
        <button className="btn btn-danger" onClick={delete1}>
          Delete
        </button>
        &nbsp;
        <button
          onClick={() => {
            handleChange(props.item.qty == 1 ? 1 : props.item.qty - 1);
          }}
          class="btn btn-info"
        >
          -
        </button>
        {quantity}
        <button
          onClick={() => {
            handleChange(props.item.qty + 1);
          }}
          class="btn btn-info"
        >
          +
        </button>
      </div>
    </div>
  );
}
