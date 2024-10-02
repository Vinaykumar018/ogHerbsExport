import React, { useEffect } from 'react';
import $ from 'jquery';
import 'owl.carousel';
import 'owl.carousel/dist/owl.carousel.min.css';
import 'owl.carousel/dist/owl.theme.default.min.css';
import img_first from '../assets/img/banner-img/spices-masala.jpg';
import img_second from '../assets/img/banner-img/spices-masala.jpg';
import img_third from '../assets/img/banner-img/spices-masala.jpg';
const Slider = () => {
  useEffect(() => {
    $('.owl-carousel').owlCarousel({
      items: 1,
      loop: true,
      margin: 10,
      nav: true
    });
  }, []);

  return (
    <div className="owl-carousel">
      <div className="item"><img src={img_first} alt="Slide 1" /></div>
      <div className="item"><img src={img_second} alt="Slide 2" /></div>
      <div className="item"><img src={img_third} alt="Slide 3" /></div>
    </div>
  );
};

export default Slider;
