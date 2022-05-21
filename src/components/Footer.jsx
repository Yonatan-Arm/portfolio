import React from "react";
import linkdinLogo from "../assets/imgs/linkdinLogo.svg";
import githubLogo from "../assets/imgs/githubLogo.svg";
import whatsappLogo from "../assets/imgs/whatsappLogo.svg";

export default function Footer() {
  return (
    <div className="footer flex wrap column  align-center justify-center">
      <div className=" sociel-container flex wrap">
      <div>
        <a href="https://www.linkedin.com/in/yonatan-arm-b2a3b0238/" target="_blank">
          <img src={linkdinLogo} alt="linkdinLogo" />
        </a>
      </div>
      <div>
        <a href="https://github.com/Yonatan-Arm" target="_blank">
        <img src={githubLogo} alt="githubLogo" />
        </a>
      </div>
      <div>
        <a href="https://wa.me/+972528349626/?text=Hi Yonatan" target="_blank">
        <img src={whatsappLogo} alt="whatsappLogo" />
        </a>
      </div>
      </div>
      <span>
       &copy; Copyright Yonatan Arm 2022. All right reserved
      </span>
      </div>
  );
}
