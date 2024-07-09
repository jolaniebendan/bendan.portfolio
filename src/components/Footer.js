import React from "react";
import {
  Navbar,
  Nav,
  Container,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";

function AppNavbar() {
  const renderTooltip = (props, message) => (
    <Tooltip {...props}>{message}</Tooltip>
  );
  return (
    <Navbar className="py-4 px-1">
      <Container className="px-5 ms-auto">
        <Navbar.Brand>
          <p className="f fw-bold mb-0 pb-0">Jolanie Bendan 2024</p>
        </Navbar.Brand>
      
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
