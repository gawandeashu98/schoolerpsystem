import React from "react";
import 'bootstrap';
import logo from './casual-life-3d-reading.png';

const TimetableSection = () => {
    return (
        <>
            <div class="container">
                <a href="/add-timetable" class="btn btn-primary " >Add Schedule</a><br></br><br></br>
                <a href="/timetable-list" class="btn btn-primary ">View Schedule</a><br></br><br></br>
                <a href="/admin-dashboard" class="btn btn-primary ">Back</a>

            </div>
            <div>
                <img src={logo} style={{ height: "400px", marginLeft: "500px" }} />
            </div>
        </>

    );
}

export default TimetableSection;