import "./Login.css";

export default function Login() {
  return (
    <div className="container">
      <h3>Please Login</h3>
      <div>
        <form action="">
          <label className="form-label">Email</label>
          <input type="text" className="form-control" />

          <label className="form-label">Password</label>
          <input type="password" className="form-control" />
          <br></br>
          <button className="btn btn-success">Login</button>
        </form>
      </div>
    </div>
  );
}
