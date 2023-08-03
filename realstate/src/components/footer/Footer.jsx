import React from "react";
import './Footer.css'

function Footer() {
  return (
    <section className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        <div className="flexColStart f-left">
          <img src="./media/logo2.png" alt="homz" width={120} />
          <span className="secondaryText">
            Our vision is to make all people <br />
            the best place to live for them.
          </span>
        </div>
        <div className="flexColStart f-right">
          <span className="primaryText">Information</span>
          <span className="secondaryText">145 New York, FL 5467, USA</span>

          <div className="flexCenter f-menu">
            <span className="orangeText">Property </span>
            <span className="orangeText">Services </span>
            <span className="orangeText">Product </span>
            <span className="orangeText">About Us </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
