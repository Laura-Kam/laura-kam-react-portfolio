//6 project cards inside.
import React from "react";
import { MDBBadge } from "mdb-react-ui-kit";
import "./pages.css";

//JSX 6 cards.
export default function Portfolio() {
  return (
    <div class="row row-cols-1 row-cols-sm-3 g-4">
      <div className="col">
        <div className="card w-60 h-40 m-5">
          <img
            src="https://images.unsplash.com/photo-1554177255-61502b352de3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            class="card-img-top"
            alt="Palm Springs Road"
          />
          <div className="card-body">
            <h5 className="card-title">Maifrigo Recipe App</h5>
            <p className="card-text">100% Taste Zero Waste</p>
            <div className="d-flex justify-content-evenly">
              <a
                href="https://watch.screencastify.com/v/WmSWJcROgn9cd9LAN12u"
                className="btn btn-primary"
              >
                Video
              </a>
              <a
                href="https://maifrigo-recipe-app.herokuapp.com/"
                className="btn btn-primary"
              >
                Website
              </a>
            </div>
            <div className="maifrigoTechnologies">
              <MDBBadge pill className="mx-2" color="info" light>
                Node JS
              </MDBBadge>
              <MDBBadge pill className="mx-2" color="info" light>
                Javascript
              </MDBBadge>
              <MDBBadge pill className="mx-2" color="info" light>
                MongoDB
              </MDBBadge>
              <MDBBadge pill className="mx-2" color="info" light>
                React JS
              </MDBBadge>
              <MDBBadge pill className="mx-2" color="info" light>
                Express JS
              </MDBBadge>
              <MDBBadge pill className="mx-2" color="info" light>
                API - Server Side
              </MDBBadge>
              <MDBBadge pill className="mx-2" color="info" light>
                JWT Authentification
              </MDBBadge>
            </div>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card w-60 h-40 m-5">
          <img
            src="https://images.unsplash.com/photo-1472114864173-39596323454f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            class="card-img-top"
            alt="Hollywood Sign on The Hill"
          />
          <div className="card-body">
            <h5 className="card-title">Sun's Come Out App</h5>
            <p className="card-text">What's the weather in Madrid?</p>
            <div className="d-flex justify-content-evenly">
              {/* links to github and deployed app */}
              <a
                href="https://laura-kam.github.io/Sun-s-come-out-app/"
                className="btn btn-primary"
              >
                App
              </a>
              <a
                href="https://github.com/Laura-Kam/Sun-s-come-out-app"
                className="btn btn-primary"
              >
                Github
              </a>
            </div>
            <MDBBadge
              pill
              className="mx-2"
              color="info"
              light
              style={{ margin: "23px" }}
            >
              HTML5
            </MDBBadge>
            <MDBBadge
              pill
              className="mx-2"
              color="info"
              light
              style={{ margin: "23px" }}
            >
              CSS
            </MDBBadge>
            <MDBBadge
              pill
              className="mx-2"
              color="info"
              light
              style={{ margin: "23px" }}
            >
              Javascript
            </MDBBadge>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card w-60 h-40 m-5">
          <img
            src="https://images.unsplash.com/photo-1509475826633-fed577a2c71b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
            class="card-img-top"
            alt="Palm Springs Road"
          />
          <div className="card-body">
            <h5 className="card-title">TextEd Text Editor App</h5>
            <p className="card-text">Record your thoughts.</p>
            <div className="d-flex justify-content-evenly">
              <a
                href="https://cryptic-dawn-19004.herokuapp.com/"
                className="btn btn-primary"
              >
                App
              </a>
              <a
                href="https://github.com/Laura-Kam/TextEd"
                className="btn btn-primary"
              >
                Github
              </a>
            </div>
            <div className="textEdTechnologies">
              <MDBBadge pill className="mx-2" color="info" light>
                Javascript
              </MDBBadge>
              <MDBBadge pill className="mx-2" color="info" light>
                Heroku
              </MDBBadge>
              <MDBBadge pill className="mx-2" color="info" light>
                Manifest JSON
              </MDBBadge>
              <MDBBadge pill className="mx-2" color="info" light>
                PWA
              </MDBBadge>
              <MDBBadge pill className="mx-2" color="info" light>
                Service Worker
              </MDBBadge>
              <MDBBadge pill className="mx-2" color="info" light>
                IndexedDB
              </MDBBadge>
              <MDBBadge pill className="mx-2" color="info" light>
                Webpack
              </MDBBadge>
            </div>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card w-60 h-40 m-5">
          <img
            src="https://images.unsplash.com/photo-1517490232338-06b912a786b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
            class="card-img-top"
            alt="Palm Springs Road"
          />
          <div className="card-body">
            <h5 className="card-title">Organise My ShopStock App</h5>
            <p className="card-text">
              Your one-stop app for organising your products.
            </p>
            <div className="d-flex justify-content-evenly">
              <a
                href="https://watch.screencastify.com/v/OA1SjIsSOTd4Mn7v8I2b"
                className="btn btn-primary"
              >
                Video
              </a>
              <a
                href="https://github.com/Laura-Kam/Organise-my-ShopStock"
                className="btn btn-primary"
              >
                Github
              </a>
            </div>
            <div className="organiseMyShopStockTechnologies">
              <MDBBadge pill className="mx-2" color="info" light>
                Node JS
              </MDBBadge>
              <MDBBadge pill className="mx-2" color="info" light>
                Javascript
              </MDBBadge>
              <MDBBadge pill className="mx-2" color="info" light>
                MySQL
              </MDBBadge>
              <MDBBadge pill className="mx-2" color="info" light>
                API- Client Side
              </MDBBadge>
              <MDBBadge pill className="mx-2" color="info" light>
                Express JS
              </MDBBadge>
              <MDBBadge pill className="mx-2" color="info" light>
                Sequelize
              </MDBBadge>
              <MDBBadge pill className="mx-2" color="info" light>
                Insomnia
              </MDBBadge>
            </div>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card w-60 h-40 m-5">
          <img
            src="https://images.unsplash.com/photo-1506784983877-45594efa4cbe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=868&q=80"
            class="card-img-top"
            alt="Los Angeles Skyscrapers"
          />
          <div className="card-body">
            <h5 className="card-title">Schedule My Life App</h5>
            <p className="card-text">
              A colour-coded app, to make sure no appointments are missed.
            </p>
            <div className="d-flex justify-content-evenly">
              <a
                href="https://laura-kam.github.io/Schedule-my-life/"
                className="btn btn-primary"
              >
                App
              </a>
              <a
                href="https://github.com/Laura-Kam/Schedule-my-life"
                className="btn btn-primary"
              >
                Github
              </a>
            </div>
            <div className="scheduleMyLifeTechnologies">
              <MDBBadge pill className="mx-2" color="info" light>
                HTML5
              </MDBBadge>
              <MDBBadge pill className="mx-2" color="info" light>
                CSS
              </MDBBadge>
              <MDBBadge pill className="mx-2" color="info" light>
                Javascript
              </MDBBadge>
              <MDBBadge pill className="mx-2" color="info" light>
                JQuery
              </MDBBadge>
              <MDBBadge pill className="mx-2" color="info" light>
                Moment JS
              </MDBBadge>
            </div>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card w-60 h-40 m-5">
          <img
            src="https://images.unsplash.com/photo-1634224143538-ce0221abf732?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            class="card-img-top"
            alt="Skyscrapers"
          />
          <div className="card-body">
            <h5 className="card-title">Generate My Password App</h5>
            <p className="card-text">
              Random Password Generator, for when you are all out of ideas.
            </p>
            <div className="d-flex justify-content-evenly">
              <a
                href="https://laura-kam.github.io/GenerateMyPassword/"
                className="btn btn-primary"
              >
                App
              </a>
              <a
                href="https://github.com/Laura-Kam/GenerateMyPassword"
                className="btn btn-primary"
              >
                Github
              </a>
            </div>
            <div className="generateMyPasswordTechnologies">
              <MDBBadge pill className="mx-2" color="info" light>
                HTML5
              </MDBBadge>
              <MDBBadge pill className="mx-2" color="info" light>
                CSS
              </MDBBadge>
              <MDBBadge pill className="mx-2" color="info" light>
                Javascript
              </MDBBadge>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
