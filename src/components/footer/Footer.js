import React, { Component } from "react";
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <p className="footer-text">
          Lorem ipsum dolor sit amet consectetur. Nulla sit viverra morbi vitae
          blandit orci potenti vulputate. Leo erat maecenas vitae elementum
          ultricies nullam.
        </p>
        <div className="footer-social-icon">
          <a href="https://linkedin.com/in/sakibur-rahman-3b301023b">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="https://www.facebook.com/sakib071">
            <i className="fa-brands fa-facebook-f"></i>
          </a>
          <a href="https://github.com/sakibur-rahman-333">
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="#">
            <i className="fa-brands fa-twitter"></i>
          </a>
        </div>
        <hr className="footer-line" />
        <p>Developed by Sakibur Rahman, CSE, BSMRSTU</p>
      </div>
    );
  }
}

export default Footer;
