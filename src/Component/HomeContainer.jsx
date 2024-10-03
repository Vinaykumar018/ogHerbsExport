import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay'; // Import autoplay styles
// import { Autoplay } from 'swiper'; // Import Autoplay directly from Swiper package
import img_first from '../assets/img/banner-img/spices-masala.jpg';
import img_second from '../assets/img/banner-img/spices-masala.jpg';
import img_third from '../assets/img/banner-img/spices-masala.jpg';
import prooduct_img_first from '../assets/img/products/grains-seeds/grains-seed.jpg';
import prooduct_img_second from '../assets/img/products/grains-seeds/pulses.jpg';
import prooduct_img_third from '../assets/img/products/grains-seeds/spices-masala.jpg';
import prooduct_img_fourth from '../assets/img/products/grains-seeds/dry-fruites.jpg';
import prooduct_img_fifth from '../assets/img/products/grains-seeds/flour.jpg';
import prooduct_img_sixth from '../assets/img/products/grains-seeds/animal-feed.jpg';
import mission from '../assets/img/home-one/service-shape.png'
import mission_two from '../assets/img/home-one/service-shape2.png'
import benefit from '../assets/img/home-one/benefit-shape.png';
import warehouse from '../assets/img/home-one/warehouse.jpg';
import plant from '../assets/img/home-one/plant.jpg';
import lab_01 from '../assets/img/home-one/lab_01.png';
import loading from '../assets/img/home-one/loading.jpg';
import AboutMessage from './Container/AboutMessage';


