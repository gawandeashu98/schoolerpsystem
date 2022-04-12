import React from "react";
import 'bootstrap';
import './Hover.css';
import './Menubar.css';
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

const Menubar = () => {
    return (
        <div >
            <hr />
            <div >
                {/* <nav class="navbar navbar-expand-lg navbar-dark bg-dark" style={{ float: "left" }}>
                    <a class="navbar-brand" href="/">
                        <img src="http://www.sts-school.edu.in/wp-content/uploads/2019/10/Best-School-in-Meerut-1.png" width="120" height="120" alt="logo" style={{ marginLeft: '80px' }} />
                    </a>
                </nav> */}

                <nav class="navbar navbar-expand-lg navbar-light bg-light" >
                    <a class="navbar-brand" href="/">
                        <img src="http://www.sts-school.edu.in/wp-content/uploads/2019/10/Best-School-in-Meerut-1.png" width="120" height="120" alt="logo" style={{ marginLeft: '80px' }} />
                    </a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="menubar">
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav mr-auto mt-2 mt-lg-0 " style={{ marginLeft: '100px' }} >
                                {/* <div class="nav nav-pills nav-fill"> */}
                                <li className="nav-item">
                                    <a class="nav-item nav-link" href="/home" >Home</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false" >About us</a>
                                    <div className="dropdown-menu">
                                        <a className="dropdown-item" href="/aboutus">About School</a>
                                        <a className="dropdown-item" href="/infrastructure">Infrastructure</a>
                                    </div>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="/#" role="button" aria-haspopup="true" aria-expanded="false" >Administration</a>
                                    <div className="dropdown-menu">
                                        <a className="dropdown-item" href="/managementcommittee">Management Committee</a>
                                        <a className="dropdown-item" href="/principaldetails">Principal Details</a>
                                        <a className="dropdown-item" href="/staffdetails">Staff Details</a>
                                        <a className="dropdown-item" href="/studentsenrolled">Students Enrolled</a>
                                    </div>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="/#" role="button" aria-haspopup="true" aria-expanded="false">Academics</a>
                                    <div className="dropdown-menu">
                                        <a className="dropdown-item" href="/circular">Circular</a>
                                        <a className="dropdown-item" href="/holiday">Holiday List</a>
                                    </div>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="/#" role="button" aria-haspopup="true" aria-expanded="false">Facilities</a>
                                    <div className="dropdown-menu">
                                        <a className="dropdown-item" href="/cafeteria">Cafeteria</a>
                                        <a className="dropdown-item" href="/hostel">Hostel</a>
                                        <a className="dropdown-item" href="/library">Library</a>
                                        <a className="dropdown-item" href="/medical">Medical</a>
                                        <a className="dropdown-item" href="/transport">Transport</a>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/gallery">Gallery</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/login">Login</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/contactus">Contact Us</a>
                                </li>
                                {/* </div> */}
                            </ul>
                        </div>
                    </div>
                </nav>

            </div>
            <hr />
        </div>
    );
}

export default Menubar;