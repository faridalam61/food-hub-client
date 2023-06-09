import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import ActiveLink from "../Routes/ActiveLink";

function Header() {
  const { user, logOut } = useContext(AuthContext);

  const navigate = useNavigate();
  const handleLogOUt = () => {
    logOut()
      .then(() => navigate("/login"))
      .catch((error) => console.log(error));
  };
  return (
    <div className="navbar bg-base-100 sticky top-0 z-[999]">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <ActiveLink to="/">Home</ActiveLink>
            </li>
            <li>
              <ActiveLink to="/blog">Blog</ActiveLink>
            </li>
            <li>
              <ActiveLink to="/about-us">About Us</ActiveLink>
            </li>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case font-bold  text-3xl">
          Food Hub
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <ActiveLink to="/">Home</ActiveLink>
          </li>
          <li>
            <ActiveLink to="/blog">Blog</ActiveLink>
          </li>
          <li>
            <ActiveLink to="/about-us">About Us</ActiveLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="flex items-center gap-4">
            <div className="tooltip">
              <Link to="/profile">
                <img src={user.photoURL} className="rounded-full w-10" />
              </Link>
              <span className="tooltip-text">{user.displayName}</span>
            </div>
            <button onClick={handleLogOUt}>Logout</button>
          </div>
        ) : (
          <Link to="/login" className="btn btn-primary">
            Login
          </Link>
        )}
      </div>
    </div>
  );
}

export default Header;
