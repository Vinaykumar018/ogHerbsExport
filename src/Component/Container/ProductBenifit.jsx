import React from "react";

function Productbenifit(title){
    const name = title
    return(
        <>
        <section class="benefit-area mt-0 mb-150">
            <div class="container">
                <div class="benefit-content">
                    <div class="section-title">
                        <span class="sub-title">{name}</span>
                        <h2>Get Benefits of Using Fortune {name}</h2>
                    </div>
                    <p>Using {name} as part of your diet offers numerous benefits. It is a carbohydrate-rich food that provides energy for the body, contains essential vitamins, minerals like B vitamins, magnesium, phosphorus, potassium. {name} is easily digestible, making it gentle on the stomach, suitable for those with digestive sensitivities. Being gluten-free, it can be enjoyed by individuals following a gluten-free diet. {name} is versatile, can be used in a wide variety of dishes, from side dishes to main courses, it is a cost-effective staple that has a long shelf life.</p>
                    <div class="row">
                        <div class="col-sm-6 col-lg-6">
                            <div class="benefit-inner">
                                <i class="flaticon-darts"></i>
                                <h4>Feed binders, No colors</h4>
                            </div>
                        </div>
                        <div class="col-sm-6 col-lg-6">
                            <div class="benefit-inner">
                                <i class="flaticon-customer"></i>
                                <h4>No hormones, No stimulants</h4>
                            </div>
                        </div>
                        <div class="col-sm-6 col-lg-6">
                            <div class="benefit-inner">
                                <i class="flaticon-security-purposes"></i>
                                <h4>Micro nutrients are kept intact</h4>
                            </div>
                        </div>
                        <div class="col-sm-6 col-lg-6">
                            <div class="benefit-inner">
                                <i class="flaticon-artificial-intelligence"></i>
                                <h4>Best management of dietary fiber</h4>
                                </div>
                        </div>
                    </div>
                    <a class="cmn-btn" href="../about.php">
                    Know Details
                    <i class="bx bx-right-arrow-alt"></i>
                    </a>
                    <div class="benefit-shape">
                        <img src="/img/home-one/benefit-shape.png" alt="Benefit"/>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
export default Productbenifit;