import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Reviews.css"
import { FaStar } from "react-icons/fa";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000
  };
  return (
    <>
      <Slider {...settings}>
        <div className="mobile-reviews">
          <div className="main-reviewer">
            <div className="reviewers">Yuhao S.</div>
            <div className="review-stars"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
          </div>
          <p className="review-content">Helen takes the time to understand individual needs and tailors every aspect of the program accordingly. Her knowledge is not only impressive but also deeply practical, making the journey towards a healthier lifestyle both educational and enjoyable.</p>
        </div>
        <div className="mobile-reviews">
          <div className="main-reviewer">
            <div className="reviewers">Yinfei Z.</div>
            <div className="review-stars"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
          </div>
          <p className="review-content">I've been training with Helen for years. She has always been patient, designed the training plan to suit my needs, and provided valuable information regarding my diet.</p>
        </div>
        <div className="mobile-reviews">
          <div className="main-reviewer">
            <div className="reviewers">Jon L.</div>
            <div className="review-stars"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
          </div>
          <p className="review-content">Knowledgeable, attentive, and will leave you feeling healthier coming out of the gym!</p>
        </div>
      </Slider>
      <a className="reviews-link" target="_blank" href="https://www.yelp.com/biz/foothill-physique-studio-monrovia?q=helen" style={{marginTop: "15px"}}>More Yelp reviews</a>
    </>
  );
}
