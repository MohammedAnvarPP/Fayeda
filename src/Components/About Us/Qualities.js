import React from 'react'
import "./Qualities.css"
const Qualities = ({icon,heading,description}) => {
  return (
    <div className='Qualities-column'>
        <div className="Qualities-field">
            <div className="Qualities-icon">
                <img src={icon} alt="" className='image-fluid' />

            </div>
            <div className="about-content-heading">
                <h4 className='about-heading'>{heading}</h4>
                <p>{description}</p>
            </div>
        </div>
       
        </div>
  )
}

export default Qualities