import React from "react";
import 'bootstrap';
import { useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import schoolService from "../service/school.service6";
import 'bootstrap';
import './AddStudent.css';

const ViewStudentResult = () => {
    const [results, setResults] = useState([]);
    const { semester } = useParams();
    const { cls } = useParams();
    const { rollno } = useParams();

    const init = () => {
        var examid = parseInt(semester);
        var myrollno = parseInt(rollno);
        const result = { examid, myrollno, cls };
        console.log(result);
        schoolService.getresult(result)
            .then(response => {
                console.log('Printing result data', response.data);
                setResults(response.data);
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
                <a href="/student-result" class="btn btn-primary active">View Result</a><br></br><br></br>
                <a href="/student-dashboard" class="btn btn-primary ">Back</a>
            </div>
            <div className="main2">
                <h3 style={{ textAlign: "center" }}>Result</h3>
                <hr />
                <div>
                    <table className="table table-bordered table-striped">
                        <thead class="table-dark">
                            <tr>
                                <th>Date</th>
                                <th>Semester</th>
                                <th>Subject</th>
                                <th>Obtained Marks</th>
                                <th>Total Marks</th>
                                <th>Remark</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                results.map(result => (
                                    <tr key={result.id}>
                                        <td>{result.date}</td>
                                        <td>{result.examId.examType}</td>
                                        <td>{result.subject}</td>
                                        <td>{result.obt_marks}</td>
                                        <td>{result.total}</td>
                                        <td>{result.remark}</td>
                                        {/* <td><Link type="submit" class="btn btn-info ml-2" to={`/timetable/edit/${timetable.id}`}>Update</Link></td> */}
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

export default ViewStudentResult;