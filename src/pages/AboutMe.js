import React from "react";
import "../App.css";

// profile picture and about me
import ProfilePic from "../assets/devPicLKBlue.png";

export default function AboutMe() {
  return (
    <div className="aboutMe aboutMeContainer">
      <img
        src={ProfilePic}
        className="profile-picture"
        alt="profile"
        style={{
          paddingTop: "35px",
        }}
      />
      <p
        className="aboutMe text"
        style={{
          paddingTop: "35px",
          fontSize: "1px",
        }}
      >
        Hi there, I'm Laura, and I am a frontend web developer.
        <br />
        I am excited to solve real-world problems with my applications.
        <br />
        I have recently completed a full-stack web development course at the
        University of Birmingham.
        <br />
        This is where I gained invaluable experience in React JS, Javascript{" "}
        <br />
        TypeScript, APIs as well as HTML and CSS.
        <br />
        You are welcome to look around.
        <br />
        <span>
          <a href="https://www.github.com/laura-kam">GitHub {"   "} </a>
        </span>
        <span>
          <a href="https://www.linkedin.com/in/laurakam/">LinkedIn {"   "}</a>
        </span>
        <span>
          <a href="https://docs.google.com/document/d/1d2NADIcZRXNf5C_eXy5HrzlacuPP57A8uwIMq94Toqk/edit">
            CV{"   "}
          </a>
        </span>
        <br />
        Email me at: laurakam91@gmail.com
        {/* <p
          style={{
            fontSize: "15px",
          }}
        >
          Competencies: JavaScript ES6+, CSS3, HTML5, SQL, NoSQL
          <br /> MySQL, MongoDB, GitHub, Express, React.js <br /> Node.js,
          Handlebars, JQuery, Bootstrap MUI- Material Design <br /> CSS
          Framework, Client-Side and 3rd Party APIs.
        </p> */}
        <br />
      </p>
    </div>
  );
}
