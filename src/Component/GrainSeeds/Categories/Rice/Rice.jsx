import React from "react";

import { Navigation, Pagination } from "swiper/modules";
import Accordion from "react-bootstrap/Accordion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Core Swiper styles
import "swiper/css/navigation"; // Optional for navigation buttons
import "swiper/css/pagination"; // Optional for pagination
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { useState } from "react";

import RiceTopHeader from "./RiceTopHeader";
function Rice() {
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
    <>
      <RiceTopHeader></RiceTopHeader>

      <section>
        <div class="job-area job-area-two job-area-three">
          <div class="container-fluid">
            <div class="row m-0">
              <div class="col-lg-6">
                <div class="job-img">
                  <img
                    src="/img/products/grains-seeds/rice.jpg"
                    alt="cattle feed"
                  />
                </div>
              </div>
              <div class="col-lg-6">
                <div class="job-content job-content_02">
                  <div class="section-title">
                    <span class="sub-title">FORTUNE INDUSTRIES</span>
                    <h1 class="log_1">Rice</h1>
                  </div>
                  <p>
                    Rice is a staple grain that serves as a primary food source
                    for a significant portion of the world's population. It is
                    cultivated in various forms such as long-grain,
                    medium-grain, and short-grain, each with its own
                    characteristics. Rice is a versatile ingredient used in a
                    wide range of culinary applications.
                    <br />
                    <strong>Manufacturer, Exporters, Suppliers</strong>
                    <br />
                    <strong>Network Areas Related keywords:</strong> Frozen
                    food, Ready to Eat Food, etc.
                    <br />
                    <strong>USA:</strong> Montana, Nevada, New Jersey, New
                    Mexico, Texas, South Dakota, etc.
                    <br />
                    <strong>Others:</strong> China, Myanmar, Nepal, Maldives,
                    Bhutan, Bangladesh, UK etc.
                    <br />
                    <strong>Indian Areas:</strong> Bihar, Assam, Gujarat,
                    Himachal Pradesh, Delhi, Mumbai, Orissa, Punjab, west
                    bengal, Madhya Pradesh, Rajasthan, Sikkim, West Bengal,
                    Haryana, Andhra Pradesh, Hyderabad, Maharashtra, Chandigarh,
                    Jharkhand, Uttarakhand, Goa etc.
                    <br />
                  </p>
                  <a
                    class="cmn-btn"
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
        </div>
      </section>
      <section className="faq-area pt-100 pb-20">
        <div className="container">
          <div className="row faq-wrap">
            <div className="col-lg-9">
              <div className="faq-head section-title text-start">
                <span className="sub-title">Rice</span>
                <h3 className="log_3">Product Description</h3>
              </div>
              <div className="faq-item pb-70">
                <Accordion
                  activeKey={activeKey}
                  onSelect={(key) => setActiveKey(key)}
                >
                  <Accordion.Item eventKey="0">
                    <Accordion.Header onClick={() => toggleIcon("0")}>
                      Usage
                      {/* Conditionally render FaPlus or FaMinus */}
                      {activeKey === "0" ? (
                        <FaMinus className="custom-icon" />
                      ) : (
                        <FaPlus className="custom-icon" />
                      )}
                    </Accordion.Header>
                    <Accordion.Body>
                      Rice, a versatile grain, finds extensive usage in diverse
                      culinary traditions around the world. It serves as a
                      staple ingredient in countless dishes, both savory and
                      sweet.
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="1">
                    <Accordion.Header onClick={() => toggleIcon("1")}>
                      Nutrition Data
                      {activeKey === "1" ? (
                        <FaMinus className="custom-icon" />
                      ) : (
                        <FaPlus className="custom-icon" />
                      )}
                    </Accordion.Header>
                    <Accordion.Body>
                      Rice is a nutritious grain that provides important dietary
                      components. In a 100-gram serving of cooked white rice,
                      you can expect to find approximately 130 calories.
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="2">
                    <Accordion.Header onClick={() => toggleIcon("2")}>
                      Other Details
                      {activeKey === "2" ? (
                        <FaMinus className="custom-icon" />
                      ) : (
                        <FaPlus className="custom-icon" />
                      )}
                    </Accordion.Header>
                    <Accordion.Body>
                      Rice provides energy through carbohydrates, is low in fat,
                      and contains essential vitamins and minerals.
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
            "url(/img/masala/other-spices/grains-millet/grains-millet.jpg)",
        }}
      >
        <div className="container">
          <div className="benefit-content">
            <div className="section-title">
              <span className="sub-title">RICE</span>
              <h2>Get Benefits of Using Fortune Rice</h2>
            </div>
            <p>
              Using rice as part of your diet offers numerous benefits. It is a
              carbohydrate-rich food that provides energy for the body, contains
              essential vitamins, minerals like B vitamins, magnesium,
              phosphorus, potassium. Rice is easily digestible, making it gentle
              on the stomach, suitable for those with digestive sensitivities.
              Being gluten-free, it can be enjoyed by individuals following a
              gluten-free diet. Rice is versatile, can be used in a wide variety
              of dishes, from side dishes to main courses, it is a
              cost-effective staple that has a long shelf life.
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
                <span className="sub-title">Rice</span>
                <h3 className="log_3">Product Advantages</h3>
              </div>
            </div>
            <div className="col-md-5 me-auto ms-auto">
              <div className="service-item service-item_02">
                <i className="flaticon-mechanical-arm"></i>
                <h3>
                  <a href="javascript:void(0);">Global popularity</a>
                </h3>
                <p>
                  Rice is a staple food in many cultures and cuisines worldwide.
                </p>
              </div>
            </div>
            <div className="col-md-5 me-auto ms-auto">
              <div className="service-item service-item_02">
                <i className="bx bx-bulb"></i>
                <h3>
                  <a href="javascript:void(0);">Cost-effective</a>
                </h3>
                <p>
                  Rice is an affordable and widely available staple food in many
                  parts of the world.
                </p>
              </div>
            </div>
            <div className="col-md-5 me-auto ms-auto">
              <div className="service-item service-item_02">
                <i className="flaticon-automation"></i>
                <h3>
                  <a href="javascript:void(0);">Versatility</a>
                </h3>
                <p>
                  Rice is a versatile grain that can be incorporated into a wide
                  range of dishes.
                </p>
              </div>
            </div>
            <div className="col-md-5 me-auto ms-auto">
              <div className="service-item service-item_02">
                <i className="flaticon-lab-tool"></i>
                <h3>
                  <a href="javascript:void(0);">Nutritional value</a>
                </h3>
                <p>
                  Rice is not only a source of energy but also contains
                  essential vitamins and minerals.
                </p>
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
                <h3 className="log_3-w">Related Products of Grains & Seeds</h3>
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
    </>
  );
}
export default Rice;
