import React, { useState, useEffect } from 'react';
import './slider.css';

function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderData, setSliderData] = useState([]);

  useEffect(() => {
    const data = [
      {
        image: 'https://blog.hyperiondev.com/wp-content/uploads/2019/02/Blog-Tech-Events.jpg',
        caption: 'Event Los Angeles',
      },
      {
        image: 'https://images.squarespace-cdn.com/content/v1/5aa31c315417fca3a826f7c0/1520898165287-YYVALWXK5LAP62DA9LIU/SPLUNK_CONF17_01858.jpg',
        caption: 'Event San Fransisco',
      },
      {
        image: 'https://www.travelperk.com/wp-content/uploads/alexandre-pellaes-6vAjp0pscX0-unsplash-1-1-720x480.jpg',
        caption: 'Event Seetle',
      },
      {
        image: 'https://www.incimages.com/uploaded_files/image/1920x1080/getty_495445876_970647970450088_104855.jpg',
        caption: 'Event London',
      },
    ];

    setSliderData(data);
  }, []);

  const handlePrevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? sliderData.length - 1 : currentSlide - 1);
  };

  const handleNextSlide = () => {
    setCurrentSlide(currentSlide === sliderData.length - 1 ? 0 : currentSlide + 1);
  };

  return (
    <div className="slider-container">
      {sliderData.length > 0 && (
        <>
          <div className="slider-image-container">
            <img src={sliderData[currentSlide].image} alt="Tesla" className="slider-image" />
            <div className="slider-caption">{sliderData[currentSlide].caption}</div>
          </div>
          <div className="slider-controls">
            <button onClick={handlePrevSlide} className="slider-control-button prev">&#10094;</button>
            <button onClick={handleNextSlide} className="slider-control-button next">&#10095;</button>
          </div>
        </>
      )}
    </div>
  );
}

export default Slider;
