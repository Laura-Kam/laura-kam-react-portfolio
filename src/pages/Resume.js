import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
  MDBCardFooter,
  MDBListGroup,
  MDBListGroupItem,
} from "mdb-react-ui-kit";

// import LauraCV from ".../public/LauraKambanisCV.pdf";

export default function Resume() {
  return (
    <div>
      <MDBCard>
        <MDBCardBody>
          <MDBCardTitle>Competencies</MDBCardTitle>
          {/* <MDBCardText>Download My Resume</MDBCardText> */}
          {/* const onButtonClick = () ={">"}
          {
            // using Java Script method to get PDF file
            fetch({ LauraCV }).then((response) => {
              response.blob().then((blob) => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement("a");
                alink.href = fileURL;
                alink.download = { LauraCV };
                alink.click();
              });
            })
          }
          <center>
            <h1>Welcome to Geeks for Geeks</h1>
            <h3>Click on below button to download PDF file</h3>
            <button onClick={onButtonClick}>Download PDF</button>
          </center> */}
          {/* <MDBBtn>Button</MDBBtn> */}
          <a
            href="../../../LauraKambanisCV.pdf"
            target={"_blank"}
            download
            className="btn btn-primary"
          >
            Download Resume
          </a>
        </MDBCardBody>
      </MDBCard>
      <MDBCard>
        <MDBListGroup flush>
          <MDBListGroupItem>
            <div>
              <span style={{ fontWeight: "bold", fontSize: "18px" }}>
                Front-End
              </span>
              <br />
              HTML <br />
              CSS <br />
              Javascript <br />
              JQuery <br />
              Responsive Design <br />
              React <br />
              Boostrap
            </div>
          </MDBListGroupItem>
          <MDBListGroupItem>
            {" "}
            <div>
              <span style={{ fontWeight: "bold", fontSize: "18px" }}>
                Back-End
              </span>{" "}
              <br />
              API <br />
              Node <br />
              Express <br />
              MySQL,Sequelize <br />
              MongoDB, Mongoose <br />
              REST <br />
              GraphSQL
            </div>
          </MDBListGroupItem>
        </MDBListGroup>
        {/* <MDBCardFooter>Card footer</MDBCardFooter> */}
      </MDBCard>
    </div>
  );
}
