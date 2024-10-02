import React from "react";
import { Link } from 'react-router-dom';
import mobile_logo from '../../assets/logo.png';
// import logo from  '../assets/logo.png';
import logo from '../../assets/logo.png';
function Navmenu(){
    return(
        <div className="navbar-area sticky-top">
            <div className="mobile-nav">
                <Link to="/" className="logo">
                <img src={mobile_logo} alt="Logo" className="img_siz"/>
            </Link>
            </div>
            <div className="main-nav" id="mg_1">
                <div className="container-fluid">
                    <nav className="navbar navbar-expand-md navbar-light">
                        <Link className="navbar-brand" to="index.html">
                            <img src={logo} className="main-logo" alt="Logo"/>
                            <img src={logo} className="white-logo lgs" alt="Logo"/>
                        </Link>
                        <div className="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link to="/" className="nav-link" id="ver_c_worf">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="grains-seeds" className="nav-link dropdown-toggle " id="ver_c_worf">Grains & Seeds <i className="fa fa-chevron-down" aria-hidden="true"></i></Link>
                                    <ul className="dropdown-menu">
                                        <li className="nav-item">
                                            <Link to="grains-seeds/rice" className="nav-link">Rice <i className="fa fa-chevron-down float-end" aria-hidden="true"></i></Link>
                                            <ul className="dropdown-menu">
                                            <li className="nav-item">
                                            <Link to="grains-seeds/sella-basmati-rice" className="nav-link">Sella Basmati Rice</Link>
                                            </li>
                                            <li className="nav-item">
                                            <Link to="grains-seeds/goldan-sella-basmati-rice" className="nav-link">Golden Sella Basmati Rice</Link>
                                            </li>
                                            <li className="nav-item">
                                            <Link to="grains-seeds/brown-rice" className="nav-link">Brown Rice</Link>
                                            </li>
                                            <li className="nav-item">
                                            <Link to="grains-seeds/wada-kolam" className="nav-link">Wada Kolam</Link>
                                            </li>
                                            <li className="nav-item">
                                            <Link to="grains-seeds/matta-rice" className="nav-link">Matta Rice</Link>
                                            </li>
                                            <li className="nav-item">
                                            <Link to="grains-seeds/sona-masoori-rice" className="nav-link"> Sona Masoori Rice </Link>
                                            </li>
                                            <li className="nav-item">
                                            <Link to="grains-seeds/ponni-rice" className="nav-link">Ponni Rice </Link>
                                            </li>
                                            </ul>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="grains-seeds/wheat" className="nav-link ">Wheat <i className="fa fa-chevron-down float-end" aria-hidden="true"></i></Link>
                                            <ul className="dropdown-menu">
                                            <li className="nav-item">
                                            <Link to="grains-seeds/lokwan-wheat" className="nav-link ">Lokwan Wheat </Link>
                                            </li>
                                            <li className="nav-item">
                                            <Link to="grains-seeds/bhalia-wheat" className="nav-link ">Bhalia Wheat </Link>
                                            </li>
                                            <li className="nav-item">
                                            <Link to="grains-seeds/tukdi-wheat" className="nav-link ">Tukdi Wheat </Link>
                                            </li>
                                            <li className="nav-item">
                                            <Link to="grains-seeds/malavraj-wheat" className="nav-link ">Malavraj Wheat </Link>
                                            </li>
                                            <li className="nav-item">
                                            <Link to="grains-seeds/khapli-wheat" className="nav-link ">Khapli Wheat </Link>
                                            </li>
                                            <li className="nav-item">
                                            <Link to="grains-seeds/sihore-wheat" className="nav-link ">Sihore Wheat </Link>
                                            </li>
                                            </ul>
                                        </li>
                                        <li className="nav-item">
                                        <Link to="grains-seeds/maize-corn" className="nav-link ">Maize/Corn</Link>
                                        </li>
                                        <li className="nav-item">
                                        <Link to="grains-seeds/barley" className="nav-link ">Barley <i className="fa fa-chevron-down float-end" aria-hidden="true"></i></Link>
                                            <ul className="dropdown-menu">
                                            <li className="nav-item">
                                            <Link to="grains-seeds/pearl-barley" className="nav-link">Pearl Barley</Link>
                                            </li>
                                            <li className="nav-item">
                                            <Link to="grains-seeds/pot-barley" className="nav-link">Pot Barley</Link>
                                            </li>
                                            <li className="nav-item">
                                            <Link to="grains-seeds/hulled-barley" className="nav-link">Hulled Barley</Link>
                                            </li>
                                            <li className="nav-item">
                                            <Link to="grains-seeds/hulless-barley" className="nav-link">Hulless Barley</Link>
                                            </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>                              
                                <li className="nav-item">
                                <Link to="pulses" className="nav-link dropdown-toggle " id="ver_c_worf">Pulses <i className="fa fa-chevron-down" aria-hidden="true"></i></Link>
                                <ul className="dropdown-menu scrollbar">
                                <li className="nav-item">
                                <Link to="pulses/soya-beans" className="nav-link">Soya Beans</Link>
                                </li>
                                <li className="nav-item">
                                <Link to="pulses/chickpeas-black" className="nav-link">Chick peas Black</Link>
                                </li>
                                <li className="nav-item">
                                <Link to="pulses/white-chickpeas" className="nav-link">Chick peas White</Link>
                                </li>
                                <li className="nav-item">
                                <Link to="pulses/green-gram" className="nav-link">Green Gram</Link>
                                </li>
                                <li className="nav-item">
                                <Link to="pulses/bengal-gram" className="nav-link">Bengal Gram</Link>
                                </li>
                                <li className="nav-item">
                                <Link to="pulses/pigeon-peas" className="nav-link">Pigeon Peas</Link>
                                </li>
                                <li className="nav-item">
                                <Link to="pulses/blackchick-peas" className="nav-link">Black Chick Peas</Link>
                                </li>
                                <li className="nav-item">
                                <Link to="pulses/black-gram" className="nav-link">Black Gram</Link>
                                </li>
                                <li className="nav-item">
                                <Link to="pulses/blackgram-skin" className="nav-link">Black Gram with Skin</Link>
                                </li>
                                <li className="nav-item">
                                <Link to="pulses/chickpeas-green" className="nav-link">Chick peas Green</Link>
                                </li>
                                <li className="nav-item">
                                <Link to="pulses/cowpeas-red" className="nav-link">Cowpeas Red</Link>
                                </li>
                                <li className="nav-item">
                                <Link to="pulses/field-beans" className="nav-link">Field Beans</Link>
                                </li>
                                <li className="nav-item">
                                <Link to="pulses/greengram-skin" className="nav-link">Green Gram with Skin</Link>
                                </li>
                                <li className="nav-item">
                                <Link to="pulses/greengram-whole" className="nav-link">Green Gram Whole</Link>
                                </li>
                                <li className="nav-item">
                                <Link to="pulses/horse-gram" className="nav-link">Horse Gram</Link>
                                </li>
                                <li className="nav-item">
                                <Link to="pulses/red-lentil" className="nav-link">Lentil</Link>
                                </li>
                                <li className="nav-item">
                                <Link to="pulses/moth-beans" className="nav-link">Moth Beans</Link>
                                </li>
                                <li className="nav-item">
                                <Link to="pulses/green-peas" className="nav-link">Green Peas</Link>
                                </li>
                                <li className="nav-item">
                                <Link to="pulses/kidney-beans" className="nav-link">Red Kidney Beans</Link>
                                </li>
                                </ul>
                                </li>                                                             
                                <li className="nav-item">
                                <Link to="dry-fruits" className="nav-link dropdown-toggle " id="ver_c_worf">Dry Fruits & Nuts <i className="fa fa-chevron-down" aria-hidden="true"></i></Link>
                                <ul className="dropdown-menu">
                                <li className="nav-item">
                                <Link to="dry-fruits/peanuts" className="nav-link ">Peanuts <i className="fa fa-chevron-down float-end" aria-hidden="true"></i></Link>
                                <ul className="dropdown-menu">
                                <li className="nav-item">
                                <Link to="dry-fruits/peanuts" className="nav-link">Peanuts 1</Link>
                                </li>
                                <li className="nav-item">
                                <Link to="dry-fruits/peanuts" className="nav-link">Peanuts 2</Link>
                                </li>
                                </ul>
                                </li>
                                <li className="nav-item">
                                <Link to="dry-fruits/almonds" className="nav-link">Almonds</Link>
                                </li>
                                <li className="nav-item">
                                <Link to="dry-fruits/cashew-nuts" className="nav-link">Cashew Nuts</Link>
                                </li>
                                <li className="nav-item">
                                <Link to="dry-fruits/dates" className="nav-link">Dates</Link>
                                </li>
                                <li className="nav-item">
                                <Link to="dry-fruits/dried-dates" className="nav-link">Dried Dates</Link>
                                </li>
                                <li className="nav-item">
                                <Link to="dry-fruits/betel-nut" className="nav-link">Betel Nut</Link>
                                </li>
                                <li className="nav-item">
                                <Link to="dry-fruits/desiccated-coconut" className="nav-link">Desiccated Coconut</Link>
                                </li>
                                <li className="nav-item">
                                <Link to="dry-fruits/pistachios" className="nav-link">Pistachios</Link>
                                </li>
                                <li className="nav-item">
                                <Link to="dry-fruits/raisin" className="nav-link">Raisin</Link>
                                </li>
                                <li className="nav-item">
                                <Link to="dry-fruits/walnut" className="nav-link">Walnut</Link>
                                </li>
                                </ul>
                                </li>                                
                                <li className="nav-item">
                                    <Link to="/about" className="nav-link" id="ver_c_worf">About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/quality" className="nav-link" id="ver_c_worf">Quality</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/contact" className="nav-link" id="ver_c_worf">Contact Us</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
        
    )
}
export default Navmenu;