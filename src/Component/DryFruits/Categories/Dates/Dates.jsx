import React, { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import { FaPlus, FaMinus } from "react-icons/fa";

import { Navigation, Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Core Swiper styles
import "swiper/css/navigation"; // Optional for navigation buttons
import "swiper/css/pagination"; // Optional for pagination

import DatesTopHeader from "./DatesTopHeader";


const Dates = () => {
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
      <DatesTopHeader></DatesTopHeader>

      <div className="job-area job-area-two job-area-three">
        <div className="container-fluid">
          <div className="row m-0">
            <div className="col-lg-6">
              <div className="job-img">
                <img
                  src="/img/products/dry-fruits/dates.jpg"
                  alt="cattle feed"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="job-content job-content_02">
                <div className="section-title">
                  <span className="sub-title">FORTUNE INDUSTRIES</span>
                  <h1 className="log_1">Dates</h1>
                </div>
                <p>
                  Dates are sweet and chewy fruits that come from the date palm
                  tree, scientifically known as Phoenix dactylifera. They have
                  been enjoyed for thousands of years and are popular across
                  various cultures worldwide.
                  <br />
                  <strong style={{ fontSize: "20px" }}>
                    Manufacturer, Exporters, Suppliers
                  </strong>
                  <br />
                  <strong>Network Areas Related keywords:</strong> Frozen food,
                  Eat Food, etc.
                  <br />
                  <strong>USA:</strong> Montana, Nevada, New Jersey, New Mexico,
                  Texas, South Dakota, Alaska, Florida, etc.
                  <br />
                  <strong>Others:</strong> China, Myanmar, Nepal, Maldives,
                  Bhutan, Bangladesh, UK, etc.
                  <br />
                  <strong>Indian Areas:</strong> Bihar, Assam, Gujarat, Himachal
                  Pradesh, Delhi, Mumbai, Orissa, Punjab, West Bengal, Madhya
                  Pradesh, Rajasthan, Sikkim, West Bengal, Haryana, Andhra
                  Pradesh, Chandigarh, Jharkhand, Uttarakhand, Goa, etc.
                  <br />
                </p>
                <a
                  className="cmn-btn"
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  Inquiry Now
                </a>
              </div>
            </div>
          </div>
        </div>

        <section className="faq-area pt-100 pb-20">
          <div className="container">
            <div className="row faq-wrap" style={{ alignItems: "center" }}>
              <div className="col-lg-9">
                <div className="faq-head section-title text-start">
                  <span className="sub-title">Dates</span>
                  <h3 className="log_3">Product Description</h3>
                </div>
                <div className="faq-item pb-70">
                  <Accordion
                    activeKey={activeKey}
                    onSelect={(key) => setActiveKey(key)}
                  >
                    <Accordion.Item eventKey="0" className="mb-2">
                      <Accordion.Header onClick={() => toggleIcon("0")}>
                        Usage
                        {activeKey === "0" ? (
                          <FaMinus className="custom-icon" />
                        ) : (
                          <FaPlus className="custom-icon" />
                        )}
                      </Accordion.Header>
                      <Accordion.Body>
                        Dates are incredibly versatile and can be used in
                        various ways in culinary preparations. They can be
                        enjoyed as a delicious and natural sweet treat on their
                        own. Dates can be used as a natural sweetener in baking,
                        replacing refined sugars in recipes like cakes, cookies,
                        and energy bars.
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="1" className="mb-2">
                      <Accordion.Header onClick={() => toggleIcon("1")}>
                        Nutrition Data
                        {activeKey === "1" ? (
                          <FaMinus className="custom-icon" />
                        ) : (
                          <FaPlus className="custom-icon" />
                        )}
                      </Accordion.Header>
                      <Accordion.Body>
                        Dates are a nutrient-dense fruit packed with essential
                        vitamins, minerals, and dietary fiber. A 100-gram
                        serving of dates contains approximately 277 calories, 75
                        grams of carbohydrates (including natural sugars), 7
                        grams of dietary fiber, and 2 grams of protein.
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="2" className="mb-2">
                      <Accordion.Header onClick={() => toggleIcon("2")}>
                        Other Details
                        {activeKey === "2" ? (
                          <FaMinus className="custom-icon" />
                        ) : (
                          <FaPlus className="custom-icon" />
                        )}
                      </Accordion.Header>
                      <Accordion.Body>
                        Dates are not only delicious but also offer several
                        health benefits. They are a good source of dietary
                        fiber, providing both soluble and insoluble fiber, which
                        promotes healthy digestion and aids in maintaining
                        regular bowel movements. Dates are naturally high in
                        antioxidants, including flavonoids and phenolic
                        compounds.
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
          style={{
            backgroundImage:
              "url(/img/masala/other-spices/dry-fruits/dry-fruits.jpg)",
          }}
        >
          <div className="container">
            <div className="benefit-content">
              <div className="section-title">
                <span className="sub-title">DATES</span>
                <h2>Get Benefits of Using Fortune Dates</h2>
              </div>
              <p>
                Using dates in your diet provides numerous benefits. These sweet
                fruits are nutrient-rich, containing fiber, potassium,
                magnesium, and B vitamins. Dates serve as a natural sweetener,
                offering a healthier alternative to refined sugars. They support
                digestive health, aid in weight management, and provide
                sustained energy due to their fiber and carbohydrate content.
                Dates are also packed with antioxidants that protect against
                cellular damage and promote overall well-being. Additionally,
                the minerals in dates contribute to bone health.
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
                Know Details <i className="bx bx-right-arrow-alt"></i>
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
                  <span className="sub-title">Dates</span>
                  <h3 className="log_3">Product Advantages</h3>
                </div>
              </div>
              <div className="col-md-5 me-auto ms-auto">
                <div className="service-item service-item_02">
                  <i className="flaticon-mechanical-arm"></i>
                  <h3>
                    <a href="javascript:void(0);">Nutrient-Rich</a>
                  </h3>
                  <p>
                    Dates are packed with essential vitamins and minerals. They
                    are a good source of dietary fiber, potassium, magnesium,
                    and B vitamins like thiamin and riboflavin.
                  </p>
                </div>
              </div>
              <div className="col-md-5 me-auto ms-auto">
                <div className="service-item service-item_02">
                  <i className="bx bx-bulb"></i>
                  <h3>
                    <a href="javascript:void(0);">Natural Sweetener</a>
                  </h3>
                  <p>
                    Dates are a natural and healthier alternative to refined
                    sugars. They provide a sweet taste to recipes while adding
                    fiber and nutrients.
                  </p>
                </div>
              </div>
              <div className="col-md-5 me-auto ms-auto">
                <div className="service-item service-item_02">
                  <i className="flaticon-automation"></i>
                  <h3>
                    <a href="javascript:void(0);">Digestive Health</a>
                  </h3>
                  <p>
                    Dates are high in dietary fiber, which supports healthy
                    digestion and helps prevent constipation.
                  </p>
                </div>
              </div>
              <div className="col-md-5 me-auto ms-auto">
                <div className="service-item service-item_02">
                  <i className="flaticon-lab-tool"></i>
                  <h3>
                    <a href="javascript:void(0);">Antioxidant Power</a>
                  </h3>
                  <p>
                    Dates contain various antioxidants, including flavonoids and
                    phenolic compounds.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="counter-area pt-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="counter-text text-center section-title">
                <span className="sub-title">FORTUNE INDUSTRIES</span>
                <h3 className="log_3-w">
                  Related Products of Dry Fruits & Nuts
                </h3>
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
};

export default Dates;
