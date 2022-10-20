import React from 'react'
import './about.scss'
import Me from './../../assets/me-about.jpg'
import Award from './../../assets/award.png'

const About = () => {
  
  return (
    <div className="about">
      <div className="about__left">
        <div className="about__card bg"></div>
        <div className="about__card">
          <img src={Me} alt="About" className='about__image'/>
        </div>
      </div>

      <div className="about__right">
        <h1 className="about__title">About Me</h1>
        <p className="about__sub">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, molestias.
        </p>
        <p className="about__desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit excepturi facere ratione, doloremque animi molestias, sit doloribus labore officia eligendi rem saepe quasi eveniet dicta ea? Ducimus in at tenetur?
        </p>

        <div className="about__award">
          <img src={Award} alt="Award" className='about__award__img' />
          <div className="about__award__texts">
            <h4 className="about__award__title">
              Lorem, ipsum dolor.
            </h4>
            <p className="about__award__desc">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium repellendus omnis optio eius eaque!
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default About