import React from "react";
import './footer.css';

export default function Footer() {
    return (    
      <div className="footer-wrapper">
      <footer className="footer">
        <div className="container footer-container">
          <div className="row">
            {/* About Us Section */}
            <div className="col-lg-4 col-md-4 col-sm-12 footer-section">
              <h5 className="section-title">About Us</h5>
              <p className="section-text">
                Welcome to Recipe Master, a place where creativity and culinary passion collide! We are very happy to welcome you here, where you may explore a world of flavors and find recipes that can improve your culinary skills. A diversified team of genuine chefs and enthusiastic amateur recipe writers came together to create our website, which is a unique combination of creativity and skill.
              </p>
            </div>
    
            {/* Quick Links Section */}
            <div className="col-lg-4 col-md-4 col-sm-12 footer-section">
              <h5 className="section-title">Quick Links</h5>
              <ul className="links-list">
                <li>
                  <a href="#!" className="footer-link">Frequently Asked Questions</a>
                </li>
                <li>
                  <a href="#!" className="footer-link">Contacts</a>
                </li>
                <li>
                  <a href="#!" className="footer-link">Pricing</a>
                </li>
                <li>
                  <a href="#!" className="footer-link">Where we deliver?</a>
                </li>
              </ul>
            </div>
    
            {/* Opening Hours Section */}
            <div className="col-lg-4 col-md-4 col-sm-12 footer-section">
              <h5 className="section-title">Opening Hours</h5>
              <div className="hours-container">
                <div className="hours-row">
                  <span>Mon - Fri:</span>
                  <span>8am - 9pm</span>
                </div>
                <div className="hours-row">
                  <span>Sat - Sun:</span>
                  <span>8am - 1pm</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          © {new Date().getFullYear()} Copyright:
          <a href="https://mdbootstrap.com/" className="footer-bottom-link">
            MDBootstrap.com
          </a>
        </div>
      </footer>
    </div>
)
};




