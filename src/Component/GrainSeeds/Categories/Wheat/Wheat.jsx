import React, { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { FaPlus, FaMinus } from 'react-icons/fa';


import { Navigation, Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Core Swiper styles
import "swiper/css/navigation"; // Optional for navigation buttons
import "swiper/css/pagination"; // Optional for pagination
import WheatTopHeader from './WheatTopHeader';

const Wheat = () => {

  const [activeKey, setActiveKey] = useState(null);

  // Toggle function to handle icon switching
  const toggleIcon = (key) => {
    setActiveKey(activeKey === key ? null : key);
  };
    const sliderItems = [
        {
          href: "rice.html",
          src: "/img/products/grains-seeds/Types-of-RIce.jpg",
          title: "Rice",
        },
        {
          href: "sella-basmati-rice.html",
          src: "/img/products/grains-seeds/Sella%20Basmati%20Rice.jpg",
          title: "Sella Basmati Rice",
        },
        {
          href: "goldan-sella-basmati-rice.html",
          src: "/img/products/grains-seeds/Golden%20Sella%20Basmati%20Rice.jpg",
          title: "Golden Sella Basmati Rice",
        },
        {
          href: "brown-rice.html",
          src: "/img/products/grains-seeds/Brown%20Rice.jpg",
          title: "Brown Rice",
        },
        // Add more items as needed
      ];
    return (
        <div>
            <WheatTopHeader></WheatTopHeader>
            <div className="job-area job-area-two job-area-three">
  <div className="container-fluid">
    <div className="row m-0">
      <div className="col-lg-6">
        <div className="job-img">
          <img src="/img/products/grains-seeds/wheat.jpg" alt="cattle feed" />
        </div>
      </div>
      <div className="col-lg-6">
        <div className="job-content job-content_02">
          <div className="section-title">
            <span className="sub-title">FORTUNE INDUSTRIES</span>
            <h1 className="log_1">Wheat</h1>
          </div>
          <p>
            Wheat is a staple grain that comes in various varieties. It is a rich source of complex carbohydrates, providing sustained energy for the body. From bread, wheat is a versatile ingredient that can be incorporated into a wide range of recipes, making it a fundamental part of many diets worldwide.<br />
            <strong style={{ fontSize: '20px' }}>Manufacturer, Exporters, Suppliers</strong><br />
            <strong>Network Areas Related keywords:</strong> Frozen food, Eat Food, etc.<br />
            <strong>USA:</strong> Montana, Nevada, New Jersey, New Mexico, Texas, South Dakota, Alaska, Florida, etc.<br />
            <strong>Others:</strong> China, Myanmar, Nepal, Maldives, Bhutan, Bangladesh, UK, etc.<br />
            <strong>Indian Areas:</strong> Bihar, Assam, Gujarat, Himachal Pradesh, Delhi, Mumbai, Orissa, Punjab, West Bengal, Madhya Pradesh, Rajasthan, Sikkim, West Bengal, Haryana, Andhra Pradesh, Jharkhand, Uttarakhand, Goa, etc.<br />
          </p>
          <a className="cmn-btn" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Inquiry Now
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

<section className="faq-area pt-100 pb-20">
      <div className="container">
        <div className="row faq-wrap" style={{ alignItems: 'center' }}>
          <div className="col-lg-9">
            <div className="faq-head section-title text-start">
              <span className="sub-title">Wheat</span>
              <h3 className="log_3">Product Description</h3>
            </div>
            <div className="faq-item pb-70">
              <Accordion activeKey={activeKey} onSelect={(key) => setActiveKey(key)}>
                <Accordion.Item eventKey="0" className="mb-2">
                  <Accordion.Header onClick={() => toggleIcon('0')}>
                    Usage
                    {activeKey === '0' ? <FaMinus className="custom-icon" /> : <FaPlus className="custom-icon" />}
                  </Accordion.Header>
                  <Accordion.Body>
                    Wheat, in its various forms, is incredibly versatile and can be used in numerous culinary applications. Flour made from wheat is a staple ingredient in baking, providing the base for bread, cakes, pastries, and other baked goods. It can also be used to thicken sauces and soups.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1" className="mb-2">
                  <Accordion.Header onClick={() => toggleIcon('1')}>
                    Nutrition Data
                    {activeKey === '1' ? <FaMinus className="custom-icon" /> : <FaPlus className="custom-icon" />}
                  </Accordion.Header>
                  <Accordion.Body>
                    Wheat, in its various forms, is a nutrient-dense grain that provides several essential nutrients. A 100-gram serving of wheat contains approximately 340 calories, primarily from carbohydrates. It is a rich source of dietary fiber, with around 12 grams per serving, promoting healthy digestion and aiding in weight management.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2" className="mb-2">
                  <Accordion.Header onClick={() => toggleIcon('2')}>
                    Other Details
                    {activeKey === '2' ? <FaMinus className="custom-icon" /> : <FaPlus className="custom-icon" />}
                  </Accordion.Header>
                  <Accordion.Body>
                    Whole wheat is particularly nutritious as it contains all three parts of the grain: the bran, germ, retaining valuable fiber, vitamins. It is a good source of dietary fiber, aiding in digestion, promoting a healthy digestive system. Wheat is also a decent source of protein, containing essential amino acids necessary for growth.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>

              {/* Internal CSS */}
              <style jsx>{`
                /* Hide default Bootstrap accordion icon (the caret/arrow) */
                .accordion-button::after {
                  display: none !important;
                }

                /* Add some spacing to the right for custom icon */
                .accordion-header .custom-icon {
                  margin-left: auto; /* Move icon to the right end */
                  font-size: 1.2rem; /* Adjust size as needed */
                }

                .accordion-header {
                  display: flex; /* Use flexbox for alignment */
                  align-items: center; /* Center the content vertically */
                }

                /* Responsive margin adjustments */
                @media (max-width: 768px) {
                  .mb-2 {
                    margin-bottom: 10px; /* Larger gap on smaller screens */
                  }
                }

                @media (min-width: 769px) {
                  .mb-2 {
                    margin-bottom: 5px; /* Smaller gap on larger screens */
                  }
                }
              `}</style>
            </div>
          </div>
        </div>
      </div>
    </section>

<section className="service-area-two service-area-three pb-70 pt-70 service-area-two_02">
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div className="section-title text-start">
          <span className="sub-title">Wheat</span>
          <h3 className="log_3">Product Advantages</h3>
        </div>
      </div>
      <div className="col-md-5 me-auto ms-auto">
        <div className="service-item service-item_02">
          <i className="flaticon-mechanical-arm"></i>
          <h3>
            <a href="javascript:void(0);">Versatile ingredient</a>
          </h3>
          <p>Wheat is a versatile ingredient used in a wide range of culinary applications.</p>
        </div>
      </div>
      <div className="col-md-5 me-auto ms-auto">
        <div className="service-item service-item_02">
          <i className="bx bx-bulb"></i>
          <h3>
            <a href="javascript:void(0);">Weight management</a>
          </h3>
          <p>The fiber content in wheat helps create a feeling of fullness, which can aid in weight management by reducing overeating and controlling cravings.</p>
        </div>
      </div>
      <div className="col-md-5 me-auto ms-auto">
        <div className="service-item service-item_02">
          <i className="flaticon-automation"></i>
          <h3>
            <a href="javascript:void(0);">Heart health</a>
          </h3>
          <p>Whole wheat is associated with improved heart health due to its fiber content, which helps lower cholesterol levels and reduce the risk of cardiovascular diseases.</p>
        </div>
      </div>
      <div className="col-md-5 me-auto ms-auto">
        <div className="service-item service-item_02">
          <i className="flaticon-lab-tool"></i>
          <h3>
            <a href="javascript:void(0);">Dietary fiber</a>
          </h3>
          <p>Wheat is a good source of dietary fiber, particularly when consumed in its whole grain form.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="counter-area pt-100">
<div class="container">
<div class="row align-iems-center">
<div class="col-lg-12">
<div class="counter-text text-center section-title">
<span class="sub-title">FORTUNE INDUSTRIES</span>
<h3 class="log_3-w">Related Products of Grains & Seeds</h3>
</div>
</div>
</div>
</div>
</section>
<div className="foreign-area">
        <div className="container-fluid">
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            loop={true}
            spaceBetween={30}
            slidesPerView={3}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {sliderItems.map((item, index) => (
              <SwiperSlide key={index}>
                <div
                  className="foreign-item"
                  style={{ paddingBottom: "0px", boxShadow: "none" }}
                >
                  <div
                    className="team-item"
                    style={{ paddingBottom: "0px", marginBottom: "0px" }}
                  >
                    <a href={item.href}>
                      <img
                        src={item.src}
                        alt={item.title}
                        style={{ width: "100%" }}
                      />
                    </a>
                    <a href={item.href} className="product-heading">
                      <h3>{item.title}</h3>
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>


        </div>
    );
}

export default Wheat;
