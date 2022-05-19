import React from "react";

export default function Specialities() {
  return (
      <div className="my-specialities flex column align-center">
        <h1> My Specialities </h1>
      <div className="flex wrap align-center specialities-container">
      <div className="specialities-card  flex column justify-center align-center">
      <span className="fa-stack fa-4x">
              <i className="fa fa-circle fa-stack-2x text-primary"></i>
              <i className="fa fa-cogs fa-gears fa-stack-1x fa-inverse"></i>
            </span>
        <h3>Creativity</h3>
        <p>
          Thinking outside the box and come up with original ideas. Creative
          branding, efficient handling of data and problem solving. That results
          a better experience for the user.
        </p>
      </div>
      <div className="specialities-card  flex column justify-center align-center">
      <span className="fa-stack fa-4x">
              <i className="fa fa-circle fa-stack-2x text-primary"></i>
              <i className="fa fa-laptop fa-stack-1x fa-inverse"></i>
            </span>
        <h3>Responsive Design</h3>
        <p>
          Specialized in "pixel perfect", responsive and web design. Good
          Understanding of UI/UX concepts.
        </p>
      </div>
      <div className="specialities-card flex column justify-center align-center">
      <span className="fa-stack fa-4x">
              <i className="fa fa-circle fa-stack-2x text-primary"></i>
              <i className="fa fa-code fa-stack-1x fa-inverse"></i>
            </span>
        <h3>Full Stack Development</h3>
        <p>
          Full Stack Developer with hands-on experience in building progressive
          web applications using the latest web technologies.
        </p>
      </div>
      </div>
    </div>
  );
}
