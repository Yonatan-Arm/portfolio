import React from "react";
import Fade   from 'react-reveal/Zoom';
const moveToContact = () => {
  window.scrollTo(0, 3000);
};
export default function About() {
  return (
    <Fade left>
    <div className="hero flex justify-center wrap ">
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
      <div className="profile-container flex align-center justify-center">
        <div className="back-profile">
          <svg
            viewBox="0 0 479 467"
            xmlns="http://www.w3.org/2000/svg"
            xlink="http://www.w3.org/1999/xlink"
          >
            <path d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z" />
          </svg>
        </div>
        <div>
          <img src={require("../assets/imgs/profile-link.jpeg")} />
        </div>
      </div>
    </div>
    </Fade>
  );
}
