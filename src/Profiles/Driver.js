import React from "react";
import Profile from "./Profile";

function Driver(props) {
  return (
    <div>
      <Profile
        name="John Doe"
        profilePic=""
        bio="I am a driver with 10 years of experience."
      />
      <p>Other driver-related content goes here.</p>
    </div>
  );
}

export default Driver;




