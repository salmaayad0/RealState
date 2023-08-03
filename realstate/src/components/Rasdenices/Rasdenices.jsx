import React from 'react'
import './Rasdenices.css'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import 'swiper/css'
import data from '../../utils/slider.json'
import { sliderSettings } from '../../utils/commen'

export default function Rasdenices() {
  return (
    <>
    <section className="r-warpper" id='residencies'>
        <div className="paddings innerWidth r-container">
          <div className="flexColStart r-head">
            <span className='orangeText'>
                Best Choices
                </span>
            <span className='primaryText'>
                Popular Residencies
                </span>
          </div>

          <Swiper {...sliderSettings}>
            <SliderButton />
            {
                data.map((card, i) => ( 
                <SwiperSlide key={i}>
                    <div className="flexColStart r-card">
                        <img src={card.image} alt={card.name} />
                        <span className="secondaryText r-price">
                            <span>{card.price}</span>
                            <span style={{color: "orangered"}}> $</span>
                        </span>

                        <span className="primaryText">{card.name}</span>
                        <span className="secondaryText">{card.detail}</span>
                    </div>
                </SwiperSlide>
                ))
            }
          </Swiper>
        </div>
      </section>
    </>
  )
}

const SliderButton = () => {
    const swiper = useSwiper();
    return (
        <div className="flexCenter r-buttons">
            <button onClick={_=> swiper.slidePrev()}>&lt;</button>
            <button onClick={_=> swiper.slideNext()}>&gt;</button>
        </div>
    )
}
