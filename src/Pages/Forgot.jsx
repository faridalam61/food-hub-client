import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

function Forgot() {
  const { resetPass } = useContext(AuthContext);

  const [error, setError] = useState("");
  const [sucess, setSucess] = useState("");

  const handleReset = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    console.log(email);

    resetPass(email)
      .then(() => {
        setSucess("Reset link has been sent to your email");
      })
      .catch((error) => setError(error.message));
  };

  return (
    <div className="h-min my-16 p-4 flex justify-center items-center">
      <div className="card p-6 card-compact w-full lg:w-1/3 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-3xl">Reset Password</h2>
          <form onSubmit={handleReset}>
            <input
              type="email"
              placeholder="Email"
              name="email"
              required
              className="input input-bordered input-primary w-full my-2"
            />

            <p className="text-red-400 font-bold">{error}</p>
            <p className="text-green-400 font-bold">{sucess}</p>
            <div className="card-actions justify-center">
              <input
                type="submit"
                className="btn btn-primary w-full mt-3"
                value="Send reset link"
              />
            </div>
          </form>

          <Link to="/login" className="mt-3">
            Back to login page
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Forgot;
