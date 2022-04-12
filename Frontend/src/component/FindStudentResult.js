import React from "react";
import { useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import schoolService from "../service/school.service5";
import 'bootstrap';
import './AddStudent.css';

const FindStudentResult = () => {
    const [rollno, setRollno] = useState('');
    const [cls, setClass] = useState('');
    const [semester, setSemester] = useState('');

    useEffect(() => {
    }, [])

    return (
        <>
            <div class="container">
                <a href="/student-dashboard" class="btn btn-primary">Back</a>
            </div>
            <h2 class="header">Result</h2>
            <br />
            <div className="main1">
                <form>
                    <table className="table table-bordered table-striped">
                        <thead class="thead-dark">
                            <th>Roll No</th>
                            <th>Semester</th>
                            <th>Class</th>
                            <th>Action</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td><input type="text" value={localStorage.getItem('id')} readOnly
                                    onChange={(e) => setRollno(e.target.value)} class="form-control" id="rollno" placeholder="Roll No" /></td>
                                <td><select id="class" value={semester}
                                    onChange={(e) => setSemester(e.target.value)} class="form-control">
                                    <option selected>Choose...</option>
                                    <option value="1" >First Semester</option>
                                    <option value="2" >Second Semester</option>
                                </select></td>
                                <td><input type="text" value={localStorage.getItem('class')} readOnly
                                    onChange={(e) => setClass(e.target.value)} class="form-control" id="class" placeholder="Class" /></td>
                                <td><Link type="submit" class="btn btn-info ml-2" to={`/student-result1/view/${localStorage.getItem('id')}/${semester}/${localStorage.getItem('class')}`}>View</Link></td>
                                {/* <td><button type="submit" onClick={(e) => viewAttendance(e)} class="btn btn-primary">Add</button></td> */}
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        </>
    );
}

export default FindStudentResult;