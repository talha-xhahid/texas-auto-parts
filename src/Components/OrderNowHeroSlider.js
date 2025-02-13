import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import s1 from "../assets/ordernow-hero.png";
import "../styles/heroslider.css";
import arrow from "../assets/arrow.png";
import redarrow from "../assets/red-arrow.png";


const OrderNowHeroSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0); // State to track active slide
  const [isHovered, setIsHovered] = useState(false); // State to track hover

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: false,
    autoplaySpeed: 5000,
    fade: true,
    arrows: false,
    beforeChange: (oldIndex, newIndex) => setActiveIndex(newIndex), // Update active index
    customPaging: (i) => (
      <div className={`custom-dot ${i === activeIndex ? "active" : ""}`}></div>
    ),
    dotsClass: "slick-dots custom-dots",
  };

  return (
    <Slider {...settings} className="hero-slider">
      <div className="slide">
        <img src={s1} alt="Slide 1" />
        <div className="slide-content">
          <h1>Order High-Quality Auto Parts Today</h1>
          <p>Fast and reliable access to domestic & foreign auto parts for repair shops and mobile mechanics.</p>

          <div style={{ display: "flex", gap: "10px" }}>
            <button
              className="contact-button"
              style={{ height: "45px" }}
              onClick={() => window.open("https://nexpart.com/login.php", "_blank")}
            >
              Order From NexPart
              <img src={arrow} style={{ width: "15px", height: "15px" }} alt="arrow" />
            </button>

            <button
              className="contact-button hollow-button"
              style={{ height: "45px" }}
              onClick={() => window.open("https://partstech.com/", "_blank")}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              Order From PartsTech
              <img
                src={isHovered ? arrow : redarrow}
                style={{ width: "16px", height: "16px" }}
                alt="arrow"
              />
            </button>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default OrderNowHeroSlider;
