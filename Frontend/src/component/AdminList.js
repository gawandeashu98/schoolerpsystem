import React from "react";
import 'bootstrap';
import { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import schoolService from "../service/school.service";
import './StudentList.css';
import logo from './casual-life-3d-15.png';

const AdminList = () => {
    const [admins, setAdmins] = useState([]);


    const init = () => {
        schoolService.getAll()
            .then(response => {
                console.log('Printing admins data', response.data);
                setAdmins(response.data);
            })
            .catch(error => {
                console.log('Something went wrong', error);
            })
    }

    const deleteAdmin = (id) => {

        // const admin = { id, fname, lname, userName, password, address, contact, };
        if (id) {
            //delete
            schoolService.remove(id)
                .then(response => {
                    console.log('Admin data deleted successfully', response.data);
                    init();
                })
                .catch(error => {
                    console.log('Something went wrong', error);
                })
        }
    }

    useEffect(() => {
        init();
    }, [])
    return (
        <>
            <div class="container">
                <a href="/add-admin" class="btn btn-primary" >Add New Admin</a><br></br><br></br>
                <a href="/admin-list" class="btn btn-primary active">List of Admin</a><br></br><br></br>
                <a href="/admin-dashboard" class="btn btn-primary">Back</a>
            </div>
            {/* <div class="main">
                <div class="search-container" style={{ textAlign: "center", width: "100%" }}>
                    <form >
                        <input type="text" value={id}
                            onChange={(e) => setId(e.target.value)}
                            placeholder="Search Registration No.." class="form-controler" style={{ width: "50%" }} />
                        <Link type="submit" to={`/admin/find/${id}`} style={{ width: "2%", fontSize: "1.4rem" }}><Search /></Link>
                    </form>
                </div>
               
            </div> */}
             {/* <div>
                    <img src={logo} style={{ height: "400px", marginLeft: "100px", marginTop: "10px" }} />
                </div> */}
            {/* <div class="form-group">
                <label for="inputAddress">Address </label>
                <input type="text" value={address}
                    onChange={(e) => setAddress(e.target.value)} class="form-control" id="inputAddress" placeholder="Apartment, studio, or floor" />
            </div>
            <button type="submit" onClick={(e) => addAdmin(e)} class="btn btn-primary">Register</button> */}
            <div className="main2">
                <h3 style={{ textAlign: "center" }}>List of Admins</h3>
                <hr />
                <div>
                    <table className="table table-bordered table-striped">
                        <thead class="table-dark">
                            <tr>
                                <th style={{width:"15%"}}>Registraion No</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Contact</th>
                                <th>Address</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                admins.map(admin => (
                                    <tr key={admin.id}>
                                        <td>{admin.id}</td>
                                        <td>{admin.fname}</td>
                                        <td>{admin.lname}</td>
                                        <td>{admin.contact}</td>
                                        <td>{admin.address}</td>
                                        <td>
                                            {/* <Link className="btn btn-info" to={`/employees/edit/${employee.id}`}>Update</Link> */}

                                            {/* <button className="btn btn-danger ml-2" onClick={() => { handleDelete(admin.id); }}>Delete</button> */}
                                            <button type="submit" onClick={() => deleteAdmin(admin.id)} class="btn btn-danger">Release</button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>

                </div>
            </div>
        </>
    );
}

export default AdminList;