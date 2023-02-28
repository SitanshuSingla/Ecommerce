import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AppContext from "../../../Context";
import "./Header.css";

export default function Header(props) {
  // let [count, setCount] = useState(0);

  let { cartItem } = useContext(AppContext);
  // useEffect(() => {
  //   let cart = localStorage.getItem("cart");
  //   let a = JSON.parse(cart);
  //   // setCount(a.length);
  // }, [props]);

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <Link to="/">
            <img
              alt=""
              height="40px"
              src="https://th.bing.com/th/id/R.4f1738058634d0d709082bba397b6d94?rik=aG8g4FiuxuGLCw&riu=http%3a%2f%2fwww.politicspa.com%2fwp-content%2fuploads%2f2011%2f07%2fAmazon-Logo-Wallpaper.png&ehk=FPfEkf4SLFBM8IFzShHeZJHx8dlYKHcfV06VndUKD1s%3d&risl=&pid=ImgRaw&r=0"
            ></img>
          </Link>

          <div className="right">
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              ></input>
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>

            <ul className="navbar-nav me-auto mb-2 mb-lg-0 d">
              <li className="nav-item">
                <Link className="nav-link" to="/cart">
                  Cart
                  <span> {cartItem.length}</span>
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/register">
                  Register
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  SignIn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
