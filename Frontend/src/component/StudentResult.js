import React from "react";
import 'bootstrap';
import { useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import schoolService from "../service/school.service6";
import 'bootstrap';
import './AddStudent.css';

const StudentResult = () => {
    const [remark, setRemark] = useState('');
    const [rollno, setRollno] = useState('');
    const [obt_marks, setObtmarks] = useState('');
    const [total1, setTotal] = useState('');
    const history = useHistory();
    const { date } = useParams();
    const { cls } = useParams();
    const { subject } = useParams();
    const { semester } = useParams();

    const addResult = (e) => {
        //e.preventDefault();
        var myrollno = parseInt(rollno);
        var examid = parseInt(semester);
        var total = parseInt(total1);
        var obtmarks = parseInt(obt_marks);
        const result = { cls, subject, date, obtmarks, total, remark, examid, myrollno };
        console.log(result);

        schoolService.addresult(result)
            .then(response => {
                console.log('Printing timetable data', response.data);
                history.push(`/result/add/${date}/${cls}/${subject}/${semester}`);
            })
            .catch(error => {
                console.log('Something went wrong', error);
            })
    }

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
                            <th style={{ width: "25%" }}>Roll Number</th>
                            <th>Obtained Marks</th>
                            <th>Total Marks</th>
                            <th>Remark</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td><input type="text" value={rollno}
                                    onChange={(e) => setRollno(e.target.value)} class="form-control" id="rollno" placeholder="Roll No" /></td>
                                <td><input type="text" value={obt_marks}
                                    onChange={(e) => setObtmarks(e.target.value)} class="form-control" id="obtmarkss" placeholder="Obtained Marks" /></td>
                                <td><input type="text" value={total1}
                                    onChange={(e) => setTotal(e.target.value)} class="form-control" id="total" placeholder="Total Marks" /></td>
                                <td><select id="class" value={remark}
                                    onChange={(e) => setRemark(e.target.value)} class="form-control">
                                    <option selected>Choose...</option>
                                    <option value="Pass" >Pass</option>
                                    <option value="Fail" >Fail</option>
                                </select></td>
                            </tr>
                        </tbody>
                    </table>
                    <button type="submit" onClick={(e) => addResult(e)} class="btn btn-primary">Add</button>
                </form>
            </div>
        </>
    );
}

export default StudentResult;