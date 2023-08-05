import React from "react";
import "./Hero.css";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="he-warpper">
      <div className="paddings innerWidth flexCenter he-container">
        {/* left side */}
        <div className="flexColStart he-left">
          <div className="he-title">
            <div className="orange-circle" />
            <motion.h1
            initial={{y: "2.5rem", opacity: 0}}
            animate={{y: 0, opacity: 1}}
            transition={{
              duration:2,
              type:"spring"
            }}
            >
              Discover <br />
              Most Suitable <br />
              Property
            </motion.h1>
          </div>

          <div className="flexColStart he-desc">
            <span className="secondaryText">Find a variety of properties that suit you very easilty</span>
            <span className="secondaryText">Forget all difficulties in finding a residence for you</span>
          </div>

          <div className="flexCenter he-search">
            <HiLocationMarker color="var(--blue)" size={25} />
            <input type="text" />
            <button className="button">search</button>
          </div>

          <div className="flexCenter he-stats">
            <div className="flexColCenter he-stat">
              <span>
                <CountUp start={8800} end={9000} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">Premium Product</span>
            </div>

            <div className="flexColCenter he-stat">
              <span>
                <CountUp start={1950} end={2000} duration={5} />
                <span>+</span>
              </span>
              <span className="secondaryText">Happy Customer</span>
            </div>

            <div className="flexColCenter he-stat">
              <span>
                <CountUp start={5} end={28} duration={6} />
                <span>+</span>
              </span>
              <span className="secondaryText">Awards Winning</span>
            </div>
          </div>
        </div>

        {/* right side image side */}
        <div className="flexCenter he-right">
          <motion.div 
          initial={{x: '7rem', opacity: 0}}
          animate={{x: 0, opacity:1}}
          transition={{
            duration:2,
            type:"spring"
          }}
          className="img-container">
            <img src="./media/hero-image.png" alt="home" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
