import React from "react";
import Fade   from 'react-reveal/Zoom';
import backProfile from '../assets/imgs/back-profile.svg'
const moveToContact = () => {
  window.scrollTo(0, 3000);
};
export default function About() {
  return (
    <Fade left>

    <div className="hero flex  wrap ">
      <div className="flex column info">
        <span className="hero-name"> Hi There 👋 I'm Yonatan Arm</span>
        <span>A Full-Stack / Frontend Web Developer</span>
        <button
          className="flex justify-center align-center"
          onClick={moveToContact}
        >
          {" "}
          Hire Me
        </button>
      </div>
      <div className="profile-container flex">
        <div>
          <img src={require("../assets/imgs/profile-link.jpeg")} />
        </div>
      </div>
    </div>
    </Fade>
  );
}
