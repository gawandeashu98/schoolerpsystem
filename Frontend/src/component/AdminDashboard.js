import React from "react";
import 'bootstrap';
import './AdminDashboard.css';
import { PersonPlusFill, Mortarboard, GraphUpArrow, Table, PersonCircle, Person, PersonFill, BellFill, CalendarWeekFill } from 'react-bootstrap-icons';
import { useHistory, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons'

const AdminDashboard = () => {
    const history = useHistory();
    const logOutHandler = () => {

        localStorage.clear();
        //window.location.href = 'http://localhost:3000/admin-login';
        history.push("/admin-login")
    }

    return (
        <>
            <div style={{ textAlign: "right", fontSize: "30px", marginRight: "50px" }} >

                <h4><span style={{ fontSize: "2rem" }}><PersonFill /></span> {localStorage.getItem('name')} {localStorage.getItem('lname')} </h4>
                <span style={{ fontSize: "17px" }}>{localStorage.getItem('username')}</span>

            </div>
            <div style={{ textAlign: "right", fontSize: "30px", marginRight: "50px" }}><button type="submit" onClick={() => logOutHandler()} class="btn btn-primary">Log Out</button></div>
            <hr></hr>
            <div class="admindashboard">
                <div class="admin">
                    <div class="card text-white bg-secondary  mb-2" style={{ maxWidth: "14rem" }}>
                        <div class="card-header" style={{ textAlign: "center" }}><h4>Your Profile</h4></div>
                        <div class="card-body">
                            {/* <p class="card-title">Add new admin to the board </p> */}
                            <p class="card-text">View, Edit / Update personal information.</p>
                            {/* <a href="/edit-admin" class="btn btn-light">Profile</a> */}
                            <Link type="submit" class="btn btn-light ml-2" to={`/admin/edit/${localStorage.getItem('id')}`}>Profile</Link>
                            <span style={{ fontSize: "3rem", paddingLeft: "50px" }}><PersonCircle /></span>
                        </div>
                    </div>
                </div>
                <div class="admin">
                    <div class="card text-white bg-info mb-2" style={{ maxWidth: "14rem" }}>
                        <div class="card-header" style={{ textAlign: "center" }}><h4> Admin</h4></div>
                        <div class="card-body">
                            {/* <p class="card-title">Add new admin to the board </p> */}
                            <p class="card-text">Details to be filled are important. Fill the details carefully</p>
                            <a href="/admin-section" class="btn btn-light">Add</a>
                            <span style={{ fontSize: "3rem", paddingLeft: "50px" }}><PersonPlusFill /></span>
                        </div>
                    </div>
                </div>
                <div class="student">
                    <div class="card text-white bg-warning mb-2" style={{ maxWidth: "14rem" }}>
                        <div class="card-header" style={{ textAlign: "center" }}><h4>Student</h4></div>
                        <div class="card-body">
                            <p class="card-text">Add new student details and update the perticular student details.</p>
                            <a href="/student-section" class="btn btn-light">Add</a>
                            <span style={{ fontSize: "3rem", paddingLeft: "50px", color: "white" }}><Mortarboard /></span>
                        </div>
                    </div>
                </div>
                <div class="result">
                    <div class="card text-white bg-danger mb-2" style={{ maxWidth: "14rem" }}>
                        <div class="card-header" style={{ textAlign: "center" }}><h4>Result</h4></div>
                        <div class="card-body">
                            <p class="card-text">Add obtained marks of student in perticular subject.</p>
                            <a href="/result-section" class="btn btn-light">Add</a>
                            <span style={{ fontSize: "3rem", paddingLeft: "50px", color: "white" }}><GraphUpArrow /></span>
                        </div>
                    </div>
                </div>
                <div class="result">
                    <div class="card text-white bg-success mb-2" style={{ maxWidth: "14rem" }}>
                        <div class="card-header" style={{ textAlign: "center" }}><h4>Attendance</h4></div>
                        <div class="card-body">
                            <p class="card-text">Mark the attendance of student in perticulat subject.</p>
                            <a href="/student-attendance" class="btn btn-light">Add</a>
                            <span style={{ fontSize: "3rem", paddingLeft: "50px", color: "white" }}><CalendarWeekFill /></span>
                        </div>
                    </div>
                </div>
                <div class="result">
                    <div class="card text-white bg-dark  mb-2" style={{ maxWidth: "14rem" }}>
                        <div class="card-header" style={{ textAlign: "center" }}><h4>Notice</h4></div>
                        <div class="card-body">
                            <p class="card-text">Add upcoming events, opportunities and achievements in school.</p>
                            <a href="/noticeboard" class="btn btn-light">Notice</a>
                            <span style={{ fontSize: "3rem", paddingLeft: "50px", color: "white" }}><BellFill /></span>
                        </div>
                    </div>
                </div>
                <div class="result">
                    <div class="card text-white bg-primary  mb-2" style={{ maxWidth: "14rem" }}>
                        <div class="card-header" style={{ textAlign: "center" }}><h4>Faculty</h4></div>
                        <div class="card-body">
                            <p class="card-text">Add new faculty details and update the perticular faculty details.</p>
                            <a href="/faculty-section" class="btn btn-light">Faculty</a>
                            {/* <span style={{ fontSize: "3rem", paddingLeft: "50px", color: "white" }}><BellFill /></span> */}
                            <span style={{ fontSize: "3rem", paddingLeft: "30px", color: "white" }}><FontAwesomeIcon icon={faChalkboardTeacher} /></span>
                        </div>
                    </div>
                </div>
                <div class="student">
                    <div class="card text-white bg-success mb-2" style={{ maxWidth: "14rem" }}>
                        <div class="card-header" style={{ textAlign: "center" }}><h4>Time Table</h4></div>
                        <div class="card-body">
                            <p class="card-text">Add or Update schedule and session for perticular class.</p>
                            <a href="/timetable-section" class="btn btn-light">Add</a>
                            <span style={{ fontSize: "3rem", paddingLeft: "50px", color: "white" }}><Table/></span>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default AdminDashboard;