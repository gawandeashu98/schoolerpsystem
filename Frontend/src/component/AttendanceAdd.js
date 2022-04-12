import React from "react";
import { useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import schoolService from "../service/school.service5";
import 'bootstrap';
import './AddStudent.css';

const AttendanceAdd = () => {
    const [remark, setRemark] = useState('');
    const [rollno, setRollno] = useState('');
    const history = useHistory();
    const { date } = useParams();
    const { cls } = useParams();
    const { subject } = useParams();


    const addAttendance = (e) => {
        //e.preventDefault();
        var myrollno=parseInt(rollno)
        const attendance = { date, cls, subject, remark, myrollno };
        console.log(attendance);

        schoolService.addattendance(attendance)
            .then(response => {
                console.log('Printing timetable data', response.data);
                history.push(`/attendance/add/${date}/${cls}/${subject}`);
            })
            .catch(error => {
                console.log('Something went wrong', error);
            })
    }

    useEffect(() => {
        // init();
    }, [])

    return (
        <>
            <div class="container">
                <a href="/add-attendance" class="btn btn-primary active" >Add Attendance</a><br></br><br></br>
                <a href="/attendance-list" class="btn btn-primary ">View Attendance</a><br></br><br></br>
                <a href="/admin-dashboard" class="btn btn-primary ">Back</a>
            </div>
            <h2 class="header">Add Attendance</h2>
            <br />
            <div className="main1">
                <form>
                    <table className="table table-bordered table-striped">
                        <thead class="thead-dark">
                            <th style={{ width: "35%" }}>Roll Number</th>
                            <th>Remark</th>
                            <th>Action</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td><input type="text" value={rollno}
                                    onChange={(e) => setRollno(e.target.value)} class="form-control" id="rollno" placeholder="Roll No" /></td>
                                <td><select id="class" value={remark}
                                    onChange={(e) => setRemark(e.target.value)} class="form-control">
                                    <option selected>Choose...</option>
                                    <option value="Present" >Present</option>
                                    <option value="Absent" >Absent</option>
                                </select></td>
                                {/* <td><Link type="submit" class="btn btn-info ml-2" to={`/attendance/add/${date}/${cls}/${subject}`}>Add</Link></td> */}
                                <td><button type="submit" onClick={(e) => addAttendance(e)} class="btn btn-primary">Add</button></td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        </>

    );
}

export default AttendanceAdd;