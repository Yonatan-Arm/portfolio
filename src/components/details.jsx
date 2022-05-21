import React from "react";
import devloperIcon from "../assets/imgs/profile.svg";
import resume from "../assets/imgs/Yonatan_Arm_Resume.pdf";

export default function details() {
  return (
    <div className="my-details flex column justify-center align-center">
      <h2> About Me</h2>
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
  );
}
