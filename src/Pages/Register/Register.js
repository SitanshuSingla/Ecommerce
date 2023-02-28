import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";
export default function Register() {
  let [user, setUser] = useState([]);
  let navigate = useNavigate();

  function hanfleSubmit() {
    navigate("/login");
  }

  return (
    <div>
      <div className="reg">
        <h3>Please Register</h3>

        <form onSubmit={hanfleSubmit}>
          <label className="form-label">Email</label>
          <input
            onInput={(e) => (user.email = e.target.value)}
            type="email"
            className="form-control"
          ></input>

          <div className="row">
            <div className="col-6">
              <label className="form-label">First Name</label>
              <input
                onInput={(e) => (user.First = e.target.value)}
                type="text"
                className="form-control"
              ></input>
            </div>
            <div className="col-6">
              <label className="form-label">Last Name</label>
              <input
                onInput={(e) => (user.last = e.target.value)}
                type="text"
                className="form-control"
              ></input>
            </div>
          </div>

          <label className="form-label">UserName</label>
          <input
            onInput={(e) => (user.username = e.target.value)}
            type="text"
            className="form-control"
          ></input>
          <label className="form-label">Password</label>
          <input
            onInput={(e) => (user.pass = e.target.value)}
            type="password"
            className="form-control"
          ></input>
          <label className="form-label">Phone Number</label>
          <input
            onInput={(e) => (user.number = e.target.value)}
            type="number"
            className="form-control"
          ></input>

          <label className="form-label">Address</label>

          <div className="row">
            <div className="col-6">
              <label className="form-label">City</label>
              <input type="text" className="form-control"></input>
            </div>
            <div className="col-6">
              <label className="form-label">Street</label>
              <input type="text" className="form-control"></input>
            </div>
          </div>

          <div className="row">
            <div className="col-6">
              <label className="form-label">Pincde</label>
              <input type="text" className="form-control"></input>
            </div>
            <div className="col-6">
              <label className="form-label">State</label>
              <input type="text" className="form-control"></input>
            </div>
          </div>
          <br></br>
          <div className="a1">
            <button type="submit" className="btn btn-success ">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
