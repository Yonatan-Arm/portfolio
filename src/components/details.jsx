import React from "react";
import devloperIcon from '../assets/imgs/profile.svg'
import resume from '../assets/imgs/Yonatan_Arm_Resume.pdf'

export default function details() {
  return (
    <div className="my-details flex column justify-center align-center">
      <h2> About Me</h2>
      <div className="flex wrap justify-center details-container">
      <img src={devloperIcon} />
      <div className="details-info flex column justify-center align-center">
      <p>
        I am a responsible and serious person, like to expand my knowledge and
        abilities, have the ability to self-learn, work well in a team, know how
        to deal with problem solving, and face new challenges.
      </p>
      <p>
      passionate about solving challenges,
       with experience in writing single-page-applications using the latest WEB technologies
      </p>
      <div>
      <a
        href={resume}
        download
      >
       Download CV
      </a>
    </div>
      </div>
      </div>
    </div>
  );
}
