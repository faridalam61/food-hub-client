import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

function Login() {
  const { loginUser } = useContext(AuthContext);
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    loginUser(email, password)
      .then(() => navigate(from))
      .catch((error) => console.log(error));
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="card p-6 card-compact w-1/3 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-3xl">Login</h2>
          <form onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Email"
              name="email"
              required
              className="input input-bordered input-primary w-full my-2"
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              className="input input-bordered input-primary w-full my-2"
            />

            <div className="card-actions justify-center">
              <input
                type="submit"
                className="btn btn-primary w-full mt-3"
                value="Login"
              />
            </div>
          </form>

          <Link to="/register" className="mt-3">
            Don't have an account? Register here
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
