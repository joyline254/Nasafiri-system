import React from "react";
import Profile from "./Profile";

function Admin(props) {
  return (
    <div>
      <Profile
        name="Admin User"
        profilePic=""
        bio="I am the admin of this transport app."
      />
      <p>Other admin-related content goes here.</p>
    </div>
  );
}

export default Admin;



