import React from "react";
import TEDXIMG from "../../assets/TEDx White_T 4.png";
import TLIMG from "../../assets/Group 1437254103.png";
import COLLABIMG from "../../assets/Group 1437254104.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function MobileHeader({ activeMenu, onMenuClick }) {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="navbar-dark"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        margin: "auto",
        fontSize: "1vw",
        marginBottom: "5vw",
        flexDirection: "row",
        top: 0,
        zIndex: "10",
        padding: "10px 20px",
      }}
    >
      <Container
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "#1d1d1d",
            padding: "0 1vh",
            borderRadius: "5px",
            fontWeight: "700",
            gap: "10px",
          }}
        >
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img src={TEDXIMG} alt="TEDX image" width="70px" />
          </a>
          <img src={COLLABIMG} alt="Collab image" width="50px" />
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img src={TLIMG} alt="TL image" width="70px" />
          </a>
        </div>

        {/* Menu Toggle Button */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{ boxShadow: "none" }} />
      </Container>

      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav
          className="me-auto"
          style={{
            alignItems: "center",
            backgroundColor: "#1d1d1d",
            borderRadius: "5px",
            width: "100%",
          }}
        >
          <Nav.Link
            href="#"
            onClick={() => onMenuClick("home")}
            style={{
              padding: "1.5vh",
              display: "block",
              width: "100%",
              textAlign: "center",
              borderBottom: "1px solid #4d4d4d",
              color: activeMenu === "home" ? "#fc5103" : "white",
              textDecoration: "none",
              fontSize: "1.8vh",
            }}
          >
            Home
          </Nav.Link>
          <Nav.Link
            href="#"
            onClick={() => onMenuClick("committees")}
            style={{
              padding: "1.5vh",
              display: "block",
              width: "100%",
              textAlign: "center",
              borderBottom: "1px solid #4d4d4d",
              color: activeMenu === "committees" ? "#fc5103" : "white",
              textDecoration: "none",
              fontSize: "1.8vh",
            }}
          >
            Committees
          </Nav.Link>
          <Nav.Link
            style={{
              padding: "1.5vh",
              display: "block",
              width: "100%",
              textAlign: "center",
              borderBottom: "1px solid #4d4d4d",
              color: "white",
              cursor: "pointer",
              backgroundColor: "#1d1d1d",
              fontSize: "1.8vh",
            }}
          >
            Contact
          </Nav.Link>
          <Nav.Link as="div">
            <button
              style={{
                padding: "1vh 2vh",
                backgroundColor: "#3d3d3d",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                fontWeight: "900",
                fontSize: "16px",
                display: "flex",
              }}
            >
              Register Now
            </button>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default MobileHeader;

