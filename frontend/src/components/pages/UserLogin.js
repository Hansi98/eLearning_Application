import React, { Component } from 'react'
import axios from 'axios';
import { Redirect } from 'react-router-dom'
import Swal from 'sweetalert2'
import Logo from './logo.png';

export default class UserLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
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
        // alert("successfully added")
        let loginBody = JSON.stringify(
            {
                "email": this.state.username,
                "password": this.state.password,
            }
        );
        axios({
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
            },
            method: 'POST',
            url: 'http://localhost:3500/api/users/userLogin',
            data: loginBody,
        })
            .then(response => {
                console.log("Arrived to login request")
                if (response.status === 200) {
                    // alert("login successful")
                    // browserHistory.push("/home")
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
                            title: 'User Login Successful !',
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
                backgroundImage: 'url("https://t3.ftcdn.net/jpg/01/42/18/94/240_F_142189469_5UncMeCpdfGZa2AwziCxnOyVnWNYnjxi.jpg")',
                backgroundSize: "cover", position: "relative", height: "560px",
            }}>
                <div className="card" style={{ opacity: 0.9, borderRadius: 30, position: 'absolute', marginTop: 25, height: 500, width: 500, justifyContent: 'center', marginLeft: 500 }} >
                    <div className="card-body">
                        <form style={{ marginLeft: 30, marginTop: 20 }}>

                            <h2 style={{ color: 'black', marginLeft:120 }}>User Login</h2>
                            <br />
                                <div className="form-group" >
                                <label>Email address</label>
                                <input id="email" type="email" className="form-control" placeholder="Enter email" onChange={this.updateUsername} required />
                            </div>

                            <div className="form-group">
                                <label>Password</label>
                                <input id="password" type="password" className="form-control" placeholder="Enter password" onChange={this.updatePassword} required />
                            </div>

                            <div className="form-group">
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                    <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                                </div>
                            </div>

                            <button type="submit" className="btn btn-primary btn-block" onClick={this.login} style={{marginLeft:-2}}>Login</button>
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
