import React from "react";
import 'bootstrap';
import logo from './casual-life-3d-15.png';

const StudentAttendance = () => {
    return (
        <>
            <div class="container">
                <a href="/add-attendance" class="btn btn-primary " >Add Attendance</a><br></br><br></br>
                <a href="/attendance-list" class="btn btn-primary ">View Attendance</a><br></br><br></br>
                <a href="/admin-dashboard" class="btn btn-primary ">Back</a>
            </div>
            <div>
                <img src={logo} style={{ height: "400px", marginLeft: "500px" }} />
            </div>
        </>
    );
}

export default StudentAttendance;