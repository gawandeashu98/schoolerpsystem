import React from "react";
import 'bootstrap';
import { useState } from "react";
import { Search } from 'react-bootstrap-icons';
import { Link, useHistory, useParams ,redirect, Redirect} from "react-router-dom";
import { Component, useEffect } from "react/cjs/react.development";
import schoolService from "../service/school.service4";
import './StudentList.css';
import './AddStudent.css';
import {useNavigate} from 'react-router-dom'

const TimetableEdit = () => {
    const [date, setDate] = useState('');
    const [cls, setClass] = useState('');
    const [subject, setSubject] = useState('');
    const [time, setTime] = useState('');
    const [fname, setFName] = useState('');
    const [lname, setLName] = useState('');
    const history = useHistory();
    const { id } = useParams();

    const saveTimetable = (e) => {
        e.preventDefault();

        const timetable = { id, date, cls, subject, time, fname, lname };
        if (id) {
            //update
            schoolService.update(timetable)
                .then(response => {
                    console.log('Timetable data updated successfully', response.data);
                    history.push(`/timetable/find/${date}/${cls}`);
                })
                .catch(error => {
                    console.log('Something went wrong', error);
                })
        }
    }

    useEffect(() => {
        if (id) {
            schoolService.gettimetable(id)
                .then(timetable => {
                    setDate(timetable.data.date);
                    setClass(timetable.data.cls);
                    setSubject(timetable.data.subject);
                    setTime(timetable.data.time);
                    setFName(timetable.data.assignedFaculty.fname);
                    setLName(timetable.data.assignedFaculty.lname);
                })
                .catch(error => {
                    console.log('Something went wrong', error);
                })
        }
    }, [])

    return (
        <>
            <div class="container">
                <a href="/add-timetable" class="btn btn-primary " >Add Schedule</a><br></br><br></br>
                <a href="/timetable-list" class="btn btn-primary active">View Schedule</a><br></br><br></br>
                <a href="/admin-dashboard" class="btn btn-primary ">Back</a>
            </div>
            <h2 class="header">Time Table</h2>
            <br />
            <div className="main2">
                <form>
                    <table className="table table-bordered table-striped">
                        <thead class="thead-dark">
                            <th style={{ width: "13.7%" }}>Class</th>
                            <th>Subject</th>
                            <th>Date</th>
                            <th>Time (From-To)</th>
                            <th>Faculty First Name</th>
                            <th>Faculty Last Name</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td><select id="class" value={cls}
                                    onChange={(e) => setClass(e.target.value)} class="form-control">
                                    <option selected>Choose...</option>
                                    <option value="Std. I" >Std. I</option>
                                    <option value="Std. II" >Std. II</option>
                                    <option value="Std. III" >Std. III</option>
                                    <option value="Std. IV" >Std. IV</option>
                                    <option value="Std. V" >Std. V</option>
                                    <option value="Std. VI" >Std. VI</option>
                                    <option value="Std. VII" >Std. VII</option>
                                    <option value="Std. VIII" >Std. VIII</option>
                                    <option value="Std. IX" >Std. IX</option>
                                    <option value="Std. X" >Std. X</option>
                                </select></td>
                                <td> <input type="text" value={subject}
                                    onChange={(e) => setSubject(e.target.value)} class="form-control" id="subject" placeholder="Subject" /></td>
                                <td><input type="text" value={date}
                                    onChange={(e) => setDate(e.target.value)} class="form-control" id="date" placeholder="YYYY-mm-dd" /></td>
                                <td><input type="text" value={time}
                                    onChange={(e) => setTime(e.target.value)} class="form-control" id="time" placeholder="Time" /></td>
                                <td><input type="text" value={fname}
                                    onChange={(e) => setFName(e.target.value)} class="form-control" id="fname" placeholder="First Name" /></td>
                                <td><input type="text" value={lname}
                                    onChange={(e) => setLName(e.target.value)} class="form-control" id="lname" placeholder="Last Name" /></td>
                            </tr>
                        </tbody>
                    </table>
                </form>
                <button type="submit" onClick={(e) => saveTimetable(e)} class="btn btn-primary">Save</button>
            </div>
        </>
    );
}

export default TimetableEdit;