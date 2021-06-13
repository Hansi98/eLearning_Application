import React, { Component } from 'react'
import axios from 'axios';
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom';

class AddCourse extends Component {
    constructor(props) {
        super(props);
        this.state = {
            courseName: '',
            description: '',
            category: '',
            duration: '',


            packRes: '',

        };
    }
    updateCourseName = event => {
        event.preventDefault()
        console.log(event.target.value)
        var val = event.target.value
        console.log(val + "this is the value retrived")
        this.setState({
            courseName: event.target.value
        }, () => {
            console.log("New state in ASYNC callback:", this.state.courseName);
        });

        console.log("New state DIRECTLY after setState:", this.state.courseName);

    }

    updateDescription = event => {
        event.preventDefault()
        console.log(event.target.value)
        var val = event.target.value
        console.log(val + "this is the value retrived")
        this.setState({
            description: event.target.value
        }, () => {
            console.log("New state in ASYNC callback:", this.state.description);
        });

        console.log("New state DIRECTLY after setState:", this.state.description);
        console.log("New state DIRECTLY after setState:", this.state.description);
    }

    updateCategory = event => {
        event.preventDefault()
        console.log(event.target.value)
        var val = event.target.value
        console.log(val + "this is the value retrived")
        this.setState({
            category: event.target.value
        }, () => {
            console.log("New state in ASYNC callback:", this.state.category);
        });

        console.log("New state DIRECTLY after setState:", this.state.category);
        console.log("New state DIRECTLY after setState:", this.state.category);
    }
    updateDuration = event => {
        event.preventDefault()
        console.log(event.target.value)
        var val = event.target.value
        console.log(val + "this is the value retrived")
        this.setState({
            duration: parseInt(event.target.value)
        }, () => {
            console.log("New state in ASYNC callback:", this.state.duration);
        });

        console.log("New state DIRECTLY after setState:", this.state.duration);
        console.log("New state DIRECTLY after setState:", this.state.duration);
    }


    addNewCourse = (event) => {
        if ((this.state.courseName === "") || (this.state.description === "") || (this.state.category === "") || (this.state.duration === "")) {
            Swal.fire({
                position: 'middle',
                icon: 'error',
                title: 'Oops...',
                text: 'Check your inputs again!',
                timer: 1500
            })

        }

        event.preventDefault();
        let pkBody = JSON.stringify(
            {
                "courseName": this.state.courseName,
                "description": this.state.description,
                "category": this.state.category,
                "duration": this.state.duration,

            }
        );
        axios({
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
            },

            method: 'POST',
            url: 'http://localhost:3500/api/admins/createPackage',
            data: pkBody,

        })
            .then(response => {
                console.log("Arrived to send request")
                this.setState({
                    packRes: response.data
                })

            })
            .then(() => {
                Swal.fire({
                    position: 'middle',
                    icon: 'success',
                    title: 'Course Added Successfully',
                    showConfirmButton: false,
                    timer: 3500
                })
            })

            .catch((console.log("ISSUES !")))

    }


    render() {
        return (
            <div style={{ backgroundImage: 'url("https://t4.ftcdn.net/jpg/03/13/59/83/240_F_313598338_vucDG0sfBP1zryid0LG5b33gyh15Njz9.jpg")', backgroundSize: "cover", position: "relative", height: "580px" }}>
                <div className="card" style={{ opacity: 0.9, borderRadius: 30, position: 'absolute', marginTop: 45, height: 500, width: 500, justifyContent: 'center', marginLeft: 540 }} >
                    <div className="card-body">
                        <form style={{ marginLeft: 50 }}>
                            <h2 style={{ color: 'black', marginLeft:'50px' }}>Add Course Details</h2>
                            <br />
                                <div className="form-row">
                                <div className="col-md-10 mb-3">
                                    <label htmlFor="inputEmail4">Course Name</label>
                                    <input type="email" className="form-control" id="validationDefault01" placeholder="Course Name"
                                        onChange={this.updateCourseName} />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col-md-10 mb-3">
                                    <label htmlFor="inputEmail4">Description</label>
                                    <input type="email" className="form-control" id="validationDefault02" placeholder="Description"
                                        onChange={this.updateDescription} />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col-md-10 mb-3">
                                    <label htmlFor="inputEmail4">Category</label>
                                    <input type="email" className="form-control" id="inputEmail4" placeholder="Category"
                                        onChange={this.updateCategory} />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col-md-10 mb-3">
                                    <label htmlFor="validationDefault04">Duration</label>
                                    <input type="text" className="form-control" id="validationDefault04" placeholder="Duration" required
                                        onChange={this.updateDuration} />
                                </div>

                            </div>
                            <Link to = '/PackageInfo'><button onClick={this.addNewCourse} className="btn btn-primary" type="submit" style={{marginLeft:'100px'}}>Add Course</button></Link>
                        </form>
                    </div>

                </div>
                <br/>
                <br/>
                <br/>
            </div>
            
        )
    }
}
export default AddCourse;
