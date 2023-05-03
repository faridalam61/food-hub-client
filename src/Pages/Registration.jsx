import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

function Registration() {
  const { registerAccount, setProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleRegistration = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const profilePhoto = form.profile_photo.value;
    const data = {
      displayName: name,
      photoURL: profilePhoto,
    };

    registerAccount(email, password)
      .then((res) => {
        setProfile(data)
          .then(() => navigate("/"))
          .catch((error) => console.log(error));
        console.log(res.user);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="card p-6 card-compact w-1/3 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-3xl">Registration</h2>
          <form onSubmit={handleRegistration}>
            <input
              type="text"
              placeholder="Name"
              name="name"
              required
              className="input input-bordered input-primary w-full my-2"
            />
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
            <input
              type="text"
              placeholder="Photo URL"
              name="profile_photo"
              className="input input-bordered input-primary w-full my-2"
            />
            <div className="card-actions justify-center">
              <input
                type="submit"
                className="btn btn-primary w-full mt-3"
                value="Create Account"
              />
            </div>
          </form>

          <Link to="/login" className="mt-3">
            Already have an account? Login here
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Registration;
