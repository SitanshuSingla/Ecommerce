import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppContext from "./Context";
import Cart from "./Pages/Cart/Cart";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import { createContext, useState } from "react";

export default function App() {
  let [cartItem, setCartItem] = useState([]);

  let dispatcher = (action, payload) => {
    switch (action) {
      case "Add_item": {
        let item = cartItem.slice();
        item.push(payload);

        setCartItem(item);

        break;
      }
      // for quantity update
      case "Update_item": {
        let item = cartItem.slice();
        let ind = item.findIndex((i) => i.id == payload.id);
        item[ind] = payload;

        setCartItem(item);
        break;
      }
      case "Delete_Item": {
        let item = cartItem.slice();
        let ind = item.findIndex((i) => i.id == payload.id);
        console.log(item);
        item.splice(ind, 1);

        setCartItem(item);
        break;
      }

      default:
        console.log("Invalid");
    }
  };

  return (
    <AppContext.Provider value={{ cartItem, dispatcher }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/cart" element={<Cart />}>
            {" "}
          </Route>{" "}
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  );
}
