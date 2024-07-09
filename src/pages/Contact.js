import React from "react";
import { Form, Button, Container , } from "react-bootstrap";

function Contact() {
  return (
    <Container className="px-5 mx-4">
      <h1 className="abouts">Contact</h1>
      <h6>If you have any questions, feel free to reach out.</h6>
      <hr></hr>
      <ul>
        <li className="fw-bold">Email:</li>
        jolaniebendan@gmail.com
      </ul>
      <ul>
        <li className="fw-bold">Phone Number:</li>
        09156294431
      </ul>
      <hr></hr>
      <br></br>
    </Container>
  );
}

export default Contact;
