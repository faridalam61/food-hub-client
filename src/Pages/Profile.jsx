import React, { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

function Profile() {
  const { user, setProfile } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value ? form.name.value : user.displayName;
    const image = form.image.value ? form.image.value : user.photoURL;
    if (form.name.value != "" || form.image.value != "") {
      const data = { displayName: name, photoURL: image };
      setProfile(data)
        .then(() => {
          setError("");
          setSuccess("Profile updated succesfully");
          location.reload();
        })
        .catch((error) => setError(error.message));
    } else {
      setError("Change at least one field");
    }
  };

  return (
    <div className="card w-96 mx-auto my-16 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src={user.photoURL}
          alt={user.displayName}
          className="rounded-full w-28"
        />
      </figure>
      <div className="card-body items-center">
        <h2 className="card-title font-bold text-3xl">{user.displayName}</h2>

        <form onSubmit={handleForm}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            className="mb-4 mt-2 input input-bordered input-primary w-full max-w-xs"
            placeholder={user.displayName}
          />

          <label>Profile Photo</label>
          <input
            type="text"
            name="image"
            placeholder={user.photoURL}
            className="mb-4 mt-2 input input-bordered input-primary w-full max-w-xs"
          />
          <label>Email</label>
          <input
            type="text"
            name="image"
            placeholder={user.email}
            disabled
            className="mb-4 mt-2 input input-bordered input-primary w-full max-w-xs"
          />
          <h2 className="text-red-400 text-lg">{error}</h2>
          <h2 className="text-green-400 text-lg">{success}</h2>
          <div className="mt-4 card-actions text-center">
            <input
              type="submit"
              className="btn btn-primary w-full"
              value="Update Profile"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Profile;
