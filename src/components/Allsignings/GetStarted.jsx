import "./SigninupStyles.css"
import React, { useState } from 'react';
import SignupOrLoginOptions from './signinup';



const GetStarted = () => {
  const [showOptions, setShowOptions] = useState(false);

  const handleGetStartedClick = () => {
    setShowOptions(true);
  };

  return (
    <div className="MainGetstarted">
      <button className='Getstartedbutton' onClick={handleGetStartedClick}>Get Started</button>
      {showOptions && <SignupOrLoginOptions />}
    </div>
  );
};

export default GetStarted;
