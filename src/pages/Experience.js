import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Card } from 'react-bootstrap'; 

// Move imports to the top level of the file
import one from "../images/dp1.jpg";
import two from "../images/dp2.jpg";
import three from "../images/dp3.jpg";
import four from "../images/class.jpg";
import radio from "../images/radio.jpg";
import defense from "../images/defense.jpg";

function Experience() {
  return (
    <div className="px-5 mx-4">
      <h1 className="abouts">Experience</h1>
      <hr />

      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2>Internship</h2>
              <h5 className="card-title">Department of Public Works and Highways, Negros Occidental 3rd District Engineering Office</h5>
              <p className="card-text">Performed data encoding in different Microsoft Office.</p>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card mb-5">
            <div className="card-body">
              <h2>College of Computer Studies</h2>
              <h5 className="card-title">Central Philippines State University - Main Campus</h5>
              <p className="card-text mb-4">Bachelor of Science in Information Technology.</p>
              
            </div>
          </div>
        </div>
      </div>

{/* sample */}
<Row lg={3} className="g-2 mt-lg-2 ">
  <Col>
    <Card className="overflow-hidden">
      <img src={one} alt="Webdesigner Depot" fluid className="img-fluid scale" />
       <div className="text-center">
       <h5 className="card-title fw-bold ">First Day as a Trainee</h5>
       </div>
    </Card>
  </Col>
  <Col>
    <Card className="overflow-hidden">
      <div className="overflow-hidden">
    <img src={two} alt="Design Shack" fluid className="img-fluid scale" />
    </div>
      <div className="text-center">
      <h5 className="card-title fw-bold">DPWH Clean-up Drive</h5>
      </div>
    </Card>
  </Col>
  <Col>
  <Card className="overflow-hidden">
      <div className="overflow-hidden">
      <img src={three} alt="Codrops" fluid className="img-fluid scale" />
    </div>
      <div className="text-center">
      <h5 className="card-title fw-bold">Last Day of OJT Training</h5>
      </div>
    </Card>
  </Col>
</Row>
  <h1 className="text-center mt-5">A College Student Journey</h1>
  <Row lg={3} className="g-2 mt-lg-2 ">
  <Col>
    <Card className="overflow-hidden">
      <img src={four} alt="Webdesigner Depot"fluid className="img-fluid scale" />
       <div className="text-center">
       <h5 className="card-title fw-bold">Face to Face Classes</h5>
       </div>
    </Card>
  </Col>
  <Col>
    <Card className="overflow-hidden">
      <div className="overflow-hidden">
      <img src={radio} alt="Design Shack" fluid className="img-fluid scale" />
    </div>
      <div className="text-center">
      <h5 className="card-title fw-bold">Radyo Muscovado Visits</h5>
      </div>
    </Card>
  </Col>
  <Col>
  <Card className="overflow-hidden">
      <div className="overflow-hidden">
      <img src={defense} alt="Codrops" fluid className="img-fluid scale" />
    </div>
      <div className="text-center">
      <h5 className="card-title fw-bold">Capstone Final Defense</h5>
      </div>
    </Card>
  </Col>
</Row>
{/* sample */}
      <hr />
    </div>
  );
}

export default Experience;
