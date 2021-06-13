import React, { Component } from 'react';
//import { Redirect } from 'react-router-dom';
import { Redirect } from 'react-router-dom'
import axios from 'axios';
import Swal from 'sweetalert2'

class AdminLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            loggedin: false,
            resData: ''
        };
    }

    updateUsername = event => {
        event.preventDefault()
        console.log(event.target.value)
        var val = event.target.value
        console.log(val + "this is the value retrived")
        this.setState({
            username: event.target.value
        }, () => {
            console.log("New state in ASYNC callback:", this.state.username);
        });

        console.log("New state DIRECTLY after setState:", this.state.username);
        console.log("New state DIRECTLY after setState:", this.state.username);
    }


    updatePassword = event => {
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
        console.log("New state DIRECTLY after setState:", this.state.password);
    }

    login = (event) => {

        event.preventDefault();
        let loginBody = JSON.stringify(
            {
                "username": this.state.username,
                "password": this.state.password,
            }
        );
        axios({
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
            },
            method: 'POST',
            url: 'http://localhost:3500/api/admins/adminLogin',
            data: loginBody,
        })
            .then(response => {
                console.log("Arrived to login request")
                if (response.status === 200) {
                
                    this.setState({
                        resData: response.data
                    })
                    console.log("this is resData status " + this.state.resData.messageCode)
                    if (this.state.resData.messageCode === "1000") {
                        this.setState({
                            loggedin: true
                        })
                        Swal.fire({
                            position: 'middle',
                            icon: 'success',
                            title: 'Admin Login Successful !',
                            showConfirmButton: false,
                            timer: 3500
                        })
                    }
                    console.log("this is login status " + this.state.loggedin)


                }
            })
            .then(this.navigateToHome)
            .catch((console.log("ISSUES !")))


    }
    navigateToHome = () => {
        if (this.state.loggedin) {
            console.log("came for navigation")

        }
    }

    render() {
        if (this.state.loggedin === true) {
            return <Redirect to='/' />
        }

        return (
            <div style={{
                backgroundImage: 'url("https://t4.ftcdn.net/jpg/02/79/28/71/240_F_279287163_50ZaXW6BHxCOsDDF9kV5IbK4IrhjXc2T.jpg")',
                backgroundSize: "cover", height: "520px",
            }}>

                <div className="card" style={{ opacity: 0.8, borderRadius: 30, position: 'absolute', marginTop: 50, height: 450, width: 500, justifyContent: 'center', marginLeft: 520, marginRight: 500 }} >
                    <div className="card-body">
                        <form style={{}}>
                            <br />
                            <div style={{ justifyContent: 'center', alignItems: 'center' ,marginLeft:100}}> <h3> Admin Login</h3> </div>

                            <div className="form-group" >
                                <label>Email address</label>
                                <input type="email" className="form-control" placeholder="Enter email" onChange={this.updateUsername} required />
                            </div>

                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" className="form-control" placeholder="Enter password" onChange={this.updatePassword} required />
                            </div>

                            <div className="form-group">
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                    <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                                </div>
                            </div>

                            <button type="submit" className="btn btn-primary btn-block" onClick={this.login}>Login</button>
                            <p className="forgot-password text-right">
                                Forgot <a href="#">password?</a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default AdminLogin;