import React from "react";
import "../App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

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
        <Link
          to={{ pathname: "https://www.github.com/laura-kam/" }}
          target="_blank"
        >
          GitHub
        </Link>
        <br />
        <Link
          to={{ pathname: "https://www.linkedin.com/in/laurakam/" }}
          target="_blank"
        >
          Click to open LinkedIn (new tab)
        </Link>
        <br />
        Get in touch: laurakam91@gmail.com
      </p>
    </div>
  );
}
