import React, { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { FaPlus, FaMinus } from 'react-icons/fa';

import { Navigation, Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Core Swiper styles
import "swiper/css/navigation"; // Optional for navigation buttons
import "swiper/css/pagination"; // Optional for pagination
import MaizeTopHeader from "./MaizeTopHeader";

const Maize = () => {

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
            <MaizeTopHeader></MaizeTopHeader>
             <div className="job-area job-area-two job-area-three">
      <div className="container-fluid">
        <div className="row m-0">
          <div className="col-lg-6">
            <div className="job-img">
              <img src="/img/products/grains-seeds/corn-grits.jpg" alt="cattle feed" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="job-content job-content_02">
              <div className="section-title">
                <span className="sub-title">FORTUNE INDUSTRIES</span>
                <h1 className="log_1">Maize / Corn</h1>
              </div>
              <p>
                Maize, commonly known as corn, is a versatile and widely consumed cereal grain. It is a staple food in many cultures around the world. Maize is rich in carbohydrates, providing a good source of energy. It also contains dietary fiber, vitamins, minerals, and antioxidants.<br />
                <strong style={{ fontSize: '20px' }}>Manufacturer, Exporters, Suppliers</strong><br />
                <strong>Network Areas Related keywords:</strong> Frozen food, Eat Food, etc.<br />
                <strong>USA:</strong> Montana, Nevada, New Jersey, New Mexico, Texas, South Dakota, etc.<br />
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

      <section className="faq-area pt-100 pb-20">
      <div className="container">
        <div className="row faq-wrap" style={{ alignItems: 'center' }}>
          <div className="col-lg-9">
            <div className="faq-head section-title text-start">
              <span className="sub-title">Maize / Corn</span>
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
                    Maize, also known as corn, has a wide range of uses in various industries and culinary practices. It is a staple crop that serves as a source of food, feed, and raw materials. Maize is commonly consumed as a food crop in many forms, including sweet corn, popcorn, cornmeal, and corn flour.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1" className="mb-2">
                  <Accordion.Header onClick={() => toggleIcon('1')}>
                    Nutrition Data
                    {activeKey === '1' ? <FaMinus className="custom-icon" /> : <FaPlus className="custom-icon" />}
                  </Accordion.Header>
                  <Accordion.Body>
                    Yellow maize, commonly known as corn, provides a nutritional composition that includes approximately 365 calories per 100 grams of raw maize. It is primarily a carbohydrate-rich food, with around 76 grams of carbohydrates, 9 grams of protein, and 4 grams of fat. Maize is also a good source of dietary fiber, offering approximately 7 grams per 100 grams.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2" className="mb-2">
                  <Accordion.Header onClick={() => toggleIcon('2')}>
                    Other Details
                    {activeKey === '2' ? <FaMinus className="custom-icon" /> : <FaPlus className="custom-icon" />}
                  </Accordion.Header>
                  <Accordion.Body>
                    The combination of nutrients in maize supports various aspects of health, such as providing energy, aiding in digestion, promoting heart health, and supporting the immune system. Maize can be enjoyed in various forms, including as whole kernels, ground into flour for baking, popped as popcorn, or processed into cornmeal, corn syrup, or corn oil.
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

      <section className="benefit-area mt-0 mb-150" style={{ backgroundImage: 'url(/img/masala/other-spices/grains-millet/grains-millet.jpg)' }}>
        <div className="container">
          <div className="benefit-content">
            <div className="section-title">
              <span className="sub-title">MAIZE / CORN</span>
              <h2>Get Benefits of Using Fortune Maize / Corn</h2>
            </div>
            <p>
              Using Fortune Maize (corn) in your diet can provide numerous benefits for your health. Fortune Maize is a nutritious grain that offers a range of essential nutrients, including carbohydrates, dietary fiber, vitamins (such as vitamin C, thiamine, and folate), and minerals (such as magnesium, phosphorus, and potassium). Incorporating maize into your meals can help provide sustained energy, support healthy digestion, and contribute to overall nutrient intake.
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
            <a className="cmn-btn" href="/about.html">
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
                <span className="sub-title">Maize / Corn</span>
                <h3 className="log_3">Product Advantages</h3>
              </div>
            </div>
            <div className="col-md-5 me-auto ms-auto">
              <div className="service-item service-item_02">
                <i className="flaticon-mechanical-arm"></i>
                <h3>
                  <a href="javascript:void(0);">Nutritional Value</a>
                </h3>
                <p>Fortune Maize is a good source of essential nutrients, including carbohydrates, dietary fiber, vitamins, and minerals.</p>
              </div>
            </div>
            <div className="col-md-5 me-auto ms-auto">
              <div className="service-item service-item_02">
                <i className="bx bx-bulb"></i>
                <h3>
                  <a href="javascript:void(0);">Heart Health</a>
                </h3>
                <p>Maize contains soluble fiber, which can help reduce cholesterol levels and promote heart health.</p>
              </div>
            </div>
            <div className="col-md-5 me-auto ms-auto">
              <div className="service-item service-item_02">
                <i className="flaticon-automation"></i>
                <h3>
                  <a href="javascript:void(0);">Digestive Health</a>
                </h3>
                <p>The dietary fiber found in maize aids in digestion and helps prevent constipation.</p>
              </div>
            </div>
            <div className="col-md-5 me-auto ms-auto">
              <div className="service-item service-item_02">
                <i className="flaticon-lab-tool"></i>
                <h3>
                  <a href="javascript:void(0);">Antioxidant Properties</a>
                </h3>
                <p>Maize is a good source of antioxidants, including carotenoids and vitamin C, which help protect the body against harmful free radicals.</p>
              </div>
            </div>
          </div>
        </div>
      </section>


    </div>

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

export default Maize;
