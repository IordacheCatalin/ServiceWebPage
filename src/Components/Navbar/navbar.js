import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import styles from "./navbar.module.scss";

import BMW from "../../Assets/ImageLogo/BMW.svg.png";
import Volkswagen from "../../Assets/ImageLogo/Volkswagen.png";
import Audi from "../../Assets/ImageLogo/Audi.png";
import Ford from "../../Assets/ImageLogo/Ford.png";
import Mercedes from "../../Assets/ImageLogo/Mercedes.png";
import Opel from "../../Assets/ImageLogo/Opel.png";
import Peugeot from "../../Assets/ImageLogo/Peugeot.svg";
import Renault from "../../Assets/ImageLogo/Renault.png";
import Seat from "../../Assets/ImageLogo/Seat.png";
import Skoda from "../../Assets/ImageLogo/Skoda.png";
import Porsche from "../../Assets/ImageLogo/Porsche.png";
import FavIcon from "../../Assets/favicon-32x32.png";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function NavBarSite() {
  return (
    <div>
      <div className={styles.Logo}>
        <div className={styles.Email}>
          <img src={FavIcon} alt="My favicon" style={{borderRadius:"50%",marginRight:"15px"}}/>
          <FontAwesomeIcon icon={faEnvelope} />
          <div><a href="mailto:johndoe@gmail.com" style={{textDecoration:"none",color:"white",fontWeight:"600", fontSize:"20px"}}
              >YoursEmail@service.com</a></div>
        </div>
        <div className={styles.Image}>
          <img src={BMW} alt="BMW logo" style={{ width: 70, height: 70 }}></img>
          <img
            src={Opel}
            alt="Opel logo"
            style={{ width: 70, height: 70 }}
          ></img>
          <img
            src={Volkswagen}
            alt="Volkswagen logo"
            style={{ width: 0, height: 70 }}
          ></img>
          <img
            className={styles.hide}
            src={Audi}
            alt="Audi logo"
            style={{ width: 100, height: 70, marginLeft: "-12px" }}
          ></img>
          <img
          className={styles.hide}
            src={Ford}
            alt="Ford logo"
            style={{ width: 140, height: 70 }}
          ></img>
          <img
          className={styles.hide}
            src={Mercedes}
            alt="Mercedes logo"
            style={{ width: 70, height: 70 }}
          ></img>
          <img
          className={styles.hide}
            src={Peugeot}
            alt="Peugeot logo"
            style={{ width: 90, height: 90 }}
          ></img>
          <img
          className={styles.hide}
            src={Seat}
            alt="Seat logo"
            style={{ width: 70, height: 70 }}
          ></img>
          <img
          className={styles.hide}
            src={Skoda}
            alt="Skoda logo"
            style={{ width: 70, height: 70 }}
          ></img>
          <img
          className={styles.hide}
            src={Porsche}
            alt="Porsche logo"
            style={{ width: 70, height: 70 }}
          ></img>
          <img
            className={styles.hide}
            src={Renault}
            alt="Renault logo"
            style={{ width: 100, height: 70 }}
          ></img>
        </div>
      </div>

      <Navbar className={styles.Navbar} variant={"dark"} expand="lg">
        <Container fluid>
          <Navbar.Brand
            href="https://github.com/IordacheCatalin?tab=repositories"
            target="_blank"
          >
            Iordache Catalin
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="/Home">Home</Nav.Link>
              <NavDropdown
                title="Service auto si ITP"
                id="navbarScrollingDropdown"
              >
                <NavDropdown.Item href="/serviciiCard">Servicii</NavDropdown.Item>
                <NavDropdown.Item href="/locatii">Locatii</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/vremea">Vremea</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/Servicii">Oferte service auto</Nav.Link>
              <Nav.Link href="/DespreNoi">Despre noi</Nav.Link>
                <Nav.Link href="/Contact">Contact</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBarSite;
