import React from "react";
import './Header.css';

export default function Header() {
  return (
    <>
      <section className="h-wrapper">
        <div 
        className="flexCenter paddings innerWidth 
        h-container"
        >
          <img 
          src="./media/logo.png" 
          alt="logo" 
          width={100} 
          />

          <div className="flexCenter h-menu">
            <a href="#residencies">Residencies</a>
            <a href="#value">Our Value</a>
            <a href="#contact">Contact Us</a>
            <a href="#start">Get Started</a>
            
            <button className="button">
            <a href='mailto:salmapurple77@gmail.com'>Contact</a>
            </button>
            
          </div>
        </div>
      </section>
    </>
  );
}
