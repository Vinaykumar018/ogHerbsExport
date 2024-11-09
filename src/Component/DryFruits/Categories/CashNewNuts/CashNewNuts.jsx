import React, { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { FaPlus, FaMinus } from 'react-icons/fa';

import { Navigation, Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Core Swiper styles
import "swiper/css/navigation"; // Optional for navigation buttons
import "swiper/css/pagination"; // Optional for pagination
import CashNewNutsTopHeader from './CashNewNutsTopHeader';
const CashNewNuts = () => {
  const [activeKey, setActiveKey] = useState(null);

  // Toggle function to handle icon switching
  const toggleIcon = (key) => {
    setActiveKey(activeKey === key ? null : key);
  };

    const sliderItems = [
        {
          href: "rice.html",
          src: "/img/products/dry-fruits/peanuts.jpg",
          title: "Peanuts",
        },
        {
          href: "sella-basmati-rice.html",
          src: "/img/products/dry-fruits/almonds.jpg",
          title: "Almonds",
        },
        {
          href: "goldan-sella-basmati-rice.html",
          src: "/img/products/dry-fruits/cashew-nuts.jpg",
          title: "Cashew Nuts",
        },
        {
          href: "brown-rice.html",
          src: "/img/products/dry-fruits/dates.jpg",
          title: "Dates",
        },
        // Add more items as needed
      ];
    return (
        <div>
            <CashNewNutsTopHeader></CashNewNutsTopHeader>
            <div className="job-area job-area-two job-area-three">
  <div className="container-fluid">
    <div className="row m-0">
      <div className="col-lg-6">
        <div className="job-img">
          <img src="/img/products/dry-fruits/cashew-nuts.jpg" alt="cattle feed" />
        </div>
      </div>
      <div className="col-lg-6">
        <div className="job-content job-content_02">
          <div className="section-title">
            <span className="sub-title">FORTUNE INDUSTRIES</span>
            <h1 className="log_1">Cashew Nuts</h1>
          </div>
          <p>
            Cashew nuts, scientifically known as Anacardium occidentale, are delicious and nutrient-rich tree nuts enjoyed worldwide. Native to northeastern Brazil, cashews are now cultivated in many tropical regions.
            <br />
            <strong style={{ fontSize: "20px" }}>Manufacturer, Exporters, Suppliers</strong>
            <br />
            <strong>Network Areas Related keywords:</strong> Frozen food, Eat Food, etc.
            <br />
            <strong>USA:</strong> Montana, Nevada, New Jersey, New Mexico, Texas, South Dakota, Alaska, Florida, etc.
            <br />
            <strong>Others:</strong> China, Myanmar, Nepal, Maldives, Bhutan, Bangladesh, UK, etc.
            <br />
            <strong>Indian Areas:</strong> Bihar, Assam, Gujarat, Himachal Pradesh, Delhi, Mumbai, Orissa, Punjab, West Bengal, Madhya Pradesh, Rajasthan, Sikkim, West Bengal, Haryana, Andhra Pradesh, Hyderabad, Maharashtra, Chandigarh, Jharkhand, Uttarakhand, Goa, etc.
            <br />
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
              <span className="sub-title">Cashew Nuts</span>
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
                    Cashew nuts are versatile and can be used in a variety of ways in culinary preparations.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1" className="mb-2">
                  <Accordion.Header onClick={() => toggleIcon('1')}>
                    Nutrition Data
                    {activeKey === '1' ? <FaMinus className="custom-icon" /> : <FaPlus className="custom-icon" />}
                  </Accordion.Header>
                  <Accordion.Body>
                    Cashew nuts are a nutrient-dense food, providing essential vitamins and minerals.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2" className="mb-2">
                  <Accordion.Header onClick={() => toggleIcon('2')}>
                    Other Details
                    {activeKey === '2' ? <FaMinus className="custom-icon" /> : <FaPlus className="custom-icon" />}
                  </Accordion.Header>
                  <Accordion.Body>
                    These kidney-shaped nuts are encased in a hard shell, which contains a toxic oil that must be removed before consumption.
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

  <section
    className="benefit-area mt-0 mb-150"
    style={{ backgroundImage: "url(/img/masala/other-spices/dry-fruits/dry-fruits.jpg)" }}
  >
    <div className="container">
      <div className="benefit-content">
        <div className="section-title">
          <span className="sub-title">CASHEW NUTS</span>
          <h2>Get Benefits of Using Fortune Cashew Nuts</h2>
        </div>
        <p>
          Cashew nuts provide a range of benefits when incorporated into a balanced diet. They contain heart-healthy monounsaturated fats, which can help reduce the risk of heart disease.
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
            <span className="sub-title">Cashew Nuts</span>
            <h3 className="log_3">Product Advantages</h3>
          </div>
        </div>
        <div className="col-md-5 me-auto ms-auto">
          <div className="service-item service-item_02">
            <i className="flaticon-mechanical-arm"></i>
            <h3>
              <a href="javascript:void(0);">Heart Health</a>
            </h3>
            <p>Cashew nuts contain monounsaturated fats, which are considered heart-healthy fats.</p>
          </div>
        </div>
        <div className="col-md-5 me-auto ms-auto">
          <div className="service-item service-item_02">
            <i className="bx bx-bulb"></i>
            <h3>
              <a href="javascript:void(0);">Nutrient-Rich</a>
            </h3>
            <p>Cashew nuts are packed with essential nutrients.</p>
          </div>
        </div>
        <div className="col-md-5 me-auto ms-auto">
          <div className="service-item service-item_02">
            <i className="flaticon-automation"></i>
            <h3>
              <a href="javascript:void(0);">Weight Management</a>
            </h3>
            <p>Despite being calorie-dense, cashew nuts can support weight management.</p>
          </div>
        </div>
        <div className="col-md-5 me-auto ms-auto">
          <div className="service-item service-item_02">
            <i className="flaticon-lab-tool"></i>
            <h3>
              <a href="javascript:void(0);">Antioxidant Benefits</a>
            </h3>
            <p>Cashew nuts contain antioxidants, such as flavanols and proanthocyanidins.</p>
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
            <h3 className="log_3-w">Related Products of Dry Fruits & Nuts</h3>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>


       

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

export default CashNewNuts;
