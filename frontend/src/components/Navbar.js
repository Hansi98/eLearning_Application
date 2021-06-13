

import React, { Component } from 'react'
import { MDBBtn } from "mdbreact";
import Logo from '../logo.png';
import { TiUser } from "react-icons/ti";
import { TiUserAdd } from "react-icons/ti";

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: "#37474f", height: 70 }}>
                <a className="navbar-brand" href="http://localhost:3000/">
                    <img src={Logo} height="30px" /></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="http://localhost:3000/">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="http://localhost:3000/AddCourse">Add courses</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="http://localhost:3000/PackageInfo">Course Info</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="http://localhost:3000/userInfo">Student Info</a>
                        </li>
                       
                    </ul>
                    <a href="http://localhost:3000/userLogin">< MDBBtn color="blue-grey" style={{ padding: 5, paddingLeft:10, paddingRight:14 }} > <TiUser size={25} /> Login</MDBBtn></a>


                    <a href="http://localhost:3000/userSignup">< MDBBtn color="blue-grey" style={{ padding: 5 }} > <TiUserAdd size={25} /> Register</MDBBtn></a>


                </div>
            </nav>
        )
    }
}
export default Navbar;



