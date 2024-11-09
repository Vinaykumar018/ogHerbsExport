import React, { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { FaPlus, FaMinus } from 'react-icons/fa';
import BarleyTopHeader from './BarleyTopHeader';
import { Navigation, Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Core Swiper styles
import "swiper/css/navigation"; // Optional for navigation buttons
import "swiper/css/pagination"; // Optional for pagination

const Barley = () => {

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
            <BarleyTopHeader></BarleyTopHeader>

            <div className="job-area job-area-two job-area-three">
      <div className="container-fluid">
        <div className="row m-0">
          <div className="col-lg-6">
            <div className="job-img">
              <img src="/img/products/grains-seeds/barley.jpg" alt="cattle feed" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="job-content job-content_02">
              <div className="section-title">
                <span className="sub-title">FORTUNE INDUSTRIES</span>
                <h1 className="log_1">Barley</h1>
              </div>
              <p>
                Barley is a versatile, nutritious cereal grain that has been consumed for centuries. This whole grain is rich in dietary fiber, vitamins, minerals, antioxidants, making it a valuable addition to a balanced diet. Barley can be used in a variety of dishes, offering a nutty flavor, a satisfying texture.
                <br />
                <strong style={{ fontSize: "20px" }}>Manufacturer, Exporters, Suppliers</strong>
                <br />
                <strong>Network Areas Related keywords:</strong> Frozen food, Eat Food, etc.
                <br />
                <strong>USA:</strong> Montana, Nevada, New Jersey, New Mexico, Texas, South Dakota, etc.
                <br />
                <strong>Others:</strong> China, Myanmar, Nepal, Maldives, Bhutan, Bangladesh, UK etc.
                <br />
                <strong>Indian Areas:</strong> Bihar, Assam, Gujarat, Himachal Pradesh, Delhi, Mumbai, Orissa, Punjab, West Bengal, Madhya Pradesh, Rajasthan, Sikkim, West Bengal, Haryana, Andhra Pradesh, Hyderabad, Maharashtra, Chandigarh, Jharkhand, Uttarakhand, Goa etc.
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
              <span className="sub-title">Barley</span>
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
                    Barley is an incredibly versatile grain that can be utilized in numerous ways to enhance both the nutritional value and flavors of your meals. Whether you prefer using whole barley grains, pearl barley, or barley flour, there are various ways to incorporate this grain into your culinary creations.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1" className="mb-2">
                  <Accordion.Header onClick={() => toggleIcon('1')}>
                    Nutrition Data
                    {activeKey === '1' ? <FaMinus className="custom-icon" /> : <FaPlus className="custom-icon" />}
                  </Accordion.Header>
                  <Accordion.Body>
                    The nutritional composition of barley can vary depending on the specific type and preparation method. On average, a 100-gram serving of cooked pearl barley provides approximately 123 calories, 2.3 grams of fat, 28 grams of carbohydrates, 3.6 grams of fiber, and 2.3 grams of protein.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2" className="mb-2">
                  <Accordion.Header onClick={() => toggleIcon('2')}>
                    Other Details
                    {activeKey === '2' ? <FaMinus className="custom-icon" /> : <FaPlus className="custom-icon" />}
                  </Accordion.Header>
                  <Accordion.Body>
                    Barley is particularly rich in fiber, with both soluble and insoluble types, which support healthy digestion, regulate blood sugar levels, and promote satiety. Barley can be used in various forms, such as whole grain, pearl barley, or barley flour, and can be incorporated into soups, pilafs, or even used to make bread and baked goods.
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
        style={{ backgroundImage: "url(/img/masala/other-spices/grains-millet/grains-millet.jpg)" }}
      >
        <div className="container">
          <div className="benefit-content">
            <div className="section-title">
              <span className="sub-title">BARLEY</span>
              <h2>Get Benefits of Using Fortune Barley</h2>
            </div>
            <p>
              Fortune Barley offers a range of benefits when included in your diet. It is rich in dietary fiber, promoting healthy digestion, regular bowel movements, and supporting gut health. The soluble fiber in barley, such as beta-glucan, can help lower LDL cholesterol levels and reduce the risk of heart disease. Barley's low glycemic index helps control blood sugar levels, making it suitable for individuals with diabetes or those aiming for balanced blood sugar. Its high fiber content aids in weight management by promoting satiety and reducing calorie intake.
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
                <span className="sub-title">Barley</span>
                <h3 className="log_3">Product Advantages</h3>
              </div>
            </div>
            <div className="col-md-5 me-auto ms-auto">
              <div className="service-item service-item_02">
                <i className="flaticon-mechanical-arm"></i>
                <h3>
                  <a href="javascript:void(0);">High Fiber Content</a>
                </h3>
                <p>Barley is a rich source of dietary fiber, including both soluble and insoluble fiber.</p>
              </div>
            </div>
            <div className="col-md-5 me-auto ms-auto">
              <div className="service-item service-item_02">
                <i className="bx bx-bulb"></i>
                <h3>
                  <a href="javascript:void(0);">Heart Health</a>
                </h3>
                <p>The soluble fiber in barley, specifically beta-glucan, has been linked to heart health benefits.</p>
              </div>
            </div>
            <div className="col-md-5 me-auto ms-auto">
              <div className="service-item service-item_02">
                <i className="flaticon-automation"></i>
                <h3>
                  <a href="javascript:void(0);">Blood Sugar Control</a>
                </h3>
                <p>Barley has a low glycemic index, meaning it causes a slower and more gradual rise in blood sugar levels compared to refined carbohydrates.</p>
              </div>
            </div>
            <div className="col-md-5 me-auto ms-auto">
              <div className="service-item service-item_02">
                <i className="flaticon-lab-tool"></i>
                <h3>
                  <a href="javascript:void(0);">Weight Management</a>
                </h3>
                <p>Due to its high fiber content and low calorie density, consuming Fortune Barley can help promote satiety and reduce overall calorie intake.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    
    </div>  <section class="counter-area pt-100">
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

export default Barley;
