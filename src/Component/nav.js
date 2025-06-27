import { useEffect, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavImg from "../images/NavImg.png";
import "bootstrap/dist/css/bootstrap.min.css";


const CustomNavbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  } );

  return (
    <div
      style={{
        position: "fixed",
        top: "0",
        left: "0",
        width: "100%",
        zIndex: 999,
        transition: "all 0.3s ease",
        paddingTop: "20px",
      }}
    >
      <Navbar
        expand="lg"
        className="bg-body-tertiary shadow-sm px-3 px-sm-4 px-md-2"
        style={{
          borderRadius: scrolled ? "0" : "200px",
          width: "100%",
          transition: "all 0.3s ease",
          marginTop: scrolled ? "-20px" : "0px",
        }}
      >
        <Container fluid>
          {/* Left: Logo + Brand */}
          <Navbar.Brand href="#home" className="d-flex align-items-center gap-2 fw-bold fs-4 mb-0">
            <img src={NavImg} alt="Logo" style={{ width: "40px", height: "30px" }} />
            JustHome
          </Navbar.Brand>

          {/* Toggle Button */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          {/* Collapse Section */}
          <Navbar.Collapse id="basic-navbar-nav">
            {/* Nav Links */}
            <Nav className="mx-auto d-flex flex-column flex-lg-row gap-3 gap-md-2 gap-lg-4 align-items-center justify-content-center">
              <NavDropdown title="Home" id="nav-home" />
              <NavDropdown title="Listing" id="nav-listing" />
              <NavDropdown title="Members" id="nav-members" />
              <NavDropdown title="Blog" id="nav-blog" />
              <NavDropdown title="Page" id="nav-page" />
              <NavDropdown title="Contact" id="nav-contact" />
            </Nav>

            {/* Contact + User + Button */}
            <div className="d-flex flex-column flex-sm-row gap-2 align-items-center justify-content-center mt-3 mt-lg-0 ms-lg-auto">
              <p className="mb-0 fw-semibold text-nowrap d-flex align-items-center d-lg-none d-xl-block">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/724/724664.png"
                  alt="phone"
                  width="16"
                  height="16"
                  className="me-2"
                />
                +66 8838144554
              </p>

              <img
                src="https://cdn-icons-png.flaticon.com/512/747/747376.png"
                alt="user"
                width="20"
                height="20"
              />

              <button
                className="btn btn-outline-dark text-nowrap mt-2 mt-sm-0"
                style={{ borderRadius: "20px", fontWeight: "500" }}
              >
                Add Properties
              </button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default CustomNavbar;
