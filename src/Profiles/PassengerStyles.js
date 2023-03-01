import React from "react";
import Profile from "./Profile";

function Passenger(props) {
  return (
    <div>
      <Profile
        name="Jane Doe"
        profilePic=""
        bio="I am a frequent passenger who loves to travel."
      />
      <p>Other passenger-related content goes here.</p>
    </div>
  );
}

export default Passenger;
