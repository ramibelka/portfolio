import React from "react";
import "./about.css";
import skill from "../../img/skill.jpg";
import Master from "../../img/master.jpg";

const About = () => {
  return (
    <div>
      <div className="a">
        <div className="a-left">
          <div className="a-card bg"></div>
          <div className="a-card">
            <img src={skill} alt="" className="a-img" />
          </div>
        </div>
        <div className="a-right">
          <h1 className="a-title">About Me</h1>
          <p className="a-sub">A dedicated Full-stack Developer.</p>
          <p className="a-desc">
            I am a 22 year old developer, born on March 11, 2001, passionate and
            creative, with a solid technical expertise, a proven ability to
            solve complex problems. I use ReactJS for frontend developement, and
            Laravel for the backend.
          </p>
          <div className="a-award">
            <img src={Master} alt="" className="a-award-img" />
            <div className="a-award-texts">
              <h4 className="a-award-title">
                Master's degree in computer science
              </h4>
              <p className="a-award-desc">
                Specializing in Information Systems and Web Technologies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
