import React, { useState } from "react";
import "./Header.css";
import { BiMenuAltRight } from "react-icons/bi";
import OutsideClickHandler from "react-outside-click-handler/build/OutsideClickHandler";

export default function Header() {
  const [menuOpened, setMenuOpened] = useState(false);

  const getMenuStyles = (menuOpened) => {
    if (document.documentElement.clientWidth <= 880) {
      return { right: !menuOpened && "-100%" };
    }
  };

  return (
    <>
      <section className="h-wrapper">
        <div
          className="flexCenter paddings innerWidth 
        h-container"
        >
          <img src="./media/logo.png" alt="logo" width={100} />

          <OutsideClickHandler
            onOutsideClick={()=> setMenuOpened(false)}
          >
            <div
              className="flexCenter h-menu"
              style={getMenuStyles(menuOpened)}
            >
              <a href="#residencies">Residencies</a>
              <a href="#value">Our Value</a>
              <a href="#contact">Contact Us</a>
              <a href="#start">Get Started</a>

              <button className="button">
                <a href="mailto:salmapurple77@gmail.com">Contact</a>
              </button>
            </div>
          </OutsideClickHandler>

          <div
            className="menu-icon"
            onClick={(_) => setMenuOpened((prev) => !prev)}
          >
            <BiMenuAltRight size={20} />
          </div>
        </div>
      </section>
    </>
  );
}
