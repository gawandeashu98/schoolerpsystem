import React from "react";
import 'bootstrap';
import { useState } from "react";
import { Link, useHistory, useParams, redirect, Redirect } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import schoolService from "../service/school.service6";
import './StudentList.css';

const ResultEdit = () => {
    const [date, setDate] = useState('');
    const [cls, setClass] = useState('');
    const [subject, setSubject] = useState('');
    const [obtmarks1, setObtmarks] = useState('');
    const [total1, setTotal] = useState('');
    const [remark, setRemark] = useState('');
    const [semester, setSemester] = useState('');
    const [fname, setFName] = useState('');
    const [lname, setLName] = useState('');
    const history = useHistory();
    const { id } = useParams();

    const saveResult = (e) => {
        e.preventDefault();
        var obtmarks = parseInt(obtmarks1);
        var total = parseInt(total1);
        const result = { id, cls, subject, date, obtmarks, total, remark, fname, lname };
        console.log(result);
        console.log(semester);
        if (id) {
            //update
            schoolService.update(result)
                .then(response => {
                    console.log('Result data updated successfully', response.data);
                    history.push(`/result/view/${semester.id}/${cls}/${subject}`);
                })
                .catch(error => {
                    console.log('Something went wrong', error);
                })
        }
    }

    useEffect(() => {
        if (id) {
            schoolService.getresultbyid(id)
                .then(result => {
                    setClass(result.data.cls);
                    setSubject(result.data.subject);
                    setDate(result.data.date);
                    setObtmarks(result.data.obt_marks);
                    setTotal(result.data.total);
                    setRemark(result.data.remark);
                    setSemester(result.data.examId);
                    setFName(result.data.rollNo.fname);
                    setLName(result.data.rollNo.lname);
                })
                .catch(error => {
                    console.log('Something went wrong', error);
                })
        }
    }, [])
    return (
        <>
            <div class="container">
                <a href="/add-result" class="btn btn-primary " >Add Result</a><br></br><br></br>
                <a href="/result-list" class="btn btn-primary active">View Result</a><br></br><br></br>
                <a href="/admin-dashboard" class="btn btn-primary ">Back</a>
            </div>
            <h2 class="header">View Result</h2>
            <br />
            <div className="main2">
                <form>
                    <table className="table table-bordered table-striped">
                        <thead class="thead-dark">
                            <th style={{ width: "15%" }}>Date</th>
                            <th style={{ width: "12%" }}>Class</th>
                            <th style={{ width: "11%" }}>Subject</th>
                            <th style={{ width: "13%" }}>First name</th>
                            <th style={{ width: "13%" }}>Last Name</th>
                            <th style={{ width: "10%" }}>Obtained Marks</th>
                            <th style={{ width: "10%" }}>Total Marks</th>
                            <th style={{ width: "10%" }}>Remark</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td><input type="text" value={date}
                                    onChange={(e) => setDate(e.target.value)} class="form-control" id="date" placeholder="YYYY-mm-dd" /></td>
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
                                <td><input type="text" value={fname}
                                    onChange={(e) => setFName(e.target.value)} class="form-control" id="fname" placeholder="First Name" /></td>
                                <td><input type="text" value={lname}
                                    onChange={(e) => setLName(e.target.value)} class="form-control" id="lname" placeholder="Last Name" /></td>
                                <td><input type="text" value={obtmarks1}
                                    onChange={(e) => setObtmarks(e.target.value)} class="form-control" id="obtmarks" placeholder="Obtained Marks" /></td>
                                <td><input type="text" value={total1}
                                    onChange={(e) => setTotal(e.target.value)} class="form-control" id="total" placeholder="Total Marks" /></td>
                                <td><input type="text" value={remark}
                                    onChange={(e) => setRemark(e.target.value)} class="form-control" id="remark" placeholder="Remark" /></td>
                            </tr>
                        </tbody>
                    </table>
                </form>
                <button type="submit" onClick={(e) => saveResult(e)} class="btn btn-primary">Save</button>
            </div>
        </>
    );
}

export default ResultEdit;