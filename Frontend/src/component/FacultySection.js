import React from "react";
import 'bootstrap';
import logo from './casual-life-3d-15.png';

const FacultySection = () => {
    return (
        <>
            <div class="container">
                <a href="/add-faculty" class="btn btn-primary" >Add New Faculty</a><br></br><br></br>
                <a href="/faculty-list" class="btn btn-primary">List of Faculties</a><br></br><br></br>
                <a href="/admin-dashboard" class="btn btn-primary">Back</a>

            </div>
            <div>
                <img src={logo} style={{ height: "400px", marginLeft: "500px" }} />
            </div>
        </>
    );
}

export default FacultySection;