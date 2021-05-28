import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/logo_mate.png";
import play from "../assets/icons/play.svg";
function Portada() {
  return (
    
       <Container
        fluid
        className="background h-100 d-flex flex-column justify-content-center align-items-center align-content-center"
      >
        <Row className="altura-max d-flex flex-column justify-content-center align-items-center">
          <Col className="d-flex flex-column justify-content-center align-items-center">
            <img src={logo} className="logo-break" />
            <h1 className="texto-break display-2">20:00</h1>
            <div>
            <img src={play} className="play" />
          </div>
            {/* ACA VA CRONOMETRO CON 20 MINUTOS */}
          </Col>
        </Row>
      </Container>
   
  );
}

export default Portada;
