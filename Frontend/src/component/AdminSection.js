import React from "react";
import 'bootstrap';
import logo from './casual-life-3d-15.png';

const AdminSection = () => {
    return (
        <>
            <div class="container">
                <a href="/add-admin" class="btn btn-primary" >Add New Admin</a><br></br><br></br>
                <a href="/admin-list" class="btn btn-primary">List of Admins</a><br></br><br></br>
                <a href="/admin-dashboard" class="btn btn-primary">Back</a>

            </div>
            <div>
                <img src={logo} style={{ height: "400px", marginLeft: "500px" }} />
            </div>
        </>
    );
}

export default AdminSection;