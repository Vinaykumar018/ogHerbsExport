import React from "react";
import PageTitle from "../Container/PageTitle";
import Productbenifit from "../Container/ProductBenifit";

function Rice(){
    return(
        <>
            <PageTitle title={"Rice"}/>
            <section>
                <div class="job-area job-area-two job-area-three">
                    <div class="container-fluid">
                        <div class="row m-0">
                            <div class="col-lg-6">
                                <div class="job-img">
                                    <img src="/img/products/grains-seeds/rice.jpg" alt="cattle feed"/>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="job-content job-content_02">
                                    <div class="section-title">
                                        <span class="sub-title">FORTUNE INDUSTRIES</span>
                                        <h1 class="log_1">Rice</h1>
                                    </div>
                                    <p>Rice is a staple grain that serves as a primary food source for a significant portion of the world's population. It is cultivated in various forms such as long-grain, medium-grain, and short-grain, each with its own characteristics. Rice is a versatile ingredient used in a wide range of culinary applications.<br/>
                                    <strong>Manufacturer, Exporters, Suppliers</strong><br/>
                                    <strong>Network Areas Related keywords:</strong> Frozen food, Ready to Eat Food, etc.<br/>
                                    <strong>USA:</strong> Montana, Nevada, New Jersey, New Mexico, Texas, South Dakota, etc.<br/>
                                    <strong>Others:</strong> China, Myanmar, Nepal, Maldives, Bhutan, Bangladesh, UK etc.<br/>
                                    <strong>Indian Areas:</strong> Bihar, Assam, Gujarat, Himachal Pradesh, Delhi, Mumbai, Orissa, Punjab, west bengal, Madhya Pradesh, Rajasthan, Sikkim, West Bengal, Haryana, Andhra Pradesh, Hyderabad, Maharashtra, Chandigarh, Jharkhand, Uttarakhand, Goa etc.<br/></p>
                                    <a class="cmn-btn" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                    Inquiry Now
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="faq-area pt-100 pb-20">
                <div class="container">
                    <div class="row faq-wrap">
                        <div class="col-lg-9">
                            <div class="faq-head section-title text-start">
                                <span class="sub-title">Rice</span>
                                <h3 class="log_3">Product Description</h3>
                            </div>
                            <div class="faq-item pb-70">
                                <ul class="accordion">
                                    <li>
                                        <a class>Usage</a>
                                        <p>Rice, a versatile grain, finds extensive usage in diverse culinary traditions around the world. It serves as a staple ingredient in countless dishes, both savory and sweet. Rice can be cooked as a standalone side dish or incorporated into main courses such as stir-fries, pilafs, curries, and casseroles.</p>
                                    </li>
                                    <li>
                                        <a class>Nutrition Data</a>
                                        <p>Rice is a nutritious grain that provides important dietary components. In a 100-gram serving of cooked white rice, you can expect to find approximately 130 calories, 28 grams of carbohydrates, 2.7 grams of protein, and less than 0.5 grams of fat. Rice is low in cholesterol and contains no gluten.</p>
                                    </li>
                                    <li>
                                        <a class>Other Details</a>
                                        <p>It provides energy through carbohydrates, is low in fat, and contains essential vitamins and minerals. Rice is easily digestible and suitable for individuals with gluten sensitivities. With its long shelf life and affordability, rice is a convenient and cost-effective option for meals. Whether enjoyed as a side dish, in main courses.</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <Productbenifit title={"Rice"}/> */}

        </>
    )
}
export default Rice;