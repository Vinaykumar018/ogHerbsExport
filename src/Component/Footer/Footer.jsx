import React from "react";
import footer_logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <>
      <footer class="pt-100 pb-70">
        <div class="container">
          <div class="row">
            <div class="col-sm-6 col-lg-3">
              <div class="footer-item">
                <div class="footer-logo">
                  <a class="logo-link" href="index.html">
                    <img src={footer_logo} alt="Logo" />
                  </a>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3682.966449112159!2d70.97574658051843!3d22.617728026497588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395997c23938c53f%3A0xa588050b2621ed98!2sFORTUNE%20INDUSTRIES!5e0!3m2!1sen!2sin!4v1688105868756!5m2!1sen!2sin"
                    width="100%"
                    height="250px"
                    allowfullscreen
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-lg-3">
              <div class="footer-item">
                <div class="footer-service">
                  <h3>Quick Links</h3>
                  <ul>
                    <li>
                      <a href="index.html" target="_blank">
                        Home
                      </a>
                    </li>
                    <li>
                      <a href="about.html" target="_blank">
                        About Us
                      </a>
                    </li>
                    <li>
                      <a href="blog.html" target="_blank">
                        Blog
                      </a>
                    </li>
                    <li>
                      <a href="quality.html" target="_blank">
                        Quality
                      </a>
                    </li>
                    <li>
                      <a href="terms-and-conditions.html" target="_blank">
                        Terms And Conditions
                      </a>
                    </li>
                    <li>
                      <a href="privacy-policy.html" target="_blank">
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a href="contact.html">Contact Us</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-lg-3">
              <div class="footer-item">
                <div class="footer-service">
                  <h3>Our Products</h3>
                  <ul>
                    <li>
                      <a href="products/fmcg.html" target="_blank">
                        FMCG Products
                      </a>
                    </li>
                    <li>
                      <a href="grains-seeds.html" target="_blank">
                        Grains & Seeds
                      </a>
                    </li>
                    <li>
                      <a href="pulses.html" target="_blank">
                        Pulses
                      </a>
                    </li>
                    <li>
                      <a href="bland-spices.html" target="_blank">
                        Spices
                      </a>
                    </li>
                    <li>
                      <a href="dry-fruits.html" target="_blank">
                        Dry Fruits & Nuts
                      </a>
                    </li>
                    <li>
                      <a href="flour.html" target="_blank">
                        Flour
                      </a>
                    </li>
                    <li>
                      <a href="feed.html" target="_blank">
                        Feed
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-lg-3">
              <div class="footer-item">
                <div class="footer-touch">
                  <h3>Get In Touch</h3>
                  <ul>
                    <li>
                      <i class="fa fa-phone" aria-hidden="true"></i>
                      <h4>Phone</h4>
                      <a href="tel:+919913822221">+91 99138 22221</a>
                    </li>
                    <li>
                      <i class="fa fa-envelope" aria-hidden="true"></i>
                      <h4>Email</h4>
                      <a href="javascript:void(0);"></a>
                    </li>
                    <li>
                      <i class="fa fa-map-marker" aria-hidden="true"></i>
                      <h4>Fectory Address</h4>
                      <ul>
                        <li class="p-0">Survey No. 70 / P,</li>
                        <li class="p-0">Sardharka Road,</li>
                        <li class="p-0">Opp.Fci Godown,</li>
                        <li class="p-0">B/h, Amul Way Bridge,</li>
                        <li class="p-0">Dhamalpar - 363621,</li>
                        <li class="p-0">Ta.Wankaner, Dist: Morbi, </li>
                        <li class="p-0">Gujarat - India.</li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div class="copyright-area">
        <div class="container">
          <div class="row">
            <div class="col-md-5">
              <div class="copyright-item float-start">
                <p>
                  Copyright © 2023 <Link to="/">OG Herbs.</Link> All Right
                  Reserved
                </p>
              </div>
            </div>
            <div class="col-md-3">
              <div class="footer_icon  float-left">
                <a href="#" target="_blank">
                  <i class="fab fa-facebook" aria-hidden="true"></i>
                </a>
                <a href="#" target="_blank">
                  <i class="fab fa-twitter" aria-hidden="true"></i>
                </a>
                <a href="#" target="_blank">
                  <i class="fab fa-pinterest-p" aria-hidden="true"></i>
                </a>
                <a href="#" target="_blank">
                  <i class="fab fa-linkedin" aria-hidden="true"></i>
                </a>
              </div>
            </div>
            <div class="col-md-4">
              Designed and Developed By{" "}
              <a href="https://www.whiznicsolutions.com/">
                <b>Whiznic Solutions.</b>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Footer;
