import React from "react";
import "./pages.css";

// import myImage from ".../public/LauraKayProfileImage";
import ProfilePic from "../assets/devPicLKBlue.png";

export default function AboutMe() {
  return (
    <div className="aboutMe">
      <img src={ProfilePic} className="profile-picture" alt="profile" />
      <p className="aboutMe">
        Hi, I'm Laura, full-stack web developer.
        <br />
        I am in this industry to solve real-world problems with my applications.
        <br />
        I am currently based in Birmingham, in the UK.
        <br />
        You are welcome to look around.
      </p>
    </div>
  );
}
