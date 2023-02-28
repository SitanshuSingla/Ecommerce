import Header from "../../Components/Shared/Header/Header";
import Foorter from "../../Components/Shared/Foorter/footer";
import ProductCard from "../../Components/Home/ProductCard/ProductCard";
import { useEffect, useState } from "react";
import { useActionData } from "react-router-dom";
import { CircularProgress } from "@mui/material";

export default function Home() {
  let [products, setProducts] = useState([]);
  let [count, setCount] = useState(0);

  // function notify() {
  //   let cart = localStorage.getItem("cart");
  //   let a = JSON.parse(cart);
  //   setCount(a.length);
  // }

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((res) => {
        res.forEach((o) => {
          o.qty = 1;
        });
        setProducts(res);
        // notify();
      });
  }, []);

  return (
    <div>
      <Header count={count} />y
      <div className="row">
        {products.map((products) => (
          <div className="col-3">
            {" "}
            <ProductCard
              item={products}
              // notify={notify}
            />
          </div>
        ))}
      </div>
      <Foorter />
    </div>
  );
}
