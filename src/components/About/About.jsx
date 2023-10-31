import React from "react";
import "./about.css";
import skill from "../../img/skill.jpg";
import Master from "../../img/master.jpg";
import CV from "../../assets/cv.pdf";

const About = () => {
  return (
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
          I am a 22-year-old developer, born on March 11, 2001. I am passionate
          and creative, with solid technical expertise and proven ability to
          solve complex problems, as well as my team-oriented nature. My
          frontend skills include HTML, CSS, JavaScript, React, Tailwind, and
          some knowledge in Flutter. For the backend, I primarily use PHP
          Laravel and MySQL, but I am also skilled in Java (JEE) and Python.
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
        <a href={CV} download className="i-download-link">
          Download CV
        </a>
      </div>
    </div>
  );
};

export default About;
