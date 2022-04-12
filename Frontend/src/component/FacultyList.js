import React from "react";
import 'bootstrap';
import { Search } from 'react-bootstrap-icons';
import { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import schoolService from "../service/school.service3";
import './StudentList.css';

const FacultyList = () => {
    const [id, setId] = useState('');
    const [faculties, setFaculties] = useState([]);

    const init = () => {
        schoolService.getAll()
            .then(response => {
                console.log('Printing faculties data', response.data);
                setFaculties(response.data);
            })
            .catch(error => {
                console.log('Something went wrong', error);
            })
    }

    const deleteFaculty = (id) => {
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
                <a href="/add-faculty" class="btn btn-primary" >Add New Faculty</a><br></br><br></br>
                <a href="/faculty-list" class="btn btn-primary active">List of Faculties</a><br></br><br></br>
                <a href="/admin-dashboard" class="btn btn-primary">Back</a>
            </div>
            <div class="main">
                <div class="search-container" style={{ textAlign: "center", width: "100%" }}>
                    <form >
                        <input type="text" value={id}
                            onChange={(e) => setId(e.target.value)}
                            placeholder="Search Registration No.." class="form-controler" style={{ width: "50%" }} />
                        <Link type="submit" to={`/faculty/find/${id}`} style={{ width: "2%", fontSize: "1.4rem" }}><Search /></Link>
                    </form>

                </div>
                <br></br>
            </div>
            <div className="main2">
                <h3 style={{ textAlign: "center" }}>List of Faculties</h3>
                <hr />
                <div>
                    <table className="table table-bordered table-striped">
                        <thead class="table-dark">
                            <tr>
                                <th>Registraion No</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Contact</th>
                                <th>Address</th>
                                <th>Expertise</th>
                                <th>Experience</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                faculties.map(faculty => (
                                    <tr key={faculty.id}>
                                        <td>{faculty.id}</td>
                                        <td>{faculty.fname}</td>
                                        <td>{faculty.lname}</td>
                                        <td>{faculty.contact}</td>
                                        <td>{faculty.address}</td>
                                        <td>{faculty.expertise}</td>
                                        <td>{faculty.experience}</td>
                                        <td>
                                            <button type="submit" onClick={() => deleteFaculty(faculty.id)} class="btn btn-danger">Release</button>
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

export default FacultyList;