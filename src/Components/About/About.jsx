
import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about-img'/>
        <img src={play_icon} alt="" className='play-icon' onClick={()=>{setPlayState(true)}}/>
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium voluptatibus qui, ipsum 
           odio alias perspiciatis animi eum sunt dolorum facere beatae tempora sed adipisci blanditiis 
           totam modi quam maiores recusandae.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam rem porro veritatis
           distinctio nulla tenetur impedit nemo eligendi maxime architecto, consectetur cupiditate
           sequi soluta amet, sint quis aut, aperiam sunt.</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda quae odio debitis
           eveniet aperiam dolorum minima quaerat, dolor quidem tenetur asperiores odit repudiandae
           voluptas. Iure qui dolorem facere tenetur laborum.</p>
      </div>
    </div>
  )
}

export default About
