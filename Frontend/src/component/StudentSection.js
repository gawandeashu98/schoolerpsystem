import React from "react";
import 'bootstrap';
import logo from './casual-life-3d-reading.png';

const StudentSection = () => {
    return (
        <>
            <div class="container">
                <a href="/add-student" class="btn btn-primary " >Add New Student</a><br></br><br></br>
                <a href="/student-list" class="btn btn-primary ">List of Students</a><br></br><br></br>
                <a href="/student-pramote" class="btn btn-primary ">Pramote Student</a><br></br><br></br>
                <a href="/admin-dashboard" class="btn btn-primary ">Back</a>
            </div>
            <div>
                <img src={logo} style={{ height: "400px", marginLeft: "500px" }} />
            </div>
        </>
    );
}

export default StudentSection;