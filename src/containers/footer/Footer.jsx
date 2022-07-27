import React from "react";
import "./footer.scss";
import gpt3Logo from "../../assets/logo.svg";

const Footer = () => {
  return (
    <div className="gpt3__footer section__padding">
      <div className="gpt3__footer-heading">
        <h1 className="gradient__text">
          Lorem Ipsum is simply dummy text of the printing.
        </h1>
      </div>
      <div className="gpt3__footer-btn">
        <p>Request early access</p>
      </div>
      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <img src={gpt3Logo} alt="logo" />
          <p>Lorem Ipsum is simply dummy text of the printing.</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Links</h4>
          <p>Link 1</p>
          <p>Link 2</p>
          <p>Link 3</p>
          <p>Link 4</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Company</h4>
          <p>Company 1</p>
          <p>Company 2</p>
          <p>Company 3</p>
          <p>Company 4</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Get in touch</h4>
          <p>Link 1</p>
          <p>Link 2</p>
          <p>Link 3</p>
          <p>Link 4</p>
        </div>
      </div>
      <div className="gpt3__footer-copyright">
        <p>All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
