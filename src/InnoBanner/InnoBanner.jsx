/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './InnoBanner.css'

const InnoBanner = () => {
  return (
    <div className="InnoBannerImage">
      <img src="./images/background_image.jpg" />
      <div className="InnoBodyBg">
        <div className="container-fluid">
            <div className="InnoBannerText">
                <div className="largeText">Innovate your Enterprise with Innovacx</div>
                <div className="smallText">The digital revolution is transforming the global business world at rapid pace</div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default InnoBanner
