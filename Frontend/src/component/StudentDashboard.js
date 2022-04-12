import React from "react";
import 'bootstrap';
import './AdminDashboard.css';
import { PersonPlusFill, Mortarboard, CalendarWeekFill, GraphUpArrow, PersonCircle, Table, PersonFill,BellFill } from 'react-bootstrap-icons';
import { useHistory, Link } from "react-router-dom";

const StudentDashboard = () => {
    const history = useHistory();
    const logOutHandler = () => {

        localStorage.clear();
        //window.location.href = 'http://localhost:3000/admin-login';
        history.push("/student-login")
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
                            <p class="card-text">View, Edit / Update personal information</p>
                            {/* <a href="/edit-admin" class="btn btn-light">Profile</a> */}
                            <Link type="submit" class="btn btn-light ml-2" to={`/student/edit/${localStorage.getItem('id')}`}>Profile</Link>
                            <span style={{ fontSize: "3rem", paddingLeft: "50px" }}><PersonCircle /></span>
                        </div>
                    </div>
                </div>
                <div class="result">
                    <div class="card text-white bg-info  mb-2" style={{ maxWidth: "14rem" }}>
                        <div class="card-header" style={{ textAlign: "center" }}><h4>Notice</h4></div>
                        <div class="card-body">
                            <p class="card-text">View upcoming events, opportunities and achievements in school.</p>
                            <a href="/student-noticeboard" class="btn btn-light">Notice</a>
                            <span style={{ fontSize: "3rem", paddingLeft: "50px", color: "white" }}><BellFill /></span>
                        </div>
                    </div>
                </div>
                <div class="result">
                    <div class="card text-white bg-warning  mb-2" style={{ maxWidth: "14rem" }}>
                        <div class="card-header" style={{ textAlign: "center" }}><h4>Time Table</h4></div>
                        <div class="card-body">
                            <p class="card-text">View schedule and session for perticular class.</p>
                            <a href="/student-timetable" class="btn btn-light">View</a>
                            <span style={{ fontSize: "3rem", paddingLeft: "50px", color: "white" }}><Table/></span>
                        </div>
                    </div>
                </div>
                <div class="result">
                    <div class="card text-white bg-danger mb-2" style={{ maxWidth: "14rem" }}>
                        <div class="card-header" style={{ textAlign: "center" }}><h4>Attendance</h4></div>
                        <div class="card-body">
                            <p class="card-text">View the attendance of the student on perticulat day.</p>
                            <a href="/viewstudent-attendance" class="btn btn-light">View</a>
                            <span style={{ fontSize: "3rem", paddingLeft: "50px", color: "white" }}><CalendarWeekFill /></span>
                        </div>
                    </div>
                </div>
                <div class="result">
                    <div class="card text-white bg-success mb-2" style={{ maxWidth: "14rem" }}>
                        <div class="card-header" style={{ textAlign: "center" }}><h4>Result</h4></div>
                        <div class="card-body">
                            <p class="card-text">Mark the attendance of student in perticulat subject.</p>
                            <a href="/student-result" class="btn btn-light">Result</a>
                            <span style={{ fontSize: "3rem", paddingLeft: "50px", color: "white" }}><GraphUpArrow /></span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default StudentDashboard;