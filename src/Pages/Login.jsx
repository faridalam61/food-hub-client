import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { FaGoogle, FaGithub } from "react-icons/fa";

function Login() {
  const { loginUser, google, github } = useContext(AuthContext);
  const location = useLocation();
  const [error, setError] = useState("");
  const [sucess, setSucess] = useState("");
  const from = location?.state?.from?.pathname || "/";

  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    loginUser(email, password)
      .then(() => {
        setSucess("Login successful!! Redirecting..");
        setError("");
        navigate(from);
      })
      .catch((error) => {
        const msg = error.message.includes("wrong-password");
        if (msg) {
          setError("Email and password not matched");
        } else {
          setError(error.message);
        }
      });
  };
  const handleGoogleLogin = () => {
    google()
      .then(() => navigate(from))
      .catch((error) => console.log(error));
  };

  const handleGithubLogin = () => {
    github()
      .then(() => navigate(from))
      .catch((error) => console.log(error));
  };
  return (
    <div className="h-min my-16 p-4 flex justify-center items-center">
      <div className="card p-6 card-compact w-full lg:w-1/3 bg-base-100 shadow-xl">
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
            <p className="text-red-400 font-bold">{error}</p>
            <p className="text-green-400 font-bold">{sucess}</p>
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
          <p className="text-center my-6">-OR-</p>
          <div className="flex flex-col lg:flex-row justify-between gap-6">
            <button
              onClick={handleGoogleLogin}
              className="flex items-center gap-4 border p-2 w-full lg:w-1/2"
            >
              <FaGoogle />
              Sign in with Google
            </button>
            <button
              onClick={handleGithubLogin}
              className="flex items-center gap-4 border p-2 w-full lg:w-1/2"
            >
              <FaGithub />
              Sign in with Github
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
