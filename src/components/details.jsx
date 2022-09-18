import React from "react";
import devloperIcon from "../assets/imgs/profile.svg";
import resume from "../assets/imgs/Yonatan_Arm_Resume.pdf";
import HeadShake from "react-reveal/HeadShake";
import Fade from "react-reveal/Zoom";

export default function details() {
  return (
    <Fade left>
      <div className="my-details flex column align-center">
        <HeadShake>
          <h1> About Me</h1>
        </HeadShake>
        <div className="flex wrap justify-center details-container">
          <img src={devloperIcon} />
          <div className="details-info flex column justify-center align-center">
            <p>
              Full-stack/front-end web developer with experience developing
              single-page applications using the latest web technologies. I'm a
              very motivated, adaptable, and persistent worker. I enjoy
              expanding my knowledge and skills and am passionate about solving
              problems. I am a self-learner and have excellent interpersonal,
              communication, and teamwork skills.
            </p>
            <div>
              <a href={resume} download>
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}
