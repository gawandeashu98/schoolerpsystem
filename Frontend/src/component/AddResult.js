import React from "react";
import 'bootstrap';
import { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import schoolService from "../service/school.service4";
import './StudentList.css';

const AddResult = () => {
    const [date, setDate] = useState('');
    const [cls, setClass] = useState('');
    const [subject, setSubject] = useState('');
    const [semester, setSemester] = useState('');

    useEffect(() => {
    }, [])

    return (
        <>
            <div class="container">
                <a href="/add-result" class="btn btn-primary active" >Add Result</a><br></br><br></br>
                <a href="/result-list" class="btn btn-primary ">View Result</a><br></br><br></br>
                <a href="/admin-dashboard" class="btn btn-primary ">Back</a>
            </div>
            <h2 class="header">Add Result</h2>
            <br />
            <div className="main2">
                <form>
                    <table className="table table-bordered table-striped">
                        <thead class="thead-dark">
                            <th>Date</th>
                            <th>Semester</th>
                            <th>Class</th>
                            <th>Subject</th>
                            <th>Action</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td><input type="text" value={date}
                                    onChange={(e) => setDate(e.target.value)} class="form-control" id="date" placeholder="YYYY-mm-dd" /></td>
                                <td><select id="class" value={semester}
                                    onChange={(e) => setSemester(e.target.value)} class="form-control">
                                    <option selected>Choose...</option>
                                    <option value="1" >First Semester</option>
                                    <option value="2" >Second Semester</option>
                                </select></td>
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
                                <td><input type="text" value={subject}
                                    onChange={(e) => setSubject(e.target.value)} class="form-control" id="subject" placeholder="Subject" /></td>
                                <td><Link type="submit" class="btn btn-info ml-2" to={`/result/add/${date}/${cls}/${subject}/${semester}`}>Add</Link></td>

                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        </>
    );
}

export default AddResult;