import React from "react";
import "./Footer.css";
import { NavLink } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaDribbble,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="site-footer bg-dark">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h6>About</h6>
            <p className="text-justify">
              Scanfcode.com <i>CODE WANTS TO BE SIMPLE </i> is an initiative to
              help the upcoming programmers with the code. Scanfcode focuses on
              providing the most efficient code or snippets as the code wants to
              be simple. We will help programmers build up concepts in different
              programming languages that include C, C++, Java, HTML, CSS,
              Bootstrap, JavaScript, PHP, Android, SQL and Algorithm.
            </p>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Categorias</h6>
            <ul className="footer-links">
              <li>
                <NavLink className="link" to="/categoria/celulares">
                  Celulares
                </NavLink>
              </li>
              <li>
                <NavLink className="link" to="/categoria/accesorios">
                  Accesorios
                </NavLink>
              </li>
              <li>
                <NavLink className="link" to="/categoria/tablets">
                  Tablets
                </NavLink>
              </li>
              <li>
                <NavLink className="link" to="/categoria/computadores">
                  Computadores
                </NavLink>
              </li>
              <li>
                <NavLink className="link" to="/categoria/videojuegos">
                  Videojuegos
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul className="footer-links">
              <li>
                <a className="link" href="">
                  About Us
                </a>
              </li>
              <li>
                <a className="link" href="">
                  Contact Us
                </a>
              </li>
              <li>
                <a className="link" href="">
                  Contribute
                </a>
              </li>
              <li>
                <a className="link" href="">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a className="link" href="">
                  Sitemap
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">
              Copyright &copy; 2023 All Rights Reserved by
              <NavLink to="/" className="link">
                {" "}
                PhoneMax
              </NavLink>
              .
            </p>
          </div>

          <div className="col-md-4 col-sm-6 col-xs-12">
            <ul className="social-icons">
              <li>
                <a className="facebook" href="#">
                  <FaFacebookF />
                </a>
              </li>
              <li>
                <a className="twitter" href="#">
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a className="dribbble" href="#">
                  <FaDribbble />
                </a>
              </li>
              <li>
                <a className="NavLinkedin" href="#">
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
