import React from 'react';
import PageTitle from "../Container/PageTitle";
import { useSelector, useDispatch } from "react-redux";
import { selectTitle } from "../../Model/Reducer/TitleReducer"
import PulsesTopHeader from './PulsesTopHeader';
const Pulses = () => {
    const Title = useSelector((state) => selectTitle(state, "pulses"));
    return (
      <>
       <PulsesTopHeader></PulsesTopHeader>
      <section className="about-area ptb-100">
  <div className="container">
    <div className="row align-items-center">
      <div className="col-lg-6">
        <div className="section-title">
          <span className="sub-title">FORTUNE INDUSTRIES</span>
          <h1 className="log_1">About Pulses</h1>
        </div>
        <div className="about-content">
          <p>
            Pulses, commonly known as legumes, are a diverse group of edible seeds that encompass various nutritious and versatile crops such as lentils, chickpeas, beans, and peas. These humble powerhouses pack a potent punch when it comes to nutrition, offering an abundance of plant-based protein, dietary fiber, an array of essential vitamins and minerals. Pulses are not only nourishing but also environmentally friendly, as they have a low carbon footprint and promote sustainable agriculture through their ability to fix nitrogen in the soil. With their ability to improve soil health, pulses have gained recognition as a vital component of a healthy and sustainable global food system.
          </p>
          <ul>
            <li><i className="bx bx-check"></i>Essential Vitamins and Minerals contribute to Health</li>
            <li><i className="bx bx-check"></i>Helps in Maintaining healthy Blood Pressure levels</li>
            <li><i className="bx bx-check"></i>Helps in regulating Bowel movements</li>
            <li><i className="bx bx-check"></i>Supports Bone Health with Calcium</li>
          </ul>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="about-img-wrap">
          <div className="about-img-slider owl-theme owl-carousel">
          <div className="about-img-item">
                  <img src="/img/products/grains-seeds/amaranth.jpg" alt="product" />
                </div>
          </div>
          <div className="about-shape">
            <img src="/img/home-one/about2.png" alt="product" />
            <img src="/img/masala/other-spices/pulses-mix.jpg" alt="product" />
            <img src="/img/home-one/about4.png" alt="product" />
            <img src="/img/home-one/about5.png" alt="product" />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<section className="team-area pb-150">
  <div className="container">
    <div className="section-title">
      <span className="sub-title">FORTUNE INDUSTRIES</span>
      <h2>Our Pulses Products</h2>
    </div>
    <div className="row" style={{ justifyContent: 'center' }}>
      {[
        { href: "pulses/soya-beans.html", img: "Soybean.jpg", title: "Soya Beans" },
        { href: "pulses/chickpeas-black.html", img: "Chickpeas Black.jpg", title: "Chick peas Black" },
        { href: "pulses/white-chickpeas.html", img: "Chickpea White.jpg", title: "Chick peas White" },
        { href: "pulses/green-gram.html", img: "Green Gram.jpg", title: "Green Gram" },
        { href: "pulses/bengal-gram.html", img: "bengal-gram.jpg", title: "Bengal Gram" },
        { href: "pulses/pigeon-peas.html", img: "Pigeon Peas.jpg", title: "Pigeon Peas" },
        { href: "pulses/blackchick-peas.html", img: "Black Chickpeas.jpg", title: "Black Chick Peas" },
        { href: "pulses/black-gram.html", img: "Black Gram.jpg", title: "Black Gram" },
        { href: "pulses/blackgram-skin.html", img: "Black Gram With Skin.jpg", title: "Black Gram with Skin" },
        { href: "pulses/chickpeas-green.html", img: "Chickpea Green.jpg", title: "Chick peas Green" },
        { href: "pulses/cowpeas-red.html", img: "Cowpeas Red.jpg", title: "Cowpeas Red" },
        { href: "pulses/field-beans.html", img: "Field Beans.jpg", title: "Field Beans" },
        { href: "pulses/greengram-skin.html", img: "Green Gram with Skin.jpg", title: "Green Gram with Skin" },
        { href: "pulses/greengram-whole.html", img: "Green Gram whole.jpg", title: "Green Gram Whole" },
        { href: "pulses/horse-gram.html", img: "Horse Gram.jpg", title: "Horse Gram" },
        { href: "pulses/red-lentil.html", img: "Lentil.jpg", title: "Lentil" },
        { href: "pulses/moth-beans.html", img: "Moth Beans.jpg", title: "Moth Beans" },
        { href: "pulses/green-peas.html", img: "Green Peas.jpg", title: "Green Peas" },
        { href: "pulses/kidney-beans.html", img: "Red Kidney Beans.jpg", title: "Red Kidney Beans" },
      ].map((product, index) => (
        <div className="col-sm-6 col-lg-3" key={index}>
          <div className="team-item lg_mb_15">
            <a href={product.href}>
              <img src={`/img/products/pulses/${product.img}`} alt={product.title} />
            </a>
            <a href={product.href} className="product-heading">
              <h3>{product.title}</h3>
            </a>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


      </>
            
             
            
      
    );
}

export default Pulses;
