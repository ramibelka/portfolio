// Skills.js
import React from "react";
import {
  FaJava,
  FaPython,
  FaHtml5,
  FaCss3,
  FaReact,
  FaPhp,
} from "react-icons/fa";
import { SiMysql, SiLaravel, SiJavascript, SiFlutter } from "react-icons/si";
import "./Skills.css";

const Skills = () => {
  return (
    <>
      <h1>My skills</h1>
      <hr className="divider" />
      <div className="tech-stack-container">
        <div className="tech-icon">
          <FaHtml5 />
          <p>HTML</p>
        </div>
        <div className="tech-icon">
          <FaCss3 />
          <p>CSS</p>
        </div>
        <div className="tech-icon">
          <SiJavascript />
          <p>JavaScript</p>
        </div>
        <div className="tech-icon">
          <FaReact />
          <p>ReactJS</p>
        </div>
        <div className="tech-icon">
          <SiLaravel />
          <p>Laravel</p>
        </div>
        <div className="tech-icon">
          <FaPhp />
          <p>PHP</p>
        </div>
        <div className="tech-icon">
          <FaJava />
          <p>Java</p>
        </div>
        <div className="tech-icon">
          <FaPython />
          <p>Python</p>
        </div>
        <div className="tech-icon">
          <SiMysql />
          <p>MySQL</p>
        </div>
        <div className="tech-icon">
          <SiFlutter />
          <p>Flutter</p>
        </div>
      </div>
    </>
  );
};

export default Skills;
