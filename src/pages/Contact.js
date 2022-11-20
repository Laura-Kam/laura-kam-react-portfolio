import React from "react";
import {
  MDBInput,
  MDBRow,
  MDBCol,
  MDBTextArea,
  MDBCard,
  MDBCardHeader,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardFooter,
  MDBBtn,
} from "mdb-react-ui-kit";
import "./pages.css";

export default function Contact() {
  return (
    <MDBCard alignment="center">
      <MDBCardHeader></MDBCardHeader>
      <MDBCardBody>
        <MDBCardTitle>Contact Me</MDBCardTitle>
        <MDBCardText>
          Let's add value to your company. I will always respond within 24 hours
        </MDBCardText>
        <div className="contactMargin">
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
            <MDBTextArea label="Message" id="textAreaExample" rows={5} />
          </div>
        </div>
        <MDBBtn href="#">Submit</MDBBtn>
      </MDBCardBody>
      <MDBCardFooter>LK Solutions</MDBCardFooter>
    </MDBCard>
  );
}
//     <div className="contactMargin">
//       <MDBRow className="g-3 align-items-center">
//         <MDBInput
//           wrapperClass="col-auto"
//           label="First and Last Name"
//           type="text"
//           id="formTextExample2"
//           aria-describedby="textExample2"
//         />
//         <MDBCol size="auto">
//           <span id="textExample2" className="form-text">
//             Must be 8-20 characters long.
//           </span>
//         </MDBCol>
//       </MDBRow>
//       <MDBRow className="g-3 align-items-center">
//         <MDBInput
//           wrapperClass="col-auto"
//           label="Email"
//           type="text"
//           id="formTextExample2"
//           aria-describedby="textExample2"
//         />
//         <MDBCol size="auto">
//           <span id="textExample2" className="form-text">
//             Must be 8-20 characters long.
//           </span>
//         </MDBCol>
//       </MDBRow>
//       <div>
//         <MDBTextArea label="Message" id="textAreaExample" rows={5} />
//       </div>
//     </div>
//   );

// }
