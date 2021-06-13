import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaGooglePlus } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { TiUser } from "react-icons/ti";
import { MDBBtn } from "mdbreact";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
function Footer() {
    return (
        <div className="main-footer " style={{ backgroundColor: "#37474f" }}>
            <div className="container">
                <div className="row">
                    {/* col 1 */}
                    <div className="col-md-3 col-sm-6 " style={{ color: 'white', marginTop: 10, fontSize:12 }}>
                        <h5>Top online courses</h5>
                        <ul className="list-unstyled">
                            <li >Machine Learning</li>
                            <li>Getting Started with AWS</li>
                            <li>AI for Everyone</li>
                            <li>Python for Everybody</li>
                            <li>Data Science</li>

                        </ul>

                    </div>

                    <div className="col-md-3 col-sm-6 " style={{ color: 'white', marginTop: 10, fontSize:12 }}>
                        <h5>Online Degree Programs</h5>
                        <ul className="list-unstyled">
                            <li >Computer Science Degrees</li>
                            <li>Business Degrees</li>
                            <li>Data Science Degrees</li>
                            <li>Mcs Data Science</li>
                            <li>Global MBA</li>

                        </ul>

                    </div>

                    {/* col 3 */}
                    <div className="col-md-3 col-sm-6 " style={{ color: 'white', marginTop: 10,fontSize:12 }}>
                        <h5>We are on</h5>
                        <ul className="list-unstyled">
                            <a style={{ color: "white" }} href="https://www.facebook.com/">  <li>
                            <FaFacebookSquare style={{ marginRight: 15, fontSize:12 }} />facebook</li></a>
                            <li><FaTwitterSquare style={{ marginRight: 15, fontSize:12}} />Twitter</li>
                            <li><FaGooglePlus style={{ marginRight: 15, fontSize:12 }} />Google Plus</li>
                            <li><FaLinkedin style={{ marginRight: 15, fontSize:12 }} />Linkedin</li>
                        </ul>

                    </div>
                    {/* col 4 */}

                    <div className="col-md-3 col-sm-6 " style={{ color: 'white', marginTop: 10 ,fontSize:12 }}>
                        <h5>Admin section</h5>
                        <ul className="list-unstyled">
                            <a href="http://localhost:3000/adminLogin">< MDBBtn color="blue-grey" style={{ padding: 5 ,fontSize:12}} > <TiUser size={25} />Admin Login</MDBBtn></a>
                        </ul>

                    </div>
                    <div className="footer-copyright text-center py-3" style={{color: 'white',fontSize:12, marginLeft:10}}>© 2021 Copyright:
                <a href="#"> eDXLearning.com</a>
              </div>
                </div>
            </div>
        </div>
    )
}
export default Footer;


