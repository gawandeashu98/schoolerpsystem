import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import schoolService from "../service/school.service";
import 'bootstrap';
import './Signup.css';

const Signup = () => {
    const [fname, setFName] = useState('');
    const [lname, setLName] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [address, setAddress] = useState('');
    const [contact, setContact] = useState('');
    const history = useHistory();

    const addAdmin = (e) => {
        e.preventDefault();

        const admin = { fname, lname, userName, password, address, contact };
        schoolService.addadmin(admin)
            .then(response => {
                console.log("admin verified ", response.data);
                history.push("/admin-section");
            })
            .catch(error => {
                console.log('something went wrong', error);

            })
    }

    useEffect(() => {
    }, [])
    return (
        <>
            <div class="container">
                <a href="/add-admin" class="btn btn-primary active" >Add New Admin</a><br></br><br></br>
                <a href="/admin-list" class="btn btn-primary">List of Admins</a><br></br><br></br>
            <a href="/admin-dashboard" class="btn btn-primary">Back</a>
            </div>
            <h2 class="header">Admin Registration Form</h2>
            <br />
            <div class="signup">
                <form>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="firstname">First Name</label>
                            <input type="text" value={fname}
                                onChange={(e) => setFName(e.target.value)} class="form-control" id="firstname" placeholder="First Name" />
                        </div>
                        <div class="form-group col-md-6">
                            <label for="lastname">Last Name</label>
                            <input type="text" value={lname}
                                onChange={(e) => setLName(e.target.value)} class="form-control" id="lastname" placeholder="Last Name" />
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="inputAddress">Address </label>
                        <input type="text" value={address}
                            onChange={(e) => setAddress(e.target.value)} class="form-control" id="inputAddress" placeholder="Apartment, studio, or floor" />
                    </div>
                    <div class="form-group">
                        <label for="inputContact">Contact </label>
                        <input type="text" value={contact}
                            onChange={(e) => setContact(e.target.value)} class="form-control" id="inputContact" placeholder="Contact number" />
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="username">User Name</label>
                            <input type="text" value={userName}
                                onChange={(e) => setUserName(e.target.value)} class="form-control" id="username" placeholder="User Name" />
                        </div>
                        <div class="form-group col-md-6">
                            <label for="password">Password</label>
                            <input type="text" value={password}
                                onChange={(e) => setPassword(e.target.value)} class="form-control" id="password" placeholder="Password" />
                        </div>
                    </div>
                    <button type="submit" onClick={(e) => addAdmin(e)} class="btn btn-primary">Register</button>
                </form>
            </div>
        </>
    );
}

export default Signup;