const HomeContainer = () => {
  const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover',
    height: '100vh',
  };

  const slideImages = [
    { url: img_first },
    { url: img_second },
    { url: img_third },
  ];

  return (
    <>
      {/* Slide with fade effect */}
      <div className="slide-container">
        <Slide arrows={false} autoplay={true} duration={3000}>
          {slideImages.map((slideImage, index) => (
            <div key={index}>
              <div style={{ ...divStyle, backgroundImage: `url(${slideImage.url})` }}></div>
            </div>
          ))}
        </Slide>
      </div>

    <section className="pt-100 pb-70">
        <div className="container">
            <div className="section-title">
                <span className="sub-title">OG Herbs</span>
                <h3 className="log_3">Our Products</h3>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <Swiper
                        spaceBetween={30}           // Space between slides
                        slidesPerView={5}           // Show 6 slides per view
                        loop={true}                 // Loop the slides
                        autoplay={{                 // Autoplay configuration
                        delay: 3000,              // 3 seconds delay
                        disableOnInteraction: false,
                        }}
                       className="product-slider">
                        <SwiperSlide className="about-img-item team-item">
                            <a href="grains-seeds.html"><img src={prooduct_img_first} alt="Grains Seeds "/></a>
                            <a href="grains-seeds.html" className="product-heading"><h3>Grains Seeds </h3></a>
                        </SwiperSlide>
                        <SwiperSlide className="about-img-item team-item">
                            <a href="pulses.html"><img src={prooduct_img_second} alt="Aniseed / Fennel Seeds"/></a>
                            <a href="pulses.html" className="product-heading"><h3>Pulses</h3></a>
                        </SwiperSlide>
                        <SwiperSlide className="about-img-item team-item">
                            <a href="bland-spices.html"><img src={prooduct_img_third} alt="Barley"/></a>
                            <a href="bland-spices.html" className="product-heading"><h3>Spices</h3></a>
                        </SwiperSlide>
                        <SwiperSlide className="about-img-item team-item">
                            <a href="dry-fruits.html"><img src={prooduct_img_fourth} alt="Dry Fruits Nuts "/></a>
                            <a href="dry-fruits.html" className="product-heading"><h3>Dry Fruits Nuts </h3></a>
                        </SwiperSlide>
                        <SwiperSlide className="about-img-item team-item">
                            <a href="flour.html"><img src={prooduct_img_fifth} alt="Mustard Seeds"/></a>
                            <a href="flour.html" className="product-heading"><h3>Flour</h3></a>
                        </SwiperSlide>
                        <SwiperSlide className="about-img-item team-item">
                            <a href="feed.html"><img src={prooduct_img_sixth} alt="Maize / Corn"/></a>
                            <a href="feed.html" className="product-heading"><h3>Feed</h3></a>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    </section>
    <section class="service-area pt-100 pb-70">
        <div class="container">
            <div class="row">
                <div class="col-sm-6 col-lg-6">
                        <div class="service-item udpate-service">
                            <img src={mission} alt="Service"/>
                            <img src={mission_two} alt="Service"/>
                            <i class="fa fa-cogs" aria-hidden="true"></i>
                            <h3>Our Mission</h3>
                            <p>OG Herbs is one of India's most popular spices exporters because it provides the most affordable, cost-effective range of spices right at the consumers' doorstep. We aim to be the most ground-breaking, dependable, premium Indian brand of spices that stands for transporting, distributing the regional taste diversity of India in all its genuineness, freshness to all the users.</p>
                        </div>
                </div>
                <div class="col-sm-6 col-lg-6">
                    <div class="service-item udpate-service">
                        <img src={mission} alt="Service"/>
                        <img src={mission_two} alt="Service"/>
                        <i class="fa fa-lightbulb" aria-hidden="true"></i>
                        <h3>Our Vision</h3>
                        <p>We will ensure that OG Herbs is manufactured, packaged and delivered to consumers' doorstep while preserving the highest order of quality and hygiene. We shall endeavour to provide nutritionally sound products and unveil complete and precise nutritional information on our packaging. We commit to constantly working towards analysing and eradicating instances of adulteration.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <AboutMessage/>
    <section class="benefit-area mt-0">
        <div class="container">
            <div class="benefit-content">
                <div class="section-title">
                    <span class="sub-title">OG Herbs</span>
                    <h2>Why OG Herbs is the best Spice Exporter in India</h2>
                </div>
                <p>A delicious food is something that makes you eat more and makes everyone ask the question: what are the ingredients of this jaw-droppingly relishing food? And the answer is the only one OG Herbs! Indian Spices are sought after all across the world for their high quality and taste. OG Herbs is among the world’s largest Indian spice exporters, providing Indian households requiring a large variety of flavours and spices to enhance the flavours of their dishes.<br/></p>
                <p>Benefits of buying spices from a reliable Indian Spice Suppliers like <strong>OG Herbs</strong> :</p>
                <div class="row">
                    <div class="col-sm-6 col-lg-6">
                        <div class="benefit-inner">
                            <i class="flaticon-darts"></i>
                            <h4>High quality and Best in taste</h4>
                        </div>
                    </div>
                    <div class="col-sm-6 col-lg-6">
                        <div class="benefit-inner">
                            <i class="flaticon-customer"></i>
                            <h4>Superior in Color and Taste</h4>
                        </div>
                    </div>
                    <div class="col-sm-6 col-lg-6">
                        <div class="benefit-inner">
                            <i class="flaticon-security-purposes"></i>
                            <h4>Aromatic fragrances and Affordable prices</h4>
                        </div>
                    </div>
                    <div class="col-sm-6 col-lg-6">
                        <div class="benefit-inner">
                            <i class="flaticon-artificial-intelligence"></i>
                            <h4>Trusted and Certified</h4>
                        </div>
                    </div>
                </div>
                <a class="cmn-btn" href="about.html">
                    Know Details
                    <i class="fa fa-angle-double-right" aria-hidden="true"></i>
                </a>
                <div class="benefit-shape">
                    <img src={benefit} alt="Benefit"/>
                </div>
            </div>
        </div>
    </section>
    <div class="logo-area c_pt-200">


    </div>
    <section class="counter-area pt-100 pb-0">
        <div class="container">
            <div class="row align-items-center pb-70">
                <div class="col-lg-5">
                    <div class="counter-text">
                        <h3 class="log_3-w">Enjoy The Freshest, Natural And Organic Spices Online From Us</h3>
                    </div>
                </div>
                <div class="col-lg-7">
                    <div class="row">
                        <div class="col-sm-4 col-lg-4">
                            <div class="counter-item">
                                <h3>
                                    <span class="odometer odometer-auto-theme" data-count="100">
                                        <div class="odometer-inside">
                                            <span class="odometer-digit">
                                                <span class="odometer-digit-spacer">8</span>
                                                <span class="odometer-digit-inner">
                                                    <span class="odometer-ribbon">
                                                        <span class="odometer-ribbon-inner">
                                                            <span class="odometer-value">1</span>
                                                        </span>
                                                    </span>
                                                </span>
                                            </span>
                                            <span class="odometer-digit">
                                                <span class="odometer-digit-spacer">8</span>
                                                <span class="odometer-digit-inner">
                                                    <span class="odometer-ribbon">
                                                        <span class="odometer-ribbon-inner">
                                                            <span class="odometer-value">0</span>
                                                        </span>
                                                    </span>
                                                </span>
                                            </span>
                                            <span class="odometer-digit">
                                                <span class="odometer-digit-spacer">8</span>
                                                <span class="odometer-digit-inner">
                                                    <span class="odometer-ribbon">
                                                        <span class="odometer-ribbon-inner">
                                                            <span class="odometer-value">0</span>
                                                        </span>
                                                    </span>
                                                </span>
                                            </span>
                                        </div>
                                    </span>
                                    <span class="target">%</span>
                                </h3>
                                <p>High In Nutrients</p>
                            </div>
                        </div>
                        <div class="col-sm-4 col-lg-4">
                            <div class="counter-item">
                                <h3>
                                    <span class="odometer odometer-auto-theme" data-count="100">
                                        <div class="odometer-inside">
                                            <span class="odometer-digit">
                                                <span class="odometer-digit-spacer">8</span>
                                                <span class="odometer-digit-inner">
                                                    <span class="odometer-ribbon">
                                                        <span class="odometer-ribbon-inner">
                                                            <span class="odometer-value">1</span>
                                                        </span>
                                                    </span>
                                                </span>
                                            </span>
                                            <span class="odometer-digit">
                                                <span class="odometer-digit-spacer">8</span>
                                                <span class="odometer-digit-inner">
                                                    <span class="odometer-ribbon">
                                                        <span class="odometer-ribbon-inner">
                                                            <span class="odometer-value">0</span>
                                                        </span>
                                                    </span>
                                                </span>
                                            </span>
                                            <span class="odometer-digit">
                                                <span class="odometer-digit-spacer">8</span>
                                                <span class="odometer-digit-inner">
                                                    <span class="odometer-ribbon">
                                                        <span class="odometer-ribbon-inner">
                                                            <span class="odometer-value">0</span>
                                                        </span>
                                                    </span>
                                                </span>
                                            </span>
                                        </div>
                                    </span>
                                    <span class="target">%</span>
                                </h3>
                                <p>Premium Quality</p>
                            </div>
                        </div>
                        <div class="col-sm-4 col-lg-4">
                            <div class="counter-item">
                                <h3>
                                    <span class="odometer odometer-auto-theme" data-count="100">
                                        <div class="odometer-inside">
                                            <span class="odometer-digit">
                                                <span class="odometer-digit-spacer">8</span>
                                                <span class="odometer-digit-inner">
                                                    <span class="odometer-ribbon">
                                                        <span class="odometer-ribbon-inner">
                                                            <span class="odometer-value">1</span>
                                                        </span>
                                                    </span>
                                                </span>
                                            </span>
                                            <span class="odometer-digit">
                                                <span class="odometer-digit-spacer">8</span>
                                                <span class="odometer-digit-inner">
                                                    <span class="odometer-ribbon">
                                                        <span class="odometer-ribbon-inner">
                                                            <span class="odometer-value">0</span>
                                                        </span>
                                                    </span>
                                                </span>
                                            </span>
                                            <span class="odometer-digit">
                                                <span class="odometer-digit-spacer">8</span>
                                                <span class="odometer-digit-inner">
                                                    <span class="odometer-ribbon">
                                                        <span class="odometer-ribbon-inner">
                                                            <span class="odometer-value">0</span>
                                                        </span>
                                                    </span>
                                                </span>
                                            </span>
                                        </div>
                                    </span>
                                    <span class="target">%</span>
                                </h3>
                                <p>Natural Aroma</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="blog-area blog-area-two pt-100 pb-70">
        <div class="container">
            <div class="section-title">
                <span class="sub-title">OG Herbs</span>
                <h3 class="log_3">OG Herbs Specialty</h3>
            </div>
            <div class="row">
                <div class="col-sm-6 col-lg-3">
                    <div class="certificate-item">
                        <a href={warehouse} data-fancybox="gallery">
                            <img src={warehouse} alt="warehouse"/>
                        </a>
                    </div>
                </div>
                <div class="col-sm-6 col-lg-3">
                    <div class="certificate-item">
                        <a href={plant} data-fancybox="gallery">
                            <img src={plant} alt="plant"/>
                        </a>
                    </div>
                </div>
                <div class="col-sm-6 col-lg-3">
                    <div class="certificate-item">
                        <a href={lab_01} data-fancybox="gallery">
                            <img src={lab_01} alt="lab_01"/>
                        </a>
                    </div>
                </div>
                <div class="col-sm-6 col-lg-3">
                    <div class="certificate-item">
                        <a href={loading} data-fancybox="gallery">
                            <img src={loading} alt="loading"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>


    </>
  );
};

export default HomeContainer;
