import React from "react";
import Profile from "./Profile";

function Accountant(props) {
  return (
    <div>
      <Profile
        name="Jane Doe"
        profilePic=""
        bio="I am an accountant with 5 years of experience."
      />
      <p>Other accountant-related content goes here.</p>
    </div>
  );
}

export default Accountant;