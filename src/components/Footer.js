import React from "react";
import "./Footer.css"; // Make sure to create and link Footer.css

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>FlickFinder</h3>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Products</h3>
          <ul>
            <li>TV Show</li>
            <li>Web Series</li>
            <li>Hollywood</li>
            <li>Bollywood</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Resources</h3>
          <ul>
            <li>FAQs</li>
            <li>Search Movie</li>
          </ul>
        </div>

        <div className="footer-section newsletter">
          <h3>Newsletter</h3>
          <input type="email" placeholder="mail@pageone.com" />
          <div className="checkbox-container">
            <input type="checkbox" id="agree" />
            <label htmlFor="agree">
              I agree with <a href="/terms">Privacy Policy</a> and{" "}
              <a href="/terms">Terms of Condition</a>
            </label>
          </div>
          <button className="send-button">Send</button>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="social-icons">
          <i className="fab fa-instagram"></i>
          <i className="fab fa-twitter"></i>

          <i className="fab fa-youtube"></i>
          <i className="fab fa-facebook"></i>
        </div>
        <p>
          © FlickFinder 2024. All rights reserved. Developed by{" "}
          <a href="/terms">Shubham Mishra</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;