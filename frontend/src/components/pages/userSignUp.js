import React, { Component } from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';
import axios from 'axios';
import Swal from 'sweetalert2'

export default class userSignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            age: '',
            country: '',
            email: '',
            password: '',


            userRes: '',

        };
    }
    updatefname = event => {
        event.preventDefault()
        console.log(event.target.value)
        var val = event.target.value
        console.log(val + "this is the value retrived")
        this.setState({
            firstName: event.target.value
        }, () => {
            console.log("New state in ASYNC callback:", this.state.firstName);
        });

        console.log("New state DIRECTLY after setState:", this.state.firstName);

    }
    updatelanme = event => {
        event.preventDefault()
        console.log(event.target.value)
        var val = event.target.value
        console.log(val + "this is the value retrived")
        this.setState({
            lastName: event.target.value
        }, () => {
            console.log("New state in ASYNC callback:", this.state.lastName);
        });

        console.log("New state DIRECTLY after setState:", this.state.lastName);

    }
    updateage = event => {
        event.preventDefault()
        console.log(event.target.value)
        var val = event.target.value
        console.log(val + "this is the value retrived")
        this.setState({
            age: event.target.value
        }, () => {
            console.log("New state in ASYNC callback:", this.state.age);
        });

        console.log("New state DIRECTLY after setState:", this.state.age);

    }
    updatecountry = event => {
        event.preventDefault()
        console.log(event.target.value)
        var val = event.target.value
        console.log(val + "this is the value retrived")
        this.setState({
            country: event.target.value
        }, () => {
            console.log("New state in ASYNC callback:", this.state.country);
        });

        console.log("New state DIRECTLY after setState:", this.state.country);

    }
    updateemail = event => {
        event.preventDefault()
        console.log(event.target.value)
        var val = event.target.value
        console.log(val + "this is the value retrived")
        this.setState({
            email: event.target.value
        }, () => {
            console.log("New state in ASYNC callback:", this.state.email);
        });

        console.log("New state DIRECTLY after setState:", this.state.email);

    }
    updatepassword = event => {
        event.preventDefault()
        console.log(event.target.value)
        var val = event.target.value
        console.log(val + "this is the value retrived")
        this.setState({
            password: event.target.value
        }, () => {
            console.log("New state in ASYNC callback:", this.state.password);
        });

        console.log("New state DIRECTLY after setState:", this.state.password);

    }
    addNewPackage = (event) => {
        if ((this.state.firstName === "") || (this.state.lastName === "") || (this.state.age === "") || (this.state.country === "") || (this.state.email === "") || (this.state.password === "")) {
            Swal.fire({
                position: 'middle',
                icon: 'error',
                title: 'Oops...',
                text: 'Check your inputs again!',
                timer: 1500
            })

        }

        event.preventDefault();
        // alert("successfully added")
        let userBody = JSON.stringify(
            {
                "firstName": this.state.firstName,
                "lastName": this.state.lastName,
                "age": this.state.age,
                "country": this.state.country,
                "email": this.state.email,
                "password": this.state.password,

            }
        );
        axios({
            headers: {
                //'Content-Type ': 'application/x-www-form-urlencoded;charset=UTF-8',
                // 'Content-Type': 'application/json, text/plain, */*',
                'Content-Type': 'application/json;charset=UTF-8',
            },

            method: 'POST',
            url: 'http://localhost:3500/api/users/create',
            data: userBody,

        })
            .then(response => {
                console.log("Arrived to send request")
                this.setState({
                    userRes: response.data
                })

            })
            .then(() => {
                Swal.fire({
                    position: 'middle',
                    icon: 'success',
                    title: 'User Added Successfully',
                    showConfirmButton: false,
                    timer: 3500
                })
            })

            .catch((console.log("ISSUES !")))

    }

    render() {
        return (
            <div style={{ backgroundImage: 'url("https://t4.ftcdn.net/jpg/02/85/21/61/240_F_285216103_ElyD9dO5q7MxXaEOcPvOsTTMK28IRIoW.jpg")', backgroundSize: "cover", position: "relative", height: "560px" }}>
                <div className="card" style={{ opacity: 0.9, borderRadius: 30, position: 'absolute', marginTop: 25, height: 500, width: 500, justifyContent: 'center', marginLeft: 500 }} >
                    <div className="card-body">
                        <form style={{ marginLeft: 50, marginTop: 20 }}>
                            <h2 style={{ color: 'black', marginLeft:80 }}>Register Here</h2>
                            <br />
                            <div className="form-row">
                                <div className="col-md-5 mb-4">
                                    <label htmlFor="validationDefault01">First Name</label>
                                    <input type="text" className="form-control" id="validationDefault01" placeholder="First Name" required
                                        onChange={this.updatefname} />
                                </div>
                                <div className="col-md-5 mb-3">
                                    <label htmlFor="validationDefault02">Last Name</label>
                                    <input type="text" className="form-control" id="validationDefault02" placeholder="Last Name" required
                                        onChange={this.updatelanme} />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col-md-5 mb-4">
                                    <label htmlFor="validationDefault01">Age</label>
                                    <input type="text" className="form-control" id="validationDefault01" placeholder="Age" required
                                        onChange={this.updateage} />
                                </div>
                                <div className="col-md-5 mb-3">
                                    <label htmlFor="validationDefault02">Country</label>
                                    <input type="text" className="form-control" id="validationDefault02" placeholder="Country" required
                                        onChange={this.updatecountry} />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col-md-5 mb-4">
                                    <label htmlFor="validationDefault01">Email</label>
                                    <input type="text" className="form-control" id="validationDefault01" placeholder="Email" required
                                        onChange={this.updateemail} />
                                </div>
                                <div className="col-md-5 mb-3">
                                    <label htmlFor="validationDefault02">Password</label>
                                    <input type="password" className="form-control" id="validationDefault02" placeholder="Password" required
                                        onChange={this.updatepassword} />
                                </div>
                            </div>
                            <button onClick={this.addNewPackage} className="btn btn-primary" type="submit" style={{marginLeft:118}}>Sign up</button>
                        </form>
                    </div>
                </div>
            </div>

        )
    }
}
