import React from "react";
import Fade   from 'react-reveal/Zoom';
// import hero from '../assets/imgs/cool-background.svg'

const moveToContact = () => {
  window.scrollTo(0, 3200);
};

export default function About() {
  return (
    <Fade left>
    {/* <img src={hero} className="hero-img" alt='hero'/> */}
    <div className="hero flex  wrap justify-center ">
      <div className="flex column info">
        <span>Hello...</span>
        <span className="hero-name"> I'm Yonatan Arm</span>
        <span>A full-stack web developer</span>
        <button
          className="flex justify-center align-center btn"
          onClick={moveToContact}
        >
          {" "}
          Hire Me
        </button>
      </div>
      <div className="profile-container flex">
        <div>
          <img src={require("../assets/imgs/profile-link.jpeg")} alt="profile-img" />
        </div>
      </div>
    </div>
    </Fade>
  );
}
