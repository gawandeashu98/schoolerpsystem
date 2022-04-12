import React from "react";
import 'bootstrap';
import { useState } from "react";
import { Search } from 'react-bootstrap-icons';
import { Link, useHistory, useParams } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import schoolService from "../service/school.service";
import './StudentList.css';
import './AddStudent.css';

const StudentFind = () => {
    const [fname, setFName] = useState('');
    const [lname, setLName] = useState('');
    const [address, setAddress] = useState('');
    const [contact, setContact] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [errormsg, setErrormsg] = useState('');
    const [errormsg1, setErrormsg1] = useState('');
    const history = useHistory();

    const { id } = useParams();

    const deleteAdmin = (e) => {
        e.preventDefault();

        const admin = { id, fname, lname, userName, password, address, contact, };
        if (id) {
            //update
            schoolService.remove(id)
                .then(response => {
                    console.log('Admin data deleted successfully', response.data);
                    history.push('/admin-list');
                })
                .catch(error => {
                    console.log('Something went wrong', error);
                })
        }
    }

    useEffect(() => {
        if (id) {
            schoolService.findadmin(id)
                .then(admin => {
                    setFName(admin.data.fname);
                    setLName(admin.data.lname);
                    setUserName(admin.data.userName);
                    setPassword(admin.data.password);
                    setAddress(admin.data.address);
                    setContact(admin.data.contact);

                })
                .catch(error => {
                    console.log('Something went wrong', error);
                    setErrormsg("Invalid registration number");
                    setErrormsg1("We cannot find the admin with that registration number");
                })
        }
    }, [])

    return (
        <div >
            <div class="container">
                <a href="/add-admin" class="btn btn-primary" >Add New Admin</a><br></br><br></br>
                <a href="/admin-list" class="btn btn-primary active">List of Admin</a><br></br><br></br>
                <a href="/admin-dashboard" class="btn btn-primary">Back</a>
            </div>
            <h2 class="header">Admin Registration Form</h2>
            <br />
            <div class="signup">
                <form>
                    <div >
                        <h4 style={{ color: "rgb(226, 23, 23)" }}>{errormsg}</h4>
                        <p>{errormsg1}</p>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="firstname">First Name</label>
                            <input type="text" value={fname} readOnly
                                onChange={(e) => setFName(e.target.value)} class="form-control" id="firstname" placeholder="First Name" />
                        </div>
                        <div class="form-group col-md-6">
                            <label for="lastname">Last Name</label>
                            <input type="text" value={lname} readOnly
                                onChange={(e) => setLName(e.target.value)} class="form-control" id="lastname" placeholder="Last Name" />
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="inputAddress">Address </label>
                        <input type="text" value={address} readOnly
                            onChange={(e) => setAddress(e.target.value)} class="form-control" id="inputAddress" placeholder="Apartment, studio, or floor" />
                    </div>
                    <div class="form-group">
                        <label for="inputContact">Contact </label> 
                        <input type="text" value={contact} readOnly
                            onChange={(e) => setContact(e.target.value)} class="form-control" id="inputContact" placeholder="Contact number" />
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="username">User Name</label>
                            <input type="text" value={userName} readOnly
                                onChange={(e) => setUserName(e.target.value)} class="form-control" id="username" placeholder="User Name" />
                        </div>
                        <div class="form-group col-md-6">
                            <label for="password">Password</label>
                            <input type="password" value={password} readOnly
                                onChange={(e) => setPassword(e.target.value)} class="form-control" id="password" placeholder="Password" />
                        </div>
                    </div>
                    <button type="submit" onClick={(e) => deleteAdmin(e)} class="btn btn-danger">Delete</button>
                </form>
            </div>
        </div>
    );
}

export default StudentFind;