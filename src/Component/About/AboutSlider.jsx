import React from "react";
// import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

function AboutSlider(){
    return(
        <>
        <Swiper
         spaceBetween={30}           // Space between slides
         slidesPerView={3}           // Show 6 slides per view
         loop={true}                 // Loop the slides
         autoplay={{                 // Autoplay configuration
            delay: 3000,              // 3 seconds delay
            disableOnInteraction: false,
         }}
            className="offer-slider"
        >
            <SwiperSlide>
                <div className="offer-item">
                    <div className="offer-top">
                        <img src="img/products/grains-seeds/amaranth.jpg" alt="Offer" />
                        <i className="flaticon-3d-print"></i>
                    </div>
                    <div className="offer-bottom">
                        <h3>
                            <a href="grains-seeds.html">Grains & Seeds</a>
                        </h3>
                        <p>Grains and seeds are essential components of a healthy diet, offering</p>
                        <a className="offer-link" href="grains-seeds.html">
                            Read More <i className="bx bx-plus"></i>
                        </a>
                    </div>
                    <div className="offer-shape">
                        <img src="img/home-two/offer-shape.png" alt="Offer" />
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="offer-item">
                    <div className="offer-top">
                        <img src="img/products/pulses/bengal-gram.jpg" alt="Offer" />
                        <i className="flaticon-robotic-arm"></i>
                    </div>
                    <div className="offer-bottom">
                        <h3>
                            <a href="pulses.html">Pulses</a>
                        </h3>
                        <p>Pulses, commonly known as legumes, are a diverse group of edible seeds</p>
                        <a className="offer-link" href="pulses.html">
                            Read More <i className="bx bx-plus"></i>
                        </a>
                    </div>
                    <div className="offer-shape">
                        <img src="img/home-two/offer-shape.png" alt="Offer" />
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div class="offer-item">
                    <div class="offer-top">
                        <img src="img/products/dry-fruits/almonds.jpg" alt="Offer"/>
                        <i class="flaticon-3d-print"></i>
                    </div>
                    <div class="offer-bottom">
                        <h3>
                        <a href="dry-fruits.html">Dry Fruits & Nuts</a>
                        </h3>
                        <p>Dry fruits and nuts are a diverse and nutritious group of food items that </p>
                        <a class="offer-link" href="dry-fruits.html">Read More
                        <i class="bx bx-plus"></i>
                        </a>
                    </div>
                    <div class="offer-shape">
                        <img src="img/home-two/offer-shape.png" alt="Offer"/>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div class="offer-item">
                    <div class="offer-top">
                        <img src="img/products/spices/Asafoetida.jpg" alt="Offer"/>
                        <i class="flaticon-defribillator"></i>
                    </div>
                    <div class="offer-bottom">
                        <h3>
                        <a href="bland-spices.html">Spices</a>
                        </h3>
                        <p>The genesis of the concept of blended masala spices can be traced to</p>
                        <a class="offer-link" href="bland-spices.html">Read More
                        <i class="bx bx-plus"></i>
                        </a>
                    </div>
                    <div class="offer-shape">
                        <img src="img/home-two/offer-shape.png" alt="Offer"/>
                    </div>
                </div>    
            </SwiperSlide>
            <SwiperSlide>
                <div class="offer-item">
                    <div class="offer-top">
                    <img src="img/products/flour/wheatfresh-flour.jpg" alt="Offer"/>
                    <i class="flaticon-robotic-arm"></i>
                    </div>
                    <div class="offer-bottom">
                    <h3>
                    <a href="flour.html">Flour</a>
                    </h3>
                    <p>Flour is a versatile and essential ingredient that plays a fundamental role</p>
                    <a class="offer-link" href="flour.html">Read More
                    <i class="bx bx-plus"></i>
                    </a>
                    </div>
                    <div class="offer-shape">
                        <img src="img/home-two/offer-shape.png" alt="Offer"/>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                    <div class="offer-item">
                        <div class="offer-top">
                        <img src="img/services/dairy-cow.png" alt="Offer"/>
                        <i class="flaticon-defribillator"></i>
                        </div>
                        <div class="offer-bottom">
                            <h3>
                            <a href="feed.html">Feed</a>
                            </h3>
                            <p>Before 1990's people of India were unaware of any kind of material known</p>
                            <a class="offer-link" href="feed.html">Read More
                            <i class="bx bx-plus"></i>
                            </a>
                        </div>
                        <div class="offer-shape">
                            <img src="img/home-two/offer-shape.png" alt="Offer"/>
                        </div>
                    </div>  
            </SwiperSlide>
            {/* Repeat SwiperSlide for other items as necessary */}
        </Swiper>
        </>
    );
}
export default AboutSlider;