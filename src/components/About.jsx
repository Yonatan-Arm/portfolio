import React from "react";
import Fade   from 'react-reveal/Zoom';
import hero from '../assets/imgs/hero.jpg'

const moveToContact = () => {
  window.scrollTo(0, 3000);
};
export default function About() {
  return (
    <Fade left>
    <img src={hero} className="hero-img" alt='hero'/>
    <div className="hero flex  wrap ">
      <div className="flex column info">
        <span className="hero-name"> Hi There 👋 I'm Yonatan Arm</span>
        <span>A Full-Stack / Frontend Web Developer</span>
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
