import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import schoolService from "../service/school.service3";
import 'bootstrap';
import './Signup.css';


const AddFaculty = () => {
    const [fname, setFName] = useState('');
    const [lname, setLName] = useState('');
    const [gender, setGender] = useState('');
    const [email, setEmail] = useState('');
    const [contact, setContact] = useState('');
    const [expertise, setExpertise] = useState('');
    const [experience, setExperience] = useState('');
    const [address, setAddress] = useState('');
    const history = useHistory();

    const addFaculty = (e) => {
        e.preventDefault();

        const faculty = { fname, lname, gender, email, contact, expertise, experience, address };
        schoolService.addfaculty(faculty)
            .then(response => {
                console.log("faculty verified ", response.data);
                history.push("/faculty-list");
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
                <a href="/add-faculty" class="btn btn-primary active" >Add New Faculty</a><br></br><br></br>
                <a href="/faculty-list" class="btn btn-primary">List of Faculties</a><br></br><br></br>
                <a href="/admin-dashboard" class="btn btn-primary">Back</a>
            </div>
            <h2 class="header">Faculty Registration Form</h2>
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
                    <div class="form-row">
                        <div class="form-group col-md-3">
                            <label for="gender">Gender</label>
                            <select id="gender" value={gender}
                                onChange={(e) => setGender(e.target.value)} class="form-control">
                                <option selected>Choose...</option>
                                <option value="Male" >Male</option>
                                <option value="Female">Female</option>
                            </select>
                        </div>
                        <div class="form-group col-md-5">
                            <label for="email">Email</label>
                            <input type="text" value={email}
                                onChange={(e) => setEmail(e.target.value)} class="form-control" id="email" placeholder="Email" />
                        </div>
                        <div class="form-group col-md-4">
                            <label for="inputContact">Contact </label>
                            <input type="text" value={contact}
                                onChange={(e) => setContact(e.target.value)} class="form-control" id="inputContact" placeholder="Contact number" />
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="inputAddress">Address </label>
                        <input type="text" value={address}
                            onChange={(e) => setAddress(e.target.value)} class="form-control" id="inputAddress" placeholder="Apartment, studio, or floor" />
                    </div>

                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="expertise">Expertise</label>
                            <input type="text" value={expertise}
                                onChange={(e) => setExpertise(e.target.value)} class="form-control" id="expertise" placeholder="Expertise" />
                        </div>
                        <div class="form-group col-md-6">
                            <label for="experience">Experience</label>
                            <input type="text" value={experience}
                                onChange={(e) => setExperience(e.target.value)} class="form-control" id="experience" placeholder="Experience" />
                        </div>
                    </div>
                    <button type="submit" onClick={(e) => addFaculty(e)} class="btn btn-primary">Register</button>
                </form>
            </div>
        </>
    );
}

export default AddFaculty;