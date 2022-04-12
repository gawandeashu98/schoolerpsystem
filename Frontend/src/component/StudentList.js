import React from "react";
import 'bootstrap';
import { Search } from 'react-bootstrap-icons';
import { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import schoolService from "../service/school.service1";
import './StudentList.css';
import logo from './casual-life-3d-reading.png';

const StudentList = () => {
    const [id, setId] = useState('');
    const [students, setStudents] = useState([]);

    const init = () => {
        schoolService.getAll()
            .then(response => {
                console.log('Printing students data', response.data);
                setStudents(response.data);
            })
            .catch(error => {
                console.log('Something went wrong', error);
            })
    }


    useEffect(() => {
        init();
    }, [])
    return (
        <>
            <div class="container">
                <a href="/add-student" class="btn btn-primary" >Add New Student</a><br></br><br></br>
                <a href="/student-list" class="btn btn-primary active">List of Students</a><br></br><br></br>
                <a href="/student-pramote" class="btn btn-primary ">Promote Student</a><br></br><br></br>
                <a href="/admin-dashboard" class="btn btn-primary">Back</a>

            </div>
            <div class="main">
                <div class="search-container" style={{ textAlign: "center", width: "100%" }}>
                    <form >
                        <input type="text" value={id}
                            onChange={(e) => setId(e.target.value)}
                            placeholder="Search Roll No.." class="form-controler" style={{ width: "50%" }} />
                        {/* <button type="submit" onClick={(e) => findStudent(e)}><Search /></button> */}
                        <Link type="submit" to={`/student/find/${id}`} style={{ width: "2%", fontSize: "1.4rem" }}><Search /></Link>
                    </form>

                </div>
                <br></br>
                {/* <div>
                    <img src={logo} style={{ height: "400px", marginLeft: "200px", marginTop: "10px" }} />
                </div> */}
            </div>
            {/* <div class="form-group">
                <label for="inputAddress">Address </label>
                <input type="text" value={address}
                    onChange={(e) => setAddress(e.target.value)} class="form-control" id="inputAddress" placeholder="Apartment, studio, or floor" />
            </div>
            <button type="submit" onClick={(e) => addAdmin(e)} class="btn btn-primary">Register</button> */}
            <div className="main1">
                <h3 style={{textAlign:"center"}}>List of Students</h3>
                <hr />
                <div>
                    <table className="table table-bordered table-striped">
                        <thead class="table-dark">
                            <tr>
                                <th>Roll No</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Contact</th>
                                <th>Address</th>
                                <th>Class</th>
                                <th>Division</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                students.map(student => (
                                    <tr key={student.id}>
                                        <td>{student.id}</td>
                                        <td>{student.fname}</td>
                                        <td>{student.lname}</td>
                                        <td>{student.contact}</td>
                                        <td>{student.address}</td>
                                        <td>{student.cls}</td>
                                        <td>{student.division}</td>
                                        {/* <td>
                                            <Link className="btn btn-info" to={`/employees/edit/${employee.id}`}>Update</Link>

                                            <button className="btn btn-danger ml-2" onClick={() => { handleDelete(employee.id); }}>Delete</button>
                                        </td> */}
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

export default StudentList;