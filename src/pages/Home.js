/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Row, Col, Card, Container } from "react-bootstrap";
import webicodehelp from "../images/super.png";
import rfid from "../images/emergency.png";
import netflix from "../images/net.png";
import homeImage from "../images/myprofile.jpg";
import "./Style.css";

function Home() {
  return (
    <Container fluid id="home">
      <section className="px-5 mx-4">
        <Container className="box">
          <Row className="g-4 mb-5">
            <Col className="mx-4">
              <Card className="border-0 mb-4">
                <Card.Body>
                  <Card.Title className="mt-4">
                    <h3 className="h3">
                      <b>
                        Hello, I'm
                        <br />
                        JOLANIE M. BENDAN
                      </b>
                    </h3>
                    <p className="text-muted fs-0 fw-light">
                      <b className="text-black fw-bold"></b> Bachelor of Science
                      in Information Technology <br></br>Central Philippines
                      State University
                      <br /> Main Campus, Kabankalan City, Philippines
                      <br /> S.Y. 2023-2024
                    </p>
                    <p className="fw-light fs-4 mt-1 text-justify mb-4">
                      <br /> “The best view comes after the hardest climb.” –
                      Unknown
                    </p>
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col className="px-0">
              <Card className="border-0">
                <Card.Body className="p-0">
                  <img
                    src={homeImage}
                    className="border img-fluid w-75"
                    alt="Elmer Epogon"
                  />
                   <p className="fw-light fs-4 mt-1 text-justify mb-4">
                       I will set my goals high, and don't stop till I get there..
                    </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
     
      <section>
        <Container fluid id="projects">
          <div className="container px-5 pt-5 box">
            <Row>
              <Col>
                <h6 className="fs-10 bold-500 mt-auto">Recent Projects</h6>
              </Col>
              <Col className="d-flex justify-content-center align-items-center">
                <a
                  href="./project"
                  className="btn bg-white btn-xl text-lg fs-5 py-3 px-5 shadow"
                >
                  <i className="bi bi-arrow-up-right-square"></i> View All
                </a>
              </Col>
            </Row>
            <Row className="gap-2">
              <Col className="col-12 bg-black mt-4 overflow-hidden position-relative">
                <a href="" target="_blank" rel="noreferrer">
                  <div className="p-5 position-absolute top-25 start-25">
                    <h3 className="text-white fw-bold">1. Super Delicious</h3>
                    <h3 className="text-white fw-bold"> Pizza Website</h3>
                  </div>
                  <div className="project-image">
                    <img
                      src={webicodehelp}
                      className="transform-image float-end p-5"
                      alt=""
                    />
                  </div>
                </a>
              </Col>
              
              <Col className=" bg-black mt-4 overflow-hidden position-relative">
                <a href="" target="_blank" rel="noreferrer">
                  <div className="p-5 position-absolute top-25 start-25">
                    <h4 className="text-white fw-bold">2. CPSU EAS via SMS</h4>
                    <h4 className="text-white fw-bold">Notification</h4>
                  </div>
                  <div className="project-image mt-5">
                    <img
                      src={rfid}
                      className="transform-image float-end p-5"
                      alt=""
                    />
                  </div>
                </a>
              </Col>
              <Col className="col-4 bg-black mt-4 ms-4 overflow-hidden position-relative">
                <a href="" target="_blank" rel="noreferrer">
                  <div className="p-5 position-absolute sticky-text top-25 start-25">
            
                    <h5 className="text-white fw-bold">3. Netflix Website</h5>
                  </div>
                
                  <div className="project-image mt-5 p-5">
                    <img
                      src={netflix}
                      className="transform-image float-end p-10"
                      alt=""
                    />
                  </div>
                </a>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    </Container>
  );
}

export default Home;
