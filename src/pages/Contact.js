import React from "react";
import { MDBInput, MDBRow, MDBCol, MDBTextArea } from "mdb-react-ui-kit";

export default function Contact() {
  return (
    <div>
      <MDBRow className="g-3 align-items-center">
        <MDBInput
          wrapperClass="col-auto"
          label="First and Last Name"
          type="text"
          id="formTextExample2"
          aria-describedby="textExample2"
        />
        <MDBCol size="auto">
          <span id="textExample2" className="form-text">
            Must be 8-20 characters long.
          </span>
        </MDBCol>
      </MDBRow>
      <MDBRow className="g-3 align-items-center">
        <MDBInput
          wrapperClass="col-auto"
          label="Email"
          type="text"
          id="formTextExample2"
          aria-describedby="textExample2"
        />
        <MDBCol size="auto">
          <span id="textExample2" className="form-text">
            Must be 8-20 characters long.
          </span>
        </MDBCol>
      </MDBRow>
      <div>
        <MDBTextArea label="Message" id="textAreaExample" rows={4} />
      </div>
    </div>
  );
  // <div className="aboutMe">
  //   {/* <img src={ProfilePic} className="profile-picture" alt="profile" /> */}
  //   <p className="aboutMe">
  //     CONTACT ME
  //     <br />
  //   </p>
  // </div>
  //   );
}
