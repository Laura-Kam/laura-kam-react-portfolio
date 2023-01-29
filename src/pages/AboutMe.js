import React from "react";
import "../App.css";
import { BrowserRouter as Link } from "react-router-dom";

// profile picture and about me
import ProfilePic from "../assets/devPicLKBlue.png";

export default function AboutMe() {
  return (
    <div className="aboutMe aboutMeContainer">
      <img src={ProfilePic} className="profile-picture" alt="profile" />
      <p className="aboutMe text">
        Hi, I'm Laura, full-stack web developer.
        <br />
        I am in this industry to solve real-world problems with my applications.
        <br />
        I am currently based in Birmingham, in the UK.
        <br />
        You are welcome to look around.
        <br />
        <a href="https://www.github.com/laura-kam">GitHub</a>
        <br />
        <a href="https://www.linkedin.com/in/laurakam/">LinkedIn</a>
        Get in touch: laurakam91@gmail.com
      </p>
    </div>
  );
}
