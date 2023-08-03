import React from 'react'
import './Start.css'

function Start() {
  return (
    <section className="s-wrapper" id='start'>
        <div className="paddings innerWidth s-container">
            <div className="flexColCenter inner-container">
                <span className='primaryText'>Get started with Homyz</span>
                <span className='secondaryText'>Subscribe and find super attractive price quotes from us.
                    <br/>
                    Find your residence soon
                </span>
                <button className='button'>
                    <a href='mailto:salmapurple77@gmail.com'>Get Started</a>
                </button>
            </div>
        </div>
    </section>
  )
}

export default Start