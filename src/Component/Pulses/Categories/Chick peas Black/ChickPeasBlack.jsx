import React, { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { FaPlus, FaMinus } from 'react-icons/fa';

import { Navigation, Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Core Swiper styles
import "swiper/css/navigation"; // Optional for navigation buttons
import "swiper/css/pagination"; // Optional for pagination
import ChickPeasBlackTopHeader from './ChickPeasBlackTopHeader';
const ChickPeasBlack = () => {

    const [activeKey, setActiveKey] = useState(null);

    // Toggle function to handle icon switching
    const toggleIcon = (key) => {
      setActiveKey(activeKey === key ? null : key);
    };
    const sliderItems = [
        {
          href: "rice.html",
          src: "/img/products/pulses/Soybean.jpg",
          title: "Soya Beans",
        },
        {
          href: "sella-basmati-rice.html",
          src: "/img/products/pulses/Chickpeas%20Black.jpg",
          title: "Chick Peas Black",
        },
        {
          href: "goldan-sella-basmati-rice.html",
          src: "/img/products/pulses/Chickpea%20White.jpg",
          title: "Chick Peas White",
        },
        {
          href: "brown-rice.html",
          src: "/img/products/pulses/Green%20Gram.jpg",
          title: "Green Gram",
        },
        // Add more items as needed
      ];
    return (
        <div>
            <ChickPeasBlackTopHeader></ChickPeasBlackTopHeader>
            <div className="job-area job-area-two job-area-three">
            <div className="container-fluid">
                <div className="row m-0">
                    <div className="col-lg-6">
                        <div className="job-img">
                            <img src="/img/products/pulses/Chickpeas%20Black.jpg" alt="Chickpea Black" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="job-content job-content_02">
                            <div className="section-title">
                                <span className="sub-title">FORTUNE INDUSTRIES</span>
                                <h1 className="log_1">Chickpeas Black</h1>
                            </div>
                            <p>
                                Black chickpeas, also known as fresh chickpeas or chana dal, are young and tender chickpeas that have not yet fully dried. These vibrant black legumes offer a unique taste and texture compared to their dried counterparts.<br />
                                <strong style={{ fontSize: '20px' }}>Manufacturer, Exporters, Suppliers</strong><br />
                                <strong>Network Areas Related keywords:</strong> Frozen food, Eat Food, etc.<br />
                                <strong>USA:</strong> Montana, Nevada, New Jersey, New Mexico, Texas, South Dakota, Alaska, Florida, etc.<br />
                                <strong>Others:</strong> China, Myanmar, Nepal, Maldives, Bhutan, Bangladesh, UK etc.<br />
                                <strong>Indian Areas:</strong> Bihar, Assam, Gujarat, Himachal Pradesh, Delhi, Mumbai, Orissa, Punjab, West Bengal, Madhya Pradesh, Rajasthan, Sikkim, West Bengal, Haryana, Andhra Pradesh, Hyderabad, Maharashtra, Chandigarh, Jharkhand, Uttarakhand, Goa etc.<br />
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
              <span className="sub-title">Chickpeas Black</span>
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
                    Black chickpeas, also known as fresh chickpeas or chana dal, can be used in a variety of ways to add flavor and nutrition to your meals. They make a tasty, wholesome snack when boiled or steamed, can be included in salads to provide a fresh crunch. Black chickpeas can be added to stir-fries, curries, rice dishes, enhancing both taste.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1" className="mb-2">
                  <Accordion.Header onClick={() => toggleIcon('1')}>
                    Nutrition Data
                    {activeKey === '1' ? <FaMinus className="custom-icon" /> : <FaPlus className="custom-icon" />}
                  </Accordion.Header>
                  <Accordion.Body>
                    Black chickpeas, also known as fresh chickpeas or chana dal, are not only delicious but also offer a range of nutritional benefits. A 100-gram serving of black chickpeas contains approximately 140 calories, 8 grams of protein, and 2 grams of fat. These vibrant legumes are an excellent source of dietary fiber, providing around 5 grams per serving.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2" className="mb-2">
                  <Accordion.Header onClick={() => toggleIcon('2')}>
                    Other Details
                    {activeKey === '2' ? <FaMinus className="custom-icon" /> : <FaPlus className="custom-icon" />}
                  </Accordion.Header>
                  <Accordion.Body>
                    Black chickpeas can be enjoyed as a nutritious snack, added to salads for a fresh crunch, or used in a variety of dishes. They are a rich source of plant-based protein, dietary fiber, vitamins (such as vitamin C and vitamin A), and minerals (including iron, calcium, and magnesium).
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
        <section className="benefit-area mt-0 mb-150" style={{ backgroundImage: 'url(/img/masala/other-spices/seeds/seeds.jpg)' }}>
            <div className="container">
                <div className="benefit-content">
                    <div className="section-title">
                        <span className="sub-title">CHICKPEAS BLACK</span>
                        <h2>Get Benefits of Using Fortune Chickpeas Black</h2>
                    </div>
                    <p>
                        Using black chickpeas, also known as fresh chickpeas or chana dal, in your diet provides numerous health benefits. These vibrant legumes are rich in protein, fiber, vitamins, and minerals. They promote healthy digestion, support heart health by lowering cholesterol levels, help control blood sugar levels, aid in weight management, and contribute to strong bones. Black chickpeas also offer antioxidant properties and serve as a valuable plant-based protein source.
                    </p>
                    <div className="row">
                        <div className="col-sm-6 col-lg-6">
                            <div className="benefit-inner">
                                <i className="flaticon-darts"></i>
                                <h4>Feed binders, No colors</h4>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-6">
                            <div className="benefit-inner">
                                <i className="flaticon-customer"></i>
                                <h4>No hormones, No stimulants</h4>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-6">
                            <div className="benefit-inner">
                                <i className="flaticon-security-purposes"></i>
                                <h4>Micro nutrients are kept intact</h4>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-6">
                            <div className="benefit-inner">
                                <i className="flaticon-artificial-intelligence"></i>
                                <h4>Best management of dietary fiber</h4>
                            </div>
                        </div>
                    </div>
                    <a className="cmn-btn" href="../about.html">
                        Know Details
                        <i className="bx bx-right-arrow-alt"></i>
                    </a>
                    <div className="benefit-shape">
                        <img src="/img/home-one/benefit-shape.png" alt="Benefit" />
                    </div>
                </div>
            </div>
        </section>
        <section className="service-area-two service-area-three pb-70 pt-70 service-area-two_02">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title text-start">
                            <span className="sub-title">Chickpeas Black</span>
                            <h3 className="log_3">Product Advantages</h3>
                        </div>
                    </div>
                    <div className="col-md-5 me-auto ms-auto">
                        <div className="service-item service-item_02">
                            <i className="flaticon-mechanical-arm"></i>
                            <h3>
                                <a href="javascript:void(0);">Digestive health</a>
                            </h3>
                            <p>The fiber content in black chickpeas promotes healthy digestion and helps maintain a healthy gut.</p>
                        </div>
                    </div>
                    <div className="col-md-5 me-auto ms-auto">
                        <div className="service-item service-item_02">
                            <i className="bx bx-bulb"></i>
                            <h3>
                                <a href="javascript:void(0);">Antioxidant properties</a>
                            </h3>
                            <p>Black chickpeas contain antioxidants that help protect against cellular damage caused by free radicals.</p>
                        </div>
                    </div>
                    <div className="col-md-5 me-auto ms-auto">
                        <div className="service-item service-item_02">
                            <i className="flaticon-automation"></i>
                            <h3>
                                <a href="javascript:void(0);">Heart health</a>
                            </h3>
                            <p>The high fiber content in black chickpeas supports heart health by reducing cholesterol levels and improving blood lipid profiles.</p>
                        </div>
                    </div>
                    <div className="col-md-5 me-auto ms-auto">
                        <div className="service-item service-item_02">
                            <i className="flaticon-lab-tool"></i>
                            <h3>
                                <a href="javascript:void(0);">Blood sugar control</a>
                            </h3>
                            <p>The fiber and protein in black chickpeas contribute to steady blood sugar levels, making them beneficial for individuals with diabetes.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="counter-area pt-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="counter-text text-center section-title">
                <span className="sub-title">FORTUNE INDUSTRIES</span>
                <h3 className="log_3-w">Related Products of Pulses</h3>
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

export default ChickPeasBlack;
