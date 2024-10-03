import React from 'react' 
function AboutMessage(){
    return(
        <>
        <section class="about-area ptb-100">
            <div class="container">
                <div class="row align-iems-center">
                    <div class="col-lg-6">
                        <div class="section-title">
                            <span class="sub-title">OG Herbs</span>
                            <h1 class="log_1">Welcome To OG Herbs</h1>
                        </div>
                        <div class="about-content">
                            <p>Spices by <strong>OG Herbs</strong>, the best Indian spices supplier, has been an integral part of Indian food for a long time, and today, even become more relevant for us. Spices offered by the top name among the <strong>spices exporter in India</strong>, OG Herbs, not only just enthuse your taste buds but are composed of an impressive list of phytonutrients, essential oils, antioxidants, minerals and vitamins that are indispensable for complete wellness. Spices by OG Herbs contain an imposing list of plant-derived chemical compounds that are known to have disease averting and health endorsing properties. Since times immemorial, they have been in use for their anti-inflammatory, carminative, anti-flatulent properties.</p>
                            <ul>
                            <li><i class="bx bx-check"></i>Add a dash of magic to every dish.</li>
                            <li><i class="bx bx-check"></i>From farm to table, pure spices for culinary delight.</li>
                            <li><i class="bx bx-check"></i>Unlock a world of taste with our premium spices.</li>
                            <li><i class="bx bx-check"></i>Bringing exotic flavors to your kitchen.</li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="about-img-wrap">
                            <div class="about-img-slider owl-theme owl-carousel" style={{ zIndex: 1, position: 'relative' }}>
                                <div className="about-img-item">
                                    <img src='img/masala/other-spices/slider/grains-millet.jpg' alt="Grains Millet" />
                                </div>
                            </div>
                            <div class="about-shape">
                            <img src='img/home-one/about2.png' alt="About 2" style={{width: '106vh'}} />
                            <img src='img/masala/other-spices/index-mix.jpg' alt="Index Mix" />
                            <img src='img/home-one/about4.png' alt="About 4" />
                            <img src='img/home-one/about5.png' alt="About 5" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}
export default AboutMessage;