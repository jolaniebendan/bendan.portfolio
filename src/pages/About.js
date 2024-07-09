import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import portfolio from "../images/web.png";
import uno from "../images/php.png";
import dos from "../images/cp.png";
import tres from "../images/java.png";
import kwatro from "../images/html.png";
import singko from "../images/js.png";
import six from "../images/css.png";
import "./Style.css";

function About() {
  return (
    <Container className="px-8 mx-5">
      <Container className="px-4">
        <h1 className="abouts">About</h1>
        <h3>Hello! I'm Jolanie M. Bendan, a Future Web Designer</h3>
        <hr />
        <br />

        <Row>
          <Col md={6}>
            <p className="del">
              I am a future web designer, currently pursuing a Bachelor of Science in Information Technology 
              at Central Philippines State University, laying a strong foundation for a promising career in the dynamic field of web design. 
              My academic journey equips me with essential skills in programming, web development, database management, 
              and software engineering. Specialized courses in graphic design, user experience (UX), and user interface (UI) design,
              along with practical projects and internships, provide hands-on experience and a robust portfolio. With a blend of 
              technical expertise and creative flair, I am poised to excel in various career paths, such as a freelance web designer,
              a front-end developer, or a UI/UX specialist. My proactive involvement in tech clubs, hackathons, and continuous 
              learning ensures I stay updated with industry trends. As I step into the professional world,
              my comprehensive education and practical experience will enable me to create intuitive, visually appealing, 
              and highly functional websites, making a significant impact in the digital landscape.
            </p>

            <div className="social-links mt-4">
              <h4><b>Social Links</b></h4>
              <ul className="list-unstyled">
                <li>→ <a href="https://facebook.com">Facebook</a></li>
                <br></br>
                <li>→ <a href="https://github.com">Github</a></li>
                <br></br>
                <li>→ <a href="https://instagram.com">Instgram</a></li>
                <br></br>
                <li>→ <a href="https://tiktok.com">Tiktok</a></li>
                <br></br>
                
              </ul>
            </div>
          </Col>

          <Col md={6}>
            <div className="project-image overflow-hidden">
              <img
                src={portfolio} 
                alt="Portfolio"
                className="border rounded-4 img-fluid scale"
              />
            </div>
            <br></br>
            <h4><b> Technology Stack</b></h4>
            <Row className="small-pictures mt-3">
              <Col xs={4} md={4}>
                <div className="small-picture">
                  <img src={uno} alt="Small Pic 1" className="img-fluid border rounded-4" />
                </div>
              </Col>
              <Col xs={4} md={4}>
                <div className="small-picture">
                  <img src={dos} alt="Small Pic 2" className="img-fluid border rounded-4" />
                </div>
              </Col>
              <Col xs={4} md={4}>
                <div className="small-picture">
                  <img src={tres} alt="Small Pic 3" className="img-fluid border rounded-4" />
                </div>
              </Col>
              <Col xs={4} md={4}>
                <div className="small-picture">
                  <img src={kwatro} alt="Small Pic 4" className="img-fluid border rounded-4" />
                </div>
              </Col>
              <Col xs={4} md={4}>
                <div className="small-picture">
                  <img src={singko} alt="Small Pic 5" className="img-fluid border rounded-4" />
                </div>
              </Col>
              <Col xs={4} md={4}>
                <div className="small-picture">
                  <img src={six} alt="Small Pic 6" className="img-fluid border rounded-4" />
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
        <br />

        <div className="container border-top"></div>
      </Container>
    </Container>
  );
}

export default About;
