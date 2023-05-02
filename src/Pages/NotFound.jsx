import React from "react";
import notFoundImage from "../../public/images/404.png";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="text-center">
      <img src={notFoundImage} className="mx-auto" />
      <Link to="/">
        <button className="btn btn-primary">Back to Homepage</button>
      </Link>
    </div>
  );
}

export default NotFound;
