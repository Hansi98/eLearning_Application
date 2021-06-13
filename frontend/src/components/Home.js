import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer
, MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, MDBRow  } from
"mdbreact";
import { Fa500Px, FaAlignCenter, FaAlignLeft, FaUniversity } from "react-icons/fa";


import React from 'react'
function Home() {
    return (
        <div style={{
           
        }}>
            <br />
            <br />

            {/* top image with side text */}
            <MDBContainer>
                <MDBRow style={{marginLeft: -100,marginRight:-100}}>
                <MDBCol lg="6">
                    <MDBView waves>
                    <img src="https://t4.ftcdn.net/jpg/02/09/86/67/240_F_209866700_0AEd2dA7gya3cHUzDdy4UvVRgQQIM3gD.jpg"
                     style={{height:'300px', width:'700px'}} className="img-fluid" alt=""  />
                    </MDBView>
                </MDBCol>
                <MDBCol lg="6">
                    <p style={{ marginTop: 70,marginLeft:100, fontSize: 30, fontWeight: 'bold',color:'#557174'}}>Master in-demand skills quickly</p>
                    <p style={{ marginTop: 20,marginLeft:125, fontSize: 15,color:'#557174'}}>Build and practice skills that will set your resume apart</p>
                    <div style={{marginLeft:270}}>
                    <FaUniversity size={55} /> 
                    </div>
                    <p style={{ marginTop: 20, marginLeft: 220, fontSize: 15,color:'#557174'}}>Learn from top instructors</p>
                   
                </MDBCol>
                </MDBRow>
            </MDBContainer>

            {/* services */}
            <div class="card" style={{ marginTop: 40, color:'#557174'}}>
              <h3  style={{fontSize: 25, fontWeight: 'bold',marginTop: 10, marginLeft:720}} >COURSES</h3>  
            </div>
            {/* <p style={{ marginLeft: 700, marginTop: 30, fontSize: 30, fontWeight: 'bold'}}>SERVICES</p> */}
            <div className="card-deck" style={{ marginLeft: 100, marginRight: 100, marginBottom: -80, marginTop: 30 }}>
               
                <div className="card shadow-lg p-1 mb-5 bg-white rounded" style={{ height: 520 }}>
                    <img src="https://t3.ftcdn.net/jpg/02/51/75/74/240_F_251757470_N5rGjKZeS5yQVtX0yo4WnTwe251U6e1J.jpg" className="card-img-top" alt="..." height="320px" />
                    <div className="card-body">
                        <h5 className="card-title">Online Courses</h5>
                        <p className="card-text"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
                    </div>
                    <div className="card-footer">
                        <Link to="/PackageInfo"><button type="button" className="btn btn-dark">View more</button></Link>
                    </div>
                </div>
                <div className="card shadow-lg p-1 mb-5 bg-white rounded" style={{ height: 520 }}>
                    <img src="https://t3.ftcdn.net/jpg/03/06/71/70/240_F_306717020_WVtR9wi2t9Z26azfuIO6olq7VOY6n2CA.jpg" className="card-img-top" alt="..." height="320px" />
                    <div className="card-body" style={{ height: 200 }}>
                        <h5 className="card-title">Masters Degree Programs</h5>
                        <p className="card-text"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
                    </div>
                    <div className="card-footer">
                        <Link to="/PackageInfo"><button type="button" className="btn btn-dark">View more</button></Link>
                    </div>
                </div>
                <div className="card shadow-lg p-1 mb-5 bg-white rounded" style={{ height: 520 }}>
                    <img src="https://t3.ftcdn.net/jpg/02/82/93/74/240_F_282937433_DCafqOOe03EqgZAgsXIGSCAxCWiweXjh.jpg" className="card-img-top" alt="..." height="320px" />
                    <div className="card-body">
                        <h5 className="card-title">Certificate Courses</h5>
                        <p className="card-text"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
                    </div>
                    <div className="card-footer">
                        <a href="/PackageInfo"><button type="button" className="btn btn-dark">View more</button></a>
                    </div>
                </div>
            </div>
            <br />
            <br />
            <br />   
        </div>
        
    )
}
export default Home;
