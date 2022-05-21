import React from "react";
const moveToContact =  () => {
  window.scrollTo(0, 3000)
}
export default function About() {
  return (
    <div className="hero flex justify-center wrap ">
        <div className="flex column info">
      <span className="hero-name"> Hi There 👋 I'm Yonatan Arm</span>
      <span>A Full-Stack / Frontend Web Developer</span>
      <button className="flex justify-center align-center" onClick={moveToContact}> Hire Me</button>
        </div>
      <img src={require("../assets/imgs/profile-link.jpeg")} />
    </div>
  );
}

