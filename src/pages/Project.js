import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import webicodehelp from "../images/super.png";
import rfid from "../images/emergency.png";
import portfolio from "../images/net.png";
import "./Style.css";

function Project() {
  return (
    <Container className="px-5 mx-4">
      <h1>Projects</h1>

      <h5>Below are some of the key projects I have contributed as BSIT students.</h5>

      <ul>
        <Row className="gap-2">
          
          <li>
            <h1>Super Delcious Pizza Website</h1>
            There's no better feeling in the world than a warm pizza box on your lap.
            <Col className="col-12 bg-black mt-4 overflow-hidden position-relative">
              <a href="" target="_blank" rel="noreferrer">
                <div className="p-5 position-absolute top-25 start-25"></div>
                <div className="project-image">
                  <img
                    src={webicodehelp}
                    className="transform-image float-end p-5"
                    alt=""
                  />
                </div>
              </a>
            </Col>
          </li>
          <br></br>
          <li>
            <h1>CPSU Emergency Alert System via SMS Notification</h1>
            Courage is not the absence of fear, but the triumph over it.
            <Col className="col-12 bg-black mt-4 overflow-hidden position-relative">
              <a href="" target="_blank" rel="noreferrer">
                <div className="p-5 position-absolute top-25 start-25"></div>
                <div className="project-image">
                  <img
                    src={rfid}
                    className="transform-image float-end p-5"
                    alt=""
                  />
                </div>
              </a>
            </Col>
          </li>
          <br></br>
          <li>
            <h1>Netflix Website</h1>
            Netflix is like the best friend who doesn't judge and is always there for you.
            <Col className="col-12 bg-black mt-4 overflow-hidden position-relative">
              <a href="" target="_blank" rel="noreferrer">
                <div className="p-5 position-absolute top-25 start-25">
                  <h3 className="text-white fw-bold">
                  </h3>
                </div>
                <div className="project-image">
                  <img
                    src={portfolio}
                    className="transform-image float-end p-5"
                    alt=""
                  />
                </div>
              </a>
            </Col>
          </li>
        </Row>
      </ul>
    </Container>
  );
}

export default Project;
