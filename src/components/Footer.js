import React from "react";
import "../styles/Footer.css";
import { FaInstagram, FaTwitter, FaFacebook, FaGlobe } from "react-icons/fa";
import { RiSendPlaneFill } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section logo-section">
        <h2 className="footer-logo">LOGO</h2>
      </div>
      <div className="footer-section links-section">
        <ul>
          <li>Home</li>
          <li>Discovery</li>
          <li>Photos</li>
          <li>Contact</li>
        </ul>
        <ul>
          <li>About</li>
          <li>Help</li>
          <li>Terms</li>
          <li>Guidelines</li>
        </ul>
        <ul>
          <li>Testimonials</li>
          <li>Advertise</li>
          <li>Integrations</li>
          <li>Careers</li>
        </ul>
      </div>
      <div className="footer-section subscribe-section">
        <div className="subscribe-box">
          <input type="email" placeholder="Email" />
          <button className="subscribe-button">
            <RiSendPlaneFill />
          </button>
        </div>
        <p className="subscribe-text">
          Stay in touch with us for the freshest products!
        </p>
      </div>
      <div className="footer-section social-section">
        <FaInstagram />
        <FaTwitter />
        <FaFacebook />
        <FaGlobe />
      </div>
    </footer>
  );
};

export default Footer;
