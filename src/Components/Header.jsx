import React from "react";
import { Carousel, Container, Nav,Navbar,} from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import Desplegable from "./Desplegable";

import { FaSistrix} from 'react-icons/fa';

const Header = (props) => {

  return (
    <>
    <Navbar bg="light" className="" sticky="top">
      <Container fluid >
        <div>
        <Desplegable />
      <Navbar.Brand href="#home">
              <img
                src="./images/logo.png"
                alt="logo"
                height="50"
                className="mt-2"
              />
              </Navbar.Brand>
        </div>
          <div className="">
            <Nav className="d-flex justify-content-around">
              <div className="ocultar-busqueda input-wrapper">
                <input className="form-control"
                    type="text"
                    placeholder="Buscar articulo..."
                    value={props.search}
                    onChange={props.searcher}
                  />
                  <FaSistrix className="input-icon"/>
              </div>
              <div className="d-flex align-items-around">
                <ul>
                  <li>
                    <Link
                      to="/error404"
                      className="icono-header text-center m-2"
                    >
                      <FaFacebookF />
                    </Link>
                    <Link
                      to="/error404"
                      className="icono-header text-center m-2"
                    >
                      <FaTwitter />
                    </Link>
                    <Link
                      to="/error404"
                      className="icono-header text-center m-2"
                    >
                      <FaInstagram />
                    </Link>
                  </li>
                </ul>
              </div>
            </Nav>
          </div>
      </Container>
      </Navbar>
      <Container>
        <div className="container-fluid carousel-inner mt-3">
          <Carousel>
            <Carousel.Item interval={1000}>
              <img className="d-block w-100" src="../images/covid.jpg" alt="" height={400} />
              <Carousel.Caption>
                <h3 className="title">Los casos de covid-19 aumentaron un 50% en Tucum??n</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
              <img className="d-block w-100" src="../images/enfermeria.jpg" alt="" height={400} />
              <Carousel.Caption>
                <h3 className="title">
                  Enfermer??a: exigen que se acelere el pase de escuela a
                  facultad y temen que se trunque el proyecto
                </h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src="../images/soja.jpg" alt="" height={400} />
              <Carousel.Caption>
                <h3 className="title">
                  El Banco Central compr?? U$S192 millones tras la puesta en
                  marcha del d??lar soja
                </h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
        

      </Container>
    </>
  );
};

export default Header;
