import React from "react";
import devloperIcon from "../assets/imgs/profile.svg";
import resume from "../assets/imgs/Yonatan_Arm_Resume.pdf";
import HeadShake from 'react-reveal/HeadShake';
import Fade   from 'react-reveal/Zoom';

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
            Full-Stack / Frontend Web Developer with hands-on experience in
            building progressive web applications using the latest web
            technologies such as Node.js, Vue.js, Vuex, React.js and Angular. A
            team player, hard worker, self-learner, responsible and adapt
            quickly to new environments.
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
