import React from "react";
// import myImage from ".../public/LauraKayProfileImage";

export default function AboutMe() {
  return (
    <div className="aboutMe">
      <img
        src=".../public/LauraKayProfileImage"
        alt="Profile Image Laura"
        id="lauraProfileImage"
      />
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
