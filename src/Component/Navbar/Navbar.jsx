import React from "react";
import Navmenu from "../NavMenu/Navmenu";
function Navbar(){
    return(<>
        <div className="header-top-area">
            <div className="container lg_count_s md_size" id="lg_count">
                <div className="row">
                    <div className="col-lg-6 ">
                        <div className="header-top-item">
                            <div className="header-right">
                                <ul className="d-flex">
                                    <li className="d-flex">
                                        <span id="i-can_logo"> <i className="fa fa-phone" aria-hidden="true"></i></span>
                                        <a href="tel:+919913822221">
                                        +91 99138 22221
                                        </a>
                                    </li>
                                    <li className="d-flex">
                                        <span id="i-can_logo"> <i className="fa fa-envelope" aria-hidden="true"></i></span>
                                        <a href="#;" id="num_mail_mobile">ogherbs@gmail.com
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* <div className="col-lg-6 ">
                        <div className="header-top-item d-flex justify-content-between">
                            <div className="header-left">
                                <ul id="head_menu_mobile" className="opset_m ">
                                    <li id="m_r_pace">
                                        <a href="about.html" className="opset_s " id="ver_c_worf">About Us</a>
                                    </li>
                                    <li id="m_r_pace">
                                        <a href="quality.html" className="opset_s " id="ver_c_worf">Quality</a>
                                    </li>
                                    <li id="m_r_pace">
                                        <a href="blog.html" className="opset_s " id="ver_c_worf">Blog</a>
                                    </li>
                                    <li id="m_r_pace">
                                        <a href="contact.html" className="opset_s " id="ver_c_worf">Contact Us</a>
                                    </li>
                                </ul>
                            </div>
                            <div id="google_translate_element"></div>
                        </div>
                    </div> */}
                </div>
            </div>
            </div>
            <Navmenu/>
        </>
    )
}
export default Navbar;