import React, { Component } from 'react'
import axios from 'axios';
import { MdAccountCircle } from "react-icons/md";
import Modal from 'react-modal'
import Swal from 'sweetalert2'
import { wait } from '@testing-library/react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import { MdLanguage } from "react-icons/md";
import { SiCodefactor } from "react-icons/si";
import { CgCalendarDates } from "react-icons/cg";
import { GiCancel } from "react-icons/gi";



function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}
class PackageInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            packDetails: [],

            searchKey: "",
            searchResult: "",


            currentPkgName: "",

            showModal: false,

            courseName: '',
            description: '',
            category: '',
            duration: '',


            pkgRes: '',

            upCourseName: '',
            upDescription: '',
            upCategory: '',
            upDuration: '',

            currentPkgID: '',
            refresh: false

        };
    }
    componentDidMount() {
        this.loadData();
    }


    loadData = () => {


        let baseURL = "http://localhost:3500/api/admins/getAllPackages";
        axios({
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
            },


            method: 'GET',
            url: baseURL,


        })
            .then(response => {
                this.setState({
                    packDetails: response.data
                })
                console.log("success")
                console.log(this.state.packDetails)
                var len = this.state.packDetails.length;

                console.log(len + "this is the lenth")

            })
        //setting the auto refresh time as every 40 secs
        //.then(setInterval(this.loadData, 40000))

    }


    deletePackage = (_id) => {
        console.log("arrived to delete")
        console.log(_id + " this is id")

        let baseURL = "http://localhost:3500/api/admins/deletePackage/" + _id;

        axios({


            method: 'DELETE',
            url: baseURL,


        })

            .then(response => {
                console.log(response.status)
                if (response.status === 200) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Course deleted successfully',
                        showConfirmButton: false,
                        timer: 5000
                    })

                }

            }).then(this.doFrefresh)

    }
    doFrefresh() {
        sleep(2000);
        window.location.reload(false)
    }
    captureInput = event => {
        event.preventDefault()
        console.log(event.target.value)
        var val = event.target.value
        console.log(val + "this is the value retrived")
        this.setState({
            searchKey: event.target.value
        }, () => {
            console.log("New state in ASYNC callback:", this.state.searchKey);
        });

        console.log("New state DIRECTLY after setState:", this.state.searchKey);
        console.log("New state DIRECTLY after setState:", this.state.searchKey);
    }

    searchPackage = (event) => {


        event.preventDefault();
        axios({
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
            },

            method: 'GET',
            url: 'http://localhost:3500/api/admins/getbyPackageName/' + this.state.searchKey,
        })
            .then(response => {
                console.log("Arrived to send request")
                if (response.status === 200) {

                    this.setState({
                        searchResult: response.data
                    })
                    if (this.state.searchResult.data === null) {
                        Swal.fire({
                            position: 'middle',
                            icon: 'error',
                            title: 'Oops...',
                            text: 'No results found!',
                            timer: 1500
                        })
                    }
                    else {
                        Swal.fire({
                            position: 'middle',
                            icon: 'success',
                            title: 'Course Found',
                            showConfirmButton: false,
                            timer: 1500
                        })


                        console.log(this.state.searchResult.data.courseName)
                        this.setState({
                            currentPkgName: this.state.searchResult.data.courseName
                        })
                        console.log("this is course name  =Found=" + this.state.currentPkgName)
                    }

                }

            })
            .catch((console.log("ISSUES !")))

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

    go = (courseName, description, category, duration) => {
        this.setState({
            upCourseName: courseName,
            upDescription: description,
            upCategory: category,
            upDuration: duration,

        })

    }

    updateCoursedetails = (_id) => {

        if (this.state.courseName === "" ||
            this.state.description === "" ||
            this.state.category === "" ||
            this.state.duration === "") {
            Swal.fire({
                position: 'middle',
                icon: 'error',
                title: 'Oops...',
                text: 'Check your Inputs!',
                timer: 1500
            })
        }
        else {
            let pkgbody = JSON.stringify(
                {
                    "courseName": this.state.courseName,
                    "description": this.state.description,
                    "category": this.state.category,
                    "duration": this.state.duration

                }
            );
            axios({
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8',
                },

                method: 'PUT',
                url: 'http://localhost:3500/api/admins/updatePackage/' + _id,
                data: pkgbody,

            })
                .then(response => {
                    console.log("Arrived to send request")
                    this.setState({
                        pkgRes: response.data
                    })
                })
                .then(() => {
                    Swal.fire({
                        position: 'middle',
                        icon: 'success',
                        title: 'Package Updated Successfully!',
                        showConfirmButton: false,
                        timer: 25500
                    })
                    this.setState({
                        showModal: false
                    })
                })

                .catch((console.log("ISSUES !")))

        }

    }

    render() {

        return (
            <div style={{ backgroundImage: 'url("https://t4.ftcdn.net/jpg/02/64/92/09/240_F_264920988_8nq9NR7xQ3GlXzi3jtW5hU4wMf1g2wo0.jpg")', backgroundSize: "cover", position: "relative", height: "800px" }}>
                <div style={{ marginLeft: 50, marginRight: 50, marginBottom: 200, }}>
                    <br />
                    <h2 style={{ color: "black", fontWeight: 'bold ' }}>Course List </h2>

                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Course Name" aria-label="Search" onChange={this.captureInput} required />
                        <button className="btn btn-info my-2 my-sm-0" type="submit" onClick={this.searchPackage}>Search</button>
                    </form>
                    <br></br>

                    <table className="table table-light" style={{ height: 600, width: "100%", overflow: "auto", display: "block", opacity: 0.8 }}>


                        <thead>

                        </thead>
                        <tbody style={{ opacity: 1 }}>
                            {this.state.packDetails.map(pkg =>

                                <tr style={{ backgroundColor: this.state.currentPkgName === pkg.courseName ? '#22aeb5' : '' }} >

                                    {/* MODA for update package-------------------------------------------------------------------------------------------------------------------------------- */}
                                    <Modal isOpen={this.state.showModal}
                                        style={{
                                            overlay: {
                                                position: 'fixed',
                                                top: 0,
                                                left: 0,
                                                right: 0,
                                                bottom: 0,
                                                backgroundColor: 'rgba(255, 255, 255, 0.2)',


                                            },
                                            content: {
                                                position: 'absolute',
                                                top: '80px',
                                                left: '540px',
                                                right: '540px',
                                                bottom: '100px',
                                                border: '4px solid #ccc',
                                                background: '#fff',
                                                overflow: 'auto',
                                                borderRadius: '30px',
                                                outline: '5px',
                                                padding: '20px'
                                            }
                                        }}
                                    >
                                        <GiCancel style={{ marginLeft: 520 }} size={30} onClick={() => this.setState({ showModal: false })} />
                                        <form style={{ marginBottom: 100, marginLeft: 50 }}>
                                            <br />
                                            <br />
                                            <h2 style={{ color: 'black', marginTop: 15, marginLeft:'10px' }}>Update Course Details</h2>
                                            <br />
                                            
                                            <div style={{marginLeft:30, marginTop: 20}}>
                                            <div className="form-row">
                                                <div className="form-group col-md-12">
                                                    <label htmlFor="validationDefault02">Course Name</label>
                                                    <input type="text" className="form-control" id="validationDefault02" placeholder={this.state.upCourseName} required
                                                        onChange={this.updateCourseName} />
                                                </div>
                                            </div>
                                            <div className="form-row">
                                                <div className="form-group col-md-12">
                                                    <label htmlFor="validationDefault02">Description</label>
                                                    <input type="text" className="form-control" id="validationDefault02" placeholder={this.state.upDescription} required
                                                        onChange={this.updateDescription} />
                                                </div>
                                            </div>
                                            <div className="form-row">
                                                <div className="form-group col-md-12">
                                                    <label htmlFor="validationDefault04">Category</label>
                                                    <input type="text" className="form-control" id="validationDefault04" placeholder={this.state.upCategory}
                                                        onChange={this.updateCategory} />
                                                </div>
                                            </div>
                
                                            <div className="form-row">
                                                <div className="form-group col-md-12">
                                                    <label htmlFor="validationDefault04">Duration</label>
                                                    <input type="text" className="form-control" id="validationDefault04" placeholder={this.state.upDuration}
                                                        onChange={this.updateDuration} />
                                                </div>
                                            </div>
                                            </div>
                                            <div className="form-row">
                                                <div className="col-md-4 mb-3" style={{paddingTop: 10, marginLeft: 100}}>
                                                    <button onClick={() => this.updateCoursedetails(this.state.currentPkgID)} className="btn btn-primary" type="submit" >Update</button>
                                                </div>
                                            </div>


                                        </form>
                                        
                                    </Modal>
                                    {/* MODAL-------------------------------------------------------------------------------------------------------------------------------- */}
                                    <td style={{}}><MDBCol>
                                        <MDBCard style={{ width: "20rem", marginLeft:100, height:"23rem" }}>
                                            <MDBCardImage className="img-fluid" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJISO7RSLb52hgEwwNpKRELaAlfhojnQI5Zg&usqp=CAU" waves />
                                            <MDBCardBody>
                                                <MDBCardTitle>{pkg.courseName}</MDBCardTitle>
                                                <MDBCardText>
                                                    Some quick example text to build on the card title and make
                                                    up the bulk of the card&apos;s content.
                                              </MDBCardText>
                                                <MDBBtn href="https://www.google.com/">View more</MDBBtn>
                                            </MDBCardBody>
                                        </MDBCard>
                                    </MDBCol>
                                    </td>
                                    <td style={{ paddingLeft: 100, paddingRight:'-300',marginTop: 10 }}> <MdLanguage size={30} /> {pkg.description} <br /><br /><SiCodefactor size={20} /> {pkg.category} <br /><br /><CgCalendarDates size={30} />  {pkg.duration} Months
                                        <br /><br /> <h3>Description</h3> <br /> <h5 style={{fontSize:15}}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</h5> </td>
                                        
                                    <td style={{ paddingLeft: 100 }}> <button type="button" className="btn btn-secondary" onClick={() => {
                                        this.go(pkg.courseName, pkg.description, pkg.category, pkg.duration)
                                        this.setState({
                                            currentPkgID: pkg._id
                                        })

                                        this.setState({ showModal: true });
                                    }}>Update</button></td>

                                    <td><button type="button" onClick={() => this.deletePackage(pkg._id)} className="btn btn-light">Delete</button></td>
                                    <hr />

                                </tr>

                            )}


                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default PackageInfo;