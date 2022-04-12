import React from "react";
import 'bootstrap';
import logo from './casual-life-3d-reading.png';

const ResultSection = () => {
    return (
        <>
            <div class="container">
                <a href="/add-result" class="btn btn-primary " >Add Result</a><br></br><br></br>
                <a href="/result-list" class="btn btn-primary ">View Result</a><br></br><br></br>
                <a href="/admin-dashboard" class="btn btn-primary ">Back</a>
            </div>
            <div>
                <img src={logo} style={{ height: "400px", marginLeft: "500px" }} />
            </div>
        </>
    );
}

export default ResultSection;