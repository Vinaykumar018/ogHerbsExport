import React from "react";
import PageTitle from "../Container/PageTitle";
function Contact(){
    return(
        <>
            <PageTitle  title={"Contact"}/>
            <section class="contact-area pt-100 pb-70">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="contact-item contact-left">
                                <h1 class="log_1">Our Located Place</h1>
                                <p>We support businesses through periods of expansion succession, and all other important transitions.</p>
                                <ul>
                                    <li class="d-flex">
                                        <i class="bx bx-location-plus"></i>
                                        <div>
                                        Address: Sardharka Road, <br/>
                                        Opp.Fci Godown,<br/>
                                        B/h, Amul Way Bridge, <br/>
                                        Dhamalpar - 363621 <br/>
                                        Ta.Wankaner, Dist: Morbi.<br/>
                                        Gujarat - India.
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <i class="bx bx-mail-send"></i>
                                            <a href="/cdn-cgi/l/email-protection#5c3a332e282932393f3d282830393a3939381c3b313d3530723f3331"><span><span class="__cf_email__" data-cfemail="680e071a1c1d060d0b091c1c040d0e0d0d0c280f05090104460b0705">[email&#160;protected]</span></span></a>
                                        </div>
                                        <div>
                                            <i class="bx bx-mail-send"></i>
                                            <a href="/cdn-cgi/l/email-protection#355c5b535a75535a4741405b50535050515c5b51404641475c50461b565a58"><span><span class="__cf_email__" data-cfemail="80e9eee6efc0e6eff2f4f5eee5e6e5e5e4e9eee4f5f3f4f2e9e5f3aee3efed">[email&#160;protected]</span></span></a>
                                        </div>
                                    </li>
                                    <li>
                                        <i class="bx bx-phone-call"></i>
                                        <a href="tel:+919913822221">
                                        +91 99138 22221
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="contact-item contact-right">
                                <div class="gold" ></div>
                                <h2 class="log_1">Get In Touch</h2>
                                <div id="message_send"></div>
                                <form method="post" id="contactForm">
                                    <div class="row">
                                        <div class="col-sm-6 col-lg-6">
                                            <div class="form-group">
                                                <input type="text" name="name" id="name" class="form-control" required data-error="Please enter your name" placeholder="Name" />
                                                <div class="help-block with-errors"></div>
                                            </div>
                                        </div>
                                        <div class="col-sm-6 col-lg-6">
                                            <div class="form-group">
                                                <input type="email" name="email" id="email" class="form-control" required data-error="Please enter your email" placeholder="Email" />
                                                <div class="help-block with-errors"></div>
                                            </div>
                                        </div>
                                        <div class="col-sm-6 col-lg-6">
                                            <div class="form-group">
                                                <input type="text" name="phone_number" id="phone_number" required data-error="Please enter your number" class="form-control" placeholder="Phone" />
                                                <div class="help-block with-errors"></div>
                                            </div>
                                        </div>
                                        <div class="col-sm-6 col-lg-6">
                                            <div class="form-group">
                                                <input type="text" name="msg_subject" id="msg_subject" class="form-control" required data-error="Please enter your subject" placeholder="Subject" />
                                                <div class="help-block with-errors"></div>
                                            </div>
                                        </div>
                                        <div class="col-md-12 col-lg-12">
                                            <div class="form-group">
                                                <textarea name="message" class="form-control" id="message" cols="30" rows="8" required data-error="Write your message" placeholder="Message"></textarea>
                                                <div class="help-block with-errors"></div>
                                            </div>
                                        </div>
                                        <div class="col-md-12 col-lg-12">
                                            <button name="submit" type="submit" class="contact-btn btn" value="submit">
                                            Send Message
                                            </button>
                                            <div id="msgSubmit" class="h3 text-center hidden"></div>
                                            <div class="clearfix"></div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Contact;